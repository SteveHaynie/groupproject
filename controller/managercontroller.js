// get list of tenants
async function getTenants(req, res) {
  try {
    const db = req.app.get("db");
    const tenantList = await db.getTenants([req.params.managerId]);
    res.send(tenantList, 200);
  } catch (error) {
    console.error(error);
  }
}
//get list of units

async function getUnits(req, res) {
  try {
    const db = req.app.get("db");
    const unitList = await db.getUnits([req.params.managerId]);
    res.send(unitList, 200);
  } catch (error) {
    console.error(error);
  }
}

//get list of all work orders
async function getWorkOrdersManager(req, res) {
  try {
    const db = req.app.get("db");
    const workOrdersManager = await db.getWorkOrdersManager([
      req.params.managerId
    ]);
    res.send(workOrdersManager, 200);
  } catch (error) {
    console.error(error);
  }
}
// update work order accepts description and unit id through req.body
async function updateWorkOrder(req, res) {
  try {
    const db = req.app.get("db");
    const updateWorkOrder = await db.updateWorkOrder([
      req.body.description,
      req.body.unit_id,
      req.params.workOrderId
    ]);
    res.status(200);
    res.send("successful update");
  } catch (error) {
    console.error(error);
  }
}

//create a new user specifically for tenant

//create new unit

async function createNewUnit(req, res) {
  try {
    const db = req.app.get("db");
    const newUnit = await db.createNewUnit([
      req.body.address,
      req.body.unit_number,
      req.body.unit_type,
      req.body.unit_bedrooms,
      req.body.unit_baths,
      req.body.unit_sq_footage,
      req.body.animal_allowance,
      req.body.unit_description,
      req.body.unit_rent,
      req.params.managerId
    ]);
    res.send('made new unit', 200);
  } catch (error) {
    console.error(error);
  }
}



module.exports = {
  getTenants,
  getUnits,
  getWorkOrdersManager,
  updateWorkOrder,
  createNewUnit
};
