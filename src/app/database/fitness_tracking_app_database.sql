-- phpMyAdmin SQL Dump
-- version 4.9.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 18, 2019 at 08:14 AM
-- Server version: 10.4.8-MariaDB
-- PHP Version: 7.3.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `fitness_tracking_app_database`
--

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `email` varchar(255) NOT NULL,
  `date_of_birth` varchar(255) DEFAULT NULL,
  `full_name` varchar(255) DEFAULT NULL,
  `gender` varchar(255) DEFAULT NULL,
  `height` int(11) NOT NULL,
  `mobile_number` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `subscription_type` varchar(255) DEFAULT NULL,
  `weight` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`email`, `date_of_birth`, `full_name`, `gender`, `height`, `mobile_number`, `password`, `subscription_type`, `weight`) VALUES
('abc@gmail.com', '20-11-2019', 'ajskdn', 'male', 50, '2938294823', 'Abc@124', 'free', 30),
('akjshdja@gm.co', '29-11-2019', 'ashd', 'male', 50, '1717177171', '$2a$12$uMEA/2ygug7HkdKqtWuJ5OegyB95lEUxO9XBC9wHKReatKdXwx.ty', 'free', 30),
('asd@gmail.com', '21-11-2019', 'kasj', 'male', 50, '8238283882', '$2a$12$U42XoX0Z9tdjoCVEZq9F1uFRtFoCVVeuoFH5Pfjx2KILQXqgHrh5K', 'free', 30),
('askd@kssm.co', '21-11-2019', 'sda', 'male', 50, '8288181818', '$2a$12$Med7A8jpEZr7/9HDzQdamuwvBi6rX3f1PZ5WGf4MNNWk5VDWo/wPy', 'free', 30),
('chirag.pranshu@gmail.com', '06-11-2019', 'Chirag Dhussa', 'male', 170, '7087092373', '$2a$12$3W/uJm.AcFDTlXja5p3mBO62sVpnVc.D1XDq/VeqT8g949KHeK8DG', 'free', 65),
('rahul.1212@gmail.com', '27-11-2019', 'Rahul', 'male', 50, '1727273283', 'Abc@123', 'free', 30),
('rahul@gmail.com', '27-11-2019', 'Rahul', 'male', 50, '8128283821', '$2a$12$Nj2W1yWrXyx0/0AuGyMGBOW3k8PhmIJXRNePogzk9jFjK2AWiASwi', 'free', 30),
('vaishnavi97chali@gmail.com', '06-06-1997', 'Vaishnavi', 'female', 150, '8330983959', '$2a$12$YKv8yC5Z7GVlWHb54.BCX.2mRVMKd2MlCa/LYgvxemErzdoITvj4i', 'free', 55);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`email`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
