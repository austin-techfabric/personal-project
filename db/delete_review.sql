delete from reviews where id = $1;
SELECT * FROM reviews WHERE profile_id = $2;