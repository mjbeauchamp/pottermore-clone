

update wizard_users
set house_id = (
select id from hogwarts_houses
where name = $1)
where id = $2;