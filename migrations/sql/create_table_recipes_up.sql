CREATE TABLE Recipes(
  id          serial,
  meal        varchar,
  recipe      varchar
);

INSERT INTO Recipes (meal, recipe)
VALUES
('Lunch/Dinner', '<http://www.foodnetwork.com/recipes/giada-de-laurentiis/chicken-parmesan-recipe | Chicken Parmesan>'),
('Breakfast', '<http://www.foodnetwork.com/recipes/food-network-kitchen/chocolate-banana-pancake-breakfast-casserole | Chocolate Banana Pancake Casserole>'),
('Breakfast', '<http://www.foodnetwork.com/recipes/hotcakes-with-delicious-blueberry-compote-recipe | Better than Blueberry Pancakes>'),
('Breakfast', '<http://www.foodnetwork.com/recipes/food-network-kitchen/classic-french-toast | French Toast>'),
('Lunch/Dinner', '<http://www.foodnetwork.com/recipes/giada-de-laurentiis/fettuccine-alfredo-recipe | Fettuccine Alfredo>'),
('Lunch/Dinner', '<http://www.foodnetwork.com/recipes/ina-garten/pasta-with-pecorino-and-pepper-recipe | Pasta with Pecorino and Pepper>'),
('Lunch/Dinner', '<http://www.foodnetwork.com/recipes/tyler-florence/angel-hair-pasta-with-pesto-recipe | Angel Hair Pasta with Pesto>'),
('Breakfast', '<http://www.foodnetwork.com/recipes/food-network-kitchen/broccoli-cheddar-breakfast-pizza | Broccoli Cheddar Breakfast Pizza>'),
('Lunch/Dinner', '<http://www.foodnetwork.com/recipes/food-network-kitchen/linguine-with-white-clam-sauce-recipe | Linguine with White Clam Sauce>'),
('Lunch/Dinner', '<http://www.foodnetwork.com/recipes/food-network-kitchen/eggplant-parmesan-hero-recipe | Eggplant Parmesan Hero>'),
('Snack', '<http://www.foodnetwork.com/recipes/tyler-florence/herbed-garlic-bread-recipe | Herbed Garlic Bread>'),
('Lunch/Dinner', '<http://www.foodnetwork.com/recipes/giada-de-laurentiis/pasta-ponza-recipe | Pasta Ponza>'),
('Lunch/Dinner', '<http://www.foodnetwork.com/recipes/food-network-kitchen/penne-with-baby-mozzarella-tomatoes-and-herbs-recipe | Penne with Baby Mozzarella, Tomatoes and Herbs>'),
('Lunch/Dinner', '<http://www.foodnetwork.com/recipes/ree-drummond/penne-alla-betsy-recipe | Penne Alla Betsy>'),
('Lunch/Dinner', '<http://www.foodnetwork.com/recipes/ree-drummond/penne-alla-vodka-recipe | Penne Alla Vodka>');
