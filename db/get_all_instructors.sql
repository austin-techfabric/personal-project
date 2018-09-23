select 
u.id, 
u.name, 
u.email, 
u.instructor, 
ip.age, 
ip.gender, 
ip.price, 
ip.imgurl, 
ip.about, 
ip.yearsteaching, 
ip.acoustic, 
ip.electric, 
ip.zipcode, 
ip.address, 
ip.city, 
ip.state,  
ip.country
from users u
join instructor_profile ip
on u.id = ip.instructor_id
where u.instructor = true