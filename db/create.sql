CREATE DATABASE common;

CREATE TABLE common.teachers (
    id int PRIMARY KEY AUTO_INCREMENT,
    teacher_name varchar(50) NOT NULL,
    teacher_position varchar(50) DEFAULT 'General Teacher',
    create_date datetime DEFAULT current_timestamp,
    update_date datetime ON UPDATE current_timestamp
);

CREATE TABLE common.student (
    id int PRIMARY KEY AUTO_INCREMENT,
    name varchar(20) NOT NULL,
    grade int(1) COMMENT 'student grade',
    create_date datetime DEFAULT current_timestamp,
    update_date datetime ON UPDATE current_timestamp
);

CREATE TABLE common.student_data (
    id int PRIMARY KEY AUTO_INCREMENT,
    std_id int not NULL,
    address varchar(100),
    phone varchar(20),
    parent_phone varchar(20) ,
    birth_date varchar(20),
    join_club_id int COMMENT 'join club id',
    create_date datetime DEFAULT current_timestamp,
    update_date datetime ON UPDATE current_timestamp
);

CREATE TABLE common.club (
    id int PRIMARY KEY AUTO_INCREMENT,
    club_name varchar(20) NOT NULL,
    club_location varchar(10) COMMENT COMMENT 'club room number',
    rep_std_id int COMMENT 'a representative student of the club',
    create_date datetime DEFAULT current_timestamp,
    update_date datetime ON UPDATE current_timestamp
);

CREATE TABLE common.class_name (
    id int PRIMARY KEY AUTO_INCREMENT,
    class_number int UNIQUE KEY COMMENT 'student class number',
    teacher_id int NOT NULL
);
