const fs = require("fs");
const https = require("https");
const { app, sequelize } = require("./app");

// Certbot
const options = {
    key: fs.readFileSync("/etc/letsencrypt/live/airport-erp.uz/privkey.pem"),
    cert: fs.readFileSync("/etc/letsencrypt/live/airport-erp.uz/fullchain.pem"),
};

const PORT = 443;

sequelize.sync({ force: false }).then(() => {
    console.log("✅ Database connected");

    https.createServer(options, app).listen(PORT, () => {
        console.log(`🚀 HTTPS server running at https://airport-erp.uz`);
    });
});
