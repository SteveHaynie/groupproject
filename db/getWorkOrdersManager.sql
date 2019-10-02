select ut.*, wo.*
from work_orders wo join unit_table ut on ut.id = wo.unit_id
where manager =$1;