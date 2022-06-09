const Products = require("./models/Products")


     Products.bulkCreate(
        [{
            "barcode": 7868000790101,
            "brand": "reebok",
            "model": "ghostbusters ecto boots",
            "color": "grey",
            "price": 144.97,
            "size": 7,
            "stock": 10,
            "url_path": "/01.jpg"
          },
          {
            "barcode": 7868000790102,
            "brand": "reebok",
            "model": "club c 85 vintage shoes",
            "color": "beige",
            "price": 85,
            "size": 8,
            "stock": 9,
            "url_path": "/02.jpg"
          },
          {
            "barcode": 7868000790103,
            "brand": "reebok",
            "model": "nanoflex tr womea's training shoes",
            "color": "pink",
            "price": 64.97,
            "size": 6,
            "stock": 11,
            "url_path": "/03.jpg"
          },
          {
            "barcode": 7868000790104,
            "brand": "adidas",
            "model": "forum 84 low shoes",
            "color": "brown",
            "price": 100,
            "size": 8,
            "stock": 23,
            "url_path": "/04.jpg"
          },
          {
            "barcode": 7868000790105,
            "brand": "adidas",
            "model": "ultraboost 22 shoes",
            "color": "almost lime",
            "price": 190,
            "size": 10,
            "stock": 21,
            "url_path": "/05.jpg"
          },
          {
            "barcode": 7868000790106,
            "brand": "adidas",
            "model": "puremotion adapt shoes",
            "color": "burgundy",
            "price": 46,
            "size": 5,
            "stock": 13,
            "url_path": "/06.jpg"
          },
          {
            "barcode": 7868000790107,
            "brand": "adidas",
            "model": "supernova w",
            "color": "sky rush",
            "price": 70,
            "size": 6,
            "stock": 15,
            "url_path": "/07.jpg"
          },
          {
            "barcode": 7868000790108,
            "brand": "adidas",
            "model": "nmd_r1",
            "color": "bright orange",
            "price": 150,
            "size": 7,
            "stock": 0,
            "url_path": "/08.jpg"
          },
          {
            "barcode": 7868000790109,
            "brand": "nike",
            "model": "pegasus trail 4",
            "color": "5 colors",
            "price": 150,
            "size": 12,
            "stock": 31,
            "url_path": "/09.jpg"
          },
          {
            "barcode": 7868000790110,
            "brand": "nike",
            "model": "pegasus trail 3",
            "color": "purple",
            "price": 130,
            "size": 14,
            "stock": 3,
            "url_path": "/10.jpg"
          },
          {
            "barcode": 7868000790111,
            "brand": "inov",
            "model": "f-lite fly g 295",
            "color": "red/black",
            "price": 170,
            "size": 13,
            "stock": 5,
            "url_path": "/11.jpg"
          },
          {
            "barcode": 7868000790112,
            "brand": "inov",
            "model": "bare-xf 210 v3",
            "color": "green/gum",
            "price": 120,
            "size": 6,
            "stock": 7,
            "url_path": "/12.jpg"
          },
          {
            "barcode": 7868000790113,
            "brand": "inov",
            "model": "fastlift 360",
            "color": "khaki",
            "price": 190,
            "size": 8,
            "stock": 0,
            "url_path": "/13.jpg"
          }]
    )