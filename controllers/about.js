'use strict';

// import all required modules
import accounts from './accounts.js';
import logger from '../utils/logger.js';
import developerStore from '../models/developer-store.js';

// create dashboard object
const about = {

  index(request, response) {
    const loggedInUser = accounts.getCurrentUser(request);
    logger.info('about rendering');
    if (loggedInUser) {
      const viewData = {
        title: 'About the Swimming App',
        developers: developerStore.getAllDevelopers(),
        fullname: loggedInUser.firstName + ' ' + loggedInUser.lastName,
        picture: loggedInUser.picture
      };
      response.render('about', viewData);
    }
    else response.redirect('/');    
  },

};

// export the dashboard module
export default about;