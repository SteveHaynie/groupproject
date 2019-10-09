select * from unit_table
where manager = $1
order by id;