drop table if exists users cascade;
drop table if exists instructor_profile cascade;
drop table if exists reviews cascade;
drop table if exists schedule cascade;
drop table if exists lessons cascade;

create table users (
    id serial primary key,
    auth0_id text unique not null, 
    name varchar(30) not null, 
    email varchar(100) unique not null,
    instructor boolean, 
    profileComplete boolean,
    picture_url text,
    scheduleComplete boolean
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
    price integer not null,
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
    title varchar(100) not null,
    body text not null,
    stars integer not null,
    dateval text
);


create table lessons (
    id serial primary key,
    student_id integer references users(id),	
    instructor_id integer references instructor_profile(id),	
    lessonLocation text,
    instrument text,
    duration integer,
    dateval text
);

create table schedule (
    id serial primary key,
    instructor_id integer references users(id),
    holidays boolean, 
    sunstart varchar(10),
    sunend varchar(10),
    monstart varchar(10),
    monend varchar(10),
    tuestart varchar(10),
    tueend varchar(10),
    wedstart varchar(10),
    wedend varchar(10),
    thurstart varchar(10),
    thurend varchar(10),
    fristart varchar(10),
    friend varchar(10),
    satstart varchar(10),
    satend varchar(10)
);


insert into users (
    auth0_id,
    name,
    email,
    instructor,
    profileComplete,
    picture_url,
    scheduleComplete
) values (
    '1234473896858782',
    'Mat Weeler',
    'mweeler@gmail.com',
    true,
    true,
    'https://dj1hlxw0wr920.cloudfront.net/userfiles/wyzfiles/5803c5f6-bffc-4cb0-9393-5e5ce2d988a1.jpg',
    true
);

insert into users (
    auth0_id,
    name,
    email,
    instructor,
    profileComplete,
    picture_url,
    scheduleComplete
) values (
    '12342009595342782',
    'Paul Sean',
    'pauls@gmail.com',
    true,
    true,
    'https://dj1hlxw0wr920.cloudfront.net/userfiles/wyzfiles/3966c4f2-23ba-49b4-a570-e0d501770278.jpg',
    true
);

insert into users (
    auth0_id,
    name,
    email,
    instructor,
    profileComplete,
    picture_url,
    scheduleComplete
) values (
    '123422366474342342',
    'John White',
    'jwmusicg@aol.com',
    true,
    true,
    'https://dj1hlxw0wr920.cloudfront.net/userfiles/wyzfiles/499d3807-249a-4527-9122-9b52aa62a4b8.jpg',
    true
);

insert into users (
    auth0_id,
    name,
    email,
    instructor,
    profileComplete,
    picture_url,
    scheduleComplete
) values (
    '2231231342242',
    'Eric Simon',
    'ersi@aol.com',
    true,
    true,
    'https://dj1hlxw0wr920.cloudfront.net/userfiles/wyzfiles/cc66003f-e99d-4ae2-82d2-a50f88697821.jpg',
    true
);

insert into users (
    auth0_id,
    name,
    email,
    instructor,
    profileComplete,
    picture_url,
    scheduleComplete
) values (
    '123429789792342342',
    'Peter Johnson',
    'peteplays@aol.com',
    true,
    true,
    'https://dj1hlxw0wr920.cloudfront.net/userfiles/wyzfiles/bd89164b-71a1-45f8-8825-2cd23517996d.jpg',
    true
);

insert into users (
    auth0_id,
    name,
    email,
    instructor,
    profileComplete,
    picture_url,
    scheduleComplete
) values (
    '1216725523252342342',
    'Tim Sanders',
    'tsandyg@aol.com',
    true,
    true,
    'https://dj1hlxw0wr920.cloudfront.net/userfiles/wyzfiles/6a0e7455-791c-4c3e-8d95-a09a926a34d0.jpg',
    true
);

insert into users (
    auth0_id,
    name,
    email,
    instructor,
    profileComplete,
    picture_url,
    scheduleComplete
) values (
    '123422233452342342',
    'Austin Erikson',
    'arikson@aol.com',
    true,
    true,
    'https://dj1hlxw0wr920.cloudfront.net/userfiles/wyzfiles/5cadf57e-481a-4b10-896f-53774f95ef79.jpg',
    true
);

insert into users (
    auth0_id,
    name,
    email,
    instructor,
    profileComplete,
    picture_url,
    scheduleComplete
) values (
    '1234254552342342',
    'Tyler Intructor',
    'tyleristhegreatest@icloud.com',
    true,
    true,
    'https://avatars0.githubusercontent.com/u/31582611?s=460&v=4',
    true
);

insert into users (
    auth0_id,
    name,
    email,
    instructor,
    profileComplete,
    picture_url,
    scheduleComplete
) values (
    '12342254345342342',
    'Ron Swanson',
    'theswans@aol.com',
    true,
    true,
    'https://dj1hlxw0wr920.cloudfront.net/userfiles/wyzfiles/4f640f6b-4480-4311-a443-dc320f16474f.jpg',
    true
);


