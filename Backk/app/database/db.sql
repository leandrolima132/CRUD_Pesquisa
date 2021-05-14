create database DB_Pesquisa;

 \c db_pesquisa;

create table Pessoas(
cpf varchar(14) not null primary key,
email varchar(100),
name varchar(100) not null,
rua varchar(100) not null,
numerorua int not null,
bairro varchar(100) not null,
cep varchar(100) not null,
cidade varchar(100) not null,
password varchar(40) not null,
constraint cpf unique (cpf)
);

create table cliente(
id serial primary key,
name varchar(40) not null,
password varchar (40) not null,
constraint cliente_pkey primary key (id)
);

create table pesquisa(
id serial primary key,
datainicio date not null,
datafim date not null,
idcliente int,
pergunta varchar(200) not null,
resposta varchar(200),
pessoaresp varchar(100),
 constraint pesquisa_pkey primary key (id),
    constraint "clientePesquisa" foreign key (idcliente)
        references cliente (id)
);

CREATE TABLE pessoas_telefones
(
    id serial primary key,
    telefone varchar(20) not null,
    telfixo varchar(20) not null,
    pessoa varchar(14) not null,
    constraint pessoas_telefones_pkey primary key (id),
    constraint "pessoaTelefones" foreign key (pessoa)
        references pessoas (cpf)