#include <TinyGPS++.h>
#include <HardwareSerial.h>
#include <FirebaseESP32.h>

// TinyGPS++ and Serial setup
TinyGPSPlus gps;
HardwareSerial gpsSerial(1);  // Using Serial1 for GPS communication

#define RXD1 14
#define TXD1 15

FirebaseData firebaseData;
FirebaseAuth firebaseAuth;
FirebaseConfig firebaseConfig;
bool signupOK = false;

// Firebase setup
#define WIFI_SSID "King XI "
#define WIFI_PASSWORD "Houseno162D"
#define FIREBASE_HOST "https://thesmartbucketproject-default-rtdb.firebaseio.com/"
#define FIREBASE_AUTH "uj4mhqbgsF7qeGRzPUN2pTNpY8Jrk6oO4i7QktZ0"



FirebaseConfig.host = FIREBASE_HOST;
FirebaseConfig.auth = FIREBASE_AUTH

FirebaseData firebaseData;

void setup() {
  Serial.begin(115200);         // Debugging output
  gpsSerial.begin(9600, SERIAL_8N1, RXD1, TXD1);  // RX = GPIO16, TX = GPIO17

  // Connect to Wi-Fi
  Serial.println("Connecting to Wi-Fi...");
  WiFi.begin(WIFI_SSID, WIFI_PASSWORD);
  while (WiFi.status() != WL_CONNECTED) {
    delay(1000);
    Serial.print(".");
  }
  Serial.println("\nConnected to Wi-Fi");

  // Initialize Firebase

  Serial.println("Firebase initialized");

  Serial.println("GPS Module Test Started");
}

void loop() {
  while (gpsSerial.available() > 0) {
    char c = gpsSerial.read();
    gps.encode(c);

    if (gps.location.isUpdated()) {
      float latitude = gps.location.lat();
      float longitude = gps.location.lng();
      String date = String(gps.date.day()) + "/" + String(gps.date.month()) + "/" + String(gps.date.year());
      String time = String(gps.time.hour()) + ":" + String(gps.time.minute()) + ":" + String(gps.time.second());

      // Log parsed data
      Serial.println("Parsed GPS Data:");
      Serial.print("Latitude: "); Serial.println(latitude, 6);
      Serial.print("Longitude: "); Serial.println(longitude, 6);
      Serial.print("Date: "); Serial.println(date);
      Serial.print("Time: "); Serial.println(time);
      Serial.println("-----------------------------------");

      // Send data to Firebase
      if (Firebase.setFloat(firebaseData, "/GPS/Latitude", latitude)) {
        Serial.println("Latitude uploaded successfully.");
      } else {
        Serial.println("Failed to upload latitude: " + firebaseData.errorReason());
      }

      if (Firebase.setFloat(firebaseData, "/GPS/Longitude", longitude)) {
        Serial.println("Longitude uploaded successfully.");
      } else {
        Serial.println("Failed to upload longitude: " + firebaseData.errorReason());
      }

      if (Firebase.setString(firebaseData, "/GPS/Date", date)) {
        Serial.println("Date uploaded successfully.");
      } else {
        Serial.println("Failed to upload date: " + firebaseData.errorReason());
      }

      if (Firebase.setString(firebaseData, "/GPS/Time", time)) {
        Serial.println("Time uploaded successfully.");
      } else {
        Serial.println("Failed to upload time: " + firebaseData.errorReason());
      }
    }
  }
}
