// Dữ liệu chuẩn 22 cơ sở lưu trú Đà Nẵng - Nhóm 4 (Lớp HR22302)
const hotels = [
    // --- KHÁCH SẠN / RESORT 5 SAO (7 cơ sở) ---
    {
        id: 1,
        code: "5S01",
        name: "Crowne Plaza Danang",
        category: "5sao",
        catName: "🟡 KS / Resort 5 sao",
        lat: 16.074809,
        lng: 106.219579,
        address: "17 Quang Trung, Hải Châu, Đà Nẵng",
        price: "2.000.000 – 3.200.000 VNĐ / đêm",
        images: [
            "5s01.01.jpg",
            "5s01.02.jpg",
            "5s01.03.jpg"
        ],
        nearby: "Trung tâm quận Hải Châu, gần Cầu Sông Hàn, Chợ Cồn, Chợ Hàn",
        rooms: "Superior, Deluxe City View, Executive Suite, Club Room",
        amenities: "Bãi biển riêng, hồ bơi vô cực, Spa, Gym, Nhà hàng Á-Âu",
        desc: "Crowne Plaza Danang City Centre là khách sạn 5 sao cao cấp tọa lạc tại vị trí đắc địa thuộc quận Hải Châu, Đà Nẵng, cung cấp hệ thống phòng nghỉ sang trọng và dịch vụ MICE chuyên nghiệp."
    },
    {
        id: 2,
        code: "5S02",
        name: "Shilla Monogram Danang",
        category: "5sao",
        catName: "🟡 KS / Resort 5 sao",
        lat: 15.962783,
        lng: 108.28888,
        address: "Đường Lạc Long Quân, Điện Bàn Đông, Quảng Nam - Đà Nẵng",
        price: "2.800.000 – 4.500.000 VNĐ / đêm",
        images: [
            "5s02.01.jpg",
            "5s02.02.jpg",
            "5s02.03.jpg"
        ],
        nearby: "Tuyến đường biển nối liền Đà Nẵng và Hội An, sân golf quốc tế",
        rooms: "Superior, Deluxe Ocean View, Monarque Suite, Villa ven biển",
        amenities: "Bãi biển riêng, quản gia, 4 hồ bơi điều chỉnh nhiệt độ, Spa",
        desc: "Khu nghỉ dưỡng 5 sao cao cấp mang phong cách thiết kế tinh tế, hiện đại hòa hợp với thiên nhiên ven biển, hướng đến trải nghiệm nghỉ dưỡng chất lượng cao."
    },
    {
        id: 3,
        code: "5S03",
        name: "Peninsula Hotel Danang",
        category: "5sao",
        catName: "🟡 KS / Resort 5 sao",
        lat: 16.081551,
        lng: 108.24714,
        address: "84 Võ Nguyên Giáp, Sơn Trà, Đà Nẵng",
        price: "1.600.000 – 2.500.000 VNĐ / đêm",
        images: [
            "5s03.01.jpg",
            "5s03.02.jpg",
            "5s03.03.jpg"
        ],
        nearby: "Bãi biển Mỹ Khê, Công viên Biển Đông, Cầu Mống",
        rooms: "Deluxe Ocean View, Ocean Grand Suite, Family Suite",
        amenities: "Hồ bơi vô cực tầng thượng, nhà hàng quốc tế, Spa",
        desc: "Khách sạn 5 sao tọa lạc ngay trên đường bờ biển Võ Nguyên Giáp, tầm nhìn trực diện ra biển Mỹ Khê và toàn cảnh thành phố."
    },
    {
        id: 4,
        code: "5S04",
        name: "Novotel Danang Premier Han River",
        category: "5sao",
        catName: "🟡 KS / Resort 5 sao",
        lat: 16.077412,
        lng: 108.223631,
        address: "36 Bạch Đằng, Hải Châu, Đà Nẵng",
        price: "2.200.000 – 3.800.000 VNĐ / đêm",
        images: [
            "5s04.01.jpg",
            "5s04.02.jpg",
            "5s04.03.jpg"
        ],
        nearby: "Sông Hàn, Trung tâm Hành chính Đà Nẵng, Cầu Rồng",
        rooms: "Superior, Executive Floor, Studio Apartment, Suite",
        amenities: "Sky36 Bar, hồ bơi ngoài trời, trung tâm hội nghị quốc tế",
        desc: "Khách sạn 5 sao nổi tiếng tọa lạc trên đường Bạch Đằng, ngay sát sông Hàn với tầm nhìn bao quát toàn cảnh thành phố và các cây cầu biểu tượng."
    },
    {
        id: 5,
        code: "5S05",
        name: "Meliá Vinpearl Danang Riverfront",
        category: "5sao",
        catName: "🟡 KS / Resort 5 sao",
        lat: 16.070832,
        lng: 108.229283,
        address: "341 Trần Hưng Đạo, Sơn Trà, Đà Nẵng",
        price: "1.800.000 – 3.200.000 VNĐ / đêm",
        images: [
            "5s05.01.jpg",
            "5s05.02.jpg",
            "5s05.03.jpg"
        ],
        nearby: "Cầu Rồng, Cầu Tình Yêu, Vincom Plaza Đà Nẵng",
        rooms: "Studio Suite, Executive Suite, Căn hộ 2 phòng ngủ",
        amenities: "Hồ bơi vô cực, Kids Club, YHI Spa, nhà hàng Á - Âu",
        desc: "Condotel 5 sao hiện đại hướng nhìn trực diện ra sông Hàn và cầu Rồng, lựa chọn hàng đầu cho các gia đình và du khách lưu trú dài ngày."
    },
    {
        id: 6,
        code: "5S06",
        name: "Courtyard by Marriott Danang Han River",
        category: "5sao",
        catName: "🟡 KS / Resort 5 sao",
        lat: 16.072514,
        lng: 108.224557,
        address: "58 Bạch Đằng, Hải Châu, Đà Nẵng",
        price: "2.200.000 – 3.500.000 VNĐ / đêm",
        images: [
            "5s06.01.jpg",
            "5s06.02.jpg",
            "5s06.03.jpg"
        ],
        nearby: "Ven sông Hàn, Chợ Hàn, Bảo tàng Chăm",
        rooms: "Deluxe King/Twin, Executive City/River View, Suite",
        amenities: "MoMo Café, hồ bơi, phòng gym mở cửa 24/7, phòng họp thông minh",
        desc: "Khách sạn mang thương hiệu quốc tế Marriott ven sông Hàn, phục vụ các doanh nhân và du khách yêu thích trải nghiệm lưu trú cao cấp."
    },
    {
        id: 7,
        code: "5S07",
        name: "Grand Mercure Danang Riverfront",
        category: "5sao",
        catName: "🟡 KS / Resort 5 sao",
        lat: 16.04837,
        lng: 108.22701,
        address: "Khu biệt thự Đảo Xanh, Hải Châu, Đà Nẵng",
        price: "1.900.000 – 3.000.000 VNĐ / đêm",
        images: [
            "5s07.01.jpg",
            "5s07.02.jpg",
            "5s07.03.jpg"
        ],
        nearby: "Cầu Trần Thị Lý, Công viên Châu Á (Asia Park)",
        rooms: "Superior King/Twin, Deluxe River View, Executive Suite",
        amenities: "Xe bus đưa đón bãi biển, nhà hàng Trung Hoa, Karma Spa",
        desc: "Khách sạn thuộc tập đoàn Accor tại khu Đảo Xanh thanh bình, kết hợp văn hóa Việt Nam và phong cách phục vụ hiện đại Pháp."
    },

    // --- KHÁCH SẠN 4 SAO (5 cơ sở) ---
    {
        id: 8,
        code: "4S01",
        name: "Stella Maris Beach Danang",
        category: "4sao",
        catName: "🔵 Khách sạn 4 sao",
        lat: 16.0635,
        lng: 108.24493,
        address: "03 Võ Văn Kiệt, Sơn Trà, Đà Nẵng",
        price: "1.100.000 – 1.800.000 VNĐ / đêm",
        images: [
            "4s01.01.jpg",
            "4s01.02.jpg",
            "4s01.03.jpg"
        ],
        nearby: "Bãi biển Mỹ Khê, Cầu Rồng",
        rooms: "Superior, Deluxe Ocean View, Family Suite",
        amenities: "Hồ bơi tầng thượng, nhà hàng Á-Âu, spa, phòng gym",
        desc: "Khách sạn 4 sao hiện đại nằm ngay trục đường chính Võ Văn Kiệt hướng ra biển Mỹ Khê."
    },
    {
        id: 9,
        code: "4S02",
        name: "Monarque Hotel Danang",
        category: "4sao",
        catName: "🔵 Khách sạn 4 sao",
        lat: 16.06674,
        lng: 108.24765,
        address: "238 Võ Nguyên Giáp, Sơn Trà, Đà Nẵng",
        price: "1.300.000 – 2.100.000 VNĐ / đêm",
        images: [
            "4s02.01.jpg",
            "4s02.02.jpg",
            "4s02.03.jpg"
        ],
        nearby: "Bãi biển Mỹ Khê, Phố du lịch An Thượng",
        rooms: "Deluxe Double, Royal Sea View, Suite",
        amenities: "Hồ bơi vô cực, trà chiều miễn phí, spa, đưa đón sân bay",
        desc: "Khách sạn mang phong cách tân cổ điển sang trọng sát biển Mỹ Khê với dịch vụ chăm sóc khách hàng xuất sắc."
    },
    {
        id: 10,
        code: "4S03",
        name: "Golden Lotus Grand Hotel",
        category: "4sao",
        catName: "🔵 Khách sạn 4 sao",
        lat: 16.05041,
        lng: 108.24483,
        address: "86 Lê Quang Đạo, Ngũ Hành Sơn, Đà Nẵng",
        price: "900.000 – 1.600.000 VNĐ / đêm",
        images: [
            "4s03.01.jpg",
            "4s03.02.jpg",
            "4s03.03.jpg"
        ],
        nearby: "Khu phố An Thượng, Biển Mỹ Khê",
        rooms: "Suite Bathtub Balcony, Deluxe Double",
        amenities: "Bữa sáng miễn phí, hồ bơi, dịch vụ spa chuyên nghiệp",
        desc: "Khách sạn tiêu chuẩn 4 sao tọa lạc tại khu phố Tây An Thượng sầm uất, thuận tiện cho hoạt động giải trí và tắm biển."
    },
    {
        id: 11,
        code: "4S04",
        name: "SeaShore Hotel & Apartment",
        category: "4sao",
        catName: "🔵 Khách sạn 4 sao",
        lat: 16.09115,
        lng: 108.24838,
        address: "Lô 15-16 Hoàng Sa, Sơn Trà, Đà Nẵng",
        price: "1.000.000 – 1.700.000 VNĐ / đêm",
        images: [
            "4s04.01.jpg",
            "4s04.02.jpg",
            "4s04.03.jpg"
        ],
        nearby: "Chùa Linh Ứng Sơn Trà, Bãi biển Mân Thái",
        rooms: "Deluxe Ocean View, Junior Suite, Căn hộ dịch vụ",
        amenities: "Hồ bơi ngoài trời, nhà hàng hướng biển, hỗ trợ tour",
        desc: "Khách sạn và căn hộ 4 sao sở hữu tầm nhìn trực diện ra cung đường Hoàng Sa và bán đảo Sơn Trà nên thơ."
    },
    {
        id: 12,
        code: "4S05",
        name: "Tru by Hilton Da Nang City Centre",
        category: "4sao",
        catName: "🔵 Khách sạn 4 sao",
        lat: 16.07185,
        lng: 108.22012,
        address: "15 Lê Duẩn, Hải Châu, Đà Nẵng",
        price: "1.200.000 – 1.900.000 VNĐ / đêm",
        images: [
            "4s05.01.jpg",
            "4s05.02.jpg",
            "4s05.03.jpg"
        ],
        nearby: "Trung tâm thành phố, Sông Hàn, Cầu Sông Hàn",
        rooms: "King Room, Twin Room, Fun Zone Suite",
        amenities: "Không gian sảnh trẻ trung, wifi tốc độ cao, phòng gym",
        desc: "Khách sạn 4 sao mang thương hiệu trẻ trung, năng động của tập đoàn Hilton ngay tại trung tâm mua sắm Lê Duẩn."
    },

    // --- KHÁCH SẠN 3 SAO (5 cơ sở) ---
    {
        id: 13,
        code: "3S01",
        name: "Hanami Hotel Danang",
        category: "3sao",
        catName: "🟣 Khách sạn 3 sao",
        lat: 16.048602,
        lng: 108.242447,
        address: "61-63 Hoàng Kế Viêm, Ngũ Hành Sơn, Đà Nẵng",
        price: "600.000 – 1.100.000 VNĐ / đêm",
        images: [
            "3s01.01.jpg",
            "3s01.02.jpg",
            "3s01.03.jpg"
        ],
        nearby: "Phố du lịch An Thượng, Biển Mỹ Khê",
        rooms: "Deluxe Family Room, Standard King Room",
        amenities: "Lễ tân 24/7, cho thuê xe máy, đặt tour du lịch",
        desc: "Khách sạn 3 sao phong cách Nhật Bản ấm cúng, nằm tại khu phố An Thượng sôi động về đêm."
    },
    {
        id: 14,
        code: "3S02",
        name: "King House Villa Hotel",
        category: "3sao",
        catName: "🟣 Khách sạn 3 sao",
        lat: 16.063716,
        lng: 108.239909,
        address: "301 - 303 Chính Hữu, Sơn Trà, Đà Nẵng",
        price: "550.000 – 950.000 VNĐ / đêm",
        images: [
            "3s02.01.jpg",
            "3s02.02.jpg",
            "3s02.03.jpg"
        ],
        nearby: "Biển Mỹ Khê, Cầu Rồng",
        rooms: "Studio Double Room, Studio Family",
        amenities: "Hồ bơi nhỏ, bãi đỗ xe miễn phí, dịch vụ phòng",
        desc: "Khách sạn thiết kế dạng villa hiện đại, gần gũi và yên tĩnh, cách bãi tắm Phạm Văn Đồng chỉ vài phút đi bộ."
    },
    {
        id: 15,
        code: "3S03",
        name: "Sea Queen Hotel",
        category: "3sao",
        catName: "🟣 Khách sạn 3 sao",
        lat: 16.050882,
        lng: 108.245495,
        address: "Lê Quang Đạo, Ngũ Hành Sơn, Đà Nẵng",
        price: "600.000 – 1.050.000 VNĐ / đêm",
        images: [
            "3s03.01.jpg",
            "3s03.02.jpg",
            "3s03.03.jpg"
        ],
        nearby: "Bãi biển Mỹ Khê, An Thượng",
        rooms: "Deluxe Double Balcony, Superior Twin",
        amenities: "Cho thuê xe đạp, giặt ủi, hỗ trợ đặt vé tham quan",
        desc: "Khách sạn 3 sao tiện nghi sạch sẽ, phục vụ chu đáo cho khách du lịch tự túc và cặp đôi."
    },
    {
        id: 16,
        code: "3S04",
        name: "Sekong Hotel Da Nang Beach",
        category: "3sao",
        catName: "🟣 Khách sạn 3 sao",
        lat: 16.074767,
        lng: 108.24467,
        address: "160 Võ Nguyên Giáp, An Hải, Đà Nẵng",
        price: "700.000 – 1.200.000 VNĐ / đêm",
        images: [
            "3s04.01.jpg",
            "3s04.02.jpg",
            "3s04.03.jpg"
        ],
        nearby: "Công viên Biển Đông, Bãi biển Mỹ Khê",
        rooms: "Deluxe Twin, Family Suite with Balcony",
        amenities: "Phòng ăn sáng hướng biển, dịch vụ đưa đón",
        desc: "Khách sạn 3 sao sát biển Mỹ Khê, cung cấp các phòng nghỉ hướng biển với mức giá hợp lý."
    },
    {
        id: 17,
        code: "3S05",
        name: "Gold Central Hotel a Salve by Haviland",
        category: "3sao",
        catName: "🟣 Khách sạn 3 sao",
        lat: 16.053944,
        lng: 108.2201,
        address: "24 Núi Thành, Hòa Cường, Đà Nẵng",
        price: "500.000 – 900.000 VNĐ / đêm",
        images: [
            "3s05.01.jpg",
            "3s05.02.jpg",
            "3s05.03.jpg"
        ],
        nearby: "Khu vực trung tâm Hải Châu, Công viên Châu Á",
        rooms: "Superior Double, Executive Double",
        amenities: "Lễ tân 24/7, bãi đỗ xe máy/ô tô an toàn",
        desc: "Khách sạn 3 sao tại trung tâm quận Hải Châu, thuận tiện di chuyển đến các điểm ăn uống nổi tiếng của người bản địa."
    },

    // --- HOMESTAY & RESORT CAO CẤP (5 cơ sở) ---
    {
        id: 18,
        code: "HS01",
        name: "Furama Resort Danang",
        category: "homestay",
        catName: "🩵 Homestay & Resort cao cấp",
        lat: 16.0465,
        lng: 108.2482,
        address: "105 Võ Nguyên Giáp, Khuê Mỹ, Ngũ Hành Sơn, Đà Nẵng",
        price: "3.200.000 – 6.000.000 VNĐ / đêm",
        images: [
            "HS01.01.jpg",
            "HS01.02.jpg",
            "HS01.03.jpg"
        ],
        nearby: "Bãi biển Bắc Mỹ An, Làng đá Non Nước",
        rooms: "Garden Superior, Ocean Deluxe Suite, Biệt thự hồ bơi",
        amenities: "V-Senses Wellness & Spa, ẩm thực hoàng gia, bãi biển riêng",
        desc: "Khu nghỉ dưỡng 5 sao biểu tượng văn hóa di sản đầu tiên tại Đà Nẵng với kiến trúc champa truyền thống sang trọng."
    },
    {
        id: 19,
        code: "HS02",
        name: "Naman Retreat",
        category: "homestay",
        catName: "🩵 Homestay & Resort cao cấp",
        lat: 15.9839,
        lng: 108.2612,
        address: "Đường Trường Sa, Ngũ Hành Sơn, Đà Nẵng",
        price: "3.500.000 – 7.000.000 VNĐ / đêm",
        images: [
            "HS02.01.jpg",
            "HS02.02.jpg",
            "HS02.03.jpg"
        ],
        nearby: "Giáp ranh Phố cổ Hội An, Sân golf quốc tế",
        rooms: "3-Bedroom Apartment, 1-Bedroom Pool Villa",
        amenities: "Yoga thiền miễn phí, Pure Spa tre độc đáo, hồ bơi vô cực",
        desc: "Khu nghỉ dưỡng kết hợp hoàn hảo giữa kiến trúc vật liệu tre truyền thống và phong cách sống hiện đại thanh tịnh."
    },
    {
        id: 20,
        code: "HS03",
        name: "InterContinental Danang Sun Peninsula Resort",
        category: "homestay",
        catName: "🩵 Homestay & Resort cao cấp",
        lat: 16.1287,
        lng: 108.2831,
        address: "Bãi Bắc, Thọ Quang, Sơn Trà, Đà Nẵng",
        price: "7.000.000 – 15.000.000+ VNĐ / đêm",
        images: [
            "HS03.01.jpg",
            "HS03.02.jpg",
            "HS03.03.jpg"
        ],
        nearby: "Chùa Linh Ứng, Đỉnh Bàn Cờ, Bán đảo Sơn Trà",
        rooms: "Classic Room, Suites, Penthouse, Villas hướng biển",
        amenities: "Cáp treo Nam Tram độc đáo, nhà hàng chuẩn Michelin, bãi biển riêng",
        desc: "Kiệt tác nghỉ dưỡng đỉnh cao ẩn mình giữa những cánh rừng nguyên sinh của bán đảo Sơn Trà do kiến trúc sư Bill Bensley thiết kế."
    },
    {
        id: 21,
        code: "HS04",
        name: "Hyatt Regency Danang Resort and Spa",
        category: "homestay",
        catName: "🩵 Homestay & Resort cao cấp",
        lat: 16.0031,
        lng: 108.2575,
        address: "5 Trường Sa, Hòa Hải, Ngũ Hành Sơn, Đà Nẵng",
        price: "3.000.000 – 5.500.000 VNĐ / đêm",
        images: [
            "HS04.01.jpg",
            "HS04.02.jpg",
            "HS04.03.jpg"
        ],
        nearby: "Danh thắng Ngũ Hành Sơn, Sân golf Da Nang",
        rooms: "Standard & Club Rooms, Residences, Villas",
        amenities: "Sân tennis, VIE Spa, hệ thống hồ bơi lớn ngoài trời",
        desc: "Khu nghỉ dưỡng biển cao cấp với không gian rộng rãi, nhiều tiện ích giải trí gia đình và hồ bơi sát biển tuyệt đẹp."
    },
    {
        id: 22,
        code: "HS05",
        name: "Pullman Danang Beach Resort",
        category: "homestay",
        catName: "🩵 Homestay & Resort cao cấp",
        lat: 16.0489,
        lng: 108.248,
        address: "101 Võ Nguyên Giáp, Khuê Mỹ, Ngũ Hành Sơn, Đà Nẵng",
        price: "2.500.000 – 4.200.000 VNĐ / đêm",
        images: [
            "HS05.01.jpg",
            "HS05.02.jpg",
            "HS05.03.jpg"
        ],
        nearby: "Bãi biển Bắc Mỹ An, Asia Park",
        rooms: "Superior, Deluxe, Family Connecting Room",
        amenities: "Hồ bơi vô cực, thể thao bãi biển, Azura Restaurant",
        desc: "Resort 5 sao mang phong cách năng động, hiện đại nằm dọc theo dải cát trắng mịn của bãi biển Bắc Mỹ An."
    }
];