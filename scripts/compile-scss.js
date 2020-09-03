const sass = require('node-sass');
const fs = require('fs');
const path = require('path');

function compileSass() {
    const result = sass.renderSync({
        file: path.resolve(__dirname, '../src/scss/index.scss'),
        //outputStyle: 'compressed'
    });

    fs.writeFileSync(path.resolve(__dirname, '../public/index.css'), result.css, err => {
        if (err) {
            throw err;
        }
    });
}

compileSass();