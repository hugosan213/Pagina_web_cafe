// ============================================================
// MENU-DATA.JS — Mesal Café
// Acá editás categorías, platos, precios y descripciones
// ============================================================

const menuTabs = [
  { filter: "all",        icon: "fa-border-all",        label: "Todo" },
  { filter: "desayuno",   icon: "fa-mug-hot",           label: "Desayuno" },
  { filter: "pizza",      icon: "fa-pizza-slice",       label: "Pizza" },
  { filter: "principales",icon: "fa-drumstick-bite",    label: "Principales" },
  { filter: "burgers",    icon: "fa-burger",            label: "Burgers" },
  { filter: "fries",      icon: "fa-fire-flame-curved", label: "Fries" },
  { filter: "kids",       icon: "fa-child",             label: "Kids" },
  { filter: "ciabatta",   icon: "fa-bread-slice",       label: "Ciabatta" },
  { filter: "ensaladas",  icon: "fa-leaf",              label: "Ensaladas" },
  { filter: "postres",    icon: "fa-cake-candles",      label: "Postres" },
];

const menuData = [
  {
    categoria: "desayuno",
    titulo: "Desayuno",
    nota: "Hasta las 11am",
    items: [
      { nombre: "Breakfast Bun",         desc: "Egg and Bacon with Chips",                                                                     precio: "$79"  },
      { nombre: "Spicy Chicken Livers",  desc: "on a Panini with Two Fried Eggs",                                                              precio: "$69"  },
      { nombre: "Savoury Beef Mince",    desc: "on a Panini with Two Fried Eggs",                                                              precio: "$79"  },
      { nombre: "Brewmasters Breakfast", desc: "Two Eggs, Two Rashers Bacon, Boere Wors, Grilled Tomato, Chips, two slices of Toast",          precio: "$129" },
      { nombre: "Little Pony Breakfast", desc: "Two Eggs, Two Rashers Bacon, Grilled Tomato, one Slice of Toast and chips",                   precio: "$89"  },
      { nombre: "Vegetarian Breakfast",  desc: "Creamed Spinach, Mushrooms, Grilled Tomato on a Panini with Two Fried Eggs", vegano: true,     precio: "$79"  },
      { nombre: "200g Breakfast Burger", desc: "Egg, Bacon and a 200g Beef Patty with Chips",                                                  precio: "$149" },
    ]
  },
  {
    categoria: "pizza",
    titulo: "Pizza",
    items: [
      { nombre: "Focaccia",                    desc: "Pizza with Garlic and salt and a dribble of olive oil",  precio: "$65"  },
      { nombre: "Cheese Focaccia",             desc: "",                                                       precio: "$95"  },
      { nombre: "Banhoek Chilli Focaccia 🌶️", desc: "",                                                       precio: "$65"  },
      { nombre: "Regina, Ham & Mushroom",      desc: "",                                                       precio: "$119" },
      { nombre: "Mexicano, Mince & Chilli 🌶️",desc: "",                                                       precio: "$139" },
      { nombre: "Vegetarian",                  desc: "Aubergine, Artichokes, Olives and Basil Pesto",          precio: "$175", vegano: true },
      { nombre: "RIB Pizza",                   desc: "Pork Rib, Peppers and Feta",                             precio: "$179" },
      { nombre: "Margherita Pizza",            desc: "",                                                       precio: "$90",  vegano: true },
      { nombre: "Chicken, Mayo & Mushroom",    desc: "",                                                       precio: "$129" },
      { nombre: "Salami, Peppers and Mushrooms",desc: "",                                                      precio: "$159" },
    ]
  },
  {
    categoria: "principales",
    titulo: "Principales",
    items: [
      { nombre: "Ribs 600g",                       desc: "with chips and Corn on the Cob",                    precio: "$219" },
      { nombre: "Chorizo, Feta and Tomato",         desc: "Penne Pasta",                                       precio: "$179" },
      { nombre: "1 Kg Eisbein with Sauerkraut",     desc: "and Chips · ⏱ 45min",                              precio: "$259" },
      { nombre: "½ Peri-Peri Chicken 🌶️",          desc: "and chips (900g)",                                  precio: "$179" },
      { nombre: "Chicken Wings & Ribs",             desc: "with 1/2 corn on the cob and chips",               precio: "$229" },
      { nombre: "Mediterranean Gnocchi",            desc: "",                                                  precio: "$169", vegano: true },
      { nombre: "Hake",                             desc: "with Beer Batter or Grilled with Chips",            precio: "$149" },
      { nombre: "Rump",                             desc: "with 1/2 corn on the cob and chips",               precios: ["200g – $159", "400g – $265"] },
      { nombre: "Mushroom Risotto BALLS",           desc: "with Tempura Vegetables and a side salad",          precio: "$149", vegano: true },
      { nombre: "200g Rump and 300g Ribs",          desc: "with 1/2 corn on the cob and chips",               precio: "$239" },
      { nombre: "Bœuf Bourguignon with Polenta",    desc: "French beef stew braised in red wine",             precio: "$189" },
      { nombre: "Vegan Gumbo with Red-bean Balls",  desc: "served with Basmati Rice",                         precio: "$179", vegano: true },
      { nombre: "Thai Chicken Curry",               desc: "served with Basmati Rice",                         precio: "$169" },
    ]
  },
  {
    categoria: "burgers",
    titulo: "Burgers",
    items: [
      { nombre: "200g Cheese Burger",    desc: "Beef or Chicken Burger and Chips",                                                                         precio: "$139" },
      { nombre: "Vegetarian Burger",     desc: "With Coleslaw. Burger Patty consists of Chickpeas, Peas, Mixed peppers, Onion, Pea flour, Tomato & Herb sauce.", precio: "$129", vegano: true },
      { nombre: "400g Double Burger",    desc: "Extra Large Cheese Beef Burger, Chips & Coleslaw",                                                         precio: "$179" },
      { nombre: "Salmon Burger",         desc: "Salmon Burger with Tartar Sauce and Chips",                                                                precio: "$129" },
      { nombre: "200g Breakfast Burger", desc: "Egg, Bacon and a 200g Beef Patty with Chips",                                                              precio: "$149" },
    ]
  },
  {
    categoria: "fries",
    titulo: "Fries",
    items: [
      { nombre: "Porción de Fries", desc: "", precio: "$45" },
      { nombre: "Plato de Fries",   desc: "", precio: "$65" },
    ]
  },
  {
    categoria: "kids",
    titulo: "Kids",
    items: [
      { nombre: "Chicken Strips",      desc: "Served with chips and 1/2 corn on the cob", precio: "$89"  },
      { nombre: "Beef Wors",           desc: "Served with chips and 1/2 corn on the cob", precio: "$99"  },
      { nombre: "300g Ribs",           desc: "Served with chips and 1/2 corn on the cob", precio: "$119" },
      { nombre: "Crunchy Fish Goujons",desc: "Served with chips and 1/2 corn on the cob", precio: "$90"  },
    ]
  },
  {
    categoria: "ciabatta",
    titulo: "Gourmet Ciabatta",
    items: [
      { nombre: "Crispy Chicken Tenders",        desc: "Smothered in Guacamole, fresh lettuce and tomato served with chips and coleslaw", precio: "$139" },
      { nombre: "Roast Beef & Caramelised Onions",desc: "Served with chips and coleslaw",                                                 precio: "$159" },
      { nombre: "Slow Cooked Pulled Pork",        desc: "Served with chips and coleslaw",                                                 precio: "$129" },
    ]
  },
  {
    categoria: "ensaladas",
    titulo: "Ensaladas",
    items: [
      { nombre: "Cup Salad",        desc: "Tomatoes, cucumbers, red onions, olives, and blocks of creamy feta cheese",                                           precio: "$59"  },
      { nombre: "Table Greek Salad",desc: "Tomatoes, cucumbers, red onions, olives, and blocks of creamy feta cheese",                                           precio: "$109", vegano: true },
      { nombre: "Summer Salad",     desc: "Tomatoes, cucumber, seasonal fruits, onion, feta and herbs, and a vinaigrette dressing on the side",                  precio: "$99",  vegano: true },
    ],
    upgrade: [
      { label: "Add Chicken", precio: "+$39" },
      { label: "Add Chorizo", precio: "+$49" },
    ]
  },
  {
    categoria: "postres",
    titulo: "Postres",
    destacado: true,
    items: [
      { nombre: "Postre del Día",       desc: "", precio: "$69" },
      { nombre: "Trío de Helados & Salsa", desc: "", precio: "$50" },
      { nombre: "Sopa del Día",         desc: "", precio: "$79" },
    ]
  },
];