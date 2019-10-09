select ut.*, wo.*
from work_orders wo join unit_table ut on ut.id = wo.unit_id
where unit_id = 1
order by wo.id;