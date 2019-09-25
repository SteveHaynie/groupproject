select *
from work_orders join unit_table on unit_table.id = work_orders.unit_id
where manager =$1;