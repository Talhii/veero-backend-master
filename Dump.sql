-- MySQL dump 10.13  Distrib 8.0.21, for Linux (x86_64)
--
-- Host: localhost    Database: project
-- ------------------------------------------------------
-- Server version	8.0.21-0ubuntu0.20.04.4

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
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
INSERT INTO `Banner_Products` VALUES (1,'abc','eeeeeeeee','brand','ashgadh','jdja','jashak','',1,NULL,NULL),(4,'Product 4','description','bdhhd','hfhhdhd','hhfh','kdkkd','',1,NULL,NULL),(5,'Product 5','description','nnndnd','nnnfnd','ccndn','ndnnd','',1,NULL,NULL),(6,'Jawad','123344','5543221',NULL,NULL,NULL,'Authenticated',1,NULL,NULL),(7,'Jawad','123344','5543221',NULL,NULL,'Gucci','Authenticated',1,NULL,NULL);
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
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Banners`
--

LOCK TABLES `Banners` WRITE;
/*!40000 ALTER TABLE `Banners` DISABLE KEYS */;
INSERT INTO `Banners` VALUES (1,'undefined','This is Banner 1 Description'),(2,'Banner 1','This is Banner 1 Description'),(3,'heading 1',NULL),(4,'heading 2',NULL),(5,'heading 1',NULL),(6,'heading 2',NULL),(7,'heading 1',NULL),(8,'heading 2',NULL),(9,'heading 1',NULL),(10,'heading 2',NULL),(11,'heading 1',NULL),(12,'heading 2',NULL),(13,'heading1',NULL),(14,'heading2',NULL),(16,'New Banner Heading','This new Banner DEscription');
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
) ENGINE=InnoDB AUTO_INCREMENT=24 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Brand_Images`
--

LOCK TABLES `Brand_Images` WRITE;
/*!40000 ALTER TABLE `Brand_Images` DISABLE KEYS */;
INSERT INTO `Brand_Images` VALUES (1,'1596721750318_g3.png',NULL),(2,'1596721823006_g3.png','Gucci'),(3,'1596721918889_g3.png','Gucci'),(4,'1596721956997_g3.png','Gucci'),(5,'1596722001158_g3.png','Gucci'),(6,'1596722566431_g3.png','Gucci'),(7,'1596722637731_g3.png','Gucci'),(8,'1596724650383_scraping.png','Armani'),(9,'1596724673781_scraping.png','Armani'),(10,'1596724739619_scraping.png','Armani'),(11,'1596724779923_scraping.png','Armani'),(12,'1596724796101_scraping.png','Armani'),(13,'1596724867674_scraping.png','Armani'),(14,'1596724883223_scraping.png','Armani'),(15,'1596725168544_scraping.png','Armani'),(16,'1596726618862_scraping.png','Armani'),(17,'1596726662257_scraping.png','Armani'),(18,'1597316084599_manifest.png','Gucci'),(19,'1597838485952_CS7.png','Gucci'),(20,'1597838557970_CS7.png','Gucci'),(21,'1598207285395_Talha.png','Gucci'),(22,'1598210877264_Screenshot from 2020-08-19 12-51-57.png','Gucci'),(23,'1599675306552_1.png','Gucci A');
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
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `approved_orders`
--

LOCK TABLES `approved_orders` WRITE;
/*!40000 ALTER TABLE `approved_orders` DISABLE KEYS */;
INSERT INTO `approved_orders` VALUES (7,1,'usama',1,'usama','5000',1,'abc'),(8,4,'sheikh',2,'Usama','100',11,'1'),(9,4,'sheikh',2,'Usama','122',11,'Haier');
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
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `asks`
--

LOCK TABLES `asks` WRITE;
/*!40000 ALTER TABLE `asks` DISABLE KEYS */;
INSERT INTO `asks` VALUES (1,2,'Usama',2,'111','Abc');
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
) ENGINE=InnoDB AUTO_INCREMENT=20 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `bids`
--

