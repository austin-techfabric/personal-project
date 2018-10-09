select * 
from users u 
join instructor_profile ip 
on u.id = ip.instructor_id
where u.id = $1;

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

insert into instructor_profile(
    age,	
    gender,     
    locationType,       
    zipcode,    
    address,    
    city,   
    state,      
    country,
    price,    
    instruments,      
    styles,     
    skillLevel,    
    teachingSince,    
    about,    
    education,  
    instructor_id      
) values ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16);

insert into lessons (
    instructor_id, 
    student_id, 
    lessonLocation, 
    instrument, 
    duration, 
    dateval) 
    values ($1, $2, $3, $4, $5, $6);


insert into reviews (poster_id, 
profile_id, 
title, 
body, 
stars, 
dateval) values ($1, $2, $3, $4, $5, $6);
select * from reviews where profile_id = $2;

insert into schedule (
    holidays, 
    sunstart,
    sunend,
    monstart,
    monend,
    tuestart,
    tueend,
    wedstart,
    wedend,
    thurstart,
    thurend,
    fristart,
    friend,
    satstart,
    satend,
    instructor_id
) values ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16)

select l.lessonLocation, 
l.instrument, 
l.duration, 
l.dateval, 
l.instructor_id
from lessons l
join users u
on l.student_id = u.id 
where u.id = $1;

select r.id, 
r.poster_id, 
r.profile_id, 
r.title, 
r.body, 
r.dateval, 
r.stars, 
u.name, 
u.email 
from reviews r 
join users u
on r.poster_id = u.id
where profile_id = $1

select * from schedule where instructor_id = $1;

update users set instructor = true where id = $1
returning * ;

update users set profilecomplete = true where id = $1
returning * ;

delete from reviews where id = $1;
SELECT * FROM reviews WHERE profile_id = $2;

update reviews
set title = $1,
    body = $2,
    stars = $3
where id = $4;
SELECT * FROM reviews WHERE profile_id = $5;

update schedule 
set 
    holidays = case when $1 <> NULL then holidays else $1 end,
    sunstart = case when $2 <> NULL then sunstart else $2 end,
    sunend = case when $3 <> NULL then sunend else $3 end,
    monstart = case when $4 <> NULL then monstart else $4 end,
    monend = case when $5 <> NULL then monend else $5 end,
    tuestart = case WHEN $6 <> NULL then tuestart else $6 end,
    tueend = case when $7 <> NULL then tueend else $7 end,
    wedstart = case WHEN $8 <> NULL then wedstart else $8 end,
    wedend = case when $9 <> NULL then wedend else $9 end,
    thurstart = case when $10 <> NULL then  thurstart else $10 end,
    thurend = case when  $11 <> NULL then thurend else $11 end,
    fristart = case when  $12 <> NULL then  fristart else $12 end,
    friend = case when  $13 <> NULL then friend else $13 end,
    satstart = case when  $14 <> NULL then  satstart else $14 end,
    satend = case when  $15 <> NULL then  satend else $15 end
where instructor_id = $16;
select * from schedule;