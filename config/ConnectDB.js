const mongoose = require('mongoose');


mongoose.connect(`mongodb+srv://${process.env.USER_ID}:${process.env.USER_PASS}@cluster0.8ezqf.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`)
    .then(() => {
        console.log("DB Connected");
    })
    .catch((err) => {
        console.log(err);
    })




async function run() {
    try {
        // await client.connect();
        console.log("Hello Database");
    }

    finally {
        // await client.close()
    }

}

run().catch(console.dir);