-- STUDENTS --
insert into users (
    auth0_id,   name,   email,      instructor,     profileComplete,    picture_url, scheduleComplete
) values (
    '123422734534342342',
    'Dana Garvy',
    'garvers@gmail.com',
    null,
    null,
    'https://dj1hlxw0wr920.cloudfront.net/userfiles/wyzfiles/f2bdb163-31b3-4673-af83-cc434f3af54c.jpg',
    null
);
insert into users (
    auth0_id,   name,   email,      instructor,     profileComplete,    picture_url, scheduleComplete
) values (
    '42342',
    'Todd White',
    'twhite@aol.com',
    null,
    null,
    'https://dj1hlxw0wr920.cloudfront.net/userfiles/wyzfiles/d32d4e3e-17ff-435d-a820-03dbe11ccf1c.jpg',
    null
);
insert into users (
    auth0_id,   name,   email,      instructor,     profileComplete,    picture_url, scheduleComplete
) values (
    '44646787642',
    'Billy George',
    'georgers@gmail.com',
    null,
    null,
    'https://dj1hlxw0wr920.cloudfront.net/userfiles/wyzfiles/6350bac0-e7e0-4d0f-bc0d-66c4c1761c71.jpg',
    null
);
insert into users (
    auth0_id,   name,   email,      instructor,     profileComplete,    picture_url, scheduleComplete
) values (
    '3673683742',
    'Jamal Feranze',
    'fer@gmail.com',
    null,
    null,
    'https://dj1hlxw0wr920.cloudfront.net/userfiles/wyzfiles/00f2263f-4cad-48c9-a3c6-5aa23e51b613.jpg',
    null
);

insert into instructor_profile(
    instructor_id,      age,	gender,     locationType,       zipcode,    address,    city,   state,      country,
    price,    instruments,      styles,     skillLevel,    teachingSince,    about,    education   
) values (
    1,  30, 'male', 'home', 83315,  '3255 S. Camelback Rd.', 'Tempe', 'AZ',  'United States',  62,     
    'guitar, ukulele',    
    'rock , pop',  
    'beginner, intermediate, advanced',     
    'June 2000',
    'Beginning at age 13 and continuing to the present day, I have explored the power of my own self-expression through musical performance. From chords, to scales, to modes, I enjoy the process of working with my students to help them discover the power and joy of playing guitar. As a self-taught musician, I dont encourage sight-reading or advocate for classical guitar playing, but focus instead on practical skills in the blues, rock, and folk idioms. Whether youre a public performer, or just a home hobbyist, if youre looking for tips to improve your playing, I hope to help you unleash your inner guitar-god!',
    'BFA from UT Austin in Theatre Studies'
);

insert into instructor_profile(
    instructor_id,      age,	gender,     locationType,       zipcode,    address,    city,   state,      country,
    price,    instruments,      styles,     skillLevel,    teachingSince,    about,    education  
) values (
    2,  27, 'male', 'studio',  93213, '1324 W. Indian School Rd.',  'Tempe',  'AZ', 'United States', 56,     
    'guitar, bass, ukulele',     
    'jazz, pop, rock',   
    'beginner, intermediate',      
    'May 2008',
    'I originally entered the University of the Arts as a Guitar major. After a semester I decided composition was the avenue I wanted to pursue because I felt I had all I needed to take my guitar education relatively in my hands and outside of an educational institution. However, I did continue to take non-major lessons with the Guitar faculty in the following semesters.',
    'University of the Arts Music Composition'
);

insert into instructor_profile(
    instructor_id,      age,	gender,     locationType,       zipcode,    address,    city,   state,      country,
    price,    instruments,      styles,     skillLevel,    teachingSince,    about,    education  
) values (
    3, 34, 'male', 'studio', 09668, '780 E. Camelback St.', 'Mesa', 'AZ', 'United States', 70,
    'guitar',
    'rock, pop, jazz, fusion',
    'beginner, intermediate',
    'May 2012',
    'I studied guitar performance and composition at Berklee College of Music. Guitar is my main and favorite instrument. I cover all styles but have a preference for blues, jazz, funk and gospel.',
    'University of the Arts Music Composition'
);

insert into instructor_profile(
    instructor_id,      age,	gender,     locationType,       zipcode,    address,    city,   state,      country,
    price,    instruments,      styles,     skillLevel,    teachingSince,    about,    education  
) values (
    4, 36, 'male', 'studio', 32422,  '780 N. Ceaser Rd.', 'Tempe', 'AZ', 'United States', 65,
    'guitar, bass, ukulele',
    'rock, pop, folk, jazz',
    'beginner, intermediate, advanced',
    'December 2015',
    'I originally entered the University of the Arts as a Guitar major. After a semester I decided composition was the avenue I wanted to pursue because I felt I had all I needed to take my guitar education relatively in my hands and outside of an educational institution. However, I did continue to take non-major lessons with the Guitar faculty in the following semesters.',
    'University of California Santa Cruz Music'
);

insert into instructor_profile(
    instructor_id,      age,	gender,     locationType,       zipcode,    address,    city,   state,      country,
    price,    instruments,      styles,     skillLevel,    teachingSince,    about,    education  
) values (
    5, 25, 'male', 'home', 34574, 'Tater N. Seeder St.', 'Mesa', 'AZ', 'United States', 73,
    'guitar',
    'rock, pop, folk, metal',
    'beginner, intermediate, advanced',
    'July 2012',
    'Ive been playing guitar since I was 12. I like to teach rock, blues, and folk music. I prefer to teach beginners and early intermediate players. I help students learn chords, scales, and basic improvisation.',
    'University of the Arts Music Composition'
);

