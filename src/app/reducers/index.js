import { LOAD_PRODUCT } from '../actions/action-types';
import { LOAD_GRAPH } from '../actions/action-types';
import axios from "axios";
import { combineReducers } from 'redux';


const initialState = {
  products: [{ "name": "iPhone", "id": 1, "picSrc": "https://store.storeimages.cdn-apple.com/4974/as-images.apple.com/is/image/AppleInc/aos/published/images/i/ph/iphone/x/iphone-x-select-2017?wid=189&hei=376&fmt=png-alpha&.v=1504378258086", "shortDescription": "Iphone är en bra telefon, jag skulle rekommendera den väldigt mycket, jag skulle inte rekommendera samsung den suger iphone är bäst"},
  { "name": "Macbook", "id": 2, "picSrc": "https://cdn.shopify.com/s/files/1/0259/1735/products/macbook_air_template_2048x.png?v=1511882855", "shortDescription": "macbook är också väldigt bra, kommer från samma märke som iphone. På loggan ser man ett äpple som är tagen en liten tugga från den är god."},
  { "name": "Headphones", "id": 3, "picSrc": "https://www.beoplay.com/~/media/relation_spots/products/h4/1000x1000/h4_steelblue_1000x1000.png", "shortDescription": "headphones är väldigt bra tycker jag, då kan man lyssan på musik, min favoritartist är The Ark dom har väldigt bra låtar"},
  { "name": "TV", "id": 4, "picSrc": "http://gif.tv/tv.png", "shortDescription": "En rimlig uppfinning, mitt favoritprogram är Hannah montana, det kan man kolla på på den här tv. Förövrigt gillar jag inte reklam, det får man också på den här tvn"},
  { "name": "PC","id": 5, "picSrc": "https://ictatsgc.files.wordpress.com/2008/04/thinkcentre-a61-desktop-pc.jpg", "shortDescription": "PC är inte en jättebra uppfinning, jag skulle föredra macbook och det är för att jag gillar deras logga mer än PC. Jag hatar också windows"}
],
  graph:[
  {"month": 'Nov', "price": 4000},
  {"month": 'Dec', "price": 4000},
  {"month": 'Jan', "price": 5030},
  {"month": 'Feb', "price": 2780},
  {"month": 'Mar', "price": 1890},
  {"month": 'Apr', "price": 50},
  {"month": 'Maj', "price": 3490}
  ],
  selectedProduct: null,
  retailers: [
    {"name":"Elgiganten", "id":1, "picSrc": "http://morbycentrum.se/w/wp-content/uploads/2014/02/Elgiganten_Phone_House_Blue.png"},
    {"name": "MediaMarkt", "id": 2, "picSrc": "https://static04.bonial.se/butiker/media-markt/profile-46810.v6.png"},
    {"name": "Elgruvan", "id": 3, "picSrc": "https://www.elgruvan.se/img/elgruvan-1507624499.jpg"}
  ]
};

// TODO: sätta ett action, typ LOAD_PRODUCT när vi laddar sidan,
// att den lägger till alla produkter som hämtas från vår backend
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_PRODUCT:
      return {
        products: state.products,
        selectedProduct: state.products.filter(el =>
        el.id == action.id
        //returnerar endast det product-objektet som är samma id som actionet (retunerar en lista)
      )[0]};
      case LOAD_GRAPH:
        return {
          graph: state.graph
        }

    default:
      return state;
  }
};

export default rootReducer;
