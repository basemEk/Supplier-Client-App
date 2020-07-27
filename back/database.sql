-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Jul 27, 2020 at 09:10 AM
-- Server version: 10.4.13-MariaDB
-- PHP Version: 7.4.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";

--
-- Database: `Supplier_Client`
--

-- --------------------------------------------------------

--
-- Table structure for table `category`
--

CREATE TABLE `category` (
  `id` int(10) UNSIGNED NOT NULL,
  `title` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `image` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `supplier_info_id` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `slug` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `category`
--

INSERT INTO `category` (`id`, `title`, `image`, `supplier_info_id`, `created_at`, `updated_at`, `slug`) VALUES
(1, 'Meats and Fish', '3-meats.jpg', 5, NULL, NULL, '1-meats-category'),
(2, 'Bakery', '2-bakery.jpg', 4, NULL, NULL, ''),
(3, 'Chocolate & Candies', '3-chocolate-candies.jpg', 5, NULL, NULL, 'candies-slug'),
(4, 'Cans', '1-cans.jpg', 4, NULL, NULL, '1-cans.jpg'),
(5, 'Chips & Nuts', '2-chips-nuts.jpg', 4, NULL, NULL, 'chips-nuts'),
(8, 'titleTest', 'image.jpg', 4, '2020-07-20 12:42:06', '2020-07-20 12:42:06', 'gjhgj-jkhskd-kjhsk'),
(9, 'ghghghgh', 'imageee.jpg', 4, NULL, NULL, 'asas-klkl-ghgh');

-- --------------------------------------------------------

--
-- Table structure for table `client_info`
--

CREATE TABLE `client_info` (
  `id` int(10) UNSIGNED NOT NULL,
  `username` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `phone_number` int(11) NOT NULL,
  `password` varchar(200) COLLATE utf8mb4_unicode_ci NOT NULL,
  `confirm_password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `client_info`
--

INSERT INTO `client_info` (`id`, `username`, `phone_number`, `password`, `confirm_password`, `created_at`, `updated_at`) VALUES
(1, 'zainab kassem', 31234567, 'zeinabk', 'zeinabk', NULL, NULL),
(2, 'bassem', 3123456, 'bassem@147', 'bassem@147', '2020-07-20 13:18:39', '2020-07-20 13:18:39');

-- --------------------------------------------------------

--
-- Table structure for table `contact_us`
--

CREATE TABLE `contact_us` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `message` text COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `contact_us`
--

INSERT INTO `contact_us` (`id`, `email`, `message`) VALUES
(1, 'bassem@test.com', 'please update your application and get some more features');

-- --------------------------------------------------------

--
-- Table structure for table `failed_jobs`
--

CREATE TABLE `failed_jobs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `connection` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `queue` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `payload` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `exception` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `item_info`
--

CREATE TABLE `item_info` (
  `id` int(10) UNSIGNED NOT NULL,
  `title` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `image` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `price_lbp` double NOT NULL,
  `price_dollar` double NOT NULL,
  `minimum_quantity` int(11) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `item_info`
--

INSERT INTO `item_info` (`id`, `title`, `image`, `description`, `price_lbp`, `price_dollar`, `minimum_quantity`, `created_at`, `updated_at`) VALUES
(1, 'fresh Hummus', '1-fresh-hummus.jpg', 'Fresh hummus are you sure?', 5000, 1, 12, NULL, NULL),
(2, 'Kidney beans', '2-kidney-beans.jpg', 'Hello world please read me', 1000, 10, 4, NULL, NULL),
(3, 'Mortadella can Nears', '10-can22.jpg', 'canned meat mortadella halal ', 4500, 4, 50, NULL, NULL),
(4, 'Mortadella Zwan', '9-can21.jpg', 'canned Meat Zwan Mortadella', 10000, 1, 40, NULL, NULL),
(5, 'Hotdog can', '13-hotdog.jpg', 'Meat can Hotdog Zwan', 9000, 0.9, 40, NULL, NULL),
(6, 'Mortadella meat Zwan', '9-can21.jpg', 'canned meat zwan mortadella', 10000, 1, 50, NULL, NULL),
(7, 'Sardine bella', '14-sardine.jpg', 'sardine fish bella can', 4500, 1, 60, NULL, NULL),
(8, 'Tuna can', '15-tuna.jpg', 'canned tuna bella mark', 3500, 0.5, 60, NULL, NULL),
(9, 'Pepsi', '12-pepsi.jpg', 'Pepsi sparkling drink', 2000, 1, 100, NULL, NULL),
(10, 'Mirenda', '13-miranda.jpg', 'Mirenda sparkling drink', 2000, 1, 100, NULL, NULL),
(11, 'Diet 7up', '6-7up-diet.jpg', 'Diet 7up sparkling drink', 2000, 1, 100, NULL, NULL),
(12, '7up ', '7-7up.jpg', '7up sparkling drink', 2000, 1, 100, NULL, NULL),
(13, 'Coca Cola', '8-cola-can.jpg', 'Coca cola sparkling drink', 2000, 1, 100, NULL, NULL),
(14, 'titleTest1', 'imageTest2', 'description test 3', 10000, 1, 10, '2020-07-21 06:46:59', '2020-07-21 06:46:59');

-- --------------------------------------------------------

--
-- Table structure for table `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(18, '2014_10_12_000000_create_users_table', 1),
(19, '2016_06_01_000001_create_oauth_auth_codes_table', 1),
(20, '2016_06_01_000002_create_oauth_access_tokens_table', 1),
(21, '2016_06_01_000003_create_oauth_refresh_tokens_table', 1),
(22, '2016_06_01_000004_create_oauth_clients_table', 1),
(23, '2016_06_01_000005_create_oauth_personal_access_clients_table', 1),
(24, '2019_08_19_000000_create_failed_jobs_table', 1),
(25, '2020_07_19_002047_create_supplier_info_table', 1),
(26, '2020_07_19_003125_create_item_info_table', 1),
(27, '2020_07_19_012855_create_category_table', 1),
(28, '2020_07_19_013359_create_sub_categories_table', 1),
(29, '2020_07_19_014525_create_sub_info_table', 1),
(30, '2020_07_19_092633_create_contact_us_table', 1),
(31, '2020_07_19_092945_create_client_info_table', 1),
(32, '2020_07_19_113042_create_supplier_code_table', 1),
(33, '2020_07_19_113417_create_order_history_table', 1),
(34, '2020_07_19_113554_create_ordered_item_table', 1),
(35, '2020_07_24_120947_add_phone_to_supplier_info', 2);

-- --------------------------------------------------------

--
-- Table structure for table `oauth_access_tokens`
--

CREATE TABLE `oauth_access_tokens` (
  `id` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `user_id` bigint(20) UNSIGNED DEFAULT NULL,
  `client_id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `scopes` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `revoked` tinyint(1) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `expires_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `oauth_auth_codes`
--

CREATE TABLE `oauth_auth_codes` (
  `id` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `user_id` bigint(20) UNSIGNED NOT NULL,
  `client_id` bigint(20) UNSIGNED NOT NULL,
  `scopes` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `revoked` tinyint(1) NOT NULL,
  `expires_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `oauth_clients`
--

CREATE TABLE `oauth_clients` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `user_id` bigint(20) UNSIGNED DEFAULT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `secret` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `provider` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `redirect` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `personal_access_client` tinyint(1) NOT NULL,
  `password_client` tinyint(1) NOT NULL,
  `revoked` tinyint(1) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `oauth_personal_access_clients`
--

CREATE TABLE `oauth_personal_access_clients` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `client_id` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `oauth_refresh_tokens`
--

CREATE TABLE `oauth_refresh_tokens` (
  `id` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `access_token_id` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `revoked` tinyint(1) NOT NULL,
  `expires_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `ordered_item`
--

CREATE TABLE `ordered_item` (
  `id` int(10) UNSIGNED NOT NULL,
  `quantity` int(11) NOT NULL,
  `lbp_price` int(11) NOT NULL,
  `dollar_price` int(11) NOT NULL,
  `available` tinyint(1) NOT NULL,
  `order_history_id` int(10) UNSIGNED NOT NULL,
  `item_info_id` int(10) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `ordered_item`
--

INSERT INTO `ordered_item` (`id`, `quantity`, `lbp_price`, `dollar_price`, `available`, `order_history_id`, `item_info_id`) VALUES
(1, 50, 40000, 4, 1, 1, 4),
(2, 50, 20000, 2, 1, 1, 4),
(3, 565656, 27000, 2, 1, 1, 5),
(4, 1000, 400000, 1000, 1, 2, 4),
(5, 147, 80500, 8, 0, 1, 10),
(6, 52525, 50500, 5, 0, 3, 9),
(7, 11, 11000, 2, 0, 3, 8),
(8, 1001, 89500, 9, 1, 2, 7);

-- --------------------------------------------------------

--
-- Table structure for table `order_history`
--

CREATE TABLE `order_history` (
  `id` int(10) UNSIGNED NOT NULL,
  `invoice` int(11) NOT NULL,
  `client_info_id` int(10) UNSIGNED NOT NULL,
  `supplier_info_id` bigint(20) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `order_history`
--

INSERT INTO `order_history` (`id`, `invoice`, `client_info_id`, `supplier_info_id`) VALUES
(1, 132, 1, 5),
(2, 123356, 1, 4),
(3, 1, 2, 7),
(4, 44444, 1, 7),
(5, 77777, 2, 5);

-- --------------------------------------------------------

--
-- Table structure for table `sub_categories`
--

CREATE TABLE `sub_categories` (
  `id` int(10) UNSIGNED NOT NULL,
  `title` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `category_id` int(10) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `image` text COLLATE utf8mb4_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `sub_categories`
--

INSERT INTO `sub_categories` (`id`, `title`, `category_id`, `created_at`, `updated_at`, `image`) VALUES
(1, 'Grains-Cans', 4, NULL, NULL, NULL),
(2, 'Beverage Cans', 4, NULL, NULL, NULL),
(3, 'Chips', 5, NULL, NULL, NULL),
(4, 'Nuts', 5, NULL, NULL, NULL),
(6, 'Meat Cans', 4, NULL, NULL, NULL),
(8, 'dates', 1, '2020-07-20 11:47:30', '2020-07-20 11:47:30', 'dates.jpg'),
(9, 'anotherTest', 8, '2020-07-20 13:10:20', '2020-07-20 13:10:20', 'anotherTest.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `sub_info`
--

CREATE TABLE `sub_info` (
  `id` int(10) UNSIGNED NOT NULL,
  `item_info_id` int(10) UNSIGNED NOT NULL,
  `sub_categories_id` int(10) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `sub_info`
--

INSERT INTO `sub_info` (`id`, `item_info_id`, `sub_categories_id`, `created_at`, `updated_at`) VALUES
(1, 1, 1, NULL, NULL),
(2, 2, 1, NULL, NULL),
(4, 5, 6, NULL, NULL),
(5, 7, 6, NULL, NULL),
(6, 3, 6, NULL, NULL),
(7, 8, 6, NULL, NULL),
(8, 4, 6, NULL, NULL),
(9, 12, 2, NULL, NULL),
(10, 13, 2, NULL, NULL),
(11, 11, 2, NULL, NULL),
(12, 9, 2, NULL, NULL),
(13, 10, 2, NULL, NULL),
(17, 5, 9, '2020-07-20 14:12:47', '2020-07-20 14:12:47');

-- --------------------------------------------------------

--
-- Table structure for table `supplier_code`
--

CREATE TABLE `supplier_code` (
  `id` int(10) UNSIGNED NOT NULL,
  `code` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `supplier_info_id` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `supplier_code`
--

INSERT INTO `supplier_code` (`id`, `code`, `supplier_info_id`, `created_at`, `updated_at`) VALUES
(1, '1122', 4, NULL, NULL),
(3, '1234', 7, '2020-07-20 14:15:48', '2020-07-20 14:15:48');

-- --------------------------------------------------------

--
-- Table structure for table `supplier_info`
--

CREATE TABLE `supplier_info` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `supplier_name` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `company` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `phone` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `supplier_info`
--

INSERT INTO `supplier_info` (`id`, `supplier_name`, `email`, `company`, `created_at`, `updated_at`, `phone`) VALUES
(4, 'bassem kreidly', 'supplier@test.com', 'company', NULL, NULL, '03/123458'),
(5, 'ahmad', 'ahmad@test.com', 'codi', '2020-07-09 07:48:55', '2020-07-09 07:48:55', NULL),
(6, 'bassel', 'bassel@test.com', 'codiTech', '2020-07-20 14:18:24', '2020-07-20 14:18:24', NULL),
(7, 'hisham', 'hisham@test.com', 'test company', NULL, NULL, '03789456');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `email_verified_at`, `password`, `remember_token`, `created_at`, `updated_at`) VALUES
(2, 'zeinab', 'zeinab@test.com', NULL, '$2y$10$t2jVlD1Q1OvveFe3VTcZSOkwYxXWtmvQwz7Svz3gds7kSed66kMBe', NULL, '2020-07-24 11:36:29', '2020-07-24 11:36:29'),
(3, 'bassem', 'basem@test.com', NULL, '$2y$10$Nk1Ny48Mk2Q9GZYQyvSudegXg9oxK9Ko5SQcZhg4YRmU/SG8/LJLa', NULL, '2020-07-24 12:03:48', '2020-07-24 12:03:48'),
(4, 'rannia', 'rania@test.com', NULL, '$2y$10$oN692k8vlaYUZmC.hQeL2.br5tdVI2jPlcXYKTu6z0louZ2HtoSvi', NULL, '2020-07-24 13:31:15', '2020-07-24 13:31:15'),
(5, 'iman', 'iman@test.com', NULL, '$2y$10$YdDEmIOqThedL8KVE7//Lej0Uve75Ipx/WIV3n.UEk10nKAsbs8Ju', NULL, '2020-07-25 21:37:59', '2020-07-25 21:37:59');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `category`
--
ALTER TABLE `category`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `category_slug_unique` (`slug`),
  ADD KEY `category_supplier_info_id_foreign` (`supplier_info_id`);

--
-- Indexes for table `client_info`
--
ALTER TABLE `client_info`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `contact_us`
--
ALTER TABLE `contact_us`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `item_info`
--
ALTER TABLE `item_info`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `oauth_access_tokens`
--
ALTER TABLE `oauth_access_tokens`
  ADD PRIMARY KEY (`id`),
  ADD KEY `oauth_access_tokens_user_id_index` (`user_id`);

--
-- Indexes for table `oauth_auth_codes`
--
ALTER TABLE `oauth_auth_codes`
  ADD PRIMARY KEY (`id`),
  ADD KEY `oauth_auth_codes_user_id_index` (`user_id`);

--
-- Indexes for table `oauth_clients`
--
ALTER TABLE `oauth_clients`
  ADD PRIMARY KEY (`id`),
  ADD KEY `oauth_clients_user_id_index` (`user_id`);

--
-- Indexes for table `oauth_personal_access_clients`
--
ALTER TABLE `oauth_personal_access_clients`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `oauth_refresh_tokens`
--
ALTER TABLE `oauth_refresh_tokens`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `ordered_item`
--
ALTER TABLE `ordered_item`
  ADD PRIMARY KEY (`id`),
  ADD KEY `ordered_item_order_history_id_foreign` (`order_history_id`),
  ADD KEY `ordered_item_item_info_id_foreign` (`item_info_id`);

--
-- Indexes for table `order_history`
--
ALTER TABLE `order_history`
  ADD PRIMARY KEY (`id`),
  ADD KEY `order_history_client_info_id_foreign` (`client_info_id`),
  ADD KEY `order_history_supplier_info_id_foreign` (`supplier_info_id`);

--
-- Indexes for table `sub_categories`
--
ALTER TABLE `sub_categories`
  ADD PRIMARY KEY (`id`),
  ADD KEY `sub_categories_category_id_foreign` (`category_id`);

--
-- Indexes for table `sub_info`
--
ALTER TABLE `sub_info`
  ADD PRIMARY KEY (`id`),
  ADD KEY `sub_info_item_info_id_foreign` (`item_info_id`),
  ADD KEY `sub_info_sub_categories_id_foreign` (`sub_categories_id`);

--
-- Indexes for table `supplier_code`
--
ALTER TABLE `supplier_code`
  ADD PRIMARY KEY (`id`),
  ADD KEY `supplier_code_supplier_info_id_foreign` (`supplier_info_id`);

--
-- Indexes for table `supplier_info`
--
ALTER TABLE `supplier_info`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `category`
--
ALTER TABLE `category`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `client_info`
--
ALTER TABLE `client_info`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `contact_us`
--
ALTER TABLE `contact_us`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `item_info`
--
ALTER TABLE `item_info`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT for table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=36;

--
-- AUTO_INCREMENT for table `oauth_clients`
--
ALTER TABLE `oauth_clients`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `oauth_personal_access_clients`
--
ALTER TABLE `oauth_personal_access_clients`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `ordered_item`
--
ALTER TABLE `ordered_item`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `order_history`
--
ALTER TABLE `order_history`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `sub_categories`
--
ALTER TABLE `sub_categories`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `sub_info`
--
ALTER TABLE `sub_info`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- AUTO_INCREMENT for table `supplier_code`
--
ALTER TABLE `supplier_code`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `supplier_info`
--
ALTER TABLE `supplier_info`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `category`
--
ALTER TABLE `category`
  ADD CONSTRAINT `category_supplier_info_id_foreign` FOREIGN KEY (`supplier_info_id`) REFERENCES `supplier_info` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `ordered_item`
--
ALTER TABLE `ordered_item`
  ADD CONSTRAINT `ordered_item_item_info_id_foreign` FOREIGN KEY (`item_info_id`) REFERENCES `item_info` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `ordered_item_order_history_id_foreign` FOREIGN KEY (`order_history_id`) REFERENCES `order_history` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `order_history`
--
ALTER TABLE `order_history`
  ADD CONSTRAINT `order_history_client_info_id_foreign` FOREIGN KEY (`client_info_id`) REFERENCES `client_info` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `order_history_supplier_info_id_foreign` FOREIGN KEY (`supplier_info_id`) REFERENCES `supplier_info` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `sub_categories`
--
ALTER TABLE `sub_categories`
  ADD CONSTRAINT `sub_categories_category_id_foreign` FOREIGN KEY (`category_id`) REFERENCES `category` (`id`);

--
-- Constraints for table `sub_info`
--
ALTER TABLE `sub_info`
  ADD CONSTRAINT `sub_info_item_info_id_foreign` FOREIGN KEY (`item_info_id`) REFERENCES `item_info` (`id`),
  ADD CONSTRAINT `sub_info_sub_categories_id_foreign` FOREIGN KEY (`sub_categories_id`) REFERENCES `sub_categories` (`id`);

--
-- Constraints for table `supplier_code`
--
ALTER TABLE `supplier_code`
  ADD CONSTRAINT `supplier_code_supplier_info_id_foreign` FOREIGN KEY (`supplier_info_id`) REFERENCES `supplier_info` (`id`) ON DELETE CASCADE;
COMMIT;