insert into instructor_profile(
    instructor_id,      age,	gender,     locationType,       zipcode,    address,    city,   state,      country,
    price,    instruments,      styles,     skillLevel,    teachingSince,    about,    education  
) values (
    6, 40, 'male', 'studio', 34534, 'Uer West Calon Rd.', 'Tempe', 'AZ', 'United States', 70,
    'guitar, bass, ukulele',
    'rock-n-roll, funk, pop',
    'beginner, intermediate, advanced',
    'February 2014',
    'The guitar is the most popular instrument in the world, especially electric guitar. I possess over 20 years experience as a professional teacher of guitar successfully teaching hundreds of students. Provide teaching at all levels. Beginners are always welcome and encouraged. Most all ages. Be prepared to have a lot of fun!',
    'Southwestern College in Music'
);

insert into instructor_profile(
    instructor_id,      age,	gender,     locationType,       zipcode,    address,    city,   state,      country,
    price,    instruments,      styles,     skillLevel,    teachingSince,    about,    education  
) values (
    7, 29, 'male', 'studio', 33815, 'First N. Sir Rd.', 'Mesa', 'AZ', 'United States', 67,
    'guitar',
    'rock, funk, soul, pop',
    'beginner, intermediate, advanced',
    'May 1998',
    'I have been playing the guitar for over 20 years which includes classical guitar training. I have been the musical director for many of the bands I have played with. I have composed, played and produced music for documentaries. Students will learn how to play chord progressions and read cord charts, as well as improvisation, scales, soloing techniques, ear-training and basic guitar knowledge.',
    'University of the Interpretive Arts Music Composition'
);

insert into instructor_profile(
    instructor_id,      age,	gender,     locationType,       zipcode,    address,    city,   state,      country,
    price,    instruments,      styles,     skillLevel,    teachingSince,    about,    education  
) values (
    8, 50, 'male', 'home', 34554, '1142 N. Morse Rd.', 'Mesa', 'AZ', 'United States', 63,
    'guitar',
    'funk, soul, classical',
    'beginner, intermediate, advanced',
    'March 1995',
    'I have been playing the guitar for over 20 years which includes classical guitar training. I have been the musical director for many of the bands I have played with. I have composed, played and produced music for documentaries. Students will learn how to play chord progressions and read cord charts, as well as improvisation, scales, soloing techniques, ear-training and basic guitar knowledge.',
    'University of the Arts Music Composition'
);

insert into instructor_profile(
    instructor_id,      age,	gender,     locationType,       zipcode,    address,    city,   state,      country,
    price,    instruments,      styles,     skillLevel,    teachingSince,    about,    education  
) values (
    9, 35, 'male', 'studio', 33512, '707 New Town Rd.', 'Tempe', 'AZ', 'United States', 60,
    'guitar, bass, ukulele',
    'funk, pop, rock',
    'beginner, intermediate, advanced',
    'April 2000',
    'I am a university trained classical guitarist and a studio professional trained jazz and rock guitarist. I have performed as a guitarist and singer in most styles for over 25 years. I have garnered multiple awards, articles and respect as a teacher, player and songwriter.',
    'University of the Arts Music Composition'
);

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
) values (
    false,
    '',
    '',
    '10:00am',
    '3:00pm',
    '10:00am',
    '3:00pm',
    '10:00am',
    '3:00pm',
    '10:00am',
    '3:00pm',
    '10:00am',
    '3:00pm',
    '',
    '',
    1
);

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
) values (
    false,
    '9:00am',
    '7:00pm',
    '',
    '',
    '3:00pm',
    '7:00pm',
    '3:00pm',
    '7:00pm',
    '3:00pm',
    '7:00pm',
    '',
    '',
    '9:00am',
    '7:00pm',
    2
);

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
) values (
    false,
    '',
    '',
    '12:00pm',
    '7:00pm',
    '12:00pm',
    '7:00pm',
    '12:00pm',
    '7:00pm',
    '12:00pm',
    '7:00pm',
    '12:00pm',
    '7:00pm',
    '',
    '',
    3
);

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
) values (
    false,
    '',
    '',
    '9:00am',
    '9:00pm',
    '9:00am',
    '9:00pm',
    '9:00am',
    '9:00pm',
    '9:00am',
    '9:00pm',
    '9:00am',
    '9:00pm',
    '',
    '',
    4
);

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
) values (
    false,
    '6:00am',
    '4:00pm',
    '6:00am',
    '4:00pm',
    '6:00am',
    '4:00pm',
    '',
    '',
    '6:00am',
    '4:00pm',
    '6:00am',
    '4:00pm',
    '6:00am',
    '4:00pm',
    5
);

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
) values (
    false,
    '',
    '',
    '10:00am',
    '3:00pm',
    '10:00am',
    '3:00pm',
    '10:00am',
    '3:00pm',
    '10:00am',
    '3:00pm',
    '10:00am',
    '3:00pm',
    '',
    '',
    6
);

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
) values (
    false,
    '',
    '',
    '10:00am',
    '3:00pm',
    '10:00am',
    '3:00pm',
    '10:00am',
    '3:00pm',
    '10:00am',
    '3:00pm',
    '10:00am',
    '3:00pm',
    '',
    '',
    7
);

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
) values (
    false,
    '1:00pm',
    '10:00pm',
    '',
    '',
    '',
    '',
    '1:00pm',
    '10:00pm',
    '1:00pm',
    '10:00pm',
    '1:00pm',
    '10:00pm',
    '1:00pm',
    '10:00pm',
    8
);

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
) values (
    false,
    '',
    '',
    '10:00am',
    '3:00pm',
    '10:00am',
    '3:00pm',
    '10:00am',
    '3:00pm',
    '10:00am',
    '3:00pm',
    '',
    '',
    '10:00am',
    '3:00pm',
    9
);


