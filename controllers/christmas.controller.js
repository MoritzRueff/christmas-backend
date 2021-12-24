import ChristmasProduct from '../models/christmas.models.js' 

const getFullChristmas = async (req, res) => {
    const christmas = await ChristmasProduct.find();
    res.json(christmas);
  };
  
  const getChristmas = async (req, res) => {
    const christmasId = req.params.christmasId;
    const foundChristmas = await ChristmasProduct.findById(christmasId);
    res.json(foundChristmas);
  };
  
  const postChristmas = async (req, res) => {
    const christmasProdu = new ChristmasProduct({
      name: req.body.name,
      type: req.body.type,
      vegan: req.body.vegan,
    });
  
    try {
      const result = await christmasProdu.save();
      console.log(result);
    } catch (error) {
      res.json(error);
    }
  };
  
  const updateChristmas = async (req, res) => {
    const christmasId = req.params.dinoId;
    const christmas = req.body;
  
    const result = await ChristmasProduct.findByIdAndUpdate(christmasId, christmas, {
      returnDocument: "after",
    });
    res.json(result);
  };
  
  const deleteChristmas = async (req, res) => {
    const christmasId = req.params.christmasId;
  
    try {
      const result = await ChristmasProduct.findByIdAndDelete(christmasId);
      if (result) {
        res.json({ sucess: true, message: "Successfully deleted." });
      } else {
        res.json({ success: false, messsage: "Could not find id / christmas product." });
      }
    } catch (error) {
      res.json({ status: "Check if something is wrong lol." });
    }
  };

  export {getFullChristmas, getChristmas, postChristmas, updateChristmas, deleteChristmas }