'use strict';

// import all required modules
import logger from '../utils/logger.js';
import accounts from './accounts.js';
import userStore from '../models/user-store.js';

// create gallery object
const gallery = {

  // index method - responsible for creating and rendering the view
  index(request, response) {

    // display confirmation message in log
    logger.info('gallery rendering');

    // retrieve logged-in user and their picture from user store
    const loggedInUser = accounts.getCurrentUser(request);
    const userPicture = userStore.getUserByEmail(loggedInUser.email).picture;

    // create view data object (contains data to be sent to the view e.g. page title)
    const viewData = {
      title: 'Gallery',
      picture: userPicture,
    };

    // render the gallery view and pass through the data
    response.render('gallery', viewData);
  },


};

// export the gallery module
export default gallery;

