-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jan 04, 2022 at 11:50 AM
-- Server version: 10.4.22-MariaDB
-- PHP Version: 8.0.13

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `trace_with_us`
--

-- --------------------------------------------------------

--
-- Table structure for table `user_account`
--

CREATE TABLE `user_account` (
  `userID` int(11) NOT NULL,
  `firstname` varchar(255) NOT NULL,
  `lastname` varchar(255) NOT NULL,
  `middlename` varchar(255) NOT NULL,
  `suffix` varchar(55) DEFAULT NULL,
  `sex` varchar(55) NOT NULL,
  `age` int(11) NOT NULL,
  `birthday` date NOT NULL,
  `contactNumber` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `lotNumber` varchar(255) NOT NULL,
  `streetNumber` varchar(255) NOT NULL,
  `city` varchar(255) NOT NULL,
  `province` varchar(255) NOT NULL,
  `zipCode` int(11) NOT NULL,
  `vaccine` varchar(255) NOT NULL,
  `firstDose` varchar(255) DEFAULT NULL,
  `secondDose` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `user_account`
--

INSERT INTO `user_account` (`userID`, `firstname`, `lastname`, `middlename`, `suffix`, `sex`, `age`, `birthday`, `contactNumber`, `email`, `password`, `lotNumber`, `streetNumber`, `city`, `province`, `zipCode`, `vaccine`, `firstDose`, `secondDose`) VALUES
(1, 'Gian Andrew', 'Del Rosario', 'Maningas', '', 'male', 23, '2021-12-03', '0987654321', 'gian@gmail.com', '$2a$10$N7w59j.ohL8UM0Bg3j6Ec.fwl.DynnTFr9CAN7bI3KYOkwUAot2Dy', '12', 'lot 13', 'SJDM', 'BULACAN', 3023, '1', '2021-12-15', ''),
(2, 'Andrew', 'Del Rosario', 'Maningas', '', 'male', 19, '2002-12-03', '0987654322', 'andrew@gmail.com', '$2a$10$FNunJ4ngXnKxk/n7.2JRSel/LN4mxIWaljt6iTxtSU0Q1nwc/cC3e', 'lot 69', 'Tungko Asgard', 'SJDM', 'Bulacan', 6666, 'Pfizer', '', ''),
(3, 'Renan', 'Bacit', 'Santos', '', 'male', 23, '2021-12-31', '09876543431', 'renan@gmail.com', '$2a$10$B8aCWwbVqWToL3VP4Co0v.XUfi5ki2UjnGM3DDoXOJNQEPbShHhlK', '21312', 'srhaew5y35eyher', 'aegwarghsr;iow8gth', 'Bulacan', 123412, '0', '', ''),
(4, 'Allen Dave', 'Macandog', 'Jakson', '', 'male', 23, '2021-12-28', '131', 'allendave@gmail.com', '$2a$10$QZaeIdFkWxb4Fyys4sa0ce6tWcyImEwe/IU.kO2XZzsKEseuwAxxG', 'df', 'vsdgvs', 'sdvcsdfv', 'sdgvsdvdsv', 434, 'Johnson & Johnson', '', '');

-- --------------------------------------------------------

--
-- Table structure for table `user_healthform`
--

CREATE TABLE `user_healthform` (
  `formID` int(11) NOT NULL,
  `userID` int(11) NOT NULL,
  `purposeVisit` varchar(255) NOT NULL,
  `temperature` int(55) NOT NULL,
  `question_1` varchar(55) NOT NULL,
  `question_2` varchar(55) NOT NULL,
  `question_3` varchar(55) NOT NULL,
  `question_4` varchar(55) NOT NULL,
  `place` varchar(255) DEFAULT NULL,
  `question_5` varchar(55) NOT NULL,
  `cause` varchar(255) DEFAULT NULL,
  `timeCreated` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `user_healthform`
--

INSERT INTO `user_healthform` (`formID`, `userID`, `purposeVisit`, `temperature`, `question_1`, `question_2`, `question_3`, `question_4`, `place`, `question_5`, `cause`, `timeCreated`) VALUES
(2, 1, 'tatae', 33, 'Yes', 'Yes', 'Yes', 'Yes', '', 'Yes', '', '2022-01-03 11:18:12'),
(3, 1, 'kakain', 33, 'Yes', 'Yes', 'Yes', 'Yes', '', 'Yes', '', '2022-01-03 11:25:13'),
(4, 1, 'uutot', 33, 'Yes', 'Yes', 'Yes', 'Yes', '', 'Yes', '', '2022-01-03 11:45:02'),
(5, 2, 'kakain', 34, 'Yes', 'Yes', 'Yes', 'No', '', 'No', '', '2022-01-03 16:14:57'),
(6, 1, 'matutulog', 33, 'Yes', 'Yes', 'Yes', 'Yes', 'Palmera', 'Yes', 'kinagat ng langgam', '2022-01-03 17:13:23'),
(7, 3, 'tatambay', 39, 'No', 'No', 'No', 'Yes', 'sfhbgrshw4yw4y', 'Yes', 'rszfghrstyw43y73457', '2022-01-04 13:40:31'),
(8, 3, 'eye5y63456', 33, 'Yes', 'Yes', 'No', 'No', '', 'No', '', '2022-01-04 14:09:02'),
(9, 1, 'kakain', 33, 'Yes', 'Yes', 'Yes', 'No', '', 'No', '', '2022-01-04 14:26:20'),
(10, 1, 'tutulog', 33, 'Yes', 'Yes', 'Yes', 'Yes', '', 'No', '', '2022-01-04 15:25:34'),
(11, 1, 'manunuod', 33, 'YES', 'YES', 'YES', 'YES', 'rurururuur', 'YES', 'uwu', '2022-01-04 16:34:39');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `user_account`
--
ALTER TABLE `user_account`
  ADD PRIMARY KEY (`userID`),
  ADD UNIQUE KEY `email` (`email`);

--
-- Indexes for table `user_healthform`
--
ALTER TABLE `user_healthform`
  ADD PRIMARY KEY (`formID`),
  ADD KEY `user_id` (`userID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `user_account`
--
ALTER TABLE `user_account`
  MODIFY `userID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `user_healthform`
--
ALTER TABLE `user_healthform`
  MODIFY `formID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `user_healthform`
--
ALTER TABLE `user_healthform`
  ADD CONSTRAINT `user_id` FOREIGN KEY (`userID`) REFERENCES `user_account` (`userID`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
