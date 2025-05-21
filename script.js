async function getChefBirthday(id) {

    // chiamata per ottenere la ricetta specifica
    const recipes = await fetch(`https://dummyjson.com/recipes/${id}`);
    const dataRecipes = await recipes.json();
    console.log(dataRecipes);

    // chiamata per ottenere l'id dell'user 
    const userId = await fetch(`https://dummyjson.com/users/${dataRecipes.userId}`);
    const user = await userId.json();

    // ritorno la data di nascita dell'user
    return user.birthDate;


}


getChefBirthday(1)
    .then(birthDate => {
        console.log("Chef's Birthday:", birthDate);
    });
