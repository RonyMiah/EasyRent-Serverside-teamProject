const Service = require("../models/serviceModel");
const router = require("express").Router();

router.post("/addService", async (req, res) => {
    const pic = req.files.picture;
    const picData = pic.data;
    const endodedPic = picData.toString('base64');
    const imgBuffer = Buffer.from(endodedPic, 'base64')
  const serviceCar = new Service({
    picture: imgBuffer,
    image: req.body.image,
    year: req.body.year,
    name: req.body.name,
    price: req.body.price,
    kilo: req.body.kilo,
    type: req.body.type,
    fual: req.body.fual,
    discountPrice: req.body.discountPrice,
    details: req.body.details,
  });

  try {
    const service = await serviceCar.save();
    res.status(201).json({
      obj:service,
      message: "Product added successfull"
    });
  } catch (error) {
    res.status(500).json(error);
  }
});

router.get("/service", async (req, res) => {
  try {
    const findService = await Service.find();
    res.status(200).json(findService);
  } catch (error) {
    res.status(500).json(error);
  }
});


   // Get singel booking

  router.get('/service/:id', async (req, res) => {
    const id = req.params.id;
    const service = await Service.findOne({_id: id});
    res.status(200).json(service);
  })

  router.delete('/deleteservices/:id' ,(req, res) => {
    Service.deleteOne({ _id: req.params.id}, (err) => {
        if(err){
            res.status(500).send({
                error: 'There was a server side error'
            })
        } else {
            res.status(200).json({
                message: "Product deleted successfully"
            })
        }
    }).clone()
    
  
  });



module.exports = router;
