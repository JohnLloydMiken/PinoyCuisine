import {recipes} from './recipes.js';
import {renderInstruction, renderIngredients} from './ui.js';

const inputRecipe = document.getElementById('recipeInput');
const btnSearch = document.getElementById("btnSearch");
const instructionDiv = document.getElementById('instructionDiv');
const ingredientDiv = document.getElementById('ingredientDiv');
const recipeName = document.querySelector(".recipeName");
const recipeImage = document.getElementById("recipeImage");
const profileSection = document.getElementById('profileSection');
const RecipeDetailSection = document.getElementById('RecipeDetailSection');
const profileBtn = document.getElementById('profileBtn');
const leftBtn = document.getElementById('leftBtn');
const rightBtn = document.getElementById('rightBtn');
const searchValues = document.getElementById('searchValues');
const review1 = document.getElementById('review1');
const review2 = document.getElementById('review2');




leftBtn.addEventListener('click', function(){ 
alert("left clicked");
review1.style.transform = "translateX(-100%)";
review2.style.transform = "translateX(-100%)";

});

rightBtn.addEventListener('click', function(){ 
  alert("right clicked");
  review1.style.transform = "translateX(0)";
review2.style.transform = "translateX(0)";
  });

inputRecipe.addEventListener('input', function(){

let input = inputRecipe.value

searchValues.innerHTML='';

if(input.length > 0){
  const recipesArray = recipes.sort((a, b) => a.name.localeCompare(b.name));
  const filteredRecipes = recipesArray.filter((recipe) => recipe.name.includes(input));
  
  if(filteredRecipes.length > 0) {
      filteredRecipes.forEach((recipe) => {
          searchValues.appendChild(displayRecipeList(recipe.name));
      });
  } else {
      const noRecipeFound = document.createElement('p');
      noRecipeFound.textContent = "No recipe found";
      noRecipeFound.className = "text-white text-xl"; // Tailwind CSS classes for styling
      searchValues.appendChild(noRecipeFound);
  }
} else {
  // Handle the case when input is empty, if needed
}


});

btnSearch.addEventListener('click', function(){
  console.log("clicked");

    verifyInput(inputRecipe.value);
    
   
   
});

profileBtn.addEventListener("click", function(){
  

  if(profileSection.style.display === 'none'){
    profileSection.style.display = 'block';
    profileSection.style.position ="fixed";
 
  }else{
    profileSection.style.display = 'none';
  }
});

function displayRecipeList(recipeName){
      const recipeContianer = document.createElement('ul');
      recipeContianer.className = "w-11/12  text-left "
      const recipeList = document.createElement('li');
      recipeList.textContent = recipeName;
      recipeList.className = "text-4xl text-beige p-2 m-2 rounded-lg"
      recipeContianer.appendChild(recipeList)
   
     return recipeContianer

}

function verifyInput(inputRecipe){

    recipes.forEach((recipe) =>{
    if(inputRecipe === recipe.name){
        console.log("Recipe found:", recipe.name);
        RecipeDetailSection.classList.add('flex');
        RecipeDetailSection.classList.remove('hidden');
        recipeName.textContent = `${recipe.name} Recipe`
        getInstruction(recipe);
        getIngredients(recipe);
        renderImage(recipe.image)
    } else{
       // alert(`${inputRecipe.value} is not in the menu`)
      // console.log("none");
    }
    });
}

function getInstruction(recipe){
  instructionDiv.innerHTML = "";
  const title = document.createElement("h2");
  title.className = "font-bold text-4xl font-serif"
  title.textContent = "Instruction"
  instructionDiv.appendChild(title);
  const intruct = renderInstruction(recipe);
  instructionDiv.appendChild(intruct);

}
function getIngredients(recipe){
  ingredientDiv.innerHTML = "";
  const title = document.createElement("h2");
  title.className = "font-bold text-4xl font-serif relative left-4 top-1"
  title.textContent = "Ingredients"
  ingredientDiv.appendChild(title);
  const intruct = renderIngredients(recipe);
  ingredientDiv.appendChild(intruct);

}
function renderImage(recipe){
  recipeImage.src = recipe;
}


