let stream = require('getstream');

let client = stream.connect('34fxjm7smgpz', '3723jwhkr4ace22qnzhr2g34hfahyjse7k3ngsgww843e982dnjrt3ayrt8szjtm');

let feed = client.feed('timeline', 'weathered-fog-0');
feed.addActivity({
    'actor': client.user('weathered-fog-0').ref(),
    'verb': 'post',
    'object': 'I love this picture',
    'attachments': {
        'og': {
            'title': 'Crozzon di Brenta photo by Lorenzo Spoleti',
            'description': 'Download this photo in Italy by Lorenzo Spoleti',
            'url': 'https://unsplash.com/photos/yxKHOTkAins',
            'images': [
                {
                    'image': 'https://goo.gl/7dePYs'
                }
            ]
        }
    }
})