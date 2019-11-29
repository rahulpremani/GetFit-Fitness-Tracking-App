-- phpMyAdmin SQL Dump
-- version 4.9.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 28, 2019 at 05:14 PM
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
-- Table structure for table `diet_plan`
--

CREATE TABLE `diet_plan` (
  `s_no` int(5) NOT NULL,
  `diet` varchar(200) NOT NULL,
  `body_type` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `diet_plan`
--

INSERT INTO `diet_plan` (`s_no`, `diet`, `body_type`) VALUES
(1, 'Oats with Skimmed Milk and Honey, Apple Juice', 'lean '),
(2, 'Smoothie-Whey, Skimmed Milk, Strawberries', 'lean'),
(3, 'Smoothie-Whey, Skimmed Milk, Banana', 'lean'),
(4, 'Scrambled Egg Whites with Wholemeal Toast', 'lean'),
(5, 'Oats with Skimmed Milk and Honey', 'lean'),
(6, 'Egg Omelette with Cheese', 'lean'),
(7, 'Scrambled Egg Whites with Wholemeal Toast, Grapes', 'lean'),
(8, 'Baked Sweet Potato, Tuna and Spinach', 'lean'),
(9, 'Tuna Sandwich on Wholemeal Bread, Skimmed Milk', 'lean'),
(10, 'Apple, Chicken, Salad, , Banana', 'lean'),
(11, 'Smoothie-Whey, Blueberries, Blackberries', 'lean'),
(12, 'Tuna with Beetroot, Low Fat Yogurt', 'lean'),
(13, 'Sardines on Wholemeal Toast', 'lean'),
(14, 'Chicken Stir-Fry', 'lean'),
(15, 'Tuna Steak with Stir fried Broccoli, Brown Rice', 'lean'),
(16, 'Chicken Bacon Avocado Salad', 'lean'),
(17, 'Chicken and Cashew nut Stir-fry', 'lean'),
(18, 'Tuna, Plum Tomatoes and Potatoes and Roasted Veggies', 'lean'),
(19, 'Steak with steamed green Veggies, Greek Yogurt', 'lean'),
(20, 'Grilled Salmon with green peas, Brown Rice', 'lean'),
(21, 'Grilled Salmon fillet with Roasted Veggies', 'lean'),
(22, 'Scrambled Eggs, Grilled Smoked Bacon, Lightly Buttered Wholemeal Toast, Grapefruit', 'muscular'),
(23, 'Mushroom, Cheese and onion, Omelette, Lightly buttered wholemeal toast', 'muscular'),
(24, 'Ham and Cheese Omelette with Spinach, Tomatoes, Lightly Buttered Wholemeal Toast', 'muscular'),
(25, 'Scrambled Eggs, Smoked Salmon with Tomatoes, Sandwich, Nuts and Milk', 'muscular'),
(26, 'Boiled Eggs, Lightly Buttered Wholemeal Toast, Apple, Peanut Butter', 'muscular'),
(27, 'Scrambled Eggs with Mashed Avocado on wholemeal toast', 'muscular'),
(28, 'Apple, Brazilian Nuts, Peanut Butter and Milk', 'muscular'),
(29, 'Tuna Mayonnaise Sandwich with nuts', 'muscular'),
(30, 'Smoked Bacon with Wholemeal Bread, Sliced Tomatoes, Lettuce', 'muscular'),
(31, 'Salmon and Avocado Salad, Almonds', 'muscular'),
(32, 'Chicken, Avocado and Tomato Sandwich with Wholemeal Bread', 'muscular'),
(33, 'Tuna Sandwich with Cashew Nuts', 'muscular'),
(34, 'Tuna with chopped onions and low fat Mayonnaise, Low fat Greek yogurt', 'muscular'),
(35, 'Roasted Potatoes, Carrots, Broccoli, Grapes and Chicken', 'muscular'),
(36, 'Grilled Chicken and Veggies, Low Fat Yogurt', 'muscular'),
(37, 'Grilled Salmon and vegetables', 'muscular'),
(38, 'Onion Mustard Chicken, Grapes', 'muscular'),
(39, 'Turkey, Protein mixed with yogurt', 'muscular'),
(40, 'Prawn Curry, Dark Chocolate', 'muscular'),
(41, 'One pot Pork Stew, Salted Popcorn', 'muscular'),
(42, 'Chicken with Veggies and Salad', 'muscular'),
(43, 'Cucumber detox water, Oats in Skimmed Milk', 'fat'),
(44, 'Cucumber detox water, Curd, Mixed Veggies with stuffed Chapatti', 'fat'),
(45, 'Cucumber detox water, Skimmed milk yogurt, Multigrain toast', 'fat'),
(46, 'Cucumber detox water, Fruits and nuts yogurt Smoothie, Egg Omelette', 'fat'),
(47, 'Cucumber detox water, Skimmed milk, Peas Poha', 'fat'),
(48, 'Cucumber detox water, Mixed Sambhar and Idlis', 'fat'),
(49, 'Cucumber detox water, Besan Chilla with green garlic chutney', 'fat'),
(50, 'Skimmed Milk Paneer, Mixed vegetable salad, Dal ad Chapatti', 'fat'),
(51, 'Lentil Curry, Methi Rice, Apple, Buttermilk', 'fat'),
(52, 'Sauteed Vegetables with Paneer, Chapatti and green chutney', 'fat'),
(53, 'Green gram whole wheat cooked, Ladyfinger and Chapatti', 'fat'),
(54, 'Low fat paneer curry, Missi Roti, Butter Milk', 'fat'),
(55, 'Curd, Tomato, Potato, Veggies, Chapatti, Buttermilk', 'fat'),
(56, 'Spinach, Pulses, Steamed Rice, Buttermilk', 'fat'),
(57, 'Mixed Vegetable Salad, Dal, Veggies, Chapatti, Botlegourd', 'fat'),
(58, 'Sauteed Vegetables with Paneer, Chapatti and green chutney, Mixed Vegetable Salad', 'fat'),
(59, 'Mixed Vegetable Salad, Lentil Curry, Methi Rice', 'fat'),
(60, 'Mixed Vegetable Salad, Palak Chholle, Steamed Rice', 'fat'),
(61, 'Mixed Vegetable Salad, Curd, Potato, Tomato, Eggplant Veggies, Chapatti', 'fat'),
(62, 'Mixed Vegetable Salad, Green gram whole dal Cooked, Chapatti', 'fat'),
(63, 'Mixed Vegetable Salad, Low Fat Paneer CUrry, Missi Roti', 'fat');

-- --------------------------------------------------------

--
-- Table structure for table `exercise_women`
--

CREATE TABLE `exercise_women` (
  `s_no` int(11) NOT NULL,
  `body_type` varchar(255) DEFAULT NULL,
  `exercise` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `exercise_women`
--

INSERT INTO `exercise_women` (`s_no`, `body_type`, `exercise`) VALUES
(1, 'lean', 'Running and Jogging'),
(2, 'lean', 'Cycling and Yoga'),
(3, 'lean', 'Weight Training'),
(4, 'lean', 'Burpees and Squats'),
(5, 'lean', 'High Intensity Training'),
(6, 'lean', 'Lunges and Rope Jumping'),
(7, 'muscular', 'Squats and Lunges'),
(8, 'muscular', 'Weight Training'),
(9, 'muscular', 'Shoulder Presses and DeadLifts'),
(10, 'muscular', 'Bench Press'),
(11, 'muscular', 'Bicep Curls and Tricep Kick Backs'),
(12, 'muscular', 'Core Training'),
(13, 'fat', 'Intense Running'),
(14, 'fat', 'Swimming'),
(15, 'fat', 'Cycling'),
(16, 'fat', 'Yoga'),
(17, 'fat', 'Core Training'),
(18, 'fat', 'Planks');

-- --------------------------------------------------------

--
-- Table structure for table `for_total_calories`
--

CREATE TABLE `for_total_calories` (
  `id` int(11) NOT NULL,
  `date` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `month` int(2) NOT NULL,
  `total_calories` int(11) NOT NULL,
  `year` int(4) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `for_total_calories`
--

INSERT INTO `for_total_calories` (`id`, `date`, `email`, `month`, `total_calories`, `year`) VALUES
(1, '12-11-2019', 'ajay@gmail.com', 11, 900, 2019),
(2, '13-11-2019', 'ajay@gmail.com', 11, 1000, 2019),
(3, '14-11-2019', 'ajay@gmail.com', 11, 1400, 2019),
(4, '15-11-2019', 'ajay@gmail.com', 11, 1067, 2019),
(5, '16-11-2019', 'ajay@gmail.com', 11, 900, 2019),
(6, '17-11-2019', 'ajay@gmail.com', 11, 1356, 2019),
(7, '18-11-2019', 'ajay@gmail.com', 11, 756, 2019),
(8, '19-11-2019', 'ajay@gmail.com', 11, 988, 2019),
(9, '20-11-2019', 'ajay@gmail.com', 11, 1655, 2019),
(48, '23-11-2019', 'ajay@gmail.com', 11, 1200, 2019),
(66, '24-11-2019', 'ajay@gmail.com', 11, 1788, 2019),
(75, '25-11-2019', 'ajay@gmail.com', 11, 1566, 2019),
(122, '1-11-2019', 'ajay@gmail.com', 11, 1067, 2019),
(123, '2-11-2019', 'ajay@gmail.com', 11, 970, 2019),
(124, '3-11-2019', 'ajay@gmail.com', 11, 1877, 2019),
(125, '4-11-2019', 'ajay@gmail.com', 11, 1677, 2019),
(126, '5-11-2019', 'ajay@gmail.com', 11, 1899, 2019),
(127, '6-11-2019', 'ajay@gmail.com', 11, 2100, 2019),
(128, '7-11-2019', 'ajay@gmail.com', 11, 1899, 2019),
(129, '8-11-2019', 'ajay@gmail.com', 11, 1877, 2019),
(130, '9-11-2019', 'ajay@gmail.com', 11, 1766, 2019),
(131, '10-11-2019', 'ajay@gmail.com', 11, 1366, 2019),
(132, '11-11-2019', 'ajay@gmail.com', 11, 1599, 2019),
(133, '21-11-2019', 'ajay@gmail.com', 11, 1677, 2019),
(134, '22-11-2019', 'ajay@gmail.com', 11, 1877, 2019),
(136, '26-11-2019', 'chirag.pranshu@gmail.com', 11, 5, 2019),
(140, '26-11-2019', 'ajay@gmail.com', 11, 155, 2019),
(152, '26-11-2019', 'rahul@gmail.com', 11, 12, 2019),
(155, '27-11-2019', 'chirag.pranshu@gmail.com', 11, 3, 2019);

-- --------------------------------------------------------

--
-- Table structure for table `for_total_calories_month_wise`
--

CREATE TABLE `for_total_calories_month_wise` (
  `id` int(11) NOT NULL,
  `email` varchar(255) DEFAULT NULL,
  `month` int(11) NOT NULL,
  `total_calories` int(11) NOT NULL,
  `year` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `for_total_calories_month_wise`
--

INSERT INTO `for_total_calories_month_wise` (`id`, `email`, `month`, `total_calories`, `year`) VALUES
(70, 'ajay@gmail.com', 11, 27150, 2019),
(71, 'ajay@gmail.com', 1, 28767, 2019),
(72, 'ajay@gmail.com', 2, 29778, 2019),
(73, 'ajay@gmail.com', 3, 32098, 2019),
(74, 'ajay@gmail.com', 4, 35078, 2019),
(75, 'ajay@gmail.com', 5, 31087, 2019),
(76, 'ajay@gmail.com', 6, 31008, 2019),
(77, 'ajay@gmail.com', 7, 32876, 2019),
(78, 'ajay@gmail.com', 8, 29897, 2019),
(79, 'ajay@gmail.com', 1, 31899, 2018),
(80, 'ajay@gmail.com', 2, 36678, 2018),
(81, 'ajay@gmail.com', 3, 30898, 2018),
(82, 'ajay@gmail.com', 4, 28000, 2018),
(83, 'ajay@gmail.com', 5, 32000, 2018),
(84, 'ajay@gmail.com', 6, 27865, 2018),
(85, 'ajay@gmail.com', 7, 29876, 2018),
(86, 'ajay@gmail.com', 8, 31076, 2018),
(87, 'ajay@gmail.com', 9, 31889, 2018),
(88, 'ajay@gmail.com', 10, 27988, 2018),
(89, 'ajay@gmail.com', 11, 29138, 2018),
(90, 'ajay@gmail.com', 12, 31078, 2018),
(91, 'ajay@gmail.com', 9, 31098, 2019),
(92, 'ajay@gmail.com', 10, 29878, 2019),
(137, 'chirag.pranshu@gmail.com', 11, 8, 2019),
(151, 'rahul@gmail.com', 11, 12, 2019);

-- --------------------------------------------------------

--
-- Table structure for table `hibernate_sequence`
--

CREATE TABLE `hibernate_sequence` (
  `next_val` bigint(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `hibernate_sequence`
--

INSERT INTO `hibernate_sequence` (`next_val`) VALUES
(157);

-- --------------------------------------------------------

--
-- Table structure for table `my_goal`
--

CREATE TABLE `my_goal` (
  `email` varchar(100) NOT NULL,
  `body_type` varchar(100) NOT NULL,
  `mode` varchar(20) NOT NULL,
  `calories` int(5) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `my_goal`
--

INSERT INTO `my_goal` (`email`, `body_type`, `mode`, `calories`) VALUES
('ajay@gmail.com', 'lean', 'mode3', 770),
('apple@gmail.com', 'muscular', 'mode1', 1800),
('chirag.pranshu@gmail.com', 'lean', 'mode3', 1940),
('rahul@gmail.com', 'muscular', 'mode3', 700);

-- --------------------------------------------------------

--
-- Table structure for table `my_goal_exercise`
--

CREATE TABLE `my_goal_exercise` (
  `s_no` int(5) NOT NULL,
  `exercise` varchar(100) NOT NULL,
  `body_type` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `my_goal_exercise`
--

INSERT INTO `my_goal_exercise` (`s_no`, `exercise`, `body_type`) VALUES
(1, 'Running', 'lean'),
(2, 'Rope Jumps', 'lean'),
(3, 'Jumping Jacks & Squats', 'lean'),
(4, 'Flutter Kicks & Crunches', 'lean'),
(5, 'Push-Ups & Planks', 'lean'),
(6, 'Burpee & Squats', 'lean'),
(7, 'Push-ups & Pull-ups', 'muscular'),
(8, 'Biceps curl & Triceps press', 'muscular'),
(9, 'Arnold press & Front raise', 'muscular'),
(10, 'Curl-ups & Wipers', 'muscular'),
(11, 'Plank & Crunches', 'muscular'),
(12, 'Squats & Lunges', 'muscular'),
(13, 'Cycling', 'fat'),
(14, 'Running or Jogging', 'fat'),
(15, 'Swimming', 'fat'),
(16, 'Yoga', 'fat'),
(17, 'Push-ups', 'fat'),
(18, 'Weight Training', 'fat');

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
  `weight` int(11) NOT NULL,
  `answer` varchar(255) DEFAULT NULL,
  `security_question` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`email`, `date_of_birth`, `full_name`, `gender`, `height`, `mobile_number`, `password`, `subscription_type`, `weight`, `answer`, `security_question`) VALUES
('ajay@gmail.com', '29-10-1997', 'Ajay', 'female', 190, '7777777777', '$2a$12$EJl7toQvndTP4Xiiose8o.5JoBBnkNjlmEm8H3sKk9bicEJmVQpDu', 'premium', 79, NULL, NULL),
('chirag.pranshu@gmail.com', '06-11-2019', 'Chirag Dhussa', 'male', 192, '8989898989', '$2a$12$BlS4ESxL0p6FbtCaxyI2WesMtwBMuAzAo1tAezWbFJgdUWXkQb/eK', 'free', 98, NULL, NULL),
('cudgsuy@nfvads.commm', '11-02-1998', 'hjlfdk', 'male', 789, '8798976868', '$2a$12$W8kCPB7X9rytO4RoJNoghejTw1oNNLFCdbnmJqTnf/u4wgGAtDvYe', 'free', 67, 'dsads', 'What is your first school\'s name?'),
('kk@gmail.com', '20-11-2019', 'habibi', 'male', 89, '7777777777', '$2a$12$HwQa7EF2SZiBUW6PyWmmCeboA2lR1LCYHCyZJLMcY3/eKS7nGkEQO', 'free', 89, 'rahul', 'What is your mother\'s maiden name'),
('rahul@gmail.com', '06-02-2019', 'Rahul Premani', 'male', 172, '1872187321', '$2a$12$ln5bP5x9HBxhxjbIiCt/b.gUpK2kdDW5KHDUPk5aJYCaJYvJJGnli', 'premium', 68, NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `workout_form_data`
--

CREATE TABLE `workout_form_data` (
  `id` int(11) NOT NULL,
  `activity` varchar(255) DEFAULT NULL,
  `calories` int(11) NOT NULL,
  `date` varchar(255) DEFAULT NULL,
  `duration` int(11) NOT NULL,
  `email` varchar(255) DEFAULT NULL,
  `for_day` int(11) NOT NULL,
  `for_month` int(11) NOT NULL,
  `for_year` int(11) NOT NULL,
  `title` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `workout_form_data`
--

INSERT INTO `workout_form_data` (`id`, `activity`, `calories`, `date`, `duration`, `email`, `for_day`, `for_month`, `for_year`, `title`) VALUES
(15, 'Burpee', 1200, '22-11-2019', 23, 'ajay@gmail.com', 0, 0, 0, 'Day 1'),
(16, 'Curl-Ups', 1345, '22-11-2019', 12, 'ajay@gmail.com', 0, 0, 0, 'Day 2'),
(17, 'Front Raise', 1100, '22-11-2019', 20, 'ajay@gmail.com', 0, 0, 0, 'Day 3'),
(18, 'Push-Ups', 900, '22-11-2019', 30, 'ajay@gmail.com', 0, 0, 0, 'Day 4'),
(19, 'Swimming', 1098, '22-11-2019', 12, 'ajay@gmail.com', 0, 0, 0, 'Day 5'),
(20, 'Swimming-Freestyle', 1434, '22-11-2019', 16, 'ajay@gmail.com', 0, 0, 0, 'Day 6'),
(21, 'Weight-Training', 735, '22-11-2019', 20, 'ajay@gmail.com', 0, 0, 0, 'Day 7'),
(32, 'Biceps Curl', 899, '23-11-2019', 23, 'ajay@gmail.com', 23, 11, 2019, 'wert'),
(46, 'Jumping Jacks', 2000, '23-11-2019', 40, 'ajay@gmail.com', 23, 11, 2019, 'chirag'),
(47, 'Swimming-Backstroke', 13, '23-11-2019', 1, 'ajay@gmail.com', 23, 11, 2019, 'finalTest'),
(49, 'Arnold Press', 1200, '23-11-2019', 16, 'ajay@gmail.com', 23, 11, 2019, 'jii'),
(68, 'Curl-Ups', 6, '24-11-2019', 1, 'ajay@gmail.com', 24, 11, 2019, 'Macbook1'),
(71, 'Curl-Ups', 0, '25-11-2019', 0, 'ajay@gmail.com', 25, 11, 2019, 'WorkoutTest'),
(72, 'Arnold Press', 0, '25-11-2019', 0, 'ajay@gmail.com', 25, 11, 2019, 'temp 78'),
(73, 'Arnold Press', 0, '25-11-2019', 0, 'ajay@gmail.com', 25, 11, 2019, 'ghjgcgh'),
(74, 'Biceps Curl', 0, '25-11-2019', 0, 'ajay@gmail.com', 25, 11, 2019, 'ghjh'),
(76, 'Flutter Kicks', 0, '25-11-2019', 0, 'ajay@gmail.com', 25, 11, 2019, 'For Real TIme Update'),
(77, 'Arnold Press', 0, '25-11-2019', 0, 'ajay@gmail.com', 25, 11, 2019, 'qwqw'),
(78, 'Burpee', 0, '25-11-2019', 0, 'ajay@gmail.com', 25, 11, 2019, 'qqqq'),
(79, 'Arnold Press', 0, '25-11-2019', 0, 'ajay@gmail.com', 25, 11, 2019, 'pop'),
(80, 'Biceps Curl', 0, '25-11-2019', 0, 'ajay@gmail.com', 25, 11, 2019, 'nknk'),
(81, 'Curl-Ups', 0, '25-11-2019', 0, 'ajay@gmail.com', 25, 11, 2019, 'manish'),
(82, 'Biceps Curl', 0, '25-11-2019', 0, 'ajay@gmail.com', 25, 11, 2019, 'man'),
(83, 'Arnold Press', 0, '25-11-2019', 0, 'ajay@gmail.com', 25, 11, 2019, 'manish exercise'),
(84, 'Arnold Press', 0, '25-11-2019', 0, 'ajay@gmail.com', 25, 11, 2019, 'Shubham Exercise'),
(85, 'Arnold Press', 0, '25-11-2019', 0, 'ajay@gmail.com', 25, 11, 2019, 'hihi'),
(86, 'Arnold Press', 0, '25-11-2019', 0, 'ajay@gmail.com', 25, 11, 2019, 'vbbbb'),
(87, 'Arnold Press', 0, '25-11-2019', 0, 'ajay@gmail.com', 25, 11, 2019, 'chirag'),
(88, 'Arnold Press', 0, '25-11-2019', 0, 'ajay@gmail.com', 25, 11, 2019, 'bhbh'),
(89, 'Wipers', 0, '25-11-2019', 0, 'ajay@gmail.com', 25, 11, 2019, 'cxdcxdcfcvg'),
(90, 'Wipers', 0, '25-11-2019', 0, 'ajay@gmail.com', 25, 11, 2019, 'cxdcxdcfcvg'),
(91, 'Arnold Press', 0, '25-11-2019', 0, 'ajay@gmail.com', 25, 11, 2019, 'asct'),
(92, 'Arnold Press', 0, '25-11-2019', 0, 'ajay@gmail.com', 25, 11, 2019, 'huhu'),
(93, 'Curl-Ups', 0, '25-11-2019', 0, 'ajay@gmail.com', 25, 11, 2019, 'nknlnlb'),
(94, 'Biceps Curl', 0, '25-11-2019', 0, 'ajay@gmail.com', 25, 11, 2019, 'njnhu'),
(95, 'Biceps Curl', 0, '25-11-2019', 0, 'ajay@gmail.com', 25, 11, 2019, 'hihink'),
(96, 'Curl-Ups', 0, '25-11-2019', 0, 'ajay@gmail.com', 25, 11, 2019, 'chetan'),
(97, 'Burpee', 0, '25-11-2019', 0, 'ajay@gmail.com', 25, 11, 2019, 'nknlnnkb'),
(98, 'Jumping Jacks', 0, '25-11-2019', 0, 'ajay@gmail.com', 25, 11, 2019, 'mayanak'),
(99, 'Arnold Press', 0, '25-11-2019', 0, 'ajay@gmail.com', 25, 11, 2019, 'namste'),
(100, 'Biceps Curl', 0, '25-11-2019', 0, 'ajay@gmail.com', 25, 11, 2019, 'momomp'),
(101, 'Arnold Press', 0, '25-11-2019', 0, 'ajay@gmail.com', 25, 11, 2019, 'hyt'),
(102, 'Arnold Press', 0, '25-11-2019', 0, 'ajay@gmail.com', 25, 11, 2019, 'njn'),
(103, 'Arnold Press', 0, '25-11-2019', 0, 'ajay@gmail.com', 25, 11, 2019, 'lopk'),
(104, 'Arnold Press', 0, '25-11-2019', 0, 'ajay@gmail.com', 25, 11, 2019, 'olio'),
(105, 'Crunches', 0, '25-11-2019', 0, 'ajay@gmail.com', 25, 11, 2019, 'fghy'),
(106, 'Flutter Kicks', 0, '25-11-2019', 0, 'ajay@gmail.com', 25, 11, 2019, 'rnning fast'),
(107, 'Burpee', 0, '25-11-2019', 0, 'ajay@gmail.com', 25, 11, 2019, 'Singing'),
(108, 'Biceps Curl', 0, '25-11-2019', 0, 'ajay@gmail.com', 25, 11, 2019, 'yes I burnt some calories'),
(109, 'Burpee', 2, '25-11-2019', 0, 'ajay@gmail.com', 25, 11, 2019, 'huinj'),
(110, 'Burpee', 0, '25-11-2019', 0, 'ajay@gmail.com', 25, 11, 2019, 'yes again'),
(111, 'Biceps Curl', 2, '25-11-2019', 0, 'ajay@gmail.com', 25, 11, 2019, 'ijinjn'),
(112, 'Arnold Press', 0, '25-11-2019', 0, 'ajay@gmail.com', 25, 11, 2019, 'hiohihkj'),
(113, 'Curl-Ups', 0, '25-11-2019', 0, 'ajay@gmail.com', 25, 11, 2019, 'jniutf'),
(114, 'Arnold Press', 0, '25-11-2019', 0, 'ajay@gmail.com', 25, 11, 2019, 'kasg'),
(115, 'Crunches', 1, '25-11-2019', 0, 'ajay@gmail.com', 25, 11, 2019, 'TestingWithEmail'),
(116, 'Burpee', 0, '25-11-2019', 0, 'ajay@gmail.com', 25, 11, 2019, 'njnikui'),
(117, 'Biceps Curl', 1, '25-11-2019', 0, 'ajay@gmail.com', 25, 11, 2019, 'njniu'),
(118, 'Wipers', 1, '25-11-2019', 0, 'ajay@gmail.com', 25, 11, 2019, 'check'),
(119, 'Crunches', 3, '25-11-2019', 0, 'ajay@gmail.com', 25, 11, 2019, 'njk'),
(120, 'Biceps Curl', 0, '26-11-2019', 0, 'ajay@gmail.com', 26, 11, 2019, 'ftyf'),
(122, 'Arnold Press', 0, '26-11-2019', 0, 'ajay@gmail.com', 26, 11, 2019, 'asdr'),
(123, 'Arnold Press', 0, '26-11-2019', 0, 'ajay@gmail.com', 26, 11, 2019, 'test'),
(124, 'Burpee', 0, '26-11-2019', 0, 'ajay@gmail.com', 26, 11, 2019, 'lnk'),
(125, 'Biceps Curl', 3, '26-11-2019', 0, 'ajay@gmail.com', 26, 11, 2019, 'polkj'),
(126, 'Crunches', 0, '26-11-2019', 0, 'ajay@gmail.com', 26, 11, 2019, 'fdcvfgd'),
(127, 'Crunches', 2, '26-11-2019', 0, 'ajay@gmail.com', 26, 11, 2019, 'dxcfggvhjk'),
(128, 'Crunches', 1, '26-11-2019', 0, 'ajay@gmail.com', 26, 11, 2019, 'njnm'),
(129, 'Biceps Curl', 1, '26-11-2019', 0, 'ajay@gmail.com', 26, 11, 2019, 'chirag'),
(131, 'Burpee', 3, '26-11-2019', 0, 'ajay@gmail.com', 26, 11, 2019, 'jhgfcvbhjg'),
(133, 'Burpee', 2, '26-11-2019', 0, 'ajay@gmail.com', 26, 11, 2019, 'hjgfdxc'),
(135, 'Biceps Curl', 2, '26-11-2019', 0, 'chirag.pranshu@gmail.com', 26, 11, 2019, 'hiii'),
(138, 'Biceps Curl', 3, '26-11-2019', 0, 'chirag.pranshu@gmail.com', 26, 11, 2019, 'hihih'),
(139, 'Biceps Curl', 2, '26-11-2019', 0, 'ajay@gmail.com', 26, 11, 2019, 'jhg'),
(141, 'Biceps Curl', 1, '26-11-2019', 0, 'ajay@gmail.com', 26, 11, 2019, 'hgfvbgf'),
(142, 'Crunches', 2, '26-11-2019', 0, 'ajay@gmail.com', 26, 11, 2019, 'hhnbn'),
(143, 'Curl-Ups', 2, '26-11-2019', 0, 'ajay@gmail.com', 26, 11, 2019, 'something'),
(144, 'Curl-Ups', 3, '26-11-2019', 0, 'ajay@gmail.com', 26, 11, 2019, 'bbnbn'),
(145, 'Burpee', 114, '26-11-2019', 11, 'ajay@gmail.com', 26, 11, 2019, 'nmnmnmn'),
(146, 'Cycling', 3, '26-11-2019', 0, 'ajay@gmail.com', 26, 11, 2019, 'vbv'),
(147, 'Lunges', 12, '26-11-2019', 3, 'ajay@gmail.com', 26, 11, 2019, 'jhihinknj'),
(148, 'Crunches', 13, '26-11-2019', 5, 'ajay@gmail.com', 26, 11, 2019, 'nnnk'),
(149, 'Crunches', 1, '26-11-2019', 4, 'ajay@gmail.com', 26, 11, 2019, 'njvcfghf'),
(150, 'Arnold Press', 2, '26-11-2019', 0, 'ajay@gmail.com', 26, 11, 2019, 'kjhjkh'),
(153, 'Planks', 6, '26-11-2019', 1, 'rahul@gmail.com', 26, 11, 2019, 'MyFirst Workout'),
(154, 'Squats', 6, '26-11-2019', 1, 'rahul@gmail.com', 26, 11, 2019, '2nd workout'),
(156, 'Pull-Ups', 3, '27-11-2019', 0, 'chirag.pranshu@gmail.com', 27, 11, 2019, 'New  activity');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `diet_plan`
--
ALTER TABLE `diet_plan`
  ADD PRIMARY KEY (`s_no`);

--
-- Indexes for table `exercise_women`
--
ALTER TABLE `exercise_women`
  ADD PRIMARY KEY (`s_no`);

--
-- Indexes for table `for_total_calories`
--
ALTER TABLE `for_total_calories`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `for_total_calories_month_wise`
--
ALTER TABLE `for_total_calories_month_wise`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `my_goal`
--
ALTER TABLE `my_goal`
  ADD PRIMARY KEY (`email`);

--
-- Indexes for table `my_goal_exercise`
--
ALTER TABLE `my_goal_exercise`
  ADD PRIMARY KEY (`s_no`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`email`);

--
-- Indexes for table `workout_form_data`
--
ALTER TABLE `workout_form_data`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `diet_plan`
--
ALTER TABLE `diet_plan`
  MODIFY `s_no` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=64;

--
-- AUTO_INCREMENT for table `my_goal_exercise`
--
ALTER TABLE `my_goal_exercise`
  MODIFY `s_no` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
