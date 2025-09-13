// -----------------------------
// Embedded fallback recipes
// -----------------------------
const FALLBACK_DATA = {
    recipes: [
        {
            id: 1,
            name: "Pap and Wors",
            ingredients: ["maize meal", "boerewors", "onion", "fish oil", "Salt ad Spices of your choice"],
            steps: ["Cook pap with water and salt until stiff.", "Braai or fry boerewors until cooked.", "Serve the wors on top of the pap."],
            cost_per_serving: 28
        },
        {
            id: 2,
            name: "Bobotie (Budget Version)",
            ingredients: ["mince or lentils", "onion", "bread", "curry powder", "chutney or apricot jam", "eggs"],
            steps: ["Fry onion, add mince and curry powder.", "Mix in soaked bread and chutney.", "Place mixture in oven dish.", "Beat eggs, pour over top.", "Bake 30 mins at 180°C."],
            cost_per_serving: 22
        },
       
        {
            id: 4,
            name: "Samp & Beans (Umngqusho)",
            ingredients: ["samp", "sugar beans", "onion", "stock cube", "Salt and Spices of your choice"],
            steps: ["Soak samp and beans overnight.", "Boil until soft (2–3 hrs).", "Fry onion, add to samp and beans.", "Season with stock and salt."],
            cost_per_serving: 12
        },

        {
            id: 6,
            name: "Pap and Chicken",
            ingredients: ["maize meal", "chicken pieces(braai pack)", "onion", "tomato", "Chicken stock cube", "Salt and spices of your choice"],
            steps: ["Cook pap with water and salt until stiff.", "Fry chicken pieces until browned.", "Add onion, tomato and stock cube, simmer until chicken is cooked.", "Serve with pap."],
            cost_per_serving: 25
        },
        {
            id: 7,
            name: "Boerewors Rolls",
            ingredients: ["boerewors", "hot dog rolls", "onion", "tomato sauce", "fish oil", "Salt and pepper and other spices of your choice"],
            steps: ["Braai or fry boerewors until cooked.", "Fry sliced onion until caramelized.", "Place boerewors in rolls.", "Top with fried onion and tomato sauce."],
            cost_per_serving: 30
        },
        {
            id: 8,
            name: "Mielie Pap",
            ingredients: ["maize meal", "Salt "],
            steps: ["Bring water and salt to a boil.", "Stir in maize meal slowly to prevent lumps.", "Simmer on low heat, covered, until cooked and stiff."],
            cost_per_serving: 5
        },

        {
            id: 11,
            name: "Curry and Rice",
            ingredients: ["chicken or vegetable curry mix", "onion", "rice", "Curry powder", "Oil", "Salt and/or spices of your choice"],
            steps: ["Cook rice according to package directions.", "Fry onion, add curry powder and meat/vegetables.", "Simmer until cooked.", "Serve curry over rice."],
            cost_per_serving: 20
        },
        {
            id: 12,
            name: "Morogo",
            ingredients: ["bunch morogo (wild spinach)", "onion", "tomato", "fish oil", "Salt and pepper and/or spice of your choice"],
            steps: ["Wash and chop the morogo leaves.", "Fry onion and tomato until soft.", "Add the morogo and cook until wilted and tender.", "Season to taste."],
            cost_per_serving: 10
        },
        {
            id: 13,
            name: "Braai Wors & Salad",
            ingredients: ["1 pack boerewors", "Lettuce", "Tomato", "Cucumber", "Salad dressing", "Braai spice"],
            steps: ["Rub boerewors with braai spice.", "Grill over hot coals or fry until cooked.", "Chop vegetables and toss into a salad.", "Serve the grilled wors with the salad."],
            cost_per_serving: 35
        },
        {
            id: 14,
            name: "Tomato Bredie",
            ingredients: ["500g lamb or beef stewing meat", "4 large tomatoes, chopped", "2 onions, chopped", "2 carrots, sliced", "2 potatoes, diced", "Salt", "Pepper"],
            steps: ["Brown meat in a pot.", "Add onions, tomatoes, and carrots; simmer until soft.", "Add potatoes and enough water to cover.", "Simmer until meat and vegetables are tender."],
            cost_per_serving: 35
        },
        {
            id: 15,
            name: "Macaroni and Cheese",
            ingredients: ["2 cups macaroni", "2 tbsp flour", "2 tbsp butter", "2 cups milk", "1 cup grated cheese", "Salt", "Pepper"],
            steps: ["Cook macaroni until al dente.", "Melt butter, stir in flour.", "Gradually add milk, stirring until thick.", "Stir in cheese until melted.", "Mix with macaroni."],
            cost_per_serving: 20
        },
        {
            id: 16,
            name: "Soya Mince Stew",
            ingredients: ["200g soya mince", "1 onion", "1 can chopped tomatoes", "Beef stock cube"],
            steps: ["Soak soya mince, drain.", "Fry onion, add tomatoes, stock cube and soya mince.", "Simmer for 15 minutes."],
            cost_per_serving: 18
        },
        {
            id: 17,
            name: "Pap with Tomato & Onion Gravy",
            ingredients: ["2 cups maize meal", "2 onions", "2 tomatoes", "1 stock cube"],
            steps: ["Cook pap as per instructions.", "Fry onions and tomatoes, add stock cube.", "Serve pap with the gravy."],
            cost_per_serving: 10
        },
        {
            id: 18,
            name: "Sosaties",
            ingredients: ["500g chicken or beef cubes", "1 onion, quartered", "Apricot jam", "Curry powder", "Skewers"],
            steps: ["Marinate meat and onion in a mixture of apricot jam and curry powder.", "Thread meat and onion onto skewers.", "Grill until cooked, turning occasionally."],
            cost_per_serving: 30
        },
        {
            id: 19,
            name: "Dombolo (Steamed Bread)",
            ingredients: ["4 cups flour", "1 tsp yeast", "1 tsp sugar", "1 tsp salt", "Warm water"],
            steps: ["Mix dry ingredients. Add warm water to form a soft dough.", "Knead lightly and place in a bowl.", "Cover and let it rise in a warm place until doubled.", "Place dough in a plastic bag or cloth and steam over a pot of stew for 30-45 minutes."],
            cost_per_serving: 12
        },
        {
            id: 20,
            name: "Pap and Spinach",
            ingredients: ["2 cups maize meal", "1 bunch fresh spinach", "1 onion, chopped", "2 tbsp oil", "Salt to taste"],
            steps: ["Cook pap with water and salt until stiff.", "Fry onion in oil, add chopped spinach and cook until wilted.", "Season with salt.", "Serve the spinach on top of the pap."],
            cost_per_serving: 10
        }
    ]
};

