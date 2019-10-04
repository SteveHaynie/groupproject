select *
from users join unit_table on users.unit_id = unit_table.id join work_orders on users.unit_id = work_orders.unit_id
where users.id = $1
order by users.id;
