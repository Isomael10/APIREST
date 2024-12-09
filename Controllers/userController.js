const user= require('../Models/user');

const newUser = async(req, res) =>{
    try {
        const {name,email,passeword}= req.bosy;
        const user = new User({name,email,passeword});
        const savedUser= await user.save();
        res.json(savedUser)
    } catch (error) {
        
        res.status(500).json({ error: 'erreur de serveur interne' });

    }
}

const getUser = async (req, res) => {
    try {
      const users = await User.find();
      res.json(users);
    } catch (error) {
      res.status(500).json({ error: 'erreur de serveur interne' });
    }
  };
  
module.exports={
    newUser,
    getUser
}