// -----------------------------
// DOM references & user state
// -----------------------------
const step1 = document.getElementById("step1-budget");
const step2 = document.getElementById("step2-duration");
const step3 = document.getElementById("step3-recipes");
const step4 = document.getElementById("step4-grocery");
const header = document.getElementById("appHeader");
const messageBox = document.getElementById("message-box");
const messageText = document.getElementById("message-text");
const messageCloseBtn = document.getElementById("message-close-btn");

let userBudget = 0;
let duration = "";
let selectedMeals = [];
let recipesData = [];


// Helper functions
function showSection(id) {
    document.querySelectorAll(".step-section").forEach(s => s.classList.add("hidden"));
    document.getElementById(id).classList.remove("hidden");
}

function showMessage(msg) {
    messageText.textContent = msg;
    messageBox.classList.remove("hidden");
}

function hideMessage() {
    messageBox.classList.add("hidden");
}


// Load recipes (fetch or fallback)
async function loadAllRecipes() {
    try {
      const res = await fetch("recipes.json");
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const data = await res.json();
      if (!data || !data.recipes) throw new Error("Invalid JSON structure");
      recipesData = data.recipes;
    } catch (err) {
      console.warn("Using fallback recipes.", err);
      recipesData = FALLBACK_DATA.recipes;
    }
}


