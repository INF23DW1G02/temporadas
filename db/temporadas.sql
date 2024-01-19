DROP SCHEMA IF EXISTS `temporadas`;


create schema temporadas;
use temporadas;
create table Temporada(
id int auto_increment primary key,
nome varchar(50)

);
create table Equipa(
id int auto_increment primary key,
nome char(50),
id_temporada int
);


create table Estatistica (
id int auto_increment primary key,
golos_marcados int ,
golos_sofridos int,
faltas_sofridas int,
faltas_feitas int,
id_temporada int,
id_equipa int,
id_jogador int
);

create table Jogador (
id int auto_increment primary key ,
nome nvarchar (50),
numero int,
id_equipa int
);

create table Jogo (
id int auto_increment primary key ,
resultado varchar (100),
id_equipa int

);

create table Ocorrencia(
id int auto_increment primary key ,
num_faltas int,
num_golos int,
num_cartao int,
substituicao VARCHAR(3),
id_temporada int,
id_equipa int,
id_jogador int,
id_jogo int
);

INSERT INTO `Equipa` (id_temporada, nome) VALUES
(1,'Benfica'),
(1,'Porto'),
(1,'Sporting'),
(1,'SP Braga'),
(1,'Rio ave'),
(1,'Famalicao'),
(1,'Estoril'),
(1,'Santa Clara'),
(1,'Arrouca'),
(1,'Chaves'),
(1,'Feirrerence'),
(1,'Leixoes'),
(1,'Passos Ferreira'),
(1,'Maritimo'),
(1,'Nacional');
INSERT INTO `Estatistica` (golos_marcados, golos_sofridos, faltas_sofridas, faltas_feitas, id_temporada, id_equipa, id_jogador)  VALUES
(3,1,4,0,1,1,1);
-- (2,0,7,2,1,2,1),
-- (2,1,3,2,1,5,1),
-- (0,1,9,11,1,4,1),
-- (0,3,0,1,1,3,1),
-- (1,0,4,1,1,6,1),
-- (0,0,4,6,1,7,1),
-- (1,0,4,10,1,8,1),
-- (0,5,0,0,2,9,1),
-- (0,1,5,2,10,1);
INSERT INTO `Temporada` (nome) VALUES ('Temporada 1');

