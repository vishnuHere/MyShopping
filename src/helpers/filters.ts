export const addToFavourites = (data: any) => {
    localStorage.setItem("favourites", JSON.stringify(data));
};
