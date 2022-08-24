// Kobe點陣圖畫像

$(function(){

	for(var i=0;i<48*48;i++){
	  $("#board").append($("<li>"))    
	}
	// $("#board li").text(function(index){return index})
  
  //第一行  
	$("#board li:nth-child(33),li:nth-child(34),li:nth-child(35),li:nth-child(36),li:nth-child(37),li:nth-child(38),li:nth-child(39),li:nth-child(40),li:nth-child(41),li:nth-child(42),li:nth-child(43),li:nth-child(44),li:nth-child(45),li:nth-child(46),li:nth-child(47),li:nth-child(48)").addClass("black")
	
  //第二行
	$("#board li:nth-child(79),li:nth-child(80),li:nth-child(81),li:nth-child(82),li:nth-child(87),li:nth-child(89),li:nth-child(90),li:nth-child(91),li:nth-child(92),li:nth-child(93),li:nth-child(94),li:nth-child(95),li:nth-child(96)").addClass("black")
	
	$("#board li:nth-child(83),li:nth-child(84),li:nth-child(85),li:nth-child(86),li:nth-child(88)").addClass("darkgrey")
	 
  //第三行
	$("#board li:nth-child(126),li:nth-child(127),li:nth-child(128),li:nth-child(129),li:nth-child(136),li:nth-child(137),li:nth-child(138),li:nth-child(139),li:nth-child(140),li:nth-child(141),li:nth-child(142),li:nth-child(143),li:nth-child(144)").addClass("black")
  
	$("#board li:nth-child(130),li:nth-child(131),li:nth-child(132),li:nth-child(133),li:nth-child(134),li:nth-child(135)").addClass("darkgrey")
	
  //第四行
	$("#board li:nth-child(173),li:nth-child(174),li:nth-child(175),li:nth-child(187),li:nth-child(188),li:nth-child(189),li:nth-child(190),li:nth-child(191),li:nth-child(192)").addClass("black")
	
	$("#board li:nth-child(176),li:nth-child(177),li:nth-child(178),li:nth-child(179),li:nth-child(181),li:nth-child(183),li:nth-child(184),li:nth-child(185),li:nth-child(186)").addClass("darkgrey")
	
	$("#board li:nth-child(180),li:nth-child(182)").addClass("lightgrey")
		
  //第五行
	$("#board li:nth-child(220),li:nth-child(221),li:nth-child(222),li:nth-child(223),li:nth-child(234),li:nth-child(235),li:nth-child(236),li:nth-child(237),li:nth-child(238),li:nth-child(239),li:nth-child(240)").addClass("black")
	
	$("#board li:nth-child(195),li:nth-child(196),li:nth-child(197),li:nth-child(198),li:nth-child(199),li:nth-child(201),li:nth-child(202),li:nth-child(203),li:nth-child(204),li:nth-child(224),li:nth-child(225),li:nth-child(226),li:nth-child(227),li:nth-child(228),li:nth-child(229),li:nth-child(230),li:nth-child(231),li:nth-child(232),li:nth-child(233)").addClass("darkgrey")
	
	$("#board li:nth-child(200),li:nth-child(205)").addClass("lightgrey")
	
  //第六行
	$("#board li:nth-child(253),li:nth-child(254),li:nth-child(255),li:nth-child(267),li:nth-child(268),li:nth-child(281),li:nth-child(282),li:nth-child(283),li:nth-child(284),li:nth-child(285),li:nth-child(286),li:nth-child(287),li:nth-child(288)").addClass("black")
	
	$("#board li:nth-child(241),li:nth-child(248),li:nth-child(251),li:nth-child(252),li:nth-child(269),li:nth-child(270),li:nth-child(271),li:nth-child(272),li:nth-child(273),li:nth-child(274),li:nth-child(276),li:nth-child(277),li:nth-child(278),li:nth-child(279),li:nth-child(280)").addClass("darkgrey")
	
	$("#board li:nth-child(242),li:nth-child(243),li:nth-child(244),li:nth-child(245),li:nth-child(246),li:nth-child(247),li:nth-child(249),li:nth-child(250),li:nth-child(275)").addClass("lightgrey")
	  
  //第七行
	$("#board li:nth-child(305),li:nth-child(314),li:nth-child(315),li:nth-child(331),li:nth-child(332),li:nth-child(333),li:nth-child(334),li:nth-child(335),li:nth-child(336)").addClass("black")
	
	$("#board li:nth-child(300),li:nth-child(301),li:nth-child(302),li:nth-child(303),li:nth-child(304),li:nth-child(316),li:nth-child(317),li:nth-child(318),li:nth-child(319),li:nth-child(320),li:nth-child(321),li:nth-child(324),li:nth-child(325),li:nth-child(326),li:nth-child(327),li:nth-child(328),li:nth-child(329),li:nth-child(330)").addClass("darkgrey")
	
	$("#board li:nth-child(289),li:nth-child(290),li:nth-child(291),li:nth-child(292),li:nth-child(293),li:nth-child(294),li:nth-child(295),li:nth-child(296),li:nth-child(297),li:nth-child(298),li:nth-child(299),li:nth-child(322),li:nth-child(323)").addClass("lightgrey")
	
  //第八行
	$("#board li:nth-child(353),li:nth-child(354),li:nth-child(362),li:nth-child(363),li:nth-child(379),li:nth-child(380),li:nth-child(381),li:nth-child(382),li:nth-child(383),li:nth-child(384)").addClass("black")
	
	$("#board li:nth-child(342),li:nth-child(345),li:nth-child(346),li:nth-child(348),li:nth-child(349),li:nth-child(350),li:nth-child(351),li:nth-child(352),li:nth-child(361),li:nth-child(364),li:nth-child(365),li:nth-child(366),li:nth-child(367),li:nth-child(368),li:nth-child(370),li:nth-child(371),li:nth-child(375),li:nth-child(376),li:nth-child(377),li:nth-child(378)").addClass("darkgrey")
	
	$("#board li:nth-child(337),li:nth-child(338),li:nth-child(339),li:nth-child(340),li:nth-child(341),li:nth-child(343),li:nth-child(344),li:nth-child(347),li:nth-child(369),li:nth-child(372),li:nth-child(373),li:nth-child(374)").addClass("lightgrey")
	
  //第九行
	$("#board li:nth-child(402),li:nth-child(409),li:nth-child(410),li:nth-child(428),li:nth-child(429),li:nth-child(430),li:nth-child(431),li:nth-child(432)").addClass("black")
	
	$("#board li:nth-child(394),li:nth-child(395),li:nth-child(399),li:nth-child(400),li:nth-child(401),li:nth-child(403),li:nth-child(411),li:nth-child(412),li:nth-child(413),li:nth-child(414),li:nth-child(415),li:nth-child(416),li:nth-child(420),li:nth-child(421),li:nth-child(422),li:nth-child(423),li:nth-child(424),li:nth-child(425),li:nth-child(426),li:nth-child(427)").addClass("darkgrey")
	
	$("#board li:nth-child(385),li:nth-child(386),li:nth-child(387),li:nth-child(388),li:nth-child(389),li:nth-child(390),li:nth-child(391),li:nth-child(392),li:nth-child(393),li:nth-child(396),li:nth-child(397),li:nth-child(398),li:nth-child(417),li:nth-child(418),li:nth-child(419)").addClass("lightgrey")
	
  //第十行
	$("#board li:nth-child(449),li:nth-child(452),li:nth-child(457),li:nth-child(458),li:nth-child(475),li:nth-child(476),li:nth-child(477),li:nth-child(478),li:nth-child(479),li:nth-child(480)").addClass("black")
	
	$("#board li:nth-child(445),li:nth-child(446),li:nth-child(447),li:nth-child(448),li:nth-child(450),li:nth-child(451),li:nth-child(456),li:nth-child(459),li:nth-child(460),li:nth-child(461),li:nth-child(462),li:nth-child(463),li:nth-child(465),li:nth-child(466),li:nth-child(468),li:nth-child(469),li:nth-child(470),li:nth-child(471),li:nth-child(472),li:nth-child(473),li:nth-child(474)").addClass("darkgrey")
	
	$("#board li:nth-child(433),li:nth-child(434),li:nth-child(435),li:nth-child(436),li:nth-child(437),li:nth-child(438),li:nth-child(439),li:nth-child(440),li:nth-child(441),li:nth-child(442),li:nth-child(443),li:nth-child(444),li:nth-child(464),li:nth-child(467)").addClass("lightgrey")
	
  //第十一行
	$("#board li:nth-child(496),li:nth-child(499),li:nth-child(501),li:nth-child(504),li:nth-child(505),li:nth-child(506),li:nth-child(521),li:nth-child(522),li:nth-child(523),li:nth-child(524),li:nth-child(525),li:nth-child(526),li:nth-child(527),li:nth-child(528)").addClass("black")
	
	$("#board li:nth-child(494),li:nth-child(495),li:nth-child(498),li:nth-child(500),li:nth-child(507),li:nth-child(508),li:nth-child(509),li:nth-child(514),li:nth-child(515),li:nth-child(516),li:nth-child(517),li:nth-child(518),li:nth-child(519),li:nth-child(520)").addClass("darkgrey")
	
	$("#board li:nth-child(481),li:nth-child(482),li:nth-child(483),li:nth-child(484),li:nth-child(485),li:nth-child(486),li:nth-child(487),li:nth-child(488),li:nth-child(489),li:nth-child(490),li:nth-child(491),li:nth-child(492),li:nth-child(493),li:nth-child(497),li:nth-child(510),li:nth-child(511),li:nth-child(512),li:nth-child(513)").addClass("lightgrey")
	 
  //第十二行
	$("#board li:nth-child(535),li:nth-child(542),li:nth-child(549),li:nth-child(552),li:nth-child(553),li:nth-child(554),li:nth-child(555),li:nth-child(572),li:nth-child(574),li:nth-child(575),li:nth-child(576)").addClass("black")
	
	$("#board li:nth-child(541),li:nth-child(543),li:nth-child(545),li:nth-child(546),li:nth-child(547),li:nth-child(548),li:nth-child(556),li:nth-child(557),li:nth-child(559),li:nth-child(561),li:nth-child(562),li:nth-child(563),li:nth-child(564),li:nth-child(565),li:nth-child(566),li:nth-child(567),li:nth-child(568),li:nth-child(569),li:nth-child(571),li:nth-child(573)").addClass("darkgrey")
	
	$("#board li:nth-child(529),li:nth-child(530),li:nth-child(531),li:nth-child(532),li:nth-child(533),li:nth-child(534),li:nth-child(536),li:nth-child(537),li:nth-child(538),li:nth-child(539),li:nth-child(540),li:nth-child(544),li:nth-child(550),li:nth-child(558),li:nth-child(560)").addClass("lightgrey")
	
	$("#board li:nth-child(570)").addClass("white")
	  
  //第十三行
	$("#board li:nth-child(583),li:nth-child(589),li:nth-child(592),li:nth-child(596),li:nth-child(597),li:nth-child(598),li:nth-child(600),li:nth-child(601),li:nth-child(602),li:nth-child(618),li:nth-child(621),li:nth-child(622),li:nth-child(623),li:nth-child(624)").addClass("black")
	
	$("#board li:nth-child(578),li:nth-child(588),li:nth-child(591),li:nth-child(593),li:nth-child(594),li:nth-child(595),li:nth-child(603),li:nth-child(604),li:nth-child(605),li:nth-child(606),li:nth-child(607),li:nth-child(608),li:nth-child(609),li:nth-child(610),li:nth-child(611),li:nth-child(612),li:nth-child(615),li:nth-child(616),li:nth-child(617),li:nth-child(619),li:nth-child(620)").addClass("darkgrey")
	
	$("#board li:nth-child(577),li:nth-child(579),li:nth-child(582),li:nth-child(584),li:nth-child(586),li:nth-child(587),li:nth-child(590),li:nth-child(613),li:nth-child(614),li:nth-child(539),li:nth-child(540),li:nth-child(544),li:nth-child(550),li:nth-child(558),li:nth-child(560)").addClass("lightgrey")
	
	$("#board li:nth-child(580),li:nth-child(581),li:nth-child(585),li:nth-child(599)").addClass("white")
	  
  //第十四行
	$("#board li:nth-child(636),li:nth-child(645),li:nth-child(646),li:nth-child(648),li:nth-child(649),li:nth-child(650),li:nth-child(669),li:nth-child(670),li:nth-child(671),li:nth-child(672)").addClass("black")
	
	$("#board li:nth-child(627),li:nth-child(630),li:nth-child(638),li:nth-child(640),li:nth-child(641),li:nth-child(642),li:nth-child(643),li:nth-child(644),li:nth-child(651),li:nth-child(652),li:nth-child(653),li:nth-child(654),li:nth-child(655),li:nth-child(656),li:nth-child(657),li:nth-child(658),li:nth-child(659),li:nth-child(662),li:nth-child(663),li:nth-child(665),li:nth-child(620)").addClass("darkgrey")
	
	$("#board li:nth-child(625),li:nth-child(626),li:nth-child(628),li:nth-child(629),li:nth-child(631),li:nth-child(632),li:nth-child(633),li:nth-child(634),li:nth-child(635),li:nth-child(637),li:nth-child(639),li:nth-child(647),li:nth-child(660),li:nth-child(661),li:nth-child(664),li:nth-child(666),li:nth-child(667),li:nth-child(668)").addClass("lightgrey")
	  
  //第十五行
	$("#board li:nth-child(683),li:nth-child(695),li:nth-child(696),li:nth-child(713),li:nth-child(714),li:nth-child(715),li:nth-child(718),li:nth-child(719),li:nth-child(720)").addClass("black")
	
	$("#board li:nth-child(677),li:nth-child(678),li:nth-child(681),li:nth-child(682),li:nth-child(687),li:nth-child(689),li:nth-child(690),li:nth-child(691),li:nth-child(692),li:nth-child(693),li:nth-child(694),li:nth-child(697),li:nth-child(698),li:nth-child(699),li:nth-child(705),li:nth-child(706),li:nth-child(707),li:nth-child(709),li:nth-child(710),li:nth-child(711),li:nth-child(712),li:nth-child(717)").addClass("darkgrey") 
	
	$("#board li:nth-child(673),li:nth-child(674),li:nth-child(675),li:nth-child(676),li:nth-child(679),li:nth-child(680),li:nth-child(685),li:nth-child(688),li:nth-child(700),li:nth-child(701),li:nth-child(702),li:nth-child(703),li:nth-child(704),li:nth-child(708),li:nth-child(716)").addClass("lightgrey")
	
	$("#board li:nth-child(684),li:nth-child(686)").addClass("white")
	
  //第十六行
	$("#board li:nth-child(730),li:nth-child(736),li:nth-child(741),li:nth-child(742),li:nth-child(743),li:nth-child(744),li:nth-child(746),li:nth-child(747),li:nth-child(748),li:nth-child(761),li:nth-child(765),li:nth-child(766),li:nth-child(767),li:nth-child(768)").addClass("black")
	
	$("#board li:nth-child(733),li:nth-child(734),li:nth-child(735),li:nth-child(737),li:nth-child(738),li:nth-child(739),li:nth-child(740),li:nth-child(745),li:nth-child(749),li:nth-child(750),li:nth-child(751),li:nth-child(753),li:nth-child(754),li:nth-child(757),li:nth-child(758),li:nth-child(759),li:nth-child(760),li:nth-child(762),li:nth-child(764)").addClass("darkgrey") 
	
	$("#board li:nth-child(721),li:nth-child(722),li:nth-child(723),li:nth-child(724),li:nth-child(725),li:nth-child(726),li:nth-child(727),li:nth-child(728),li:nth-child(729),li:nth-child(731),li:nth-child(732),li:nth-child(752),li:nth-child(755),li:nth-child(756)").addClass("lightgrey")
	
	$("#board li:nth-child(763)").addClass("white")
	
  //第十七行
	$("#board li:nth-child(786),li:nth-child(788),li:nth-child(790),li:nth-child(791),li:nth-child(792),li:nth-child(793),li:nth-child(794),li:nth-child(795),li:nth-child(796),li:nth-child(797),li:nth-child(798),li:nth-child(806),li:nth-child(813),li:nth-child(814),li:nth-child(815),li:nth-child(816)").addClass("black")
	
	$("#board li:nth-child(772),li:nth-child(774),li:nth-child(777),li:nth-child(781),li:nth-child(784),li:nth-child(785),li:nth-child(787),li:nth-child(789),li:nth-child(799),li:nth-child(804),li:nth-child(805),li:nth-child(807),li:nth-child(808),li:nth-child(809)").addClass("darkgrey")
	
	$("#board li:nth-child(769),li:nth-child(770),li:nth-child(771),li:nth-child(773),li:nth-child(775),li:nth-child(776),li:nth-child(778),li:nth-child(780),li:nth-child(782),li:nth-child(783),li:nth-child(800),li:nth-child(801),li:nth-child(802),li:nth-child(803),li:nth-child(810),li:nth-child(811),li:nth-child(812)").addClass("lightgrey")
	
	$("#board li:nth-child(779)").addClass("white")
		
  //第十八行
	$("#board li:nth-child(818),li:nth-child(823),li:nth-child(833),li:nth-child(836),li:nth-child(837),li:nth-child(838),li:nth-child(839),li:nth-child(840),li:nth-child(841),li:nth-child(842),li:nth-child(854),li:nth-child(855),li:nth-child(861),li:nth-child(862),li:nth-child(863),li:nth-child(864)").addClass("black")
	
	$("#board li:nth-child(824),li:nth-child(827),li:nth-child(829),li:nth-child(830),li:nth-child(831),li:nth-child(832),li:nth-child(834),li:nth-child(835),li:nth-child(843),li:nth-child(844),li:nth-child(845),li:nth-child(846),li:nth-child(847),li:nth-child(851),li:nth-child(852),li:nth-child(853),li:nth-child(856)").addClass("darkgrey")
	
	$("#board li:nth-child(817),li:nth-child(819),li:nth-child(820),li:nth-child(821),li:nth-child(822),li:nth-child(825),li:nth-child(826),li:nth-child(828),li:nth-child(848),li:nth-child(849),li:nth-child(850),li:nth-child(857),li:nth-child(858),li:nth-child(860)").addClass("lightgrey")
	
	$("#board li:nth-child(859)").addClass("white")
	
  //第十九行
	$("#board li:nth-child(872),li:nth-child(876),li:nth-child(878),li:nth-child(879),li:nth-child(880),li:nth-child(883),li:nth-child(884),li:nth-child(885),li:nth-child(886),li:nth-child(887),li:nth-child(888),li:nth-child(889),li:nth-child(890),li:nth-child(891),li:nth-child(892),li:nth-child(893),li:nth-child(901),li:nth-child(902),li:nth-child(903),li:nth-child(908),li:nth-child(909),li:nth-child(910),li:nth-child(911),li:nth-child(912)").addClass("black")
	
	$("#board li:nth-child(865),li:nth-child(871),li:nth-child(873),li:nth-child(875),li:nth-child(881),li:nth-child(882),li:nth-child(894),li:nth-child(895),li:nth-child(899),li:nth-child(900),li:nth-child(904),li:nth-child(906),li:nth-child(907)").addClass("darkgrey")
	
	$("#board li:nth-child(866),li:nth-child(868),li:nth-child(869),li:nth-child(870),li:nth-child(874),li:nth-child(877),li:nth-child(896),li:nth-child(897),li:nth-child(898),li:nth-child(905)").addClass("lightgrey")
	
	$("#board li:nth-child(867)").addClass("white")
	
  //第二十行
	$("#board li:nth-child(922),li:nth-child(925),li:nth-child(934),li:nth-child(935),li:nth-child(936),li:nth-child(937),li:nth-child(938),li:nth-child(940),li:nth-child(949),li:nth-child(950),li:nth-child(954),li:nth-child(955),li:nth-child(956),li:nth-child(957),li:nth-child(958),li:nth-child(959),li:nth-child(960)").addClass("black")
	
	$("#board li:nth-child(919),li:nth-child(921),li:nth-child(923),li:nth-child(924),li:nth-child(926),li:nth-child(929),li:nth-child(930),li:nth-child(931),li:nth-child(932),li:nth-child(933),li:nth-child(939),li:nth-child(941),li:nth-child(943),li:nth-child(946),li:nth-child(947),li:nth-child(948),li:nth-child(951),li:nth-child(952),li:nth-child(953)").addClass("darkgrey")
	
	$("#board li:nth-child(913),li:nth-child(914),li:nth-child(915),li:nth-child(916),li:nth-child(917),li:nth-child(918),li:nth-child(920),li:nth-child(927),li:nth-child(928),li:nth-child(942),li:nth-child(943),li:nth-child(944),li:nth-child(945)").addClass("lightgrey")
	
	$("#board li:nth-child(867)").addClass("white")
	
  //第二十一行
	$("#board li:nth-child(966),li:nth-child(971),li:nth-child(980),li:nth-child(981),li:nth-child(982),li:nth-child(983),li:nth-child(984),li:nth-child(985),li:nth-child(986),li:nth-child(988),li:nth-child(995),li:nth-child(998),li:nth-child(1007),li:nth-child(1008)").addClass("black")
	
	$("#board li:nth-child(965),li:nth-child(970),li:nth-child(972),li:nth-child(973),li:nth-child(974),li:nth-child(975),li:nth-child(977),li:nth-child(978),li:nth-child(979),li:nth-child(987),li:nth-child(989),li:nth-child(991),li:nth-child(992),li:nth-child(993),li:nth-child(994),li:nth-child(996),li:nth-child(997),li:nth-child(999),li:nth-child(1000),li:nth-child(1001),li:nth-child(1002),li:nth-child(1003),li:nth-child(1004),li:nth-child(1005),li:nth-child(1006)").addClass("darkgrey")
	
	$("#board li:nth-child(961),li:nth-child(962),li:nth-child(963),li:nth-child(964),li:nth-child(967),li:nth-child(968),li:nth-child(969),li:nth-child(976),li:nth-child(990)").addClass("lightgrey")
	
	$("#board li:nth-child(867)").addClass("white")
	  
  //第二十二行
	$("#board li:nth-child(1013),li:nth-child(1019),li:nth-child(1020),li:nth-child(1023),li:nth-child(1025),li:nth-child(1027),li:nth-child(1028),li:nth-child(1029),li:nth-child(1030),li:nth-child(1031),li:nth-child(1032),li:nth-child(1033),li:nth-child(1034),li:nth-child(1037),li:nth-child(1040),li:nth-child(1042),li:nth-child(1055),li:nth-child(1056)").addClass("black")
	
	$("#board li:nth-child(1017),li:nth-child(1018),li:nth-child(1021),li:nth-child(1022),li:nth-child(1024),li:nth-child(1026),li:nth-child(1035),li:nth-child(1036),li:nth-child(1038),li:nth-child(1039),li:nth-child(1041),li:nth-child(1043),li:nth-child(1044),li:nth-child(1045),li:nth-child(1046),li:nth-child(1047),li:nth-child(1048),li:nth-child(1049),li:nth-child(1050),li:nth-child(1051),li:nth-child(1054)").addClass("darkgrey")
	
	$("#board li:nth-child(1009),li:nth-child(1010),li:nth-child(1011),li:nth-child(1012),li:nth-child(1014),li:nth-child(1015),li:nth-child(1016),li:nth-child(1052),li:nth-child(1053)").addClass("lightgrey")
	
	$("#board li:nth-child(867)").addClass("white")
	
  //第二十三行
	$("#board li:nth-child(1060),li:nth-child(1066),li:nth-child(1069),li:nth-child(1073),li:nth-child(1074),li:nth-child(1075),li:nth-child(1076),li:nth-child(1077),li:nth-child(1078),li:nth-child(1079),li:nth-child(1080),li:nth-child(1081),li:nth-child(1082),li:nth-child(1084),li:nth-child(1085),li:nth-child(1086),li:nth-child(1087),li:nth-child(1088),li:nth-child(1089),li:nth-child(1090),li:nth-child(1091),li:nth-child(1092),li:nth-child(1097),li:nth-child(1098),li:nth-child(1099),li:nth-child(1103),li:nth-child(1104)").addClass("black")
	
	$("#board li:nth-child(1064),li:nth-child(1065),li:nth-child(1068),li:nth-child(1070),li:nth-child(1071),li:nth-child(1072),li:nth-child(1083),li:nth-child(1093),li:nth-child(1094),li:nth-child(1095),li:nth-child(1096),li:nth-child(1100),li:nth-child(1102)").addClass("darkgrey")
	
	$("#board li:nth-child(1057),li:nth-child(1058),li:nth-child(1059),li:nth-child(1061),li:nth-child(1062),li:nth-child(1063),li:nth-child(1067),li:nth-child(1101)").addClass("lightgrey")
	
	$("#board li:nth-child(867)").addClass("white")
	  
  //第二十四行
	$("#board li:nth-child(1107),li:nth-child(1113),li:nth-child(1118),li:nth-child(1120),li:nth-child(1122),li:nth-child(1123),li:nth-child(1124),li:nth-child(1125),li:nth-child(1126),li:nth-child(1127),li:nth-child(1128),li:nth-child(1129),li:nth-child(1133),li:nth-child(1134),li:nth-child(1135),li:nth-child(1136),li:nth-child(1137),li:nth-child(1138),li:nth-child(1139),li:nth-child(1140),li:nth-child(1141),li:nth-child(1144),li:nth-child(1145),li:nth-child(1146),li:nth-child(1147),li:nth-child(1152)").addClass("black")
	
	$("#board li:nth-child(1106),li:nth-child(1112),li:nth-child(1114),li:nth-child(1116),li:nth-child(1117),li:nth-child(1119),li:nth-child(1121),li:nth-child(1093),li:nth-child(1094),li:nth-child(1095),li:nth-child(1096),li:nth-child(1100),li:nth-child(1102),li:nth-child(1130),li:nth-child(1093),li:nth-child(1094),li:nth-child(1095),li:nth-child(1096),li:nth-child(1100),li:nth-child(1102),li:nth-child(1130),li:nth-child(1142),li:nth-child(1143),li:nth-child(1148),li:nth-child(1149),li:nth-child(1150),li:nth-child(1151)").addClass("darkgrey")
	
	$("#board li:nth-child(1105),li:nth-child(1108),li:nth-child(1109),li:nth-child(1110),li:nth-child(1111),li:nth-child(1115),li:nth-child(1131),li:nth-child(1132)").addClass("lightgrey")
	  
  //第二十五行
	$("#board li:nth-child(1154),li:nth-child(1161),li:nth-child(1167),li:nth-child(1168),li:nth-child(1170),li:nth-child(1171),li:nth-child(1172),li:nth-child(1173),li:nth-child(1174),li:nth-child(1175),li:nth-child(1177),li:nth-child(1182),li:nth-child(1183),li:nth-child(1184),li:nth-child(1185),li:nth-child(1186),li:nth-child(1187),li:nth-child(1188),li:nth-child(1189),li:nth-child(1190),li:nth-child(1191),li:nth-child(1192),li:nth-child(1193),li:nth-child(1194),li:nth-child(1195),li:nth-child(1200)").addClass("black")
	
	$("#board li:nth-child(1153),li:nth-child(1157),li:nth-child(1158),li:nth-child(1159),li:nth-child(1160),li:nth-child(1163),li:nth-child(1164),li:nth-child(1165),li:nth-child(1166),li:nth-child(1169),li:nth-child(1178),li:nth-child(1181),li:nth-child(1196),li:nth-child(1197),li:nth-child(1198),li:nth-child(1199)").addClass("darkgrey")
	
	$("#board li:nth-child(1155),li:nth-child(1156),li:nth-child(1162),li:nth-child(1179),li:nth-child(1180)").addClass("lightgrey")
	
	$("#board li:nth-child(1176)").addClass("white")
	  
  //第二十六行
	$("#board li:nth-child(1201),li:nth-child(1207),li:nth-child(1211),li:nth-child(1215),li:nth-child(1216),li:nth-child(1217),li:nth-child(1218),li:nth-child(1219),li:nth-child(1220),li:nth-child(1221),li:nth-child(1222),li:nth-child(1223),li:nth-child(1225),li:nth-child(1226),li:nth-child(1227),li:nth-child(1228),li:nth-child(1233),li:nth-child(1235),li:nth-child(1236),li:nth-child(1237),li:nth-child(1238),li:nth-child(1239),li:nth-child(1240),li:nth-child(1241),li:nth-child(1242),li:nth-child(1243),li:nth-child(1248)").addClass("black")
	
	$("#board li:nth-child(1203),li:nth-child(1205),li:nth-child(1208),li:nth-child(1209),li:nth-child(1210),li:nth-child(1212),li:nth-child(1213),li:nth-child(1214),li:nth-child(1224),li:nth-child(1229),li:nth-child(1230),li:nth-child(1231),li:nth-child(1232),li:nth-child(1234),li:nth-child(1244),li:nth-child(1245),li:nth-child(1246),li:nth-child(1247)").addClass("darkgrey")
	
	$("#board li:nth-child(1202),li:nth-child(1204),li:nth-child(1206)").addClass("lightgrey")
	 
  //第二十七行
	$("#board li:nth-child(1256),li:nth-child(1263),li:nth-child(1264),li:nth-child(1265),li:nth-child(1266),li:nth-child(1267),li:nth-child(1268),li:nth-child(1269),li:nth-child(1270),li:nth-child(1271),li:nth-child(1273),li:nth-child(1274),li:nth-child(1275),li:nth-child(1276),li:nth-child(1283),li:nth-child(1284),li:nth-child(1285),li:nth-child(1286),li:nth-child(1287),li:nth-child(1288),li:nth-child(1289),li:nth-child(1290)").addClass("black")
	
	$("#board li:nth-child(1250),li:nth-child(1254),li:nth-child(1255),li:nth-child(1257),li:nth-child(1259),li:nth-child(1260),li:nth-child(1261),li:nth-child(1262),li:nth-child(1277),li:nth-child(1278),li:nth-child(1279),li:nth-child(1280),li:nth-child(1281),li:nth-child(1282),li:nth-child(1291),li:nth-child(1292),li:nth-child(1293),li:nth-child(1294),li:nth-child(1295),li:nth-child(1296)").addClass("darkgrey")
	
	$("#board li:nth-child(1249),li:nth-child(1251),li:nth-child(1252),li:nth-child(1253),li:nth-child(1258)").addClass("lightgrey")
	
	$("#board li:nth-child(1272)").addClass("white")
	 
  //第二十八行
	$("#board li:nth-child(1304),li:nth-child(1307),li:nth-child(1309),li:nth-child(1310),li:nth-child(1311),li:nth-child(1312),li:nth-child(1313),li:nth-child(1314),li:nth-child(1315),li:nth-child(1316),li:nth-child(1317),li:nth-child(1318),li:nth-child(1324),li:nth-child(1326),li:nth-child(1327),li:nth-child(1332),li:nth-child(1333),li:nth-child(1334),li:nth-child(1335),li:nth-child(1336),li:nth-child(1337),li:nth-child(1338)").addClass("black")
	
	$("#board li:nth-child(1297),li:nth-child(1298),li:nth-child(1299),li:nth-child(1300),li:nth-child(1301),li:nth-child(1302),li:nth-child(1303),li:nth-child(1305),li:nth-child(1306),li:nth-child(1308),li:nth-child(1325),li:nth-child(1328),li:nth-child(1329),li:nth-child(1330),li:nth-child(1331),li:nth-child(1339),li:nth-child(1340),li:nth-child(1341),li:nth-child(1342),li:nth-child(1343),li:nth-child(1344)").addClass("darkgrey")
	
	$("#board li:nth-child(1319)").addClass("white")
	  
  //第二十九行
	$("#board li:nth-child(1352),li:nth-child(1355),li:nth-child(1356),li:nth-child(1357),li:nth-child(1358),li:nth-child(1359),li:nth-child(1360),li:nth-child(1361),li:nth-child(1362),li:nth-child(1363),li:nth-child(1364),li:nth-child(1365),li:nth-child(1372),li:nth-child(1373),li:nth-child(1374),li:nth-child(1375),li:nth-child(1376),li:nth-child(1381),li:nth-child(1382),li:nth-child(1383),li:nth-child(1384),li:nth-child(1385),li:nth-child(1386),li:nth-child(1387)").addClass("black")
	
	$("#board li:nth-child(1345),li:nth-child(1346),li:nth-child(1347),li:nth-child(1348),li:nth-child(1349),li:nth-child(1350),li:nth-child(1351),li:nth-child(1353),li:nth-child(1354),li:nth-child(1377),li:nth-child(1378),li:nth-child(1379),li:nth-child(1380),li:nth-child(1388),li:nth-child(1389),li:nth-child(1390),li:nth-child(1391),li:nth-child(1392)").addClass("darkgrey")
	
	$("#board li:nth-child(1366)").addClass("lightgrey")
	  
  //第三十行
	$("#board li:nth-child(1397),li:nth-child(1398),li:nth-child(1399),li:nth-child(1400),li:nth-child(1402),li:nth-child(1403),li:nth-child(1404),li:nth-child(1405),li:nth-child(1406),li:nth-child(1407),li:nth-child(1408),li:nth-child(1409),li:nth-child(1410),li:nth-child(1411),li:nth-child(1412),li:nth-child(1413),li:nth-child(1425),li:nth-child(1426),li:nth-child(1429),li:nth-child(1430),li:nth-child(1431),li:nth-child(1432),li:nth-child(1433),li:nth-child(1434)").addClass("black")
	
	$("#board li:nth-child(1393),li:nth-child(1394),li:nth-child(1395),li:nth-child(1396),li:nth-child(1401),li:nth-child(1421),li:nth-child(1422),li:nth-child(1423),li:nth-child(1424),li:nth-child(1427),li:nth-child(1428),li:nth-child(1435),li:nth-child(1436),li:nth-child(1437),li:nth-child(1438),li:nth-child(1439)").addClass("darkgrey")
	
	$("#board li:nth-child(1420),li:nth-child(1440)").addClass("lightgrey")
	
  //第三十一行
	$("#board li:nth-child(1442),li:nth-child(1443),li:nth-child(1444),li:nth-child(1445),li:nth-child(1446),li:nth-child(1447),li:nth-child(1448),li:nth-child(1450),li:nth-child(1451),li:nth-child(1452),li:nth-child(1453),li:nth-child(1454),li:nth-child(1455),li:nth-child(1456),li:nth-child(1457),li:nth-child(1458),li:nth-child(1459),li:nth-child(1460),li:nth-child(1471),li:nth-child(1472),li:nth-child(1473),li:nth-child(1474),li:nth-child(1475),li:nth-child(1476),li:nth-child(1477),li:nth-child(1478),li:nth-child(1479),li:nth-child(1480),li:nth-child(1481),li:nth-child(1482)").addClass("black")
	
	$("#board li:nth-child(1441),li:nth-child(1449),li:nth-child(1469),li:nth-child(1470),li:nth-child(1483),li:nth-child(1484),li:nth-child(1485),li:nth-child(1486),li:nth-child(1487),li:nth-child(1488)").addClass("darkgrey")
	
  //第三十二行
	$("#board li:nth-child(1489),li:nth-child(1490),li:nth-child(1491),li:nth-child(1492),li:nth-child(1493),li:nth-child(1494),li:nth-child(1495),li:nth-child(1496),li:nth-child(1497),li:nth-child(1498),li:nth-child(1499),li:nth-child(1500),li:nth-child(1501),li:nth-child(1502),li:nth-child(1503),li:nth-child(1504),li:nth-child(1505),li:nth-child(1506),li:nth-child(1507),li:nth-child(1517),li:nth-child(1518),li:nth-child(1519),li:nth-child(1520),li:nth-child(1521),li:nth-child(1522),li:nth-child(1523),li:nth-child(1524),li:nth-child(1525),li:nth-child(1526),li:nth-child(1527),li:nth-child(1528),li:nth-child(1529),li:nth-child(1530)").addClass("black")
	
	$("#board li:nth-child(1531),li:nth-child(1532),li:nth-child(1533),li:nth-child(1534),li:nth-child(1535),li:nth-child(1536)").addClass("darkgrey")
	
  //第三十三行
	$("#board li:nth-child(1537),li:nth-child(1538),li:nth-child(1539),li:nth-child(1540),li:nth-child(1541),li:nth-child(1542),li:nth-child(1543),li:nth-child(1544),li:nth-child(1545),li:nth-child(1546),li:nth-child(1547),li:nth-child(1548),li:nth-child(1549),li:nth-child(1550),li:nth-child(1551),li:nth-child(1552),li:nth-child(1553),li:nth-child(1555),li:nth-child(1568),li:nth-child(1569),li:nth-child(1571),li:nth-child(1572),li:nth-child(1573),li:nth-child(1574),li:nth-child(1575),li:nth-child(1576),li:nth-child(1577),li:nth-child(1578),li:nth-child(1579)").addClass("black")
	
	$("#board li:nth-child(1554),li:nth-child(1570),li:nth-child(1580),li:nth-child(1581),li:nth-child(1582),li:nth-child(1583),li:nth-child(1584)").addClass("darkgrey")
	
  //第三十四行
	$("#board li:nth-child(1585),li:nth-child(1586),li:nth-child(1587),li:nth-child(1588),li:nth-child(1589),li:nth-child(1590),li:nth-child(1591),li:nth-child(1592),li:nth-child(1593),li:nth-child(1594),li:nth-child(1595),li:nth-child(1596),li:nth-child(1597),li:nth-child(1598),li:nth-child(1599),li:nth-child(1600),li:nth-child(1601),li:nth-child(1602),li:nth-child(1617),li:nth-child(1618),li:nth-child(1619),li:nth-child(1620),li:nth-child(1621),li:nth-child(1622),li:nth-child(1623),li:nth-child(1624),li:nth-child(1625),li:nth-child(1626)").addClass("black")
	
	$("#board li:nth-child(1616),li:nth-child(1627),li:nth-child(1628),li:nth-child(1629),li:nth-child(1630),li:nth-child(1631)").addClass("darkgrey")
	
	$("#board li:nth-child(1632)").addClass("lightgrey")
	
  //第三十五行
	$("#board li:nth-child(1634),li:nth-child(1635),li:nth-child(1636),li:nth-child(1637),li:nth-child(1638),li:nth-child(1639),li:nth-child(1640),li:nth-child(1641),li:nth-child(1642),li:nth-child(1643),li:nth-child(1644),li:nth-child(1645),li:nth-child(1646),li:nth-child(1647),li:nth-child(1649),li:nth-child(1650),li:nth-child(1666),li:nth-child(1667),li:nth-child(1668),li:nth-child(1669),li:nth-child(1672),li:nth-child(1673),li:nth-child(1674),li:nth-child(1675)").addClass("black")
	
	$("#board li:nth-child(1648),li:nth-child(1665),li:nth-child(1671),li:nth-child(1676),li:nth-child(1677),li:nth-child(1678),li:nth-child(1679),li:nth-child(1680)").addClass("darkgrey")
	
	$("#board li:nth-child(1633)").addClass("lightgrey")
	
	$("#board li:nth-child(1670)").addClass("white")
	
  //第三十六行
	$("#board li:nth-child(1684),li:nth-child(1685),li:nth-child(1686),li:nth-child(1687),li:nth-child(1688),li:nth-child(1689),li:nth-child(1690),li:nth-child(1691),li:nth-child(1692),li:nth-child(1693),li:nth-child(1697),li:nth-child(1698),li:nth-child(1720),li:nth-child(1721),li:nth-child(1722),li:nth-child(1723),li:nth-child(1728)").addClass("black")
	
	$("#board li:nth-child(1681),li:nth-child(1682),li:nth-child(1683),li:nth-child(1695),li:nth-child(1696),li:nth-child(1724),li:nth-child(1725),li:nth-child(1726),li:nth-child(1727)").addClass("darkgrey")
	
	$("#board li:nth-child(1633)").addClass("lightgrey")
	
	$("#board li:nth-child(1694)").addClass("white")
	
  //第三十七行
	$("#board li:nth-child(1729),li:nth-child(1733),li:nth-child(1734),li:nth-child(1745),li:nth-child(1769),li:nth-child(1770),li:nth-child(1771),li:nth-child(1775),li:nth-child(1776)").addClass("black")
	
	$("#board li:nth-child(1730),li:nth-child(1732),li:nth-child(1735),li:nth-child(1744),li:nth-child(1696),li:nth-child(1724),li:nth-child(1725),li:nth-child(1726),li:nth-child(1727),li:nth-child(1772),li:nth-child(1773),li:nth-child(1774)").addClass("darkgrey")
	
	$("#board li:nth-child(1731),li:nth-child(1743)").addClass("lightgrey")
	  
  //第三十八行
	$("#board li:nth-child(1777),li:nth-child(1778),li:nth-child(1782),li:nth-child(1793),li:nth-child(1818),li:nth-child(1819),li:nth-child(1822),li:nth-child(1823),li:nth-child(1824)").addClass("black")
	
	$("#board li:nth-child(1779),li:nth-child(1781),li:nth-child(1820),li:nth-child(1821)").addClass("darkgrey")
	
	$("#board li:nth-child(1780),li:nth-child(1791),li:nth-child(1792),li:nth-child(1817)").addClass("lightgrey")
	  
  //第三十九行
	$("#board li:nth-child(1826),li:nth-child(1841),li:nth-child(1864),li:nth-child(1865),li:nth-child(1866),li:nth-child(1867),li:nth-child(1869),li:nth-child(1870),li:nth-child(1871),li:nth-child(1872)").addClass("black")
	
	$("#board li:nth-child(1825),li:nth-child(1827),li:nth-child(1828),li:nth-child(1830),li:nth-child(1840),li:nth-child(1868)").addClass("darkgrey")
	
	$("#board li:nth-child(1829),li:nth-child(1831),li:nth-child(1839)").addClass("lightgrey")
	
  //第四十行
	$("#board li:nth-child(1875),li:nth-child(1889),li:nth-child(1910),li:nth-child(1911),li:nth-child(1912),li:nth-child(1913),li:nth-child(1914),li:nth-child(1915),li:nth-child(1916),li:nth-child(1917),li:nth-child(1918),li:nth-child(1919),li:nth-child(1920)").addClass("black")
	
	$("#board li:nth-child(1873),li:nth-child(1874),li:nth-child(1876),li:nth-child(1879),li:nth-child(1888)").addClass("darkgrey")
	
	$("#board li:nth-child(1877),li:nth-child(1878),li:nth-child(1880),li:nth-child(1886),li:nth-child(1887)").addClass("lightgrey")
	
  //第四十一行
	$("#board li:nth-child(1924),li:nth-child(1937),li:nth-child(1957),li:nth-child(1958),li:nth-child(1959),li:nth-child(1960),li:nth-child(1961),li:nth-child(1962),li:nth-child(1963),li:nth-child(1964),li:nth-child(1965),li:nth-child(1966),li:nth-child(1967),li:nth-child(1968)").addClass("black")
	
	$("#board li:nth-child(1922),li:nth-child(1923),li:nth-child(1925),li:nth-child(1926),li:nth-child(1936)").addClass("darkgrey")
	
	$("#board li:nth-child(1921),li:nth-child(1927),li:nth-child(1928),li:nth-child(1929),li:nth-child(1930),li:nth-child(1931),li:nth-child(1932),li:nth-child(1933),li:nth-child(1934),li:nth-child(1935),li:nth-child(1938)").addClass("lightgrey")
	 
  //第四十二行
	$("#board li:nth-child(1972),li:nth-child(1973),li:nth-child(1985),li:nth-child(2004),li:nth-child(2005),li:nth-child(2006),li:nth-child(2007),li:nth-child(2008),li:nth-child(2009),li:nth-child(2010),li:nth-child(2011),li:nth-child(2012),li:nth-child(2013),li:nth-child(2014),li:nth-child(2015),li:nth-child(2016)").addClass("black")
	
	$("#board li:nth-child(1970),li:nth-child(1971),li:nth-child(1974),li:nth-child(1975),li:nth-child(1979),li:nth-child(1980),li:nth-child(1981),li:nth-child(1982),li:nth-child(1983),li:nth-child(1984)").addClass("darkgrey")
	
	$("#board li:nth-child(1976),li:nth-child(1977),li:nth-child(1978),li:nth-child(1986)").addClass("lightgrey")
	
  //第四十三行
	$("#board li:nth-child(2019),li:nth-child(2021),li:nth-child(2022),li:nth-child(2033),li:nth-child(2051),li:nth-child(2052),li:nth-child(2053),li:nth-child(2054),li:nth-child(2055),li:nth-child(2056),li:nth-child(2057),li:nth-child(2058),li:nth-child(2059),li:nth-child(2060),li:nth-child(2061),li:nth-child(2062),li:nth-child(2063),li:nth-child(2064)").addClass("black")
	
	$("#board li:nth-child(2020),li:nth-child(2023),li:nth-child(2024),li:nth-child(2025),li:nth-child(2026),li:nth-child(2027),li:nth-child(2028),li:nth-child(2029),li:nth-child(2030),li:nth-child(2031),li:nth-child(2032)").addClass("darkgrey")
	
  //第四十四行
	$("#board li:nth-child(2068),li:nth-child(2069),li:nth-child(2070),li:nth-child(2071),li:nth-child(2080),li:nth-child(2081),li:nth-child(2099),li:nth-child(2100),li:nth-child(2101),li:nth-child(2102),li:nth-child(2103),li:nth-child(2104),li:nth-child(2105),li:nth-child(2106),li:nth-child(2107),li:nth-child(2108),li:nth-child(2109),li:nth-child(2110),li:nth-child(2111),li:nth-child(2112)").addClass("black")
	
	$("#board li:nth-child(2072),li:nth-child(2073),li:nth-child(2074),li:nth-child(2075),li:nth-child(2076),li:nth-child(2077),li:nth-child(2078),li:nth-child(2079)").addClass("darkgrey")
	
	$("#board li:nth-child(2067),li:nth-child(2082),li:nth-child(2098)").addClass("lightgrey")
	
  //第四十五行
	$("#board li:nth-child(2116),li:nth-child(2117),li:nth-child(2118),li:nth-child(2120),li:nth-child(2128),li:nth-child(2129),li:nth-child(2130),li:nth-child(2146),li:nth-child(2147),li:nth-child(2148),li:nth-child(2149),li:nth-child(2150),li:nth-child(2151),li:nth-child(2152),li:nth-child(2153),li:nth-child(2154),li:nth-child(2155),li:nth-child(2156),li:nth-child(2157),li:nth-child(2158),li:nth-child(2159),li:nth-child(2160)").addClass("black")
	
	$("#board li:nth-child(2119),li:nth-child(2121),li:nth-child(2122),li:nth-child(2123),li:nth-child(2124),li:nth-child(2125),li:nth-child(2126),li:nth-child(2127)").addClass("darkgrey")
	  
  //第四十六行
	$("#board li:nth-child(2165),li:nth-child(2166),li:nth-child(2167),li:nth-child(2168),li:nth-child(2169),li:nth-child(2176),li:nth-child(2177),li:nth-child(2178),li:nth-child(2194),li:nth-child(2195),li:nth-child(2196),li:nth-child(2197),li:nth-child(2198),li:nth-child(2199),li:nth-child(2200),li:nth-child(2201),li:nth-child(2202),li:nth-child(2203),li:nth-child(2204),li:nth-child(2205),li:nth-child(2206),li:nth-child(2207),li:nth-child(2208)").addClass("black")
	
	$("#board li:nth-child(2170),li:nth-child(2171),li:nth-child(2172),li:nth-child(2173),li:nth-child(2174),li:nth-child(2175),li:nth-child(2176)").addClass("darkgrey")
	
	$("#board li:nth-child(2193)").addClass("lightgrey")
	
	
  //第四十七行
	$("#board li:nth-child(2214),li:nth-child(2215),li:nth-child(2216),li:nth-child(2217),li:nth-child(2218),li:nth-child(2224),li:nth-child(2225),li:nth-child(2241),li:nth-child(2242),li:nth-child(2243),li:nth-child(2244),li:nth-child(2245),li:nth-child(2246),li:nth-child(2247),li:nth-child(2248),li:nth-child(2249),li:nth-child(2250),li:nth-child(2251),li:nth-child(2252),li:nth-child(2253),li:nth-child(2254),li:nth-child(2255),li:nth-child(2256)").addClass("black")
	
	$("#board li:nth-child(2219),li:nth-child(2220),li:nth-child(2221),li:nth-child(2222),li:nth-child(2223)").addClass("darkgrey")
	
	$("#board li:nth-child(2226)").addClass("lightgrey")
	
  //第四十八行
	$("#board li:nth-child(2263),li:nth-child(2264),li:nth-child(2265),li:nth-child(2271),li:nth-child(2272),li:nth-child(2273),li:nth-child(2289),li:nth-child(2290),li:nth-child(2291),li:nth-child(2292),li:nth-child(2293),li:nth-child(2294),li:nth-child(2295),li:nth-child(2296),li:nth-child(2297),li:nth-child(2298),li:nth-child(2299),li:nth-child(2300),li:nth-child(2301),li:nth-child(2302),li:nth-child(2303),li:nth-child(2304)").addClass("black")
	
	$("#board li:nth-child(2266),li:nth-child(2267),li:nth-child(2268),li:nth-child(2269),li:nth-child(2270)").addClass("darkgrey")
	  
  })


