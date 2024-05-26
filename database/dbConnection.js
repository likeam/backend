import mongoose from "mongoose";
export const dbConnection = () => {
    mongoose
    .connect(process.env.MONGO_URL, {
        dbName: "HOSPITAL-MANAGEMENT-SYSTEM",
    })
    .then(() =>
        console.log("Connected to Mongoose  HOSPITAL-MANAGEMENT-SYSTEM ")
    )
    .catch((error) => console.log("Error connecting"));
};
