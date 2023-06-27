class contactHTMLTags {
    htmlTag = "div";
    htmlElement;

    constructor() {
        this.createHTMLTag(this.htmlTag);
    }

    createHTMLTag(htmlTag) {
        this.htmlElement = document.createElement(htmlTag);
    }

    addIntoHTML(attribute) {
        let htmlElement = document.querySelector(/*html*/ `[${attribute}]`);
        htmlElement.appendChild(this.htmlElement);
    }
}