// 長條圖

//建立svg繪圖區域
var svg = d3.select(".barChart").append("svg")
.style("width","600px")
.style("height","540px")

// var arc = d3.arc()
//     .innerRadius(50)
//     .outerRadius(120)

// svg.append("path")
//    .datum({startAngle: 0,endAngle: Math.PI*1.5}) 
//    .attr("d", arc)
//    .style("fill", "orange")
//    .style("transform","translate(200px,200px)")

// var line = d3.line()
//              .x((d,i)=>i*100)
//              .y((d,i)=>Math.random()*100)
// svg.append("path")
//    .datum(d3.range(10))
//    .attr("d", line)
//    .attr("fill","none")
//    .style("stroke", "white")
//    .style("transform","translate(200px,200px)")


//讀入資料
var data = d3.csvParse(`Year,場次,得分,籃板,助攻
1999年,66,22.5,6.3,4.9
2000年,68,28.5,5.9,5.0
2001年,80,25.2,5.5,5.5`,function(d,i){


return {
year: d['Year'],
values: [
{
name: "場次",
value: d['場次']
},{
name: "得分",
value: d['得分']
},{
name: "籃板",
value: d['籃板']
},{
name: "助攻",
value: d['助攻']
}
]
}
})  

//建立每一年的群組
console.log(data) 
var groups = svg.selectAll("g.bargroup")
   .data(data)
   .enter().append("g")
   .attr("class","bargroup")
   .style("transform",(d,i)=> `translate(${i*200+40}px,500px)`)

