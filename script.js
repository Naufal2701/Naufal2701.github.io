const darkToggle = document.getElementById('dark-toggle');
const html = document.documentElement;

darkToggle.addEventListener('click', () => {
    if (html.getAttribute('data-theme') === 'dark') {
        html.removeAttribute('data-theme');
        darkToggle.innerText = "Dark Mode";
    } else {
        html.setAttribute('data-theme', 'dark');
        darkToggle.innerText = "Light Mode";
    }
});


const cards = document.querySelectorAll('.card');

cards.forEach(card => {
    card.addEventListener('click', () => {
        cards.forEach(c => c.classList.remove('active'));
        card.classList.add('active');
        card.style.transform = "scale(1.05)";
        setTimeout(() => {
            card.style.transform = "scale(1)";
        }, 200);
    });
});

/* ===== ===== */

function calcBurger() {
    const q = parseInt(document.getElementById("burgerQty").value);
    const r = document.getElementById("burgerResult");

    if (q <= 0 || isNaN(q)) return;

    r.innerHTML = `
        <ul>
            <li>${q} burger buns</li>
            <li>${150 * q} g beef patty</li>
            <li>${q} cheese slices</li>
            <li>${q} lettuce portions</li>
            <li>${q} sauce portions</li>
        </ul>
    `;
}




function calcSpaghetti() {
    const q = parseInt(document.getElementById("spaghettiQty").value);
    const r = document.getElementById("spaghettiResult");

    if (q <= 0 || isNaN(q)) return;

    r.innerHTML = `
        <ul>
            <li>${200 * q} g spaghetti pasta</li>
            <li>${150 * q} g minced beef</li>
            <li>${q} cup tomato sauce</li>
            <li>${q} clove garlic (chopped)</li>
            <li>${q} tbsp olive oil</li>
            <li>Salt & pepper</li>
        </ul>
    `;
}

function calcFish() {
    const q = parseInt(document.getElementById("fishQty").value);
    const r = document.getElementById("fishResult");

    if (q <= 0 || isNaN(q)) return;

    r.innerHTML = `
        <ul>
            <li>${2 * q} white fish fillets</li>
            <li>${2 * q} large potatoes</li>
            <li>${q} cup flour</li>
            <li>${q} cup cold water</li>
            <li>Salt & pepper</li>
            <li>Oil for frying</li>
        </ul>
    `;
}

const recipeGrid = document.getElementById('recipeGrid');

const allRecipes = [
    { name: "Caesar Salad", img: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500" },
    { name: "Cheese Pizza", img: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=500" },
    { name: "Beef Steak", img: "https://images.unsplash.com/photo-1544025162-d76694265947?w=500" },
    { name: "Creamy Pasta", img: "https://images.unsplash.com/photo-1473093226795-af9932fe5856?w=500" },
    { name: "Fish n Chips", img: "https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?w=500" },
    { name: "Chicken Wings", img: "https://images.unsplash.com/photo-1567620832903-9fc6debc209f?w=500" },
    { name: "Mushroom Soup", img: "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=500" },
    { name: "Classic Burger", img: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500" },
    { name: "Lasagna", img: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?w=500" },
    { name: "BBQ Ribs", img: "https://images.unsplash.com/photo-1544077960-604201fe74bc?w=500" },
    { name: "Hot Dog", img: "https://images.unsplash.com/photo-1541214113241-21578d2d9b62?w=500" },
    { name: "Spaghetti Carbonara", img: "https://images.unsplash.com/photo-1612874742237-6526221588e3?w=500" },
    { name: "French Fries", img: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=500" },
    { name: "Garlic Bread", img: "https://images.unsplash.com/photo-1573140247632-f8fd74997d5c?w=500" },
    { name: "Club Sandwich", img: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=500" },
    { name: "Roast Chicken", img: "https://images.unsplash.com/photo-1598103442097-8b74394b95c6?w=500" },
    { name: "Tacos", img: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=500" },
    { name: "Pancakes", img: "https://images.unsplash.com/photo-1528207776546-365bb710ee93?w=500" },
    { name: "Apple Pie", img: "https://images.unsplash.com/photo-1568571780765-9276ac8b75a2?w=500" },
    { name: "Beef Stroganoff", img: "https://images.unsplash.com/photo-1534939561126-835b62ba323b?w=500" }
];

function renderRecipes(limit) {
    recipeGrid.innerHTML = ""; 
    allRecipes.forEach((recipe, index) => {
        const card = document.createElement('div');
        card.className = `recipe-card-modern ${index >= limit ? 'hidden' : ''}`;
        
        card.innerHTML = `
            <img src="${recipe.img}" alt="${recipe.name}">
            <div class="card-overlay">
                <div class="blur-content">
                    <h3>${recipe.name}</h3>
                    <button class="btn-detail" onclick="location.href='#'">Full Recipe</button>
                </div>
            </div>
        `;
        recipeGrid.appendChild(card);
    });
}


renderRecipes(4);

const showMoreBtn = document.getElementById('showMoreBtn');
showMoreBtn.addEventListener('click', () => {
    renderRecipes(20); // Tampilkan semua
    showMoreBtn.style.display = "none"; // Sembunyikan tombol
});