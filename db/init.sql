drop table if exists users cascade;
drop table if exists instructor_profile cascade;
drop table if exists reviews cascade;
drop table if exists lessons cascade;

create table users (
    id serial primary key,
    auth0_id text unique not null, 
    name varchar(30) not null, 
    email varchar(100) unique not null,
    instructor boolean, 
    profileComplete boolean,
    picture_url text
);

create table instructor_profile (
    id serial primary key, 
    instructor_id integer references users(id),										
    age integer not null, 
    gender varchar(10) not null, 
    locationType varchar(10),
    zipcode integer, 
    address text, 
    city varchar(30) not null,
    state varchar(2) not null, 
    country varchar(30) not null,
    price decimal(10,2) not null,
    instruments text, 
    styles text,
    skillLevel text,
    teachingSince varchar(30) not null,
    about text not null, 
    education text
);	

create table reviews (
    id serial primary key,
    poster_id integer references users(id),	
    profile_id integer references instructor_profile(id),	
    title varchar(30) not null,
    content text not null,
    stars integer not null
);




select * 
from trail_reviews 
join users u
on tr.auth0_id = u.id
where auth0_id = u.id



select * from users
select * from instructor_profile

select *
from users u
join instructor_profile ip
on u.id = ip.instructor_id
where u.instructor = true

select u.id, u.name, u.email, u.instructor, ip.age, ip.gender, ip.price, ip.imgurl, ip.about, 
ip.yearsteaching, ip.acoustic, ip.electric, ip.zipcode, ip.address, ip.city, ip.state,  ip.country
from users u
join instructor_profile ip
on u.id = ip.instructor_id
where u.instructor = true

select * 
from users u 
join instructor_profile ip 
on u.id = ip.instructor_id
where u.id = 4;




