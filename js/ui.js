export function renderInstruction(recipe){
    const newList = document.createElement('ol');
    newList.className = "w-40 text-justify list-decimal relative lg:left-12 left-4 lg:text-2xl text-10px lg:leading-10";
    recipe.instructions.forEach((element) => {
             const instruction = document.createElement('li');
             instruction.innerHTML  = element;
           
             newList.appendChild(instruction);
    });

    return newList;
   
}

export function renderIngredients(recipe){
    const newList = document.createElement('ul');
    newList.className = "lg:text-2xl text-8px left-4 relative lg:left-14 lg:leading-10";

    recipe.ingredients.forEach((element) => {
             const instruction = document.createElement('li');
             instruction.innerHTML  = element;
           
             newList.appendChild(instruction);
    });

    return newList;
   
}