insert into reviews (poster_id, profile_id, title, body, stars, dateVal) 
values (10, 1, 'Knowledgeable and Patient Tutor', 'Just started my lessons with Steve on guitar. I am so excited. It was easy and he is a great teacher!!! I literally had no idea what string is what and how to do anything. Thought it might be difficult not to do this in person, but it went amazing!', 5, 'September 2017');
insert into reviews (poster_id, profile_id, title, body, stars, dateVal) 
values (10, 2, 'Stayed Longer For a Tough Lesson', 'Just started my lessons with Steve on guitar. I am so excited. It was easy and he is a great teacher!!! I literally had no idea what string is what and how to do anything. Thought it might be difficult not to do this in person, but it went amazing!', 4, 'May 2018');
insert into reviews (poster_id, profile_id, title, body, stars, dateVal) 
values (10, 3, 'Great lesson! Very impressed', 'Just started my lessons with Steve on guitar. I am so excited. It was easy and he is a great teacher!!! I literally had no idea what string is what and how to do anything. Thought it might be difficult not to do this in person, but it went amazing!', 4, 'May 2018');
insert into reviews (poster_id, profile_id, title, body, stars, dateVal) 
values (10, 4, 'The BEST tutor', 'Just started my lessons with Steve on guitar. I am so excited. It was easy and he is a great teacher!!! I literally had no idea what string is what and how to do anything. Thought it might be difficult not to do this in person, but it went amazing!', 5, 'June 2018');
insert into reviews (poster_id, profile_id, title, body, stars, dateVal) 
values (10, 5, 'Direct and to the point', 'Just started my lessons with Steve on guitar. I am so excited. It was easy and he is a great teacher!!! I literally had no idea what string is what and how to do anything. Thought it might be difficult not to do this in person, but it went amazing!', 4, 'October 2016');
insert into reviews (poster_id, profile_id, title, body, stars, dateVal) 
values (10, 6, 'Knowledgeable and Patient Tutor', 'Just started my lessons with Steve on guitar. I am so excited. It was easy and he is a great teacher!!! I literally had no idea what string is what and how to do anything. Thought it might be difficult not to do this in person, but it went amazing!Just started my lessons with Steve on guitar. I am so excited. It was easy and he is a great teacher!!! I literally had no idea what string is what and how to do anything. Thought it might be difficult not to do this in person, but it went amazing!', 5, 'July 2015');
insert into reviews (poster_id, profile_id, title, body, stars, dateVal) 
values (10, 7, 'The BEST tutor', 'Just started my lessons with Steve on guitar. I am so excited. It was easy and he is a great teacher!!! I literally had no idea what string is what and how to do anything. Thought it might be difficult not to do this in person, but it went amazing!', 4, 'August 2018');
insert into reviews (poster_id, profile_id, title, body, stars, dateVal) 
values (10, 8, 'Great lesson! Very impressed', 'Just started my lessons with Steve on guitar. I am so excited. It was easy and he is a great teacher!!! I literally had no idea what string is what and how to do anything. Thought it might be difficult not to do this in person, but it went amazing!', 4, 'June 2018');
insert into reviews (poster_id, profile_id, title, body, stars, dateVal) 
values (10, 9, 'Stayed Longer For a Tough Lesson', 'Just started my lessons with Steve on guitar. I am so excited. It was easy and he is a great teacher!!! I literally had no idea what string is what and how to do anything. Thought it might be difficult not to do this in person, but it went amazing!', 5, 'Decemer 2014');

insert into reviews (poster_id, profile_id, title, body, stars, dateVal) 
values (11, 1, 'Stayed Longer For a Tough Lesson', 'Our 10 y.o. son is enthused to learn playing the guitar after his first lesson with Steve. He is looking forward to more lessons and learning more playing the guitar.', 5, 'September 2017');
insert into reviews (poster_id, profile_id, title, body, stars, dateVal) 
values (11, 2, 'Great lesson! Very impressed', 'Our 10 y.o. son is enthused to learn playing the guitar after his first lesson with Steve. He is looking forward to more lessons and learning more playing the guitar.', 4, 'May 2018');
insert into reviews (poster_id, profile_id, title, body, stars, dateVal) 
values (11, 3, 'Knowledgeable and Patient Tutor', 'Our 10 y.o. son is enthused to learn playing the guitar after his first lesson with Steve. He is looking forward to more lessons and learning more playing the guitar.', 4, 'May 2018');
insert into reviews (poster_id, profile_id, title, body, stars, dateVal) 
values (11, 4, 'The BEST tutor', 'Our 10 y.o. son is enthused to learn playing the guitar after his first lesson with Steve. He is looking forward to more lessons and learning more playing the guitar.', 5, 'June 2018');
insert into reviews (poster_id, profile_id, title, body, stars, dateVal) 
values (11, 5, 'The BEST tutor', 'Our 10 y.o. son is enthused to learn playing the guitar after his first lesson with Steve. He is looking forward to more lessons and learning more playing the guitar.', 4, 'October 2016');
insert into reviews (poster_id, profile_id, title, body, stars, dateVal) 
values (11, 6, 'Direct and to the point', 'Our 10 y.o. son is enthused to learn playing the guitar after his first lesson with Steve. He is looking forward to more lessons and learning more playing the guitar.', 5, 'July 2015');
insert into reviews (poster_id, profile_id, title, body, stars, dateVal) 
values (11, 7, 'Knowledgeable and Patient Tutor', 'Our 10 y.o. son is enthused to learn playing the guitar after his first lesson with Steve. He is looking forward to more lessons and learning more playing the guitar.', 4, 'August 2018');
insert into reviews (poster_id, profile_id, title, body, stars, dateVal) 
values (11, 8, 'Great lesson! Very impressed', 'Our 10 y.o. son is enthused to learn playing the guitar after his first lesson with Steve. He is looking forward to more lessons and learning more playing the guitar.', 4, 'June 2018');
insert into reviews (poster_id, profile_id, title, body, stars, dateVal) 
values (11, 9, 'Stayed Longer For a Tough Lesson', 'Our 10 y.o. son is enthused to learn playing the guitar after his first lesson with Steve. He is looking forward to more lessons and learning more playing the guitar.', 5, 'Decemer 2014');

