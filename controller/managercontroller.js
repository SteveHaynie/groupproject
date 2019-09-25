// get list of tenants
async function getTenants (req,res){
    try {
        const db = req.app.get('db');
        const tenantList = await db.getTenants([req.params.managerId])
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

//get list of all work orders
async function getWorkOrdersManager (req,res){
    try {
        const db = req.app.get('db');
        const workOrdersManager = await db.getWorkOrdersManager([req.params.managerId])   
        res.send(workOrdersManager, 200)
    } catch (error) {
        console.error(error)
    } 
}

async function updateWorkOrder (req,res){
   const { description, unitId, id } = req.body

    const db = req.app.get('db');
    const updateWorkOrder = await db.updateWorkOrder([description , unitId , id])
    res.status(200)
}

module.exports ={
    getTenants, getUnits, getWorkOrdersManager, updateWorkOrder
}