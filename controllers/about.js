'use strict';

// import all required modules
import accounts from './accounts.js';
import logger from '../utils/logger.js';
import developerStore from '../models/developer-store.js';
import commentStore from '../models/comment-store.js';
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
      picture: loggedInUser.picture,
      comments: commentStore.getAllComments(),
    };
    response.render('about', viewData);
  } else {
    response.redirect('/');
  }
},

addComment(request, response) {
  const loggedInUser = accounts.getCurrentUser(request);
  const comment = {
    fullname: loggedInUser.firstName + ' ' + loggedInUser.lastName,
    message: request.body.message,
    date: new Date(),
  };
  commentStore.addComment(comment);
  response.redirect('/about');
},


};

// export the dashboard module
export default about;