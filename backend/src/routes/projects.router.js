const express = require("express");
const projectController = require("../controllers/project.controller");

const projectsRouter = express.Router();

projectsRouter.get("/", projectController.getAllProjects);
projectsRouter.post("/", projectController.postProject);

projectsRouter.get("/:id", projectController.getProjectID)
projectsRouter.put("/:id", projectController.putProjectID)
projectsRouter.delete("/:id", projectController.deleteProjectID)

module.exports = projectsRouter;
