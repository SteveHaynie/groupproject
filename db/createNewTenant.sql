insert into users
    (first_name, last_name, password, email, unit_id, administrator)
VALUES
    ($1, $2, $3, $4, $5, false);