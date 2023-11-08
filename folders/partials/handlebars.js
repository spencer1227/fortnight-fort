const source = `
<!DOCTYPE html>
<html>
<head>
    <title>{{title}}</title>
</head>
<body>
    <h1>{{heading}}</h1>
    <ul>
        {{#each items}}
            <li>{{this}}</li>
        {{/each}}
    </ul>
</body>
</html>
`;

const template = Handlebars.compile(source);

const data = {
    title: "My Page",
    heading: "Welcome to My Page",
    items: ["Item 1", "Item 2", "Item 3"]
};

const html = template(data);