const exportedMethods = {
    checkString(str) {
        if(!str) {
            throw new Error(`${str} is not a string.`);
        }
        if(typeof str !== "string") {
            throw new Error(`${str} is not a string.`);
        }
        str = str.trim();
        if(str.length === 0) {
            throw new Error(`${str} is empty.`);
        }

        return str;
    }
};

export default exportedMethods;