import axios from 'axios';

const data = await axios('https://api.punkapi.com/v2/beers')
    .then(res => {
        console.log(res.data);
    })

    .catch(err => err);



// console.log(data.length);

// name, description, image_url, abv, 