select l.lessonLocation, l.instrument, l.duration, l.dateval, l.instructor_id
from lessons l
join users u
on l.student_id = u.id 
where u.id = $1;