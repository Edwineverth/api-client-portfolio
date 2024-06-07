db = db.getSiblingDB('portfolioDB');
db.createCollection('client_portfolio');
db.client_portfolio.createIndex({ route: 1 }, { unique: true });
db.client_portfolio.insertMany([
    {
        "channel": "yalo",
        "country": "GV01",
        "customerCode": "9999999999",
        "items": [
            {
                "sku": "AA028021",
                "title": "GATORADE NARANJA 24/600ML PAD",
                "categoryId": "ISOTONICOS",
                "category": "GATORADE NARANJA 24/600ML PAD",
                "brand": "GATORADE",
                "classification": "ISOTONICOS",
                "unitsPerBox": "24",
                "minOrderUnits": null,
                "packageDescription": "1 box",
                "packageUnitDescription": "24 ea",
                "quantity_max_redeem": null,
                "redeem_unit": null,
                "order_reason_redeem": null,
                "sku_redeem": null,
                "price": {
                    "full_price": 190000,
                    "taxes": [
                        {
                            "taxType": "porcentaje",
                            "taxId": "MWST",
                            "rate": 120
                        }
                    ]
                },
                "points": 0
            },
            {
                "sku": "AA694868",
                "title": "STELLA ARTOIS 750 ML VNR/ 6",
                "categoryId": "CERVEZAS",
                "category": "STELLA ARTOIS 750 ML VNR/ 6",
                "brand": "STELLA ARTOIS",
                "classification": "CERVEZAS",
                "unitsPerBox": "6",
                "minOrderUnits": null,
                "packageDescription": "1 box",
                "packageUnitDescription": "6 ea",
                "quantity_max_redeem": null,
                "redeem_unit": null,
                "order_reason_redeem": null,
                "sku_redeem": null,
                "price": {
                    "full_price": 165600,
                    "taxes": [
                        {
                            "taxType": "porcentaje",
                            "taxId": "MWST",
                            "rate": 120
                        }
                    ]
                },
                "points": 0
            },
            {
                "sku": "BA011203",
                "title": "GATORA G ZERO LIMA LIMO 591X24",
                "categoryId": "ISOTONICOS",
                "category": "GATORA G ZERO LIMA LIMO 591X24",
                "brand": "GATORADE",
                "classification": "ISOTONICOS",
                "unitsPerBox": "24",
                "minOrderUnits": null,
                "packageDescription": "1 box",
                "packageUnitDescription": "24 ea",
                "quantity_max_redeem": null,
                "redeem_unit": null,
                "order_reason_redeem": null,
                "sku_redeem": null,
                "price": {
                    "full_price": 192000,
                    "taxes": [
                        {
                            "taxType": "porcentaje",
                            "taxId": "MWST",
                            "rate": 120
                        }
                    ]
                },
                "points": 0
            },
            {
                "sku": "BA011726",
                "title": "Ting 3L PET * 6",
                "categoryId": "CARBONATADAS",
                "category": "Ting 3L PET * 6",
                "brand": "TING",
                "classification": "CARBONATADAS",
                "unitsPerBox": "6",
                "minOrderUnits": null,
                "packageDescription": "1 box",
                "packageUnitDescription": "6 ea",
                "quantity_max_redeem": null,
                "redeem_unit": null,
                "order_reason_redeem": null,
                "sku_redeem": null,
                "price": {
                    "full_price": 64800,
                    "taxes": [
                        {
                            "taxType": "porcentaje",
                            "taxId": "MWST",
                            "rate": 120
                        }
                    ]
                },
                "points": 0
            },
            {
                "sku": "AA015003",
                "title": "Seven Up 3000 ML PET * 6",
                "categoryId": "CARBONATADAS",
                "category": "Seven Up 3000 ML PET * 6",
                "brand": "SEVEN UP",
                "classification": "CARBONATADAS",
                "unitsPerBox": "6",
                "minOrderUnits": null,
                "packageDescription": "1 box",
                "packageUnitDescription": "6 ea",
                "quantity_max_redeem": null,
                "redeem_unit": null,
                "order_reason_redeem": null,
                "sku_redeem": null,
                "price": {
                    "full_price": 85000,
                    "taxes": [
                        {
                            "taxType": "porcentaje",
                            "taxId": "MWST",
                            "rate": 120
                        }
                    ]
                },
                "points": 0
            },
            {
                "sku": "AA041003",
                "title": "600 ML PET 24 U SEVEN UP",
                "categoryId": "CARBONATADAS",
                "category": "600 ML PET 24 U SEVEN UP",
                "brand": "SEVEN UP",
                "classification": "CARBONATADAS",
                "unitsPerBox": "24",
                "minOrderUnits": "24.000000000000000000",
                "packageDescription": "1 box",
                "packageUnitDescription": "24 ea",
                "quantity_max_redeem": null,
                "redeem_unit": null,
                "order_reason_redeem": null,
                "sku_redeem": null,
                "price": {
                    "full_price": 131790,
                    "taxes": [
                        {
                            "taxType": "porcentaje",
                            "taxId": "MWST",
                            "rate": 120
                        }
                    ]
                },
                "points": 0
            },
            {
                "sku": "AA131114",
                "title": "Be Light Limon 600 ML PET * 24",
                "categoryId": "AGUA SABORIZADA",
                "category": "Be Light Limon 600 ML PET * 24",
                "brand": "BE LIGHT",
                "classification": "AGUA SABORIZADA",
                "unitsPerBox": "24",
                "minOrderUnits": "24.000000000000000000",
                "packageDescription": "1 box",
                "packageUnitDescription": "24 ea",
                "quantity_max_redeem": null,
                "redeem_unit": null,
                "order_reason_redeem": null,
                "sku_redeem": null,
                "price": {
                    "full_price": 107890,
                    "taxes": [
                        {
                            "taxType": "porcentaje",
                            "taxId": "MWST",
                            "rate": 120
                        }
                    ]
                },
                "points": 0
            },
            {
                "sku": "BA003859",
                "title": "FRUTA F MANZA UVA VERDE 3LTPET",
                "categoryId": "STILL DRINKS",
                "category": "FRUTA F MANZA UVA VERDE 3LTPET",
                "brand": "FRUTA FRESCA",
                "classification": "STILL DRINKS",
                "unitsPerBox": "6",
                "minOrderUnits": null,
                "packageDescription": "1 box",
                "packageUnitDescription": "6 ea",
                "quantity_max_redeem": null,
                "redeem_unit": null,
                "order_reason_redeem": null,
                "sku_redeem": null,
                "price": {
                    "full_price": 60500,
                    "taxes": [
                        {
                            "taxType": "porcentaje",
                            "taxId": "MWST",
                            "rate": 120
                        }
                    ]
                },
                "points": 0
            },
            {
                "sku": "BA018622",
                "title": "SQUIZ 500 ML PET * 24 SP",
                "categoryId": "STILL DRINKS",
                "category": "SQUIZ 500 ML PET * 24 SP",
                "brand": "SQUIZ",
                "classification": "STILL DRINKS",
                "unitsPerBox": "24",
                "minOrderUnits": null,
                "packageDescription": "1 box",
                "packageUnitDescription": "24 ea",
                "quantity_max_redeem": null,
                "redeem_unit": null,
                "order_reason_redeem": null,
                "sku_redeem": null,
                "price": {
                    "full_price": 60000,
                    "taxes": [
                        {
                            "taxType": "porcentaje",
                            "taxId": "MWST",
                            "rate": 120
                        }
                    ]
                },
                "points": 0
            },
            {
                "sku": "AA001005",
                "title": "Salutaris 355 ML GRB * 24",
                "categoryId": "AGUA CON GAS",
                "category": "Salutaris 355 ML GRB * 24",
                "brand": "SALUTARIS",
                "classification": "AGUA CON GAS",
                "unitsPerBox": "24",
                "minOrderUnits": null,
                "packageDescription": "1 box",
                "packageUnitDescription": "24 ea",
                "quantity_max_redeem": null,
                "redeem_unit": null,
                "order_reason_redeem": null,
                "sku_redeem": null,
                "price": {
                    "full_price": 74000,
                    "taxes": [
                        {
                            "taxType": "porcentaje",
                            "taxId": "MWST",
                            "rate": 120
                        }
                    ]
                },
                "points": 0
            },
            {
                "sku": "BA003916",
                "title": "Goose Island Ipa 355 ML VNR",
                "categoryId": "CERVEZAS",
                "category": "Goose Island Ipa 355 ML VNR",
                "brand": "GOOSE ISLAND",
                "classification": "CERVEZAS",
                "unitsPerBox": "24",
                "minOrderUnits": null,
                "packageDescription": "1 box",
                "packageUnitDescription": "24 ea",
                "quantity_max_redeem": null,
                "redeem_unit": null,
                "order_reason_redeem": null,
                "sku_redeem": null,
                "price": {
                    "full_price": 400000,
                    "taxes": [
                        {
                            "taxType": "porcentaje",
                            "taxId": "MWST",
                            "rate": 120
                        }
                    ]
                },
                "points": 0
            },
            {
                "sku": "BA014350",
                "title": "YOGURT GLAD 900 ML FRESA0GRASA",
                "categoryId": "BEBIDA LECHE",
                "category": "YOGURT GLAD 900 ML FRESA0GRASA",
                "brand": "GLAD",
                "classification": "BEBIDA LECHE",
                "unitsPerBox": "6",
                "minOrderUnits": null,
                "packageDescription": "1 box",
                "packageUnitDescription": "6 ea",
                "quantity_max_redeem": null,
                "redeem_unit": null,
                "order_reason_redeem": null,
                "sku_redeem": null,
                "price": {
                    "full_price": 159000,
                    "taxes": [
                        {
                            "taxType": "porcentaje",
                            "taxId": "MWST",
                            "rate": 120
                        }
                    ]
                },
                "points": 0
            },
            {
                "sku": "BA020830",
                "title": "Gatorlyte Glacier Cherry 20 on",
                "categoryId": "ISOTONICOS",
                "category": "Gatorlyte Glacier Cherry 20 on",
                "brand": "GATORADE",
                "classification": "ISOTONICOS",
                "unitsPerBox": "12",
                "minOrderUnits": null,
                "packageDescription": "1 box",
                "packageUnitDescription": "12 ea",
                "quantity_max_redeem": null,
                "redeem_unit": null,
                "order_reason_redeem": null,
                "sku_redeem": null,
                "price": {
                    "full_price": 154000,
                    "taxes": [
                        {
                            "taxType": "porcentaje",
                            "taxId": "MWST",
                            "rate": 120
                        }
                    ]
                },
                "points": 0
            },
            {
                "sku": "AA015001",
                "title": "Pepsi 3000 ML PET * 6",
                "categoryId": "CARBONATADAS",
                "category": "Pepsi 3000 ML PET * 6",
                "brand": "PEPSI",
                "classification": "CARBONATADAS",
                "unitsPerBox": "6",
                "minOrderUnits": null,
                "packageDescription": "1 box",
                "packageUnitDescription": "6 ea",
                "quantity_max_redeem": null,
                "redeem_unit": null,
                "order_reason_redeem": null,
                "sku_redeem": null,
                "price": {
                    "full_price": 85000,
                    "taxes": [
                        {
                            "taxType": "porcentaje",
                            "taxId": "MWST",
                            "rate": 120
                        }
                    ]
                },
                "points": 0
            },
            {
                "sku": "AA029006",
                "title": "BAG IN BOX CAJI GRAPETTE",
                "categoryId": "CARBONATADAS",
                "category": "BAG IN BOX CAJI GRAPETTE",
                "brand": "GRAPETTE",
                "classification": "CARBONATADAS",
                "unitsPerBox": "1",
                "minOrderUnits": "1.000000000000000000",
                "packageDescription": "1 box",
                "packageUnitDescription": "1 ea",
                "quantity_max_redeem": null,
                "redeem_unit": null,
                "order_reason_redeem": null,
                "sku_redeem": null,
                "price": {
                    "full_price": 552050,
                    "taxes": [
                        {
                            "taxType": "porcentaje",
                            "taxId": "MWST",
                            "rate": 120
                        }
                    ]
                },
                "points": 0
            },
            {
                "sku": "BA011570",
                "title": "CAFÉ MOLIDO BLEND BARISTA",
                "categoryId": "BEBIDAS EN POLVO",
                "category": "CAFÉ MOLIDO BLEND BARISTA",
                "brand": "BARISTA",
                "classification": "BEBIDAS EN POLVO",
                "unitsPerBox": "5",
                "minOrderUnits": null,
                "packageDescription": "1 box",
                "packageUnitDescription": "5 ea",
                "quantity_max_redeem": null,
                "redeem_unit": null,
                "order_reason_redeem": null,
                "sku_redeem": null,
                "price": {
                    "full_price": 240000,
                    "taxes": [
                        {
                            "taxType": "porcentaje",
                            "taxId": "MWST",
                            "rate": 120
                        }
                    ]
                },
                "points": 0
            },
            {
                "sku": "BA003858",
                "title": "FRUTA FRESC FRUTAS TROP 3LTPET",
                "categoryId": "STILL DRINKS",
                "category": "FRUTA FRESC FRUTAS TROP 3LTPET",
                "brand": "FRUTA FRESCA",
                "classification": "STILL DRINKS",
                "unitsPerBox": "6",
                "minOrderUnits": null,
                "packageDescription": "1 box",
                "packageUnitDescription": "6 ea",
                "quantity_max_redeem": null,
                "redeem_unit": null,
                "order_reason_redeem": null,
                "sku_redeem": null,
                "price": {
                    "full_price": 60500,
                    "taxes": [
                        {
                            "taxType": "porcentaje",
                            "taxId": "MWST",
                            "rate": 120
                        }
                    ]
                },
                "points": 0
            },
            {
                "sku": "BA005834",
                "title": "RED BULL SUGARFREE 250ML LATA",
                "categoryId": "ENERGIZANTES",
                "category": "RED BULL SUGARFREE 250ML LATA",
                "brand": "RED BULL",
                "classification": "ENERGIZANTES",
                "unitsPerBox": "24",
                "minOrderUnits": null,
                "packageDescription": "1 box",
                "packageUnitDescription": "24 ea",
                "quantity_max_redeem": null,
                "redeem_unit": null,
                "order_reason_redeem": null,
                "sku_redeem": null,
                "price": {
                    "full_price": 307200,
                    "taxes": [
                        {
                            "taxType": "porcentaje",
                            "taxId": "MWST",
                            "rate": 120
                        }
                    ]
                },
                "points": 0
            },
            {
                "sku": "BA007629",
                "title": "LIPTON FRA 500ML PET 24U 2X12P",
                "categoryId": "TE",
                "category": "LIPTON FRA 500ML PET 24U 2X12P",
                "brand": "LIPTON",
                "classification": "TE",
                "unitsPerBox": "24",
                "minOrderUnits": "24.000000000000000000",
                "packageDescription": "1 box",
                "packageUnitDescription": "24 ea",
                "quantity_max_redeem": null,
                "redeem_unit": null,
                "order_reason_redeem": null,
                "sku_redeem": null,
                "price": {
                    "full_price": 145300,
                    "taxes": [
                        {
                            "taxType": "porcentaje",
                            "taxId": "MWST",
                            "rate": 120
                        }
                    ]
                },
                "points": 0
            },
            {
                "sku": "AA001011",
                "title": "Mirinda Naranja 355 ML GRB*24",
                "categoryId": "CARBONATADAS",
                "category": "Mirinda Naranja 355 ML GRB*24",
                "brand": "MIRINDA",
                "classification": "CARBONATADAS",
                "unitsPerBox": "24",
                "minOrderUnits": null,
                "packageDescription": "1 box",
                "packageUnitDescription": "24 ea",
                "quantity_max_redeem": null,
                "redeem_unit": null,
                "order_reason_redeem": null,
                "sku_redeem": null,
                "price": {
                    "full_price": 74000,
                    "taxes": [
                        {
                            "taxType": "porcentaje",
                            "taxId": "MWST",
                            "rate": 120
                        }
                    ]
                },
                "points": 0
            },
            {
                "sku": "AA004012",
                "title": "Seven Up Light 355 ML Lata*24",
                "categoryId": "CARBONATADAS",
                "category": "Seven Up Light 355 ML Lata*24",
                "brand": "SEVEN UP",
                "classification": "CARBONATADAS",
                "unitsPerBox": "24",
                "minOrderUnits": "24.000000000000000000",
                "packageDescription": "1 box",
                "packageUnitDescription": "24 ea",
                "quantity_max_redeem": null,
                "redeem_unit": null,
                "order_reason_redeem": null,
                "sku_redeem": null,
                "price": {
                    "full_price": 85050,
                    "taxes": [
                        {
                            "taxType": "porcentaje",
                            "taxId": "MWST",
                            "rate": 120
                        }
                    ]
                },
                "points": 0
            },
            {
                "sku": "AA059011",
                "title": "Mirinda Naranja 1500 ML PET*12",
                "categoryId": "CARBONATADAS",
                "category": "Mirinda Naranja 1500 ML PET*12",
                "brand": "MIRINDA",
                "classification": "CARBONATADAS",
                "unitsPerBox": "12",
                "minOrderUnits": "12.000000000000000000",
                "packageDescription": "1 box",
                "packageUnitDescription": "12 ea",
                "quantity_max_redeem": null,
                "redeem_unit": null,
                "order_reason_redeem": null,
                "sku_redeem": null,
                "price": {
                    "full_price": 80100,
                    "taxes": [
                        {
                            "taxType": "porcentaje",
                            "taxId": "MWST",
                            "rate": 120
                        }
                    ]
                },
                "points": 0
            },
            {
                "sku": "AA087091",
                "title": "BOTELLA 330ML LEFFE BLONDE",
                "categoryId": "CERVEZAS",
                "category": "BOTELLA 330ML LEFFE BLONDE",
                "brand": "LEFFE",
                "classification": "CERVEZAS",
                "unitsPerBox": "24",
                "minOrderUnits": null,
                "packageDescription": "1 box",
                "packageUnitDescription": "24 ea",
                "quantity_max_redeem": null,
                "redeem_unit": null,
                "order_reason_redeem": null,
                "sku_redeem": null,
                "price": {
                    "full_price": 300000,
                    "taxes": [
                        {
                            "taxType": "porcentaje",
                            "taxId": "MWST",
                            "rate": 120
                        }
                    ]
                },
                "points": 0
            },
            {
                "sku": "AA091066",
                "title": "BRAHVA LITRO RETORNABLE X 12",
                "categoryId": "CERVEZAS",
                "category": "BRAHVA LITRO RETORNABLE X 12",
                "brand": "BRAHVA",
                "classification": "CERVEZAS",
                "unitsPerBox": "12",
                "minOrderUnits": null,
                "packageDescription": "1 box",
                "packageUnitDescription": "12 ea",
                "quantity_max_redeem": null,
                "redeem_unit": null,
                "order_reason_redeem": null,
                "sku_redeem": null,
                "price": {
                    "full_price": 90000,
                    "taxes": [
                        {
                            "taxType": "porcentaje",
                            "taxId": "MWST",
                            "rate": 120
                        }
                    ]
                },
                "points": 0
            },
            {
                "sku": "BA005751",
                "title": "Adrenaline Rush 300 ML Latax24",
                "categoryId": "ENERGIZANTES",
                "category": "Adrenaline Rush 300 ML Latax24",
                "brand": "ADRENALINE",
                "classification": "ENERGIZANTES",
                "unitsPerBox": "24",
                "minOrderUnits": null,
                "packageDescription": "1 box",
                "packageUnitDescription": "24 ea",
                "quantity_max_redeem": null,
                "redeem_unit": null,
                "order_reason_redeem": null,
                "sku_redeem": null,
                "price": {
                    "full_price": 221400,
                    "taxes": [
                        {
                            "taxType": "porcentaje",
                            "taxId": "MWST",
                            "rate": 120
                        }
                    ]
                },
                "points": 0
            },
            {
                "sku": "BA011119",
                "title": "TING 500 ML GRB LABELS X24",
                "categoryId": "CARBONATADAS",
                "category": "TING 500 ML GRB LABELS X24",
                "brand": "TING",
                "classification": "CARBONATADAS",
                "unitsPerBox": "24",
                "minOrderUnits": null,
                "packageDescription": "1 box",
                "packageUnitDescription": "24 ea",
                "quantity_max_redeem": null,
                "redeem_unit": null,
                "order_reason_redeem": null,
                "sku_redeem": null,
                "price": {
                    "full_price": 79000,
                    "taxes": [
                        {
                            "taxType": "porcentaje",
                            "taxId": "MWST",
                            "rate": 120
                        }
                    ]
                },
                "points": 0
            },
            {
                "sku": "BA014337",
                "title": "YOGURT GLAD 200 ML FRESA",
                "categoryId": "BEBIDA LECHE",
                "category": "YOGURT GLAD 200 ML FRESA",
                "brand": "GLAD",
                "classification": "BEBIDA LECHE",
                "unitsPerBox": "30",
                "minOrderUnits": null,
                "packageDescription": "1 box",
                "packageUnitDescription": "30 ea",
                "quantity_max_redeem": null,
                "redeem_unit": null,
                "order_reason_redeem": null,
                "sku_redeem": null,
                "price": {
                    "full_price": 139500,
                    "taxes": [
                        {
                            "taxType": "porcentaje",
                            "taxId": "MWST",
                            "rate": 120
                        }
                    ]
                },
                "points": 0
            },
            {
                "sku": "BA017367",
                "title": "JUGAZZO PETI MZ 24320 ML LATA",
                "categoryId": "NECTARES",
                "category": "JUGAZZO PETI MZ 24320 ML LATA",
                "brand": "JUGAZZO",
                "classification": "NECTARES",
                "unitsPerBox": "24",
                "minOrderUnits": null,
                "packageDescription": "1 box",
                "packageUnitDescription": "24 ea",
                "quantity_max_redeem": null,
                "redeem_unit": null,
                "order_reason_redeem": null,
                "sku_redeem": null,
                "price": {
                    "full_price": 75600,
                    "taxes": [
                        {
                            "taxType": "porcentaje",
                            "taxId": "MWST",
                            "rate": 120
                        }
                    ]
                },
                "points": 0
            },
            {
                "sku": "AA007001",
                "title": "Pepsi 2000 ML PET * 8",
                "categoryId": "CARBONATADAS",
                "category": "Pepsi 2000 ML PET * 8",
                "brand": "PEPSI",
                "classification": "CARBONATADAS",
                "unitsPerBox": "8",
                "minOrderUnits": null,
                "packageDescription": "1 box",
                "packageUnitDescription": "8 ea",
                "quantity_max_redeem": null,
                "redeem_unit": null,
                "order_reason_redeem": null,
                "sku_redeem": null,
                "price": {
                    "full_price": 103690,
                    "taxes": [
                        {
                            "taxType": "porcentaje",
                            "taxId": "MWST",
                            "rate": 120
                        }
                    ]
                },
                "points": 0
            },
            {
                "sku": "AA030059",
                "title": "BAG IN BOX TE LIPTON LIMON 5GL",
                "categoryId": "TE",
                "category": "BAG IN BOX TE LIPTON LIMON 5GL",
                "brand": "LIPTON",
                "classification": "TE",
                "unitsPerBox": "1",
                "minOrderUnits": "1.000000000000000000",
                "packageDescription": "1 box",
                "packageUnitDescription": "1 ea",
                "quantity_max_redeem": null,
                "redeem_unit": null,
                "order_reason_redeem": null,
                "sku_redeem": null,
                "price": {
                    "full_price": 552050,
                    "taxes": [
                        {
                            "taxType": "porcentaje",
                            "taxId": "MWST",
                            "rate": 120
                        }
                    ]
                },
                "points": 0
            },
            {
                "sku": "AA087093",
                "title": "BOTELLA 330ML HOEGAARDEN",
                "categoryId": "CERVEZAS",
                "category": "BOTELLA 330ML HOEGAARDEN",
                "brand": "HOEGAARDEN",
                "classification": "CERVEZAS",
                "unitsPerBox": "24",
                "minOrderUnits": null,
                "packageDescription": "1 box",
                "packageUnitDescription": "24 ea",
                "quantity_max_redeem": null,
                "redeem_unit": null,
                "order_reason_redeem": null,
                "sku_redeem": null,
                "price": {
                    "full_price": 287000,
                    "taxes": [
                        {
                            "taxType": "porcentaje",
                            "taxId": "MWST",
                            "rate": 120
                        }
                    ]
                },
                "points": 0
            },
            {
                "sku": "AA109008",
                "title": "RICA ROJA 3 LITROS PET",
                "categoryId": "CARBONATADAS",
                "category": "RICA ROJA 3 LITROS PET",
                "brand": "RICA",
                "classification": "CARBONATADAS",
                "unitsPerBox": "6",
                "minOrderUnits": null,
                "packageDescription": "1 box",
                "packageUnitDescription": "6 ea",
                "quantity_max_redeem": null,
                "redeem_unit": null,
                "order_reason_redeem": null,
                "sku_redeem": null,
                "price": {
                    "full_price": 64800,
                    "taxes": [
                        {
                            "taxType": "porcentaje",
                            "taxId": "MWST",
                            "rate": 120
                        }
                    ]
                },
                "points": 0
            },
            {
                "sku": "BA000947",
                "title": "12 PACK CORONA LATA 12 ONZAS",
                "categoryId": "CERVEZAS",
                "category": "12 PACK CORONA LATA 12 ONZAS",
                "brand": "CORONA",
                "classification": "CERVEZAS",
                "unitsPerBox": "12",
                "minOrderUnits": null,
                "packageDescription": "1 box",
                "packageUnitDescription": "12 ea",
                "quantity_max_redeem": null,
                "redeem_unit": null,
                "order_reason_redeem": null,
                "sku_redeem": null,
                "price": {
                    "full_price": 70000,
                    "taxes": [
                        {
                            "taxType": "porcentaje",
                            "taxId": "MWST",
                            "rate": 120
                        }
                    ]
                },
                "points": 0
            },
            {
                "sku": "BA003359",
                "title": "GATORADE UVA 1000ML SPORT CAP",
                "categoryId": "ISOTONICOS",
                "category": "GATORADE UVA 1000ML SPORT CAP",
                "brand": "GATORADE",
                "classification": "ISOTONICOS",
                "unitsPerBox": "12",
                "minOrderUnits": null,
                "packageDescription": "1 box",
                "packageUnitDescription": "12 ea",
                "quantity_max_redeem": null,
                "redeem_unit": null,
                "order_reason_redeem": null,
                "sku_redeem": null,
                "price": {
                    "full_price": 110190,
                    "taxes": [
                        {
                            "taxType": "porcentaje",
                            "taxId": "MWST",
                            "rate": 120
                        }
                    ]
                },
                "points": 0
            },
            {
                "sku": "BA013066",
                "title": "NATURALISIMO NARA SIN PU1795ML",
                "categoryId": "JUGOS",
                "category": "NATURALISIMO NARA SIN PU1795ML",
                "brand": "NATURALISIMO",
                "classification": "JUGOS",
                "unitsPerBox": "6",
                "minOrderUnits": null,
                "packageDescription": "1 box",
                "packageUnitDescription": "6 ea",
                "quantity_max_redeem": null,
                "redeem_unit": null,
                "order_reason_redeem": null,
                "sku_redeem": null,
                "price": {
                    "full_price": 153600,
                    "taxes": [
                        {
                            "taxType": "porcentaje",
                            "taxId": "MWST",
                            "rate": 120
                        }
                    ]
                },
                "points": 0
            },
            {
                "sku": "BA014349",
                "title": "YOGURT GLAD900ML NATURA 0GRASA",
                "categoryId": "BEBIDA LECHE",
                "category": "YOGURT GLAD900ML NATURA 0GRASA",
                "brand": "GLAD",
                "classification": "BEBIDA LECHE",
                "unitsPerBox": "6",
                "minOrderUnits": null,
                "packageDescription": "1 box",
                "packageUnitDescription": "6 ea",
                "quantity_max_redeem": null,
                "redeem_unit": null,
                "order_reason_redeem": null,
                "sku_redeem": null,
                "price": {
                    "full_price": 151800,
                    "taxes": [
                        {
                            "taxType": "porcentaje",
                            "taxId": "MWST",
                            "rate": 120
                        }
                    ]
                },
                "points": 0
            },
            {
                "sku": "000000000000220015",
                "title": "TAPADERA PARA VASO 16/22 ONZ.",
                "categoryId": null,
                "category": "TAPADERA PARA VASO 16/22 ONZ.",
                "brand": null,
                "classification": null,
                "unitsPerBox": "1000",
                "minOrderUnits": null,
                "packageDescription": "1 box",
                "packageUnitDescription": "1000 ea",
                "quantity_max_redeem": null,
                "redeem_unit": null,
                "order_reason_redeem": null,
                "sku_redeem": null,
                "price": {
                    "full_price": 175000,
                    "taxes": [
                        {
                            "taxType": "porcentaje",
                            "taxId": "MWST",
                            "rate": 120
                        }
                    ]
                },
                "points": 0
            },
            {
                "sku": "AA118059",
                "title": "Lipton Limon 2500 ML PET 6",
                "categoryId": "TE",
                "category": "Lipton Limon 2500 ML PET 6",
                "brand": "LIPTON",
                "classification": "TE",
                "unitsPerBox": "6",
                "minOrderUnits": null,
                "packageDescription": "1 box",
                "packageUnitDescription": "6 ea",
                "quantity_max_redeem": null,
                "redeem_unit": null,
                "order_reason_redeem": null,
                "sku_redeem": null,
                "price": {
                    "full_price": 95000,
                    "taxes": [
                        {
                            "taxType": "porcentaje",
                            "taxId": "MWST",
                            "rate": 120
                        }
                    ]
                },
                "points": 0
            },
            {
                "sku": "BA011120",
                "title": "LABELS PEPSI 355 ML GRB * 24",
                "categoryId": "CARBONATADAS",
                "category": "LABELS PEPSI 355 ML GRB * 24",
                "brand": "PEPSI",
                "classification": "CARBONATADAS",
                "unitsPerBox": "24",
                "minOrderUnits": null,
                "packageDescription": "1 box",
                "packageUnitDescription": "24 ea",
                "quantity_max_redeem": null,
                "redeem_unit": null,
                "order_reason_redeem": null,
                "sku_redeem": null,
                "price": {
                    "full_price": 74000,
                    "taxes": [
                        {
                            "taxType": "porcentaje",
                            "taxId": "MWST",
                            "rate": 120
                        }
                    ]
                },
                "points": 0
            },
            {
                "sku": "BA011204",
                "title": "GATORA G ZERO GLA CHERRY591X24",
                "categoryId": "ISOTONICOS",
                "category": "GATORA G ZERO GLA CHERRY591X24",
                "brand": "GATORADE",
                "classification": "ISOTONICOS",
                "unitsPerBox": "24",
                "minOrderUnits": null,
                "packageDescription": "1 box",
                "packageUnitDescription": "24 ea",
                "quantity_max_redeem": null,
                "redeem_unit": null,
                "order_reason_redeem": null,
                "sku_redeem": null,
                "price": {
                    "full_price": 192000,
                    "taxes": [
                        {
                            "taxType": "porcentaje",
                            "taxId": "MWST",
                            "rate": 120
                        }
                    ]
                },
                "points": 0
            },
            {
                "sku": "BA011313",
                "title": "NATURA MANDARINA PULPA 500ML",
                "categoryId": "JUGOS",
                "category": "NATURA MANDARINA PULPA 500ML",
                "brand": "NATURALISIMO",
                "classification": "JUGOS",
                "unitsPerBox": "50",
                "minOrderUnits": null,
                "packageDescription": "1 box",
                "packageUnitDescription": "50 ea",
                "quantity_max_redeem": null,
                "redeem_unit": null,
                "order_reason_redeem": null,
                "sku_redeem": null,
                "price": {
                    "full_price": 432000,
                    "taxes": [
                        {
                            "taxType": "porcentaje",
                            "taxId": "MWST",
                            "rate": 120
                        }
                    ]
                },
                "points": 0
            },
            {
                "sku": "AA004003",
                "title": "Seven Up 355 ML Lata * 24",
                "categoryId": "CARBONATADAS",
                "category": "Seven Up 355 ML Lata * 24",
                "brand": "SEVEN UP",
                "classification": "CARBONATADAS",
                "unitsPerBox": "24",
                "minOrderUnits": "24.000000000000000000",
                "packageDescription": "1 box",
                "packageUnitDescription": "24 ea",
                "quantity_max_redeem": null,
                "redeem_unit": null,
                "order_reason_redeem": null,
                "sku_redeem": null,
                "price": {
                    "full_price": 85050,
                    "taxes": [
                        {
                            "taxType": "porcentaje",
                            "taxId": "MWST",
                            "rate": 120
                        }
                    ]
                },
                "points": 0
            },
            {
                "sku": "AA007011",
                "title": "2 LITROS MIRINDA",
                "categoryId": "CARBONATADAS",
                "category": "2 LITROS MIRINDA",
                "brand": "MIRINDA",
                "classification": "CARBONATADAS",
                "unitsPerBox": "8",
                "minOrderUnits": "8.000000000000000000",
                "packageDescription": "1 box",
                "packageUnitDescription": "8 ea",
                "quantity_max_redeem": null,
                "redeem_unit": null,
                "order_reason_redeem": null,
                "sku_redeem": null,
                "price": {
                    "full_price": 87000,
                    "taxes": [
                        {
                            "taxType": "porcentaje",
                            "taxId": "MWST",
                            "rate": 120
                        }
                    ]
                },
                "points": 0
            },
            {
                "sku": "AA897142",
                "title": "Lipton Durazno 2500 ML PET * 6",
                "categoryId": "TE",
                "category": "Lipton Durazno 2500 ML PET * 6",
                "brand": "LIPTON",
                "classification": "TE",
                "unitsPerBox": "6",
                "minOrderUnits": null,
                "packageDescription": "1 box",
                "packageUnitDescription": "6 ea",
                "quantity_max_redeem": null,
                "redeem_unit": null,
                "order_reason_redeem": null,
                "sku_redeem": null,
                "price": {
                    "full_price": 95000,
                    "taxes": [
                        {
                            "taxType": "porcentaje",
                            "taxId": "MWST",
                            "rate": 120
                        }
                    ]
                },
                "points": 0
            },
            {
                "sku": "BA001491",
                "title": "CHOPP NEGRA MODELO BARRIL 29 L",
                "categoryId": "CERVEZAS",
                "category": "CHOPP NEGRA MODELO BARRIL 29 L",
                "brand": "MODELO",
                "classification": "CERVEZAS",
                "unitsPerBox": "1",
                "minOrderUnits": null,
                "packageDescription": "1 box",
                "packageUnitDescription": "1 ea",
                "quantity_max_redeem": null,
                "redeem_unit": null,
                "order_reason_redeem": null,
                "sku_redeem": null,
                "price": {
                    "full_price": 400000,
                    "taxes": [
                        {
                            "taxType": "porcentaje",
                            "taxId": "MWST",
                            "rate": 120
                        }
                    ]
                },
                "points": 0
            },
            {
                "sku": "BA001492",
                "title": "CHOPP MODE ESPECIAL BARRIL 59L",
                "categoryId": "CERVEZAS",
                "category": "CHOPP MODE ESPECIAL BARRIL 59L",
                "brand": "MODELO",
                "classification": "CERVEZAS",
                "unitsPerBox": "1",
                "minOrderUnits": null,
                "packageDescription": "1 box",
                "packageUnitDescription": "1 ea",
                "quantity_max_redeem": null,
                "redeem_unit": null,
                "order_reason_redeem": null,
                "sku_redeem": null,
                "price": {
                    "full_price": 810000,
                    "taxes": [
                        {
                            "taxType": "porcentaje",
                            "taxId": "MWST",
                            "rate": 120
                        }
                    ]
                },
                "points": 0
            },
            {
                "sku": "BA004947",
                "title": "Lipton Frambuesa 2500 ML PET*6",
                "categoryId": "TE",
                "category": "Lipton Frambuesa 2500 ML PET*6",
                "brand": "LIPTON",
                "classification": "TE",
                "unitsPerBox": "6",
                "minOrderUnits": null,
                "packageDescription": "1 box",
                "packageUnitDescription": "6 ea",
                "quantity_max_redeem": null,
                "redeem_unit": null,
                "order_reason_redeem": null,
                "sku_redeem": null,
                "price": {
                    "full_price": 95000,
                    "taxes": [
                        {
                            "taxType": "porcentaje",
                            "taxId": "MWST",
                            "rate": 120
                        }
                    ]
                },
                "points": 0
            },
            {
                "sku": "AA015011",
                "title": "Mirinda Naranja 3000 ML PET*6",
                "categoryId": "CARBONATADAS",
                "category": "Mirinda Naranja 3000 ML PET*6",
                "brand": "MIRINDA",
                "classification": "CARBONATADAS",
                "unitsPerBox": "6",
                "minOrderUnits": null,
                "packageDescription": "1 box",
                "packageUnitDescription": "6 ea",
                "quantity_max_redeem": null,
                "redeem_unit": null,
                "order_reason_redeem": null,
                "sku_redeem": null,
                "price": {
                    "full_price": 85000,
                    "taxes": [
                        {
                            "taxType": "porcentaje",
                            "taxId": "MWST",
                            "rate": 120
                        }
                    ]
                },
                "points": 0
            },
            {
                "sku": "AA685599",
                "title": "RICA CHICLE 12 ONZAS PET",
                "categoryId": "CARBONATADAS",
                "category": "RICA CHICLE 12 ONZAS PET",
                "brand": "RICA",
                "classification": "CARBONATADAS",
                "unitsPerBox": "24",
                "minOrderUnits": "24.000000000000000000",
                "packageDescription": "1 box",
                "packageUnitDescription": "24 ea",
                "quantity_max_redeem": null,
                "redeem_unit": null,
                "order_reason_redeem": null,
                "sku_redeem": null,
                "price": {
                    "full_price": 77000,
                    "taxes": [
                        {
                            "taxType": "porcentaje",
                            "taxId": "MWST",
                            "rate": 120
                        }
                    ]
                },
                "points": 0
            },
            {
                "sku": "AA851191",
                "title": "BEBIDA JUGAZZO PETIT DURAZNO 5",
                "categoryId": "NECTARES",
                "category": "BEBIDA JUGAZZO PETIT DURAZNO 5",
                "brand": "JUGAZZO",
                "classification": "NECTARES",
                "unitsPerBox": "24",
                "minOrderUnits": null,
                "packageDescription": "1 box",
                "packageUnitDescription": "24 ea",
                "quantity_max_redeem": null,
                "redeem_unit": null,
                "order_reason_redeem": null,
                "sku_redeem": null,
                "price": {
                    "full_price": 86400,
                    "taxes": [
                        {
                            "taxType": "porcentaje",
                            "taxId": "MWST",
                            "rate": 120
                        }
                    ]
                },
                "points": 0
            },
            {
                "sku": "BA000461",
                "title": "330 ML VNR BUDWEISER LIGHT",
                "categoryId": "CERVEZAS",
                "category": "330 ML VNR BUDWEISER LIGHT",
                "brand": "BUD LIGHT",
                "classification": "CERVEZAS",
                "unitsPerBox": "24",
                "minOrderUnits": null,
                "packageDescription": "1 box",
                "packageUnitDescription": "24 ea",
                "quantity_max_redeem": null,
                "redeem_unit": null,
                "order_reason_redeem": null,
                "sku_redeem": null,
                "price": {
                    "full_price": 139000,
                    "taxes": [
                        {
                            "taxType": "porcentaje",
                            "taxId": "MWST",
                            "rate": 120
                        }
                    ]
                },
                "points": 0
            },
            {
                "sku": "BA003298",
                "title": "GATORADE LIMA LIMON SPORT CAP",
                "categoryId": "ISOTONICOS",
                "category": "GATORADE LIMA LIMON SPORT CAP",
                "brand": "GATORADE",
                "classification": "ISOTONICOS",
                "unitsPerBox": "24",
                "minOrderUnits": null,
                "packageDescription": "1 box",
                "packageUnitDescription": "24 ea",
                "quantity_max_redeem": null,
                "redeem_unit": null,
                "order_reason_redeem": null,
                "sku_redeem": null,
                "price": {
                    "full_price": 190000,
                    "taxes": [
                        {
                            "taxType": "porcentaje",
                            "taxId": "MWST",
                            "rate": 120
                        }
                    ]
                },
                "points": 0
            },
            {
                "sku": "BA017865",
                "title": "T&M DARK ROAST 400G UN",
                "categoryId": "ABARROTES",
                "category": "T&M DARK ROAST 400G UN",
                "brand": "BARISTA",
                "classification": "ABARROTES",
                "unitsPerBox": "4",
                "minOrderUnits": null,
                "packageDescription": "1 box",
                "packageUnitDescription": "4 ea",
                "quantity_max_redeem": null,
                "redeem_unit": null,
                "order_reason_redeem": null,
                "sku_redeem": null,
                "price": {
                    "full_price": 233000,
                    "taxes": [
                        {
                            "taxType": "porcentaje",
                            "taxId": "MWST",
                            "rate": 120
                        }
                    ]
                },
                "points": 0
            },
            {
                "sku": "AA059003",
                "title": "Seven Up 1500 ML PET * 12",
                "categoryId": "CARBONATADAS",
                "category": "Seven Up 1500 ML PET * 12",
                "brand": "SEVEN UP",
                "classification": "CARBONATADAS",
                "unitsPerBox": "12",
                "minOrderUnits": "12.000000000000000000",
                "packageDescription": "1 box",
                "packageUnitDescription": "12 ea",
                "quantity_max_redeem": null,
                "redeem_unit": null,
                "order_reason_redeem": null,
                "sku_redeem": null,
                "price": {
                    "full_price": 80100,
                    "taxes": [
                        {
                            "taxType": "porcentaje",
                            "taxId": "MWST",
                            "rate": 120
                        }
                    ]
                },
                "points": 0
            },
            {
                "sku": "AA087868",
                "title": "STELLA ARTOIS 12ONZ V NO RETOR",
                "categoryId": "CERVEZAS",
                "category": "STELLA ARTOIS 12ONZ V NO RETOR",
                "brand": "STELLA ARTOIS",
                "classification": "CERVEZAS",
                "unitsPerBox": "24",
                "minOrderUnits": "24.000000000000000000",
                "packageDescription": "1 box",
                "packageUnitDescription": "24 ea",
                "quantity_max_redeem": null,
                "redeem_unit": null,
                "order_reason_redeem": null,
                "sku_redeem": null,
                "price": {
                    "full_price": 180000,
                    "taxes": [
                        {
                            "taxType": "porcentaje",
                            "taxId": "MWST",
                            "rate": 120
                        }
                    ]
                },
                "points": 0
            },
            {
                "sku": "BA012909",
                "title": "VIP Limon 355 ml GNRB x24",
                "categoryId": "LICOR",
                "category": "VIP Limon 355 ml GNRB x24",
                "brand": "VIP",
                "classification": "LICOR",
                "unitsPerBox": "24",
                "minOrderUnits": null,
                "packageDescription": "1 box",
                "packageUnitDescription": "24 ea",
                "quantity_max_redeem": null,
                "redeem_unit": null,
                "order_reason_redeem": null,
                "sku_redeem": null,
                "price": {
                    "full_price": 192000,
                    "taxes": [
                        {
                            "taxType": "porcentaje",
                            "taxId": "MWST",
                            "rate": 120
                        }
                    ]
                },
                "points": 0
            },
            {
                "sku": "BA016738",
                "title": "O-BIT HARD SELTZER BERRIES *24",
                "categoryId": "LICOR",
                "category": "O-BIT HARD SELTZER BERRIES *24",
                "brand": "O-BIT",
                "classification": "LICOR",
                "unitsPerBox": "24",
                "minOrderUnits": null,
                "packageDescription": "1 box",
                "packageUnitDescription": "24 ea",
                "quantity_max_redeem": null,
                "redeem_unit": null,
                "order_reason_redeem": null,
                "sku_redeem": null,
                "price": {
                    "full_price": 252000,
                    "taxes": [
                        {
                            "taxType": "porcentaje",
                            "taxId": "MWST",
                            "rate": 120
                        }
                    ]
                },
                "points": 0
            },
            {
                "sku": "BA016811",
                "title": "ADRENALINE RUSH 355 ML LATA*24",
                "categoryId": "ENERGIZANTES",
                "category": "ADRENALINE RUSH 355 ML LATA*24",
                "brand": "ADRENALINE",
                "classification": "ENERGIZANTES",
                "unitsPerBox": "24",
                "minOrderUnits": null,
                "packageDescription": "1 box",
                "packageUnitDescription": "24 ea",
                "quantity_max_redeem": null,
                "redeem_unit": null,
                "order_reason_redeem": null,
                "sku_redeem": null,
                "price": {
                    "full_price": 220900,
                    "taxes": [
                        {
                            "taxType": "porcentaje",
                            "taxId": "MWST",
                            "rate": 120
                        }
                    ]
                },
                "points": 0
            },
            {
                "sku": "AA030208",
                "title": "BAG IN BOX TE LIPTON FRAMBUESA",
                "categoryId": "TE",
                "category": "BAG IN BOX TE LIPTON FRAMBUESA",
                "brand": "LIPTON",
                "classification": "TE",
                "unitsPerBox": "1",
                "minOrderUnits": "1.000000000000000000",
                "packageDescription": "1 box",
                "packageUnitDescription": "1 ea",
                "quantity_max_redeem": null,
                "redeem_unit": null,
                "order_reason_redeem": null,
                "sku_redeem": null,
                "price": {
                    "full_price": 552050,
                    "taxes": [
                        {
                            "taxType": "porcentaje",
                            "taxId": "MWST",
                            "rate": 120
                        }
                    ]
                },
                "points": 0
            },
            {
                "sku": "BA000450",
                "title": "Pepsi Light 355 ML Lata * 24",
                "categoryId": "CARBONATADAS",
                "category": "Pepsi Light 355 ML Lata * 24",
                "brand": "PEPSI",
                "classification": "CARBONATADAS",
                "unitsPerBox": "24",
                "minOrderUnits": "24.000000000000000000",
                "packageDescription": "1 box",
                "packageUnitDescription": "24 ea",
                "quantity_max_redeem": null,
                "redeem_unit": null,
                "order_reason_redeem": null,
                "sku_redeem": null,
                "price": {
                    "full_price": 85050,
                    "taxes": [
                        {
                            "taxType": "porcentaje",
                            "taxId": "MWST",
                            "rate": 120
                        }
                    ]
                },
                "points": 0
            },
            {
                "sku": "BA003688",
                "title": "GATORADE BERRY BLUE600ML SPCAP",
                "categoryId": "ISOTONICOS",
                "category": "GATORADE BERRY BLUE600ML SPCAP",
                "brand": "GATORADE",
                "classification": "ISOTONICOS",
                "unitsPerBox": "24",
                "minOrderUnits": null,
                "packageDescription": "1 box",
                "packageUnitDescription": "24 ea",
                "quantity_max_redeem": null,
                "redeem_unit": null,
                "order_reason_redeem": null,
                "sku_redeem": null,
                "price": {
                    "full_price": 190000,
                    "taxes": [
                        {
                            "taxType": "porcentaje",
                            "taxId": "MWST",
                            "rate": 120
                        }
                    ]
                },
                "points": 0
            },
            {
                "sku": "BA014342",
                "title": "VASO YOGURT GLAD EB MELOCOTON",
                "categoryId": "BEBIDA LECHE",
                "category": "VASO YOGURT GLAD EB MELOCOTON",
                "brand": "GLAD",
                "classification": "BEBIDA LECHE",
                "unitsPerBox": "24",
                "minOrderUnits": null,
                "packageDescription": "1 box",
                "packageUnitDescription": "24 ea",
                "quantity_max_redeem": null,
                "redeem_unit": null,
                "order_reason_redeem": null,
                "sku_redeem": null,
                "price": {
                    "full_price": 86400,
                    "taxes": [
                        {
                            "taxType": "porcentaje",
                            "taxId": "MWST",
                            "rate": 120
                        }
                    ]
                },
                "points": 0
            },
            {
                "sku": "BA017368",
                "title": "JUGAZZO PETI DZ 24320 ML LATA",
                "categoryId": "NECTARES",
                "category": "JUGAZZO PETI DZ 24320 ML LATA",
                "brand": "JUGAZZO",
                "classification": "NECTARES",
                "unitsPerBox": "24",
                "minOrderUnits": null,
                "packageDescription": "1 box",
                "packageUnitDescription": "24 ea",
                "quantity_max_redeem": null,
                "redeem_unit": null,
                "order_reason_redeem": null,
                "sku_redeem": null,
                "price": {
                    "full_price": 75600,
                    "taxes": [
                        {
                            "taxType": "porcentaje",
                            "taxId": "MWST",
                            "rate": 120
                        }
                    ]
                },
                "points": 0
            },
            {
                "sku": "BA020829",
                "title": "Gatorlyte Naranja 20 onz  X12",
                "categoryId": "ISOTONICOS",
                "category": "Gatorlyte Naranja 20 onz  X12",
                "brand": "GATORADE",
                "classification": "ISOTONICOS",
                "unitsPerBox": "12",
                "minOrderUnits": null,
                "packageDescription": "1 box",
                "packageUnitDescription": "12 ea",
                "quantity_max_redeem": null,
                "redeem_unit": null,
                "order_reason_redeem": null,
                "sku_redeem": null,
                "price": {
                    "full_price": 154000,
                    "taxes": [
                        {
                            "taxType": "porcentaje",
                            "taxId": "MWST",
                            "rate": 120
                        }
                    ]
                },
                "points": 0
            },
            {
                "sku": "000000000000220014",
                "title": "TAPADERA PARA VASO 12 ONZ.",
                "categoryId": null,
                "category": "TAPADERA PARA VASO 12 ONZ.",
                "brand": null,
                "classification": null,
                "unitsPerBox": "1000",
                "minOrderUnits": null,
                "packageDescription": "1 box",
                "packageUnitDescription": "1000 ea",
                "quantity_max_redeem": null,
                "redeem_unit": null,
                "order_reason_redeem": null,
                "sku_redeem": null,
                "price": {
                    "full_price": 155000,
                    "taxes": [
                        {
                            "taxType": "porcentaje",
                            "taxId": "MWST",
                            "rate": 120
                        }
                    ]
                },
                "points": 0
            },
            {
                "sku": "AA001001",
                "title": "Pepsi 355 ML GRB * 24",
                "categoryId": "CARBONATADAS",
                "category": "Pepsi 355 ML GRB * 24",
                "brand": "PEPSI",
                "classification": "CARBONATADAS",
                "unitsPerBox": "24",
                "minOrderUnits": null,
                "packageDescription": "1 box",
                "packageUnitDescription": "24 ea",
                "quantity_max_redeem": null,
                "redeem_unit": null,
                "order_reason_redeem": null,
                "sku_redeem": null,
                "price": {
                    "full_price": 74000,
                    "taxes": [
                        {
                            "taxType": "porcentaje",
                            "taxId": "MWST",
                            "rate": 120
                        }
                    ]
                },
                "points": 0
            },
            {
                "sku": "AA345066",
                "title": "BRAHVA LATA 16 ONZAS X 24",
                "categoryId": "CERVEZAS",
                "category": "BRAHVA LATA 16 ONZAS X 24",
                "brand": "BRAHVA",
                "classification": "CERVEZAS",
                "unitsPerBox": "24",
                "minOrderUnits": null,
                "packageDescription": "1 box",
                "packageUnitDescription": "24 ea",
                "quantity_max_redeem": null,
                "redeem_unit": null,
                "order_reason_redeem": null,
                "sku_redeem": null,
                "price": {
                    "full_price": 110000,
                    "taxes": [
                        {
                            "taxType": "porcentaje",
                            "taxId": "MWST",
                            "rate": 120
                        }
                    ]
                },
                "points": 0
            },
            {
                "sku": "AA018011",
                "title": "Mirinda Naranja 500 ML GRB*24",
                "categoryId": "CARBONATADAS",
                "category": "Mirinda Naranja 500 ML GRB*24",
                "brand": "MIRINDA",
                "classification": "CARBONATADAS",
                "unitsPerBox": "24",
                "minOrderUnits": null,
                "packageDescription": "1 box",
                "packageUnitDescription": "24 ea",
                "quantity_max_redeem": null,
                "redeem_unit": null,
                "order_reason_redeem": null,
                "sku_redeem": null,
                "price": {
                    "full_price": 76890,
                    "taxes": [
                        {
                            "taxType": "porcentaje",
                            "taxId": "MWST",
                            "rate": 120
                        }
                    ]
                },
                "points": 0
            },
            {
                "sku": "AA892698",
                "title": "BUDWEISER 12OZ VNR X 24 MA",
                "categoryId": "CERVEZAS",
                "category": "BUDWEISER 12OZ VNR X 24 MA",
                "brand": "BUDWEISER",
                "classification": "CERVEZAS",
                "unitsPerBox": "24",
                "minOrderUnits": null,
                "packageDescription": "1 box",
                "packageUnitDescription": "24 ea",
                "quantity_max_redeem": null,
                "redeem_unit": null,
                "order_reason_redeem": null,
                "sku_redeem": null,
                "price": {
                    "full_price": 155000,
                    "taxes": [
                        {
                            "taxType": "porcentaje",
                            "taxId": "MWST",
                            "rate": 120
                        }
                    ]
                },
                "points": 0
            },
            {
                "sku": "AA004005",
                "title": "Salutaris 355 ML Lata * 24",
                "categoryId": "AGUA CON GAS",
                "category": "Salutaris 355 ML Lata * 24",
                "brand": "SALUTARIS",
                "classification": "AGUA CON GAS",
                "unitsPerBox": "24",
                "minOrderUnits": "24.000000000000000000",
                "packageDescription": "1 box",
                "packageUnitDescription": "24 ea",
                "quantity_max_redeem": null,
                "redeem_unit": null,
                "order_reason_redeem": null,
                "sku_redeem": null,
                "price": {
                    "full_price": 81000,
                    "taxes": [
                        {
                            "taxType": "porcentaje",
                            "taxId": "MWST",
                            "rate": 120
                        }
                    ]
                },
                "points": 0
            },
            {
                "sku": "AA073059",
                "title": "LIPTON 12 ONZAS VIDRIO LIMON",
                "categoryId": "TE",
                "category": "LIPTON 12 ONZAS VIDRIO LIMON",
                "brand": "LIPTON",
                "classification": "TE",
                "unitsPerBox": "24",
                "minOrderUnits": null,
                "packageDescription": "1 box",
                "packageUnitDescription": "24 ea",
                "quantity_max_redeem": null,
                "redeem_unit": null,
                "order_reason_redeem": null,
                "sku_redeem": null,
                "price": {
                    "full_price": 96000,
                    "taxes": [
                        {
                            "taxType": "porcentaje",
                            "taxId": "MWST",
                            "rate": 120
                        }
                    ]
                },
                "points": 0
            },
            {
                "sku": "AA109006",
                "title": "Grapette 3000 ML PET * 6",
                "categoryId": "CARBONATADAS",
                "category": "Grapette 3000 ML PET * 6",
                "brand": "GRAPETTE",
                "classification": "CARBONATADAS",
                "unitsPerBox": "6",
                "minOrderUnits": null,
                "packageDescription": "1 box",
                "packageUnitDescription": "6 ea",
                "quantity_max_redeem": null,
                "redeem_unit": null,
                "order_reason_redeem": null,
                "sku_redeem": null,
                "price": {
                    "full_price": 64800,
                    "taxes": [
                        {
                            "taxType": "porcentaje",
                            "taxId": "MWST",
                            "rate": 120
                        }
                    ]
                },
                "points": 0
            },
            {
                "sku": "BA017170",
                "title": "ADRENALINE RUSH MANGO 473ML*24",
                "categoryId": "ENERGIZANTES",
                "category": "ADRENALINE RUSH MANGO 473ML*24",
                "brand": "ADRENALINE",
                "classification": "ENERGIZANTES",
                "unitsPerBox": "24",
                "minOrderUnits": null,
                "packageDescription": "1 box",
                "packageUnitDescription": "24 ea",
                "quantity_max_redeem": null,
                "redeem_unit": null,
                "order_reason_redeem": null,
                "sku_redeem": null,
                "price": {
                    "full_price": 260000,
                    "taxes": [
                        {
                            "taxType": "porcentaje",
                            "taxId": "MWST",
                            "rate": 120
                        }
                    ]
                },
                "points": 0
            },
            {
                "sku": "BA017975",
                "title": "FF NARANJADA SODA 650ML PETX24",
                "categoryId": "CARBONATADAS",
                "category": "FF NARANJADA SODA 650ML PETX24",
                "brand": "FRUTA FRESCA",
                "classification": "CARBONATADAS",
                "unitsPerBox": "24",
                "minOrderUnits": null,
                "packageDescription": "1 box",
                "packageUnitDescription": "24 ea",
                "quantity_max_redeem": null,
                "redeem_unit": null,
                "order_reason_redeem": null,
                "sku_redeem": null,
                "price": {
                    "full_price": 66890,
                    "taxes": [
                        {
                            "taxType": "porcentaje",
                            "taxId": "MWST",
                            "rate": 120
                        }
                    ]
                },
                "points": 0
            },
            {
                "sku": "AA034050",
                "title": "Aqua 500 ML PET * 24",
                "categoryId": "AGUA PURA",
                "category": "Aqua 500 ML PET * 24",
                "brand": "AQUA",
                "classification": "AGUA PURA",
                "unitsPerBox": "24",
                "minOrderUnits": "24.000000000000000000",
                "packageDescription": "1 box",
                "packageUnitDescription": "24 ea",
                "quantity_max_redeem": null,
                "redeem_unit": null,
                "order_reason_redeem": null,
                "sku_redeem": null,
                "price": {
                    "full_price": 60000,
                    "taxes": [
                        {
                            "taxType": "porcentaje",
                            "taxId": "MWST",
                            "rate": 120
                        }
                    ]
                },
                "points": 0
            },
            {
                "sku": "AA851190",
                "title": "BEBIDA JUGAZZO PETIT MANZANA 5",
                "categoryId": "NECTARES",
                "category": "BEBIDA JUGAZZO PETIT MANZANA 5",
                "brand": "JUGAZZO",
                "classification": "NECTARES",
                "unitsPerBox": "24",
                "minOrderUnits": null,
                "packageDescription": "1 box",
                "packageUnitDescription": "24 ea",
                "quantity_max_redeem": null,
                "redeem_unit": null,
                "order_reason_redeem": null,
                "sku_redeem": null,
                "price": {
                    "full_price": 86400,
                    "taxes": [
                        {
                            "taxType": "porcentaje",
                            "taxId": "MWST",
                            "rate": 120
                        }
                    ]
                },
                "points": 0
            },
            {
                "sku": "BA003388",
                "title": "AMP 365 600 ML PET * 24",
                "categoryId": "ENERGIZANTES",
                "category": "AMP 365 600 ML PET * 24",
                "brand": "AMP",
                "classification": "ENERGIZANTES",
                "unitsPerBox": "24",
                "minOrderUnits": null,
                "packageDescription": "1 box",
                "packageUnitDescription": "24 ea",
                "quantity_max_redeem": null,
                "redeem_unit": null,
                "order_reason_redeem": null,
                "sku_redeem": null,
                "price": {
                    "full_price": 111300,
                    "taxes": [
                        {
                            "taxType": "porcentaje",
                            "taxId": "MWST",
                            "rate": 120
                        }
                    ]
                },
                "points": 0
            },
            {
                "sku": "BA004256",
                "title": "AMP FORTE 600 ML PET X 24",
                "categoryId": "ENERGIZANTES",
                "category": "AMP FORTE 600 ML PET X 24",
                "brand": "AMP",
                "classification": "ENERGIZANTES",
                "unitsPerBox": "24",
                "minOrderUnits": null,
                "packageDescription": "1 box",
                "packageUnitDescription": "24 ea",
                "quantity_max_redeem": null,
                "redeem_unit": null,
                "order_reason_redeem": null,
                "sku_redeem": null,
                "price": {
                    "full_price": 111300,
                    "taxes": [
                        {
                            "taxType": "porcentaje",
                            "taxId": "MWST",
                            "rate": 120
                        }
                    ]
                },
                "points": 0
            },
            {
                "sku": "BA013065",
                "title": "NATURALISIMO NARA CON PU1795ML",
                "categoryId": "JUGOS",
                "category": "NATURALISIMO NARA CON PU1795ML",
                "brand": "NATURALISIMO",
                "classification": "JUGOS",
                "unitsPerBox": "6",
                "minOrderUnits": null,
                "packageDescription": "1 box",
                "packageUnitDescription": "6 ea",
                "quantity_max_redeem": null,
                "redeem_unit": null,
                "order_reason_redeem": null,
                "sku_redeem": null,
                "price": {
                    "full_price": 153600,
                    "taxes": [
                        {
                            "taxType": "porcentaje",
                            "taxId": "MWST",
                            "rate": 120
                        }
                    ]
                },
                "points": 0
            },
            {
                "sku": "BA014346",
                "title": "YOGURT GLAD 900 ML EB NATURAL",
                "categoryId": "BEBIDA LECHE",
                "category": "YOGURT GLAD 900 ML EB NATURAL",
                "brand": "GLAD",
                "classification": "BEBIDA LECHE",
                "unitsPerBox": "6",
                "minOrderUnits": null,
                "packageDescription": "1 box",
                "packageUnitDescription": "6 ea",
                "quantity_max_redeem": null,
                "redeem_unit": null,
                "order_reason_redeem": null,
                "sku_redeem": null,
                "price": {
                    "full_price": 139200,
                    "taxes": [
                        {
                            "taxType": "porcentaje",
                            "taxId": "MWST",
                            "rate": 120
                        }
                    ]
                },
                "points": 0
            },
            {
                "sku": "BA000926",
                "title": "MODELO ESPECIAL 12 OZ VNR",
                "categoryId": "CERVEZAS",
                "category": "MODELO ESPECIAL 12 OZ VNR",
                "brand": "MODELO",
                "classification": "CERVEZAS",
                "unitsPerBox": "24",
                "minOrderUnits": "24.000000000000000000",
                "packageDescription": "1 box",
                "packageUnitDescription": "24 ea",
                "quantity_max_redeem": null,
                "redeem_unit": null,
                "order_reason_redeem": null,
                "sku_redeem": null,
                "price": {
                    "full_price": 180000,
                    "taxes": [
                        {
                            "taxType": "porcentaje",
                            "taxId": "MWST",
                            "rate": 120
                        }
                    ]
                },
                "points": 0
            },
            {
                "sku": "BA011117",
                "title": "GRAPETTTE 500 ML GRB LABEL X24",
                "categoryId": "CARBONATADAS",
                "category": "GRAPETTTE 500 ML GRB LABEL X24",
                "brand": "GRAPETTE",
                "classification": "CARBONATADAS",
                "unitsPerBox": "24",
                "minOrderUnits": null,
                "packageDescription": "1 box",
                "packageUnitDescription": "24 ea",
                "quantity_max_redeem": null,
                "redeem_unit": null,
                "order_reason_redeem": null,
                "sku_redeem": null,
                "price": {
                    "full_price": 79000,
                    "taxes": [
                        {
                            "taxType": "porcentaje",
                            "taxId": "MWST",
                            "rate": 120
                        }
                    ]
                },
                "points": 0
            },
            {
                "sku": "BA014352",
                "title": "YOGURT GLAD 900ML EB MELOCOTON",
                "categoryId": "BEBIDA LECHE",
                "category": "YOGURT GLAD 900ML EB MELOCOTON",
                "brand": "GLAD",
                "classification": "BEBIDA LECHE",
                "unitsPerBox": "6",
                "minOrderUnits": null,
                "packageDescription": "1 box",
                "packageUnitDescription": "6 ea",
                "quantity_max_redeem": null,
                "redeem_unit": null,
                "order_reason_redeem": null,
                "sku_redeem": null,
                "price": {
                    "full_price": 157800,
                    "taxes": [
                        {
                            "taxType": "porcentaje",
                            "taxId": "MWST",
                            "rate": 120
                        }
                    ]
                },
                "points": 0
            },
            {
                "sku": "BA000925",
                "title": "MODELO ESPECIAL 12 OZ LATA",
                "categoryId": "CERVEZAS",
                "category": "MODELO ESPECIAL 12 OZ LATA",
                "brand": "MODELO",
                "classification": "CERVEZAS",
                "unitsPerBox": "24",
                "minOrderUnits": null,
                "packageDescription": "1 box",
                "packageUnitDescription": "24 ea",
                "quantity_max_redeem": null,
                "redeem_unit": null,
                "order_reason_redeem": null,
                "sku_redeem": null,
                "price": {
                    "full_price": 115750,
                    "taxes": [
                        {
                            "taxType": "porcentaje",
                            "taxId": "MWST",
                            "rate": 120
                        }
                    ]
                },
                "points": 0
            },
            {
                "sku": "BA011116",
                "title": "LABELS SEVEN UP 500 ML GRB *24",
                "categoryId": "CARBONATADAS",
                "category": "LABELS SEVEN UP 500 ML GRB *24",
                "brand": "SEVEN UP",
                "classification": "CARBONATADAS",
                "unitsPerBox": "24",
                "minOrderUnits": null,
                "packageDescription": "1 box",
                "packageUnitDescription": "24 ea",
                "quantity_max_redeem": null,
                "redeem_unit": null,
                "order_reason_redeem": null,
                "sku_redeem": null,
                "price": {
                    "full_price": 79000,
                    "taxes": [
                        {
                            "taxType": "porcentaje",
                            "taxId": "MWST",
                            "rate": 120
                        }
                    ]
                },
                "points": 0
            },
            {
                "sku": "BA011317",
                "title": "NATURALISIMO MANGO 500ML",
                "categoryId": "JUGOS",
                "category": "NATURALISIMO MANGO 500ML",
                "brand": "NATURALISIMO",
                "classification": "JUGOS",
                "unitsPerBox": "50",
                "minOrderUnits": null,
                "packageDescription": "1 box",
                "packageUnitDescription": "50 ea",
                "quantity_max_redeem": null,
                "redeem_unit": null,
                "order_reason_redeem": null,
                "sku_redeem": null,
                "price": {
                    "full_price": 378000,
                    "taxes": [
                        {
                            "taxType": "porcentaje",
                            "taxId": "MWST",
                            "rate": 120
                        }
                    ]
                },
                "points": 0
            },
            {
                "sku": "BA013319",
                "title": "VOSS AGUA CON GAS 375ML VNR*24",
                "categoryId": "AGUA CON GAS",
                "category": "VOSS AGUA CON GAS 375ML VNR*24",
                "brand": "VOSS",
                "classification": "AGUA CON GAS",
                "unitsPerBox": "24",
                "minOrderUnits": null,
                "packageDescription": "1 box",
                "packageUnitDescription": "24 ea",
                "quantity_max_redeem": null,
                "redeem_unit": null,
                "order_reason_redeem": null,
                "sku_redeem": null,
                "price": {
                    "full_price": 367200,
                    "taxes": [
                        {
                            "taxType": "porcentaje",
                            "taxId": "MWST",
                            "rate": 120
                        }
                    ]
                },
                "points": 0
            },
            {
                "sku": "BA016747",
                "title": "CORONA LOOSE 355 ML * 24",
                "categoryId": "CERVEZAS",
                "category": "CORONA LOOSE 355 ML * 24",
                "brand": "CORONA",
                "classification": "CERVEZAS",
                "unitsPerBox": "24",
                "minOrderUnits": null,
                "packageDescription": "1 box",
                "packageUnitDescription": "24 ea",
                "quantity_max_redeem": null,
                "redeem_unit": null,
                "order_reason_redeem": null,
                "sku_redeem": null,
                "price": {
                    "full_price": 180750,
                    "taxes": [
                        {
                            "taxType": "porcentaje",
                            "taxId": "MWST",
                            "rate": 120
                        }
                    ]
                },
                "points": 0
            },
            {
                "sku": "BA018624",
                "title": "GRAPETTE 355 ML PET *112CJ SP",
                "categoryId": "CARBONATADAS",
                "category": "GRAPETTE 355 ML PET *112CJ SP",
                "brand": "GRAPETTE",
                "classification": "CARBONATADAS",
                "unitsPerBox": "24",
                "minOrderUnits": "24.000000000000000000",
                "packageDescription": "1 box",
                "packageUnitDescription": "24 ea",
                "quantity_max_redeem": null,
                "redeem_unit": null,
                "order_reason_redeem": null,
                "sku_redeem": null,
                "price": {
                    "full_price": 77000,
                    "taxes": [
                        {
                            "taxType": "porcentaje",
                            "taxId": "MWST",
                            "rate": 120
                        }
                    ]
                },
                "points": 0
            },
            {
                "sku": "BA011121",
                "title": "SALUTARIS 355 ML GRB LABEL X24",
                "categoryId": "AGUA CON GAS",
                "category": "SALUTARIS 355 ML GRB LABEL X24",
                "brand": "SALUTARIS",
                "classification": "AGUA CON GAS",
                "unitsPerBox": "24",
                "minOrderUnits": null,
                "packageDescription": "1 box",
                "packageUnitDescription": "24 ea",
                "quantity_max_redeem": null,
                "redeem_unit": null,
                "order_reason_redeem": null,
                "sku_redeem": null,
                "price": {
                    "full_price": 74000,
                    "taxes": [
                        {
                            "taxType": "porcentaje",
                            "taxId": "MWST",
                            "rate": 120
                        }
                    ]
                },
                "points": 0
            },
            {
                "sku": "BA015716",
                "title": "LABELS SALUTARIS 500ML GR  *24",
                "categoryId": "AGUA CON GAS",
                "category": "LABELS SALUTARIS 500ML GR  *24",
                "brand": "SALUTARIS",
                "classification": "AGUA CON GAS",
                "unitsPerBox": "24",
                "minOrderUnits": null,
                "packageDescription": "1 box",
                "packageUnitDescription": "24 ea",
                "quantity_max_redeem": null,
                "redeem_unit": null,
                "order_reason_redeem": null,
                "sku_redeem": null,
                "price": {
                    "full_price": 79000,
                    "taxes": [
                        {
                            "taxType": "porcentaje",
                            "taxId": "MWST",
                            "rate": 120
                        }
                    ]
                },
                "points": 0
            },
            {
                "sku": "BA017809",
                "title": "GRANO PATRIA 340G UN",
                "categoryId": "ABARROTES",
                "category": "GRANO PATRIA 340G UN",
                "brand": "BARISTA",
                "classification": "ABARROTES",
                "unitsPerBox": "4",
                "minOrderUnits": null,
                "packageDescription": "1 box",
                "packageUnitDescription": "4 ea",
                "quantity_max_redeem": null,
                "redeem_unit": null,
                "order_reason_redeem": null,
                "sku_redeem": null,
                "price": {
                    "full_price": 127680,
                    "taxes": [
                        {
                            "taxType": "porcentaje",
                            "taxId": "MWST",
                            "rate": 120
                        }
                    ]
                },
                "points": 0
            },
            {
                "sku": "AA001008",
                "title": "12 ONZAS RICA-RICA",
                "categoryId": "CARBONATADAS",
                "category": "12 ONZAS RICA-RICA",
                "brand": "RICA",
                "classification": "CARBONATADAS",
                "unitsPerBox": "24",
                "minOrderUnits": null,
                "packageDescription": "1 box",
                "packageUnitDescription": "24 ea",
                "quantity_max_redeem": null,
                "redeem_unit": null,
                "order_reason_redeem": null,
                "sku_redeem": null,
                "price": {
                    "full_price": 74000,
                    "taxes": [
                        {
                            "taxType": "porcentaje",
                            "taxId": "MWST",
                            "rate": 120
                        }
                    ]
                },
                "points": 0
            },
            {
                "sku": "AA004006",
                "title": "Grapette 355 ML Lata * 24",
                "categoryId": "CARBONATADAS",
                "category": "Grapette 355 ML Lata * 24",
                "brand": "GRAPETTE",
                "classification": "CARBONATADAS",
                "unitsPerBox": "24",
                "minOrderUnits": "24.000000000000000000",
                "packageDescription": "1 box",
                "packageUnitDescription": "24 ea",
                "quantity_max_redeem": null,
                "redeem_unit": null,
                "order_reason_redeem": null,
                "sku_redeem": null,
                "price": {
                    "full_price": 85050,
                    "taxes": [
                        {
                            "taxType": "porcentaje",
                            "taxId": "MWST",
                            "rate": 120
                        }
                    ]
                },
                "points": 0
            },
            {
                "sku": "AA030142",
                "title": "BAG IN BOX TE LIPTON LIMON 5GL",
                "categoryId": "TE",
                "category": "BAG IN BOX TE LIPTON LIMON 5GL",
                "brand": "LIPTON",
                "classification": "TE",
                "unitsPerBox": "1",
                "minOrderUnits": "1.000000000000000000",
                "packageDescription": "1 box",
                "packageUnitDescription": "1 ea",
                "quantity_max_redeem": null,
                "redeem_unit": null,
                "order_reason_redeem": null,
                "sku_redeem": null,
                "price": {
                    "full_price": 552050,
                    "taxes": [
                        {
                            "taxType": "porcentaje",
                            "taxId": "MWST",
                            "rate": 120
                        }
                    ]
                },
                "points": 0
            },
            {
                "sku": "AA041011",
                "title": "Mirinda Naranja 600 ML PET*24",
                "categoryId": "CARBONATADAS",
                "category": "Mirinda Naranja 600 ML PET*24",
                "brand": "MIRINDA",
                "classification": "CARBONATADAS",
                "unitsPerBox": "24",
                "minOrderUnits": "24.000000000000000000",
                "packageDescription": "1 box",
                "packageUnitDescription": "24 ea",
                "quantity_max_redeem": null,
                "redeem_unit": null,
                "order_reason_redeem": null,
                "sku_redeem": null,
                "price": {
                    "full_price": 131790,
                    "taxes": [
                        {
                            "taxType": "porcentaje",
                            "taxId": "MWST",
                            "rate": 120
                        }
                    ]
                },
                "points": 0
            },
            {
                "sku": "AA074024",
                "title": "1/2 LITRO UVA PET",
                "categoryId": "ISOTONICOS",
                "category": "1/2 LITRO UVA PET",
                "brand": "GATORADE",
                "classification": "ISOTONICOS",
                "unitsPerBox": "24",
                "minOrderUnits": null,
                "packageDescription": "1 box",
                "packageUnitDescription": "24 ea",
                "quantity_max_redeem": null,
                "redeem_unit": null,
                "order_reason_redeem": null,
                "sku_redeem": null,
                "price": {
                    "full_price": 129600,
                    "taxes": [
                        {
                            "taxType": "porcentaje",
                            "taxId": "MWST",
                            "rate": 120
                        }
                    ]
                },
                "points": 0
            },
            {
                "sku": "BA014347",
                "title": "YOGURT GLAD 900 ML EB FRESA",
                "categoryId": "BEBIDA LECHE",
                "category": "YOGURT GLAD 900 ML EB FRESA",
                "brand": "GLAD",
                "classification": "BEBIDA LECHE",
                "unitsPerBox": "6",
                "minOrderUnits": null,
                "packageDescription": "1 box",
                "packageUnitDescription": "6 ea",
                "quantity_max_redeem": null,
                "redeem_unit": null,
                "order_reason_redeem": null,
                "sku_redeem": null,
                "price": {
                    "full_price": 157800,
                    "taxes": [
                        {
                            "taxType": "porcentaje",
                            "taxId": "MWST",
                            "rate": 120
                        }
                    ]
                },
                "points": 0
            },
            {
                "sku": "BA016324",
                "title": "CUBATA MANGO 355 ML LATA * 24",
                "categoryId": "LICOR",
                "category": "CUBATA MANGO 355 ML LATA * 24",
                "brand": "CUBATA",
                "classification": "LICOR",
                "unitsPerBox": "24",
                "minOrderUnits": "24.000000000000000000",
                "packageDescription": "1 box",
                "packageUnitDescription": "24 ea",
                "quantity_max_redeem": null,
                "redeem_unit": null,
                "order_reason_redeem": null,
                "sku_redeem": null,
                "price": {
                    "full_price": 115000,
                    "taxes": [
                        {
                            "taxType": "porcentaje",
                            "taxId": "MWST",
                            "rate": 120
                        }
                    ]
                },
                "points": 0
            },
            {
                "sku": "AA392631",
                "title": "AMP 600 ML PET * 24",
                "categoryId": "ENERGIZANTES",
                "category": "AMP 600 ML PET * 24",
                "brand": "AMP",
                "classification": "ENERGIZANTES",
                "unitsPerBox": "24",
                "minOrderUnits": null,
                "packageDescription": "1 box",
                "packageUnitDescription": "24 ea",
                "quantity_max_redeem": null,
                "redeem_unit": null,
                "order_reason_redeem": null,
                "sku_redeem": null,
                "price": {
                    "full_price": 111300,
                    "taxes": [
                        {
                            "taxType": "porcentaje",
                            "taxId": "MWST",
                            "rate": 120
                        }
                    ]
                },
                "points": 0
            },
            {
                "sku": "AA575698",
                "title": "BUDWEISER LATA 25 OZ",
                "categoryId": "CERVEZAS",
                "category": "BUDWEISER LATA 25 OZ",
                "brand": "BUDWEISER",
                "classification": "CERVEZAS",
                "unitsPerBox": "15",
                "minOrderUnits": null,
                "packageDescription": "1 box",
                "packageUnitDescription": "15 ea",
                "quantity_max_redeem": null,
                "redeem_unit": null,
                "order_reason_redeem": null,
                "sku_redeem": null,
                "price": {
                    "full_price": 110000,
                    "taxes": [
                        {
                            "taxType": "porcentaje",
                            "taxId": "MWST",
                            "rate": 120
                        }
                    ]
                },
                "points": 0
            },
            {
                "sku": "BA004678",
                "title": "PEPSI BLACK 1500ML X 12 PET",
                "categoryId": "CARBONATADAS",
                "category": "PEPSI BLACK 1500ML X 12 PET",
                "brand": "PEPSI",
                "classification": "CARBONATADAS",
                "unitsPerBox": "12",
                "minOrderUnits": "12.000000000000000000",
                "packageDescription": "1 box",
                "packageUnitDescription": "12 ea",
                "quantity_max_redeem": null,
                "redeem_unit": null,
                "order_reason_redeem": null,
                "sku_redeem": null,
                "price": {
                    "full_price": 80100,
                    "taxes": [
                        {
                            "taxType": "porcentaje",
                            "taxId": "MWST",
                            "rate": 120
                        }
                    ]
                },
                "points": 0
            },
            {
                "sku": "BA019455",
                "title": "MICHELOB BOTTLE 355 ML GNRB X2",
                "categoryId": "CERVEZAS",
                "category": "MICHELOB BOTTLE 355 ML GNRB X2",
                "brand": "MICHELOB",
                "classification": "CERVEZAS",
                "unitsPerBox": "24",
                "minOrderUnits": null,
                "packageDescription": "1 box",
                "packageUnitDescription": "24 ea",
                "quantity_max_redeem": null,
                "redeem_unit": null,
                "order_reason_redeem": null,
                "sku_redeem": null,
                "price": {
                    "full_price": 220000,
                    "taxes": [
                        {
                            "taxType": "porcentaje",
                            "taxId": "MWST",
                            "rate": 120
                        }
                    ]
                },
                "points": 0
            },
            {
                "sku": "AA123108",
                "title": "CALIFORNIA 500ML PINA COCO",
                "categoryId": "JUGOS",
                "category": "CALIFORNIA 500ML PINA COCO",
                "brand": "ICE COOL",
                "classification": "JUGOS",
                "unitsPerBox": "24",
                "minOrderUnits": null,
                "packageDescription": "1 box",
                "packageUnitDescription": "24 ea",
                "quantity_max_redeem": null,
                "redeem_unit": null,
                "order_reason_redeem": null,
                "sku_redeem": null,
                "price": {
                    "full_price": 173400,
                    "taxes": [
                        {
                            "taxType": "porcentaje",
                            "taxId": "MWST",
                            "rate": 120
                        }
                    ]
                },
                "points": 0
            },
            {
                "sku": "BA001534",
                "title": "AMP 365 12oz GRB",
                "categoryId": "ENERGIZANTES",
                "category": "AMP 365 12oz GRB",
                "brand": "AMP",
                "classification": "ENERGIZANTES",
                "unitsPerBox": "24",
                "minOrderUnits": null,
                "packageDescription": "1 box",
                "packageUnitDescription": "24 ea",
                "quantity_max_redeem": null,
                "redeem_unit": null,
                "order_reason_redeem": null,
                "sku_redeem": null,
                "price": {
                    "full_price": 66890,
                    "taxes": [
                        {
                            "taxType": "porcentaje",
                            "taxId": "MWST",
                            "rate": 120
                        }
                    ]
                },
                "points": 0
            },
            {
                "sku": "BA013156",
                "title": "VIP PEACH 355 ML GNRB *24",
                "categoryId": "LICOR",
                "category": "VIP PEACH 355 ML GNRB *24",
                "brand": "VIP",
                "classification": "LICOR",
                "unitsPerBox": "24",
                "minOrderUnits": null,
                "packageDescription": "1 box",
                "packageUnitDescription": "24 ea",
                "quantity_max_redeem": null,
                "redeem_unit": null,
                "order_reason_redeem": null,
                "sku_redeem": null,
                "price": {
                    "full_price": 192000,
                    "taxes": [
                        {
                            "taxType": "porcentaje",
                            "taxId": "MWST",
                            "rate": 120
                        }
                    ]
                },
                "points": 0
            },
            {
                "sku": "BA018623",
                "title": "PEPSI 355 ML PET * 112CJ SP",
                "categoryId": "CARBONATADAS",
                "category": "PEPSI 355 ML PET * 112CJ SP",
                "brand": "PEPSI",
                "classification": "CARBONATADAS",
                "unitsPerBox": "24",
                "minOrderUnits": "24.000000000000000000",
                "packageDescription": "1 box",
                "packageUnitDescription": "24 ea",
                "quantity_max_redeem": null,
                "redeem_unit": null,
                "order_reason_redeem": null,
                "sku_redeem": null,
                "price": {
                    "full_price": 77000,
                    "taxes": [
                        {
                            "taxType": "porcentaje",
                            "taxId": "MWST",
                            "rate": 120
                        }
                    ]
                },
                "points": 0
            },
            {
                "sku": "BA000456",
                "title": "CORONA 207 ML  VIDRIO NO RETOR",
                "categoryId": "CERVEZAS",
                "category": "CORONA 207 ML  VIDRIO NO RETOR",
                "brand": "CORONA",
                "classification": "CERVEZAS",
                "unitsPerBox": "24",
                "minOrderUnits": null,
                "packageDescription": "1 box",
                "packageUnitDescription": "24 ea",
                "quantity_max_redeem": null,
                "redeem_unit": null,
                "order_reason_redeem": null,
                "sku_redeem": null,
                "price": {
                    "full_price": 110000,
                    "taxes": [
                        {
                            "taxType": "porcentaje",
                            "taxId": "MWST",
                            "rate": 120
                        }
                    ]
                },
                "points": 0
            },
            {
                "sku": "AA007005",
                "title": "2 LITROS SALUTARIS",
                "categoryId": "AGUA CON GAS",
                "category": "2 LITROS SALUTARIS",
                "brand": "SALUTARIS",
                "classification": "AGUA CON GAS",
                "unitsPerBox": "8",
                "minOrderUnits": null,
                "packageDescription": "1 box",
                "packageUnitDescription": "8 ea",
                "quantity_max_redeem": null,
                "redeem_unit": null,
                "order_reason_redeem": null,
                "sku_redeem": null,
                "price": {
                    "full_price": 87000,
                    "taxes": [
                        {
                            "taxType": "porcentaje",
                            "taxId": "MWST",
                            "rate": 120
                        }
                    ]
                },
                "points": 0
            },
            {
                "sku": "AA029011",
                "title": "BAG IN BOX MIRINDA",
                "categoryId": "CARBONATADAS",
                "category": "BAG IN BOX MIRINDA",
                "brand": "MIRINDA",
                "classification": "CARBONATADAS",
                "unitsPerBox": "1",
                "minOrderUnits": "1.000000000000000000",
                "packageDescription": "1 box",
                "packageUnitDescription": "1 ea",
                "quantity_max_redeem": null,
                "redeem_unit": null,
                "order_reason_redeem": null,
                "sku_redeem": null,
                "price": {
                    "full_price": 552050,
                    "taxes": [
                        {
                            "taxType": "porcentaje",
                            "taxId": "MWST",
                            "rate": 120
                        }
                    ]
                },
                "points": 0
            },
            {
                "sku": "BA003526",
                "title": "Ting 500 ML GRB * 24",
                "categoryId": "CARBONATADAS",
                "category": "Ting 500 ML GRB * 24",
                "brand": "TING",
                "classification": "CARBONATADAS",
                "unitsPerBox": "24",
                "minOrderUnits": null,
                "packageDescription": "1 box",
                "packageUnitDescription": "24 ea",
                "quantity_max_redeem": null,
                "redeem_unit": null,
                "order_reason_redeem": null,
                "sku_redeem": null,
                "price": {
                    "full_price": 76890,
                    "taxes": [
                        {
                            "taxType": "porcentaje",
                            "taxId": "MWST",
                            "rate": 120
                        }
                    ]
                },
                "points": 0
            },
            {
                "sku": "AA029003",
                "title": "BAG IN BOX SEVEN UP",
                "categoryId": "CARBONATADAS",
                "category": "BAG IN BOX SEVEN UP",
                "brand": "SEVEN UP",
                "classification": "CARBONATADAS",
                "unitsPerBox": "1",
                "minOrderUnits": "1.000000000000000000",
                "packageDescription": "1 box",
                "packageUnitDescription": "1 ea",
                "quantity_max_redeem": null,
                "redeem_unit": null,
                "order_reason_redeem": null,
                "sku_redeem": null,
                "price": {
                    "full_price": 552050,
                    "taxes": [
                        {
                            "taxType": "porcentaje",
                            "taxId": "MWST",
                            "rate": 120
                        }
                    ]
                },
                "points": 0
            },
            {
                "sku": "AA066107",
                "title": "340ML LATA PETIT VEGETALES",
                "categoryId": "NECTARES",
                "category": "340ML LATA PETIT VEGETALES",
                "brand": "PETIT",
                "classification": "NECTARES",
                "unitsPerBox": "24",
                "minOrderUnits": null,
                "packageDescription": "1 box",
                "packageUnitDescription": "24 ea",
                "quantity_max_redeem": null,
                "redeem_unit": null,
                "order_reason_redeem": null,
                "sku_redeem": null,
                "price": {
                    "full_price": 86400,
                    "taxes": [
                        {
                            "taxType": "porcentaje",
                            "taxId": "MWST",
                            "rate": 120
                        }
                    ]
                },
                "points": 0
            },
            {
                "sku": "BA011300",
                "title": "NAT NARANJO 3785ML FOODSERVICE",
                "categoryId": "JUGOS",
                "category": "NAT NARANJO 3785ML FOODSERVICE",
                "brand": "NATURALISIMO",
                "classification": "JUGOS",
                "unitsPerBox": "8",
                "minOrderUnits": null,
                "packageDescription": "1 box",
                "packageUnitDescription": "8 ea",
                "quantity_max_redeem": null,
                "redeem_unit": null,
                "order_reason_redeem": null,
                "sku_redeem": null,
                "price": {
                    "full_price": 248900,
                    "taxes": [
                        {
                            "taxType": "porcentaje",
                            "taxId": "MWST",
                            "rate": 120
                        }
                    ]
                },
                "points": 0
            },
            {
                "sku": "AA028020",
                "title": "GATORADE LIMA LIMON 24/600ML P",
                "categoryId": "ISOTONICOS",
                "category": "GATORADE LIMA LIMON 24/600ML P",
                "brand": "GATORADE",
                "classification": "ISOTONICOS",
                "unitsPerBox": "24",
                "minOrderUnits": null,
                "packageDescription": "1 box",
                "packageUnitDescription": "24 ea",
                "quantity_max_redeem": null,
                "redeem_unit": null,
                "order_reason_redeem": null,
                "sku_redeem": null,
                "price": {
                    "full_price": 190000,
                    "taxes": [
                        {
                            "taxType": "porcentaje",
                            "taxId": "MWST",
                            "rate": 120
                        }
                    ]
                },
                "points": 0
            },
            {
                "sku": "AA685008",
                "title": "RICA ROJA 12 ONZAS PET",
                "categoryId": "CARBONATADAS",
                "category": "RICA ROJA 12 ONZAS PET",
                "brand": "RICA",
                "classification": "CARBONATADAS",
                "unitsPerBox": "24",
                "minOrderUnits": "24.000000000000000000",
                "packageDescription": "1 box",
                "packageUnitDescription": "24 ea",
                "quantity_max_redeem": null,
                "redeem_unit": null,
                "order_reason_redeem": null,
                "sku_redeem": null,
                "price": {
                    "full_price": 77000,
                    "taxes": [
                        {
                            "taxType": "porcentaje",
                            "taxId": "MWST",
                            "rate": 120
                        }
                    ]
                },
                "points": 0
            },
            {
                "sku": "AA685010",
                "title": "RICA MANZANA 12 ONZAS PET",
                "categoryId": "CARBONATADAS",
                "category": "RICA MANZANA 12 ONZAS PET",
                "brand": "RICA",
                "classification": "CARBONATADAS",
                "unitsPerBox": "24",
                "minOrderUnits": null,
                "packageDescription": "1 box",
                "packageUnitDescription": "24 ea",
                "quantity_max_redeem": null,
                "redeem_unit": null,
                "order_reason_redeem": null,
                "sku_redeem": null,
                "price": {
                    "full_price": 77000,
                    "taxes": [
                        {
                            "taxType": "porcentaje",
                            "taxId": "MWST",
                            "rate": 120
                        }
                    ]
                },
                "points": 0
            },
            {
                "sku": "BA000556",
                "title": "710 ML VIDRIO NO RET. CORONA",
                "categoryId": "CERVEZAS",
                "category": "710 ML VIDRIO NO RET. CORONA",
                "brand": "CORONA",
                "classification": "CERVEZAS",
                "unitsPerBox": "12",
                "minOrderUnits": null,
                "packageDescription": "1 box",
                "packageUnitDescription": "12 ea",
                "quantity_max_redeem": null,
                "redeem_unit": null,
                "order_reason_redeem": null,
                "sku_redeem": null,
                "price": {
                    "full_price": 135000,
                    "taxes": [
                        {
                            "taxType": "porcentaje",
                            "taxId": "MWST",
                            "rate": 120
                        }
                    ]
                },
                "points": 0
            },
            {
                "sku": "BA012908",
                "title": "VIP PINK LEMONADE 355MLGNRB*24",
                "categoryId": "LICOR",
                "category": "VIP PINK LEMONADE 355MLGNRB*24",
                "brand": "VIP",
                "classification": "LICOR",
                "unitsPerBox": "24",
                "minOrderUnits": null,
                "packageDescription": "1 box",
                "packageUnitDescription": "24 ea",
                "quantity_max_redeem": null,
                "redeem_unit": null,
                "order_reason_redeem": null,
                "sku_redeem": null,
                "price": {
                    "full_price": 192000,
                    "taxes": [
                        {
                            "taxType": "porcentaje",
                            "taxId": "MWST",
                            "rate": 120
                        }
                    ]
                },
                "points": 0
            },
            {
                "sku": "AA109010",
                "title": "RICA MANZANA 3 L PET",
                "categoryId": "CARBONATADAS",
                "category": "RICA MANZANA 3 L PET",
                "brand": "RICA",
                "classification": "CARBONATADAS",
                "unitsPerBox": "6",
                "minOrderUnits": null,
                "packageDescription": "1 box",
                "packageUnitDescription": "6 ea",
                "quantity_max_redeem": null,
                "redeem_unit": null,
                "order_reason_redeem": null,
                "sku_redeem": null,
                "price": {
                    "full_price": 64800,
                    "taxes": [
                        {
                            "taxType": "porcentaje",
                            "taxId": "MWST",
                            "rate": 120
                        }
                    ]
                },
                "points": 0
            },
            {
                "sku": "BA003865",
                "title": "PETIT PERA CALCIO 200ML TETRA",
                "categoryId": "NECTARES",
                "category": "PETIT PERA CALCIO 200ML TETRA",
                "brand": "PETIT",
                "classification": "NECTARES",
                "unitsPerBox": "24",
                "minOrderUnits": null,
                "packageDescription": "1 box",
                "packageUnitDescription": "24 ea",
                "quantity_max_redeem": null,
                "redeem_unit": null,
                "order_reason_redeem": null,
                "sku_redeem": null,
                "price": {
                    "full_price": 55100,
                    "taxes": [
                        {
                            "taxType": "porcentaje",
                            "taxId": "MWST",
                            "rate": 120
                        }
                    ]
                },
                "points": 0
            },
            {
                "sku": "BA003917",
                "title": "Goose 312 355 ML VNR",
                "categoryId": "CERVEZAS",
                "category": "Goose 312 355 ML VNR",
                "brand": "GOOSE ISLAND",
                "classification": "CERVEZAS",
                "unitsPerBox": "24",
                "minOrderUnits": null,
                "packageDescription": "1 box",
                "packageUnitDescription": "24 ea",
                "quantity_max_redeem": null,
                "redeem_unit": null,
                "order_reason_redeem": null,
                "sku_redeem": null,
                "price": {
                    "full_price": 400000,
                    "taxes": [
                        {
                            "taxType": "porcentaje",
                            "taxId": "MWST",
                            "rate": 120
                        }
                    ]
                },
                "points": 0
            },
            {
                "sku": "BA018311",
                "title": "Pepsi 450 ML PET * 24",
                "categoryId": "CARBONATADAS",
                "category": "Pepsi 450 ML PET * 24",
                "brand": "PEPSI",
                "classification": "CARBONATADAS",
                "unitsPerBox": "24",
                "minOrderUnits": null,
                "packageDescription": "1 box",
                "packageUnitDescription": "24 ea",
                "quantity_max_redeem": null,
                "redeem_unit": null,
                "order_reason_redeem": null,
                "sku_redeem": null,
                "price": {
                    "full_price": 86400,
                    "taxes": [
                        {
                            "taxType": "porcentaje",
                            "taxId": "MWST",
                            "rate": 120
                        }
                    ]
                },
                "points": 0
            },
            {
                "sku": "AA029001",
                "title": "BAG IN BOX CAJI PEPSI",
                "categoryId": "CARBONATADAS",
                "category": "BAG IN BOX CAJI PEPSI",
                "brand": "PEPSI",
                "classification": "CARBONATADAS",
                "unitsPerBox": "1",
                "minOrderUnits": "1.000000000000000000",
                "packageDescription": "1 box",
                "packageUnitDescription": "1 ea",
                "quantity_max_redeem": null,
                "redeem_unit": null,
                "order_reason_redeem": null,
                "sku_redeem": null,
                "price": {
                    "full_price": 552050,
                    "taxes": [
                        {
                            "taxType": "porcentaje",
                            "taxId": "MWST",
                            "rate": 120
                        }
                    ]
                },
                "points": 0
            },
            {
                "sku": "AA041005",
                "title": "600 ML PET 24 U SALUTARIS",
                "categoryId": "AGUA CON GAS",
                "category": "600 ML PET 24 U SALUTARIS",
                "brand": "SALUTARIS",
                "classification": "AGUA CON GAS",
                "unitsPerBox": "24",
                "minOrderUnits": "24.000000000000000000",
                "packageDescription": "1 box",
                "packageUnitDescription": "24 ea",
                "quantity_max_redeem": null,
                "redeem_unit": null,
                "order_reason_redeem": null,
                "sku_redeem": null,
                "price": {
                    "full_price": 131790,
                    "taxes": [
                        {
                            "taxType": "porcentaje",
                            "taxId": "MWST",
                            "rate": 120
                        }
                    ]
                },
                "points": 0
            },
            {
                "sku": "BA005471",
                "title": "6PK PETI SURT 200ML TET X24 PA",
                "categoryId": "NECTARES",
                "category": "6PK PETI SURT 200ML TET X24 PA",
                "brand": "PETIT",
                "classification": "NECTARES",
                "unitsPerBox": "24",
                "minOrderUnits": null,
                "packageDescription": "1 box",
                "packageUnitDescription": "24 ea",
                "quantity_max_redeem": null,
                "redeem_unit": null,
                "order_reason_redeem": null,
                "sku_redeem": null,
                "price": {
                    "full_price": 44600,
                    "taxes": [
                        {
                            "taxType": "porcentaje",
                            "taxId": "MWST",
                            "rate": 120
                        }
                    ]
                },
                "points": 0
            },
            {
                "sku": "BA017470",
                "title": "CUBATA MARACUYA 350ML* 24",
                "categoryId": "LICOR",
                "category": "CUBATA MARACUYA 350ML* 24",
                "brand": "CUBATA",
                "classification": "LICOR",
                "unitsPerBox": "24",
                "minOrderUnits": "24.000000000000000000",
                "packageDescription": "1 box",
                "packageUnitDescription": "24 ea",
                "quantity_max_redeem": null,
                "redeem_unit": null,
                "order_reason_redeem": null,
                "sku_redeem": null,
                "price": {
                    "full_price": 115000,
                    "taxes": [
                        {
                            "taxType": "porcentaje",
                            "taxId": "MWST",
                            "rate": 120
                        }
                    ]
                },
                "points": 0
            },
            {
                "sku": "AA350936",
                "title": "CO2 EN CILINDRO 20 LIBRAS",
                "categoryId": "CILINDRO",
                "category": "CO2 EN CILINDRO 20 LIBRAS",
                "brand": "SIN MARCA",
                "classification": "CILINDRO",
                "unitsPerBox": "1",
                "minOrderUnits": null,
                "packageDescription": "1 box",
                "packageUnitDescription": "1 ea",
                "quantity_max_redeem": null,
                "redeem_unit": null,
                "order_reason_redeem": null,
                "sku_redeem": null,
                "price": {
                    "full_price": 1560000,
                    "taxes": [
                        {
                            "taxType": "porcentaje",
                            "taxId": "MWST",
                            "rate": 120
                        }
                    ]
                },
                "points": 0
            },
            {
                "sku": "BA006916",
                "title": "SALUTARIS TORONJA 355ML LATA",
                "categoryId": "CARBONATADAS",
                "category": "SALUTARIS TORONJA 355ML LATA",
                "brand": "SALUTARIS",
                "classification": "CARBONATADAS",
                "unitsPerBox": "24",
                "minOrderUnits": null,
                "packageDescription": "1 box",
                "packageUnitDescription": "24 ea",
                "quantity_max_redeem": null,
                "redeem_unit": null,
                "order_reason_redeem": null,
                "sku_redeem": null,
                "price": {
                    "full_price": 110700,
                    "taxes": [
                        {
                            "taxType": "porcentaje",
                            "taxId": "MWST",
                            "rate": 120
                        }
                    ]
                },
                "points": 0
            },
            {
                "sku": "BA012905",
                "title": "VIP WILD BERRIES355ML GNRBX24",
                "categoryId": "LICOR",
                "category": "VIP WILD BERRIES355ML GNRBX24",
                "brand": "VIP",
                "classification": "LICOR",
                "unitsPerBox": "24",
                "minOrderUnits": null,
                "packageDescription": "1 box",
                "packageUnitDescription": "24 ea",
                "quantity_max_redeem": null,
                "redeem_unit": null,
                "order_reason_redeem": null,
                "sku_redeem": null,
                "price": {
                    "full_price": 192000,
                    "taxes": [
                        {
                            "taxType": "porcentaje",
                            "taxId": "MWST",
                            "rate": 120
                        }
                    ]
                },
                "points": 0
            },
            {
                "sku": "000000000000220013",
                "title": "VASO POLYPAPEL 32 ONZ. GLOBAL",
                "categoryId": null,
                "category": "VASO POLYPAPEL 32 ONZ. GLOBAL",
                "brand": null,
                "classification": null,
                "unitsPerBox": "500",
                "minOrderUnits": null,
                "packageDescription": "1 box",
                "packageUnitDescription": "500 ea",
                "quantity_max_redeem": null,
                "redeem_unit": null,
                "order_reason_redeem": null,
                "sku_redeem": null,
                "price": {
                    "full_price": 520,
                    "taxes": [
                        {
                            "taxType": "porcentaje",
                            "taxId": "MWST",
                            "rate": 120
                        }
                    ]
                },
                "points": 0
            },
            {
                "sku": "AA001003",
                "title": "Seven Up 355 ML GRB * 24",
                "categoryId": "CARBONATADAS",
                "category": "Seven Up 355 ML GRB * 24",
                "brand": "SEVEN UP",
                "classification": "CARBONATADAS",
                "unitsPerBox": "24",
                "minOrderUnits": null,
                "packageDescription": "1 box",
                "packageUnitDescription": "24 ea",
                "quantity_max_redeem": null,
                "redeem_unit": null,
                "order_reason_redeem": null,
                "sku_redeem": null,
                "price": {
                    "full_price": 74000,
                    "taxes": [
                        {
                            "taxType": "porcentaje",
                            "taxId": "MWST",
                            "rate": 120
                        }
                    ]
                },
                "points": 0
            },
            {
                "sku": "AA340173",
                "title": "Squiz 500 ML PET * 24",
                "categoryId": "STILL DRINKS",
                "category": "Squiz 500 ML PET * 24",
                "brand": "SQUIZ",
                "classification": "STILL DRINKS",
                "unitsPerBox": "24",
                "minOrderUnits": null,
                "packageDescription": "1 box",
                "packageUnitDescription": "24 ea",
                "quantity_max_redeem": null,
                "redeem_unit": null,
                "order_reason_redeem": null,
                "sku_redeem": null,
                "price": {
                    "full_price": 60000,
                    "taxes": [
                        {
                            "taxType": "porcentaje",
                            "taxId": "MWST",
                            "rate": 120
                        }
                    ]
                },
                "points": 0
            },
            {
                "sku": "BA002211",
                "title": "PEPSI BLACK 355 ML LATA",
                "categoryId": "CARBONATADAS",
                "category": "PEPSI BLACK 355 ML LATA",
                "brand": "PEPSI",
                "classification": "CARBONATADAS",
                "unitsPerBox": "24",
                "minOrderUnits": "24.000000000000000000",
                "packageDescription": "1 box",
                "packageUnitDescription": "24 ea",
                "quantity_max_redeem": null,
                "redeem_unit": null,
                "order_reason_redeem": null,
                "sku_redeem": null,
                "price": {
                    "full_price": 85050,
                    "taxes": [
                        {
                            "taxType": "porcentaje",
                            "taxId": "MWST",
                            "rate": 120
                        }
                    ]
                },
                "points": 0
            },
            {
                "sku": "BA005833",
                "title": "RED BULL ENERGY 250ML LATA",
                "categoryId": "ENERGIZANTES",
                "category": "RED BULL ENERGY 250ML LATA",
                "brand": "RED BULL",
                "classification": "ENERGIZANTES",
                "unitsPerBox": "24",
                "minOrderUnits": null,
                "packageDescription": "1 box",
                "packageUnitDescription": "24 ea",
                "quantity_max_redeem": null,
                "redeem_unit": null,
                "order_reason_redeem": null,
                "sku_redeem": null,
                "price": {
                    "full_price": 307200,
                    "taxes": [
                        {
                            "taxType": "porcentaje",
                            "taxId": "MWST",
                            "rate": 120
                        }
                    ]
                },
                "points": 0
            },
            {
                "sku": "AA109009",
                "title": "RICA PINA 3 LITROS PET",
                "categoryId": "CARBONATADAS",
                "category": "RICA PINA 3 LITROS PET",
                "brand": "RICA",
                "classification": "CARBONATADAS",
                "unitsPerBox": "6",
                "minOrderUnits": null,
                "packageDescription": "1 box",
                "packageUnitDescription": "6 ea",
                "quantity_max_redeem": null,
                "redeem_unit": null,
                "order_reason_redeem": null,
                "sku_redeem": null,
                "price": {
                    "full_price": 64800,
                    "taxes": [
                        {
                            "taxType": "porcentaje",
                            "taxId": "MWST",
                            "rate": 120
                        }
                    ]
                },
                "points": 0
            },
            {
                "sku": "BA013318",
                "title": "VOSS AGUA 375ML VNR * 24",
                "categoryId": "AGUA PURA",
                "category": "VOSS AGUA 375ML VNR * 24",
                "brand": "VOSS",
                "classification": "AGUA PURA",
                "unitsPerBox": "24",
                "minOrderUnits": null,
                "packageDescription": "1 box",
                "packageUnitDescription": "24 ea",
                "quantity_max_redeem": null,
                "redeem_unit": null,
                "order_reason_redeem": null,
                "sku_redeem": null,
                "price": {
                    "full_price": 367200,
                    "taxes": [
                        {
                            "taxType": "porcentaje",
                            "taxId": "MWST",
                            "rate": 120
                        }
                    ]
                },
                "points": 0
            },
            {
                "sku": "000000000000220010",
                "title": "VASO POLYPAPEL 12 ONZ. GLOBAL",
                "categoryId": null,
                "category": "VASO POLYPAPEL 12 ONZ. GLOBAL",
                "brand": null,
                "classification": null,
                "unitsPerBox": "1000",
                "minOrderUnits": null,
                "packageDescription": "1 box",
                "packageUnitDescription": "1000 ea",
                "quantity_max_redeem": null,
                "redeem_unit": null,
                "order_reason_redeem": null,
                "sku_redeem": null,
                "price": {
                    "full_price": 380000,
                    "taxes": [
                        {
                            "taxType": "porcentaje",
                            "taxId": "MWST",
                            "rate": 120
                        }
                    ]
                },
                "points": 0
            },
            {
                "sku": "AA131113",
                "title": "Be Light Jamaica 600 ML PET*24",
                "categoryId": "AGUA SABORIZADA",
                "category": "Be Light Jamaica 600 ML PET*24",
                "brand": "BE LIGHT",
                "classification": "AGUA SABORIZADA",
                "unitsPerBox": "24",
                "minOrderUnits": "24.000000000000000000",
                "packageDescription": "1 box",
                "packageUnitDescription": "24 ea",
                "quantity_max_redeem": null,
                "redeem_unit": null,
                "order_reason_redeem": null,
                "sku_redeem": null,
                "price": {
                    "full_price": 107890,
                    "taxes": [
                        {
                            "taxType": "porcentaje",
                            "taxId": "MWST",
                            "rate": 120
                        }
                    ]
                },
                "points": 0
            },
            {
                "sku": "AA685006",
                "title": "Grapette 355 ML PET * 24",
                "categoryId": "CARBONATADAS",
                "category": "Grapette 355 ML PET * 24",
                "brand": "GRAPETTE",
                "classification": "CARBONATADAS",
                "unitsPerBox": "24",
                "minOrderUnits": null,
                "packageDescription": "1 box",
                "packageUnitDescription": "24 ea",
                "quantity_max_redeem": null,
                "redeem_unit": null,
                "order_reason_redeem": null,
                "sku_redeem": null,
                "price": {
                    "full_price": 77000,
                    "taxes": [
                        {
                            "taxType": "porcentaje",
                            "taxId": "MWST",
                            "rate": 120
                        }
                    ]
                },
                "points": 0
            },
            {
                "sku": "BA003297",
                "title": "GATORADE FRUIT PUNCH SPORT CAP",
                "categoryId": "ISOTONICOS",
                "category": "GATORADE FRUIT PUNCH SPORT CAP",
                "brand": "GATORADE",
                "classification": "ISOTONICOS",
                "unitsPerBox": "24",
                "minOrderUnits": "24.000000000000000000",
                "packageDescription": "1 box",
                "packageUnitDescription": "24 ea",
                "quantity_max_redeem": null,
                "redeem_unit": null,
                "order_reason_redeem": null,
                "sku_redeem": null,
                "price": {
                    "full_price": 190000,
                    "taxes": [
                        {
                            "taxType": "porcentaje",
                            "taxId": "MWST",
                            "rate": 120
                        }
                    ]
                },
                "points": 0
            },
            {
                "sku": "AA041001",
                "title": "Pepsi 600 ML PET * 24",
                "categoryId": "CARBONATADAS",
                "category": "Pepsi 600 ML PET * 24",
                "brand": "PEPSI",
                "classification": "CARBONATADAS",
                "unitsPerBox": "24",
                "minOrderUnits": "24.000000000000000000",
                "packageDescription": "1 box",
                "packageUnitDescription": "24 ea",
                "quantity_max_redeem": null,
                "redeem_unit": null,
                "order_reason_redeem": null,
                "sku_redeem": null,
                "price": {
                    "full_price": 131790,
                    "taxes": [
                        {
                            "taxType": "porcentaje",
                            "taxId": "MWST",
                            "rate": 120
                        }
                    ]
                },
                "points": 0
            },
            {
                "sku": "AA131115",
                "title": "Be Light Manzana 600 ML PET*24",
                "categoryId": "AGUA SABORIZADA",
                "category": "Be Light Manzana 600 ML PET*24",
                "brand": "BE LIGHT",
                "classification": "AGUA SABORIZADA",
                "unitsPerBox": "24",
                "minOrderUnits": null,
                "packageDescription": "1 box",
                "packageUnitDescription": "24 ea",
                "quantity_max_redeem": null,
                "redeem_unit": null,
                "order_reason_redeem": null,
                "sku_redeem": null,
                "price": {
                    "full_price": 107890,
                    "taxes": [
                        {
                            "taxType": "porcentaje",
                            "taxId": "MWST",
                            "rate": 120
                        }
                    ]
                },
                "points": 0
            },
            {
                "sku": "AA570231",
                "title": "Mountain Dew 355 ML Lata * 24",
                "categoryId": "CARBONATADAS",
                "category": "Mountain Dew 355 ML Lata * 24",
                "brand": "MOUNTAIN DEW",
                "classification": "CARBONATADAS",
                "unitsPerBox": "24",
                "minOrderUnits": null,
                "packageDescription": "1 box",
                "packageUnitDescription": "24 ea",
                "quantity_max_redeem": null,
                "redeem_unit": null,
                "order_reason_redeem": null,
                "sku_redeem": null,
                "price": {
                    "full_price": 85050,
                    "taxes": [
                        {
                            "taxType": "porcentaje",
                            "taxId": "MWST",
                            "rate": 120
                        }
                    ]
                },
                "points": 0
            },
            {
                "sku": "AA583079",
                "title": "NECTAR PETIT DZ DREAM CAP 24/3",
                "categoryId": "NECTARES",
                "category": "NECTAR PETIT DZ DREAM CAP 24/3",
                "brand": "PETIT",
                "classification": "NECTARES",
                "unitsPerBox": "24",
                "minOrderUnits": "24.000000000000000000",
                "packageDescription": "1 box",
                "packageUnitDescription": "24 ea",
                "quantity_max_redeem": null,
                "redeem_unit": null,
                "order_reason_redeem": null,
                "sku_redeem": null,
                "price": {
                    "full_price": 75600,
                    "taxes": [
                        {
                            "taxType": "porcentaje",
                            "taxId": "MWST",
                            "rate": 120
                        }
                    ]
                },
                "points": 0
            },
            {
                "sku": "AA009001",
                "title": "9 ONZAS PEPSI",
                "categoryId": "CARBONATADAS",
                "category": "9 ONZAS PEPSI",
                "brand": "PEPSI",
                "classification": "CARBONATADAS",
                "unitsPerBox": "24",
                "minOrderUnits": null,
                "packageDescription": "1 box",
                "packageUnitDescription": "24 ea",
                "quantity_max_redeem": null,
                "redeem_unit": null,
                "order_reason_redeem": null,
                "sku_redeem": null,
                "price": {
                    "full_price": 68500,
                    "taxes": [
                        {
                            "taxType": "porcentaje",
                            "taxId": "MWST",
                            "rate": 120
                        }
                    ]
                },
                "points": 0
            },
            {
                "sku": "AA033024",
                "title": "GATORADE UVA 16 OZ GRB",
                "categoryId": "ISOTONICOS",
                "category": "GATORADE UVA 16 OZ GRB",
                "brand": "GATORADE",
                "classification": "ISOTONICOS",
                "unitsPerBox": "24",
                "minOrderUnits": null,
                "packageDescription": "1 box",
                "packageUnitDescription": "24 ea",
                "quantity_max_redeem": null,
                "redeem_unit": null,
                "order_reason_redeem": null,
                "sku_redeem": null,
                "price": {
                    "full_price": 87890,
                    "taxes": [
                        {
                            "taxType": "porcentaje",
                            "taxId": "MWST",
                            "rate": 120
                        }
                    ]
                },
                "points": 0
            },
            {
                "sku": "BA011638",
                "title": "24 PK LIGHT LATA SURTIDO 355ML",
                "categoryId": "CARBONATADAS",
                "category": "24 PK LIGHT LATA SURTIDO 355ML",
                "brand": "PEPSI",
                "classification": "CARBONATADAS",
                "unitsPerBox": "24",
                "minOrderUnits": null,
                "packageDescription": "1 box",
                "packageUnitDescription": "24 ea",
                "quantity_max_redeem": null,
                "redeem_unit": null,
                "order_reason_redeem": null,
                "sku_redeem": null,
                "price": {
                    "full_price": 81000,
                    "taxes": [
                        {
                            "taxType": "porcentaje",
                            "taxId": "MWST",
                            "rate": 120
                        }
                    ]
                },
                "points": 0
            },
            {
                "sku": "BA013356",
                "title": "REDBULL TROPICAL EDIT 250MLX24",
                "categoryId": "ENERGIZANTES",
                "category": "REDBULL TROPICAL EDIT 250MLX24",
                "brand": "RED BULL",
                "classification": "ENERGIZANTES",
                "unitsPerBox": "24",
                "minOrderUnits": null,
                "packageDescription": "1 box",
                "packageUnitDescription": "24 ea",
                "quantity_max_redeem": null,
                "redeem_unit": null,
                "order_reason_redeem": null,
                "sku_redeem": null,
                "price": {
                    "full_price": 307200,
                    "taxes": [
                        {
                            "taxType": "porcentaje",
                            "taxId": "MWST",
                            "rate": 120
                        }
                    ]
                },
                "points": 0
            },
            {
                "sku": "BA014336",
                "title": "GLAD 200 ML FRUTAS SILVESTRES",
                "categoryId": "BEBIDA LECHE",
                "category": "GLAD 200 ML FRUTAS SILVESTRES",
                "brand": "GLAD",
                "classification": "BEBIDA LECHE",
                "unitsPerBox": "30",
                "minOrderUnits": null,
                "packageDescription": "1 box",
                "packageUnitDescription": "30 ea",
                "quantity_max_redeem": null,
                "redeem_unit": null,
                "order_reason_redeem": null,
                "sku_redeem": null,
                "price": {
                    "full_price": 139500,
                    "taxes": [
                        {
                            "taxType": "porcentaje",
                            "taxId": "MWST",
                            "rate": 120
                        }
                    ]
                },
                "points": 0
            },
            {
                "sku": "000000000000220011",
                "title": "VASO POLYPAPEL 16 ONZ. GLOBAL",
                "categoryId": null,
                "category": "VASO POLYPAPEL 16 ONZ. GLOBAL",
                "brand": null,
                "classification": null,
                "unitsPerBox": "1000",
                "minOrderUnits": null,
                "packageDescription": "1 box",
                "packageUnitDescription": "1000 ea",
                "quantity_max_redeem": null,
                "redeem_unit": null,
                "order_reason_redeem": null,
                "sku_redeem": null,
                "price": {
                    "full_price": 425000,
                    "taxes": [
                        {
                            "taxType": "porcentaje",
                            "taxId": "MWST",
                            "rate": 120
                        }
                    ]
                },
                "points": 0
            },
            {
                "sku": "AA004156",
                "title": "Salutar Naranja 355ML Lata*24",
                "categoryId": "CARBONATADAS",
                "category": "Salutar Naranja 355ML Lata*24",
                "brand": "SALUTARIS",
                "classification": "CARBONATADAS",
                "unitsPerBox": "24",
                "minOrderUnits": null,
                "packageDescription": "1 box",
                "packageUnitDescription": "24 ea",
                "quantity_max_redeem": null,
                "redeem_unit": null,
                "order_reason_redeem": null,
                "sku_redeem": null,
                "price": {
                    "full_price": 110700,
                    "taxes": [
                        {
                            "taxType": "porcentaje",
                            "taxId": "MWST",
                            "rate": 120
                        }
                    ]
                },
                "points": 0
            },
            {
                "sku": "BA000943",
                "title": "15 PACK MODELO ESPECIAL LATA",
                "categoryId": "CERVEZAS",
                "category": "15 PACK MODELO ESPECIAL LATA",
                "brand": "MODELO",
                "classification": "CERVEZAS",
                "unitsPerBox": "15",
                "minOrderUnits": null,
                "packageDescription": "1 box",
                "packageUnitDescription": "15 ea",
                "quantity_max_redeem": null,
                "redeem_unit": null,
                "order_reason_redeem": null,
                "sku_redeem": null,
                "price": {
                    "full_price": 150000,
                    "taxes": [
                        {
                            "taxType": "porcentaje",
                            "taxId": "MWST",
                            "rate": 120
                        }
                    ]
                },
                "points": 0
            },
            {
                "sku": "BA014339",
                "title": "YOGURT GLAD 200ML FRESABANANO",
                "categoryId": "BEBIDA LECHE",
                "category": "YOGURT GLAD 200ML FRESABANANO",
                "brand": "GLAD",
                "classification": "BEBIDA LECHE",
                "unitsPerBox": "30",
                "minOrderUnits": null,
                "packageDescription": "1 box",
                "packageUnitDescription": "30 ea",
                "quantity_max_redeem": null,
                "redeem_unit": null,
                "order_reason_redeem": null,
                "sku_redeem": null,
                "price": {
                    "full_price": 139500,
                    "taxes": [
                        {
                            "taxType": "porcentaje",
                            "taxId": "MWST",
                            "rate": 120
                        }
                    ]
                },
                "points": 0
            },
            {
                "sku": "AA066081",
                "title": "340ML LATA PETIT PINA",
                "categoryId": "NECTARES",
                "category": "340ML LATA PETIT PINA",
                "brand": "PETIT",
                "classification": "NECTARES",
                "unitsPerBox": "24",
                "minOrderUnits": null,
                "packageDescription": "1 box",
                "packageUnitDescription": "24 ea",
                "quantity_max_redeem": null,
                "redeem_unit": null,
                "order_reason_redeem": null,
                "sku_redeem": null,
                "price": {
                    "full_price": 86400,
                    "taxes": [
                        {
                            "taxType": "porcentaje",
                            "taxId": "MWST",
                            "rate": 120
                        }
                    ]
                },
                "points": 0
            },
            {
                "sku": "BA000455",
                "title": "CORONA 355 ML VIDRIO NO RETOR",
                "categoryId": "CERVEZAS",
                "category": "CORONA 355 ML VIDRIO NO RETOR",
                "brand": "CORONA",
                "classification": "CERVEZAS",
                "unitsPerBox": "24",
                "minOrderUnits": "24.000000000000000000",
                "packageDescription": "1 box",
                "packageUnitDescription": "24 ea",
                "quantity_max_redeem": null,
                "redeem_unit": null,
                "order_reason_redeem": null,
                "sku_redeem": null,
                "price": {
                    "full_price": 189000,
                    "taxes": [
                        {
                            "taxType": "porcentaje",
                            "taxId": "MWST",
                            "rate": 120
                        }
                    ]
                },
                "points": 0
            },
            {
                "sku": "BA005036",
                "title": "BECKS 275 ML VNR",
                "categoryId": "CERVEZAS",
                "category": "BECKS 275 ML VNR",
                "brand": "BECK'S",
                "classification": "CERVEZAS",
                "unitsPerBox": "24",
                "minOrderUnits": null,
                "packageDescription": "1 box",
                "packageUnitDescription": "24 ea",
                "quantity_max_redeem": null,
                "redeem_unit": null,
                "order_reason_redeem": null,
                "sku_redeem": null,
                "price": {
                    "full_price": 110000,
                    "taxes": [
                        {
                            "taxType": "porcentaje",
                            "taxId": "MWST",
                            "rate": 120
                        }
                    ]
                },
                "points": 0
            },
            {
                "sku": "BA011310",
                "title": "NAT NARANJA PULPA 500 ML * 24",
                "categoryId": "JUGOS",
                "category": "NAT NARANJA PULPA 500 ML * 24",
                "brand": "NATURALISIMO",
                "classification": "JUGOS",
                "unitsPerBox": "50",
                "minOrderUnits": null,
                "packageDescription": "1 box",
                "packageUnitDescription": "50 ea",
                "quantity_max_redeem": null,
                "redeem_unit": null,
                "order_reason_redeem": null,
                "sku_redeem": null,
                "price": {
                    "full_price": 432000,
                    "taxes": [
                        {
                            "taxType": "porcentaje",
                            "taxId": "MWST",
                            "rate": 120
                        }
                    ]
                },
                "points": 0
            },
            {
                "sku": "BA018618",
                "title": "MIRINDA NARANJA 2 LITROS PET S",
                "categoryId": "CARBONATADAS",
                "category": "MIRINDA NARANJA 2 LITROS PET S",
                "brand": "MIRINDA",
                "classification": "CARBONATADAS",
                "unitsPerBox": "8",
                "minOrderUnits": null,
                "packageDescription": "1 box",
                "packageUnitDescription": "8 ea",
                "quantity_max_redeem": null,
                "redeem_unit": null,
                "order_reason_redeem": null,
                "sku_redeem": null,
                "price": {
                    "full_price": 79000,
                    "taxes": [
                        {
                            "taxType": "porcentaje",
                            "taxId": "MWST",
                            "rate": 120
                        }
                    ]
                },
                "points": 0
            },
            {
                "sku": "BA000862",
                "title": "FF Mandarin Fresa 500ML PET*24",
                "categoryId": "STILL DRINKS",
                "category": "FF Mandarin Fresa 500ML PET*24",
                "brand": "FRUTA FRESCA",
                "classification": "STILL DRINKS",
                "unitsPerBox": "24",
                "minOrderUnits": null,
                "packageDescription": "1 box",
                "packageUnitDescription": "24 ea",
                "quantity_max_redeem": null,
                "redeem_unit": null,
                "order_reason_redeem": null,
                "sku_redeem": null,
                "price": {
                    "full_price": 66890,
                    "taxes": [
                        {
                            "taxType": "porcentaje",
                            "taxId": "MWST",
                            "rate": 120
                        }
                    ]
                },
                "points": 0
            },
            {
                "sku": "BA001830",
                "title": "H2OH LIMONETO 600 ML PET",
                "categoryId": "CARBONATADAS",
                "category": "H2OH LIMONETO 600 ML PET",
                "brand": "H2OH!",
                "classification": "CARBONATADAS",
                "unitsPerBox": "24",
                "minOrderUnits": "24.000000000000000000",
                "packageDescription": "1 box",
                "packageUnitDescription": "24 ea",
                "quantity_max_redeem": null,
                "redeem_unit": null,
                "order_reason_redeem": null,
                "sku_redeem": null,
                "price": {
                    "full_price": 131790,
                    "taxes": [
                        {
                            "taxType": "porcentaje",
                            "taxId": "MWST",
                            "rate": 120
                        }
                    ]
                },
                "points": 0
            },
            {
                "sku": "BA011302",
                "title": "NAT LIMON FOOD SERVICE 3785ML",
                "categoryId": "JUGOS",
                "category": "NAT LIMON FOOD SERVICE 3785ML",
                "brand": "NATURALISIMO",
                "classification": "JUGOS",
                "unitsPerBox": "8",
                "minOrderUnits": null,
                "packageDescription": "1 box",
                "packageUnitDescription": "8 ea",
                "quantity_max_redeem": null,
                "redeem_unit": null,
                "order_reason_redeem": null,
                "sku_redeem": null,
                "price": {
                    "full_price": 394000,
                    "taxes": [
                        {
                            "taxType": "porcentaje",
                            "taxId": "MWST",
                            "rate": 120
                        }
                    ]
                },
                "points": 0
            },
            {
                "sku": "BA014378",
                "title": "CAFÉ BARISTA FOOD SERVICE FORM",
                "categoryId": "GRANOS",
                "category": "CAFÉ BARISTA FOOD SERVICE FORM",
                "brand": "BARISTA",
                "classification": "GRANOS",
                "unitsPerBox": "10",
                "minOrderUnits": null,
                "packageDescription": "1 box",
                "packageUnitDescription": "10 ea",
                "quantity_max_redeem": null,
                "redeem_unit": null,
                "order_reason_redeem": null,
                "sku_redeem": null,
                "price": {
                    "full_price": 220000,
                    "taxes": [
                        {
                            "taxType": "porcentaje",
                            "taxId": "MWST",
                            "rate": 120
                        }
                    ]
                },
                "points": 0
            },
            {
                "sku": "BA017705",
                "title": "TING BIB 5 GAL",
                "categoryId": "CARBONATADAS",
                "category": "TING BIB 5 GAL",
                "brand": "TING",
                "classification": "CARBONATADAS",
                "unitsPerBox": "1",
                "minOrderUnits": null,
                "packageDescription": "1 box",
                "packageUnitDescription": "1 ea",
                "quantity_max_redeem": null,
                "redeem_unit": null,
                "order_reason_redeem": null,
                "sku_redeem": null,
                "price": {
                    "full_price": 715000,
                    "taxes": [
                        {
                            "taxType": "porcentaje",
                            "taxId": "MWST",
                            "rate": 120
                        }
                    ]
                },
                "points": 0
            },
            {
                "sku": "BA018620",
                "title": "SEVEN UP 3000 ML PET * 6 SP",
                "categoryId": "CARBONATADAS",
                "category": "SEVEN UP 3000 ML PET * 6 SP",
                "brand": "SEVEN UP",
                "classification": "CARBONATADAS",
                "unitsPerBox": "6",
                "minOrderUnits": null,
                "packageDescription": "1 box",
                "packageUnitDescription": "6 ea",
                "quantity_max_redeem": null,
                "redeem_unit": null,
                "order_reason_redeem": null,
                "sku_redeem": null,
                "price": {
                    "full_price": 85000,
                    "taxes": [
                        {
                            "taxType": "porcentaje",
                            "taxId": "MWST",
                            "rate": 120
                        }
                    ]
                },
                "points": 0
            },
            {
                "sku": "000000000000220016",
                "title": "TAPADERA PARA VASO 32 ONZ.",
                "categoryId": null,
                "category": "TAPADERA PARA VASO 32 ONZ.",
                "brand": null,
                "classification": null,
                "unitsPerBox": "1560",
                "minOrderUnits": null,
                "packageDescription": "1 box",
                "packageUnitDescription": "1560 ea",
                "quantity_max_redeem": null,
                "redeem_unit": null,
                "order_reason_redeem": null,
                "sku_redeem": null,
                "price": {
                    "full_price": 150,
                    "taxes": [
                        {
                            "taxType": "porcentaje",
                            "taxId": "MWST",
                            "rate": 120
                        }
                    ]
                },
                "points": 0
            },
            {
                "sku": "AA685009",
                "title": "RICA PINA 12 ONZAS PET",
                "categoryId": "CARBONATADAS",
                "category": "RICA PINA 12 ONZAS PET",
                "brand": "RICA",
                "classification": "CARBONATADAS",
                "unitsPerBox": "24",
                "minOrderUnits": "24.000000000000000000",
                "packageDescription": "1 box",
                "packageUnitDescription": "24 ea",
                "quantity_max_redeem": null,
                "redeem_unit": null,
                "order_reason_redeem": null,
                "sku_redeem": null,
                "price": {
                    "full_price": 77000,
                    "taxes": [
                        {
                            "taxType": "porcentaje",
                            "taxId": "MWST",
                            "rate": 120
                        }
                    ]
                },
                "points": 0
            },
            {
                "sku": "BA011301",
                "title": "NAT MANDARINA 3785ML ORIGINAL",
                "categoryId": "JUGOS",
                "category": "NAT MANDARINA 3785ML ORIGINAL",
                "brand": "NATURALISIMO",
                "classification": "JUGOS",
                "unitsPerBox": "8",
                "minOrderUnits": null,
                "packageDescription": "1 box",
                "packageUnitDescription": "8 ea",
                "quantity_max_redeem": null,
                "redeem_unit": null,
                "order_reason_redeem": null,
                "sku_redeem": null,
                "price": {
                    "full_price": 300700,
                    "taxes": [
                        {
                            "taxType": "porcentaje",
                            "taxId": "MWST",
                            "rate": 120
                        }
                    ]
                },
                "points": 0
            },
            {
                "sku": "BA013154",
                "title": "VIP WATERMELON 350 ML LATA *24",
                "categoryId": "LICOR",
                "category": "VIP WATERMELON 350 ML LATA *24",
                "brand": "VIP",
                "classification": "LICOR",
                "unitsPerBox": "24",
                "minOrderUnits": null,
                "packageDescription": "1 box",
                "packageUnitDescription": "24 ea",
                "quantity_max_redeem": null,
                "redeem_unit": null,
                "order_reason_redeem": null,
                "sku_redeem": null,
                "price": {
                    "full_price": 144000,
                    "taxes": [
                        {
                            "taxType": "porcentaje",
                            "taxId": "MWST",
                            "rate": 120
                        }
                    ]
                },
                "points": 0
            },
            {
                "sku": "AA835108",
                "title": "12 ONZAS GRB ICE COOL PINA COC",
                "categoryId": "JUGOS",
                "category": "12 ONZAS GRB ICE COOL PINA COC",
                "brand": "ICE COOL",
                "classification": "JUGOS",
                "unitsPerBox": "24",
                "minOrderUnits": null,
                "packageDescription": "1 box",
                "packageUnitDescription": "24 ea",
                "quantity_max_redeem": null,
                "redeem_unit": null,
                "order_reason_redeem": null,
                "sku_redeem": null,
                "price": {
                    "full_price": 76500,
                    "taxes": [
                        {
                            "taxType": "porcentaje",
                            "taxId": "MWST",
                            "rate": 120
                        }
                    ]
                },
                "points": 0
            },
            {
                "sku": "BA000911",
                "title": "NEGRA MODELO 12 OZ VNR",
                "categoryId": "CERVEZAS",
                "category": "NEGRA MODELO 12 OZ VNR",
                "brand": "MODELO",
                "classification": "CERVEZAS",
                "unitsPerBox": "24",
                "minOrderUnits": null,
                "packageDescription": "1 box",
                "packageUnitDescription": "24 ea",
                "quantity_max_redeem": null,
                "redeem_unit": null,
                "order_reason_redeem": null,
                "sku_redeem": null,
                "price": {
                    "full_price": 220000,
                    "taxes": [
                        {
                            "taxType": "porcentaje",
                            "taxId": "MWST",
                            "rate": 120
                        }
                    ]
                },
                "points": 0
            },
            {
                "sku": "AA066077",
                "title": "340ML LATA PETIT MANZANA",
                "categoryId": "NECTARES",
                "category": "340ML LATA PETIT MANZANA",
                "brand": "PETIT",
                "classification": "NECTARES",
                "unitsPerBox": "24",
                "minOrderUnits": null,
                "packageDescription": "1 box",
                "packageUnitDescription": "24 ea",
                "quantity_max_redeem": null,
                "redeem_unit": null,
                "order_reason_redeem": null,
                "sku_redeem": null,
                "price": {
                    "full_price": 86400,
                    "taxes": [
                        {
                            "taxType": "porcentaje",
                            "taxId": "MWST",
                            "rate": 120
                        }
                    ]
                },
                "points": 0
            },
            {
                "sku": "AA123110",
                "title": "CALIFORNIA 500ML MORA",
                "categoryId": "JUGOS",
                "category": "CALIFORNIA 500ML MORA",
                "brand": "ICE COOL",
                "classification": "JUGOS",
                "unitsPerBox": "24",
                "minOrderUnits": null,
                "packageDescription": "1 box",
                "packageUnitDescription": "24 ea",
                "quantity_max_redeem": null,
                "redeem_unit": null,
                "order_reason_redeem": null,
                "sku_redeem": null,
                "price": {
                    "full_price": 173400,
                    "taxes": [
                        {
                            "taxType": "porcentaje",
                            "taxId": "MWST",
                            "rate": 120
                        }
                    ]
                },
                "points": 0
            },
            {
                "sku": "BA011118",
                "title": "LABELS MIRINDA 500 ML GRB * 24",
                "categoryId": "CARBONATADAS",
                "category": "LABELS MIRINDA 500 ML GRB * 24",
                "brand": "MIRINDA",
                "classification": "CARBONATADAS",
                "unitsPerBox": "24",
                "minOrderUnits": null,
                "packageDescription": "1 box",
                "packageUnitDescription": "24 ea",
                "quantity_max_redeem": null,
                "redeem_unit": null,
                "order_reason_redeem": null,
                "sku_redeem": null,
                "price": {
                    "full_price": 79000,
                    "taxes": [
                        {
                            "taxType": "porcentaje",
                            "taxId": "MWST",
                            "rate": 120
                        }
                    ]
                },
                "points": 0
            },
            {
                "sku": "BA011202",
                "title": "GATORA G ZERO NARAR 591 ML X24",
                "categoryId": "ISOTONICOS",
                "category": "GATORA G ZERO NARAR 591 ML X24",
                "brand": "GATORADE",
                "classification": "ISOTONICOS",
                "unitsPerBox": "24",
                "minOrderUnits": null,
                "packageDescription": "1 box",
                "packageUnitDescription": "24 ea",
                "quantity_max_redeem": null,
                "redeem_unit": null,
                "order_reason_redeem": null,
                "sku_redeem": null,
                "price": {
                    "full_price": 192000,
                    "taxes": [
                        {
                            "taxType": "porcentaje",
                            "taxId": "MWST",
                            "rate": 120
                        }
                    ]
                },
                "points": 0
            },
            {
                "sku": "000000000000220012",
                "title": "VASO POLYPAPEL 22 ONZ. GLOBAL",
                "categoryId": null,
                "category": "VASO POLYPAPEL 22 ONZ. GLOBAL",
                "brand": null,
                "classification": null,
                "unitsPerBox": "1200",
                "minOrderUnits": null,
                "packageDescription": "1 box",
                "packageUnitDescription": "1200 ea",
                "quantity_max_redeem": null,
                "redeem_unit": null,
                "order_reason_redeem": null,
                "sku_redeem": null,
                "price": {
                    "full_price": 635000,
                    "taxes": [
                        {
                            "taxType": "porcentaje",
                            "taxId": "MWST",
                            "rate": 120
                        }
                    ]
                },
                "points": 0
            },
            {
                "sku": "AA685118",
                "title": "RICA MANDARINA 12 ONZAS PET",
                "categoryId": "CARBONATADAS",
                "category": "RICA MANDARINA 12 ONZAS PET",
                "brand": "RICA",
                "classification": "CARBONATADAS",
                "unitsPerBox": "24",
                "minOrderUnits": "24.000000000000000000",
                "packageDescription": "1 box",
                "packageUnitDescription": "24 ea",
                "quantity_max_redeem": null,
                "redeem_unit": null,
                "order_reason_redeem": null,
                "sku_redeem": null,
                "price": {
                    "full_price": 77000,
                    "taxes": [
                        {
                            "taxType": "porcentaje",
                            "taxId": "MWST",
                            "rate": 120
                        }
                    ]
                },
                "points": 0
            },
            {
                "sku": "AA033026",
                "title": "GATORADE FRUIT PUNCH 16 OZ GRB",
                "categoryId": "ISOTONICOS",
                "category": "GATORADE FRUIT PUNCH 16 OZ GRB",
                "brand": "GATORADE",
                "classification": "ISOTONICOS",
                "unitsPerBox": "24",
                "minOrderUnits": null,
                "packageDescription": "1 box",
                "packageUnitDescription": "24 ea",
                "quantity_max_redeem": null,
                "redeem_unit": null,
                "order_reason_redeem": null,
                "sku_redeem": null,
                "price": {
                    "full_price": 87890,
                    "taxes": [
                        {
                            "taxType": "porcentaje",
                            "taxId": "MWST",
                            "rate": 120
                        }
                    ]
                },
                "points": 0
            },
            {
                "sku": "AA059001",
                "title": "PEPSI 1.5 LT PET * 12",
                "categoryId": "CARBONATADAS",
                "category": "PEPSI 1.5 LT PET * 12",
                "brand": "PEPSI",
                "classification": "CARBONATADAS",
                "unitsPerBox": "12",
                "minOrderUnits": "12.000000000000000000",
                "packageDescription": "1 box",
                "packageUnitDescription": "12 ea",
                "quantity_max_redeem": null,
                "redeem_unit": null,
                "order_reason_redeem": null,
                "sku_redeem": null,
                "price": {
                    "full_price": 80100,
                    "taxes": [
                        {
                            "taxType": "porcentaje",
                            "taxId": "MWST",
                            "rate": 120
                        }
                    ]
                },
                "points": 0
            },
            {
                "sku": "AA317050",
                "title": "Aqua 750 ML PET * 24",
                "categoryId": "AGUA PURA",
                "category": "Aqua 750 ML PET * 24",
                "brand": "AQUA",
                "classification": "AGUA PURA",
                "unitsPerBox": "24",
                "minOrderUnits": "24.000000000000000000",
                "packageDescription": "1 box",
                "packageUnitDescription": "24 ea",
                "quantity_max_redeem": null,
                "redeem_unit": null,
                "order_reason_redeem": null,
                "sku_redeem": null,
                "price": {
                    "full_price": 56000,
                    "taxes": [
                        {
                            "taxType": "porcentaje",
                            "taxId": "MWST",
                            "rate": 120
                        }
                    ]
                },
                "points": 0
            },
            {
                "sku": "BA001832",
                "title": "H2OH NARANCHELO 600 ML PET",
                "categoryId": "CARBONATADAS",
                "category": "H2OH NARANCHELO 600 ML PET",
                "brand": "H2OH!",
                "classification": "CARBONATADAS",
                "unitsPerBox": "24",
                "minOrderUnits": "24.000000000000000000",
                "packageDescription": "1 box",
                "packageUnitDescription": "24 ea",
                "quantity_max_redeem": null,
                "redeem_unit": null,
                "order_reason_redeem": null,
                "sku_redeem": null,
                "price": {
                    "full_price": 131790,
                    "taxes": [
                        {
                            "taxType": "porcentaje",
                            "taxId": "MWST",
                            "rate": 120
                        }
                    ]
                },
                "points": 0
            },
            {
                "sku": "BA007624",
                "title": "LIPTON LIM 500ML PET 24U 2X12P",
                "categoryId": "TE",
                "category": "LIPTON LIM 500ML PET 24U 2X12P",
                "brand": "LIPTON",
                "classification": "TE",
                "unitsPerBox": "24",
                "minOrderUnits": "24.000000000000000000",
                "packageDescription": "1 box",
                "packageUnitDescription": "24 ea",
                "quantity_max_redeem": null,
                "redeem_unit": null,
                "order_reason_redeem": null,
                "sku_redeem": null,
                "price": {
                    "full_price": 145300,
                    "taxes": [
                        {
                            "taxType": "porcentaje",
                            "taxId": "MWST",
                            "rate": 120
                        }
                    ]
                },
                "points": 0
            },
            {
                "sku": "BA018392",
                "title": "MODELITO ESPECIAL237ML LATA 24",
                "categoryId": "CERVEZAS",
                "category": "MODELITO ESPECIAL237ML LATA 24",
                "brand": "MODELO",
                "classification": "CERVEZAS",
                "unitsPerBox": "24",
                "minOrderUnits": null,
                "packageDescription": "1 box",
                "packageUnitDescription": "24 ea",
                "quantity_max_redeem": null,
                "redeem_unit": null,
                "order_reason_redeem": null,
                "sku_redeem": null,
                "price": {
                    "full_price": 95000,
                    "taxes": [
                        {
                            "taxType": "porcentaje",
                            "taxId": "MWST",
                            "rate": 120
                        }
                    ]
                },
                "points": 0
            },
            {
                "sku": "AA087874",
                "title": "BECK'S 330ML V.NO RETORNABLE",
                "categoryId": "CERVEZAS",
                "category": "BECK'S 330ML V.NO RETORNABLE",
                "brand": "BECK'S",
                "classification": "CERVEZAS",
                "unitsPerBox": "24",
                "minOrderUnits": null,
                "packageDescription": "1 box",
                "packageUnitDescription": "24 ea",
                "quantity_max_redeem": null,
                "redeem_unit": null,
                "order_reason_redeem": null,
                "sku_redeem": null,
                "price": {
                    "full_price": 139750,
                    "taxes": [
                        {
                            "taxType": "porcentaje",
                            "taxId": "MWST",
                            "rate": 120
                        }
                    ]
                },
                "points": 0
            },
            {
                "sku": "BA002681",
                "title": "PEPSI BLACK 355ML PET X 24",
                "categoryId": "CARBONATADAS",
                "category": "PEPSI BLACK 355ML PET X 24",
                "brand": "PEPSI",
                "classification": "CARBONATADAS",
                "unitsPerBox": "24",
                "minOrderUnits": "24.000000000000000000",
                "packageDescription": "1 box",
                "packageUnitDescription": "24 ea",
                "quantity_max_redeem": null,
                "redeem_unit": null,
                "order_reason_redeem": null,
                "sku_redeem": null,
                "price": {
                    "full_price": 77000,
                    "taxes": [
                        {
                            "taxType": "porcentaje",
                            "taxId": "MWST",
                            "rate": 120
                        }
                    ]
                },
                "points": 0
            },
            {
                "sku": "BA003300",
                "title": "GATORADE UVA SPORT CAP 600ML",
                "categoryId": "ISOTONICOS",
                "category": "GATORADE UVA SPORT CAP 600ML",
                "brand": "GATORADE",
                "classification": "ISOTONICOS",
                "unitsPerBox": "24",
                "minOrderUnits": null,
                "packageDescription": "1 box",
                "packageUnitDescription": "24 ea",
                "quantity_max_redeem": null,
                "redeem_unit": null,
                "order_reason_redeem": null,
                "sku_redeem": null,
                "price": {
                    "full_price": 190000,
                    "taxes": [
                        {
                            "taxType": "porcentaje",
                            "taxId": "MWST",
                            "rate": 120
                        }
                    ]
                },
                "points": 0
            },
            {
                "sku": "BA003356",
                "title": "GATORA FRUIT PUNCH 1L SPORT C",
                "categoryId": "ISOTONICOS",
                "category": "GATORA FRUIT PUNCH 1L SPORT C",
                "brand": "GATORADE",
                "classification": "ISOTONICOS",
                "unitsPerBox": "12",
                "minOrderUnits": null,
                "packageDescription": "1 box",
                "packageUnitDescription": "12 ea",
                "quantity_max_redeem": null,
                "redeem_unit": null,
                "order_reason_redeem": null,
                "sku_redeem": null,
                "price": {
                    "full_price": 110190,
                    "taxes": [
                        {
                            "taxType": "porcentaje",
                            "taxId": "MWST",
                            "rate": 120
                        }
                    ]
                },
                "points": 0
            },
            {
                "sku": "BA014353",
                "title": "YOGURT GLAD 900 ML EG NATURAL",
                "categoryId": "BEBIDA LECHE",
                "category": "YOGURT GLAD 900 ML EG NATURAL",
                "brand": "GLAD",
                "classification": "BEBIDA LECHE",
                "unitsPerBox": "6",
                "minOrderUnits": null,
                "packageDescription": "1 box",
                "packageUnitDescription": "6 ea",
                "quantity_max_redeem": null,
                "redeem_unit": null,
                "order_reason_redeem": null,
                "sku_redeem": null,
                "price": {
                    "full_price": 187800,
                    "taxes": [
                        {
                            "taxType": "porcentaje",
                            "taxId": "MWST",
                            "rate": 120
                        }
                    ]
                },
                "points": 0
            },
            {
                "sku": "AA004001",
                "title": "Pepsi 355 ML Lata * 24",
                "categoryId": "CARBONATADAS",
                "category": "Pepsi 355 ML Lata * 24",
                "brand": "PEPSI",
                "classification": "CARBONATADAS",
                "unitsPerBox": "24",
                "minOrderUnits": "24.000000000000000000",
                "packageDescription": "1 box",
                "packageUnitDescription": "24 ea",
                "quantity_max_redeem": null,
                "redeem_unit": null,
                "order_reason_redeem": null,
                "sku_redeem": null,
                "price": {
                    "full_price": 85050,
                    "taxes": [
                        {
                            "taxType": "porcentaje",
                            "taxId": "MWST",
                            "rate": 120
                        }
                    ]
                },
                "points": 0
            },
            {
                "sku": "AA056001",
                "title": "Pepsi 237 ML Lata * 24",
                "categoryId": "CARBONATADAS",
                "category": "Pepsi 237 ML Lata * 24",
                "brand": "PEPSI",
                "classification": "CARBONATADAS",
                "unitsPerBox": "24",
                "minOrderUnits": null,
                "packageDescription": "1 box",
                "packageUnitDescription": "24 ea",
                "quantity_max_redeem": null,
                "redeem_unit": null,
                "order_reason_redeem": null,
                "sku_redeem": null,
                "price": {
                    "full_price": 66500,
                    "taxes": [
                        {
                            "taxType": "porcentaje",
                            "taxId": "MWST",
                            "rate": 120
                        }
                    ]
                },
                "points": 0
            },
            {
                "sku": "BA003053",
                "title": "FF Manza UvaVerde 500ML PET*24",
                "categoryId": "STILL DRINKS",
                "category": "FF Manza UvaVerde 500ML PET*24",
                "brand": "FRUTA FRESCA",
                "classification": "STILL DRINKS",
                "unitsPerBox": "24",
                "minOrderUnits": null,
                "packageDescription": "1 box",
                "packageUnitDescription": "24 ea",
                "quantity_max_redeem": null,
                "redeem_unit": null,
                "order_reason_redeem": null,
                "sku_redeem": null,
                "price": {
                    "full_price": 66890,
                    "taxes": [
                        {
                            "taxType": "porcentaje",
                            "taxId": "MWST",
                            "rate": 120
                        }
                    ]
                },
                "points": 0
            },
            {
                "sku": "BA003054",
                "title": "FF FrutasTropical 500ML PET*24",
                "categoryId": "STILL DRINKS",
                "category": "FF FrutasTropical 500ML PET*24",
                "brand": "FRUTA FRESCA",
                "classification": "STILL DRINKS",
                "unitsPerBox": "24",
                "minOrderUnits": null,
                "packageDescription": "1 box",
                "packageUnitDescription": "24 ea",
                "quantity_max_redeem": null,
                "redeem_unit": null,
                "order_reason_redeem": null,
                "sku_redeem": null,
                "price": {
                    "full_price": 66890,
                    "taxes": [
                        {
                            "taxType": "porcentaje",
                            "taxId": "MWST",
                            "rate": 120
                        }
                    ]
                },
                "points": 0
            },
            {
                "sku": "BA003462",
                "title": "GUITIG 330 ML OW *24 EXPORT",
                "categoryId": "AGUA CON GAS",
                "category": "GUITIG 330 ML OW *24 EXPORT",
                "brand": "GUITIG",
                "classification": "AGUA CON GAS",
                "unitsPerBox": "24",
                "minOrderUnits": "24.000000000000000000",
                "packageDescription": "1 box",
                "packageUnitDescription": "24 ea",
                "quantity_max_redeem": null,
                "redeem_unit": null,
                "order_reason_redeem": null,
                "sku_redeem": null,
                "price": {
                    "full_price": 216000,
                    "taxes": [
                        {
                            "taxType": "porcentaje",
                            "taxId": "MWST",
                            "rate": 120
                        }
                    ]
                },
                "points": 0
            },
            {
                "sku": "BA014340",
                "title": "VASO YOGURT GLAD EB NATURAL",
                "categoryId": "BEBIDA LECHE",
                "category": "VASO YOGURT GLAD EB NATURAL",
                "brand": "GLAD",
                "classification": "BEBIDA LECHE",
                "unitsPerBox": "24",
                "minOrderUnits": null,
                "packageDescription": "1 box",
                "packageUnitDescription": "24 ea",
                "quantity_max_redeem": null,
                "redeem_unit": null,
                "order_reason_redeem": null,
                "sku_redeem": null,
                "price": {
                    "full_price": 76800,
                    "taxes": [
                        {
                            "taxType": "porcentaje",
                            "taxId": "MWST",
                            "rate": 120
                        }
                    ]
                },
                "points": 0
            },
            {
                "sku": "AA626173",
                "title": "Squiz 3000 ML PET * 6",
                "categoryId": "STILL DRINKS",
                "category": "Squiz 3000 ML PET * 6",
                "brand": "SQUIZ",
                "classification": "STILL DRINKS",
                "unitsPerBox": "6",
                "minOrderUnits": null,
                "packageDescription": "1 box",
                "packageUnitDescription": "6 ea",
                "quantity_max_redeem": null,
                "redeem_unit": null,
                "order_reason_redeem": null,
                "sku_redeem": null,
                "price": {
                    "full_price": 60500,
                    "taxes": [
                        {
                            "taxType": "porcentaje",
                            "taxId": "MWST",
                            "rate": 120
                        }
                    ]
                },
                "points": 0
            },
            {
                "sku": "AA004155",
                "title": "Saluta Limonada 355ML Lata*24",
                "categoryId": "CARBONATADAS",
                "category": "Saluta Limonada 355ML Lata*24",
                "brand": "SALUTARIS",
                "classification": "CARBONATADAS",
                "unitsPerBox": "24",
                "minOrderUnits": null,
                "packageDescription": "1 box",
                "packageUnitDescription": "24 ea",
                "quantity_max_redeem": null,
                "redeem_unit": null,
                "order_reason_redeem": null,
                "sku_redeem": null,
                "price": {
                    "full_price": 110700,
                    "taxes": [
                        {
                            "taxType": "porcentaje",
                            "taxId": "MWST",
                            "rate": 120
                        }
                    ]
                },
                "points": 0
            },
            {
                "sku": "AA074026",
                "title": "1/2 LITRO FRUIT PUNCH PET",
                "categoryId": "ISOTONICOS",
                "category": "1/2 LITRO FRUIT PUNCH PET",
                "brand": "GATORADE",
                "classification": "ISOTONICOS",
                "unitsPerBox": "24",
                "minOrderUnits": null,
                "packageDescription": "1 box",
                "packageUnitDescription": "24 ea",
                "quantity_max_redeem": null,
                "redeem_unit": null,
                "order_reason_redeem": null,
                "sku_redeem": null,
                "price": {
                    "full_price": 129600,
                    "taxes": [
                        {
                            "taxType": "porcentaje",
                            "taxId": "MWST",
                            "rate": 120
                        }
                    ]
                },
                "points": 0
            },
            {
                "sku": "BA003299",
                "title": "GATORADE NARANJA SPORT CAP 600",
                "categoryId": "ISOTONICOS",
                "category": "GATORADE NARANJA SPORT CAP 600",
                "brand": "GATORADE",
                "classification": "ISOTONICOS",
                "unitsPerBox": "24",
                "minOrderUnits": "24.000000000000000000",
                "packageDescription": "1 box",
                "packageUnitDescription": "24 ea",
                "quantity_max_redeem": null,
                "redeem_unit": null,
                "order_reason_redeem": null,
                "sku_redeem": null,
                "price": {
                    "full_price": 190000,
                    "taxes": [
                        {
                            "taxType": "porcentaje",
                            "taxId": "MWST",
                            "rate": 120
                        }
                    ]
                },
                "points": 0
            },
            {
                "sku": "AA018001",
                "title": "PEPSI 500ML GRB * 24",
                "categoryId": "CARBONATADAS",
                "category": "PEPSI 500ML GRB * 24",
                "brand": "PEPSI",
                "classification": "CARBONATADAS",
                "unitsPerBox": "24",
                "minOrderUnits": null,
                "packageDescription": "1 box",
                "packageUnitDescription": "24 ea",
                "quantity_max_redeem": null,
                "redeem_unit": null,
                "order_reason_redeem": null,
                "sku_redeem": null,
                "price": {
                    "full_price": 77500,
                    "taxes": [
                        {
                            "taxType": "porcentaje",
                            "taxId": "MWST",
                            "rate": 120
                        }
                    ]
                },
                "points": 0
            },
            {
                "sku": "AA073142",
                "title": "LIPTON 12 ONZAS VIDRIO DURAZNO",
                "categoryId": "TE",
                "category": "LIPTON 12 ONZAS VIDRIO DURAZNO",
                "brand": "LIPTON",
                "classification": "TE",
                "unitsPerBox": "24",
                "minOrderUnits": null,
                "packageDescription": "1 box",
                "packageUnitDescription": "24 ea",
                "quantity_max_redeem": null,
                "redeem_unit": null,
                "order_reason_redeem": null,
                "sku_redeem": null,
                "price": {
                    "full_price": 96000,
                    "taxes": [
                        {
                            "taxType": "porcentaje",
                            "taxId": "MWST",
                            "rate": 120
                        }
                    ]
                },
                "points": 0
            },
            {
                "sku": "AA123109",
                "title": "CALIFORNIA 500ML KIWI FRESA",
                "categoryId": "JUGOS",
                "category": "CALIFORNIA 500ML KIWI FRESA",
                "brand": "ICE COOL",
                "classification": "JUGOS",
                "unitsPerBox": "24",
                "minOrderUnits": null,
                "packageDescription": "1 box",
                "packageUnitDescription": "24 ea",
                "quantity_max_redeem": null,
                "redeem_unit": null,
                "order_reason_redeem": null,
                "sku_redeem": null,
                "price": {
                    "full_price": 173400,
                    "taxes": [
                        {
                            "taxType": "porcentaje",
                            "taxId": "MWST",
                            "rate": 120
                        }
                    ]
                },
                "points": 0
            },
            {
                "sku": "AA350937",
                "title": "CO2 EN CILINDRO 35 LIBRAS",
                "categoryId": "CILINDRO",
                "category": "CO2 EN CILINDRO 35 LIBRAS",
                "brand": "SIN MARCA",
                "classification": "CILINDRO",
                "unitsPerBox": "1",
                "minOrderUnits": null,
                "packageDescription": "1 box",
                "packageUnitDescription": "1 ea",
                "quantity_max_redeem": null,
                "redeem_unit": null,
                "order_reason_redeem": null,
                "sku_redeem": null,
                "price": {
                    "full_price": 1560000,
                    "taxes": [
                        {
                            "taxType": "porcentaje",
                            "taxId": "MWST",
                            "rate": 120
                        }
                    ]
                },
                "points": 0
            },
            {
                "sku": "BA011271",
                "title": "GATO BERRYBLUE 500ML PETX24",
                "categoryId": "ISOTONICOS",
                "category": "GATO BERRYBLUE 500ML PETX24",
                "brand": "GATORADE",
                "classification": "ISOTONICOS",
                "unitsPerBox": "24",
                "minOrderUnits": null,
                "packageDescription": "1 box",
                "packageUnitDescription": "24 ea",
                "quantity_max_redeem": null,
                "redeem_unit": null,
                "order_reason_redeem": null,
                "sku_redeem": null,
                "price": {
                    "full_price": 129600,
                    "taxes": [
                        {
                            "taxType": "porcentaje",
                            "taxId": "MWST",
                            "rate": 120
                        }
                    ]
                },
                "points": 0
            },
            {
                "sku": "BA013317",
                "title": "VOSS AGUA CON GAS 800ML VNR*12",
                "categoryId": "AGUA CON GAS",
                "category": "VOSS AGUA CON GAS 800ML VNR*12",
                "brand": "VOSS",
                "classification": "AGUA CON GAS",
                "unitsPerBox": "12",
                "minOrderUnits": null,
                "packageDescription": "1 box",
                "packageUnitDescription": "12 ea",
                "quantity_max_redeem": null,
                "redeem_unit": null,
                "order_reason_redeem": null,
                "sku_redeem": null,
                "price": {
                    "full_price": 345600,
                    "taxes": [
                        {
                            "taxType": "porcentaje",
                            "taxId": "MWST",
                            "rate": 120
                        }
                    ]
                },
                "points": 0
            },
            {
                "sku": "BA017981",
                "title": "MODELO PURA MALTA OW 6x2 355ml",
                "categoryId": "CERVEZAS",
                "category": "MODELO PURA MALTA OW 6x2 355ml",
                "brand": "MODELO",
                "classification": "CERVEZAS",
                "unitsPerBox": "12",
                "minOrderUnits": null,
                "packageDescription": "1 box",
                "packageUnitDescription": "12 ea",
                "quantity_max_redeem": null,
                "redeem_unit": null,
                "order_reason_redeem": null,
                "sku_redeem": null,
                "price": {
                    "full_price": 90000,
                    "taxes": [
                        {
                            "taxType": "porcentaje",
                            "taxId": "MWST",
                            "rate": 120
                        }
                    ]
                },
                "points": 0
            },
            {
                "sku": "AA028024",
                "title": "GATORADE UVA 24/600ML PAD",
                "categoryId": "ISOTONICOS",
                "category": "GATORADE UVA 24/600ML PAD",
                "brand": "GATORADE",
                "classification": "ISOTONICOS",
                "unitsPerBox": "24",
                "minOrderUnits": null,
                "packageDescription": "1 box",
                "packageUnitDescription": "24 ea",
                "quantity_max_redeem": null,
                "redeem_unit": null,
                "order_reason_redeem": null,
                "sku_redeem": null,
                "price": {
                    "full_price": 190000,
                    "taxes": [
                        {
                            "taxType": "porcentaje",
                            "taxId": "MWST",
                            "rate": 120
                        }
                    ]
                },
                "points": 0
            },
            {
                "sku": "AA066078",
                "title": "340ML LATA PETIT PERA",
                "categoryId": "NECTARES",
                "category": "340ML LATA PETIT PERA",
                "brand": "PETIT",
                "classification": "NECTARES",
                "unitsPerBox": "24",
                "minOrderUnits": null,
                "packageDescription": "1 box",
                "packageUnitDescription": "24 ea",
                "quantity_max_redeem": null,
                "redeem_unit": null,
                "order_reason_redeem": null,
                "sku_redeem": null,
                "price": {
                    "full_price": 86400,
                    "taxes": [
                        {
                            "taxType": "porcentaje",
                            "taxId": "MWST",
                            "rate": 120
                        }
                    ]
                },
                "points": 0
            },
            {
                "sku": "BA014341",
                "title": "VASO YOGURT GLAD EB FRESA",
                "categoryId": "BEBIDA LECHE",
                "category": "VASO YOGURT GLAD EB FRESA",
                "brand": "GLAD",
                "classification": "BEBIDA LECHE",
                "unitsPerBox": "24",
                "minOrderUnits": null,
                "packageDescription": "1 box",
                "packageUnitDescription": "24 ea",
                "quantity_max_redeem": null,
                "redeem_unit": null,
                "order_reason_redeem": null,
                "sku_redeem": null,
                "price": {
                    "full_price": 86400,
                    "taxes": [
                        {
                            "taxType": "porcentaje",
                            "taxId": "MWST",
                            "rate": 120
                        }
                    ]
                },
                "points": 0
            },
            {
                "sku": "BA014348",
                "title": "YOGURT GLAD 900 ML EB MORA",
                "categoryId": "BEBIDA LECHE",
                "category": "YOGURT GLAD 900 ML EB MORA",
                "brand": "GLAD",
                "classification": "BEBIDA LECHE",
                "unitsPerBox": "6",
                "minOrderUnits": null,
                "packageDescription": "1 box",
                "packageUnitDescription": "6 ea",
                "quantity_max_redeem": null,
                "redeem_unit": null,
                "order_reason_redeem": null,
                "sku_redeem": null,
                "price": {
                    "full_price": 157500,
                    "taxes": [
                        {
                            "taxType": "porcentaje",
                            "taxId": "MWST",
                            "rate": 120
                        }
                    ]
                },
                "points": 0
            },
            {
                "sku": "BA018619",
                "title": "PEPSI 3000 ML PET * 6 SP",
                "categoryId": "CARBONATADAS",
                "category": "PEPSI 3000 ML PET * 6 SP",
                "brand": "PEPSI",
                "classification": "CARBONATADAS",
                "unitsPerBox": "6",
                "minOrderUnits": null,
                "packageDescription": "1 box",
                "packageUnitDescription": "6 ea",
                "quantity_max_redeem": null,
                "redeem_unit": null,
                "order_reason_redeem": null,
                "sku_redeem": null,
                "price": {
                    "full_price": 85000,
                    "taxes": [
                        {
                            "taxType": "porcentaje",
                            "taxId": "MWST",
                            "rate": 120
                        }
                    ]
                },
                "points": 0
            },
            {
                "sku": "BA020536",
                "title": "Red Bull Red Edition 250 ML  X",
                "categoryId": "ENERGIZANTES",
                "category": "Red Bull Red Edition 250 ML  X",
                "brand": "RED BULL",
                "classification": "ENERGIZANTES",
                "unitsPerBox": "24",
                "minOrderUnits": null,
                "packageDescription": "1 box",
                "packageUnitDescription": "24 ea",
                "quantity_max_redeem": null,
                "redeem_unit": null,
                "order_reason_redeem": null,
                "sku_redeem": null,
                "price": {
                    "full_price": 307200,
                    "taxes": [
                        {
                            "taxType": "porcentaje",
                            "taxId": "MWST",
                            "rate": 120
                        }
                    ]
                },
                "points": 0
            },
            {
                "sku": "AA066079",
                "title": "340ML LATA PETIT MELOCOTON",
                "categoryId": "NECTARES",
                "category": "340ML LATA PETIT MELOCOTON",
                "brand": "PETIT",
                "classification": "NECTARES",
                "unitsPerBox": "24",
                "minOrderUnits": null,
                "packageDescription": "1 box",
                "packageUnitDescription": "24 ea",
                "quantity_max_redeem": null,
                "redeem_unit": null,
                "order_reason_redeem": null,
                "sku_redeem": null,
                "price": {
                    "full_price": 86400,
                    "taxes": [
                        {
                            "taxType": "porcentaje",
                            "taxId": "MWST",
                            "rate": 120
                        }
                    ]
                },
                "points": 0
            },
            {
                "sku": "BA003864",
                "title": "PETIT DURAZNO CALCIO 200ML TT",
                "categoryId": "NECTARES",
                "category": "PETIT DURAZNO CALCIO 200ML TT",
                "brand": "PETIT",
                "classification": "NECTARES",
                "unitsPerBox": "24",
                "minOrderUnits": null,
                "packageDescription": "1 box",
                "packageUnitDescription": "24 ea",
                "quantity_max_redeem": null,
                "redeem_unit": null,
                "order_reason_redeem": null,
                "sku_redeem": null,
                "price": {
                    "full_price": 55100,
                    "taxes": [
                        {
                            "taxType": "porcentaje",
                            "taxId": "MWST",
                            "rate": 120
                        }
                    ]
                },
                "points": 0
            },
            {
                "sku": "AA007003",
                "title": "2 LITROS SEVEN UP",
                "categoryId": "CARBONATADAS",
                "category": "2 LITROS SEVEN UP",
                "brand": "SEVEN UP",
                "classification": "CARBONATADAS",
                "unitsPerBox": "8",
                "minOrderUnits": "24.000000000000000000",
                "packageDescription": "1 box",
                "packageUnitDescription": "8 ea",
                "quantity_max_redeem": null,
                "redeem_unit": null,
                "order_reason_redeem": null,
                "sku_redeem": null,
                "price": {
                    "full_price": 87000,
                    "taxes": [
                        {
                            "taxType": "porcentaje",
                            "taxId": "MWST",
                            "rate": 120
                        }
                    ]
                },
                "points": 0
            },
            {
                "sku": "AA087092",
                "title": "BOTELLA 330ML LEFFE BRUNE",
                "categoryId": "CERVEZAS",
                "category": "BOTELLA 330ML LEFFE BRUNE",
                "brand": "LEFFE",
                "classification": "CERVEZAS",
                "unitsPerBox": "24",
                "minOrderUnits": null,
                "packageDescription": "1 box",
                "packageUnitDescription": "24 ea",
                "quantity_max_redeem": null,
                "redeem_unit": null,
                "order_reason_redeem": null,
                "sku_redeem": null,
                "price": {
                    "full_price": 300000,
                    "taxes": [
                        {
                            "taxType": "porcentaje",
                            "taxId": "MWST",
                            "rate": 120
                        }
                    ]
                },
                "points": 0
            },
            {
                "sku": "AA198069",
                "title": "Adrenali Rush 473 ML Lata * 24",
                "categoryId": "ENERGIZANTES",
                "category": "Adrenali Rush 473 ML Lata * 24",
                "brand": "ADRENALINE",
                "classification": "ENERGIZANTES",
                "unitsPerBox": "24",
                "minOrderUnits": null,
                "packageDescription": "1 box",
                "packageUnitDescription": "24 ea",
                "quantity_max_redeem": null,
                "redeem_unit": null,
                "order_reason_redeem": null,
                "sku_redeem": null,
                "price": {
                    "full_price": 302400,
                    "taxes": [
                        {
                            "taxType": "porcentaje",
                            "taxId": "MWST",
                            "rate": 120
                        }
                    ]
                },
                "points": 0
            },
            {
                "sku": "BA003358",
                "title": "GATORADE NARANJA 1000ML SPORT",
                "categoryId": "ISOTONICOS",
                "category": "GATORADE NARANJA 1000ML SPORT",
                "brand": "GATORADE",
                "classification": "ISOTONICOS",
                "unitsPerBox": "12",
                "minOrderUnits": null,
                "packageDescription": "1 box",
                "packageUnitDescription": "12 ea",
                "quantity_max_redeem": null,
                "redeem_unit": null,
                "order_reason_redeem": null,
                "sku_redeem": null,
                "price": {
                    "full_price": 110190,
                    "taxes": [
                        {
                            "taxType": "porcentaje",
                            "taxId": "MWST",
                            "rate": 120
                        }
                    ]
                },
                "points": 0
            },
            {
                "sku": "BA011115",
                "title": "LABELS PEPSI 500 ML GRB * 24",
                "categoryId": "CARBONATADAS",
                "category": "LABELS PEPSI 500 ML GRB * 24",
                "brand": "PEPSI",
                "classification": "CARBONATADAS",
                "unitsPerBox": "24",
                "minOrderUnits": null,
                "packageDescription": "1 box",
                "packageUnitDescription": "24 ea",
                "quantity_max_redeem": null,
                "redeem_unit": null,
                "order_reason_redeem": null,
                "sku_redeem": null,
                "price": {
                    "full_price": 79000,
                    "taxes": [
                        {
                            "taxType": "porcentaje",
                            "taxId": "MWST",
                            "rate": 120
                        }
                    ]
                },
                "points": 0
            },
            {
                "sku": "BA011521",
                "title": "CUBATA  LIMON 355 ML LATA * 24",
                "categoryId": "LICOR",
                "category": "CUBATA  LIMON 355 ML LATA * 24",
                "brand": "CUBATA",
                "classification": "LICOR",
                "unitsPerBox": "24",
                "minOrderUnits": "24.000000000000000000",
                "packageDescription": "1 box",
                "packageUnitDescription": "24 ea",
                "quantity_max_redeem": null,
                "redeem_unit": null,
                "order_reason_redeem": null,
                "sku_redeem": null,
                "price": {
                    "full_price": 115000,
                    "taxes": [
                        {
                            "taxType": "porcentaje",
                            "taxId": "MWST",
                            "rate": 120
                        }
                    ]
                },
                "points": 0
            },
            {
                "sku": "BA017704",
                "title": "AMP VITAMINA C 600ML * 24",
                "categoryId": "ENERGIZANTES",
                "category": "AMP VITAMINA C 600ML * 24",
                "brand": "AMP",
                "classification": "ENERGIZANTES",
                "unitsPerBox": "24",
                "minOrderUnits": null,
                "packageDescription": "1 box",
                "packageUnitDescription": "24 ea",
                "quantity_max_redeem": null,
                "redeem_unit": null,
                "order_reason_redeem": null,
                "sku_redeem": null,
                "price": {
                    "full_price": 111300,
                    "taxes": [
                        {
                            "taxType": "porcentaje",
                            "taxId": "MWST",
                            "rate": 120
                        }
                    ]
                },
                "points": 0
            },
            {
                "sku": "BA005530",
                "title": "Gas de Cilindro CO2Cerveza20Libras",
                "categoryId": null,
                "category": "Gas de Cilindro CO2Cerveza20Libras",
                "brand": null,
                "classification": null,
                "unitsPerBox": "1",
                "minOrderUnits": null,
                "packageDescription": "1 box",
                "packageUnitDescription": "1 ea",
                "quantity_max_redeem": null,
                "redeem_unit": null,
                "order_reason_redeem": null,
                "sku_redeem": null,
                "price": {
                    "full_price": 10000,
                    "taxes": [
                        {
                            "taxType": "porcentaje",
                            "taxId": "MWST",
                            "rate": 120
                        }
                    ]
                },
                "points": 0
            },
            {
                "sku": "BA011520",
                "title": "CUBATA  GUARANA 350 ML LATA*24",
                "categoryId": "LICOR",
                "category": "CUBATA  GUARANA 350 ML LATA*24",
                "brand": "CUBATA",
                "classification": "LICOR",
                "unitsPerBox": "24",
                "minOrderUnits": "24.000000000000000000",
                "packageDescription": "1 box",
                "packageUnitDescription": "24 ea",
                "quantity_max_redeem": null,
                "redeem_unit": null,
                "order_reason_redeem": null,
                "sku_redeem": null,
                "price": {
                    "full_price": 115000,
                    "taxes": [
                        {
                            "taxType": "porcentaje",
                            "taxId": "MWST",
                            "rate": 120
                        }
                    ]
                },
                "points": 0
            },
            {
                "sku": "BA011522",
                "title": "CUBATA MOJITO 355 ML LATA * 24",
                "categoryId": "LICOR",
                "category": "CUBATA MOJITO 355 ML LATA * 24",
                "brand": "CUBATA",
                "classification": "LICOR",
                "unitsPerBox": "24",
                "minOrderUnits": "24.000000000000000000",
                "packageDescription": "1 box",
                "packageUnitDescription": "24 ea",
                "quantity_max_redeem": null,
                "redeem_unit": null,
                "order_reason_redeem": null,
                "sku_redeem": null,
                "price": {
                    "full_price": 115000,
                    "taxes": [
                        {
                            "taxType": "porcentaje",
                            "taxId": "MWST",
                            "rate": 120
                        }
                    ]
                },
                "points": 0
            },
            {
                "sku": "BA018765",
                "title": "RFRSH Cubata Berries 350ML Lat",
                "categoryId": "LICOR",
                "category": "RFRSH Cubata Berries 350ML Lat",
                "brand": "CUBATA",
                "classification": "LICOR",
                "unitsPerBox": "24",
                "minOrderUnits": "24.000000000000000000",
                "packageDescription": "1 box",
                "packageUnitDescription": "24 ea",
                "quantity_max_redeem": null,
                "redeem_unit": null,
                "order_reason_redeem": null,
                "sku_redeem": null,
                "price": {
                    "full_price": 115000,
                    "taxes": [
                        {
                            "taxType": "porcentaje",
                            "taxId": "MWST",
                            "rate": 120
                        }
                    ]
                },
                "points": 0
            },
            {
                "sku": "BA020831",
                "title": "Gatorlyte Kiwi Fresa 20 onz  X",
                "categoryId": "ISOTONICOS",
                "category": "Gatorlyte Kiwi Fresa 20 onz  X",
                "brand": "GATORADE",
                "classification": "ISOTONICOS",
                "unitsPerBox": "12",
                "minOrderUnits": null,
                "packageDescription": "1 box",
                "packageUnitDescription": "12 ea",
                "quantity_max_redeem": null,
                "redeem_unit": null,
                "order_reason_redeem": null,
                "sku_redeem": null,
                "price": {
                    "full_price": 154000,
                    "taxes": [
                        {
                            "taxType": "porcentaje",
                            "taxId": "MWST",
                            "rate": 120
                        }
                    ]
                },
                "points": 0
            },
            {
                "sku": "AA028026",
                "title": "GATORADE FRUIT PUNCH 24/600ML",
                "categoryId": "ISOTONICOS",
                "category": "GATORADE FRUIT PUNCH 24/600ML",
                "brand": "GATORADE",
                "classification": "ISOTONICOS",
                "unitsPerBox": "24",
                "minOrderUnits": null,
                "packageDescription": "1 box",
                "packageUnitDescription": "24 ea",
                "quantity_max_redeem": null,
                "redeem_unit": null,
                "order_reason_redeem": null,
                "sku_redeem": null,
                "price": {
                    "full_price": 190000,
                    "taxes": [
                        {
                            "taxType": "porcentaje",
                            "taxId": "MWST",
                            "rate": 120
                        }
                    ]
                },
                "points": 0
            },
            {
                "sku": "AA583077",
                "title": "NECTAR PETIT MZ DREAM CAP 24/3",
                "categoryId": "NECTARES",
                "category": "NECTAR PETIT MZ DREAM CAP 24/3",
                "brand": "PETIT",
                "classification": "NECTARES",
                "unitsPerBox": "24",
                "minOrderUnits": "24.000000000000000000",
                "packageDescription": "1 box",
                "packageUnitDescription": "24 ea",
                "quantity_max_redeem": null,
                "redeem_unit": null,
                "order_reason_redeem": null,
                "sku_redeem": null,
                "price": {
                    "full_price": 75600,
                    "taxes": [
                        {
                            "taxType": "porcentaje",
                            "taxId": "MWST",
                            "rate": 120
                        }
                    ]
                },
                "points": 0
            },
            {
                "sku": "BA012906",
                "title": "VIP WATERMELON 355 ML GNRB *24",
                "categoryId": "LICOR",
                "category": "VIP WATERMELON 355 ML GNRB *24",
                "brand": "VIP",
                "classification": "LICOR",
                "unitsPerBox": "24",
                "minOrderUnits": null,
                "packageDescription": "1 box",
                "packageUnitDescription": "24 ea",
                "quantity_max_redeem": null,
                "redeem_unit": null,
                "order_reason_redeem": null,
                "sku_redeem": null,
                "price": {
                    "full_price": 192000,
                    "taxes": [
                        {
                            "taxType": "porcentaje",
                            "taxId": "MWST",
                            "rate": 120
                        }
                    ]
                },
                "points": 0
            },
            {
                "sku": "BA013316",
                "title": "VOSS AGUA 800ML VNR 12PK",
                "categoryId": "AGUA PURA",
                "category": "VOSS AGUA 800ML VNR 12PK",
                "brand": "VOSS",
                "classification": "AGUA PURA",
                "unitsPerBox": "12",
                "minOrderUnits": null,
                "packageDescription": "1 box",
                "packageUnitDescription": "12 ea",
                "quantity_max_redeem": null,
                "redeem_unit": null,
                "order_reason_redeem": null,
                "sku_redeem": null,
                "price": {
                    "full_price": 345600,
                    "taxes": [
                        {
                            "taxType": "porcentaje",
                            "taxId": "MWST",
                            "rate": 120
                        }
                    ]
                },
                "points": 0
            },
            {
                "sku": "BA016739",
                "title": "O-BIT HARD SELTZER LIMÓN * 24",
                "categoryId": "LICOR",
                "category": "O-BIT HARD SELTZER LIMÓN * 24",
                "brand": "O-BIT",
                "classification": "LICOR",
                "unitsPerBox": "24",
                "minOrderUnits": null,
                "packageDescription": "1 box",
                "packageUnitDescription": "24 ea",
                "quantity_max_redeem": null,
                "redeem_unit": null,
                "order_reason_redeem": null,
                "sku_redeem": null,
                "price": {
                    "full_price": 252000,
                    "taxes": [
                        {
                            "taxType": "porcentaje",
                            "taxId": "MWST",
                            "rate": 120
                        }
                    ]
                },
                "points": 0
            },
            {
                "sku": "BA013155",
                "title": "VIP WILD BERRIES 350ML LATA*24",
                "categoryId": "LICOR",
                "category": "VIP WILD BERRIES 350ML LATA*24",
                "brand": "VIP",
                "classification": "LICOR",
                "unitsPerBox": "24",
                "minOrderUnits": null,
                "packageDescription": "1 box",
                "packageUnitDescription": "24 ea",
                "quantity_max_redeem": null,
                "redeem_unit": null,
                "order_reason_redeem": null,
                "sku_redeem": null,
                "price": {
                    "full_price": 144000,
                    "taxes": [
                        {
                            "taxType": "porcentaje",
                            "taxId": "MWST",
                            "rate": 120
                        }
                    ]
                },
                "points": 0
            },
            {
                "sku": "BA014338",
                "title": "YOGURT GLAD 200ML MANZANACANE",
                "categoryId": "BEBIDA LECHE",
                "category": "YOGURT GLAD 200ML MANZANACANE",
                "brand": "GLAD",
                "classification": "BEBIDA LECHE",
                "unitsPerBox": "30",
                "minOrderUnits": null,
                "packageDescription": "1 box",
                "packageUnitDescription": "30 ea",
                "quantity_max_redeem": null,
                "redeem_unit": null,
                "order_reason_redeem": null,
                "sku_redeem": null,
                "price": {
                    "full_price": 139500,
                    "taxes": [
                        {
                            "taxType": "porcentaje",
                            "taxId": "MWST",
                            "rate": 120
                        }
                    ]
                },
                "points": 0
            },
            {
                "sku": "AA004011",
                "title": "Mirinda Naranja 355 ML Lata*24",
                "categoryId": "CARBONATADAS",
                "category": "Mirinda Naranja 355 ML Lata*24",
                "brand": "MIRINDA",
                "classification": "CARBONATADAS",
                "unitsPerBox": "24",
                "minOrderUnits": "24.000000000000000000",
                "packageDescription": "1 box",
                "packageUnitDescription": "24 ea",
                "quantity_max_redeem": null,
                "redeem_unit": null,
                "order_reason_redeem": null,
                "sku_redeem": null,
                "price": {
                    "full_price": 85050,
                    "taxes": [
                        {
                            "taxType": "porcentaje",
                            "taxId": "MWST",
                            "rate": 120
                        }
                    ]
                },
                "points": 0
            },
            {
                "sku": "AA018003",
                "title": "Seven Up 500 ML GRB * 24",
                "categoryId": "CARBONATADAS",
                "category": "Seven Up 500 ML GRB * 24",
                "brand": "SEVEN UP",
                "classification": "CARBONATADAS",
                "unitsPerBox": "24",
                "minOrderUnits": null,
                "packageDescription": "1 box",
                "packageUnitDescription": "24 ea",
                "quantity_max_redeem": null,
                "redeem_unit": null,
                "order_reason_redeem": null,
                "sku_redeem": null,
                "price": {
                    "full_price": 77500,
                    "taxes": [
                        {
                            "taxType": "porcentaje",
                            "taxId": "MWST",
                            "rate": 120
                        }
                    ]
                },
                "points": 0
            },
            {
                "sku": "BA012907",
                "title": "VIP GREEN APPLE 355 ML GNRB*24",
                "categoryId": "LICOR",
                "category": "VIP GREEN APPLE 355 ML GNRB*24",
                "brand": "VIP",
                "classification": "LICOR",
                "unitsPerBox": "24",
                "minOrderUnits": null,
                "packageDescription": "1 box",
                "packageUnitDescription": "24 ea",
                "quantity_max_redeem": null,
                "redeem_unit": null,
                "order_reason_redeem": null,
                "sku_redeem": null,
                "price": {
                    "full_price": 192000,
                    "taxes": [
                        {
                            "taxType": "porcentaje",
                            "taxId": "MWST",
                            "rate": 120
                        }
                    ]
                },
                "points": 0
            },
            {
                "sku": "BA015900",
                "title": "PEPSI 2500ML PRB*8DISTRIBUIDOR",
                "categoryId": "CARBONATADAS",
                "category": "PEPSI 2500ML PRB*8DISTRIBUIDOR",
                "brand": "PEPSI",
                "classification": "CARBONATADAS",
                "unitsPerBox": "8",
                "minOrderUnits": null,
                "packageDescription": "1 box",
                "packageUnitDescription": "8 ea",
                "quantity_max_redeem": null,
                "redeem_unit": null,
                "order_reason_redeem": null,
                "sku_redeem": null,
                "price": {
                    "full_price": 74000,
                    "taxes": [
                        {
                            "taxType": "porcentaje",
                            "taxId": "MWST",
                            "rate": 120
                        }
                    ]
                },
                "points": 0
            },
            {
                "sku": "BA000939",
                "title": "CORONA LATA 12 ONZAS",
                "categoryId": "CERVEZAS",
                "category": "CORONA LATA 12 ONZAS",
                "brand": "CORONA",
                "classification": "CERVEZAS",
                "unitsPerBox": "24",
                "minOrderUnits": null,
                "packageDescription": "1 box",
                "packageUnitDescription": "24 ea",
                "quantity_max_redeem": null,
                "redeem_unit": null,
                "order_reason_redeem": null,
                "sku_redeem": null,
                "price": {
                    "full_price": 135000,
                    "taxes": [
                        {
                            "taxType": "porcentaje",
                            "taxId": "MWST",
                            "rate": 120
                        }
                    ]
                },
                "points": 0
            },
            {
                "sku": "BA017863",
                "title": "T&M HUEHUE 400G UN",
                "categoryId": "ABARROTES",
                "category": "T&M HUEHUE 400G UN",
                "brand": "BARISTA",
                "classification": "ABARROTES",
                "unitsPerBox": "4",
                "minOrderUnits": null,
                "packageDescription": "1 box",
                "packageUnitDescription": "4 ea",
                "quantity_max_redeem": null,
                "redeem_unit": null,
                "order_reason_redeem": null,
                "sku_redeem": null,
                "price": {
                    "full_price": 233000,
                    "taxes": [
                        {
                            "taxType": "porcentaje",
                            "taxId": "MWST",
                            "rate": 120
                        }
                    ]
                },
                "points": 0
            },
            {
                "sku": "AA087875",
                "title": "BECK'S NON ALCOHOLIC 330ML VNR",
                "categoryId": "CERVEZAS",
                "category": "BECK'S NON ALCOHOLIC 330ML VNR",
                "brand": "BECK'S",
                "classification": "CERVEZAS",
                "unitsPerBox": "24",
                "minOrderUnits": null,
                "packageDescription": "1 box",
                "packageUnitDescription": "24 ea",
                "quantity_max_redeem": null,
                "redeem_unit": null,
                "order_reason_redeem": null,
                "sku_redeem": null,
                "price": {
                    "full_price": 189000,
                    "taxes": [
                        {
                            "taxType": "porcentaje",
                            "taxId": "MWST",
                            "rate": 120
                        }
                    ]
                },
                "points": 0
            },
            {
                "sku": "AA685001",
                "title": "Pepsi 355 ML PET * 24",
                "categoryId": "CARBONATADAS",
                "category": "Pepsi 355 ML PET * 24",
                "brand": "PEPSI",
                "classification": "CARBONATADAS",
                "unitsPerBox": "24",
                "minOrderUnits": null,
                "packageDescription": "1 box",
                "packageUnitDescription": "24 ea",
                "quantity_max_redeem": null,
                "redeem_unit": null,
                "order_reason_redeem": null,
                "sku_redeem": null,
                "price": {
                    "full_price": 77000,
                    "taxes": [
                        {
                            "taxType": "porcentaje",
                            "taxId": "MWST",
                            "rate": 120
                        }
                    ]
                },
                "points": 0
            },
            {
                "sku": "BA004915",
                "title": "BUSCH LIGHT 355 ML VNR",
                "categoryId": "CERVEZAS",
                "category": "BUSCH LIGHT 355 ML VNR",
                "brand": "BUSCH LIGHT",
                "classification": "CERVEZAS",
                "unitsPerBox": "24",
                "minOrderUnits": null,
                "packageDescription": "1 box",
                "packageUnitDescription": "24 ea",
                "quantity_max_redeem": null,
                "redeem_unit": null,
                "order_reason_redeem": null,
                "sku_redeem": null,
                "price": {
                    "full_price": 114000,
                    "taxes": [
                        {
                            "taxType": "porcentaje",
                            "taxId": "MWST",
                            "rate": 120
                        }
                    ]
                },
                "points": 0
            },
            {
                "sku": "AA018006",
                "title": "Grapette 500 ML GRB * 24",
                "categoryId": "CARBONATADAS",
                "category": "Grapette 500 ML GRB * 24",
                "brand": "GRAPETTE",
                "classification": "CARBONATADAS",
                "unitsPerBox": "24",
                "minOrderUnits": null,
                "packageDescription": "1 box",
                "packageUnitDescription": "24 ea",
                "quantity_max_redeem": null,
                "redeem_unit": null,
                "order_reason_redeem": null,
                "sku_redeem": null,
                "price": {
                    "full_price": 76890,
                    "taxes": [
                        {
                            "taxType": "porcentaje",
                            "taxId": "MWST",
                            "rate": 120
                        }
                    ]
                },
                "points": 0
            },
            {
                "sku": "BA003863",
                "title": "PETIT MANZANA CALCIO 200ML TT",
                "categoryId": "NECTARES",
                "category": "PETIT MANZANA CALCIO 200ML TT",
                "brand": "PETIT",
                "classification": "NECTARES",
                "unitsPerBox": "24",
                "minOrderUnits": null,
                "packageDescription": "1 box",
                "packageUnitDescription": "24 ea",
                "quantity_max_redeem": null,
                "redeem_unit": null,
                "order_reason_redeem": null,
                "sku_redeem": null,
                "price": {
                    "full_price": 55100,
                    "taxes": [
                        {
                            "taxType": "porcentaje",
                            "taxId": "MWST",
                            "rate": 120
                        }
                    ]
                },
                "points": 0
            },
            {
                "sku": "BA006000",
                "title": "BUSCH LIGHT 355 ML LATA",
                "categoryId": "CERVEZAS",
                "category": "BUSCH LIGHT 355 ML LATA",
                "brand": "BUSCH LIGHT",
                "classification": "CERVEZAS",
                "unitsPerBox": "24",
                "minOrderUnits": null,
                "packageDescription": "1 box",
                "packageUnitDescription": "24 ea",
                "quantity_max_redeem": null,
                "redeem_unit": null,
                "order_reason_redeem": null,
                "sku_redeem": null,
                "price": {
                    "full_price": 95000,
                    "taxes": [
                        {
                            "taxType": "porcentaje",
                            "taxId": "MWST",
                            "rate": 120
                        }
                    ]
                },
                "points": 0
            },
            {
                "sku": "BA007186",
                "title": "GOOSE ISLAND MATILDA 355ML",
                "categoryId": "CERVEZAS",
                "category": "GOOSE ISLAND MATILDA 355ML",
                "brand": "GOOSE ISLAND",
                "classification": "CERVEZAS",
                "unitsPerBox": "24",
                "minOrderUnits": null,
                "packageDescription": "1 box",
                "packageUnitDescription": "24 ea",
                "quantity_max_redeem": null,
                "redeem_unit": null,
                "order_reason_redeem": null,
                "sku_redeem": null,
                "price": {
                    "full_price": 600000,
                    "taxes": [
                        {
                            "taxType": "porcentaje",
                            "taxId": "MWST",
                            "rate": 120
                        }
                    ]
                },
                "points": 0
            }
        ],
        "route": "105671"
    }
]);
