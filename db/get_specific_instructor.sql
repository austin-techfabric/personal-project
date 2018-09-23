select * 
from users u 
join instructor_profile ip 
on u.id = ip.instructor_id
where u.id = $1;