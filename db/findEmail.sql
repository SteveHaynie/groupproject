-- select * from users 
-- where email = $1
update users
set password = $2
where email = $1;