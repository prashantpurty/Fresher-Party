const { serverInit } = require("./app/index");
require("dotenv").config();

const PORT = process.env.PORT || 4000;

async function init() {
  const app = await serverInit();
  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
}

init();
