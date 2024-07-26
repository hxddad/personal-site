const express = require('express');
const mongoose = require('mongoose');
const app = express();
const PORT = process.env.PORT || 3000;

mongoose.connect('mongodb://localhost:27017/websiteViews', { useNewUrlParser: true, useUnifiedTopology: true });

const viewSchema = new mongoose.Schema({ count: Number });
const View = mongoose.model('View', viewSchema);

app.use(async (req, res, next) => {
    let view = await View.findOne();
    if (!view) {
        view = new View({ count: 1 });
    } else {
        view.count += 1;
    }
    await view.save();
    next();
});

app.get('/view-count', async (req, res) => {
    const view = await View.findOne();
    res.json({ count: view ? view.count : 0 });
});

app.use(express.static('public'));

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
