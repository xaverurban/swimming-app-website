"use strict";

// import all required modules
import accounts from './accounts.js';
import logger from "../utils/logger.js";
import swimmingTeamStore from "../models/swimmingTeam-store.js";
import { v4 as uuidv4 } from "uuid";

const swimmingTeam = {
  index(request, response) {
    const swimmingTeamId = request.params.id;
    logger.debug("Swimming Team id = " + swimmingTeamId);
    const viewData = {
      title: "SwimmingTeam",
      swimmingTeam: swimmingTeamStore.getSwimmingTeam(swimmingTeamId),
    };
    response.render("swimmingTeam", viewData);
  },
  deleteSwimmer(request, response) {
    const swimmingTeamId = request.params.id;
    const swimmerId = request.params.swimmerid;
    logger.debug(
      `Deleting swimmer ${swimmerId} from Swimming Team ${swimmingTeamId}`
    );
    swimmingTeamStore.removeSwimmer(swimmingTeamId, swimmerId);
    response.redirect("/swimmingTeam/" + swimmingTeamId);
  },
  addSwimmer(request, response) {
    const swimmingTeamId = request.params.id;
    const swimmingTeam = swimmingTeamStore.getSwimmingTeam(swimmingTeamId);
    const newSwimmer = {
      id: uuidv4(),
      name: request.body.name,
      event: request.body.event,
      gold_medals: request.body.gold_medals,
    };

    swimmingTeamStore.addSwimmer(swimmingTeamId, newSwimmer);
    response.redirect("/swimmingTeam/" + swimmingTeamId);
  },
};

export default swimmingTeam;
