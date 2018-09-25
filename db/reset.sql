drop table if exists users cascade;
drop table if exists instructor_profile cascade;
drop table if exists reviews cascade;

create table users (id serial primary key,
auth0_id text unique not null, name varchar(30) not null, email varchar(100) unique not null,
    instructor boolean, profileComplete boolean);

create table instructor_profile (id serial primary key, instructor_id integer references users(id),										
    age integer not null, gender varchar(10) not null, price decimal(10,2) not null,
    imgUrl text not null, about text not null, yearsTeaching integer not null,
    acoustic boolean, electric boolean, zipcode integer, address text, city varchar(30) not null,
    state varchar(2) not null, country varchar(30) not null);			

create table reviews (
    id serial primary key,
    poster_id integer references users(id),	
    profile_id integer references instructor_profile(id),	
    title varchar(30) not null,
    body text not null,
    stars integer not null
);