--
-- Drop Tables
--

SET foreign_key_checks = 0;
DROP TABLE if exists users;
SET foreign_key_checks = 1;

--
-- 
CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    userName VARCHAR(255) NOT NULL,
    userPassword VARCHAR(255) NOT NULL,
    userEmail VARCHAR(255) NOT NULL,
    userLocation VARCHAR(255) NULL,
    INDEX (userName),
    UNIQUE (userName)
);

--
CREATE TABLE PCP_FMD (
    id INT PRIMARY KEY,
    country VARCHAR(100),
    area VARCHAR(100),
    roadmap_region VARCHAR(100),
    year INT,
    pcp_fmd_stage VARCHAR(50),
    last_meeting_attended VARCHAR(100),
    pso_support VARCHAR(100)
);
--
CREATE TABLE Animal_Diseases (
    year INT,
    semester VARCHAR(50),
    world_region VARCHAR(100),
    country VARCHAR(100),
    administrative_division VARCHAR(100),
    disease VARCHAR(100),
    serotype_subtype_genotype VARCHAR(100),
    animal_category VARCHAR(100),
    species VARCHAR(100),
    event_id INT,
    outbreak_id INT,
    new_outbreaks INT,
    susceptible INT,
    measuring_units VARCHAR(50),
    cases INT,
    killed_disposed INT,
    slaughtered INT,
    deaths INT,
    vaccinated INT,
    PRIMARY KEY (event_id, outbreak_id)
);

--

INSERT INTO PCP_FMD (id, country, area, roadmap_region, year, pcp_fmd_stage, last_meeting_attended, pso_support) VALUES
(1178, 'Afghanistan', NULL, 'West Eurasia', 2024, 'PCP-1', 'April 2023', NULL),
(1179, 'Algeria', NULL, 'N/A', 2024, NULL, NULL, NULL),
(1180, 'Angola', NULL, 'Southern African Development Community', 2024, 'PCP-1-provisional', 'November 2020', NULL),
(1181, 'Armenia', NULL, 'West Eurasia', 2024, 'PCP-2', 'April 2023', NULL),
(1182, 'Azerbaijan', NULL, 'West Eurasia', 2024, 'PCP-2', 'April 2023', 'Yes'),
(1183, 'Bahrain', NULL, 'Middle East', 2024, 'PCP-2', 'December 2021', NULL),
(1184, 'Bangladesh', NULL, 'SAARC/South Asia', 2024, 'PCP-1', 'May 2023', NULL),
(1185, 'Benin', NULL, 'West Africa', 2024, 'PCP-0', 'December 2023', NULL),
(1186, 'Bhutan', NULL, 'SAARC/South Asia', 2024, 'PCP-2-Provisional', 'May 2023', NULL),
(1187, 'Botswana', '(Zone)', 'Southern African Development Community', 2024, 'PCP-4', 'November 2020', NULL),
(1188, 'Burkina Faso', NULL, 'West Africa', 2024, 'PCP-1', 'December 2023', 'Yes'),
(1189, 'Burundi', NULL, 'East Africa', 2024, 'PCP-0', 'March 2022', NULL),
(1190, 'Cambodia', NULL, 'SEACFMD', 2024, 'PCP-1', NULL, NULL),
(1191, 'Cameroon', NULL, 'Central Africa', 2024, 'PCP-1', 'September 2022', 'Yes'),
(1192, 'Cape Verde', NULL, 'West Africa', 2024, 'PCP-0', 'December 2023', NULL),
(1193, 'Central African Republic', NULL, 'Central Africa', 2024, 'PCP-0', 'September 2022', NULL),
(1194, 'Chad', NULL, 'Central Africa', 2024, 'PCP-0', 'September 2022', NULL),
(1195, 'China', NULL, 'SEACFMD', 2024, '???', NULL, NULL),
(1196, 'Comoros', NULL, 'Southern African Development Community', 2024, 'PCP-1-Provisional', 'November 2020', NULL),
(1197, 'Congo', NULL, 'Central Africa', 2024, 'PCP-0', 'September 2022', NULL),
(1198, 'Côte d'Ivoire', NULL, 'West Africa', 2024, 'PCP-1-Provisional', 'December 2023', NULL),
(1199, 'Democratic People's Republic of Korea', NULL, 'N/A', 2024, NULL, NULL, NULL),
(1200, 'Democratic Republic of the Congo', NULL, 'Southern African Development Community', 2024, 'PCP-1-Provisional', 'November 2020', 'Yes'),
(1201, 'Djibouti', NULL, 'East Africa', 2024, 'PCP-1-Provisional', 'March 2022', NULL),
(1202, 'Egypt', NULL, 'Middle East', 2024, 'PCP-2', 'December 2021', NULL),
(1203, 'Equatorial Guinea', NULL, 'Central Africa', 2024, 'PCP-0', 'September 2022', NULL),
(1204, 'Eritrea', NULL, 'East Africa', 2024, 'PCP-1', 'March 2022', NULL),
(1205, 'Eswatini', NULL, 'Southern African Development Community', 2024, NULL, 'November 2020', NULL)
-- 

INSERT INTO Animal_Diseases (year, semester, world_region, country, administrative_division, disease, serotype_subtype_genotype, animal_category, species, event_id, outbreak_id, new_outbreaks, susceptible, measuring_units, cases, killed_disposed, slaughtered, deaths, vaccinated) VALUES
(2024, 'Jan-Jun 2024', 'Africa', 'Libya', 'Misratah', 'Lumpy skin disease virus (Inf. with)', '-', 'Domestic', 'Cattle', 5091, NULL, 2, 11, 'Animal', 9, 0, 0, 4, 0),
(2024, 'Jan-Jun 2024', 'Asia', 'Hong Kong', 'North', 'African swine fever virus (Inf. with)', '-', 'Domestic', 'Swine', 5323, 129771, 1, 489, 'Animal', 2, 489, NULL, NULL, NULL),
(2024, 'Jan-Jun 2024', 'Asia', 'Hong Kong', 'Yuen Long', 'African swine fever virus (Inf. with)', '-', 'Domestic', 'Swine', 5323, NULL, 3, 3581, 'Animal', 12, 3581, NULL, NULL, NULL),
(2024, 'Jan-Jun 2024', 'Asia', 'Korea (Rep. of)', 'Paju', 'African swine fever virus (Inf. with)', '-', 'Domestic', 'Swine', 4345, 130406, 1, 2394, 'Animal', 35, 2375, NULL, 19, NULL),
(2024, 'Jan-Jun 2024', 'Asia', 'Korea (Rep. of)', 'Yeongdeok', 'African swine fever virus (Inf. with)', '-', 'Domestic', 'Swine', 4345, 130405, 1, 519, 'Animal', 27, 499, NULL, 20, NULL),
(2024, 'Jan-Jun 2024', 'Asia', 'Nepal', 'Bhimad', 'African swine fever virus (Inf. with)', '-', 'Domestic', 'Swine', 4458, 131375, 1, 5, 'Animal', 2, NULL, NULL, 2, NULL),
(2024, 'Jan-Jun 2024', 'Asia', 'Nepal', 'MadhyaNepal', 'African swine fever virus (Inf. with)', '-', 'Domestic', 'Swine', 4458, 131376, 1, 17, 'Animal', 8, NULL, NULL, 4, NULL)
---




