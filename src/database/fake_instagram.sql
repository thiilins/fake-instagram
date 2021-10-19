CREATE DATABASE IF NOT EXISTS fake_instagram;
USE fake_instagram;
CREATE TABLE IF NOT EXISTS users (
  id int(10) PRIMARY KEY  NOT NULL AUTO_INCREMENT ,
  name varchar(200) DEFAULT NULL,
  email varchar(200) DEFAULT NULL,
  password varchar(256) DEFAULT NULL,
  username varchar(200) DEFAULT NULL,
  avatar varchar(200) DEFAULT NULL,
  created_at timestamp NOT NULL DEFAULT current_timestamp(),
  updated_at timestamp NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
);

CREATE TABLE publications (
 id int(10) PRIMARY KEY  NOT NULL AUTO_INCREMENT,
 image varchar(200) DEFAULT NULL,
 content varchar(3000) DEFAULT NULL,
 user_id int(10) DEFAULT NULL,
	created_at timestamp NOT NULL DEFAULT current_timestamp(),
  updated_at timestamp NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
);


alter table publications
add foreign key (user_id) references users(id);
