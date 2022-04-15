const mongoose = require("mongoose");

mongoose
  // .connect(`${process.env.RENT_URL}`)
  .connect(`mongodb+srv://easy-rent:easy-rent@cluster0.8ezqf.mongodb.net/easyRentShop?retryWrites=true&w=majority`)
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
