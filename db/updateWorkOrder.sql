update work_orders
set description = $1,
	unit_id = $2
where
	id = $3;