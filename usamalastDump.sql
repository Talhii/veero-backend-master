-- MySQL dump 10.13  Distrib 8.0.21, for Linux (x86_64)
--
-- Host: localhost    Database: project
-- ------------------------------------------------------
-- Server version	8.0.21

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `Banner_Products`
--


DROP TABLE IF EXISTS `Banner_Products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Banner_Products` (
  `Id` int NOT NULL,
  `P_Name` varchar(255) DEFAULT NULL,
  `Price` varchar(255) DEFAULT NULL,
  `Retail_Price` varchar(255) DEFAULT NULL,
  `P_Condition` varchar(255) DEFAULT NULL,
  `Description` varchar(255) DEFAULT NULL,
  `Brand` varchar(255) DEFAULT NULL,
  `Verification` varchar(255) DEFAULT NULL,
  `Banner_Id` int DEFAULT NULL,
  `Lowest_Ask` varchar(45) DEFAULT NULL,
  `Lowest_Bid` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`Id`),
  KEY `Banner_Id` (`Banner_Id`),
  CONSTRAINT `Banner_Products_ibfk_1` FOREIGN KEY (`Banner_Id`) REFERENCES `Banners` (`Id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Banner_Products`
--

LOCK TABLES `Banner_Products` WRITE;
/*!40000 ALTER TABLE `Banner_Products` DISABLE KEYS */;
INSERT INTO `Banner_Products` VALUES (2,'P2','434343','55649','Good','P2','Gucci','Authenticated',1,'1121','1221'),(8,'Jawad','123344','5543221',NULL,'This is Description','Gucci','Authenticated',1,NULL,NULL);
/*!40000 ALTER TABLE `Banner_Products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Banners`
--

DROP TABLE IF EXISTS `Banners`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Banners` (
  `Id` int NOT NULL AUTO_INCREMENT,
  `Heading` varchar(255) DEFAULT NULL,
  `Banner_Description` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB AUTO_INCREMENT=27 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Banners`
--

LOCK TABLES `Banners` WRITE;
/*!40000 ALTER TABLE `Banners` DISABLE KEYS */;
INSERT INTO `Banners` VALUES (1,'undefined','This is Banner 1 Description'),(2,'Banner 1','This is Banner 1 Description'),(25,'some heading','this is description'),(26,'tech','teching teching');
/*!40000 ALTER TABLE `Banners` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Brand_Images`
--

DROP TABLE IF EXISTS `Brand_Images`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Brand_Images` (
  `Id` int NOT NULL AUTO_INCREMENT,
  `Image_Name` varchar(255) DEFAULT NULL,
  `Brand` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB AUTO_INCREMENT=25 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Brand_Images`
--

LOCK TABLES `Brand_Images` WRITE;
/*!40000 ALTER TABLE `Brand_Images` DISABLE KEYS */;
INSERT INTO `Brand_Images` VALUES (1,'1596721750318_g3.png',NULL),(2,'1596721823006_g3.png','Gucci'),(3,'1596721918889_g3.png','Gucci'),(4,'1596721956997_g3.png','Gucci'),(5,'1596722001158_g3.png','Gucci'),(6,'1596722566431_g3.png','Gucci'),(7,'1596722637731_g3.png','Gucci'),(8,'1596724650383_scraping.png','Armani'),(9,'1596724673781_scraping.png','Armani'),(10,'1596724739619_scraping.png','Armani'),(11,'1596724779923_scraping.png','Armani'),(12,'1596724796101_scraping.png','Armani'),(13,'1596724867674_scraping.png','Armani'),(14,'1596724883223_scraping.png','Armani'),(15,'1596725168544_scraping.png','Armani'),(16,'1596726618862_scraping.png','Armani'),(17,'1596726662257_scraping.png','Armani'),(18,'1597316084599_manifest.png','Gucci'),(19,'1597838485952_CS7.png','Gucci'),(20,'1597838557970_CS7.png','Gucci'),(21,'1598207285395_Talha.png','Gucci'),(22,'1598210877264_Screenshot from 2020-08-19 12-51-57.png','Gucci'),(23,'1599675306552_1.png','Gucci A'),(24,'1608316003042_blob','Gucci');
/*!40000 ALTER TABLE `Brand_Images` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `admins`
--

DROP TABLE IF EXISTS `admins`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `admins` (
  `Admin_Id` int NOT NULL AUTO_INCREMENT,
  `Admin_Name` varchar(30) DEFAULT NULL,
  `Admin_Email` varchar(30) DEFAULT NULL,
  `Admin_Password` varchar(30) DEFAULT NULL,
  PRIMARY KEY (`Admin_Id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `admins`
--

LOCK TABLES `admins` WRITE;
/*!40000 ALTER TABLE `admins` DISABLE KEYS */;
INSERT INTO `admins` VALUES (1,'Usama','usama@gmail.com','123'),(2,'Talha','talhi@gmail.com','1234'),(3,'haider','haider@gmail.com','7899'),(4,'hammad','hammad@gmail.com','4567'),(5,'vicky','vicky@gmail.com','13'),(6,'jawad','jawad@gmail.com','11111'),(7,'anas','anas@gmail.com','3333'),(8,'ali','ali@gmaill.com','888'),(9,'ehsan','ehsan@gmail.com','9999'),(10,'sjaja','sjaja@gmail.com','7777'),(11,'asdfg','asdfg@gmail.com','1111122');
/*!40000 ALTER TABLE `admins` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `approved_orders`
--

DROP TABLE IF EXISTS `approved_orders`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `approved_orders` (
  `Id` int NOT NULL AUTO_INCREMENT,
  `Buyer_Id` int DEFAULT NULL,
  `Buyer_Name` varchar(255) DEFAULT NULL,
  `Seller_Id` int DEFAULT NULL,
  `Seller_Name` varchar(255) DEFAULT NULL,
  `Price` varchar(255) DEFAULT NULL,
  `Product_Id` int DEFAULT NULL,
  `Product_Name` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB AUTO_INCREMENT=40 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `approved_orders`
--

LOCK TABLES `approved_orders` WRITE;
/*!40000 ALTER TABLE `approved_orders` DISABLE KEYS */;
INSERT INTO `approved_orders` VALUES (1,1,'Ehtesham',2,'Abbas','2000',1,'Bag'),(2,2,'aaa',22,'sasa','111',2,'asaas'),(3,1,'usama',1,'usama','22',1,'jawad'),(5,1,'usama',1,'usama','222111',1,'jawad'),(10,1,'sheikh',5,'ali','123',4,'Jawad'),(11,4,'sheikh',10,'usama','0',1,'abc'),(12,10,'usama',5,'ali','12314',1,'Ahmad'),(13,10,'usama',5,'ali','12314',1,'Ahmad'),(39,5,'ali',10,'usama','23421',1,'Ahmad');
/*!40000 ALTER TABLE `approved_orders` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `asks`
--

DROP TABLE IF EXISTS `asks`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `asks` (
  `Id` int NOT NULL AUTO_INCREMENT,
  `User_Id` int DEFAULT NULL,
  `User_Name` varchar(30) DEFAULT NULL,
  `Product_Id` int DEFAULT NULL,
  `Ask` varchar(30) DEFAULT NULL,
  `Product_Name` varchar(30) DEFAULT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB AUTO_INCREMENT=106 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `asks`
--

LOCK TABLES `asks` WRITE;
/*!40000 ALTER TABLE `asks` DISABLE KEYS */;
INSERT INTO `asks` VALUES (5,93991,'some name of user',92992,'23421','product name testing'),(10,1,'usama',98,'66','testing ask'),(11,1,'usama',23,'76','testing bid now'),(13,5,'ali',NULL,'234134',''),(16,5,'ali',NULL,'1231223',''),(20,10,'usama',NULL,'987',''),(22,10,'usama',NULL,'12314',''),(32,10,'usama',NULL,'90',NULL),(35,5,'ali',6,'555','laptop'),(36,5,'ali',7,'11111','laptop'),(39,98,'somename',99,'12','productttt'),(40,12,'afzal',15,'499','mobile'),(43,98,'user1',97,'123','product1'),(44,51,'user2',44,'123','product2'),(55,21,'aksdfja',33,'345','dafsdfcae'),(56,24,'aksdfja',33,'4526345','dafsdfcae'),(57,62362,'aksdfja',33,'23452','dafsdfcae'),(90,46,'hg',8,'54','hgh'),(91,46,'hg',76,'56','hgh'),(92,46,'hg',766,'76','hgh');
/*!40000 ALTER TABLE `asks` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `banner_images`
--

DROP TABLE IF EXISTS `banner_images`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `banner_images` (
  `Image_Id` int NOT NULL AUTO_INCREMENT,
  `Image_Name` varchar(100) DEFAULT NULL,
  `Banner_Id` int DEFAULT NULL,
  PRIMARY KEY (`Image_Id`),
  KEY `Banner_Id` (`Banner_Id`),
  CONSTRAINT `banner_images_ibfk_1` FOREIGN KEY (`Banner_Id`) REFERENCES `Banners` (`Id`),
  CONSTRAINT `banner_images_ibfk_2` FOREIGN KEY (`Banner_Id`) REFERENCES `Banners` (`Id`),
  CONSTRAINT `banner_images_ibfk_3` FOREIGN KEY (`Banner_Id`) REFERENCES `Banners` (`Id`)
) ENGINE=InnoDB AUTO_INCREMENT=142 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `banner_images`
--

LOCK TABLES `banner_images` WRITE;
/*!40000 ALTER TABLE `banner_images` DISABLE KEYS */;
INSERT INTO `banner_images` VALUES (1,'1596019684532_command3.png',1),(2,'1596019684538_command4.png',2),(3,'1596019684543_commands1.png',NULL),(4,'1596019684548_GitLabAcct1.png',NULL),(5,'1596019684550_gitnow.png',NULL),(6,'1596019684552_scraping.png',NULL),(7,'1596019684553_UpdateProfile.png',NULL),(8,'1596020825774_command3.png',NULL),(9,'1596020825780_command4.png',NULL),(10,'1596020825786_commands1.png',NULL),(11,'1596020825792_GitLabAcct1.png',NULL),(12,'1596020825793_gitnow.png',NULL),(13,'1596020825795_scraping.png',NULL),(14,'1596020825796_UpdateProfile.png',NULL),(15,'1596020993412_command3.png',NULL),(16,'1596020993418_command4.png',NULL),(17,'1596020993423_commands1.png',NULL),(18,'1596020993441_GitLabAcct1.png',NULL),(19,'1596020993442_gitnow.png',NULL),(20,'1596020993443_scraping.png',NULL),(21,'1596020993444_UpdateProfile.png',NULL),(22,'1596021184413_command3.png',NULL),(23,'1596021184421_command4.png',NULL),(24,'1596021184427_commands1.png',NULL),(25,'1596021184434_GitLabAcct1.png',NULL),(26,'1596021184436_gitnow.png',NULL),(27,'1596021184438_scraping.png',NULL),(28,'1596021184440_UpdateProfile.png',NULL),(29,'1596021257039_command3.png',NULL),(30,'1596021257047_command4.png',NULL),(31,'1596021257053_commands1.png',NULL),(32,'1596021257059_GitLabAcct1.png',NULL),(33,'1596021257061_gitnow.png',NULL),(34,'1596021257063_scraping.png',NULL),(35,'1596021257064_UpdateProfile.png',NULL),(36,'1596021794242_command3.png',NULL),(37,'1596021794253_command4.png',NULL),(38,'1596021794259_commands1.png',NULL),(39,'1596021794265_GitLabAcct1.png',NULL),(40,'1596021794267_gitnow.png',NULL),(41,'1596021794269_scraping.png',NULL),(42,'1596021794271_UpdateProfile.png',NULL),(43,'1596021890213_command3.png',NULL),(44,'1596021890218_command4.png',NULL),(45,'1596021890222_commands1.png',NULL),(46,'1596021890235_GitLabAcct1.png',NULL),(47,'1596021890237_gitnow.png',NULL),(48,'1596021890239_scraping.png',NULL),(49,'1596021890240_UpdateProfile.png',NULL),(50,'1596022596815_command3.png',NULL),(51,'1596022596822_command4.png',NULL),(52,'1596022596828_commands1.png',NULL),(53,'1596022596832_GitLabAcct1.png',NULL),(54,'1596022596835_gitnow.png',NULL),(55,'1596022596837_scraping.png',NULL),(56,'1596022596838_UpdateProfile.png',NULL),(57,'1596024459567_command3.png',NULL),(58,'1596024459577_command4.png',NULL),(59,'1596024459585_commands1.png',NULL),(60,'1596024459593_GitLabAcct1.png',NULL),(61,'1596024459596_gitnow.png',NULL),(62,'1596024459603_scraping.png',NULL),(63,'1596024459605_UpdateProfile.png',NULL),(64,'1596024571823_command3.png',NULL),(65,'1596024571829_command4.png',NULL),(66,'1596024571833_commands1.png',NULL),(67,'1596024571840_GitLabAcct1.png',NULL),(68,'1596024571842_gitnow.png',NULL),(69,'1596024571843_scraping.png',NULL),(70,'1596024571844_UpdateProfile.png',NULL),(71,'1596024838499_command3.png',NULL),(72,'1596024838506_command4.png',NULL),(73,'1596024838514_commands1.png',NULL),(74,'1596024838521_GitLabAcct1.png',NULL),(75,'1596024838523_gitnow.png',NULL),(76,'1596024838524_scraping.png',NULL),(77,'1596024838525_UpdateProfile.png',NULL),(78,'1596036330035_command3.png',NULL),(79,'1596036330044_command4.png',NULL),(80,'1596036330056_commands1.png',NULL),(81,'1596036330068_GitLabAcct1.png',NULL),(82,'1596036330070_gitnow.png',NULL),(83,'1596036330072_scraping.png',NULL),(84,'1596036330074_UpdateProfile.png',NULL),(85,'1596037086033_command3.png',NULL),(86,'1596037246133_command3.png',NULL),(87,'1596037246154_command4.png',NULL),(88,'1596037246170_commands1.png',NULL),(89,'1596037246198_GitLabAcct1.png',NULL),(90,'1596037246201_gitnow.png',NULL),(91,'1596037246203_scraping.png',NULL),(92,'1596037246204_UpdateProfile.png',NULL),(93,'1596037389691_command3.png',NULL),(94,'1596037389699_command4.png',NULL),(95,'1596037389711_commands1.png',NULL),(96,'1596037389720_GitLabAcct1.png',NULL),(97,'1596037389728_gitnow.png',NULL),(98,'1596037389733_scraping.png',NULL),(99,'1596037389735_UpdateProfile.png',NULL),(100,'1596037499118_command3.png',NULL),(101,'1596037499126_command4.png',NULL),(102,'1596037499132_commands1.png',NULL),(103,'1596037499137_GitLabAcct1.png',NULL),(104,'1596037499140_gitnow.png',NULL),(105,'1596037499142_scraping.png',NULL),(106,'1596037499143_UpdateProfile.png',NULL),(107,'1596037666898_command3.png',NULL),(108,'1596037666910_command4.png',NULL),(109,'1596037666917_commands1.png',NULL),(110,'1596037666926_GitLabAcct1.png',NULL),(111,'1596037666929_gitnow.png',NULL),(112,'1596037666934_scraping.png',NULL),(113,'1596037666935_UpdateProfile.png',NULL),(114,'1596038330175_command3.png',NULL),(115,'1596038330182_command4.png',NULL),(116,'1596038330189_commands1.png',NULL),(117,'1596038330195_GitLabAcct1.png',NULL),(118,'1596038330198_gitnow.png',NULL),(119,'1596038330200_scraping.png',NULL),(120,'1596038330200_UpdateProfile.png',NULL),(121,'1596039271149_command3.png',NULL),(122,'1596039271157_command4.png',NULL),(123,'1596039271165_commands1.png',NULL),(124,'1596039271173_GitLabAcct1.png',NULL),(125,'1596039271176_gitnow.png',NULL),(126,'1596039271179_scraping.png',NULL),(127,'1596039271180_UpdateProfile.png',NULL),(128,'1596727229161_sssss.png',NULL),(129,'1596727273707_sssss.png',NULL),(130,'1596889758574_command4.png',NULL),(131,'1597056798714_command4.png',NULL),(132,'1597835131399_CS7.png',NULL),(133,'1597835282783_CS7.png',NULL),(134,'1597837879563_CS7.png',NULL),(135,'1597838062914_CS7.png',NULL),(136,'1597838106967_CS7.png',NULL),(137,'1598207334439_Talha.png',NULL),(138,'1598207432472_Talha.png',NULL),(139,'1598207479409_Talha.png',NULL),(140,'1598207517280_Talha.png',NULL),(141,'1598210923906_Screenshot from 2020-08-19 12-51-57.png',NULL);
/*!40000 ALTER TABLE `banner_images` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `bids`
--

DROP TABLE IF EXISTS `bids`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `bids` (
  `Id` int NOT NULL AUTO_INCREMENT,
  `User_Id` int DEFAULT NULL,
  `User_Name` varchar(30) DEFAULT NULL,
  `Product_Id` int DEFAULT NULL,
  `Bid` varchar(30) DEFAULT NULL,
  `Product_Name` varchar(30) DEFAULT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB AUTO_INCREMENT=110 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `bids`
--

LOCK TABLES `bids` WRITE;
/*!40000 ALTER TABLE `bids` DISABLE KEYS */;
INSERT INTO `bids` VALUES (4,1,'sheikh',4,'122','Jawad'),(5,NULL,NULL,NULL,NULL,NULL),(6,NULL,NULL,NULL,NULL,NULL),(7,NULL,NULL,NULL,NULL,NULL),(8,NULL,NULL,NULL,NULL,NULL),(9,1,'sheikh',4,'121','Jawad'),(10,1,'sheikh',4,'122','Jawad'),(14,1,'sheikh',4,'10101','Jawad'),(16,1,'sheikh',4,'009909','Jawad'),(22,1,'usama',99,'89','testing'),(23,1,'usama',23,'56','testing bid now'),(27,5,'ali',NULL,'',''),(28,5,'ali',NULL,'',''),(33,10,'usama',NULL,'981',NULL),(34,10,'usama',NULL,'',''),(35,10,'usama',NULL,'1231',''),(36,10,'usama',NULL,'12341',''),(38,10,'usama',NULL,'52352',''),(40,10,'usama',NULL,'1245',''),(41,10,'usama',NULL,'12341',''),(53,NULL,NULL,NULL,'12',NULL),(65,14,'aksdfja',33,'12','dafsdfcae'),(66,16,'aksdfja',33,'5234523','dafsdfcae'),(73,234,'asdfas',4,'123','adsfasd'),(74,235,'asdfas',4,'111','adsfasd'),(94,45,'hg',7,'55','hgh'),(95,46,'hg',7,'66','hgh'),(98,23,'adfasdf',1,'123','erqwer'),(101,NULL,NULL,3,'111','Ahmad'),(108,10,'usama',3,'19993','Ahmad'),(109,9,'Haider ',2,'133','Jawad');
/*!40000 ALTER TABLE `bids` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `brands`
--

DROP TABLE IF EXISTS `brands`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `brands` (
  `Id` int NOT NULL AUTO_INCREMENT,
  `Brand_Name` varchar(255) DEFAULT NULL,
  `Brand_Description` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `brands`
--

LOCK TABLES `brands` WRITE;
/*!40000 ALTER TABLE `brands` DISABLE KEYS */;
INSERT INTO `brands` VALUES (1,'Gucci','Gucci Bags'),(2,'hshsg','hahsh'),(4,'some brand ','the brand is good');
/*!40000 ALTER TABLE `brands` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `customers`
--

DROP TABLE IF EXISTS `customers`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `customers` (
  `Id` int NOT NULL AUTO_INCREMENT,
  `First_Name` varchar(30) DEFAULT NULL,
  `Last_Name` varchar(30) DEFAULT NULL,
  `Email` varchar(30) DEFAULT NULL,
  `User_Password` varchar(30) DEFAULT NULL,
  `Status` varchar(30) DEFAULT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `customers`
--

LOCK TABLES `customers` WRITE;
/*!40000 ALTER TABLE `customers` DISABLE KEYS */;
INSERT INTO `customers` VALUES (4,'usama','abbas','abc@gmail.com','12345678','buyer'),(5,'ali','hassan','hassan@gmail.com','236788','seller'),(6,'Alex','Bhati','alex@gmail.com','213','buyer'),(7,'Jawad','Imtiaz','tanoli@gmail.com','12345678','buyer'),(8,'ehtasham','abbas','eh@gmail.com','12345678','buyer'),(9,'Haider ','Khan','haider@gmail.com','12345678','buyer'),(10,'usama','khan','usama@gmail.com','12345678','buyer'),(11,'abc','def','abc@gmail.com','12345678','buyer'),(12,'xyz','xyz','xyz@gmail.com','12345678','buyer'),(13,'fgh','fgh','fgh@gmail.com','12345678','buyer'),(14,'ahmed','khan','ahmed@gmail.com','12345678','buyer'),(15,'hello','hello','hello@gmail.com','12345678','buyer');
/*!40000 ALTER TABLE `customers` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `header_images`
--

DROP TABLE IF EXISTS `header_images`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `header_images` (
  `Image_Id` int NOT NULL AUTO_INCREMENT,
  `Image_Name` varchar(100) DEFAULT NULL,
  `Product_Name` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`Image_Id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `header_images`
--

LOCK TABLES `header_images` WRITE;
/*!40000 ALTER TABLE `header_images` DISABLE KEYS */;
INSERT INTO `header_images` VALUES (1,'1609585838698_blob',NULL);
/*!40000 ALTER TABLE `header_images` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `most_popular_products`
--

DROP TABLE IF EXISTS `most_popular_products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `most_popular_products` (
  `Id` int NOT NULL AUTO_INCREMENT,
  `P_Name` varchar(50) DEFAULT NULL,
  `Price` varchar(30) DEFAULT NULL,
  `Retail_Price` varchar(30) DEFAULT NULL,
  `P_Condition` varchar(30) DEFAULT NULL,
  `Description` varchar(30) DEFAULT NULL,
  `Brand` varchar(30) DEFAULT NULL,
  `Verification` varchar(45) DEFAULT NULL,
  `Lowest_Ask` varchar(10) DEFAULT NULL,
  `Lowest_Bid` varchar(10) DEFAULT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `most_popular_products`
--

LOCK TABLES `most_popular_products` WRITE;
/*!40000 ALTER TABLE `most_popular_products` DISABLE KEYS */;
INSERT INTO `most_popular_products` VALUES (1,'Ahmad','33232','32232','Good','This is Deescription','Gucci','Authenticated',NULL,NULL),(2,'Jawad','123344','5543221','Good','This is Description','Gucci','Authenticated',NULL,NULL),(3,'Ahmad','33232','32232','Good','This is Deescription','Gucci','Authenticated',NULL,NULL),(4,'Ahmad','33232','32232','Good','This is Deescription','Gucci','Authenticated',NULL,NULL),(5,'Ahmad','33232','32232','Good','This is Deescription','Gucci','Authenticated',NULL,NULL),(10,'P2','434343','55649','Good','P2','Gucci','Authenticated',NULL,NULL);
/*!40000 ALTER TABLE `most_popular_products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mpp_images`
--

DROP TABLE IF EXISTS `mpp_images`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `mpp_images` (
  `Image_Id` int NOT NULL AUTO_INCREMENT,
  `Image_Name` varchar(100) DEFAULT NULL,
  `Product_Id` int DEFAULT NULL,
  `Brand` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`Image_Id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mpp_images`
--

LOCK TABLES `mpp_images` WRITE;
/*!40000 ALTER TABLE `mpp_images` DISABLE KEYS */;
INSERT INTO `mpp_images` VALUES (1,'image1.png',1,'Gucci'),(2,'image2.png',2,'Gucci'),(3,'image3.png',3,'Gucci'),(4,'image4.png',4,'Gucci'),(5,'image5.png',5,'Gucci');
/*!40000 ALTER TABLE `mpp_images` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `orders`
--

DROP TABLE IF EXISTS `orders`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `orders` (
  `Id` int NOT NULL AUTO_INCREMENT,
  `Buyer_Id` int DEFAULT NULL,
  `Buyer_Name` varchar(30) DEFAULT NULL,
  `Seller_Id` int DEFAULT NULL,
  `Seller_Name` varchar(30) DEFAULT NULL,
  `Price` varchar(30) DEFAULT NULL,
  `Product_Id` int DEFAULT NULL,
  `Product_Name` varchar(30) DEFAULT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB AUTO_INCREMENT=202 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `orders`
--

LOCK TABLES `orders` WRITE;
/*!40000 ALTER TABLE `orders` DISABLE KEYS */;
INSERT INTO `orders` VALUES (1,2,'A',3,'B','100',4,'product'),(14,10,'usama',5,'ali','12314',1,'Ahmad'),(15,10,'usama',9,'Haider','12345',3,'Ahmad'),(16,9,'Haider',10,'usama','54321',3,'Ahmad'),(17,9,'Haider',11,'abc','54321',4,'Ahmad'),(18,11,'abc',9,'Haider','54321',4,'Ahmad'),(19,11,'abc',2,'Usama','111',2,'Abc'),(20,11,'abc',2,'Usama','111',2,'Abc'),(21,11,'abc',2,'Usama','111',2,'Abc'),(22,11,'abc',11,'abc','80',2,'Jawad'),(23,5,'ali',11,'abc','32412',2,'Jawad'),(24,5,'ali',11,'abc','32412',2,'Jawad'),(25,11,'abc',1,'ali','13',2,'bag'),(26,11,'abc',1,'ali','13',2,'bag'),(27,11,'abc',1,'ali','13',2,'bag'),(28,9,'Haider',11,'abc','54321',4,'Ahmad'),(29,9,'Haider',11,'abc','77',1,'Ahmad'),(30,6,'faraz',9,'faraz','1947',6,'charger'),(31,9,'faraz',9,'faraz','1947',6,'charger'),(32,10,'faraz',11,'faraz','11121',10,'charger'),(33,13,'ayyan',12,'ayyan','599',16,'battery'),(34,14,'ayyan',13,'ayyan','599',16,'charger'),(35,10,'usama',10,'usama','1234',1,'Ahmad'),(36,10,'usama',NULL,NULL,'678',1,'Ahmad'),(37,10,'usama',NULL,NULL,'678',1,'Ahmad'),(38,10,'usama',NULL,NULL,'678',1,'Ahmad'),(40,10,'usama',10,'usama','1234',1,'Ahmad'),(41,10,'usama',10,'usama','1234',1,'Ahmad'),(42,NULL,NULL,10,'usama','112314',1,'Ahmad'),(43,NULL,NULL,10,'usama','112314',1,'Ahmad'),(44,NULL,NULL,10,'usama','112314',1,'Ahmad'),(45,1,'usama',10,'usama','11',2,'bag'),(46,1,'usama',10,'usama','11',2,'bag'),(47,1,'usama',10,'usama','11',2,'bag'),(48,1,'usama',10,'usama','11',2,'bag'),(49,1,'usama',10,'usama','11',1,'bag'),(50,1,'usama',10,'usama','11',1,'bag'),(51,1,'usama',10,'usama','11',1,'bag'),(52,1,'usama',10,'usama','11',1,'bag'),(53,1,'usama',10,'usama','11',1,'bag'),(54,10,'usama',9,'Haider','12345',NULL,NULL),(55,10,'usama',10,'usama','12341',5,'Ahmad'),(56,10,'usama',10,'usama','12341',5,'Ahmad'),(57,10,'usama',10,'usama','12341',5,'Ahmad'),(58,10,'usama',10,'usama','undefined',5,'Ahmad'),(59,NULL,NULL,10,'usama','123456',5,'Ahmad'),(60,NULL,NULL,10,'usama','123456',5,'Ahmad'),(61,1,'sheikh',10,'usama','11111',4,'Jawad'),(62,1,'sheikh',10,'usama','11111',4,'Jawad'),(63,1,'sheikh',10,'usama','11111',4,'Jawad'),(64,5,'ali',10,'usama','11111',5,'Ahmad'),(65,5,'ali',10,'usama','11111',5,'Ahmad'),(66,5,'ali',10,'usama','11111',5,'Ahmad'),(67,5,'ali',10,'usama','11111',5,'Ahmad'),(68,10,'usama',5,'ali','9',5,'Ahmad'),(69,10,'usama',5,'ali','9',5,'Ahmad'),(70,10,'usama',5,'ali','9',5,'Ahmad'),(71,10,'usama',1,'usama','90',99,'testing'),(72,10,'usama',1,'usama','90',99,'testing'),(73,10,'usama',1,'usama','90',99,'testing'),(74,10,'usama',NULL,NULL,'90',2,'Jawad'),(75,10,'usama',NULL,NULL,'90',2,'Jawad'),(76,10,'usama',NULL,NULL,'90',2,'Jawad'),(77,10,'usama',5,'ali','29',3,'Ahmad'),(78,10,'usama',5,'ali','29',3,'Ahmad'),(79,10,'usama',5,'ali','29',3,'Ahmad'),(80,10,'usama',5,'ali','234',2,'Jawad'),(81,10,'usama',5,'ali','234',2,'Jawad'),(82,10,'usama',5,'ali','234',2,'Jawad'),(83,9,'Haider',10,'usama','1234',1,'Ahmad'),(84,4,'sheikh',9,'Haider','0',1,'abc'),(85,10,'dfs',11,'dfs','11',1,'fds'),(86,9,'Haider',9,'Haider','55',1,'Ahmad'),(87,11,'Haider',9,'Haider','77',1,'Ahmad'),(88,11,'Haider',9,'Haider','77',1,'Ahmad'),(89,11,'Haider',10,'Haider','22',1,'Ahmad'),(90,11,'Haider',10,'Haider','22',1,'Ahmad'),(91,10,'usama',10,'Haider','12412',2,'Jawad'),(92,10,'Haider',10,'usama','80',2,'Jawad'),(93,10,'Haider',10,'usama','80',2,'Jawad'),(94,10,'Haider',10,'usama','80',2,'Jawad'),(95,10,'Haider',0,'dfs','1',1,'fds'),(96,10,'Haider',0,'dfs','1',1,'fds'),(97,10,'Haider',0,'dfs','1',1,'fds'),(98,10,'Haider',1,'dfs','2',1,'fds'),(99,10,'Haider',1,'dfs','2',1,'fds'),(100,10,'Haider',1,'dfs','2',1,'fds'),(101,10,'Haider',2,'usama','2200',4,'bag'),(102,10,'Haider',2,'usama','2200',4,'bag'),(103,10,'Haider',2,'usama','2200',4,'bag'),(104,10,'Haider',5,'ali','2342',4,'Ahmad'),(105,10,'Haider',5,'ali','2342',4,'Ahmad'),(106,10,'Haider',5,'ali','2342',4,'Ahmad'),(107,10,'Haider',10,'Haider','14919',4,'Ahmad'),(108,10,'Haider',10,'Haider','14919',4,'Ahmad'),(109,10,'Haider',10,'Haider','14919',4,'Ahmad'),(110,10,'Haider',10,'Haider','14919',4,'Ahmad'),(111,10,'Haider',10,'Haider','14919',4,'Ahmad'),(112,10,'Haider',10,'Haider','14919',4,'Ahmad'),(113,10,'Haider',10,'Haider','23414',1,'Ahmad'),(114,10,'Haider',10,'Haider','23414',1,'Ahmad'),(115,10,'Haider',10,'Haider','23414',1,'Ahmad'),(116,33,'dfs',111,'askdf','743',1,'fds'),(117,111,'askdf',111,'askdf','2434',1,'9399'),(118,111,'askdf',111,'askdf','2434',1,'9399'),(119,111,'askdf',111,'askdf','2434',1,'9399'),(120,111,'askdf',111,'askdf','23425',1,'9399'),(121,111,'askdf',111,'askdf','23425',1,'9399'),(122,111,'askdf',111,'askdf','23425',1,'9399'),(123,222,'dlakf',222,'dlakf','22222',1,'dfalksdf'),(124,222,'dlakf',222,'dlakf','22222',1,'dfalksdf'),(125,222,'dlakf',222,'dlakf','22222',1,'dfalksdf'),(126,222,'dlakf',2,'dfs','3',1,'fds'),(127,222,'dlakf',2,'dfs','3',1,'fds'),(128,222,'dlakf',2,'dfs','3',1,'fds'),(129,222,'dlakf',222,'dlakf','234423',1,'dfalksdf'),(130,44,'asdfas',44,'asdfas','232323',1,'asvasdva'),(131,44,'asdfas',44,'asdfas','232323',1,'asvasdva'),(132,44,'asdfas',44,'asdfas','232323',1,'asvasdva'),(133,222,'asdas',222,'asdas','52352',1,'asdvavs'),(134,222,'asdas',222,'asdas','52352',1,'asdvavs'),(135,222,'asdas',222,'asdas','52352',1,'asdvavs'),(136,10,'Haider',NULL,NULL,'90',5,'Ahmad'),(137,10,'Haider',NULL,NULL,'90',5,'Ahmad'),(138,10,'Haider',NULL,NULL,'90',5,'Ahmad'),(139,10,'Haider',10,'Haider','234252',3,'Ahmad'),(140,10,'Haider',10,'Haider','234252',3,'Ahmad'),(141,10,'Haider',10,'Haider','234252',3,'Ahmad'),(142,345,'advas',342,'advas','2325',1,'vasasdga'),(143,345,'advas',342,'advas','2325',1,'vasasdga'),(144,345,'advas',342,'advas','2325',1,'vasasdga'),(145,346,'advas',345,'advas','52352',1,'vasasdga'),(146,346,'advas',345,'advas','52352',1,'vasasdga'),(147,346,'advas',345,'advas','52352',1,'vasasdga'),(148,344,'asdfas',342,'asdfas','23232',1,'vasdvas'),(149,10,'Haider',344,'asdfas','23423',1,'vasdvas'),(150,9,'Haider',10,'Haider','1234',4,'Ahmad'),(151,9,'Haider',11,'Haider','567',2,'Jawad'),(152,11,'Haider',9,'Haider','567',4,'Ahmad'),(153,123,'afsldfaj',124,'afsldfaj','123',4,'kkdf'),(154,1,'sheikh',236,'asdfas','111',4,'Jawad'),(155,11,'Haider',9,'Haider','456',2,'Jawad'),(156,11,'Haider',9,'Haider','456',2,'Jawad'),(157,NULL,NULL,10,'Haider','1234',1,'Ahmad'),(158,NULL,NULL,231,'fasdfas','234235',1,'Ahmad'),(159,NULL,NULL,NULL,NULL,'12341',1,'Ahmad'),(160,11,'usama',10,'usama','12314',4,'Ahmad'),(161,NULL,NULL,11,'usama','123',NULL,NULL),(162,124,'afsldfaj',11,'usama','123',4,'kkdf'),(163,124,'afsldfaj',11,'usama','123',4,'kkdf'),(164,11,'usama',11,'usama','123123',2,'Jawad'),(165,11,'usama',9,'usama','1234',2,'Jawad'),(166,22,'asdfasd',22,'asdfasd','12',2,'asfdafs'),(167,23,'asdfasd',22,'asdfasd','12',2,'asfdafs'),(168,26,'asdfasd',10,'usama','1234',NULL,NULL),(169,26,'asdfasd',25,'asdfasd','1234',2,'asfdafs'),(170,22,'asdfasd',26,'asdfasd','33',2,'asfdafs'),(171,24,'asdfasd',26,'asdfasd','234',2,'asfdafs'),(172,25,'asdfasd',4225,'asdfasdf','234',2,'asfdafs'),(173,4225,'asdfasdf',26,'asdfasd','3425',2,'asfdafs'),(174,234,'asdfasdf',5234,'asdfasdf','324144',2,'adsfasdf'),(175,5234,'asdfasdf',5234,'asdfasdf','241351',2,'adsfasdf'),(176,11,'Haider',9,'Haider','766',1,'Ahmad'),(177,11,'Haider',9,'Haider','234',2,'Jawad'),(178,9,'Haider',9,'Haider','234',2,'Jawad'),(179,42,'askdkfj',23,'adfasdf','123321',1,'falksjdf'),(180,9,'Haider',9,'Haider','234',4,'Ahmad'),(181,9,'Haider',9,'Haider','234',4,'Ahmad'),(182,9,'Haider',11,'abc','321',3,'Ahmad'),(183,11,'abc',11,'abc','54321',3,'Ahmad'),(184,11,'abc',11,'abc','2341',3,'Ahmad'),(185,10,'usama',11,'abc','123',3,'Ahmad'),(186,11,'abc',11,'abc','123',3,'Ahmad'),(187,11,'abc',11,'abc','234',3,'Ahmad'),(188,11,'abc',11,'abc','432',3,'Ahmad'),(189,1,'sheikh',11,'abc','111',4,'Jawad'),(190,11,'abc',11,'abc','222',4,'Ahmad'),(191,11,'Haider',11,'Haider','222',1,'Ahmad'),(192,11,'abc',NULL,NULL,'222',NULL,''),(193,11,'abc',NULL,NULL,'222',NULL,''),(194,11,'abc',NULL,NULL,'222',NULL,''),(195,11,'abc',11,'abc','222',3,'Ahmad'),(196,5,'ali',11,'abc','2342',3,'Ahmad'),(197,1,'h',11,'abc','222',1,'Ahmad'),(198,1,'sa',1,'h','12',3,'Jawad'),(199,9,'usama',9,'Haider ','2342',1,'Ahmad'),(200,13,'asdfas',9,'Haider ','1234',1,'asdfasdf'),(201,13,'asdfas',9,'Haider ','1234',1,'asdfasdf');
/*!40000 ALTER TABLE `orders` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `popular_images`
--

DROP TABLE IF EXISTS `popular_images`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `popular_images` (
  `Image_Id` int NOT NULL AUTO_INCREMENT,
  `Image_Name` varchar(100) DEFAULT NULL,
  `Product_Id` int DEFAULT NULL,
  `Brand` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`Image_Id`)
) ENGINE=InnoDB AUTO_INCREMENT=33 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `popular_images`
--

LOCK TABLES `popular_images` WRITE;
/*!40000 ALTER TABLE `popular_images` DISABLE KEYS */;
INSERT INTO `popular_images` VALUES (15,'1595621956487_GitLabAcct1.png',1,NULL),(16,'1598200439857_Screenshot from 2020-08-19 12-51-57.png',NULL,NULL),(17,'1598200439867_CS7.png',NULL,NULL),(18,'1598200439868_SE1.png',NULL,NULL),(19,'1598200671769_Screenshot from 2020-08-19 12-51-57.png',NULL,NULL),(20,'1598200671787_CS7.png',NULL,NULL),(21,'1598200671788_SE1.png',NULL,NULL),(22,'1598200814052_Screenshot from 2020-08-19 12-51-57.png',NULL,NULL),(23,'1598200814059_CS7.png',NULL,NULL),(24,'1598200814060_SE1.png',NULL,NULL),(25,'1598200900005_Screenshot from 2020-08-19 12-51-57.png',NULL,NULL),(26,'1598200900026_CS7.png',NULL,NULL),(27,'1598200900027_SE1.png',NULL,NULL),(28,'1598210646147_Screenshot from 2020-08-19 12-51-57.png',NULL,NULL),(29,'1598210646155_CS7.png',NULL,NULL),(30,'1598210646155_SE1.png',NULL,NULL),(31,'1598517616352_Screenshot from 2020-08-26 13-56-50.png',NULL,NULL),(32,'1598517616354_Screenshot from 2020-08-26 13-50-12.png',NULL,NULL);
/*!40000 ALTER TABLE `popular_images` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `popular_products`
--

DROP TABLE IF EXISTS `popular_products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `popular_products` (
  `Id` int NOT NULL AUTO_INCREMENT,
  `P_Name` varchar(30) DEFAULT NULL,
  `Description` varchar(30) DEFAULT NULL,
  `Brand` varchar(30) DEFAULT NULL,
  `Category_Name` varchar(30) DEFAULT NULL,
  `Retail` varchar(30) DEFAULT NULL,
  `Color` varchar(30) DEFAULT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `popular_products`
--

LOCK TABLES `popular_products` WRITE;
/*!40000 ALTER TABLE `popular_products` DISABLE KEYS */;
INSERT INTO `popular_products` VALUES (1,'bag7','beautiful product','Gucci','second','6998','red'),(2,'bag10','it is good bag','abc','xyz','900','blue'),(3,'New Product','This is new Product','Veero','HandBag','1200','Red'),(4,'New Product','This is new Product','Veero','HandBag','1200','Red');
/*!40000 ALTER TABLE `popular_products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `product_images`
--

DROP TABLE IF EXISTS `product_images`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `product_images` (
  `Image_Id` int NOT NULL AUTO_INCREMENT,
  `Image_Name` varchar(100) DEFAULT NULL,
  `Product_Id` int DEFAULT NULL,
  `Brand` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`Image_Id`)
) ENGINE=InnoDB AUTO_INCREMENT=25 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product_images`
--

LOCK TABLES `product_images` WRITE;
/*!40000 ALTER TABLE `product_images` DISABLE KEYS */;
INSERT INTO `product_images` VALUES (1,'image1',1,'Gucci'),(2,'image2',2,'Gucci'),(3,'image3',3,'Gucci'),(4,'1599131191382_localoutput.png',4,'Gucci'),(5,'1599131193640_localoutput.png',5,'Gucci'),(6,'1599131195128_localoutput.png',6,'Gucci'),(7,'1599131196630_localoutput.png',7,'Gucci'),(8,'1599131198021_localoutput.png',8,'Gucci'),(9,'1599131199179_localoutput.png',9,'Gucci');
/*!40000 ALTER TABLE `product_images` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `products` (
  `Id` int NOT NULL AUTO_INCREMENT,
  `P_Name` varchar(30) DEFAULT NULL,
  `Price` varchar(30) DEFAULT NULL,
  `Retail_Price` varchar(30) DEFAULT NULL,
  `P_Condition` varchar(30) DEFAULT NULL,
  `Description` varchar(300) DEFAULT NULL,
  `Brand` varchar(30) DEFAULT NULL,
  `Verification` varchar(45) NOT NULL,
  `Lowest_Ask` varchar(45) DEFAULT NULL,
  `Lowest_Bid` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (1,'abc','eeeeeeeee','brand','ashgadh','jdja','jashak','',NULL,NULL),(2,'P2','434343','55649','Good','P2','Gucci','Authenticated','1121','1221'),(4,'Product 4','description','bdhhd','hfhhdhd','hhfh','kdkkd','',NULL,NULL),(5,'Product 5','description','nnndnd','nnnfnd','ccndn','ndnnd','',NULL,NULL),(6,'Jawad','123344','5543221',NULL,NULL,NULL,'Authenticated',NULL,NULL),(7,'Jawad','123344','5543221',NULL,NULL,'Gucci','Authenticated',NULL,NULL),(8,'Jawad','123344','5543221',NULL,'This is Description','Gucci','Authenticated',NULL,NULL),(9,'Jawad','123344','5543221','Good','This is Description','Gucci','Authenticated',NULL,NULL),(11,'Haier Laptop Bag','1500','1600','Good','Bag for carrying laptop','Haier','Authenticated','1500','1600'),(12,'LV-29923492','2599','2599','Execellent','Made with genuine leather. In excellent condition.','louis-vuitton','Authenticated',NULL,NULL),(13,'gucci-1992','2993','3000','good','some description','gucci','Authenticated',NULL,NULL);
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-03-02  6:36:23
