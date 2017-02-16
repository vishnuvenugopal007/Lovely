CREATE TABLE Reminders(
id            serial,
reminders     varchar,
)

INSERT INTO Reminders (reminder)
VALUES,
('You the truth, don\'t let them use your light if they ain\'t right then who is they to say who you\'re like. Just be you, do what you do and don\'t let them take your light.'),
('<https://www.youtube.com/watch?v=0j8frgmdvgc | This> exists, so things can\'t be that bad...right? :wink:'),
('How many different things had to happen for you to be here right now? Seems like a lot more than just happy coincidences :wink:'),
('Watch <https://www.youtube.com/watch?v=y6Sxv-sUYtM | this> and let me know if you need anything else :slightly_smiling_face:'),
('Check <https://www.youtube.com/watch?v=09R8_2nJtjg | this> out :wink:'),
('You are dope AF. No one else knows you like you do, so if they can\'t see the wave, it\'s their own loss. :v:'),
('Get up and <https://www.youtube.com/watch?v=C_9HNEyLa4U | groove> for a minute. It might help your mood :wink:'),
('See if you can get back to work after you get down to <https://www.youtube.com/watch?v=Nh5WSnh8s4Q | this>'),
('You are loved and you are love. :heart: No one can take that away from you, no matter what they say or do. Find your way through by looking inside you, I promise it gets better if you focus on working through all the pain that these lames put inside you.');

CREATE TABLE Advice(
  id          serial,
  advice      varchar,
)

INSERT INTO Advice (advice)
VALUES,
('Will this matter six months from now?'),
('Forgive yourself. You didn\'t know then what you know now. You can keep killing yourself or move on now. Life is best lived in the present. Learn from the past, prepare for the future and live in the now :pray:'),
('There\'s a lot that can break your focus, but ask yourself: what would Beyoncé do?'),
('Situations are rarely as extreme and absolute as they seem. Perhaps this is more grey than black and white?'),
('Stay low and build. Let your success be your revenge.'),
('Is there another way to look at the situation?'),
('Are you being fair and compassionate with yourself, the way a close friend would be?'),
('How would a third party see your current situation? Would they be critical or kind? Caring or harsh?'),
('Believe in yourself. That\'s where it starts. Trust in yourself. You\'re going to be great. :pray:'),

CREATE TABLE Inspiration(
  id           serial,
  inspiration  varchar,
)

INSERT INTO Inspiration (inspiration)
VALUES,
('')

CREATE TABLE FoodRecipes(
  id          serial,
  meal        varchar,
  recipe      varchar,
)

INSERT INTO FoodRecipes (meal, recipe)
VALUES,
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
('Snack', '< http://www.foodnetwork.com/recipes/tyler-florence/herbed-garlic-bread-recipe | Herbed Garlic Bread>'),
('Lunch/Dinner', '<http://www.foodnetwork.com/recipes/giada-de-laurentiis/pasta-ponza-recipe | Pasta Ponza>'),
('Lunch/Dinner', '<http://www.foodnetwork.com/recipes/food-network-kitchen/penne-with-baby-mozzarella-tomatoes-and-herbs-recipe | Penne with Baby Mozzarella, Tomatoes and Herbs>'),
('Lunch/Dinner', '<http://www.foodnetwork.com/recipes/ree-drummond/penne-alla-betsy-recipe | Penne Alla Betsy>'),
('Lunch/Dinner', '<http://www.foodnetwork.com/recipes/ree-drummond/penne-alla-vodka-recipe | Penne Alla Vodka>'),

CREATE TABLE FoodTips(
  id          serial,
  tip         varchar,
)

INSERT INTO FoodTips (tip)
VALUES,
('To make a great sandwich, spread your spread, sauce or dressing from corner to corner on the bread. People rush this step and just do a swoosh down the middle. Every bite should be flavorful. Now that\'s a sandwich!'),
('If you keep it simple and buy ingredients at farmers\' markets, the food can pretty much take care of itself. Do as little as possible to the food; consider leaving out an ingredient and relying on instinct'),
('For best results when you\'re baking, leave butter and eggs at room temperature overnight.'),
('Homemade vinaigrettes have fewer ingredients and taste better than bottled ones. No need to whisk them: Just put all the ingredients in a sealed container and shake.'),
('For an easy weeknight meal, save and freeze leftover sauces from previous meals in ice cube trays. The cubes can be reheated in a sauté pan when you need a quick sauce.'),
('Recipes are only a guideline, not the Bible. Feel comfortable replacing ingredients with similar ingredients that you like. If you like oregano but not thyme, use oregano.'),
('Anytime you are using raw onions in a salsa and you are not going to eat that salsa in the next 20 minutes or so, be sure to rinse the diced onions under cold running water first, then blot dry. This will rid them of sulfurous gas that can ruin fresh salsa. It\'s really important in guacamole, too.'),
('Do not use oil in the water when boiling pasta: It will keep the sauce from sticking to the cooked pasta.'),
('For safety, put a wine cork on the tip of a knife before putting the knife in a drawer.'),
('Plunge vegetables in ice water after blanching (boiling) them so they maintain a bright color.'),
('After you drain pasta, while it\'s still hot, grate some fresh Parmesan on top before tossing it with your sauce. This way, the sauce has something to stick to.'),
('Buy fruit at its peak at a farmers\' market and freeze it in an airtight container so you can enjoy it year round.'),
('Season all of your food from start to finish. Seasoning in stages brings the most out of your ingredients and gives you the most flavor.'),
('Don\'t go to the store with a shopping list. Go to the store, see what ingredients look good and then make your list.'),
('For better-tasting asparagus, cure the stalks: Peel them, roll in equal parts sugar and salt, and let them sit for 10 minutes, then rinse off and prepare as desired.'),
('Serving cake:
1. Serve at room temperature.
2. Don\'t "pre-slice" cake more than 20 minutes in advance. It dries out too quickly.
3. You don\'t have to eat the fondant. It\'s really pretty, but if you don\'t want a mouthful of pure sugar, peel it off.'),
('To optimize the juice you get from a lemon or lime, roll it hard under your palm for a minute before juicing. (Or — on the down low — microwave it for 10 to 15 seconds.)'),
('For perfect vegetable soup, start with diced carrots, onions, peppers and tomatoes sautéed in oil or butter before you add any liquid. This brings out the taste and caramelizes the sugars.'),
('Shoes off, music on, favorite beverage in hand — enjoy your time in the kitchen.'),
('Don\'t be too hard on yourself — mistakes make some of the best recipes! Keep it simple.'),
('Prolong the lifespan of greens by wrapping them loosely in a damp paper towel and placing in a resealable plastic bag. That local arugula will last about four days longer.'),
('Want to know if your oil is hot enough for frying? Here’s a tip: Stick a wooden skewer or spoon in the oil. If bubbles form around the wood, then you are good to go.'),
('When a recipe calls for zest, instead of grating it into a separate container or onto parchment paper, hold the zester over the mixing bowl and zest directly onto the butter or cream. The aromatic citrus oils that are sprayed into the bowl will give the dessert a zesty finish.'),
('Cook more often. Don’t study; just cook.'),
('Whenever you cook pasta, remove some of the pasta-cooking water (about 1/4 or 1/3 cup) just before draining. When you add the sauce of your choice to the pasta, add a little of the cooking liquid. This helps sauce to amalgamate; the starch in the water adds body and a kind of creaminess.'),
(''),
(''),
(''),
(''),
(''),
