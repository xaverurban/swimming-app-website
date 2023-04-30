'use strict';

// import express and initialise router
import express from 'express';


const router = express.Router();

// import controllers
import start from './controllers/start.js';
import gallery from './controllers/gallery.js';
import dashboard from './controllers/dashboard.js';
import about from './controllers/about.js';
import swimmingTeam from './controllers/swimmingTeam.js';
import accounts from './controllers/accounts.js';



// connect routes to controllers
router.get('/start', start.index);
router.get('/dashboard', dashboard.index);
router.get('/gallery', gallery.index);
router.get('/about', about.index);
router.get('/swimmingTeam/:id', swimmingTeam.index);
router.get('/swimmingTeam/:id/deleteSwimmer/:swimmerid', swimmingTeam.deleteSwimmer);
router.get('/dashboard/deleteswimmingteam/:id', dashboard.removeSwimmingTeam);


router.post('/swimmingTeam/:id/addswimmer', swimmingTeam.addSwimmer); //may be wrong?
router.post('/dashboard/addswimmingteam', dashboard.addSwimmingTeam);
router.post("/about/add-comment", about.addComment);
// connect routes to controllers
router.get('/', accounts.index);
router.get('/login', accounts.login);
router.get('/signup', accounts.signup);
router.get('/logout', accounts.logout);
router.post('/register', accounts.register);
router.post('/authenticate', accounts.authenticate);



//router.post('/swimmingTeam/:id/updateswimmer/:swimmerid', swimmingTeam.updateSwimmer);
//router.get('/swimmingTeam/:id/deleteswimmer/:swimmerid', swimmingTeam.deleteSwimmer);




// export router module
export default router;

