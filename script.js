async function getChefBirthday(id) {

    // chiamata per ottenere la ricetta specifica
    const recipes = await fetch(`https://dummyjson.com/recipes/${id}`);
    const dataRecipes = await recipes.json();

    // mostro in console la ricetta
    console.log("Nome ricetta:", dataRecipes.name);


    // chiamata per ottenere l'id dell'user 
    const userId = await fetch(`https://dummyjson.com/users/${dataRecipes.userId}`);
    const user = await userId.json();

    // mostro in console il nome dello chef
    console.log("Nome Chef:", user.firstName, user.lastName);


    // ritorno la data di nascita dell'user (Output prncipale)
    return user.birthDate;


}

(async () => {
    try {

        const birthday = await getChefBirthday(4);
        console.log("Data di nascita dello Chef:", birthday);

    } catch (error) {

        console.error("Errore:", error.message);
    }
})();

