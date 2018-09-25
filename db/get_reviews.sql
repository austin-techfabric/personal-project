select r.id, r.poster_id, r.profile_id, r.title, r.body, r.stars, u.name, u.email 
from reviews r 
join users u
on r.poster_id = u.id
where profile_id = $1