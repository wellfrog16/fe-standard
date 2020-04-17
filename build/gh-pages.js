const ghpages = require('gh-pages');

ghpages.publish('dist', {
    message: 'Updates'
});