const express = require('express');
const app = express();
const port = 3000;

// Middleware สำหรับแปลงข้อมูล JSON
app.use(express.json());

// API ทดสอบการ GET
app.get('/api/test', (req, res) => {
    res.json({
        success: true,
        message: 'GET request ทำงานสำเร็จ!',
    });
});

// API ทดสอบการ POST
app.post('/api/test', (req, res) => {
    const { name, age } = req.body;
    res.json({
        success: true,
        message: 'POST request ทำงานสำเร็จ!',
        data: {
            name,
            age,
        },
    });
});

// API ทดสอบการ PUT
app.put('/api/test/:id', (req, res) => {
    const { id } = req.params;
    const { name, age } = req.body;
    res.json({
        success: true,
        message: `PUT request สำหรับ ID ${id} ทำงานสำเร็จ!`,
        data: {
            id,
            name,
            age,
        },
    });
});

// API ทดสอบการ DELETE
app.delete('/api/test/:id', (req, res) => {
    const { id } = req.params;
    res.json({
        success: true,
        message: `DELETE request สำหรับ ID ${id} ทำงานสำเร็จ!`,
    });
});

// เริ่มต้นเซิร์ฟเวอร์
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