INSERT INTO `Jogador`  (nome, numero, id_equipa) VALUES ('Dinis Ximenes',11,1);
INSERT INTO `Jogador`  (nome, numero, id_equipa) VALUES ('Carlos Quicanga',17,1);
INSERT INTO `Jogador`  (nome, numero, id_equipa) VALUES ('Rafael Silva',1,1);
INSERT INTO `Jogador`  (nome, numero, id_equipa) VALUES ('Cristiano Ronaldo',30,1);
INSERT INTO `Jogador`  (nome, numero, id_equipa) VALUES ('Paulo Futre',10,1);
INSERT INTO `Jogador`  (nome, numero, id_equipa) VALUES ('Luis Figo',7,1);
INSERT INTO `Jogador`  (nome, numero, id_equipa) VALUES ('Grimaldo',6,1);
INSERT INTO `Jogador`  (nome, numero, id_equipa) VALUES ('Gabriel Jesus',8,1);
INSERT INTO `Jogador`  (nome, numero, id_equipa) VALUES ('Marega',1,2);
INSERT INTO `Jogador`  (nome, numero, id_equipa) VALUES ('Maicon',3,2);
INSERT INTO `Jogador`  (nome, numero, id_equipa) VALUES ('Ederson',33,2);
INSERT INTO `Jogador`  (nome, numero, id_equipa) VALUES ('Zaidu',10,2);
INSERT INTO `Jogador`  (nome, numero, id_equipa) VALUES ('Deco',11,2);
INSERT INTO `Jogador`  (nome, numero, id_equipa) VALUES ('Maradona',7,2);
INSERT INTO `Jogador`  (nome, numero, id_equipa) VALUES ('Pelé',8,2);
INSERT INTO `Jogador`  (nome, numero, id_equipa) VALUES ('Artur Lima',1,3);
INSERT INTO `Jogador`  (nome, numero, id_equipa) VALUES ('Artur Costa',2,3);
INSERT INTO `Jogador`  (nome, numero, id_equipa) VALUES ('Casimiro Teixeira',3,3);
INSERT INTO `Jogador`  (nome, numero, id_equipa) VALUES ('Rodrigo Gomes',4,3);
INSERT INTO `Jogador`  (nome, numero, id_equipa) VALUES ('Carlos de Pina',6,3);
INSERT INTO `Jogador`  (nome, numero, id_equipa) VALUES ('Jovane Cabral',7,3);
INSERT INTO `Jogador`  (nome, numero, id_equipa) VALUES ('Ariel Dos Santos',9,3);
INSERT INTO `Jogador`  (nome, numero, id_equipa) VALUES ('Carlos Andrade',11,3);
INSERT INTO `Jogador`  (nome, numero, id_equipa) VALUES ('Carlos Pina',1,4);
INSERT INTO `Jogador`  (nome, numero, id_equipa) VALUES ('Alberto Lopes',2,4);
INSERT INTO `Jogador`  (nome, numero, id_equipa) VALUES ('jogador 1',4,4);
INSERT INTO `Jogador`  (nome, numero, id_equipa) VALUES ('jogador 2',5,4);
INSERT INTO `Jogador`  (nome, numero, id_equipa) VALUES ('jogador 3',6,4);
INSERT INTO `Jogador`  (nome, numero, id_equipa) VALUES ('jogador 4',7,4);
INSERT INTO `Jogador`  (nome, numero, id_equipa) VALUES ('jogador 5',8,4);
INSERT INTO `Jogador`  (nome, numero, id_equipa) VALUES ('jogador 6',1,5);
INSERT INTO `Jogador`  (nome, numero, id_equipa) VALUES ('jogador 7',2,5);
INSERT INTO `Jogador`  (nome, numero, id_equipa) VALUES ('jogador 8',3,5);
INSERT INTO `Jogador`  (nome, numero, id_equipa) VALUES ('jogador 9',4,5);
INSERT INTO `Jogador`  (nome, numero, id_equipa) VALUES ('jogador 10',5,5);
INSERT INTO `Jogador`  (nome, numero, id_equipa) VALUES ('jogador 11',6,5);
INSERT INTO `Jogador`  (nome, numero, id_equipa) VALUES ('jogador 12',7,5);
INSERT INTO `Jogador`  (nome, numero, id_equipa) VALUES ('jogador 13',8,5);
INSERT INTO `Jogador`  (nome, numero, id_equipa) VALUES ('jogador 14',9,5);
INSERT INTO `Jogador`  (nome, numero, id_equipa) VALUES ('jogador 15',10,5);
INSERT INTO `Jogador`  (nome, numero, id_equipa) VALUES ('jogador 16',1,6);
INSERT INTO `Jogador`  (nome, numero, id_equipa) VALUES ('jogador 17',2,6);
INSERT INTO `Jogador`  (nome, numero, id_equipa) VALUES ('jogador 18',3,6);
INSERT INTO `Jogador`  (nome, numero, id_equipa) VALUES ('jogador 19',4,6);
INSERT INTO `Jogador`  (nome, numero, id_equipa) VALUES ('jogador 20',5,6);
INSERT INTO `Jogador`  (nome, numero, id_equipa) VALUES ('jogador 21',6,6);
INSERT INTO `Jogador`  (nome, numero, id_equipa) VALUES ('jogador 22',7,6);
INSERT INTO `Jogador`  (nome, numero, id_equipa) VALUES ('jogador 23',8,6);
INSERT INTO `Jogador`  (nome, numero, id_equipa) VALUES ('jogador 24',9,6);
INSERT INTO `Jogador`  (nome, numero, id_equipa) VALUES ('jogador 25',10,6);
INSERT INTO `Jogador`  (nome, numero, id_equipa) VALUES ('jogador 26',1,6);
INSERT INTO `Jogador`  (nome, numero, id_equipa) VALUES ('jogador 27',2,6);
INSERT INTO `Jogador`  (nome, numero, id_equipa) VALUES ('jogador 28',3,6);
INSERT INTO `Jogador`  (nome, numero, id_equipa) VALUES ('jogador 29',4,6);
INSERT INTO `Jogador`  (nome, numero, id_equipa) VALUES ('jogador 30',5,6);
INSERT INTO `Jogador`  (nome, numero, id_equipa) VALUES ('jogador 31',6,6);
INSERT INTO `Jogador`  (nome, numero, id_equipa) VALUES ('jogador 32',7,6);
INSERT INTO `Jogador`  (nome, numero, id_equipa) VALUES ('jogador 33',8,6);
INSERT INTO `Jogador`  (nome, numero, id_equipa) VALUES ('jogador 34',9,6);
INSERT INTO `Jogador`  (nome, numero, id_equipa) VALUES ('jogador 35',10,6);
INSERT INTO `Jogador`  (nome, numero, id_equipa) VALUES ('jogador 36',1,7);
INSERT INTO `Jogador`  (nome, numero, id_equipa) VALUES ('jogador 37',2,7);
INSERT INTO `Jogador`  (nome, numero, id_equipa) VALUES ('jogador 38',3,7);
INSERT INTO `Jogador`  (nome, numero, id_equipa) VALUES ('jogador 39',4,7);
INSERT INTO `Jogador`  (nome, numero, id_equipa) VALUES ('jogador 40',5,7);
INSERT INTO `Jogador`  (nome, numero, id_equipa) VALUES ('jogador 41',6,7);
INSERT INTO `Jogador`  (nome, numero, id_equipa) VALUES ('jogador 42',7,7);
INSERT INTO `Jogador`  (nome, numero, id_equipa) VALUES ('jogador 43',8,7);
INSERT INTO `Jogador`  (nome, numero, id_equipa) VALUES ('jogador 42',1,8);
INSERT INTO `Jogador`  (nome, numero, id_equipa) VALUES ('jogador 43',1,8);
INSERT INTO `Jogador`  (nome, numero, id_equipa) VALUES ('jogador 44',2,8);
INSERT INTO `Jogador`  (nome, numero, id_equipa) VALUES ('jogador 45',3,8);
INSERT INTO `Jogador`  (nome, numero, id_equipa) VALUES ('jogador 46',4,8);
INSERT INTO `Jogador`  (nome, numero, id_equipa) VALUES ('jogador 47',5,8);
INSERT INTO `Jogador`  (nome, numero, id_equipa) VALUES ('jogador 48',8,8);
INSERT INTO `Jogador`  (nome, numero, id_equipa) VALUES ('jogador 49',77,9);
INSERT INTO `Jogador`  (nome, numero, id_equipa) VALUES ('jogador 50',1,9);
INSERT INTO `Jogador`  (nome, numero, id_equipa) VALUES ('jogador 51',2,9);
INSERT INTO `Jogador`  (nome, numero, id_equipa) VALUES ('jogador 52',3,9);
INSERT INTO `Jogador`  (nome, numero, id_equipa) VALUES ('jogador 53',4,9);
INSERT INTO `Jogador`  (nome, numero, id_equipa) VALUES ('jogador 54',5,9);
INSERT INTO `Jogador`  (nome, numero, id_equipa) VALUES ('jogador 55',1,10);
INSERT INTO `Jogador`  (nome, numero, id_equipa) VALUES ('jogador 56',2,10);
INSERT INTO `Jogador`  (nome, numero, id_equipa) VALUES ('jogador 57',3,10);
INSERT INTO `Jogador`  (nome, numero, id_equipa) VALUES ('jogador 58',4,10);
INSERT INTO `Jogador`  (nome, numero, id_equipa) VALUES ('jogador 59',5,10);
INSERT INTO `Jogador`  (nome, numero, id_equipa) VALUES ('jogador 60',1,10);
INSERT INTO `Jogador`  (nome, numero, id_equipa) VALUES ('jogador 61',1,11);
INSERT INTO `Jogador`  (nome, numero, id_equipa) VALUES ('jogador 62',2,11);
INSERT INTO `Jogador`  (nome, numero, id_equipa) VALUES ('jogador 63',3,11);


INSERT INTO `Jogo` (resultado, id_equipa) VALUES
('3 - 1',1),
('1 - 3',2),
('2 - 0',3),
('0 - 2',4),
('2 - 2',5),
('2 - 2',6),
('5 - 2',8),
('2 - 5',16),
('0 - 0',7),
('0 - 0',9),
('0 - 0',10),
('0 - 0',11),
('1 - 0',12),
('0 - 1',13),
('1 - 1',14),
('1 - 1',15),
('5 - 1',1),
('1 - 5',16);
INSERT INTO `Ocorrencia` (num_faltas, num_golos, num_cartao , substituicao, id_temporada, id_equipa, id_jogador, id_jogo) VALUES
(0,3,0,'Nao',1,1,1,1),
(0,3,0,'Nao',1,1,1,1),
(0,3,0,'Nao',1,1,1,1),
(3,2,0,'nao',1,11,1,2),
(3,2,0,'nao',1,4,1,3),
(5,0,1,'nao',1,8,1,6),
(5,1,1,'sim',2,9,1,2),
(5,0,1,'sim',2,1,1,15);



GRANT ALL PRIVILEGES ON *.* TO 'root'@'%' IDENTIFIED BY '12345678'
