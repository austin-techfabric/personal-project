 drop table if exists instructors cascade 
-- create table instructors (
--     id serial primary key,
--     auth0_id text unique not null,
--     name varchar(30) not null,
--     email varchar(100) unique not null
-- );

-- drop table if exists users cascade 
create table users (
    id serial primary key,
    auth0_id text unique not null,
    name varchar(30) not null,
    email varchar(100) unique not null,
    instructor boolean
    profileComplete boolean
);

drop table if exists instructor_profile cascade 
create table instructor_profile (
    id serial primary key,
    instructor_id integer references Users(id),										
    age integer not null,	
    gender varchar(10) not null,
    price decimal(10,2) not null,
    imgUrl text not null,
    about text not null,
    yearsTeaching integer not null,
    acoustic boolean,
    electric boolean,
    latitude text,
    longitude text
);				

-- drop table if exists reviews cascade 
-- create table reviews (
--     id serial primary  key,
--     user_id integer references users(id),
--     instructor_id integer references instructors(id),
--     date timestamp default current_timestamp,
--     content text not null
-- );
-- Dummy Data --

insert into users (
    auth0_id,
    name,
    email
) values (
    'auth0test',
    'nameTest',
    'emailtest@gmail.com'
);

insert into instructor_profile (									
    age,	
    gender,
    price,
    imgUrl,
    about,
    yearsTeaching,
    acoustic,
    electric,
    latitude,
    longitude
) values (
    21,
    'puppyGoat',
    2.00,
    'tfhioaefih.com/',
    'textextextext',
    5,
    true,
    false,
    'latilat',
    'longilong'
)
