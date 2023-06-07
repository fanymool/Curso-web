-- MariaDB dump 10.19  Distrib 10.4.28-MariaDB, for Win64 (AMD64)
--
-- Host: localhost    Database: myinstagram
-- ------------------------------------------------------
-- Server version	10.4.28-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `descripcion`
--

DROP TABLE IF EXISTS `descripcion`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `descripcion` (
  `ID_DESCRIPCION` int(11) NOT NULL AUTO_INCREMENT,
  `descripcion_de_la_foto` char(200) DEFAULT NULL,
  PRIMARY KEY (`ID_DESCRIPCION`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `descripcion`
--

LOCK TABLES `descripcion` WRITE;
/*!40000 ALTER TABLE `descripcion` DISABLE KEYS */;
INSERT INTO `descripcion` VALUES (1,'Meet me at midnight...'),(2,'Anti hero but make ir acoustic'),(3,'NULL'),(4,'NULL'),(5,'<3'),(6,'Great team spirit!'),(7,'NULL'),(8,'NULL'),(9,'NULL'),(10,'NULL'),(11,'NULL');
/*!40000 ALTER TABLE `descripcion` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `seguidores`
--

DROP TABLE IF EXISTS `seguidores`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `seguidores` (
  `ID_SEGUIDORES` int(11) NOT NULL AUTO_INCREMENT,
  `seguidores` char(200) DEFAULT NULL,
  PRIMARY KEY (`ID_SEGUIDORES`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `seguidores`
--

LOCK TABLES `seguidores` WRITE;
/*!40000 ALTER TABLE `seguidores` DISABLE KEYS */;
INSERT INTO `seguidores` VALUES (1,'selenagomez'),(2,'gigihadid'),(3,'j.m'),(4,'uarmyhope'),(5,'bts.bighitofficial'),(6,'waynerooney'),(7,'leomessi'),(8,'toni.starr');
/*!40000 ALTER TABLE `seguidores` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `seguidos`
--

DROP TABLE IF EXISTS `seguidos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `seguidos` (
  `ID_SEGUIDOS` int(11) NOT NULL AUTO_INCREMENT,
  `seguidos` char(200) DEFAULT NULL,
  PRIMARY KEY (`ID_SEGUIDOS`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `seguidos`
--

LOCK TABLES `seguidos` WRITE;
/*!40000 ALTER TABLE `seguidos` DISABLE KEYS */;
INSERT INTO `seguidos` VALUES (1,'NULL'),(2,'jm'),(3,'rkive'),(4,'thv'),(5,'earling.haaland'),(6,'xavi'),(7,'eminem'),(8,'bryancranston');
/*!40000 ALTER TABLE `seguidos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuario`
--

DROP TABLE IF EXISTS `usuario`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `usuario` (
  `ID_USUARIO` int(11) NOT NULL AUTO_INCREMENT,
  `usuario` char(200) DEFAULT NULL,
  `nombre` char(200) DEFAULT NULL,
  `telefonos` int(11) DEFAULT NULL,
  `fotos` int(11) DEFAULT NULL,
  PRIMARY KEY (`ID_USUARIO`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuario`
--

LOCK TABLES `usuario` WRITE;
/*!40000 ALTER TABLE `usuario` DISABLE KEYS */;
INSERT INTO `usuario` VALUES (1,'Taylorswift','Taylor Swift',2147483647,2),(2,'Jin','Jin of BTS',2147483647,3),(3,'cristiano','Cristiano Ronaldo',2147483647,1),(4,'robertpattinsonv','Robert Pattinson',2147483647,5);
/*!40000 ALTER TABLE `usuario` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuario_has_descripcion`
--

DROP TABLE IF EXISTS `usuario_has_descripcion`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `usuario_has_descripcion` (
  `ID_UHD` int(11) NOT NULL AUTO_INCREMENT,
  `ID_USUARIO` int(11) DEFAULT NULL,
  `ID_DESCRIPCION` int(11) DEFAULT NULL,
  PRIMARY KEY (`ID_UHD`),
  KEY `ID_USUARIO` (`ID_USUARIO`),
  KEY `ID_DESCRIPCION` (`ID_DESCRIPCION`),
  CONSTRAINT `usuario_has_descripcion_ibfk_1` FOREIGN KEY (`ID_USUARIO`) REFERENCES `usuario` (`ID_USUARIO`),
  CONSTRAINT `usuario_has_descripcion_ibfk_2` FOREIGN KEY (`ID_DESCRIPCION`) REFERENCES `descripcion` (`ID_DESCRIPCION`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuario_has_descripcion`
--

LOCK TABLES `usuario_has_descripcion` WRITE;
/*!40000 ALTER TABLE `usuario_has_descripcion` DISABLE KEYS */;
INSERT INTO `usuario_has_descripcion` VALUES (1,1,1),(2,1,2),(3,2,3),(4,2,4),(5,2,5),(6,3,6),(7,4,7),(8,4,8),(9,4,9),(10,4,10),(11,4,11);
/*!40000 ALTER TABLE `usuario_has_descripcion` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuario_has_seguidor`
--

DROP TABLE IF EXISTS `usuario_has_seguidor`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `usuario_has_seguidor` (
  `ID_UHS` int(11) NOT NULL AUTO_INCREMENT,
  `ID_USUARIO` int(11) DEFAULT NULL,
  `ID_SEGUIDOR` int(11) DEFAULT NULL,
  PRIMARY KEY (`ID_UHS`),
  KEY `ID_USUARIO` (`ID_USUARIO`),
  KEY `ID_SEGUIDOR` (`ID_SEGUIDOR`),
  CONSTRAINT `usuario_has_seguidor_ibfk_1` FOREIGN KEY (`ID_USUARIO`) REFERENCES `usuario` (`ID_USUARIO`),
  CONSTRAINT `usuario_has_seguidor_ibfk_2` FOREIGN KEY (`ID_SEGUIDOR`) REFERENCES `seguidores` (`ID_SEGUIDORES`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuario_has_seguidor`
--

LOCK TABLES `usuario_has_seguidor` WRITE;
/*!40000 ALTER TABLE `usuario_has_seguidor` DISABLE KEYS */;
INSERT INTO `usuario_has_seguidor` VALUES (1,1,1),(2,1,2),(3,2,3),(4,2,4),(5,2,5),(6,3,6),(7,3,7),(8,4,8);
/*!40000 ALTER TABLE `usuario_has_seguidor` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuario_has_seguidos`
--

DROP TABLE IF EXISTS `usuario_has_seguidos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `usuario_has_seguidos` (
  `ID_UHSE` int(11) NOT NULL AUTO_INCREMENT,
  `ID_USUARIO` int(11) DEFAULT NULL,
  `ID_SEGUIDOS` int(11) DEFAULT NULL,
  PRIMARY KEY (`ID_UHSE`),
  KEY `ID_USUARIO` (`ID_USUARIO`),
  KEY `ID_SEGUIDOS` (`ID_SEGUIDOS`),
  CONSTRAINT `usuario_has_seguidos_ibfk_1` FOREIGN KEY (`ID_USUARIO`) REFERENCES `usuario` (`ID_USUARIO`),
  CONSTRAINT `usuario_has_seguidos_ibfk_2` FOREIGN KEY (`ID_SEGUIDOS`) REFERENCES `seguidos` (`ID_SEGUIDOS`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuario_has_seguidos`
--

LOCK TABLES `usuario_has_seguidos` WRITE;
/*!40000 ALTER TABLE `usuario_has_seguidos` DISABLE KEYS */;
INSERT INTO `usuario_has_seguidos` VALUES (1,1,1),(2,2,2),(3,2,3),(4,2,4),(5,3,5),(6,3,6),(7,4,7),(8,4,8);
/*!40000 ALTER TABLE `usuario_has_seguidos` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-05-25  1:08:03
