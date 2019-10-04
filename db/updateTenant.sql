update users
set first_name = $1,
last_name = $2,
email = $3,
unit_id = $4
where id = $5;