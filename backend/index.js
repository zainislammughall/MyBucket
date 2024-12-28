import express from 'express';
import { connectToDatabase } from './database/connectionToDatabase.js';
import dotenv from "dotenv";
import authRoutes from './routes/auth.route.js'
dotenv.config();

const app = express();
app.use(express.json()); // to parse the data

app.get('/', (req, res) => {
    res.send('Hello there!!!');
})

connectToDatabase();

app.use('/api/auth', authRoutes);

app.listen(3000, () => {
    console.log('Server is runing on port 3000.')
})



//DB conn string: mongodb+srv://zainislammughall:<db_password>@mybucketcluster.ug4zu.mongodb.net/?retryWrites=true&w=majority&appName=MyBucketCluster 