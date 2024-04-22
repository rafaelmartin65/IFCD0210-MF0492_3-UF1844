-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 16-04-2024 a las 10:40:26
-- Versión del servidor: 10.4.32-MariaDB
-- Versión de PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `tienda`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `articulos`
--

CREATE TABLE `articulos` (
  `codigo` varchar(9) NOT NULL,
  `descripcion` varchar(100) NOT NULL,
  `familia` tinyint(4) NOT NULL,
  `stock` smallint(6) NOT NULL,
  `precio` float(10,2) NOT NULL,
  `impuesto` tinyint(4) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `articulos`
--

INSERT INTO `articulos` (`codigo`, `descripcion`, `familia`, `stock`, `precio`, `impuesto`) VALUES
('I00000001', ' Cerveza', 1, 300, 1.00, 2),
('I00000002', ' Cerveza 0%', 1, 300, 1.00, 2),
('I00000003', ' Agua', 1, 300, 1.00, 2),
('I00000004', ' Pepsi', 1, 500, 1.00, 2),
('I00000005', ' Pepsi Max', 1, 500, 1.00, 2),
('I00000006', ' Pepsi Light', 1, 500, 1.00, 2),
('I00000007', ' Kas Naranja', 1, 500, 1.00, 2),
('I00000008', ' Kas Limón', 1, 500, 1.00, 2),
('I00000009', ' Lipton', 1, 500, 1.00, 2),
('I00000010', ' Seven UP', 1, 500, 1.00, 2),
('I00000011', ' Kreamball Oreo', 2, 300, 2.00, 2),
('I00000012', ' Kreamball Kit Kat', 2, 300, 2.00, 2),
('I00000013', ' Kreamball Lacasitos', 2, 300, 2.00, 2),
('I00000014', ' Sundae chocolate', 2, 300, 2.00, 2),
('I00000015', ' Sundae caramelo', 2, 300, 2.00, 2),
('I00000016', ' Sundae Frutas del bosque', 2, 300, 2.00, 2),
('I00000017', ' Kentucky Fries BBQ Bacon', 3, 500, 3.00, 2),
('I00000018', ' Kentucky Fries', 3, 400, 4.00, 2),
('I00000019', ' Mazorca', 3, 400, 1.00, 2),
('I00000020', ' Patatas fritas', 3, 400, 1.00, 2),
('I00000021', ' 2 Tiras de Pechuga', 3, 400, 1.00, 2),
('I00000022', ' 3 Alitas Picantes', 3, 400, 2.00, 2),
('I00000023', ' Salsa 2Hot4U', 4, 400, 0.50, 2),
('I00000024', ' Salsa Smoky BBQ', 4, 400, 0.50, 2),
('I00000025', ' Salsa Sweet Imperial', 4, 400, 0.50, 2),
('I00000026', ' Boxmaster BBQ Bacon', 5, 500, 3.00, 2),
('I00000027', ' Boxmaster', 5, 500, 3.00, 2),
('I00000028', ' Twister', 5, 500, 2.00, 2),
('I00000029', ' Tower Bacon', 6, 500, 3.00, 2),
('I00000030', ' Towern', 6, 500, 2.00, 2),
('I00000031', ' Double BBC', 6, 500, 3.00, 2),
('I00000032', ' Original Burger', 6, 500, 2.00, 2),
('I00000033', ' BBC', 6, 500, 2.00, 2),
('I00000034', ' 5 Tiras de pechuga + 2 salsas dip', 7, 500, 3.00, 2),
('I00000035', ' 3 Tiras de pechuga + 1 Salsa Dip', 7, 500, 3.00, 2),
('I00000036', ' 8 Alitas Picantes', 7, 500, 3.00, 2),
('I00000037', ' 5 Alitas Picantes', 7, 500, 2.00, 2),
('I00000038', ' 3 Piezas de pollo', 7, 500, 2.00, 2),
('I00000039', ' 2 Piezas de pollo', 7, 500, 1.50, 2),
('I00000040', ' 12 Alitas Picantes', 8, 500, 3.00, 2),
('I00000041', ' 9 Tiras de Pechuga + 3 Salsas Dip', 8, 500, 3.50, 2),
('I00000042', ' 6 Piezas', 8, 500, 3.00, 2),
('I00000043', ' Bucket 12 Tiras de pechuga + 4 salsas dip', 8, 500, 10.00, 2),
('I00000044', ' Bucket 7 Tiras + 7 Alitas + 2 Salsas Dip', 8, 500, 10.00, 2),
('I00000045', ' Menú Bucket 10 Tiras de pechuga + 3 Salsas Dip', 8, 500, 10.00, 2),
('I00000046', ' Bucket 5 Piezas + 5 Alitas', 8, 500, 10.00, 2),
('I00000047', ' Bucket 6 Piezas de pollo', 8, 500, 10.00, 2),
('I00000048', ' Bucket 15 Tiras de pechuga + 5 Salsas Dip', 9, 500, 20.00, 2),
('I00000049', ' Bucket 9 Piezas', 9, 500, 20.00, 2),
('I00000050', ' Bucket 20 Tiras de pechuga + 6 Salsas Dip', 9, 500, 35.00, 2),
('I00000051', ' Bucket 12 Piezas de pollo', 9, 500, 35.00, 2);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `articulos`
--
ALTER TABLE `articulos`
  ADD PRIMARY KEY (`codigo`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
