const mongoose = require("mongoose");

mongoose
  .connect(process.env.RENT_URL)
  .then(() => {
    console.log("DB Connected");
  })
  .catch((err) => {
    console.log(err);
  });

async function run() {
  try {
    // await client.connect();
    console.log("Hello Database  ");
  } finally {
    // await client.close()
  }
}

run().catch(console.dir);