insert into reviews (poster_id, profile_id, title, body, stars, dateVal) 
values (12, 1, 'Knowledgeable and Patient Tutor', 'I was really struggling in my Music 101 class until I had a tutoring session with Steve. There are subjects where I do not understand things the first time and reading music happens to be one of them. However, Steve takes his time to explain it to you. He really breaks it down to the core if you need to take it to that level.', 5, 'September 2017');
insert into reviews (poster_id, profile_id, title, body, stars, dateVal) 
values (12, 2, 'Direct and to the point', 'I was really struggling in my Music 101 class until I had a tutoring session with Steve. There are subjects where I do not understand things the first time and reading music happens to be one of them. However, Steve takes his time to explain it to you. He really breaks it down to the core if you need to take it to that level.', 4, 'May 2018');
insert into reviews (poster_id, profile_id, title, body, stars, dateVal) 
values (12, 3, 'Stayed Longer For a Tough Lesson', 'I was really struggling in my Music 101 class until I had a tutoring session with Steve. There are subjects where I do not understand things the first time and reading music happens to be one of them. However, Steve takes his time to explain it to you. He really breaks it down to the core if you need to take it to that level.', 4, 'May 2018');
insert into reviews (poster_id, profile_id, title, body, stars, dateVal) 
values (12, 4, 'Great lesson! Very impressed', 'I was really struggling in my Music 101 class until I had a tutoring session with Steve. There are subjects where I do not understand things the first time and reading music happens to be one of them. However, Steve takes his time to explain it to you. He really breaks it down to the core if you need to take it to that level.', 5, 'June 2018');
insert into reviews (poster_id, profile_id, title, body, stars, dateVal) 
values (12, 5, 'The BEST tutor', 'I was really struggling in my Music 101 class until I had a tutoring session with Steve. There are subjects where I do not understand things the first time and reading music happens to be one of them. However, Steve takes his time to explain it to you. He really breaks it down to the core if you need to take it to that level.', 4, 'October 2016');
insert into reviews (poster_id, profile_id, title, body, stars, dateVal) 
values (12, 6, 'Knowledgeable and Patient Tutor', 'I was really struggling in my Music 101 class until I had a tutoring session with Steve. There are subjects where I do not understand things the first time and reading music happens to be one of them. However, Steve takes his time to explain it to you. He really breaks it down to the core if you need to take it to that level.', 5, 'July 2015');
insert into reviews (poster_id, profile_id, title, body, stars, dateVal) 
values (12, 7, 'The greatest', 'I was really struggling in my Music 101 class until I had a tutoring session with Steve. There are subjects where I do not understand things the first time and reading music happens to be one of them. However, Steve takes his time to explain it to you. He really breaks it down to the core if you need to take it to that level.', 4, 'August 2018');
insert into reviews (poster_id, profile_id, title, body, stars, dateVal) 
values (12, 8, 'The BEST tutor', 'I was really struggling in my Music 101 class until I had a tutoring session with Steve. There are subjects where I do not understand things the first time and reading music happens to be one of them. However, Steve takes his time to explain it to you. He really breaks it down to the core if you need to take it to that level.', 4, 'June 2018');
insert into reviews (poster_id, profile_id, title, body, stars, dateVal) 
values (12, 9, 'Stayed Longer For a Tough Lesson', 'I was really struggling in my Music 101 class until I had a tutoring session with Steve. There are subjects where I do not understand things the first time and reading music happens to be one of them. However, Steve takes his time to explain it to you. He really breaks it down to the core if you need to take it to that level.', 5, 'Decemer 2014');

