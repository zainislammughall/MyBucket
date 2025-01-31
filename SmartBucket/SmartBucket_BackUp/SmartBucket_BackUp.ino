/* ======================================== Including the libraries. */
#include "esp_camera.h"
#include "soc/soc.h"
#include "soc/rtc_cntl_reg.h"
#include "quirc.h"
#include <TinyGPS++.h>
#include <HardwareSerial.h>
#include <Firebase_ESP_Client.h>
#include "addons/TokenHelper.h"
#include "addons/RTDBHelper.h"
#include <WiFi.h>
#include <Base64.h>
#include <ESP32Servo.h>  // Use ESP32Servo library
/* ======================================== */

// TinyGPS++ and Serial setup
TinyGPSPlus gps;
HardwareSerial gpsSerial(1);  // Using Serial1 for GPS communication

#define RXD1 14  // Define RX pin
#define TXD1 15  // Define TX pin
#define WifiLED 2
#define QRLED 13

// Wi-Fi credentials
#define WIFI_SSID "iPhone"
#define WIFI_PASSWORD "12345678"

// Firebase credentials
#define FIREBASE_PROJECT_ID "thesmartbucketproject"
#define FIREBASE_DATABASE_URL "https://thesmartbucketproject-default-rtdb.firebaseio.com"
#define FIREBASE_API_KEY "AIzaSyCYN41dE2ssOrGBO-2ngPqFGyuGcJ8-kdQ"

// Firebase objects
FirebaseData firebaseData;
FirebaseAuth firebaseAuth;
FirebaseConfig firebaseConfig;
bool signupOK = false;

// Servo setup
Servo myServo;        // Create a Servo object
#define SERVO_PIN 12  // Define the pin for the servo motor

// creating a task handle
TaskHandle_t QRCodeReader_Task;

// Function to encode image into Base64 string
String encodeBase64(uint8_t *data, size_t length) {
  String encoded = base64::encode(data, length);
  return encoded;
}

String base64Image= "";
// Function to upload Base64 image to Firestore
void uploadImageToFirestore() {
    // Firestore document path and content
    // Firestore document path and content
    String documentPath = "images/" + String(millis()); // Unique document path
    FirebaseJson json;
    json.set("fields/base64Image/stringValue", base64Image); // Firestore requires fields format

    // Convert FirebaseJson to String
    String jsonString;
    json.toString(jsonString, true);

    // Send the document to Firestore
    if (Firebase.Firestore.createDocument(&firebaseData, FIREBASE_PROJECT_ID, "", documentPath.c_str(), jsonString.c_str())) {
        Serial.println("Image uploaded to Firestore successfully.");
    } else {
        Serial.println("Error uploading to Firestore: " + firebaseData.errorReason());
    }
}
/* ======================================== Select camera model */
#define CAMERA_MODEL_AI_THINKER
/* ======================================== */

/* ======================================== GPIO of camera models */
#if defined(CAMERA_MODEL_WROVER_KIT)
#define PWDN_GPIO_NUM -1
#define RESET_GPIO_NUM -1
#define XCLK_GPIO_NUM 21
#define SIOD_GPIO_NUM 26
#define SIOC_GPIO_NUM 27

#define Y9_GPIO_NUM 35
#define Y8_GPIO_NUM 34
#define Y7_GPIO_NUM 39
#define Y6_GPIO_NUM 36
#define Y5_GPIO_NUM 19
#define Y4_GPIO_NUM 18
#define Y3_GPIO_NUM 5
#define Y2_GPIO_NUM 4
#define VSYNC_GPIO_NUM 25
#define HREF_GPIO_NUM 23
#define PCLK_GPIO_NUM 22


#elif defined(CAMERA_MODEL_AI_THINKER)
#define PWDN_GPIO_NUM 32
#define RESET_GPIO_NUM -1
#define XCLK_GPIO_NUM 0
#define SIOD_GPIO_NUM 26
#define SIOC_GPIO_NUM 27

#define Y9_GPIO_NUM 35
#define Y8_GPIO_NUM 34
#define Y7_GPIO_NUM 39
#define Y6_GPIO_NUM 36
#define Y5_GPIO_NUM 21
#define Y4_GPIO_NUM 19
#define Y3_GPIO_NUM 18
#define Y2_GPIO_NUM 5
#define VSYNC_GPIO_NUM 25
#define HREF_GPIO_NUM 23
#define PCLK_GPIO_NUM 22
#else
#error "Camera model not selected"
#endif
/* ======================================== */

/* ======================================== Variables declaration */
struct QRCodeData {
  bool valid;
  int dataType;
  uint8_t payload[1024];
  int payloadLen;
};

struct quirc *q = NULL;
uint8_t *image = NULL;
camera_fb_t *fb = NULL;
struct quirc_code code;
struct quirc_data data;
quirc_decode_error_t err;
struct QRCodeData qrCodeData;
String QRCodeResult = "";

/* ======================================== */