LOCK TABLES `bids` WRITE;
/*!40000 ALTER TABLE `bids` DISABLE KEYS */;
INSERT INTO `bids` VALUES (4,1,'sheikh',4,'122','Jawad'),(5,NULL,NULL,NULL,NULL,NULL),(6,NULL,NULL,NULL,NULL,NULL),(7,NULL,NULL,NULL,NULL,NULL),(8,NULL,NULL,NULL,NULL,NULL),(9,1,'sheikh',4,'121','Jawad'),(10,1,'sheikh',4,'122','Jawad'),(11,1,'sheikh',4,'123','Jawad'),(12,1,'sheikh',4,'111','Jawad'),(13,1,'sheikh',4,'111','Jawad'),(14,1,'sheikh',4,'10101','Jawad'),(15,1,'sheikh',4,'11111','Jawad'),(16,1,'sheikh',4,'009909','Jawad'),(17,1,'sa',3,'12','Jawad'),(18,4,'sheikh',1,'1000','abc'),(19,4,'sheikh',1,'1200','abc');
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
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `brands`
--

LOCK TABLES `brands` WRITE;
/*!40000 ALTER TABLE `brands` DISABLE KEYS */;
INSERT INTO `brands` VALUES (1,'Gucci','Gucci Bags'),(2,'hshsg','hahsh');
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
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `customers`
--

LOCK TABLES `customers` WRITE;
/*!40000 ALTER TABLE `customers` DISABLE KEYS */;
INSERT INTO `customers` VALUES (4,'sheikh','abdali','shekhu@gmail.com','23','buyer'),(5,'ali','hassan','hassan@gmail.com','236788','seller'),(6,'Alex','Bhati','alex@gmail.com','213','buyer'),(7,'Jawad','Imtiaz','tanoli@gmail.com','12345678','buyer');
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
INSERT INTO `header_images` VALUES (1,'1599118810387_localoutput.png',NULL);
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
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `most_popular_products`
--

