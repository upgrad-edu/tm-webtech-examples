
const dishList = document.getElementById('dishList');
const search = document.getElementById('searchbar');
let meallist = [];
let list = [];

const fetchDishes = async () => {
        const result = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s');
        list = await result.json();
        meallist = list.meals;
        printStuffs(meallist);
};
const printStuffs = (dishes) => {
    const dishString = dishes.map((dishes) => {
            return `
            <li class="dishes">
                <h3>${dishes.strMeal}</h3>
                <p>${dishes.strArea}</p>
                <img src="${dishes.strMealThumb}"></img>
            </li>
        `;
        })
        .join('');
        dishList.innerHTML = dishString;
};
search.addEventListener('keyup', (all) => {
    const areaSearch = all.target.value.toLowerCase();
    const filteredishes = meallist.filter((dishes) => {
        return (dishes.strArea.toLowerCase().includes(areaSearch));
    });
    printStuffs(filteredishes);
});

fetchDishes();