/* ________________________________________________________________________________ VOID SETTUP() */
void setup() {

  // put your setup code here, to run once:
  //======================================(My Code)==========================================

  //LEDs
  pinMode (WifiLED, OUTPUT);
  pinMode (QRLED, OUTPUT);
  // Initialize GPS module
  gpsSerial.begin(9600, SERIAL_8N1, RXD1, TXD1);

  // Initialize servo motor
  myServo.attach(SERVO_PIN);
  myServo.write(0);  // Set the servo to 0 degrees initially

  // Connect to Wi-Fi
  Serial.println("Connecting to Wi-Fi...");
  WiFi.begin(WIFI_SSID, WIFI_PASSWORD);
  while (WiFi.status() != WL_CONNECTED) {
    delay(1000);
    Serial.print(".");
    digitalWrite (WifiLED, LOW);
  }
  Serial.println("\nConnected to Wi-Fi");
  digitalWrite (WifiLED, HIGH);

  // Firebase configuration
  firebaseConfig.api_key = FIREBASE_API_KEY;
  firebaseConfig.database_url = FIREBASE_DATABASE_URL;

  /* Sign up */
  if (Firebase.signUp(&firebaseConfig, &firebaseAuth, "", "")) {
    Serial.println("Firebase sign-up successful");
    signupOK = true;
  } else {
    Serial.printf("Firebase sign-up error: %s\n", firebaseConfig.signer.signupError.message.c_str());
  }

  firebaseConfig.token_status_callback = tokenStatusCallback;  // See addons/TokenHelper.h

  // Initialize Firebase
  Firebase.begin(&firebaseConfig, &firebaseAuth);
  Firebase.reconnectWiFi(true);
  Serial.println("Firebase initialized");

  Serial.println("GPS Module Test Started");

  //===================================(My Code)=============================================

  // Disable brownout detector.
  WRITE_PERI_REG(RTC_CNTL_BROWN_OUT_REG, 0);

  /* ---------------------------------------- Init serial communication speed (baud rate). */
  Serial.begin(115200);
  Serial.setDebugOutput(true);
  Serial.println();
  /* ---------------------------------------- */

  /* ---------------------------------------- Camera configuration. */
  Serial.println("Start configuring and initializing the camera...");
  camera_config_t config;
  config.ledc_channel = LEDC_CHANNEL_0;
  config.ledc_timer = LEDC_TIMER_0;
  config.pin_d0 = Y2_GPIO_NUM;
  config.pin_d1 = Y3_GPIO_NUM;
  config.pin_d2 = Y4_GPIO_NUM;
  config.pin_d3 = Y5_GPIO_NUM;
  config.pin_d4 = Y6_GPIO_NUM;
  config.pin_d5 = Y7_GPIO_NUM;
  config.pin_d6 = Y8_GPIO_NUM;
  config.pin_d7 = Y9_GPIO_NUM;
  config.pin_xclk = XCLK_GPIO_NUM;
  config.pin_pclk = PCLK_GPIO_NUM;
  config.pin_vsync = VSYNC_GPIO_NUM;
  config.pin_href = HREF_GPIO_NUM;
  config.pin_sscb_sda = SIOD_GPIO_NUM;
  config.pin_sscb_scl = SIOC_GPIO_NUM;
  config.pin_pwdn = PWDN_GPIO_NUM;
  config.pin_reset = RESET_GPIO_NUM;
  config.xclk_freq_hz = 10000000;
  config.pixel_format = PIXFORMAT_GRAYSCALE;
  config.frame_size = FRAMESIZE_QVGA;
  config.jpeg_quality = 15;
  config.fb_count = 1;

#if defined(CAMERA_MODEL_ESP_EYE)
  pinMode(13, INPUT_PULLUP);
  pinMode(14, INPUT_PULLUP);
#endif

  esp_err_t err = esp_camera_init(&config);
  if (err != ESP_OK) {
    Serial.printf("Camera init failed with error 0x%x", err);
    ESP.restart();
  }

  sensor_t *s = esp_camera_sensor_get();
  s->set_framesize(s, FRAMESIZE_QVGA);

  Serial.println("Configure and initialize the camera successfully.");
  Serial.println();
  /* ---------------------------------------- */

  /* ---------------------------------------- create "QRCodeReader_Task" using the xTaskCreatePinnedToCore() function */
  xTaskCreatePinnedToCore(
    QRCodeReader,        /* Task function. */
    "QRCodeReader_Task", /* name of task. */
    10000,               /* Stack size of task */
    NULL,                /* parameter of the task */
    1,                   /* priority of the task */
    &QRCodeReader_Task,  /* Task handle to keep track of created task */
    0);                  /* pin task to core 0 */
  /* ---------------------------------------- */
}
/* ________________________________________________________________________________ */
void loop() {

  // put your main code here, to run repeatedly:

  //===================================(My Code)=============================================

  // Read GPS data
  while (gpsSerial.available() > 0) {
    char c = gpsSerial.read();
    gps.encode(c);

    if (gps.location.isUpdated()) {
      float latitude = gps.location.lat();
      float longitude = gps.location.lng();
      String date = String(gps.date.day()) + "/" + String(gps.date.month()) + "/" + String(gps.date.year());
      String time = String(gps.time.hour()) + ":" + String(gps.time.minute()) + ":" + String(gps.time.second());

      // Log parsed GPS data
      Serial.println("Parsed GPS Data:");
      Serial.printf("Latitude: %.6f\n", latitude);
      Serial.printf("Longitude: %.6f\n", longitude);
      Serial.println("Date: " + date);
      Serial.println("Time: " + time);
      Serial.println("-----------------------------------");

      // Send data to Firebase Realtime Database
      if (Firebase.RTDB.setFloat(&firebaseData, "/GPS/Latitude", latitude)) {
        Serial.println("Latitude uploaded successfully.");
      } else {
        Serial.println("Failed to upload latitude: " + firebaseData.errorReason());
      }

      if (Firebase.RTDB.setFloat(&firebaseData, "/GPS/Longitude", longitude)) {
        Serial.println("Longitude uploaded successfully.");
      } else {
        Serial.println("Failed to upload longitude: " + firebaseData.errorReason());
      }

      if (Firebase.RTDB.setString(&firebaseData, "/GPS/Date", date)) {
        Serial.println("Date uploaded successfully.");
      } else {
        Serial.println("Failed to upload date: " + firebaseData.errorReason());
      }

      if (Firebase.RTDB.setString(&firebaseData, "/GPS/Time", time)) {
        Serial.println("Time uploaded successfully.");
      } else {
        Serial.println("Failed to upload time: " + firebaseData.errorReason());
      }
    }
  }
   

  // Check Firebase for servo state
  if (Firebase.RTDB.getString(&firebaseData, "/Servo/State")) {
    String servoState = firebaseData.stringData();
    Serial.println("Servo State: " + servoState);

    if (servoState == QRCodeResult) {
      digitalWrite (QRLED, HIGH);
     uploadImageToFirestore();
      myServo.write(90);  // Rotate servo to 90 degrees
      Serial.println("Servo moved to Open position (90 degrees)");
      QRCodeResult = "";
      delay(2500);
    }
    digitalWrite (QRLED, LOW);
    myServo.write(0);  // Rotate servo back to 0 degrees
    Serial.println("Servo moved to Close position (0 degrees)");
    delay(100);  // Add a small delay for stability
  } else {
    Serial.println("Failed to read Servo state: " + firebaseData.errorReason());
  }

   if (Firebase.RTDB.getString(&firebaseData, "/lockState")) {
    String lockState = firebaseData.stringData();
    Serial.println("Lock state: " + lockState);

    if (lockState == "false") {
      myServo.write(90);  // Rotate servo to 90 degrees
      Serial.println("Servo moved to Open position (90 degrees)");
      delay(2500);
    }
    myServo.write(0);  // Rotate servo back to 0 degrees
    Serial.println("Servo moved to Close position (0 degrees)");
    delay(100);  // Add a small delay for stability
  }


  //===================================(My Code)=============================================
}


