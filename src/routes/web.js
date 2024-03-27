import express from "express";
import siteController from "../controllers/siteController";

let router = express.Router();

let initWebRoutes = (app) => {
    router.get('/', siteController.getHomePage);

    return app.use('/', router);    
}

module.exports = initWebRoutes;