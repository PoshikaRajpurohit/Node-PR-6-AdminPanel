const mongoose = require("mongoose");
const dbconnect = async () => {
    try {
        await mongoose.connect("mongodb+srv://Poshika_Rajpurohit:Kashipo2313@cluster0.pxtjzdj.mongodb.net/Adminpanel");
        console.log(" Database connected successfully...");
    } catch (err) {
        console.error(" Database Connection Error:", err.message);
    }
};
module.exports = dbconnect();
