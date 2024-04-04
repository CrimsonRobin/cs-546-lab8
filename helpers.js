const exportedMethods = {
    checkString(str) {
        if(!str) {
            throw new Error(`Given input contains no text.`);
        }
        if(typeof str !== "string") {
            throw new Error(`Given input contains no text.`);
        }
        str = str.trim();
        if(str.length === 0) {
            throw new Error(`Given input contains no text.`);
        }

        return str;
    }
};

export default exportedMethods;