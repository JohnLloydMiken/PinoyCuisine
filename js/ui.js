export function renderInstruction(recipe){
    const newList = document.createElement('ol');
    newList.className = "list-decimal relative left-12  text-2xl leading-10";
    recipe.instructions.forEach((element) => {
             const instruction = document.createElement('li');
             instruction.innerHTML  = element;
           
             newList.appendChild(instruction);
    });

    return newList;
   
}

export function renderIngredients(recipe){
    const newList = document.createElement('ul');
    newList.className = "text-2xl relative left-14 leading-10";

    recipe.ingredients.forEach((element) => {
             const instruction = document.createElement('li');
             instruction.innerHTML  = element;
           
             newList.appendChild(instruction);
    });

    return newList;
   
}
