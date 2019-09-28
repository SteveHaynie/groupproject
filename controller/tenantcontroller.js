// get list of work orders
// get unit they are living in
//on tenant page load
async function getUnitAndWorkOrders (req,res){
    try {
        const db = req.app.get('db');
        const unitInfo = await db.unitInfo([req.params.unitId])
        res.send(unitInfo, 200)

    } catch (error) {
        console.error(error)
    }
}

module.exports ={
    getUnitAndWorkOrders,
}