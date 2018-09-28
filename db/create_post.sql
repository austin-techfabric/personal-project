insert into reviews (poster_id, profile_id, title, body, stars, dateVal) values ($1, $2, $3, $4, $5, $6);
select * from reviews where profile_id = $2;