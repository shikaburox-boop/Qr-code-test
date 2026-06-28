const express = require('express');
const path = require('path');
const app = express();

// สองบรรทัดนี้สำคัญมาก: บอกให้ Render ใช้ Port ที่เขากำหนดมาให้ 
// และให้ดึงไฟล์ HTML ในโฟลเดอร์มาแสดง
const PORT = process.env.PORT || 3000;
app.use(express.static(__dirname));

// บรรทัดนี้จะทำให้ Server เปิดค้างไว้ตลอดเวลา ไม่จบการทำงาน (ไม่ exited early)
app.listen(PORT, () => {
    console.log(`Server is successfully running on port ${PORT}`);
});
