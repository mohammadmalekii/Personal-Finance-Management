export const timeLeft = (targetTime) => {
    const countDownDate = new Date(targetTime).getTime();
    const now = new Date().getTime();
    const distance = countDownDate - now;
    const days = Math.floor(distance / (1000 * 60 * 60 * 24) + 1);
    return days + " روز باقی‌مانده";
};

export const generatePpercent = (totalNumber, currentNumber) => {
    let a = Math.floor((currentNumber / totalNumber) * 100);
    let b = a < 0 ? a = 0 : a > 100 ? (a = 100) : a;
    return b;
};

export const generateProgress = (totalNumber, currentNumber) => {
    let a = Math.floor((currentNumber / totalNumber) * 100) - 100;
    let b = a > 0 ? (a = 0) : a;
    return b;
};

export const formatAmount = (value) => {
    if (value !== "0") {

        const removeNonNumeric = value.toString().replace(/^0|[^0-9]+/g, "");
        return removeNonNumeric
            .toString()
            .replace(/\B(?=(\d{3})+(?!\d))/g, ",");

    } else {
        return value.toString().replace(/[0]/g, "");

    }


};