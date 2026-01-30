const mongoose = require('mongoose');
require('dotenv').config();

async function connectToDatabase() {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('เชื่อมต่อกับ MongoDB แล้ว');
  } catch (error) {
    console.error('ไม่สามารถเชื่อมต่อกับ MongoDB ได้:', error);
    process.exit(1);
  }
}

module.exports = { connectToDatabase }; 