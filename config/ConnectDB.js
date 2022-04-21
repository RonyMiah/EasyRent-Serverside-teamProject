const mongoose = require("mongoose");


mongoose
<<<<<<< HEAD
  .connect(process.env.RENT_URL)
=======
  .connect(`${process.env.RENT_URL}`)
>>>>>>> 7e5b5139bfff4bc4e389b08ecfc1977702eaf20f
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