//建立年份的文字
groups.append("text").text(d=>d.year)
.attr("y",30)
.style("fill","white")
.style("font-size","30px")
.style("font-weight","bold")

//繪製底線
groups.append("line")
.attr("x1",0)
.attr("x2",150)
.attr("y1",-20)
.attr("y2",-20)
.style("stroke","#fff")

//顏色處理的scale
let colorify = d3.scaleOrdinal()
	 .range(d3.schemeCategory10)

//數值處理的scale

let xScale = d3.scaleLinear()
   .domain([0,4])
   .range([0,160])

let yScale = d3.scaleLinear()
   .domain([0,40])
   .range([0,120])

//繪製長條圖
var bars = groups.append("g").attr("class","bars")
.style("transform","translateY(-70px)")      

.selectAll("rect.bar").data(d=>d.values)
.enter().append("rect")

.attr("class","bar")
.attr("fill",(d,i)=>colorify(i))

.attr("x",(d,i)=>xScale(i))
.attr("width",30)
.attr("height",0)
.attr("data-name",d=>d.name)

.transition()
.delay((d,i)=>i*500+500)
.duration(2000)
.ease(d3.easeElastic)
.attr("y",(d,i)=>-yScale(d.value))
.attr("height",d=>yScale(d.value))

//文字處理
var typeTexts = groups.selectAll("g.label").data(d=>d.values)
.enter().append("g")

