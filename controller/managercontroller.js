// get list of tenants
async function getTenants (req,res){
    try {
        const db = req.app.get('db');
        const tenantList = await db.getTenants()
        res.send(tenantList, 200)
    } catch (error) {
        console.error(error)
    }
}
//get list of units

async function getUnits (req,res) {
    try {
        const db = req.app.get('db');
        const unitList = await db.getUnits([req.params.managerId])   
        res.send(unitList, 200)     
    } catch (error) {
        console.error(error)
    }
}

module.exports ={
    getTenants, getUnits,
}