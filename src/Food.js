

const food = [
  // Breakfast (5)
  {
    id: 1,
    food_Name: "Pancake",
    food_Category: "Breakfast",
    food_Type: "Veg",
    food_Img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8k5yKxA9JsH8nsN4qyDs1_VMytfz3HMvkDA&s",
    food_Qty: 1,
    food_Price: 199
  },
  {
    id: 2,
    food_Name: "Masala Dosa",
    food_Category: "Breakfast",
    food_Type: "Veg",
    food_Img: "https://www.mydelicious-recipes.com/home/images/120_1080_1080/mydelicious-recipes-masala-dosa-with-batter",
    food_Qty: 1,
    food_Price: 149
  },
  {
    id: 3,
    food_Name: "Cheese Omelette",
    food_Category: "Breakfast",
    food_Type: "Non-Veg",
    food_Img: "https://c.ndtvimg.com/2020-07/3cqv032o_omelette_625x300_23_July_20.jpg",
    food_Qty: 1,
    food_Price: 99
  },
  {
    id: 4,
    food_Name: "French Toast",
    food_Category: "Breakfast",
    food_Type: "Non-Veg",
    food_Img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8RqbCV82AeRDSyuDyubfOcrj9r_-Xn0b-5w&s",
    food_Qty: 1,
    food_Price: 179
  },
  {
    id: 5,
    food_Name: "Idli Sambhar",
    food_Category: "Breakfast",
    food_Type: "Veg",
    food_Img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjjaeVTkDRGNrF8WKt7gDhoZ2m4YEgyEe2DQ&s",
    food_Qty: 1,
    food_Price: 129
  },

  // Soup (5)
  {
    id: 6,
    food_Name: "Tomato Soup",
    food_Category: "Soup",
    food_Type: "Veg",
    food_Img: "https://cdn.loveandlemons.com/wp-content/uploads/2023/01/tomato-soup-recipe.jpg",
    food_Qty: 1,
    food_Price: 99
  },
  {
    id: 7,
    food_Name: "Sweet Corn Soup",
    food_Category: "Soup",
    food_Type: "Veg",
    food_Img: "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2017/1/9/6/FNK_Spring-Vegetable-Alfredo_s4x3.jpg.rend.hgtvcom.1280.1280.suffix/1484859771784.webp",
    food_Qty: 1,
    food_Price: 119
  },
  {
    id: 8,
    food_Name: "Hot & Sour Soup",
    food_Category: "Soup",
    food_Type: "Veg",
    food_Img: "https://www.cookingcarnival.com/wp-content/uploads/2023/09/Hot-and-sour-soup-4.jpg",
    food_Qty: 1,
    food_Price: 129
  },
  {
    id: 9,
    food_Name: "Chicken Soup",
    food_Category: "Soup",
    food_Type: "Non-Veg",
    food_Img: "https://saltedplains.com/wp-content/uploads/2024/02/gluten-free-chicken-soup-7.jpg",
    food_Qty: 1,
    food_Price: 149
  },
  {
    id: 10,
    food_Name: "Mutton Soup",
    food_Category: "Soup",
    food_Type: "Non-Veg",
    food_Img: "https://streamofflavors.com/wp-content/uploads/2022/01/Mutton-Bone-Soup-logo.jpg",
    food_Qty: 1,
    food_Price: 179
  },

  // Pasta (5)
  {
    id: 11,
    food_Name: "Veg Alfredo Pasta",
    food_Category: "Pasta",
    food_Type: "Veg",
    food_Img: "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2017/1/9/6/FNK_Spring-Vegetable-Alfredo_s4x3.jpg.rend.hgtvcom.1280.1280.suffix/1484859771784.webp",
    food_Qty: 1,
    food_Price: 199
  },
  {
    id: 12,
    food_Name: "Chicken Alfredo Pasta",
    food_Category: "Pasta",
    food_Type: "Non-Veg",
    food_Img: "https://midwestfoodieblog.com/wp-content/uploads/2023/07/chicken-alfredo-1.jpg",
    food_Qty: 1,
    food_Price: 249
  },
  {
    id: 13,
    food_Name: "Penne Arrabiata",
    food_Category: "Pasta",
    food_Type: "Veg",
    food_Img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS019-HD-FpnU5U9q83LDIIVUyy2H25ptkU9w&s",
    food_Qty: 1,
    food_Price: 189
  },
  {
    id: 14,
    food_Name: "Prawn Pasta",
    food_Category: "Pasta",
    food_Type: "Non-Veg",
    food_Img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmvRNV5yQ-7nA4GXBnH_pUpxB6uMubj_tK1A&s",
    food_Qty: 1,
    food_Price: 299
  },
  {
    id: 15,
    food_Name: "Cheesy Macaroni",
    food_Category: "Pasta",
    food_Type: "Veg",
    food_Img: "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F43%2F2022%2F03%2F19%2F238691-Simple-Macaroni-And-Cheese-mfs_006.jpg&w=160&q=60&c=sc&poi=auto&orient=true&h=90",
    food_Qty: 1,
    food_Price: 159
  },

  // Burger (5)
  {
    id: 16,
    food_Name: "Veggie Burger",
    food_Category: "Burger",
    food_Type: "Veg",
    food_Img: "https://www.indianhealthyrecipes.com/wp-content/uploads/2016/02/veg-burger-recipe-1.jpg",
    food_Qty: 1,
    food_Price: 149
  },
  {
    id: 17,
    food_Name: "Paneer Tikka Burger",
    food_Category: "Burger",
    food_Type: "Veg",
    food_Img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSva_F531akiT4l0amkyUaGx8fCT99iVmAUow&s",
    food_Qty: 1,
    food_Price: 179
  },
  {
    id: 18,
    food_Name: "Chicken Zinger Burger",
    food_Category: "Burger",
    food_Type: "Non-Veg",
    food_Img: "https://i.ytimg.com/vi/aQ1gh6y30CE/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLA_wt0da1Gy3qi0CpYScSNFBsVBsA",
    food_Qty: 1,
    food_Price: 199
  },
  {
    id: 19,
    food_Name: "Double Cheese Burger",
    food_Category: "Burger",
    food_Type: "Veg",
    food_Img: "https://s7d1.scene7.com/is/image/mcdonalds/mcdonalds-Double-Cheeseburger:product-header-mobile?wid=768&hei=441&dpr=off",
    food_Qty: 1,
    food_Price: 189
  },
  {
    id: 20,
    food_Name: "Fish Burger",
    food_Category: "Burger",
    food_Type: "Non-Veg",
    food_Img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTarqicGlkOb83Uzlm52g3v1XDpBdw3rko0dA&s",
    food_Qty: 1,
    food_Price: 229
  },

  // Pizza (5)
  {
    id: 21,
    food_Name: "Margherita Pizza",
    food_Category: "Pizza",
    food_Type: "Veg",
    food_Img: "https://ooni.com/cdn/shop/articles/20220211142347-margherita-9920_ba86be55-674e-4f35-8094-2067ab41a671.jpg?crop=center&height=800&v=1737104576&width=800",
    food_Qty: 1,
    food_Price: 249
  },
  {
    id: 22,
    food_Name: "Farmhouse Pizza",
    food_Category: "Pizza",
    food_Type: "Veg",
    food_Img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNNpHklPkz02Lp6ihfChxkyvwH4pJn2HUIOw&s",
    food_Qty: 1,
    food_Price: 299
  },
  {
    id: 23,
    food_Name: "Pepperoni Pizza",
    food_Category: "Pizza",
    food_Type: "Non-Veg",
    food_Img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQy-tSPPEH9cU6BDeb8QnQieBxc2jMYAU5vqA&s",
    food_Qty: 1,
    food_Price: 349
  },
  {
    id: 24,
    food_Name: "Paneer Tikka Pizza",
    food_Category: "Pizza",
    food_Type: "Veg",
    food_Img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUSBY5SWIFI-pofr5vHT8_kxd1XimTHB52TA&s",
    food_Qty: 1,
    food_Price: 329
  },
  {
    id: 25,
    food_Name: "Chicken Supreme Pizza",
    food_Category: "Pizza",
    food_Type: "Non-Veg",
    food_Img: "https://www.dominos.com.au/ManagedAssets/AU/product/P422/AU_P422_en_hero_8129.jpg?v807560171",
    food_Qty: 1,
    food_Price: 379
  },

  // Main_Course (5)
  {
    id: 26,
    food_Name: "Paneer Butter Masala",
    food_Category: "Main_Course",
    food_Type: "Veg",
    food_Img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQRQMKHs5qBBmBwVN6e7UTPlt3PpK2c6T8XA&s",
    food_Qty: 1,
    food_Price: 249
  },
  {
    id: 27,
    food_Name: "Dal Makhani",
    food_Category: "Main_Course",
    food_Type: "Veg",
    food_Img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrqlmuM6fhCcLstM0zaHv2AFs-cusaSe5lUw&s",
    food_Qty: 1,
    food_Price: 199
  },
  {
    id: 28,
    food_Name: "Butter Chicken",
    food_Category: "Main_Course",
    food_Type: "Non-Veg",
    food_Img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYU7bkgqtucD8ngwFxlIK-rDPzBR4k-ZIkTA&s",
    food_Qty: 1,
    food_Price: 299
  },
  {
    id: 29,
    food_Name: "Mutton Rogan Josh",
    food_Category: "Main_Course",
    food_Type: "Non-Veg",
    food_Img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaNFMzPLQtpzplhBi0mObNRKnf8990_ZK_zA&s",
    food_Qty: 1,
    food_Price: 349
  },
  {
    id: 30,
    food_Name: "Veg Biryani",
    food_Category: "Main_Course",
    food_Type: "Veg",
    food_Img: "https://i.ytimg.com/vi/Do7ZdUodDdw/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLAEQctXy1aD1723HT7omylxjn4tMQ",
    food_Qty: 1,
    food_Price: 229
  }
];

export default food;
