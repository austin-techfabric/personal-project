drop table if exists users cascade;
drop table if exists instructor_profile cascade;

create table users (id serial primary key,
auth0_id text unique not null, name varchar(30) not null, email varchar(100) unique not null,
    instructor boolean, profileComplete boolean);

create table instructor_profile (id serial primary key, instructor_id integer references users(id),										
    age integer not null, gender varchar(10) not null, price decimal(10,2) not null,
    imgUrl text not null, about text not null, yearsTeaching integer not null,
    acoustic boolean, electric boolean, zipcode integer, address text, city varchar(30) not null,
    state varchar(2) not null, country varchar(30) not null);			

insert into users (auth0_id, name, email, instructor, profilecomplete) values 
('145543412', 'Paul Simon', 'ms@gmail.com', true, true) returning *;
insert into instructor_profile (age, gender, price, imgUrl, about, yearsTeaching, acoustic, electric, zipcode,  address, city, state, country, instructor_id) values 
(51, 'Male', 30, 'imgul', 'about words and stuf things, pings, tings, tills, drinks', 10, true, true, 14253, '42 East Aberdine', 'Phoenex', 'AZ', 'USA', 2);

insert into users (auth0_id, name, email, instructor, profilecomplete) values 
('11233343412', 'Ron Weever', 'eems@gmail.com', true, true) returning *;
insert into instructor_profile (age, gender, price, imgUrl, about, yearsTeaching, acoustic, electric, zipcode,  address, city, state, country, instructor_id) values 
(72, 'Male', 33, 'imrl', 'about words and stuf things, pings, pugs, muffins, drinks', 15, true, true, 14253, '42 East Aberdine', 'Phoenex', 'AZ', 'USA', 3);

insert into users (auth0_id, name, email, instructor, profilecomplete) values 
('145463412', 'Tod Hornby', 'keeems@gmail.com', true, true) returning *;
insert into instructor_profile (age, gender, price, imgUrl, about, yearsTeaching, acoustic, electric, zipcode,  address, city, state, country, instructor_id) values 
(33, 'Male', 44, 'mgurl', 'about words and stuf things, wake up, drank, pings, drinks', 4, true, true, 14253, '42 East Aberdine', 'Phoenex', 'AZ', 'USA', 4);

insert into users (auth0_id, name, email, instructor, profilecomplete) values 
('14226812', 'Greg Nilges', 'wwws@gmail.com', true, true) returning *;
insert into instructor_profile (age, gender, price, imgUrl, about, yearsTeaching, acoustic, electric, zipcode,  address, city, state, country, instructor_id) values 
(21, 'Male', 40, 'imgu9rl', 'about', 2, true, true, 14253, '42 East Aberdine', 'Phoenex', 'AZ', 'USA', 5);

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


create table reviews (
    id serial primary key,
    poster_id integer references users(id),	
    profile_id integer references instructor_profile(id),	
    title varchar(30) not null,
    content text not null,
    stars integer not null
);
