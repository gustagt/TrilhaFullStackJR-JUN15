const Project = require("../models/project.model");

const getAllProjects = async () => {
  const projects = await Project.findAll();

  return {
    httpStatus: 200,
    payload: projects,
  };
};

const postProject = async (title, description) => {
  const project = await Project.create({ title, description });

  return {
    httpStatus: 200,
    payload: project,
  };
};

const getProjectID = async (id) => {
  const project = await Project.findOne({ where: { id } });

  if (!project) {
    return {
      httpStatus: 404,
      payload: { message: "Project not found" },
    };
  }

  return {
    httpStatus: 200,
    payload: project,
  };
};

const putProjectID = async (id, title, description) => {
  const project = await Project.findOne({ where: { id } });

  if (!project) {
    return {
      httpStatus: 404,
      payload: { message: "Project not found" },
    };
  }

  project.set({
    title,
    description,
  });

  await project.save();

  return {
    httpStatus: 200,
    payload: project,
  };
};

const deleteProjectID = async (id) => {
  const project = await Project.findOne({ where: { id } });

  if (!project) {
    return {
      httpStatus: 404,
      payload: { message: "Project not found" },
    };
  }

  await project.destroy();

  return {
    httpStatus: 200,
    message: "Project successfully deleted",
    payload: project,
  };
};

module.exports = {
  getAllProjects,
  postProject,
  getProjectID,
  putProjectID,
  deleteProjectID,
};
