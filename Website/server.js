const { createApp1 } = require("./src/backend");

const main = () => {
    const app1 = createApp1();
    
    const port1 = process.env.PORT2 || 6000;

    app1.listen(port1, () => console.log("App 1 listening on port", port1));
};

main();

// Vercel expects an exported function
module.exports = (req, res) => {
  app(req, res); // Pass the request and response to Express
};
