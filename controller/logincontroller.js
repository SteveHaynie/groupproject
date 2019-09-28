const bcrypt = require("bcrypt");

const login = async (req, res, next) => {
    try {
        const db = req.app.get("db");
        const [ user ] = await db.users.find({ email: req.body.email })
        if (!user)
            return res.status(400).send("Please enter a valid Email and Password")
        
        const results = await bcrypt.compare(req.body.password, user.password)
        if (!results)
            return res.status(403).send("Please enter a valid email and password")
        
        delete user.password;
        req.session.user = user;

        return res.send(user);
    } catch (error) {
        console.error(error);
        res.status(500).send(error);
    }    
}

async function createNewTenant (req,res){
try {
    const db = req.app.get("db");
    const hash = await bcrypt.hashSync(req.body.password, 10)
    const newTenant = await db.createNewTenant([req.body.first_name, req.body.last_name, hash, req.body.email, req.body.unit_id])
    res.send('successful new tenant created', 200)
    
} catch (error) {
    console.error(error)
}    
    
}

function sendSessionUser (req,res) {
    res.send(req.session.user)
}

module.exports = {
    login, sendSessionUser, createNewTenant
};