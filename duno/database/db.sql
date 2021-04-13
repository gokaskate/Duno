CREATE DATABASE animalhelp;

USE animalhelp;

CREATE TABLE animales(
    id INT(10) NOT NULL auto_increment,
    nombre_animal varchar(40) NOT NULL,
    sexo varchar(40) NOT NULL,
    tamaño varchar(40) NOT NULL,
    raza varchar(40) NOT NULL,
    especie varchar(40) NOT NULL,
    edad varchar (25) NOT NULL,
    nombres_dueño varchar (40) NOT NULL,
    telefono_dueño varchar (15) NOT NULL
);

ALTER TABLE animales
    ADD PRIMARY KEY (id);


CREATE TABLE hogares_depaso(
    id INT(11) NOT NULL auto_increment,
    nombre_hogar varchar(40) NOT NULL,
    direccion varchar(40) NOT NULL,
    telefono varchar(40) NOT NULL,
    cupos varchar(40) NOT NULL
);

ALTER TABLE hogares_depaso
    ADD PRIMARY KEY (id);
