'use strict';

// import all required modules
import accounts from './accounts.js';
import logger from '../utils/logger.js';
import swimmingTeamStore from '../models/swimmingTeam-store.js';
import { v4 as uuidv4 } from 'uuid';


// create dashboard object
const dashboard = {

  // index method - responsible for creating and rendering the view
  index(request, response) {
    logger.info('dashboard rendering');
    const loggedInUser = accounts.getCurrentUser(request);
    if (loggedInUser) {
    const viewData = {
      title: 'Swimmer App Dashboard',
      swimmingteams: swimmingTeamStore.getUserSwimmingTeams(loggedInUser.id),
      fullname: loggedInUser.firstName + ' ' + loggedInUser.lastName,
      picture: loggedInUser.picture
    };
    logger.info('about to render' + viewData.swimmingTeams);
    response.render('dashboard', viewData);
    }
    else response.redirect('/');
  },

      removeSwimmingTeam(request, response) {
    const swimmingTeamId = request.params.id;
   
    logger.debug(`Deleting Swimmer ${swimmingTeamId} from Swimming Team ${swimmingTeamId}`);
    swimmingTeamStore.removeSwimmingTeam(swimmingTeamId);
    response.redirect('/dashboard/');
  },
addSwimmingTeam(request, response) {
  const date = new Date();
  const loggedInUser = accounts.getCurrentUser(request);
  const newSwimmingTeam = {
    id: uuidv4(),
    userid: loggedInUser.id,
    title: request.body.title,
    country: request.body.country,
    picture: request.files.picture,
    date: date,
    swimmers: [],
  };
  logger.debug('Creating a new Swimming Team' + newSwimmingTeam);
  swimmingTeamStore.addSwimmingTeam(newSwimmingTeam, function(){
    response.redirect('/dashboard');
  });
},
  
};


// export the dashboard module
export default dashboard;
