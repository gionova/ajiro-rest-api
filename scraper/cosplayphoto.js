const axios = require('axios');
const fs = require('fs-extra');

exports.config = {
    name: 'cosplayphoto',
    author: 'Đức tài cuti vcl',
    description: 'Random cosplay link generator',
    category: 'anime',
    link: ['/cosplayphoto']
};

exports.initialize = async function ({ req, res }) {
    try {
        const response = await axios.get('https://raw.githubusercontent.com/ajirodesu/Rest-Api-Assets/refs/heads/main/txt/cosplay.txt');
        const data = response.data.split(/\r?\n/);

        const link = data[Math.floor(Math.random() * data.length)].trim();
        const link1 = data[Math.floor(Math.random() * data.length)].trim();

        res.json({
            "Authors": this.config.author,
            "url": `${link}`,
            "data": `${link1}`
        });
    } catch (error) {
        console.error("Error fetching cosplay data:", error);
        res.status(500).json({ error: "Failed to fetch cosplay data" });
    }
};