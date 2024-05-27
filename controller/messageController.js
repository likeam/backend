import { Message } from "../models/messageSchema.js";

export const sendMessage = async (req, res, next) => {
    console.log("Rquest Body", req.body);

    const { firstName, lastName, email, phone, message } = req.body;
    if(!firstName || !lastName || !email || !phone || !message) {
        return 
        next("Please enter all required fields", 400)
    }
    await Message.create({firstName, lastName, email, phone, message});
    res.status(200).json({
        status: "success",
        message: "Message sent successfully"
    })
}