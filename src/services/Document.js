const Document = {
    setInnerText: (query, text) => {
        document.querySelector(query).innerText = text;
    },

    setStyle: (query, property, value) => {
        document.querySelector(query).style[property] = value;
    }
};

export default Document;