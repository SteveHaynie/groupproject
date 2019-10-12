select unit_rent from unit_table join users on unit_table.id = users.unit_id
where users.id = $1;