select 
u.id, 
u.name, 
u.email, 
u.instructor, 
ip.age, 
ip.gender, 
ip.locationType, 
ip.zipcode, 
ip.address, 
ip.city, 
ip.state,  
ip.country,
ip.price, 
ip.instruments, 
ip.styles,
ip.skillLevel,
ip.teachingSince, 
ip.about,
ip.education,
ip.img_url
from users u
join instructor_profile ip
on u.id = ip.instructor_id
where u.instructor = true

-- select * from users