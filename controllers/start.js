'use strict';

// import all required modules
import accounts from './accounts.js';

import logger from '../utils/logger.js';
import swimmingTeamStore from '../models/swimmingTeam-store.js';

// create start object
const start = {

  // index method - responsible for creating and rendering the view
  index(request, response) {

    const loggedInUser = accounts.getCurrentUser(request);
    logger.info('start rendering');

    if(loggedInUser){

      const swimmingTeams = swimmingTeamStore.getAllSwimmingTeams();
      let numSwimmingTeams = swimmingTeams.length;
      let numSwimmers = 0;
      for (let item of swimmingTeams) {
        numSwimmers += item.swimmers.length;
      }

      const viewData = {
        title: 'Welcome to the Swimming App!',
        totalSwimmingTeams: numSwimmingTeams,
        totalSwimmers: numSwimmers,
        fullname: loggedInUser.firstName + ' ' + loggedInUser.lastName,
        picture: loggedInUser.picture
      };

      response.render('start', viewData);
    }
    else response.redirect('/');
  },

  
};


// export the start module
export default start;
