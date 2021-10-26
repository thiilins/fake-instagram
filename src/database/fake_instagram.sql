CREATE DATABASE fake_instagram;
USE fake_instagram;
CREATE TABLE users (
  id int(10) PRIMARY KEY  NOT NULL AUTO_INCREMENT ,
  name varchar(200) DEFAULT NULL,
  email varchar(200) DEFAULT NULL,
  password varchar(256) DEFAULT NULL,
  username varchar(200) DEFAULT NULL,
  avatar varchar(200) DEFAULT NULL,
  createdAt timestamp NOT NULL DEFAULT current_timestamp(),
  updatedAt timestamp NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
);

CREATE TABLE publications (
 id int(10) PRIMARY KEY  NOT NULL AUTO_INCREMENT,
 image varchar(200) DEFAULT NULL,
 content varchar(3000) DEFAULT NULL,
 user_id int(10) DEFAULT NULL,
 createdAt timestamp NOT NULL DEFAULT current_timestamp(),
 updatedAt timestamp NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
);


CREATE TABLE comments(
 id int(10) PRIMARY KEY  NOT NULL AUTO_INCREMENT,
 content varchar(1000),
 publication_id int(10),
 user_id int(10),
 createdAt timestamp NOT NULL DEFAULT current_timestamp(),
 updatedAt timestamp NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()

);

alter table publications
add foreign key (user_id) references users(id);

alter table comments
add foreign key (publication_id) references publications(id),
add foreign key (user_id) references users(id);

-- | Dados de usuário
(id, name, email, password, username, avatar, createdAt, updatedAt)
VALUES(1, 'Usuário', 'usuario@email.com.br', '$2a$10$/3oe.LGVjIAEVNqKmddAjuFwzbncaDgI9ZhVBTsiOgwfj3fRTeCHC', 'JohnDoe', 'default_avatar.png', '2021-10-26 15:26:14', '2021-10-26 15:31:46');

-- |  Dados de Publicações
INSERT INTO fake_instagram.publications
(id, image, content, user_id, createdAt, updatedAt)
VALUES(1, '36acc090-0845-4af4-b1ef-535d11082477.jpg', NULL, 1, '2021-10-26 15:29:51', '2021-10-26 15:29:51');
INSERT INTO fake_instagram.publications
(id, image, content, user_id, createdAt, updatedAt)
VALUES(2, '631d9086-96e3-4842-993f-36acc46b622d.jpg', NULL, 1, '2021-10-26 15:29:59', '2021-10-26 15:29:59');
INSERT INTO fake_instagram.publications
(id, image, content, user_id, createdAt, updatedAt)
VALUES(3, 'c6b329e1-6785-493e-97b8-aebf65eb6ef7.jpg', NULL, 1, '2021-10-26 15:30:06', '2021-10-26 15:30:06');
INSERT INTO fake_instagram.publications
(id, image, content, user_id, createdAt, updatedAt)
VALUES(4, '8fbc0b69-34e3-44eb-bf3a-5853fe575aff.jpg', NULL, 1, '2021-10-26 15:30:13', '2021-10-26 15:30:13');
INSERT INTO fake_instagram.publications
(id, image, content, user_id, createdAt, updatedAt)
VALUES(5, 'b01dfd89-fdb1-4dbe-b9b2-5c41432610ab.jpg', NULL, 1, '2021-10-26 15:30:20', '2021-10-26 15:30:20');
INSERT INTO fake_instagram.publications
(id, image, content, user_id, createdAt, updatedAt)
VALUES(6, 'a9d3b585-c9b4-4f91-bcdc-d9f53eccef5b.jpg', NULL, 1, '2021-10-26 15:30:27', '2021-10-26 15:30:27');
INSERT INTO fake_instagram.users


-- |  Adicionando dados de comentário
INSERT INTO fake_instagram.comments
(id, content, publication_id, user_id, createdAt, updatedAt)
VALUES(2, 'Wow', 1, 1, '2021-10-26 16:22:03', '2021-10-26 16:22:03');
