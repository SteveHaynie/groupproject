insert into work_order_archive (id, unit_id,created_at,completed_at,description, notes)
values ($1,$2,$3, now(),$4,$5);