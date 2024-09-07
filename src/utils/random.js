export const getRandomItem = (array) => {
    const arrayLen = array.length;
    const randomIndex = Math.floor(Math.random() * arrayLen);
    return array[randomIndex];
};