insert into reviews (poster_id, profile_id, title, body, stars, dateVal)
values (13, 1, 'Great lesson! Very impressed', 'I was really struggling in my Music 101 class until I had a tutoring session with Steve. There are subjects where I do not understand things the first time and reading music happens to be one of them. However, Steve takes his time to explain it to you. He really breaks it down to the core if you need to take it to that level.', 5, 'September 2017');
insert into reviews (poster_id, profile_id, title, body, stars, dateVal) 
values (13, 2, 'Knowledgeable and Patient Tutor', 'I was really struggling in my Music 101 class until I had a tutoring session with Steve. There are subjects where I do not understand things the first time and reading music happens to be one of them. However, Steve takes his time to explain it to you. He really breaks it down to the core if you need to take it to that level.', 4, 'May 2018');
insert into reviews (poster_id, profile_id, title, body, stars, dateVal) 
values (13, 3, 'The BEST tutor', 'I was really struggling in my Music 101 class until I had a tutoring session with Steve. There are subjects where I do not understand things the first time and reading music happens to be one of them. However, Steve takes his time to explain it to you. He really breaks it down to the core if you need to take it to that level.', 4, 'May 2018');
insert into reviews (poster_id, profile_id, title, body, stars, dateVal) 
values (13, 4, 'Stayed Longer For a Tough Lesson', 'I was really struggling in my Music 101 class until I had a tutoring session with Steve. There are subjects where I do not understand things the first time and reading music happens to be one of them. However, Steve takes his time to explain it to you. He really breaks it down to the core if you need to take it to that level.', 5, 'June 2018');
insert into reviews (poster_id, profile_id, title, body, stars, dateVal) 
values (13, 5, 'The BEST tutor', 'I was really struggling in my Music 101 class until I had a tutoring session with Steve. There are subjects where I do not understand things the first time and reading music happens to be one of them. However, Steve takes his time to explain it to you. He really breaks it down to the core if you need to take it to that level.', 4, 'October 2016');
insert into reviews (poster_id, profile_id, title, body, stars, dateVal) 
values (13, 6, 'Direct and to the point', 'I was really struggling in my Music 101 class until I had a tutoring session with Steve. There are subjects where I do not understand things the first time and reading music happens to be one of them. However, Steve takes his time to explain it to you. He really breaks it down to the core if you need to take it to that level.', 5, 'July 2015');
insert into reviews (poster_id, profile_id, title, body, stars, dateVal) 
values (13, 7, 'Knowledgeable and Patient Tutor', 'I was really struggling in my Music 101 class until I had a tutoring session with Steve. There are subjects where I do not understand things the first time and reading music happens to be one of them. However, Steve takes his time to explain it to you. He really breaks it down to the core if you need to take it to that level.', 4, 'August 2018');
insert into reviews (poster_id, profile_id, title, body, stars, dateVal) 
values (13, 8, 'Stayed Longer For a Tough Lesson', 'I was really struggling in my Music 101 class until I had a tutoring session with Steve. There are subjects where I do not understand things the first time and reading music happens to be one of them. However, Steve takes his time to explain it to you. He really breaks it down to the core if you need to take it to that level.', 4, 'June 2018');
insert into reviews (poster_id, profile_id, title, body, stars, dateVal) 
values (13, 9, 'Great lesson! Very impressed', 'I was really struggling in my Music 101 class until I had a tutoring session with Steve. There are subjects where I do not understand things the first time and reading music happens to be one of them. However, Steve takes his time to explain it to you. He really breaks it down to the core if you need to take it to that level.', 5, 'Decemer 2014');

insert into reviews (poster_id, profile_id, title, body, stars, dateVal) 
values (10, 9, 'Knowledgeable and Patient Tutor', 'Just started my lessons with Steve on guitar. I am so excited. It was easy and he is a great teacher!!! I literally had no idea what string is what and how to do anything. Thought it might be difficult not to do this in person, but it went amazing!', 5, 'September 2017');
insert into reviews (poster_id, profile_id, title, body, stars, dateVal) 
values (10, 8, 'Stayed Longer For a Tough Lesson', 'Just started my lessons with Steve on guitar. I am so excited. It was easy and he is a great teacher!!! I literally had no idea what string is what and how to do anything. Thought it might be difficult not to do this in person, but it went amazing!', 4, 'May 2018');
insert into reviews (poster_id, profile_id, title, body, stars, dateVal) 
values (10, 7, 'Great lesson! Very impressed', 'Just started my lessons with Steve on guitar. I am so excited. It was easy and he is a great teacher!!! I literally had no idea what string is what and how to do anything. Thought it might be difficult not to do this in person, but it went amazing!', 4, 'May 2018');
insert into reviews (poster_id, profile_id, title, body, stars, dateVal) 
values (10, 6, 'The BEST tutor', 'Just started my lessons with Steve on guitar. I am so excited. It was easy and he is a great teacher!!! I literally had no idea what string is what and how to do anything. Thought it might be difficult not to do this in person, but it went amazing!', 5, 'June 2018');
insert into reviews (poster_id, profile_id, title, body, stars, dateVal) 
values (10, 5, 'Direct and to the point', 'Just started my lessons with Steve on guitar. I am so excited. It was easy and he is a great teacher!!! I literally had no idea what string is what and how to do anything. Thought it might be difficult not to do this in person, but it went amazing!', 4, 'October 2016');
insert into reviews (poster_id, profile_id, title, body, stars, dateVal) 
values (10, 4, 'Knowledgeable and Patient Tutor', 'Just started my lessons with Steve on guitar. I am so excited. It was easy and he is a great teacher!!! I literally had no idea what string is what and how to do anything. Thought it might be difficult not to do this in person, but it went amazing!Just started my lessons with Steve on guitar. I am so excited. It was easy and he is a great teacher!!! I literally had no idea what string is what and how to do anything. Thought it might be difficult not to do this in person, but it went amazing!', 5, 'July 2015');
insert into reviews (poster_id, profile_id, title, body, stars, dateVal) 
values (10, 3, 'The BEST tutor', 'Just started my lessons with Steve on guitar. I am so excited. It was easy and he is a great teacher!!! I literally had no idea what string is what and how to do anything. Thought it might be difficult not to do this in person, but it went amazing!', 4, 'August 2018');
insert into reviews (poster_id, profile_id, title, body, stars, dateVal) 
values (10, 2, 'Great lesson! Very impressed', 'Just started my lessons with Steve on guitar. I am so excited. It was easy and he is a great teacher!!! I literally had no idea what string is what and how to do anything. Thought it might be difficult not to do this in person, but it went amazing!', 4, 'June 2018');
insert into reviews (poster_id, profile_id, title, body, stars, dateVal) 
values (10, 1, 'Stayed Longer For a Tough Lesson', 'Just started my lessons with Steve on guitar. I am so excited. It was easy and he is a great teacher!!! I literally had no idea what string is what and how to do anything. Thought it might be difficult not to do this in person, but it went amazing!', 5, 'Decemer 2014');

