import {recipes} from './recipes.js';
import {renderInstruction, renderIngredients} from './ui.js';

const inputRecipe = document.getElementById('recipeInput');
const btnSearch = document.getElementById("btnSearch");
const instructionDiv = document.getElementById('instructionDiv');
const ingredientDiv = document.getElementById('ingredientDiv');
const recipeName = document.querySelector(".recipeName");
const recipeImage = document.getElementById("recipeImage");
const profileSection = document.getElementById('profileSection');
const profileBtn = document.getElementById('profileBtn');
const profilePicture = document.getElementById('profilePicture');
btnSearch.addEventListener('click', function(){
   
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


function verifyInput(inputRecipe){

    recipes.forEach((recipe) =>{
    if(inputRecipe === recipe.name){

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