const tempprods = [{
    category:"technology",
    sub_category:"laptops",
    title:"Apple MacBook Air 13.3 ''(M1 / 8GB / 256GB / Retina Display / MacOS) (2020) Space Gray GR",
    price: 1077.76,
    manufacturer:'apple',
    description:"With the 8-core M1 processor that delivers 2.8 times more processing power and up to 5 times better graphics than the previous generation. It has a functional macOS Big Sur specially designed for the M1, Retina display, and fast and silent keyboard.",
    rating:{rate: 4.6,count:83},
    img:"https://a.scdn.gr/images/sku_main_images/025634/25634434/20201113094413_apple_macbook_air_13_3_m1_8gb_256gb_retina_display_macos_big_sur_2020_space_gray.jpeg",
    stock: 8
    },{
    category:"technology",
    sub_category:"laptops",
    title:"Dell Vostro 3500 (i5-1135G7 / 8GB / 256GB / FHD / W10 Pro) GR Keyboard",
    price: 765.00,
    manufacturer:'dell',
    description:"Screen 15.6 '' 1920x1080, Intel Iris Xe Graphics, 256GB M.2 SSD, 8GB DDR4 - 3200MHz", 
    rating:{rate: 4.6,count:3},
    img:"https://c.scdn.gr/images/sku_main_images/027731/27731777/20210318135534_dell_vostro_3500_i5_1135g7_8gb_256gb_fhd_w10_pro_gr_keyboard.jpeg",
    stock: 14
},{
    category:"technology",
    sub_category:"laptops",
    title:"Apple MacBook Air 13.3 ''(M1 / 8GB / 256GB / Retina Display / MacOS) (2020) Gold GR",
    price: 1079.99,
    manufacturer:'apple',
    description:"With the 8-core M1 processor that delivers 2.8 times more processing power and up to 5 times better graphics than the previous generation. It has a functional macOS Big Sur specially designed for the M1, Retina display, and fast and silent keyboard.", 
    rating:{rate: 4.6,count:83},
    img:"https://b.scdn.gr/images/sku_main_images/025602/25602880/20201111112136_apple_macbook_air_13_3_m1_8gb_256gb_retina_display_macos_big_sur_2020.jpeg",
    stock: 2
},{
    category:"technology",
    sub_category:"laptops",
    title:"HP 15s-eq1016nv (Ryzen 7-4700U / 16GB / 512GB / FHD / W10 S)",
    price: 749.00,
    manufacturer:'hp',
    description:"Screen 15.6 ''1920x1080, AMD Radeon graphics, 512GB PCIe NVMe, 16GB DDR4, WebCam, Wi-Fi 5, HDMI, 2xUSB 3.0", 
    rating:{rate: 4.2,count:10},
    img:"https://a.scdn.gr/images/sku_main_images/027422/27422275/20210303091445_hp_15s_eq1016nv_ryzen_7_4700u_16gb_512gb_fhd_w10_s.jpeg",
    stock: 7
},{
    category:"technology",
    sub_category:"laptops",
    title:"Lenovo ThinkBook 15 G2 ARE (Ryzen 5-4500U / 8GB / 256GB / FHD / W10 Pro) GR Keyboard",
    price: 771.00,
    manufacturer:'lenovo',
    description:"15.6 ''IPS 1920x1080 screen, SSD M.2 2242 PCIe 3.0x4 NVMe, Built-in graphics card, WiFi 6 & Bluetooth", 
    rating:{rate: 4.6,count:83},
    img:"https://b.scdn.gr/images/sku_main_images/027067/27067850/20210210153822_lenovo_thinkbook_15_g2_are_ryzen_5_4500u_8gb_256gb_fhd_w10.jpeg",
    stock: 21
},{
    category:"technology",
    sub_category:"laptops",
    title:"Lenovo V15 G2 ALC (Ryzen 5-5500U / 8GB / 256GB / FHD / No OS) Black",
    price: 619.00,
    manufacturer:'lenovo',
    description:"15.6 ''IPS 1920x1080 screen, SSD M.2 2242 PCIe 3.0x4 NVMe, Radeon graphics processor, WiFi 5 & Bluetooth, 1.5W x2 speakers, Dolby Audio, Weight 1.7 Kg", 
    rating:{rate: 4.2,count:12},
    img:"https://a.scdn.gr/images/sku_main_images/029709/29709225/20210625144557_lenovo_v15_g2_alc_ryzen_5_5500u_8gb_256gb_fhd_no_os_black.jpeg",
    stock: 10
},{
    category:"fashion",
    sub_category:"jewellery",
    title:"Swarovski Women's Heart Necklace with Brass Gilded",
    price: 105.00,
    manufacturer:'swarovski',
    description:"Eternal romance: Symbols of love and infinity are associated with this elegant Swarovski necklace. This wonderful piece, which is a visible representation of the promise of eternal love, is the perfect gift for your other half. ", 
    rating:{rate: 4.5,count:4},
    img:"https://a.scdn.gr/images/sku_main_images/021520/21520658/20200107112823_swarovski_infinity_heart_5518865_white_mixed_metal_finish.jpeg",
    stock: 29
},{
    category:"fashion",
    sub_category:"jewellery",
    title:"Swarovski Women's Pendant Earrings With Lifelong Heart Stones Gold Plated Brass",
    price: 85.00,
    manufacturer:'swarovski',
    description:"Women's Swarovski pendant earrings, decorated with white crystals. This pair of pierced earrings shines bright with transparent pave. A minimalist look that can only be worn from morning to night.", 
    rating:{rate: 5,count:3},
    img:"https://d.scdn.gr/images/sku_main_images/022738/22738148/20200409164126_swarovski_lifelong_heart_5517942_white.jpeg",
    stock: 13
},{
    category:"fashion",
    sub_category:"jewellery",
    title:"Swarovski Women's Lifelong Heart Ring with Stones",
    price: 95.00,
    manufacturer:'swarovski',
    description:"Collection: Lifelong Heart, Avoid contact with water, Polishing: With Dry soft cloth", 
    rating:{rate: 5,count:1},
    img:"https://b.scdn.gr/images/sku_main_images/021494/21494228/20200102100747_swarovski_lifelong_heart_white_mixed_metal_finish.jpeg",
    stock: 3
},{
    category:"fashion",
    sub_category:"jewellery",
    title:"Silver Thin Neck Chain 13mm 584",
    price: 67.00,
    manufacturer:'visetti',
    description:"Finish: Polished, White Zircons, Safety clasp, Length: 40 cm, Thickness: 13 mm, Material: Brass",
    rating:{rate: 5,count:4},
    img:"https://c.scdn.gr/images/sku_main_images/028555/28555465/20210426115147_asimenia_alysida_laimou_lepti_pachous_13mm_584.jpeg",
    stock: 11
},{
    category:"fashion",
    sub_category:"jewellery",
    title:"Guess Women's Steel Ring",
    price: 38.00,
    manufacturer:'guess',
    description:"Material: Stainless Steel, Finish: Polished, White Zircons, Decorated with logo", 
    rating:{rate: 4.5,count:2},
    img:"https://b.scdn.gr/images/sku_main_images/025583/25583696/20201110110618_guess_ubr79030.jpeg",
    stock: 16
},{
    category:"fashion",
    sub_category:"jewellery",
    title:"Oxzen Women's Necklace with Gold Plated Steel",
    price: 10.90,
    manufacturer:'oxzen',
    description:"Material: Steel, Gold plated: Yes",
    rating:{rate: 0,count:0},
    img:"https://b.scdn.gr/images/sku_main_images/030500/30500140/20210818093818_oxzen_gynaikeio_kolie_apo_atsali_epichrysomeno_a07097g.jpeg",
    stock: 11
}]


