const generateRandomOrderNumber = (): string => {
    return Math.floor(Math.random() * 10000000000000).toString();
};

export default generateRandomOrderNumber;