// Step 2: Duration choice
function showDurationChoice() {
    showSection("step2-duration");
    step2.innerHTML = `
      <h2>How long should your meals last?</h2>
      <button onclick="confirmDuration('day')">Day</button>
      <button onclick="confirmDuration('week')">Week</button>
      <button onclick="confirmDuration('month')">Month</button>
    `;
}

function confirmDuration(choice) {
    duration = choice;
    showRecipeSelection();
}

-
// Step 3: Recipe selection
function showRecipeSelection() {
    showSection("step3-recipes");
    let html = `<h2>Select Meals for your ${duration}</h2>`;
    html += `<div class="recipe-grid">`; // grid container

    recipesData.forEach((recipe, i) => {
      html += `
        <div class="recipe-card">
          <input type="checkbox" id="meal${i}" value="${recipe.name}">
          <label for="meal${i}">
            <h3>${recipe.name}</h3>
            <p class="cost">💰 R${recipe.cost_per_serving} per serving</p>
          </label>
        </div>
      `;
    });

    html += `</div>`; // close grid
    html += `<button class="confirm-btn" onclick="confirmMeals()"> Confirm Meals</button>`;
    step3.innerHTML = html;
}

function confirmMeals() {
    const checkboxes = document.querySelectorAll("#step3-recipes input[type=checkbox]:checked");
    if (checkboxes.length === 0) {
      showMessage("Please select at least one meal");
      return;
    }
    selectedMeals = Array.from(checkboxes).map(cb => cb.value);
    showGroceryList();
}


// Step 4: Grocery list
function showGroceryList() {
    showSection("step4-grocery");
    let ingredients = [];
    recipesData.forEach(recipe => {
      if (selectedMeals.includes(recipe.name)) {
        ingredients = ingredients.concat(recipe.ingredients);
      }
    });

    let html = "<h2>🛒 Grocery List</h2><ul>";
    ingredients.forEach(item => {
      // Basic HTML escaping
      const escapedItem = String(item)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;");
      html += `<li>${escapedItem}</li>`;
    });
    html += "</ul>";

    html += `<p>Total Budget: R${userBudget}</p>`;

    //Specials Section
    html += `
      <section id="specials">
        <h2>SAVE on Specials </h2>
        <a href="https://www.shoprite.co.za/specials" target="_blank">
          <img src="shoprite logo.png" alt="Shoprite Logo" style="height: 60px; vertical-align: middle; margin-right: 10px;">
        </a>
        <a href="https://www.boxer.co.za/promotions#gsc.tab=0" target="_blank">
          <img src="boxer logo.jpg" alt="Boxer Logo" style="height: 60px; vertical-align: middle; margin-right: 10px;">
        </a>
        <a href="https://www.pnp.co.za/c/pnpbase?query=:relevance:allCategories:pnpbase:isOnPromotion:On%20Promotion" target="_blank">
          <img src="pick n pay logo.jpg" alt="Pick n Pay Logo" style="height: 60px; vertical-align: middle;">
        </a>
      </section>
    `;

    
    html += `<button class="done-btn" onclick="goHome()">Done </button>`;

    step4.innerHTML = html;
}


// Return Home
function goHome() {
    showSection("home");
}


// Start the app
async function startApp() {
    await loadAllRecipes();

    // Event listener for the "Plan My Meals" button on the first page
    document.getElementById("plan-button").addEventListener("click", () => {
        const input = parseFloat(document.getElementById("budget-input").value);
        if (!input || input <= 0) {
            showMessage("Please enter a valid budget.");
            return;
        }
        userBudget = input;
        showDurationChoice();
    });

    // Event listener for the custom message box
    messageCloseBtn.addEventListener("click", hideMessage);

    // Header click -> return home
    header.addEventListener("click", () => {
        showSection("step1-budget");
        document.getElementById("budget-input").value = '';
    });
}

// Start the application when the DOM is fully loaded
document.addEventListener("DOMContentLoaded", startApp);


