'use strict';

import logger from '../utils/logger.js';
import JsonStore from './json-store.js';

import cloudinary from 'cloudinary';

import { createRequire } from "module";
const require = createRequire(import.meta.url);

try {
  const env = require("../.data/.env.json");
  cloudinary.config(env.cloudinary);
}
catch(e) {
  logger.info('You must provide a Cloudinary credentials file - see README.md');
  process.exit(1);
}


const swimmingTeamStore = {

  store: new JsonStore('./models/swimmingTeam-store.json', { swimmingTeamCollection: [] }),
  collection: 'swimmingTeamCollection',

  getAllSwimmingTeams() {
    return this.store.findAll(this.collection);
  },

  getSwimmingTeam(id) {
    return this.store.findOneBy(this.collection, (collection => collection.id === id));
  },

  removeSwimmer(id, swimmerId) {
    const arrayName = "swimmers";
    this.store.removeItem(this.collection, id, arrayName, swimmerId);
  },

  removeSwimmingTeam(id) {
    const swimmingTeam = this.getSwimmingTeam(id);
    this.store.removeCollection(this.collection, swimmingTeam);
  },

  removeAllSwimmingTeams() {
    this.store.removeAll(this.collection);
  },

 async addSwimmingTeam(swimmingTeam, response) {
function uploader(){
return new Promise(function(resolve, reject) {
cloudinary.uploader.upload(swimmingTeam.picture.tempFilePath,function(result,err){
if(err){console.log(err);}
resolve(result);
});
});
}
let result = await uploader();
logger.info('cloudinary result', result);
swimmingTeam.picture = result.url;

this.store.addCollection(this.collection, swimmingTeam);
response();
},

  addSwimmer(id, swimmer) {
    const arrayName = "swimmers";
    this.store.addItem(this.collection, id, arrayName, swimmer);
  },
    getUserSwimmingTeams(userid) {
    return this.store.findBy(this.collection, (swimmingTeam => swimmingTeam.userid === userid));
  },


};

export default swimmingTeamStore;
