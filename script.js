// Official Haier Product Catalog Structured by Categories & Series
const catalogData = [
    {
        category: "❄️ Air Conditioners (ACs)",
        seriesList: [
            {
                seriesName: "1.0 Ton & 1.5 Ton Inverter AC Series",
                items: [
                    { id: 101, title: "Haier HSU-10LFCM/013USDC(W)", price: 96000, img: "https://gadgetlust.pk/wp-content/uploads/2026/01/lg_HgSJY5aPKuE16OpvuIgvEwr8odIXyASAshXaYmDJ.jpg" },
                    { id: 102, title: "Haier HSU-13HFAB/013WUSDC(W)-T3", price: 122000, img: "https://images.priceoye.pk/haier-1-0-ton-t3-inverter-hsu-13hfab-013wusdc-w-t3-pakistan-priceoye-jaumw.png" },
                    { id: 103, title: "Haier HSU-13HFAB/013WUSDC(G)-T3", price: 126000, img: "https://images.priceoye.pk/haier-1-0-ton-t3-inverter-hsu-13hfab-013wusdc-grey-t3-pakistan-priceoye-qc96z.png" },
                    { id: 104, title: "Haier HSU-14HFTEX/013WUSDC(DG)-T3", price: 137000, img: "https://images.priceoye.pk/haier-1-0-ton-t3-plus-inverter-hsu-14hftex-013wusdc-dg-t3-pakistan-priceoye-8ux2b.png" },
                    { id: 105, title: "Haier HSU-14HFTEX/013WUSDC(OW)-T3", price: 133000, img: "https://www.almumtaz.com.pk/wp-content/uploads/2025/02/W020240702664242077858_480.webp" },
                    { id: 106, title: "Haier HSU-13HFS/013/23WDC(G)/(S)-T3 Pro", price: 126000, img: "https://hadielectronics.com.pk/wp-content/uploads/2026/02/HSU-13HFS01323WDCGS-T3-PRO.webp" },
                    { id: 107, title: "Haier HSU-13HFS/013/23WDC(W)-T3 Pro", price: 122000, img: "https://electrociti.pk/cdn/shop/files/HaierAC_24.png?v=1787130320" },
                    { id: 108, title: "Haier HSU-13HFPCA/AA/043-SG-WUSDC(G,S,B)", price: 112000, img: "https://paradisecentre.pk/wp-content/uploads/2025/03/Haier-HSU-12HFTCA-012-013WSDC-S-T3-AC-on-installments-in-Lahore-1.jpg" },
                    { id: 109, title: "Haier HSU-13LF-Supreme/023-DC(W)", price: 100000, img: "https://theachub.pk/wp-content/uploads/2026/07/W020260406692834524606_1200.webp" },
                    { id: 110, title: "Haier HSU-13LF-Prime/023-DC(W)", price: 100000, img: "https://hadielectronics.com.pk/wp-content/uploads/2026/02/Haier-AC-1.1-Ton-DC-Inverter-AC-HSU-13LF.webp" },
                    { id: 111, title: "Haier HSU-12HFCA-SG/CS/CP-023/-033-USDC(W)", price: 111000, img: "https://paradisecentre.pk/wp-content/uploads/2025/03/Haier-HSU-12HFCA-SG-CS-CP-023-033-USDC-W-AC-on-installments-in-Lahore.jpg" },
                    { id: 112, title: "Haier HSU-13HFCA/013-SG/CS/CP-USDC(W)", price: 111000, img: "https://paradisecentre.pk/wp-content/uploads/2025/03/Haier-HSU-13HFCA-013-SG-CS-CP-USDC-W-AC-on-installments-in-Lahore.jpg" },
                    { id: 113, title: "Haier HSU-13HFN/013WDC(W) T3", price: 119000, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVrBWn9xbNvU8XZrzUQoohVTu77acPY1YPII1lwKdFaBX41aDeDecXAKIo&s=10" },
                    { id: 114, title: "Haier HSU-13LFCM/013USDC(W)", price: 100000, img: "https://www.almumtaz.com.pk/wp-content/uploads/2026/01/Untitled-design-2026-01-27T111137.771.webp" },
                    { id: 115, title: "Haier HSU-12CFCP/023L(W)", price: 90000, img: "https://cdn.comverseglobal.com/alfa/products/product_images/copy_of_untitled_design__17_-removebg-preview-1_200626192408732715.png" }
                ]
            },
            {
                seriesName: "1.5 Ton & 2.0 Ton Heavy Duty Inverter Series",
                items: [
                    { id: 116, title: "Haier HSU-20HJUV/013WUSDC(G)-T3", price: 208000, img: "https://bitelectronics.com.pk/wp-content/uploads/2025/01/Haier-HSU-18HJUV-UV-Inverter-Air-Conditioner-2-600x600.webp" },
                    { id: 117, title: "Haier HSU-20HJ/013WUSDC(G)-T3", price: 230000, img: "https://www.bees.com.pk/cdn/shop/files/imgi_52_W020210515848174147974_1200_7c9fb8bc-afb2-4189-a671-447c648997f9.webp?v=1784273953&width=1200" },
                    { id: 118, title: "Haier HSU-19HFN/013WDC(W) T3", price: 147000, img: "https://elux.com.pk/cdn/shop/files/Haier_T3_Inverter_1.png?v=1780397608" },
                    { id: 119, title: "Haier HSU-19HFS/013/23WDC(W)-T3 Pro", price: 151000, img: "https://lahorelectronics.com/wp-content/uploads/2023/05/19HFS-T3-pro-inverter-white-.webp" },
                    { id: 120, title: "Haier HSU-19HFS/013/23WDC(S-G)-T3 Pro", price: 156000, img: "https://powerhouseexpress.com.pk/cdn/shop/files/haier-hsu-19hfs-super-t3-pro-1-5-ton-inverter-ac_ce283639-3bc4-464d-91b8-1b39e17778f3.webp?v=1781398095&width=416" },
                    { id: 121, title: "Haier HSU-19HFAB/013WUSDC(W)-T3", price: 151000, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTx0mfxdD3B-GO3P80MVg7t9dZEvmcn-dMo86buEuxQBQ&s=10" },
                    { id: 122, title: "Haier HSU-19HFAB/013WUSDC(G)-T3", price: 156000, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ08ooEH91ZxmQQZxKeGMJi4Gk66Fwl-iIm5_cs3zKsOu4wusg90zqXLQKo&s=10" },
                    { id: 123, title: "Haier HSU-20HFTEX/013WUSDC(OW)-T3", price: 169000, img: "https://ittefaqsay.com/wp-content/uploads/2025/03/Haier-HSU-20HFTEX013WUSDCOW-T3-AC-on-installments-in-Lahore.webp" },
                    { id: 124, title: "Haier HSU-20HFTEX/013WUSDC(DG)-T3", price: 175000, img: "https://ittefaqsay.com/wp-content/uploads/2025/03/Haier__HSU-14HFTEX_T3c1.5_Ton__Inverter.webp" },
                    { id: 125, title: "Haier HSU-18HFPCA/AA/043-SG-WUSDC(G,S,B)", price: 137000, img: "https://www.almumtaz.com.pk/wp-content/uploads/2024/04/Haier-HSU-18HFPCA-1.5-Ton-Inverter-AC-1.webp" },
                    { id: 126, title: "Haier HSU-19HFPA/AA/013-SG-WUSDC(G,S,B)", price: 137000, img: "https://bitelectronics.com.pk/wp-content/uploads/2025/01/group-pic-600x600-1.webp" },
                    { id: 127, title: "Haier HSU-18HFCA/023-SG/CS/023/CP/023-USDC(W)", price: 126000, img: "https://www.almumtaz.com.pk/wp-content/uploads/2024/04/Haier-HSU-12HFCA-Triple-Inverter-Air-Conditioner-6.webp" },
                    { id: 128, title: "Haier HSU-19HFCA/013-SG/CS/CP-USDC(W)", price: 126000, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQijzy6fZurDqst3tzgmPyVlPoW953LWIl-E7B26jcHpg&s=10" },
                    { id: 129, title: "Haier HSU-19HUS/013WDC(W) Ultra Saver", price: 125000, img: "https://www.bees.com.pk/cdn/shop/files/imgi_42_W020260406677482825918_1200_084d28e5-c3f8-4365-9e74-287775f13e2c.png?v=1783585081&width=1200" },
                    { id: 130, title: "Haier HSU-19LFCM/013USDC(W)", price: 126000, img: "https://paradisecentre.pk/wp-content/uploads/2025/03/Haier-HSU-19LFCM013USDCW-AC-on-installments-in-Lahore.jpg" },
                    { id: 131, title: "Haier HSU-19LF-Supreme/023-DC(W)", price: 126000, img: "https://www.hcsupermart.com/wp-content/uploads/2026/02/Artboard-1-3.jpg" },
                    { id: 132, title: "Haier HSU-19LF-Prime/023-DC(W)", price: 126000, img: "https://www.newaftabcenter.com/cdn/shop/files/W020260404677732501277_1200.webp?v=1781951002&width=720" },
                    { id: 133, title: "Haier HSU-18CFCP/023L(W)", price: 116000, img: "https://ittefaqsay.com/wp-content/uploads/2026/02/HSU-18CFCP023LW-Haier-Air-Conditioner.webp" },
                    { id: 134, title: "Haier HSU-24HFAB/013WUSDC(W)-T3 Pro", price: 203000, img: "https://lahorelectronics.com/wp-content/uploads/2026/02/Haier-2-ton-24HFAB.webp" },
                    { id: 135, title: "Haier HSU-24HFAB/013WUSDC(Grey)-T3 Pro", price: 209000, img: "https://lahorelectronics.com/wp-content/uploads/2026/02/HSU-24HFAB-Haier-T3-2-Ton.webp" },
                    { id: 136, title: "Haier HSU-24HFCD/013USDC(W)", price: 196000, img: "https://lahorelectronics.com/wp-content/uploads/2021/05/hsu-24hfcd.jpg" },
                    { id: 137, title: "Haier HSU-24CFCM/023L(W)", price: 167000, img: "https://theachub.pk/wp-content/uploads/2026/08/W020260404690743650005_1200.webp" }
                ]
            },
            {
                seriesName: "Solar Hybrid & Commercial Floor Standing ACs",
                items: [
                    { id: 138, title: "Solar Hybrid-III & IV (OW)-T3 Plus 1.5 Ton", price: 182000, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4AQESQyHeo4f6WtBQLeuAegSXxazpKSVS602QrVLETA&s=10" },
                    { id: 139, title: "Solar Hybrid-IV(OW)-T3 Plus 2 Ton", price: 212000, img: "https://lahorelectronics.com/wp-content/uploads/2023/08/haier-solar-ac-Copy-510x455.webp" },
                    { id: 140, title: "Solar Hybrid-IV FS (W)-T3 Plus Floor Standing 2 Ton", price: 303000, img: "https://www.bees.com.pk/cdn/shop/files/imgi_38_W020260403688077887409_1200.png?v=1783587221&width=1200" },
                    { id: 141, title: "Haier HPU-24HJ/013WSDC(G) T3 Plus", price: 324000, img: "https://www.usamaelectronics.pk/cdn/shop/files/24HJ3.webp?v=1757578211&width=720" },
                    { id: 142, title: "Haier HPU-24HDZUV/013WSDC(W)", price: 294000, img: "https://lahorelectronics.com/wp-content/uploads/2026/02/Haier-24HDZUV-T3-Plus-Inverter.webp" },
                    { id: 143, title: "Haier HPU-24HDZCA/013WSDC(W)", price: 284000, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUyqaszrfD7R7bq19NmohpyhMUk4L1JSgGqSB-DMe1jlf6EeFoljJtwkTE&s=10" },
                    { id: 143, title: "Haier HPU-24HE/012WSDC(X-IK)-T3", price: 263000, img: "https://www.almumtaz.com.pk/wp-content/uploads/2025/02/pixelcut-export.webp" },
                    { id: 143, title: "Haier HPU-24CE03/X-IK", price: 215000, img: "https://www.almumtaz.com.pk/wp-content/uploads/2024/03/Untitled-design-40.webp" }
                ]
            }
        ]
    },
    {
        category: "🧊 Refrigerators",
        seriesList: [
            {
                seriesName: "Inverter Series",
                items: [
                    { id: 201, title: "Haier HRF-246 IPRA/IPGA (New Launch 2025)", price: 73000, img: "https://www.surmawala.pk/cdn/shop/files/246-ipg.png?v=1775478545" },
                    { id: 202, title: "Haier HRF-276 IPRA/IPGA (New Launch 2025)", price: 78000, img: "https://aielectronics.pk/wp-content/uploads/2025/09/HRF-276-IPRAIPGANEW.webp" },
                    { id: 203, title: "Haier HRF-316 IPRA/IPGA (New Launch 2024)", price: 87000, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSq0g0QfXJOQqkjgMs3Apw1s4tMGpUKubfzTvn_QJ6zNg&s=10" },
                    { id: 204, title: "Haier HRF-346 IPRA/IPGA (New Launch 2024)", price: 91000, img: "https://www.surmawala.pk/cdn/shop/files/346-ipra.png?v=1775483506" },
                    { id: 205, title: "Haier HRF-418 IPRA/IPGA/IPPA (New Launch 2026)", price: 104000, img: "https://www.surmawala.pk/cdn/shop/files/lg_lSVWPRNrShlRMjUmLJcXh4ZwQB2SlypBPYxrHDR7.jpg?v=1775484825" },
                    { id: 206, title: "Haier HRF-458 IPRA/IPGA/IPPA (New Launch 2026)", price: 109000, img: "https://www.surmawala.pk/cdn/shop/files/haier-276ipra_grande.png?v=1775485250" },
                    { id: 207, title: "Haier HRF-538 IPRA/IPGA/IPPA (New Launch 2026)", price: 117000, img: "https://www.surmawala.pk/cdn/shop/files/haier-276ipra.png?v=1775485250" },
                    { id: 208, title: "Haier HRF-316 IDGA/IDRGA (New Launch 2026)*", price: 93000, img: "https://www.hcsupermart.com/wp-content/uploads/2024/09/W020240227648144079141_1200-300x300.webp" },
                    { id: 209, title: "Haier HRF-346 IDGA/IDRGA (New Launch 2026)*", price: 97000, img: "https://www.surmawala.pk/cdn/shop/files/lg_T5T6Fot49wsXnotxNn3tKU4EuD3eRZY0rwUaznno.jpg?v=1775485250" },
                    { id: 210, title: "Haier HRF-418 IDGA/IDRGA (New Launch 2026)*", price: 109000, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDzSjKWw2RTXsZq_ICZ2CpLmZKJXJheWKNtldu6XD7gw&s=10" },
                    { id: 211, title: "Haier HRF-458 IDGA/IDRGA (New Launch 2026)*", price: 114000, img: "https://madinaelectriccentre.com/wp-content/uploads/2026/04/HRF-458IDRGA-600x600.webp" },
                    { id: 212, title: "Haier HRF-538 IDGA/IDRGA (New Launch 2026)*", price: 124000, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwy7J01AR2wB-DpE3DMsN5iN8kutQigykcUhQK1sq_9A&s=10" },
                    { id: 213, title: "Haier HRF-316 IAPA+/IARA+", price: 93000, img: "https://www.telex.pk/cdn/shop/files/lg_hOMaqA1cKwepsYAJWJ8mdbdkYdPKS99Z7f4XNize_684x752.jpg?v=1782820308" },
                    { id: 214, title: "Haier HRF-346 IAPA+/IARA+ Anti-Bacterial Digital Inverter Refrigerator 12 Cubic Feet", price: 97000, img: "https://static-01.daraz.pk/p/3229af54255c313f80d2e915036d408a.jpg" },
                    { id: 215, title: "Haier HRF-418 IAPA+/IARA+ Digital Inverter Refrigerator", price: 109000, img: "https://www.lahorecentre.com/cdn/shop/files/HaierHRF-418IAPA_DigitalInverterRefrigerator.jpg?v=1788435842&width=600" },
                    { id: 216, title: "Haier HRF-458 IAPA+/IARA+ 16 Cu Ft Inverter Refrigerator", price: 114000, img: "https://www.hcsupermart.com/wp-content/uploads/2024/09/W020230314459702232276_1200.webp" },
                    { id: 217, title: "Haier Inverter Anti-bacterial Refrigerator HRF-538 IARA+/ IAPA+", price: 124000, img: "https://www.lahorecentre.com/cdn/shop/files/Haier-Inverter-Anti-bacterial-Refrigerator-HRF-538-IAPA_-IARA.png?v=1778249837&width=1200" },
                    { id: 218, title: "Haier HRF-316 IFGA/IFRA Digital Inverter Refrigerator", price: 96000, img: "https://www.almumtaz.com.pk/wp-content/uploads/2025/02/Haier-HRF-316-IFGA-IFRA-IFPA-11-CFT-Digital-Inverter-Refrigerator.webp" },
                    { id: 219, title: "Haier HRF-346 IFGA/IFRA Digital Inverter Refrigerator", price: 101000, img: "https://www.almumtaz.com.pk/wp-content/uploads/2025/02/Haier-HRF-316-IFGA-IFRA-IFPA-11-CFT-Digital-Inverter-Refrigerator-1.webp" },
                    { id: 220, title: "Haier HRF-418 IFGA/IFRA/IFPA (New Launch 2026)*", price: 114000, img: "https://www.almumtaz.com.pk/wp-content/uploads/2026/02/Untitled-design-2026-02-02T143930.755.webp" },
                    { id: 221, title: "Haier HRF-458 IFGA/IFRA/IFPA (New Launch 2026)*", price: 119000, img: "https://www.almumtaz.com.pk/wp-content/uploads/2026/02/Untitled-design-2026-02-02T143930.755-1.webp" },
                    { id: 222, title: "Haier Haier HRF-538 IFGA/IFRA/IFPA Digital Inverter Refrigerator", price: 127000, img: "https://www.almumtaz.com.pk/wp-content/uploads/2025/02/Haier-HRF-368-IFPA-Refrigerator-Inverter-1.webp" },
                    { id: 223, title: "Haier HRF-418 TIFG1U1/TIFB1U1 (IOT) (New Launch 2026)*", price: 119000, img: "https://www.surmawala.pk/cdn/shop/files/438-iot.png?v=1775543523" },
                    { id: 224, title: "Haier HRF-458 TIFG1U1/TIFB1U1 (IOT) (New Launch 2026)*", price: 124000, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQg6SJOJW4vwmol1HpQGt6h52DnouhmwmJ5l1w_y9dKmA&s=10" },
                    { id: 225, title: "Haier HRF-538 TIFG1U1/TIFB1U1 (IOT)", price: 131000, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiw7nFXoTCPyWkBmlst0P_3WiLlkwbEHJv5ItRJZJAJJh97Ui4wgK72Kvn&s=10" }
                
                ]
            },
            {
                seriesName: "E-Star WB Series",
                items: [
                    { id: 226, title: "Haier HRF-186 EBS/EBD", price: 50000, img: "https://img.drz.lazcdn.com/static/pk/p/2f446828048005e47503cf4ed9e75ed8.jpg_720x720q80.jpg" },
                    { id: 227, title: "Haier HRF-216 EBS/EBD", price: 60000, img: "https://subhanelectronics.pk/wp-content/uploads/2026/04/HRF-216-EBS.jpg" },
                    { id: 228, title: "Haier HRF-216 EPB/EPR/EPCGA (Glass Door)", price: 63000, img: "https://www.surmawala.pk/cdn/shop/products/216-epc-epr-epb-01_1_1.png?v=1701418847" },
                    { id: 229, title: "Haier HRF-246 EBS/EBD", price: 62000, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTr96tV8aqA_IWX_CnLfXYJ7mCiGqmCFmyK_GGP6OPeYQ&s" },
                    { id: 230, title: "Haier HRF-246 EPB/EPR/EPCGA (Glass Door)", price: 69000, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuQWJB0As4ZO-tDgXOroH87_Cux3qZcjEnLwPd_5sZPQ&s=10" },
                    { id: 231, title: "Haier HRF-276 EBS/EBD", price: 68000, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSa_KbbH6cO5bDsHfh7sVn6uJf_-VjZ1LWCdjPIDClDrA&s=10" },
                    { id: 232, title: "Haier HRF-276 EPB/EPR/EPCGA (Glass Door)", price: 74000, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbgUqw897XCcNx5djf91L4djjfNvLbKtsmPUdX-wMuuA&s=10" },
                    { id: 233, title: "Haier HRF-316 EPB/EPR/EPCGA (Glass Door)", price: 83000, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCjzIWIXyR5KH-c6ah_TitXKome2cpoYXk_UzyD87B9g&s=10" },
                    { id: 234, title: "Haier HRF-346 EPB/EPR/EPCGA (Glass Door)", price: 87000, img: "https://www.surmawala.pk/cdn/shop/files/imgi_42_W020250428493726835698_1200.jpg?v=1775478149" }
                ]
            },
            {
                seriesName: "Side by Side (SBS) Series",
                items: [
                    { id: 235, title: "Haier HRF-578TBG Side by Side", price: 210000, img: "https://www.almumtaz.com.pk/wp-content/uploads/2025/02/Haier-HRF-578TBP-Side-By-Side-Refrigerator-2-1.webp" },
                    { id: 236, title: "Haier HRF-578 TSG T-Door Inverter Side By Side Refrigerator", price: 210000, img: "https://electrociti.pk/cdn/shop/files/HaierHRF-578TSGT-DoorInverterSideBySideRefrigerator_014de36b-8ed7-4e6b-bcc6-9fe373b7195c.png?v=1786430602&width=823" },
                    { id: 237, title: "HRF-578 TBGU1 (IOT)", price: 213000, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmIIefEJ3tQp0K8sJ7jhFGApTf-2LtU916VYDNI_kfzg&s=10" },
                    { id: 238, title: "Haier HRF-578 TGGU1 (IOT) Side By Side Refrigerator", price: 213000, img: "https://electrociti.pk/cdn/shop/files/HaierHRF-578TSGTDoorInverterSBSRefrigerator_580x_495ed3d5-6f3c-4fee-85bc-9bb941cc0586.webp?v=1782554935&width=823" },
                    { id: 239, title: "Haier Refrigerator - Model HRF-622 ICG (Glass Door) Side by Side", price: 250000, img: "https://www.surmawala.pk/cdn/shop/files/622icg.png?v=1775544580" },
                    { id: 240, title: "Haier Refrigerator| Model HRF-622 IBG (GLASS DOOR) Side by Side", price: 255000, img: "https://www.surmawala.pk/cdn/shop/files/622-ibg.png?v=1775544845" },
                    { id: 241, title: "HRF-622IIBG", price: 240000, img: "https://afzalcorp.com.pk/wp-content/uploads/2026/04/HRF-622-IBS.jpg" },
                    { id: 242, title: "Haier HRF-678TG Luxury Inverter", price: 340000, img: "https://www.surmawala.pk/cdn/shop/files/haier-678.png?v=1775558112" }
                ]
            },
            {
                seriesName: "Deep Freezer",
                items: [
                    { id: 243, title: "Haier HDF-175 Inverter / IG", price: 59000, img: "https://www.aysonline.pk/wp-content/uploads/2026/05/Haier-Deep-Freezer-HDF-175-IG-Inverter-Grey-01.png" },
                    { id: 244, title: "Haier HDF-230 Inverter", price: 65000, img: "https://www.surmawala.pk/cdn/shop/files/Haier-HDF-230-Inv-Inverter-Deep-Freezer-3.webp?v=1775668742" },
                    { id: 245, title: "Haier HDF-320 Inverter", price: 76000, img: "https://aielectronics.pk/wp-content/uploads/2025/09/Haier-HDF-320-Large-open-door.webp" },
                    { id: 246, title: "Haier HDF-285", price: 79000, img: "https://lahorelectronics.com/wp-content/uploads/2021/06/hdf-286.jpg" },
                    { id: 247, title: "Haier HDF-405", price: 98000, img: "https://www.surmawala.pk/cdn/shop/files/hiaer-405.jpg?v=1775663899" },
                    { id: 248, title: "Haier HDF-465 Inverter (New)", price: 107000, img: "https://haris-traders.com/cdn/shop/files/images_36_1400x.jpg?v=1786092442" },
                    { id: 249, title: "HAIER I Deep Freezer - Model HDF 545 DD Non-Inverter (19 Cubic Feet) -Double Door", price: 126000, img: "https://www.surmawala.pk/cdn/shop/files/545dd.jpg?v=1775670801" },
                    { id: 250, title: "HDF-385 H", price: 93000, img: "https://shandaarbuy.pk/cdn/shop/files/Haier_385_H_double_door_white_large.jpg?v=1775645789" },
                    { id: 251, title: "Haier HDF-535 Inverter (New)", price: 119000, img: "https://www.surmawala.pk/cdn/shop/files/535i.jpg?v=1775670425" },
                    { id: 252, title: "Haier HDF-245 INVERTER / IG", price: 80000, img: "https://subhanelectronics.pk/wp-content/uploads/2026/02/HDF-245-1.webp" },
                    { id: 253, title: "Haier HDF-285 INVERTER / IG", price: 83000, img: "https://static-01.daraz.pk/p/d99dff7dda62623befe3596d099c3b00.jpg" },
                    { id: 254, title: "Haier HDF-405 INVERTER / IG", price: 103000, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSs44FfnY46DP1j2UD4mP0Y8hhwZDKiMz13aJbTYTz2wGLHu3gXX7zQRTg&s=10" },
                    { id: 255, title: "Haier HDF-545 INVERTER", price: 135000, img: "https://subhanelectronics.pk/wp-content/uploads/2026/02/HDF-545.jpeg" },
                    { id: 256, title: "Haier HDF-385 INVERTER / IG", price: 134000, img: "https://www.surmawala.pk/cdn/shop/files/385ig-grey_grande.jpg?v=1775671147" },
                    { id: 257, title: "Haier HDF-345 INVERTER / IG", price: 90000, img: "https://www.surmawala.pk/cdn/shop/files/345ig.jpg?v=1775669488" }
                ]
              }
        ]
    },
    {
        category: "🧺 Washing Machines",
        seriesList: [
            {
                seriesName: "Fully Automatic Washing Machines",
                items: [
                    { id: 401, title: "Haier HWM100-1269S6", price: 52000, img: "https://mns.com.pk/wp-content/uploads/2026/08/Haier-100-1269s6.webp" },
                    { id: 402, title: "Haier HWM90-826E", price: 57000, img: "https://img.drz.lazcdn.com/static/pk/p/25b3f2fd9d659de173ad5c6a6e4febae.jpg_720x720q80.jpg_.webp" },
                    { id: 403, title: "Haier HWM100-826S6", price: 63000, img: "https://static-01.daraz.pk/p/0647ca07a4d682a6734166418c2ef813.jpg" },
                    { id: 404, title: "Haier HWM100-316HS8", price: 69000, img: "https://mns.com.pk/wp-content/uploads/2026/08/200757F9.webp" },
                    { id: 405, title: "Haier HWM100-316S6", price: 68000, img: "https://www.surmawala.pk/cdn/shop/files/100-316_grande.jpg?v=1776186383" },
                    { id: 406, title: "Haier HWM110-688S8", price: 70000, img: "https://www.surmawala.pk/cdn/shop/files/110-haie.jpg?v=1776186550" },
                    { id: 407, title: "Haier HWM110-B688S8", price: 78000, img: "https://www.surmawala.pk/cdn/shop/files/110-haie_grande.jpg?v=1776186550" },
                    { id: 408, title: "Haier HWM120-826S6", price: 77000, img: "https://img.drz.lazcdn.com/static/pk/p/adf9555bc5d3c1c3d9f9c34361c5d05c.jpg_720x720q80.jpg" },
                    { id: 409, title: "Haier HWM120-316S6", price: 80000, img: "https://static-01.daraz.pk/p/e3f0ce563bf96a1be013bdbd6ff0bd78.jpg" },
                    { id: 410, title: "Haier HWM130-688S8", price: 85000, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSU7YSo4u8O2QI1-C2nt0a4ABf7kZTn9zI0gK3MrdEs5z7kMjxk0HAfqqFd&s=10" },
                    { id: 411, title: "Haier HWM130-B699S8", price: 96000, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7_Z8QQNKXrqGBXpuq8dJHdSVKobvkciBSJOMsM58PjpUw1ZQn8tKCiMI&s=10" },
                    { id: 412, title: "Haier HWM150-826S6", price: 85000, img: "https://static-01.daraz.pk/p/adf9555bc5d3c1c3d9f9c34361c5d05c.jpg" },
                    { id: 413, title: "Haier HWM150-316S6", price: 90000, img: "https://www.surmawala.pk/cdn/shop/files/150-316.jpg?v=1776187571" },
                    { id: 414, title: "Haier HWM150-688S8", price: 94000, img: "https://friendshome.pk/cdn/shop/files/123456_d2b32dbd-63e5-477f-b59e-6e66ce727e1a.jpg?v=1779119106&width=1000" },
                    { id: 415, title: "Haier HWM150-B699S8", price: 105000, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR83ol4lFOMSL8v3A-Ujb4sXfC-YWfD6d9Mh9iLnsMFqSXj3F-z34qH5y0&s=10" }
                ]
            },
            {
                seriesName: "Front Load Washing Machines",
                items: [
                    { id: 416, title: "Haier HW90-BP12357S8 Inverter (New)", price: 145000, img: "https://friendshome.pk/cdn/shop/files/HW90BP-12357S8_094a2533-2ff7-4010-bc29-10890ac3c5b0.jpg?v=1782550924&width=1000" },
                    { id: 417, title: "Haier HW100-BP12357S8 Inverter (New)", price: 155000, img: "https://www.aysonline.pk/wp-content/uploads/2026/07/Haier-Washing-Machine-HW100-BP12357S8-05.png" },
                    { id: 418, title: "Haier HW120-BP12357S8", price: 170000, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTn1bSpU13F3iV1aAmU1MFZRU74zjhGzbb54uLPJy8gjJFBgO_KXinh04fa&s=10" },
                    { id: 419, title: "Haier HWD120-BP12375S8-Inverter (New)", price: 210000, img: "https://www.hcsupermart.com/wp-content/uploads/2026/07/haier-front-load-washing-machine-new-model.webp" },
                    { id: 420, title: "Haier HWD140-BPD14387GNU1 (New)", price: 250000, img: "https://statice.homepro.co.th/homepromy/ART_IMAGE/10/844/1084427/447x447/29122025_1084427$Imagec4.jpg" }
                    
                ]
            },
            {
                seriesName: "Semi-Auto Washing Machines",
                items: [
                    { id: 421, title: "Haier HWM 50-60", price: 18000, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStf27TjPoh3gavWT_zuumqbpjcQFV9Wi0U2nsPXg6cv0dEh4oTLX7wl3xj&s=10" },
                    { id: 422, title: "Haier HWM 80-60", price: 20000, img: "https://www.goshop.pk/wp-content/uploads/2020/07/Haier-Washing-Machine-HWM-80-60-1.jpg" },
                    { id: 423, title: "Haier HWS80-60 E:04 (New)", price: 19500, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUF3bFhqbk1V6lyFWVq8myMgfIIE9T_tGkS70-evrvUy9cv5visVemr7ZM&s=10" },
                    { id: 424, title: "Haier HWS80-60 G:04", price: 20500, img: "https://afzalcorp.com.pk/wp-content/uploads/2026/04/HWS8060.jpg" },
                    { id: 425, title: "Haier HWM 80-1217 WB (New)", price: 20500, img: "https://static-01.daraz.pk/p/f6a229570b132a79a5b95f6735146820.jpg" },
                    { id: 426, title: "Haier HWM 80-1217-E (New)", price: 20000, img: "https://friendshome.pk/cdn/shop/files/Untitledproject_80_efe89601-3c42-41db-a4f6-3406697c0af0_1.jpg?v=1728548725&width=2048" },
                    { id: 427, title: "Haier HWM 120-35FF", price: 26000, img: "https://www.surmawala.pk/cdn/shop/files/imgi_69_9614158e44c1f2bf698ab5a0354da888.jpg?v=1776147543" },
                    { id: 428, title: "Haier HWM 130-1217WB (White) (New)", price: 27000, img: "https://img.drz.lazcdn.com/static/pk/p/cec9949a5c526c2722ae651720b777be.jpg_720x720q80.jpg" },
                    { id: 429, title: "Haier HWM 130-1217GB (Grey) (New)", price: 27500, img: "https://www.aysonline.pk/wp-content/uploads/2025/02/HAIER-WASHING-MACHINE-80-1217-WB-G-1.png" },
                    { id: 430, title: "Haier HWM 130-1217-E (New)", price: 26500, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSpLsvxnvzDBmZsHKbiKSPU0J1dt9YRW7bH2ktrrZJVg&s=10" },
                    { id: 431, title: "Haier HWM 75AS", price: 265000, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTd1VxtVB5l7mEQxtJ5RLSZpgEjfYr4xoWC6ulIWTGf8ueI58uZO6K24HY&s=10" },
                    { id: 432, title: "Haier HWM 80-CS (New)", price: 27500, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQu-gFihFvtxpMyOwFhcDw9Qnv3K_bbwXZ4XqInziUYnA&s=10" },
                    { id: 433, title: "Haier HTW100-196E (New)", price: 33000, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRlhJd_fs0XP_S9BJatDDnj7BhQ4qVJ_AjIaWjRnH3gk_Lqcwb84a5pl2A&s=10" },
                    { id: 434, title: "Haier HTW 100-196G (New)", price: 34500, img: "https://img.drz.lazcdn.com/static/pk/p/b7e924582a30fd8a9c308434916c0779.jpg_720x720q80.jpg_.webp" },
                    { id: 435, title: "Haier HWM 120AS", price: 47000, img: "https://www.surmawala.pk/cdn/shop/files/120as.png?v=1776151151" },
                    { id: 436, title: "Haier HTW100-1217 / S (New)", price: 33500, img: "https://lahorelectronics.com/wp-content/uploads/2022/05/hairwashingmachine-htw100-1217.webp" }
                ]
            }
        ]
    },
    {
        category: "📺 Smart LED TVs",
        seriesList: [
            {
                seriesName: "Haier Smart & QLED Series",
                items: [
                    { id: 501, title: "Haier H32K85FX (32\")", price: 49500, img: "https://fullspecs.net/images/products/12114_0_haier-h32k85fx-008392035dd7c6fb3e692b6471ea2e05.jpg" },
                    { id: 502, title: "Haier H32S80EFX (32\")", price: 50000, img: "https://static-01.daraz.pk/p/f4447ddd86f53eb5b9522e7abb607110.jpg" },
                    { id: 503, title: "Haier H40K85FFX (40\")", price: 65000, img: "https://img.drz.lazcdn.com/static/pk/p/dd5b9d3cc5e1be65c958af164f77e381.jpg_720x720q80.jpg" },
                    { id: 504, title: "Haier H40K800FX (40\")", price: 65000, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIfOgJsLWN_Pg2RA-YY9pUwr16poGF9E40muc2RN7OAA&s=10" },
                    { id: 505, title: "Haier H43K85FFX (43\")", price: 75000, img: "https://static-01.daraz.pk/p/0a03b4d34df1b1ee39049235af102bdd.jpg" },
                    { id: 506, title: "Haier H50S80GFX 2K QLED (50\")", price: 89000, img: "https://i.ytimg.com/vi/ZKh-J5UZY74/maxresdefault.jpg" },
                    { id: 507, title: "Haier H55K85EUX (55\")", price: 116000, img: "https://lahorelectronics.com/wp-content/uploads/2021/06/haier-led-.webp" },
                    { id: 508, title: "Haier H65K85EUX (65\")", price: 187000, img: "https://lahorelectronics.com/wp-content/uploads/2021/06/haier-led-.webp" },
                    { id: 509, title: "Haier H75K85EUX (75\")", price: 237000, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-lRU8bC_Lju7naBl_sijrVKcwAEO6QmTry2vPbmilBuaQvOmQYExufnrP&s=10" },
                    { id: 510, title: "Haier H43S80/81 EUX (43\")", price: 91000, img: "https://lahorelectronics.com/wp-content/uploads/2021/06/h43k66ug.png" },
                    { id: 511, title: "Haier H50S80/81 EUX/GUX (50\")", price: 108000, img: "https://images.priceoye.pk/haier-50-inch-qled-google-tv-h50s80eux-pakistan-priceoye-nar0j.png" },
                    { id: 512, title: "Haier H55S80/81 EUX (55\")", price: 127000, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRH80a8v7Id0wrR-fnLGOu5EhbC1xY6lECgOZXUCEkihLtkqyTRCeCrBP4&s=10" },
                    { id: 513, title: "Haier H65S80/81 EUX (65\")", price: 190000, img: "https://images.priceoye.pk/haier-65-inch-qled-google-tv-h65s80eux-pakistan-priceoye-mt0u4.png" },
                    { id: 514, title: "Haier H75S80/81 EUX (75\")", price: 171000, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8eAumzpYQEMaxi95m_NzN6I6ic2j7aQueSNBii5ftCjlakli0etkAuQI&s=10" },
                    { id: 515, title: "Haier H55S85 (55\")", price: 140000, img: "https://static-01.daraz.pk/p/df762edec4392fcef289dd4dbb01aeb3.jpg" },
                    { id: 516, title: "Haier H65S85 (65\")", price: 202000, img: "https://cdn.mafrservices.com/pim-content/PAK/media/product/298662/1753261204/298662_main.jpg" },
                    { id: 517, title: "Haier 75S85 (75\")", price: 297000, img: "https://switchelectro.ma/cdn/shop/files/Captured_ecran2026-06-25204908.png?v=1782415693" },
                    { id: 518, title: "Haier H55M80FUX (55\")", price: 165000, img: "https://m.media-amazon.com/images/I/71c6Uyc7iUL._AC_UF1000,1000_QL80_.jpg" },
                    { id: 519, title: "Haier H65M80FUX (65\")", price: 225000, img: "https://m.media-amazon.com/images/I/717NWPvQKLL._AC_UF1000,1000_QL80_.jpg" },
                    { id: 520, title: "Haier H75M80FUX (75\")", price: 320000, img: "https://m.media-amazon.com/images/I/71cwDOWvAdL._AC_UF1000,1000_QL80_.jpg" },
                    { id: 521, title: "Haier H85M80FUX (85\")", price: 475000, img: "https://i.gadgets360cdn.com/products/large/M80-1-800x484-1761827842.jpg?downsize=*:360" },
                    { id: 522, title: "Haier H100S90FUX (100\")", price: 835000, img: "https://orient-electronics.com/wp-content/uploads/2026/06/h100s90fux-01-500x500-1.webp" }

                ]
            }
        ]
    },
    {
        category: "🍿 Microwave Ovens & Air Fryers",
        seriesList: [
            {
                seriesName: "Solo Series",
                items: [
                    { id: 601, title: "Haier HMW-20MXP3", price: 13872, img: "https://static-01.daraz.pk/p/4fb8123be351d28b10a9638f6ced1397.jpg" },
                    { id: 602, title: "Haier HMW-20MPB", price: 13863, img: "https://static-01.daraz.pk/p/7a34bb144b58c1c538ca507b47d8a491.jpg" },
                    { id: 603, title: "Haier HMW-20MPS", price: 13863, img: "https://img.drz.lazcdn.com/static/pk/p/1dd7294f2197fde1639bef0dd81445ff.png_720x720q80.png" },
                    { id: 604, title: "Haier HMW-20MBS", price: 13863, img: "https://www.surmawala.pk/cdn/shop/files/haier-20mbs.png?v=1776236424" },
                    { id: 605, title: "Haier HMW-20MX11", price: 16277, img: "https://aielectronics.pk/wp-content/uploads/2026/02/20MX11-left.webp" },
                    { id: 606, title: "Haier HMW-20MX12", price: 16781, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTksms313ZLOktUKmXX9gMxCXO4AMnq1qnUCU76URjCvSuI1wEs-eR89FTp&s=10" },
                    { id: 607, title: "Haier HMW-20MHES", price: 15938, img: "https://elux.com.pk/cdn/shop/files/HaierHMW-20MHESMicrowaveOven_1_800x.jpg?v=1789112252" },
                    { id: 608, title: "Haier HMW-20DSS", price: 17483, img: "https://www.aysonline.pk/wp-content/uploads/2025/02/HAIER-MICROWAVE-OVEN-HMW-20DSS-3.png" },
                    { id: 609, title: "Haier HMW-25MXP9", price: 21667, img: "https://static-01.daraz.pk/p/11a479523769a7af1f10222a4bc089b8.jpg" },
                    { id: 610, title: "Haier HMW-26MBH (New Model)", price: 23044, img: "https://electrociti.pk/cdn/shop/files/BB_42.png?v=1786973442&width=1445" },
                    { id: 611, title: "Haier HMW-26MGH (New Model)", price: 23006, img: "https://www.hcsupermart.com/wp-content/uploads/2026/04/W020260331494452005882_1200.webp" },
                    { id: 612, title: "Haier HMN-62MX80", price: 45682, img: "https://img.drz.lazcdn.com/static/pk/p/b443b1edf716b343c7ba53b92c5eeade.jpg_720x720q80.jpg" }
                ]
            },
            {
                seriesName: "Grill & Convection Series",
                items: [
                    { id: 613, title: "Haier HMW-20DGS Grill Oven", price: 21015, img: "https://www.aysonline.pk/wp-content/uploads/2025/07/HAIER-MICROWAVE-OVEN-HMW-20DGS-2.jpg" },
                    { id: 614, title: "Haier HMW-23200DG Grill Oven", price: 27628, img: "https://static-01.daraz.pk/p/3395faa29eb5b7e009bfa9ea6e0d83e9.jpg" },
                    { id: 615, title: "Haier HMW-28100DG Grill Oven", price: 31216, img: "https://friendshome.pk/cdn/shop/files/UntitledProject_93_72705feb-2c81-4c6d-9cf5-26e45c173fb6.jpg?v=1721463153&width=1000" },
                    { id: 616, title: "Haier HMW-32300B (New Model) Grill Oven", price: 33202, img: "https://static-01.daraz.pk/p/872f1e68560f1f51bc4441d01fded685.jpg" },
                    { id: 617, title: "Haier HMW-32300S (New Model) Grill Oven", price: 33202, img: "https://www.surmawala.pk/cdn/shop/files/imgi_63_d353ea7895859612b48f707014cf547e.jpg?v=1776276701" },
                    { id: 618, title: "Haier HMW-45DGM (New Model) Grill Oven", price: 40713, img: "https://elux.com.pk/cdn/shop/files/HaierHMW-45DGMMicrowaveOven_3_1024x.jpg?v=1789372018" },
                    { id: 619, title: "Haier HGL-30100 Convection Oven", price: 41513, img: "https://static-01.daraz.pk/p/767456baca26cb44b7d511302df9b003.jpg" }
                ]
            },
            {
                seriesName: "Air Fryer & Air Fryer MWO Series",
                items: [
                    { id: 620, title: "Haier HAF50MBI Air Fryer", price: 16023, img: "https://www.bees.com.pk/cdn/shop/files/MODEL-_HAF50MBI.jpg?v=1784196164&width=2048" },
                    { id: 621, title: "Haier HAF50DB Air Fryer", price: 18516, img: "https://static-01.daraz.pk/p/11c929ed1ca9610099242f1e141f6d16.jpg" },
                    { id: 622, title: "Haier HMW-30AFR Air Fryer Microwave", price: 48097, img: "https://img.drz.lazcdn.com/static/pk/p/2e8e881b0149b259e4f07f9abf46f99e.jpg_2200x2200q80.jpg_.webp" },
                    { id: 623, title: "Haier HMW-30AFS Air Fryer Microwave", price: 48097, img: "https://img.drz.lazcdn.com/static/pk/p/9f26a3dc670eddc0c0c132dea8a866f1.png_960x960q80.png_.webp" }
                ]
            }
        ]
    }
];

let cart = [];
const catalogContainer = document.getElementById('catalogContainer');
const searchInput = document.getElementById('searchInput');

// Render Catalog with Headings & Series Blocks
function renderCatalog(filterText = "") {
    catalogContainer.innerHTML = "";
    let hasResults = false;

    catalogData.forEach(cat => {
        let categoryHasItems = false;
        const categorySection = document.createElement('section');
        categorySection.className = 'category-section';

        let categoryHTML = `<h2 class="category-header">${cat.category}</h2>`;

        cat.seriesList.forEach(series => {
            const filteredItems = series.items.filter(item =>
                item.title.toLowerCase().includes(filterText.toLowerCase()) ||
                series.seriesName.toLowerCase().includes(filterText.toLowerCase())
            );

            if (filteredItems.length > 0) {
                categoryHasItems = true;
                hasResults = true;

                categoryHTML += `
                    <div class="series-block">
                        <h3 class="series-title">${series.seriesName}</h3>
                        <div class="product-grid">
                            ${filteredItems.map(item => `
                                <div class="product-card">
                                    <img src="${item.img}" alt="${item.title}">
                                    <div>
                                        <h4>${item.title}</h4>
                                        <div class="price">PKR ${item.price.toLocaleString()}</div>
                                    </div>
                                    <button class="add-cart-btn" onclick="addToCart(${item.id})">Add to Order</button>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                `;
            }
        });

        if (categoryHasItems) {
            categorySection.innerHTML = categoryHTML;
            catalogContainer.appendChild(categorySection);
        }
    });

    if (!hasResults) {
        catalogContainer.innerHTML = `<div style="text-align:center; padding: 50px; color:#94a3b8; font-size:1.2rem;">No matching Haier models found for "${filterText}".</div>`;
    }
}

// Search Handler
searchInput.addEventListener('input', (e) => {
    renderCatalog(e.target.value.trim());
});

// Cart & Theme Logic
function addToCart(id) {
    let selectedItem = null;
    catalogData.forEach(cat => {
        cat.seriesList.forEach(series => {
            const found = series.items.find(i => i.id === id);
            if (found) selectedItem = found;
        });
    });

    if (selectedItem) {
        const existing = cart.find(c => c.id === id);
        if (existing) existing.qty += 1;
        else cart.push({ ...selectedItem, qty: 1 });

        updateCartUI();
        document.getElementById('cartSidebar').classList.add('open');
    }
}

function updateCartUI() {
    const cartCount = document.getElementById('cartCount');
    const cartItems = document.getElementById('cartItems');
    const cartTotal = document.getElementById('cartTotal');

    cartCount.innerText = cart.reduce((sum, item) => sum + item.qty, 0);

    if (cart.length === 0) {
        cartItems.innerHTML = '<p class="empty-msg">Your cart is empty.</p>';
        cartTotal.innerText = '0';
        return;
    }

    cartItems.innerHTML = '';
    let total = 0;

    cart.forEach(item => {
        total += item.price * item.qty;
        const div = document.createElement('div');
        div.className = 'cart-item';
        div.innerHTML = `
            <div>
                <h5 style="font-size:0.9rem;">${item.title}</h5>
                <p style="color:#38bdf8; font-size:0.85rem;">PKR ${item.price.toLocaleString()} x ${item.qty}</p>
            </div>
            <button onclick="removeFromCart(${item.id})" style="background:none; border:none; color:#ef4444; cursor:pointer; font-size:1.1rem;">&times;</button>
        `;
        cartItems.appendChild(div);
    });

    cartTotal.innerText = total.toLocaleString();
}

function removeFromCart(id) {
    cart = cart.filter(item => item.id !== id);
    updateCartUI();
}

// Event Listeners for Cart & Theme
document.addEventListener('DOMContentLoaded', () => {
    renderCatalog();

    document.getElementById('openCartBtn').addEventListener('click', () => {
        document.getElementById('cartSidebar').classList.add('open');
    });
    document.getElementById('closeCartBtn').addEventListener('click', () => {
        document.getElementById('cartSidebar').classList.remove('open');
    });

    // Theme Switcher
    const themeToggleBtn = document.getElementById('theme-toggle');
    const savedTheme = localStorage.getItem('theme');

    if (savedTheme === 'light') {
        document.body.classList.add('light-mode');
        if (themeToggleBtn) themeToggleBtn.innerText = '☀️ Light';
    }

    if (themeToggleBtn) {
        themeToggleBtn.addEventListener('click', () => {
            document.body.classList.toggle('light-mode');
            if (document.body.classList.contains('light-mode')) {
                localStorage.setItem('theme', 'light');
                themeToggleBtn.innerText = '☀️ Light';
            } else {
                localStorage.setItem('theme', 'dark');
                themeToggleBtn.innerText = '🌙 Dark';
            }
        });
    }

    // WhatsApp Order
    document.getElementById('whatsappOrderBtn').addEventListener('click', () => {
        if (cart.length === 0) {
            alert("Please add items to cart first!");
            return;
        }

        let message = "Hello Al Qaim Electronics! I want to inquire/order the following Haier products:\n\n";
        let total = 0;

        cart.forEach((item, index) => {
            message += `${index + 1}. ${item.title} (x${item.qty}) - PKR ${(item.price * item.qty).toLocaleString()}\n`;
            total += item.price * item.qty;
        });

        message += `\nTotal Estimated Price: PKR ${total.toLocaleString()}`;
        const phone = "923208209313"; // Set your exact WhatsApp number here without '+'
        window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, '_blank');
    });
});