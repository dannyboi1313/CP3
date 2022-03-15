let mock = [
    {
    id: 1,
    name: "Extra-Creamy Scrambled Eggs",
    description: "A Cheesy spin on a classing dish",
    totalTime: {time: 10, units: "mins"},
    ingredients:[
        {   ingredient:"Eggs",
            quantity: 3,
            measurement: "eggs"
        },
        {   ingredient:"Shredded Cheddar Cheese",
            quantity: 2,
            measurement: "cups"
        },
        {   ingredient:"Salt",
            quantity: 1,
            measurement: "pinch"
        } 
    ],
    cost: "$",
    tags: ["Under 30 minutes", "Fast", "Breakfast", "Budget"],
    image: 'cheesy-eggs.jpg',
    rating: 0
  },
  {
    id: 2,
    name: "Macaroni and Cheese",
    description: "Creamy Baked Macaroni and Cheese",
    totalTime: {time: 40, units: "mins"},
    ingredients:[
        {   ingredient:"Macaroni Noodles",
            quantity: 4,
            measurement: "cups"
        },
        {   ingredient:"Shredded Cheddar Cheese",
            quantity: 2,
            measurement: "cups"
        },
        {   ingredient:"Monterey Jack Cheese",
            quantity: 4,
            measurement: "oz"
        }, 
        {   ingredient:"Heavy Cream",
            quantity: 1,
            measurement: "cup"
        }, 
        {   ingredient:"Butter",
            quantity: 2,
            measurement: "tablespoons"
        }  
    ],
    cost: "$",
    tags: ["Dinner", "Budget", "Side Dish", "Pasta"],
    image: 'mac-n-cheese.jpg',
    rating: 0
  },
  {
    id: 3,
    name: "Cripsy Gnocchi",
    description: "New take on an italian classic",
    totalTime: {time: 75, units: "mins"},
    ingredients:[
        {   ingredient:"Eggs",
            quantity: 3,
            measurement: "eggs"
        },
        {   ingredient:"Shredded Parmesan Cheese",
            quantity: 2,
            measurement: "cups"
        },
        {   ingredient:"Gnocchi",
            quantity: 1,
            measurement: "package"
        },
        {   ingredient:"Cherry Tomatoes",
            quantity: 1,
            measurement: "package"
        },
        {   ingredient:"Mozzarella Cheese",
            quantity: 1,
            measurement: "package"
        },
        {   ingredient:"Canned Tomatoes",
            quantity: 1,
            measurement: "Can"
        }   
    ],
    cost: "$$$",
    tags: ["Fancy", "Italian", "Pasta"],
    image: 'gnocchi.jpg',
    rating: 0
  },
  {
    id: 4,
    name: "Cold Noodle Salad",
    description: "Cold Noodle Salad with Spicy Peanut Sauce",
    totalTime: {time: 25, units: "mins"},
    ingredients:[
        {   ingredient:"Spaghetti Noodles",
            quantity: 1,
            measurement: "package"
        },
        {   ingredient:"Cucumber",
            quantity: 1,
            measurement: ""
        },
        {   ingredient:"Peanut Butter",
            quantity: 1,
            measurement: "cup"
        },
        {   ingredient:"Broccoli",
            quantity: 1,
            measurement: "head"
        },
        {   ingredient:"Red Curry Paste",
            quantity: 20,
            measurement: "oz"
        },
        {   ingredient:"Soy Sauce",
            quantity: 1,
            measurement: "cup"
        }    
    ],
    cost: "$",
    tags: ["Under 30 minutes", "Fast", "Dinner", "Asian"],
    image: 'thai-pasta.jpg',
    rating: 0
  },
  {
    id: 5,
    name: "No-Knead Bread",
    description: "Great bread without the workout",
    totalTime: {time: 120, units: "mins"},
    ingredients:[
        {   ingredient:"Eggs",
            quantity: 3,
            measurement: "eggs"
        },
        {   ingredient:"Flour",
            quantity: 2,
            measurement: "cups"
        },
        {   ingredient:"Salt",
            quantity: 1,
            measurement: "pinch"
        } 
        ,
        {   ingredient:"Sugar",
            quantity: .5,
            measurement: "cups"
        } 
    ],
    cost: "$",
    tags: ["Bread", "Side"],
    image: 'bread.jpg',
    rating: 0
  },
  {
    id: 6,
    name: "Beef Birria Tacos",
    description: "Juicy Delicious Tacos",
    totalTime: {time: 40, units: "mins"},
    ingredients:[
        {   ingredient:"Corn Tortillas",
            quantity: 10,
            measurement: "tortillas"
        },
        {   ingredient:"Shredded Beef",
            quantity: 1,
            measurement: "lb"
        },
        {   ingredient:"Salt",
            quantity: 1,
            measurement: "pinch"
        },
        {   ingredient:"Tomato Soup",
            quantity: 1,
            measurement: "Can"
        }  
        ,
        {   ingredient:"Chopped Green Onions",
            quantity: 2,
            measurement: "Tablespoons"
        }  
    ],
    cost: "$$",
    tags: ["Mexican", "Dinner"],
    image: 'birria-tacos.jpg',
    rating: 0
  },
  {
    id: 7,
    name: "Croissants",
    description: "Buttery Croissants",
    totalTime: {time: 40, units: "mins"},
    ingredients:[
        {   ingredient:"Eggs",
            quantity: 3,
            measurement: "eggs"
        },
        {   ingredient:"Flour",
            quantity: 2,
            measurement: "cups"
        },
        {   ingredient:"Butter",
            quantity: 1,
            measurement: "cup"
        } 
    ],
    cost: "$$",
    tags: ["Bread", "Side"],
    image: 'croissants.jpg',
    rating: 0
  },
  {
    id: 8,
    name: "Lemon Chicken",
    description: "Delicious Lemony Chicken For a Fancy dinner",
    totalTime: {time: 40, units: "mins"},
    ingredients:[
        {   ingredient:"Chicken Breast",
            quantity: 1,
            measurement: "lb"
        },
        {   ingredient:"Lemon",
            quantity: 2,
            measurement: "lemons"
        },
        {   ingredient:"Chopped Green Onions",
            quantity: 3,
            measurement: "tablespoons"
        } ,
        {   ingredient:"Heavy Cream",
            quantity: 2,
            measurement: "cups"
        } 
        
    ],
    cost: "$$",
    tags: ["Fancy", "Dinner", "Chicken"],
    image: 'lemon-chicken.jpg',
    rating: 0
  },
  {
    id: 9,
    name: "Creamy Artichoke Pasta",
    description: "Ruin Perfectly Good Pasta with Artichoke",
    totalTime: {time: 20, units: "mins"},
    ingredients:[
        {   ingredient:"Rigatoni Pasta",
            quantity: 2,
            measurement: "cups"
        },
        {   ingredient:"Heavy Cream",
            quantity: 2,
            measurement: "cups"
        },
        {   ingredient:"Artichokes",
            quantity: 2,
            measurement: "hearts"
        } 
        ,
        {   ingredient:"Mozzarella Cheese",
            quantity: 2,
            measurement: "cups"
        } 
    ],
    cost: "$$$",
    tags: ["Under 30 minutes", "Pasta", "Dinner"],
    image: 'artichoke-pasta.jpg',
    rating: 0
  },
  {
    id: 10,
    name: "Coconut Chicken Curry",
    description: "Sweet curry with white rice",
    totalTime: {time: 40, units: "mins"},
    ingredients:[
        {   ingredient:"Curry Powder",
            quantity: 3,
            measurement: "tablespoons"
        },
        {   ingredient:"Chicken Breast",
            quantity: 2,
            measurement: "lbs"
        },
        {   ingredient:"Salt",
            quantity: 1,
            measurement: "pinch"
        }
        ,
        {   ingredient:"Heavy Cream",
            quantity: 1,
            measurement: "cup"
        }
        ,
        {   ingredient:"Coconut",
            quantity: 1,
            measurement: "coconut"
        }   
    ],
    cost: "$$$",
    tags: ["Fancy", "Curry", "Dinner"],
    image: 'coconut-curry.jpg',
    rating: 0
  },
  {
    id: 11,
    name: "Jamaican Curry Chicken",
    description: "A jamaican twist on a classic curry dish",
    totalTime: {time: 50, units: "mins"},
    ingredients:[
        {   ingredient:"Curry Powder",
            quantity: 3,
            measurement: "tablespoons"
        },
        {   ingredient:"Chicken Breast",
            quantity: 2,
            measurement: "lbs"
        },
        {   ingredient:"Salt",
            quantity: 1,
            measurement: "pinch"
        }
        ,
        {   ingredient:"Heavy Cream",
            quantity: 1,
            measurement: "cup"
        },
        {   ingredient:"White Rice",
            quantity: 2,
            measurement: "cups"
        },
        {   ingredient:"Potatoes",
        quantity: 1,
        measurement: "potatoe",
        rating: 0
    }
        
    ],
    cost: "$$$",
    tags: ["Fany", "Curry", "Dinner", "Chicken"],
    image: 'jamaican-curry.jpg'
  },
  {
    id: 12,
    name: "Noodle Stir Fry",
    description: "Stir Fry with lo mein noodles and mixed veggies",
    totalTime: {time: 10, units: "mins"},
    ingredients:[
        {   ingredient:"Lo Mein Noodles",
            quantity: 1,
            measurement: "bag"
        },
        {   ingredient:"Broccoli",
            quantity: 1,
            measurement: "head"
        },
        {   ingredient:"Salt",
            quantity: 1,
            measurement: "pinch"
        },
        {   ingredient:"Cabbage",
            quantity: 1,
            measurement: "head"
        },
        {   ingredient:"soy Sauce",
            quantity: 1,
            measurement: "cup"
        } 
    ],
    cost: "$",
    tags: ["Under 30 minutes","Vegetarian", "Dinner", "Asian"],
    image: 'stir-fry.jpg',
    rating: 0
  },
  {
    id: 13,
    name: "Chicken Katsu",
    description: "Delicious hawaian fried chicken",
    totalTime: {time: 25, units: "mins"},
    ingredients:[
        {   ingredient:"Eggs",
            quantity: 3,
            measurement: "eggs"
        },
        {   ingredient:"Chicken Breast",
            quantity: 2,
            measurement: "lbs"
        },
        {   ingredient:"Bread Crumbs",
            quantity: 1,
            measurement: "cup"
        }, 
        {   ingredient:"Olive Oil",
            quantity: 1,
            measurement: "tablespoon"
        } 
    ],
    cost: "$$",
    tags: ["Under 30 minutes", "Dinner", "Chicken", "Asian"],
    image: 'chicken-katsu.jpg',
    rating: 0
  },
  {
    id: 14,
    name: "Mango Lime Cheesecake",
    description: "Delicious tart mango lime cheescake",
    totalTime: {time: 120, units: "mins"},
    ingredients:[
        {   ingredient:"Eggs",
            quantity: 3,
            measurement: "eggs"
        },
        {   ingredient:"Cream Cheese",
            quantity: 2,
            measurement: "blocks"
        },
        {   ingredient:"Mango",
            quantity: 1,
            measurement: "mango"
        }
        ,
        {   ingredient:"Lime",
            quantity: 1,
            measurement: "lime"
        },
        {   ingredient:"Butter",
            quantity: 4,
            measurement: "tablespoons"
        },
        {   ingredient:"Grahm Crackers",
            quantity: 1,
            measurement: "package"
        }  
          
    ],
    cost: "$$$",
    tags: ["Fancy", "Dessert"],
    image: 'cheesecake.jpg',
    rating: 0
  },
  {
    id: 15,
    name: "Chocolate Chip Cookies",
    description: "Everyones favorite cookies",
    totalTime: {time: 25, units: "mins"},
    ingredients:[
        {   ingredient:"Eggs",
            quantity: 1,
            measurement: "eggs"
        },
        {   ingredient:"Sugar",
            quantity: 2,
            measurement: "cups"
        },
        {   ingredient:"Brown Sugar",
            quantity: 2,
            measurement: "cups"
        },
        {   ingredient:"Vanilla",
            quantity: 1,
            measurement: "teaspoon"
        },
        {   ingredient:"Chocolate Chips",
            quantity: 1,
            measurement: "cup"
        },
        {   ingredient:"Salt",
            quantity: 1,
            measurement: "pinch"
        } 
    ],
    cost: "$",
    tags: ["Under 30 minutes", "Dessert"],
    image: 'chocolate-chip.jpg',
    rating: 0
  },
  {
    id: 16,
    name: "French Toast",
    description: "Americas favorite breakfast food",
    totalTime: {time: 10, units: "mins"},
    ingredients:[
        {   ingredient:"Eggs",
            quantity: 3,
            measurement: "eggs"
        },
        {   ingredient:"Bread",
            quantity: 4,
            measurement: "slices"
        },
        {   ingredient:"Bread",
            quantity: 4,
            measurement: "slices"
        },
        {   ingredient:"Cinnamon",
            quantity: 4,
            measurement: "sticks"
        },
        {   ingredient:"Powdered Sugar",
            quantity: 1,
            measurement: "spoonful"
        }
    ],
    cost: "$",
    tags: ["Under 30 minutes", "Breakfast"],
    image: 'french-toast.PNG',
    rating: 0
  },
  {
    id: 17,
    name: "Club Sandwich",
    description: "Bacon Turkey and tomatoe",
    totalTime: {time: 10, units: "mins"},
    ingredients:[
        {   ingredient:"Bacon",
            quantity: 3,
            measurement: "slices"
        },
        {   ingredient:"Deli Turkey",
            quantity: 4,
            measurement: "slices"
        },
        {   ingredient:"Tomatoe",
            quantity: 1,
            measurement: "Tomatoe"
        } 
    ],
    cost: "$$",
    tags: ["Under 30 minutes","Sandwich", "Lunch"],
    image: 'club-sandwich.jpg',
    rating: 0
  },
  {
    id: 18,
    name: "Apple Pie",
    description: "A classic dessert",
    totalTime: {time: 40, units: "mins"},
    ingredients:[
        {   ingredient:"Eggs",
            quantity: 3,
            measurement: "eggs"
        },
        {   ingredient:"Pie Crust",
            quantity: 1,
            measurement: "crust"
        },
        {   ingredient:"Apples",
            quantity: 3,
            measurement: "apples"
        },
        {   ingredient:"Whipped Cream",
            quantity: 1,
            measurement: "dollup"
        }  
    ],
    cost: "$$",
    tags: ["Fancy", "Dessert"],
    image: 'apple-pie.jpg',
    rating: 0
  },
  {
    id: 19,
    name: "Yo Po Mian",
    description: "Chinese Noodles with sauce",
    totalTime: {time: 50, units: "mins"},
    ingredients:[
        {   ingredient:"Eggs",
            quantity: 3,
            measurement: "eggs"
        },
        {   ingredient:"Egg Noodles",
            quantity: 2,
            measurement: "cups"
        },
        {   ingredient:"Soy Sauce",
            quantity: 1,
            measurement: "cup"
        },
        {   ingredient:"Soy Sauce",
            quantity: 1,
            measurement: "cup"
        } 
    ],
    cost: "$$",
    tags: ["Asian","Pasta", "Dinner"],
    image: 'asian-noodles.jpg',
    rating: 0
  },
  {
    id: 20,
    name: "Tacos",
    description: "American style tacos",
    totalTime: {time: 20, units: "mins"},
    ingredients:[
        {   ingredient:"Flour Tortillas",
            quantity: 4,
            measurement: "tortillas"
        },
        {   ingredient:"Shredded Cheddar Cheese",
            quantity: 2,
            measurement: "cups"
        },
        {   ingredient:"Ground Beef",
            quantity: 1,
            measurement: "lbs"
        } ,
        {   ingredient:"Taco Seasoning",
            quantity: 1,
            measurement: "tablespoon"
        } 
    ],
    cost: "$",
    tags: ["Under 30 minutes","Budget", "Mexican", "Dinner"],
    image: 'tacos.jpg',
    rating: 0
  },
  {
    id: 21,
    name: "Cheese Pizza",
    description: "Classic Cheese Pizza. Very Good",
    totalTime: {time: 40, units: "mins"},
    ingredients:[
        {   ingredient:"Dough",
            quantity: 3,
            measurement: "lbs"
        },
        {   ingredient:"Shredded Mozzerella Cheese",
            quantity: 2,
            measurement: "cups"
        },
        {   ingredient:"Tomato Sauce",
            quantity: 1,
            measurement: "can"
        } 
    ],
    cost: "$",
    tags: ["Budget", "Dinner"],
    image: 'cheese-pizza.PNG',
    rating: 0
  },
]

export default mock;