LOCK TABLES `most_popular_products` WRITE;
/*!40000 ALTER TABLE `most_popular_products` DISABLE KEYS */;
INSERT INTO `most_popular_products` VALUES (1,'Jawad','123344','5543221',NULL,'This is Description','Gucci','Authenticated'),(2,'Jawad','123344','5543221','Good','This is Description','Gucci','Authenticated'),(3,'Haier Laptop Bag','1500','1600','Good','Bag for carrying laptop','Haier','Authenticated');
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
) ENGINE=InnoDB AUTO_INCREMENT=22 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mpp_images`
--

LOCK TABLES `mpp_images` WRITE;
/*!40000 ALTER TABLE `mpp_images` DISABLE KEYS */;
INSERT INTO `mpp_images` VALUES (1,'1597841483960_Screenshot from 2020-08-19 12-51-57.png',1,NULL),(2,'1597841483967_CS7.png',2,NULL),(3,'1597841483968_SE1.png',NULL,NULL),(4,'1597841648587_Screenshot from 2020-08-19 12-51-57.png',NULL,NULL),(5,'1597841648596_CS7.png',NULL,NULL),(6,'1597841648597_SE1.png',NULL,NULL),(7,'1598183952085_Screenshot from 2020-08-19 12-51-57.png',NULL,NULL),(8,'1598183952105_CS7.png',NULL,NULL),(9,'1598183952105_SE1.png',NULL,NULL),(10,'1598206688498_Screenshot from 2020-08-19 12-51-57.png',NULL,NULL),(11,'1598206688508_CS7.png',NULL,NULL),(12,'1598206688509_SE1.png',NULL,NULL),(13,'1598206871551_Screenshot from 2020-08-19 12-51-57.png',NULL,NULL),(14,'1598206871567_CS7.png',NULL,NULL),(15,'1598206871568_SE1.png',NULL,NULL),(16,'1598207019374_Screenshot from 2020-08-19 12-51-57.png',NULL,NULL),(17,'1598207019387_CS7.png',NULL,NULL),(18,'1598207019388_SE1.png',NULL,NULL),(19,'1598210716420_Screenshot from 2020-08-19 12-51-57.png',NULL,NULL),(20,'1598210716426_CS7.png',NULL,NULL),(21,'1598210716426_SE1.png',NULL,NULL);
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
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `orders`
--

LOCK TABLES `orders` WRITE;
/*!40000 ALTER TABLE `orders` DISABLE KEYS */;
INSERT INTO `orders` VALUES (1,1,'Ehtesham',2,'Abbas','2000',1,'Bag'),(2,2,'aaa',22,'sasa','111',2,'asaas'),(3,1,'usama',1,'usama','22',1,'jawad'),(5,1,'usama',1,'usama','222111',1,'jawad');
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
INSERT INTO `popular_images` VALUES (1,'1593811190947_20190214_183323.jpg',0,'xyz'),(2,'1593842139233_20190214_183323.jpg',1,'xyz'),(3,'1595439245684_command2.png',1,'abc'),(4,'1595439248498_command2.png',1,'abc'),(5,'1595439249749_command2.png',1,'xyz'),(6,'1595439250969_command2.png',1,'abc'),(7,'1595439252221_command2.png',1,'xyz'),(8,'1595439253497_command2.png',1,NULL),(9,'1595439254689_command2.png',1,NULL),(10,'1595439255839_command2.png',1,NULL),(11,'1595439256945_command2.png',1,NULL),(12,'1595439258255_command2.png',1,NULL),(13,'1595439259195_command2.png',1,NULL),(14,'1595439260774_command2.png',1,NULL),(15,'1595621956487_GitLabAcct1.png',1,NULL),(16,'1598200439857_Screenshot from 2020-08-19 12-51-57.png',NULL,NULL),(17,'1598200439867_CS7.png',NULL,NULL),(18,'1598200439868_SE1.png',NULL,NULL),(19,'1598200671769_Screenshot from 2020-08-19 12-51-57.png',NULL,NULL),(20,'1598200671787_CS7.png',NULL,NULL),(21,'1598200671788_SE1.png',NULL,NULL),(22,'1598200814052_Screenshot from 2020-08-19 12-51-57.png',NULL,NULL),(23,'1598200814059_CS7.png',NULL,NULL),(24,'1598200814060_SE1.png',NULL,NULL),(25,'1598200900005_Screenshot from 2020-08-19 12-51-57.png',NULL,NULL),(26,'1598200900026_CS7.png',NULL,NULL),(27,'1598200900027_SE1.png',NULL,NULL),(28,'1598210646147_Screenshot from 2020-08-19 12-51-57.png',NULL,NULL),(29,'1598210646155_CS7.png',NULL,NULL),(30,'1598210646155_SE1.png',NULL,NULL),(31,'1598517616352_Screenshot from 2020-08-26 13-56-50.png',NULL,NULL),(32,'1598517616354_Screenshot from 2020-08-26 13-50-12.png',NULL,NULL);
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
INSERT INTO `product_images` VALUES (4,'1599131191382_localoutput.png',1,'Gucci'),(5,'1599131193640_localoutput.png',2,'Gucci'),(6,'1599131195128_localoutput.png',3,'Gucci'),(7,'1599131196630_localoutput.png',4,'Gucci'),(8,'1599131198021_localoutput.png',5,'Gucci'),(9,'1599131199179_localoutput.png',6,'Gucci'),(10,'1599131200481_localoutput.png',7,'Gucci'),(11,'1599131201483_localoutput.png',8,'Gucci'),(12,'1599131202674_localoutput.png',9,'Gucci'),(13,'1599402373851_localoutput.png',NULL,NULL),(14,'1599650824208_1.png',NULL,NULL),(15,'1599651743500_1.png',NULL,NULL),(16,'1599651979079_1.png',NULL,NULL),(17,'1599651979083_2.png',NULL,NULL),(18,'1599651979085_3.png',NULL,NULL),(19,'1599654778118_1.png',NULL,NULL),(20,'1599654778122_2.png',NULL,NULL),(21,'1599654778136_3.png',NULL,NULL),(22,'1599654828041_1.png',NULL,NULL),(23,'1599654828045_2.png',NULL,NULL),(24,'1599654828049_3.png',NULL,NULL);
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
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (1,'abc','eeeeeeeee','brand','ashgadh','jdja','jashak','',NULL,NULL),(4,'Product 4','description','bdhhd','hfhhdhd','hhfh','kdkkd','',NULL,NULL),(5,'Product 5','description','nnndnd','nnnfnd','ccndn','ndnnd','',NULL,NULL),(6,'Jawad','123344','5543221',NULL,NULL,NULL,'Authenticated',NULL,NULL),(7,'Jawad','123344','5543221',NULL,NULL,'Gucci','Authenticated',NULL,NULL),(8,'Jawad','123344','5543221',NULL,'This is Description','Gucci','Authenticated',NULL,NULL),(9,'Jawad','123344','5543221','Good','This is Description','Gucci','Authenticated',NULL,NULL),(11,'Haier Laptop Bag','1500','1600','Good','Bag for carrying laptop','Haier','Authenticated','1500','1600');
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

-- Dump completed on 2020-09-12  3:25:51
