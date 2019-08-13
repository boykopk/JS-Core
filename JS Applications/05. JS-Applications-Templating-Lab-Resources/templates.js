(function(scope) {
const templateStringsCache = {};

    const getTemplateString = async (name) => {
        if(!templateStringsCache[name]) {
            const path = `./templates/${name}-template.hbs`;
            const response = await fetch(path);
            const templateString = response.text();
            templateStringsCache[name] = templateString;
        }
        return templateStringsCache[name];
    };

    const getTemplateFunc = async (name) => {
        const templateString = await getTemplateString(name);
        return Handlebars.compile(templateString);
    };

    const registerPartial = async (partialName, templateName) => {
        const templateString = await getTemplateString(templateName);
        Handlebars.registerPartial(partialName, templateString);
    };

    scope.templates = { getTemplateFunc, registerPartial };
}(window));