export const addCartInfo = (
    size: string,
    color: string,
    favourite: boolean
) => {
    const data = { size, color, favourite };
    localStorage.setItem("cartInfo", JSON.stringify(data));
};
