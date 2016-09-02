module.exports = function() {
    return {
        headerMeta: {
            title: 'React Example',
            description: '',
            meta: {
                charset: 'utf-8',
                name: {
                    viewport: 'width=device-width, initial-scale=1, maximum-scale=1 user-scalable=no'
                }
            }
        },
        textBoxes: {
            items: [],
            // In real life this would likely be coming from the database
            incrementId: 0
        }
    }
};