const fake_products = [{
    category:"technology",
    sub_category:"laptops",
    title:"Dell Inspiron 5510 (i7-11370H / 16GB / 1TB / GeForce MX450 / FHD / W10 Home)",
    price: 1259.00,
    manufacturer:'dell',
    description:"Screen 15.6 ''1920x1080, vidia GeForce MX450 2 GB, WiFi 5 and Bluetooth 5.1, 720p camera, Illuminated keyboard, Weight 1.63 kg", 
    rating:{rate: 5,count:2},
    img:"https://c.scdn.gr/images/sku_main_images/029603/29603733/20210622100341_dell_inspiron_5510_i7_11370h_16gb_1tb_geforce_mx450_fhd_w10_home.jpeg",
    stock: 9
},{
    category:"technology",
    sub_category:"laptops",
    title:"Dell Inspiron 3505 (Ryzen 5-3450U / 12GB / 1TB + 256GB / FHD / W10 S)",
    price: 756.43,
    manufacturer:'dell',
    description:"15-inch laptop with fast performance and sleek design with narrow double-sided bezels, screen (IPS) and fast charging.",
    rating:{rate: 4.5,count:16},
    img:"https://b.scdn.gr/images/sku_main_images/026507/26507787/20210111120241_dell_inspiron_3505_ryzen_5_3450u_12gb_1tb_256gb_fhd_w10_s.jpeg",
    stock: 13
},{
    category:"technology",
    sub_category:"laptops",
    title:"Lenovo Legion 5 15ARH05 (Ryzen 5-4600H / 8GB / 512GB / GeForce GTX 1650 Ti / FHD / No OS) US Keyboard Phantom Black",
    price: 893.28,
    manufacturer:'lenovo',
    description:"15.6 ''IPS 1920x1080 120Hz screen, Nvidia GeForce GTX 1650 Ti, SSD M.2 2242 PCIe 3.0x4 NVMe, WiFi 6 & Bluetooth, Weight 2.3 Kg, Illuminated Keyboard", 
    rating:{rate: 5,count:5},
    img:"https://c.scdn.gr/images/sku_main_images/027633/27633526/20210312134405_lenovo_legion_5_15arh05_ryzen_5_4600h_8gb_512gb_geforce_gtx_1650_ti_fhd_no_os.jpeg",
    stock: 6
},{
    category:"technology",
    sub_category:"laptops",
    title:"Lenovo IdeaPad Gaming 3 15IMH05 (i5-10300H / 8GB / 512GB / GeForce GTX 1650 Ti / FHD / W10)",
    price: 829.06,
    manufacturer:'lenovo',
    description:"15.6 ''IPS 1920x1080 60Hz, GeForce GTX 1650 Ti 4GB, 8GB SO-DIMM DDR4-2933, SSD M.2 2242 PCIe 3.0x4 NVMe, 1.5W x2 Dolby Audio Speakers, WiFi 5, Blue backlit keyboard, HDMI 2.0",
    rating:{rate: 5,count:4},
    img:"https://a.scdn.gr/images/sku_main_images/024173/24173938/20200728104818_lenovo_ideapad_gaming_3_15imh05_i5_10300h_8gb_512gb_geforce_gtx_1650_ti_fhd_w10.jpeg",
    stock: 18
},{
    category:"technology",
    sub_category:"laptops",
    title:"HP 255 G8 (Ryzen 5-3500U / 8GB / 256GB / FHD / No OS)",
    price: 594.00,
    manufacturer:'hp',
    description:"The HP 255 Laptop is a low-cost 15.6-inch laptop with AMD processor and basic collaboration tools.", 
    rating:{rate: 4.5,count:38},
    img:"https://d.scdn.gr/images/sku_main_images/027434/27434085/20210303132623_hp_255_g8_ryzen_5_3500u_8gb_256gb_fhd_no_os.jpeg",
    stock: 23
},{
    category:"technology",
    sub_category:"laptops",
    title:"HP 255 G7 (Ryzen 3-3200U / 8GB / 256GB / FHD / W10) US Keyboard",
    price: 549.97,
    manufacturer:'lenovo',
    description:"The HP 255 G7 is ideal for simple and professional use thanks to its slim and lightweight design. With AMD's Ryzen 3 3200U processor it is capable of playing movies and other multimedia content on its 15.6-inch Full HD screen and with the fast 256GB SSD hard drive, file access and application launch will be instant.",
    rating:{rate: 4.6,count:11},
    img:"https://c.scdn.gr/images/sku_main_images/030011/30011963/20210714094845_hp_255_g7_ryzen_3_3200u_8gb_256gb_fhd_w10_us_keyboard.jpeg",
    stock: 3
},{
    category:"technology",
    sub_category:"laptops",
    title:"Apple MacBook Pro 13.3 ''(M1 / 8GB / 256GB / Retina Display / macOS) with Touch Bar (2020) Space Gray GR",
    price: 1448.99,
    manufacturer:'apple',
    description:"With the 8-core M1 processor that delivers 2.8 times more processing power and up to 5 times better graphics than the previous generation. It has a functional macOS Big Sur specially designed for the M1, Retina display, and fast and silent keyboard with touch bar.", 
    rating:{rate: 4.3,count:28},
    img:"https://a.scdn.gr/images/sku_main_images/025603/25603459/20201113112359_apple_macbook_pro_13_3_m1_8gb_256gb_retina_display_macos_with_touch_bar_2020_space_gray.jpeg",
    stock: 2
},{
    category:"technology",
    sub_category:"laptops",
    title:"Apple MacBook Pro 16 ''(i7 / 16GB / 512GB / Radeon Pro 5300M) with Touchbar (2019) Space Gray GR Keyboard",
    price: 2987.00,
    manufacturer:'apple',
    description:"Designed for those who defy boundaries and change the world, the new MacBook Pro is by far the most powerful laptop Apple has ever created. With a flagship 16 ''Retina display, high-speed processors, state-of-the-art graphics, larger battery capacity in a MacBook Pro, a new Magic Keyboard and mass storage, it is the ultimate professional laptop for the ultimate user.",
    rating:{rate: 4.9,count:14},
    img:"https://b.scdn.gr/images/sku_main_images/021035/21035814/20200624132428_apple_macbook_pro_16_i7_16gb_512gb_radeon_pro_5300m_space_gray_with_touchbar.jpeg",
    stock: 1
},{
    category:"technology",
    sub_category:"mobile_phones",
    title:"Apple iPhone 11 (64GB) White",
    price: 609.99,
    manufacturer:'apple',
    description:"12MP dual camera offers a variety of possibilities even in low light conditions, while the 12MP selfie supports 4K video and slow motion.", 
    rating:{rate: 4.6,count:657},
    img:"https://a.scdn.gr/images/sku_main_images/025603/25603459/20201113112359_apple_macbook_pro_13_3_m1_8gb_256gb_retina_display_macos_with_touch_bar_2020_space_gray.jpeg",
    stock: 31
},{
    category:"technology",
    sub_category:"mobile_phones",
    title:"Apple iPhone 11 Pro (64GB) Midnight Green",
    price: 769.00,
    manufacturer:'apple',
    description:"Camera with wide-angle lens, night mode, OIS, powerful editing tools and smart HDR. Advanced A13 Bionic chip with neural engine.",
    rating:{rate: 4.9,count:132},
    img:"https://c.scdn.gr/images/sku_main_images/020040/20040993/20200511141134_apple_iphone_11_pro_64gb_midnight_green.jpeg",
    stock: 14
},{
    category:"technology",
    sub_category:"mobile_phones",
    title:"Xiaomi Poco F3 (128GB) Night Black",
    price: 299.72,
    manufacturer:'xiaomi',
    description:"Dual speakers with Dolby Atmos, powerful Qualcomm Snapdragon 870 5G processor, LiquidCool 1.0 Plus cooling technology, Wi-Fi 6 and fast 33W charging.", 
    rating:{rate: 4.5,count:194},
    img:"https://d.scdn.gr/images/sku_main_images/028198/28198217/20210409123512_xiaomi_poco_f3_128gb_night_black.jpeg",
    stock: 27
},{
    category:"technology",
    sub_category:"mobile_phones",
    title:"Xiaomi Redmi Note 10 Pro NFC (6GB / 128GB) Onyx Gray",
    price: 256.45,
    manufacturer:'xiaomi',
    description:"6.67 ''AMOLED screen, 5020mAh battery, Quadruple 108MP camera, Snapdragon 732G processor, Screen resolution 2400x1080, 4K 30fps video recording",
    rating:{rate: 4.0,count:149},
    img:"https://d.scdn.gr/images/sku_main_images/029771/29771105/20210630105828_xiaomi_redmi_note_10_pro_nfc_6gb_128gb_onyx_gray.jpeg",
    stock: 45
},{
    category:"technology",
    sub_category:"mobile_phones",
    title:"Samsung Galaxy A32 4G (128GB) Awesome Blue",
    price: 233.90,
    manufacturer:'samsung',
    description:"Quadruple 64MP camera, 6.4 ''Super AMOLED 90Hz screen, 8-core Helio G80 processor, 5000mAh battery", 
    rating:{rate: 4.2,count:45},
    img:"https://d.scdn.gr/images/sku_main_images/027650/27650414/20210316110335_samsung_galaxy_a32_4g_128gb_blue.jpeg",
    stock: 11
},{
    category:"technology",
    sub_category:"mobile_phones",
    title:"Samsung Galaxy S20 FE (SM-G780G) (128GB) Cloud Navy",
    price: 487.96,
    manufacturer:'samsung',
    description:"The Galaxy S20 FE has a Super AMOLED screen of 6.5 inches 120Hz with a resolution of 2400x1080 pixels for a smooth user experience, 32MP front camera, three cameras on the back with wide angle lens, wide angle and telephoto lens and a 4,500 mAh battery with support for 25W fast charging technology.",
    rating:{rate: 4.8,count:8},
    img:"https://a.scdn.gr/images/sku_main_images/029603/29603317/20210622095559_samsung_galaxy_s20_fe_sm_g780g_128gb_cloud_navy.jpeg",
    stock: 8
},{
    category:"technology",
    sub_category:"televisions",
    title:"Hisense Smart LED TV 4K UHD 58A7100F HDR 58 ''",
    price: 455.01,
    manufacturer:'hisense',
    description:"4K Smart TV, HDR10 +, DTS Studio Sound, Smart features", 
    rating:{rate: 4.7,count:70},
    img:"https://b.scdn.gr/images/sku_main_images/024007/24007006/20201208100504_hisense_58a7100f_smart_4k_uhd_58.jpeg",
    stock: 19
},{
    category:"technology",
    sub_category:"televisions",
    title:"Hisense Smart LED TV 4K UHD 43A7300F HDR 43 ''",
    price: 309.00,
    manufacturer:'hisense',
    description:"Smart, 4K UHD, HDR10 +, DTS Studio Sound",
    rating:{rate: 5,count:7},
    img:"https://b.scdn.gr/images/sku_main_images/024258/24258805/20200803150411_hisense_43a7300f.jpeg",
    stock: 17
},{
    category:"technology",
    sub_category:"televisions",
    title:"LG Smart LED TV Full HD 32LM6370PLA HDR 32 ''",
    price: 268.00,
    manufacturer:'lg',
    description:"Full HD, Smart TV, HbbTV, 3 x HDMI, 2 x USB", 
    rating:{rate: 4.5,count:8},
    img:"https://d.scdn.gr/images/sku_main_images/028375/28375367/20210419124520_lg_32lm6370pla_smart_full_hd_32.jpeg",
    stock: 32
},{
    category:"technology",
    sub_category:"televisions",
    title:"LG Smart LED TV 4K UHD 43UP75006LF HDR 43 ''",
    price: 372.50,
    manufacturer:'lg',
    description:"Enjoy Real 4K UHD resolution with Active HDR to enjoy your favorite content to the fullest in stunning detail. The quad-core 4K processor upgrades your content to always give you the best viewing experience.",
    rating:{rate: 4.7,count:12},
    img:"https://d.scdn.gr/images/sku_main_images/028257/28257720/20210716153036_lg_43up75006lf_smart_4k_uhd_43.jpeg",
    stock: 16
},{
    category:"technology",
    sub_category:"televisions",
    title:"Samsung Smart LED TV 4K UHD UE55AU7172 HDR 55 ''",
    price: 484.95,
    manufacturer:'samsung',
    description:"Enjoy excellent 4K UHD resolution thanks to the Crystal Processor 4K processor, incredible detail thanks to HDR10 + support and sharp contrasts thanks to the Contrast Enhancer. Immerse yourself in your favorite Dolby Digital Plus and Q-Syphony audio for the ultimate audio experience.", 
    rating:{rate: 4.3,count:18},
    img:"https://b.scdn.gr/images/sku_main_images/027733/27733857/20210318144817_samsung_ue55au7172_smart_4k_uhd_55.jpeg",
    stock: 12
},{
    category:"technology",
    sub_category:"televisions",
    title:"Samsung Smart LED TV 4K UHD UE50TU7092 HDR 50 ''",
    price: 438.00,
    manufacturer:'samsung',
    description:"Color and details designed for you. The extremely fast Crystal Processor 4K turns everything you watch into an impressive 4K. See every detail in the clear image of the Samsung Crystal UHD TV, which has 4 times the resolution of a Full HD TV.",
    rating:{rate: 4.6,count:15},
    img:"https://c.scdn.gr/images/sku_main_images/025572/25572484/20210322153649_samsung_ue50tu7092_smart_4k_uhd_50.jpeg",
    stock: 7
},{
    category:"technology",
    sub_category:"pc_hardware",
    title:"Samsung 970 Evo Plus SSD 250GB M.2 NVMe",
    price: 54.48,
    manufacturer:'samsung',
    description:"About Samsung 970 Evo Plus offers top speeds & reliability by integrating the latest V-NAND flash memory technology, the new Phoenix controller and Intelligent TurboWrite technology improving performance in high quality games and 4K & 3D graphics processing.", 
    rating:{rate: 4.8,count:356},
    img:"https://b.scdn.gr/images/sku_main_images/017279/17279172/20190206102335_samsung_970_evo_plus_250gb.jpeg",
    stock: 5
},{
    category:"technology",
    sub_category:"pc_hardware",
    title:"Gigabyte Aorus NVMe Gen4 SSD 1.0TB M.2",
    price: 159.39,
    manufacturer:'gigabytes',
    description:"With PCI-Express 4.0x4 connection and full coverage copper heatsink.",
    rating:{rate: 4.9,count:19},
    img:"https://b.scdn.gr/images/sku_main_images/019519/19519048/20190724111930_gigabyte_aorus_nvme_gen4_1tb.jpeg",
    stock: 13
},{
    category:"technology",
    sub_category:"pc_hardware",
    title:"G.Skill Trident Z RGB 16GB DDR4 RAM with 2 Modules (2x8GB) and Frequency 3200MHz for Desktop",
    price: 83.98,
    manufacturer:'gskill',
    description:"G.Skill's Trident Z RGB series is tested for overclocking with a design that includes heat dissipation blades and a thicker RGB diffuser than standard ram. Adjusting the RGB lighting is done by the software of most motherboard manufacturers.", 
    rating:{rate: 4.9,count:164},
    img:"https://d.scdn.gr/images/sku_main_images/011105/11105234/20201013122452_g_skill_tridentz_rgb_16gb_ddr4_3200mhz_f4_3200c16d_16gtzr.jpeg",
    stock: 19
},{
    category:"technology",
    sub_category:"pc_hardware",
    title:"Cougar MX330-X Midi Tower Computer Box Black",
    price: 50.65,
    manufacturer:'cougar',
    description:"This mid-tower box is a powerful new addition to the Cougar MX series with a sleek look, functional design, durable design and a clear image of your computer's internal components.",
    rating:{rate: 4.6,count:101},
    img:"https://a.scdn.gr/images/sku_main_images/012232/12232137/20170616135739_cougar_mx330_x.jpeg",
    stock: 22
},{
    category:"technology",
    sub_category:"pc_hardware",
    title:"Sapphire Radeon RX 6600 XT 8GB Nitro +",
    price: 872.87,
    manufacturer:'sapphire',
    description:"Interface: PCI Express x16 4.0, HDMI: 1, DisplayPort: 3", 
    rating:{rate: 5,count:1},
    img:"https://c.scdn.gr/images/sku_main_images/030490/30490918/20210908142344_sapphire_radeon_rx_6600_xt_8gb_nitro_11309_01_20g.jpeg",
    stock: 2
},{
    category:"technology",
    sub_category:"pc_hardware",
    title:"AMD Ryzen 9 5900X 3.7GHz 12 Core Processor for Socket AM4 in a Box",
    price: 500.98,
    manufacturer:'amd',
    description:"The Ryzen 9 5900X with 12 cores of Zen 3 architecture, is clocked at 3.7GHz with a maximum frequency of 4.8GHz and has 64MB of cache memory. It is compatible with the AM4 socket and supports the PCIe 4.0 standard.",
    rating:{rate: 4.9,count:22},
    img:"https://c.scdn.gr/images/sku_main_images/025636/25636603/20201215162058_amd_ryzen_9_5900x_box.jpeg",
    stock: 31
}]