create table instructors (
    id serial primary key,
    auth0Id text unique not null,
    name varchar(30) not null,
    email varchar(100) unique not null
)

create table Users (
    id serial primary key,
    auth0Id text unique not null,
    name varchar(30) not null,
    email varchar(100) unique not null
)

create table Reviews (
    id serial primary  key,
    user_id integer references Users(id),
    date timestamp default current_timestamp,
    content text not null
)
create table InstructorProfile (    										
    age integer not null,	
    gender varchar(10) not null,
    price integer(10,2) not null,
    imgUrl text not null,
    about text not null,
    yearsTeaching integer not null,
    acoustic boolean,
    electric boolean,
    latitude text,
    longitude text
)								

drop table if exists Instructors cascade 


insert into instructors (
    auth0Id,
    name,
    email
) values (
    'auth0test',
    'nameTest',
    'emailtest@gmail.com'
);
