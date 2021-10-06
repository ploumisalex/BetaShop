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