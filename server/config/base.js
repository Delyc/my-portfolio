

export const swaggeroptions = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "Delyce portfolio",
            version: "1.0.0",
            description: "the docs",

        },
        servers: [
            {
                url: "",
                name: "server"
            },
        {
            url: "",
            name: "my-portfolio"
        }
        ]
    },
    apis: [
        "routes/*.js"
    ]
}
