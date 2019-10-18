update unit_table
set
      address = $1,
      unit_number = $2,
      unit_type = $3,
      unit_bedrooms = $4,
      unit_baths = $5,
      unit_sq_footage = $6,
      animal_allowance =  $7,
      unit_description = $8,
      unit_rent = $9
where id = $10;