/* ________________________________________________________________________________ */

/* ________________________________________________________________________________ The function to be executed by "QRCodeReader_Task" */
// This function is to instruct the camera to take or capture a QR Code image, then it is processed and translated into text.
void QRCodeReader(void *pvParameters) {
  /* ---------------------------------------- */
  Serial.println("QRCodeReader is ready.");
  Serial.print("QRCodeReader running on core ");
  Serial.println(xPortGetCoreID());
  Serial.println();
  /* ---------------------------------------- */

  /* ---------------------------------------- Loop to read QR Code in real time. */
  while (1) {
    q = quirc_new();
    if (q == NULL) {
      Serial.print("can't create quirc object\r\n");
      continue;
    }
 
 
    fb = esp_camera_fb_get();
    if (!fb) {
      Serial.println("Camera capture failed");
      continue;
    }
     // Encode image to Base64
   base64Image = encodeBase64(fb->buf, fb->len);

    quirc_resize(q, fb->width, fb->height);
    image = quirc_begin(q, NULL, NULL);
    memcpy(image, fb->buf, fb->len);
    quirc_end(q);

    int count = quirc_count(q);
    if (count > 0) {
      quirc_extract(q, 0, &code);
      err = quirc_decode(&code, &data);

      if (err) {
        Serial.println("Decoding FAILED");
        QRCodeResult = "Decoding FAILED";
      } else {
        Serial.printf("Decoding successful:\n");
        dumpData(&data);
      }
      Serial.println();
    }

    esp_camera_fb_return(fb);
    fb = NULL;
    image = NULL;
    quirc_destroy(q);
  }
  /* ---------------------------------------- */
}
/* ________________________________________________________________________________ */

/* ________________________________________________________________________________ Function to display the results of reading the QR Code on the serial monitor. */
void dumpData(const struct quirc_data *data) {
  Serial.printf("Version: %d\n", data->version);
  Serial.printf("ECC level: %c\n", "MLHQ"[data->ecc_level]);
  Serial.printf("Mask: %d\n", data->mask);
  Serial.printf("Length: %d\n", data->payload_len);
  Serial.printf("Payload: %s\n", data->payload);

  QRCodeResult = (const char *)data->payload;
}
/* ________________________________________________________________________________ */
//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