insert into reviews (poster_id, profile_id, title, body, stars, dateVal) 
values (11, 9, 'Stayed Longer For a Tough Lesson', 'Our 10 y.o. son is enthused to learn playing the guitar after his first lesson with Steve. He is looking forward to more lessons and learning more playing the guitar.', 5, 'September 2017');
insert into reviews (poster_id, profile_id, title, body, stars, dateVal) 
values (11, 8, 'Great lesson! Very impressed', 'Our 10 y.o. son is enthused to learn playing the guitar after his first lesson with Steve. He is looking forward to more lessons and learning more playing the guitar.', 4, 'May 2018');
insert into reviews (poster_id, profile_id, title, body, stars, dateVal) 
values (11, 7, 'Knowledgeable and Patient Tutor', 'Our 10 y.o. son is enthused to learn playing the guitar after his first lesson with Steve. He is looking forward to more lessons and learning more playing the guitar.', 4, 'May 2018');
insert into reviews (poster_id, profile_id, title, body, stars, dateVal) 
values (11, 6, 'The BEST tutor', 'Our 10 y.o. son is enthused to learn playing the guitar after his first lesson with Steve. He is looking forward to more lessons and learning more playing the guitar.', 5, 'June 2018');
insert into reviews (poster_id, profile_id, title, body, stars, dateVal) 
values (11, 5, 'The BEST tutor', 'Our 10 y.o. son is enthused to learn playing the guitar after his first lesson with Steve. He is looking forward to more lessons and learning more playing the guitar.', 4, 'October 2016');
insert into reviews (poster_id, profile_id, title, body, stars, dateVal) 
values (11, 4, 'Direct and to the point', 'Our 10 y.o. son is enthused to learn playing the guitar after his first lesson with Steve. He is looking forward to more lessons and learning more playing the guitar.', 5, 'July 2015');
insert into reviews (poster_id, profile_id, title, body, stars, dateVal) 
values (11, 3, 'Knowledgeable and Patient Tutor', 'Our 10 y.o. son is enthused to learn playing the guitar after his first lesson with Steve. He is looking forward to more lessons and learning more playing the guitar.', 4, 'August 2018');
insert into reviews (poster_id, profile_id, title, body, stars, dateVal) 
values (11, 2, 'Great lesson! Very impressed', 'Our 10 y.o. son is enthused to learn playing the guitar after his first lesson with Steve. He is looking forward to more lessons and learning more playing the guitar.', 4, 'June 2018');
insert into reviews (poster_id, profile_id, title, body, stars, dateVal) 
values (11, 1, 'Stayed Longer For a Tough Lesson', 'Our 10 y.o. son is enthused to learn playing the guitar after his first lesson with Steve. He is looking forward to more lessons and learning more playing the guitar.', 5, 'Decemer 2014');

