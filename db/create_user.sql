INSERT INTO wizard_users (first_name, last_name, username, password)
VALUES
($1, $2, $3, $4)
RETURNING *;