.append("text")
.style('fill',"white")
.style("opacity",0)

.text(d=>d.name)

.attr("x",(d,i)=>xScale(i))
.attr("y",-40)

.transition()
.delay((d,i)=>i*500)
.duration(1000)
.style("opacity",0.6) 

//y座標軸
let axisGroup = svg.append("g").attr("class","axis")
.style("transform","translateY(430px)")   
.selectAll("line.axis")
.data( d3.range(5).map(d=>20*(d+1) ) )
.enter()

axisGroup.append("line")   
.attr("class","axis")
.attr("stroke","white")
.attr("x1",0)
.attr("x2",960)
.attr("y1",(d,i)=>-yScale(d))
.attr("y2",(d,i)=>-yScale(d))
.attr("stroke-dasharray","5 5")
.style("opacity",0.3)

axisGroup.append("text")
.text(d=>d) 
.attr("x",0)
.attr("y",(d,i)=>-yScale(d)-15)  
.attr("fill","white")
.style("opacity",0.5)


// 黑曼巴logo

var canvas = document.getElementById("mycanvas")
var ctx = canvas.getContext("2d")

canvas.width = 500
canvas.height = 500

var time = 0

function draw(){
  time++
//   清除所有殘影
  ctx.clearRect(0,0,500,500)
  
  // 殘影效果
  ctx.fillStyle = "rgba(0,0,0,0)"
  ctx.fillRect(0,0,500,500)
  
// 格子底圖
//   ctx.beginPath()
//   for(var i=0; i<26; i++){
//     let pos = i*20
//     ctx.moveTo(pos,0)
//     ctx.lineTo(pos,500)
//     ctx.fillText(pos,pos,10)
//     ctx.fillStyle = "#000000"
    
//     ctx.moveTo(0,pos)
//     ctx.lineTo(500,pos)
//     ctx.fillText(pos,10,pos)
//   }
//   ctx.strokeStyle="rgba(0,0,0,0.1)"
//   ctx.stroke()
  
  //左上
  ctx.beginPath()
  ctx.moveTo(240-(time%5)*5,80-(time%5)*5)
  ctx.lineTo(240-(time%5)*5,140-(time%5)*5)
  ctx.lineTo(30-(time%5)*5,40-(time%5)*5)
  ctx.lineTo(90-(time%5)*5,30-(time%5)*5)
  //滑鼠位移效果
  // ctx.lineTo(90-(time%5)*5,30-(time%5)*5-mouse.y/20)
  ctx.closePath()
  ctx.fillStyle = "hsl(100"+(mouse.x%360)+",50%,50%)"
  ctx.fill()
  ctx.lineWidth = 2
  ctx.strokeStyle = "#ffffff"
  ctx.stroke()
  //左上二
  ctx.beginPath()
  ctx.moveTo(240-(time%5)*5,160-(time%5)*5)
  ctx.lineTo(160-(time%5)*5,220-(time%5)*5)
  ctx.lineTo(50-(time%5)*5,120-(time%5)*5)
  ctx.lineTo(30-(time%5)*5,60-(time%5)*5)
  ctx.closePath()
  ctx.fillStyle =  "hsl(20"+(mouse.x%90)+",50%,50%)"
  ctx.fill()
  ctx.lineWidth = 2
  ctx.strokeStyle = "#ffffff"
  ctx.stroke()
  //右上
  ctx.beginPath()
  ctx.moveTo(260+(time%5)*5,80-(time%5)*5)
  ctx.lineTo(260+(time%5)*5,140-(time%5)*5)
  ctx.lineTo(470+(time%5)*5,40-(time%5)*5)
  ctx.lineTo(410+(time%5)*5,30-(time%5)*5)
  ctx.closePath()
  ctx.fillStyle = "hsl(20"+(mouse.x%90)+",50%,50%)"
  ctx.fill()
  ctx.lineWidth = 2
  ctx.strokeStyle = "#ffffff"
  ctx.stroke()
  //右上二
  ctx.beginPath()
  ctx.moveTo(260+(time%5)*5,160-(time%5)*5)
  ctx.lineTo(340+(time%5)*5,220-(time%5)*5)
  ctx.lineTo(450+(time%5)*5,120-(time%5)*5)
  ctx.lineTo(470+(time%5)*5,60-(time%5)*5)
  ctx.closePath()
  ctx.fillStyle = "hsl(100"+(mouse.x%360)+",50%,50%)"
  ctx.fill()
  ctx.lineWidth = 2
  ctx.strokeStyle = "#ffffff"
  ctx.stroke()
  //左下
  ctx.beginPath()
  ctx.moveTo(240,180-(time%5)*5)
  ctx.lineTo(240,500-(time%5)*5)
  ctx.lineTo(210,480-(time%5)*5)
  ctx.lineTo(170,235-(time%5)*5)
  ctx.closePath()
  ctx.fillStyle = "hsl(100"+(mouse.x%360)+",50%,50%)"
  ctx.fill()
  ctx.lineWidth = 2
  ctx.strokeStyle = "#ffffff"
  ctx.stroke()
  //右下
  ctx.beginPath()
  ctx.moveTo(260,180-(time%5)*5)
  ctx.lineTo(260,500-(time%5)*5)
  ctx.lineTo(290,480-(time%5)*5)
  ctx.lineTo(330,235-(time%5)*5)
  ctx.closePath()
  ctx.fillStyle = "hsl(20"+(mouse.x%90)+",50%,50%)"
  ctx.fill()
  ctx.lineWidth = 2
  ctx.strokeStyle = "#ffffff"
  ctx.stroke()
  
  //滑鼠游標
  ctx.beginPath()
  ctx.arc(mouse.x,mouse.y,5,0,Math.PI*2)
  ctx.fillStyle="transparent"
  ctx.fill()
  
  
}

// 因為動畫效果所以取消draw()，這是靜態的
// draw()
setInterval(draw,100)


// 滑鼠效果
var mouse ={x:0,y:0}
canvas.addEventListener("mousemove",function(evt
){ 
    mouse.x=evt.offsetX
    mouse.y=evt.offsetY
})


// 時間字卡

var myClock = setInterval(newTimer ,0);
function newTimer() {
  var date = new Date();
  var month = new Array(12);
  month[0] = "1";
  month[1] = "2";
  month[2] = "3";
  month[3] = "4";
  month[4] = "5";
  month[5] = "6";
  month[6] = "7";
  month[7] = "8";
  month[8] = "9";
  month[9] = "10";
  month[10] = "11";
  month[11] = "12";
  document.getElementById("year").innerHTML = date.getFullYear();
  document.getElementById("month").innerHTML = month[date.getMonth()];
  document.getElementById("day").innerHTML = date.getDate();
  document.getElementById("hours").innerHTML = date.getHours();
  document.getElementById("minutes").innerHTML = date.getMinutes();
  document.getElementById("seconds").innerHTML = date.getSeconds(); document.getElementById("milliseconds").innerHTML= date.getMilliseconds();
}