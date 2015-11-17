Webpack-dev-server roda dentro de um iframe então pra evitar isso e rodar como aplicação mesmo tem que usar --inline

Watch mode is not working properl so it should need to use --watch-poll

--hot automatically reload the page when some file changes

The webpack file by default resolve files '' and '.js' when requiring something.
In case I want to use any other type I should rewrite the resolve like this below.
resolve: {
	extensions: ['', '.js', '.es6'] // I must add the default types and the new ones I want to resolve
}

-d minify the code as well as the css

Extract-text-webpack-plugin is used to create separete css file where the parameter of the functions is the name of the file in the plugins property

webpack-dev-middleware is used to configure better the configuration of the app in development mode

express, ejs and morgan are use to run webpack through an express server with the purpose to use webpack-dev-middleware

webpack.ProvidePlugin is used to create global variables that can be use in any module without import or require