insert into reviews (poster_id, profile_id, title, body, stars, dateVal) 
values (12, 9, 'Knowledgeable and Patient Tutor', 'I was really struggling in my Music 101 class until I had a tutoring session with Steve. There are subjects where I do not understand things the first time and reading music happens to be one of them. However, Steve takes his time to explain it to you. He really breaks it down to the core if you need to take it to that level.', 5, 'September 2017');
insert into reviews (poster_id, profile_id, title, body, stars, dateVal) 
values (12, 8, 'Direct and to the point', 'I was really struggling in my Music 101 class until I had a tutoring session with Steve. There are subjects where I do not understand things the first time and reading music happens to be one of them. However, Steve takes his time to explain it to you. He really breaks it down to the core if you need to take it to that level.', 4, 'May 2018');
insert into reviews (poster_id, profile_id, title, body, stars, dateVal) 
values (12, 7, 'Stayed Longer For a Tough Lesson', 'I was really struggling in my Music 101 class until I had a tutoring session with Steve. There are subjects where I do not understand things the first time and reading music happens to be one of them. However, Steve takes his time to explain it to you. He really breaks it down to the core if you need to take it to that level.', 4, 'May 2018');
insert into reviews (poster_id, profile_id, title, body, stars, dateVal) 
values (12, 6, 'Great lesson! Very impressed', 'I was really struggling in my Music 101 class until I had a tutoring session with Steve. There are subjects where I do not understand things the first time and reading music happens to be one of them. However, Steve takes his time to explain it to you. He really breaks it down to the core if you need to take it to that level.', 5, 'June 2018');
insert into reviews (poster_id, profile_id, title, body, stars, dateVal) 
values (12, 5, 'The BEST tutor', 'I was really struggling in my Music 101 class until I had a tutoring session with Steve. There are subjects where I do not understand things the first time and reading music happens to be one of them. However, Steve takes his time to explain it to you. He really breaks it down to the core if you need to take it to that level.', 4, 'October 2016');
insert into reviews (poster_id, profile_id, title, body, stars, dateVal) 
values (12, 4, 'Knowledgeable and Patient Tutor', 'I was really struggling in my Music 101 class until I had a tutoring session with Steve. There are subjects where I do not understand things the first time and reading music happens to be one of them. However, Steve takes his time to explain it to you. He really breaks it down to the core if you need to take it to that level.', 5, 'July 2015');
insert into reviews (poster_id, profile_id, title, body, stars, dateVal) 
values (12, 3, 'The greatest', 'I was really struggling in my Music 101 class until I had a tutoring session with Steve. There are subjects where I do not understand things the first time and reading music happens to be one of them. However, Steve takes his time to explain it to you. He really breaks it down to the core if you need to take it to that level.', 4, 'August 2018');
insert into reviews (poster_id, profile_id, title, body, stars, dateVal) 
values (12, 2, 'The BEST tutor', 'I was really struggling in my Music 101 class until I had a tutoring session with Steve. There are subjects where I do not understand things the first time and reading music happens to be one of them. However, Steve takes his time to explain it to you. He really breaks it down to the core if you need to take it to that level.', 4, 'June 2018');
insert into reviews (poster_id, profile_id, title, body, stars, dateVal) 
values (12, 1, 'Stayed Longer For a Tough Lesson', 'I was really struggling in my Music 101 class until I had a tutoring session with Steve. There are subjects where I do not understand things the first time and reading music happens to be one of them. However, Steve takes his time to explain it to you. He really breaks it down to the core if you need to take it to that level.', 5, 'Decemer 2014');

insert into reviews (poster_id, profile_id, title, body, stars, dateVal)
values (13, 9, 'Great lesson! Very impressed', 'I was really struggling in my Music 101 class until I had a tutoring session with Steve. There are subjects where I do not understand things the first time and reading music happens to be one of them. However, Steve takes his time to explain it to you. He really breaks it down to the core if you need to take it to that level.', 5, 'September 2017');
insert into reviews (poster_id, profile_id, title, body, stars, dateVal) 
values (13, 8, 'Knowledgeable and Patient Tutor', 'I was really struggling in my Music 101 class until I had a tutoring session with Steve. There are subjects where I do not understand things the first time and reading music happens to be one of them. However, Steve takes his time to explain it to you. He really breaks it down to the core if you need to take it to that level.', 4, 'May 2018');
insert into reviews (poster_id, profile_id, title, body, stars, dateVal) 
values (13, 7, 'The BEST tutor', 'I was really struggling in my Music 101 class until I had a tutoring session with Steve. There are subjects where I do not understand things the first time and reading music happens to be one of them. However, Steve takes his time to explain it to you. He really breaks it down to the core if you need to take it to that level.', 4, 'May 2018');
insert into reviews (poster_id, profile_id, title, body, stars, dateVal) 
values (13, 6, 'Stayed Longer For a Tough Lesson', 'I was really struggling in my Music 101 class until I had a tutoring session with Steve. There are subjects where I do not understand things the first time and reading music happens to be one of them. However, Steve takes his time to explain it to you. He really breaks it down to the core if you need to take it to that level.', 5, 'June 2018');
insert into reviews (poster_id, profile_id, title, body, stars, dateVal) 
values (13, 5, 'The BEST tutor', 'I was really struggling in my Music 101 class until I had a tutoring session with Steve. There are subjects where I do not understand things the first time and reading music happens to be one of them. However, Steve takes his time to explain it to you. He really breaks it down to the core if you need to take it to that level.', 4, 'October 2016');
insert into reviews (poster_id, profile_id, title, body, stars, dateVal) 
values (13, 4, 'Direct and to the point', 'I was really struggling in my Music 101 class until I had a tutoring session with Steve. There are subjects where I do not understand things the first time and reading music happens to be one of them. However, Steve takes his time to explain it to you. He really breaks it down to the core if you need to take it to that level.', 5, 'July 2015');
insert into reviews (poster_id, profile_id, title, body, stars, dateVal) 
values (13, 3, 'Knowledgeable and Patient Tutor', 'I was really struggling in my Music 101 class until I had a tutoring session with Steve. There are subjects where I do not understand things the first time and reading music happens to be one of them. However, Steve takes his time to explain it to you. He really breaks it down to the core if you need to take it to that level.', 4, 'August 2018');
insert into reviews (poster_id, profile_id, title, body, stars, dateVal) 
values (13, 2, 'Stayed Longer For a Tough Lesson', 'I was really struggling in my Music 101 class until I had a tutoring session with Steve. There are subjects where I do not understand things the first time and reading music happens to be one of them. However, Steve takes his time to explain it to you. He really breaks it down to the core if you need to take it to that level.', 4, 'June 2018');
insert into reviews (poster_id, profile_id, title, body, stars, dateVal) 
values (13, 1, 'Great lesson! Very impressed', 'I was really struggling in my Music 101 class until I had a tutoring session with Steve. There are subjects where I do not understand things the first time and reading music happens to be one of them. However, Steve takes his time to explain it to you. He really breaks it down to the core if you need to take it to that level.', 5, 'Decemer 2014');




