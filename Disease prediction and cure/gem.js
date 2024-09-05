const express = require('express');
const multer = require('multer');
const fs = require('fs');
const path = require('path');
const { GoogleGenerativeAI } = require('@google/generative-ai');

const app = express();
const upload = multer({ dest: 'uploads/' });
const genAI = new GoogleGenerativeAI('Dio_is_an_idiot');

app.use(express.static('public'));

app.post('/upload', upload.single('image'), async (req, res) => {
    try {
        const imagePath = req.file.path;
        const imageData = fs.readFileSync(imagePath).toString('base64');

        const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });
        const result = await model.generateContent([
            'If the image has diseased plant, give description of the disease and possible solutions. Else simply state that there is no plant or diseased plant.If livestock is present do the same.',
            {
                inlineData: {
                    data: imageData,
                    mimeType: 'image/jpeg'
                }
            }
        ]);

        res.send(result.response.text());
    } catch (error) {
        console.error('Error:', error);
        res.status(500).send('An error occurred');
    }
});

app.listen(3000, () => {
    console.log('Server started on http://localhost:3000');
});
