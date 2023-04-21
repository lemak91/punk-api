import axios from 'axios';

const beers = [];

(async function () {
  axios('https://api.punkapi.com/v2/beers?per_page=10')
    .then(({ data }) => {
      for (const e of data) {
        beers.push({
          name: e.name,
          description: e.description.slice(0, e.description.indexOf('.') + 1),
          abv: e.abv,
          image: e.image_url,
        });
      }
    })
    .catch(err => err);
}());




export default beers;
