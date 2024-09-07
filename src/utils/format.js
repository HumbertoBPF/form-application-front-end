export const formatToAmericanDate = (date) => {
    const year = date.getFullYear();

    let month = String(1 + date.getMonth());
    month = month.length > 1 ? month : '0' + month;

    let day = String(date.getDate());
    day = day.length > 1 ? day : '0' + day;

    const formattedDate = `${year}-${month}-${day}`;

    return formattedDate;
};
