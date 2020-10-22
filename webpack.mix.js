const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel applications. By default, we are compiling the CSS
 | file for the application as well as bundling up all the JS files.
 |
 */
/*
mix.js('resources/js/app.js', 'public/js')
    .postCss('resources/css/app.css', 'public/css', [
        
    ]);*/
mix.webpackConfig({
    entry: {
        main: ['./resources/sass/app.scss']
    },
    externals: {
        'Config': JSON.stringify(process.env.NODE_ENV === 'production' ? {
            serverUrl: "http://baseproject.local",
            apiUrl: "http://baseproject.local/api"
          } : {
            serverUrl: "http://baseproject.local",
            apiUrl: "http://baseproject.local/api"
          })
      }
});

mix.sass('resources/sass/app.scss', 'public/css');

mix.react('resources/js/App.jsx', 'public/js')
.react('resources/js/main.jsx', 'public/js')

.react('resources/js/routes/Home.jsx', 'public/js/routes')
.react('resources/js/routes/Section1.jsx', 'public/js/routes')
.react('resources/js/routes/Section2.jsx', 'public/js/routes')
.react('resources/js/routes/Login.jsx', 'public/js/routes')
.react('resources/js/routes/Admin.jsx', 'public/js/routes')
.react('resources/js/routes/Register.jsx', 'public/js/routes')

//Auth
.react('resources/js/helpers/auth-header.jsx', 'public/js/helpers')
.react('resources/js/helpers/handle-response.jsx', 'public/js/helpers')
.react('resources/js/services/authentication.service.jsx', 'public/js/services')
//Register
.react('resources/js/services/registration.service.jsx', 'public/js/services')

.react('resources/js/components/Navbar.jsx', 'public/js/components')
.react('resources/js/components/ProtectedRoute.jsx', 'public/js/components');

mix.copyDirectory('resources/img', 'public/img');