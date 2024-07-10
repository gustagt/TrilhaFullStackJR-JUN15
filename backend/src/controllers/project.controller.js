const projectService = require("../service/project.service");

const getAllProjects = async (req, res) => {
  try {
    const { payload, httpStatus } = await projectService.getAllProjects();

    if (!payload) {
      throw new Error("Something went wrong");
    }

    return res.status(httpStatus).json(payload);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

const postProject = async (req, res) => {
  try {
    const { title, description } = req.body;

    const { payload, httpStatus } = await projectService.postProject(
      title,
      description
    );

    if (!payload) {
      throw new Error("Something went wrong");
    }
    return res.status(httpStatus).json(payload);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

const getProjectID = async (req, res) => {
  try {
    const id = req.params.id;

    const { payload, httpStatus } = await projectService.getProjectID(id);
    if (!payload) {
      throw new Error("Something went wrong");
    }
    return res.status(httpStatus).json(payload);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

const putProjectID = async (req, res) => {
  try {
    const id = req.params.id;
    const { title, description } = req.body;

    const { payload, httpStatus } = await projectService.putProjectID(
      id,
      title,
      description
    );

    if (!payload) {
      throw new Error("Something went wrong");
    }
    return res.status(httpStatus).json(payload);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

const deleteProjectID = async (req, res) => {
  try {
    const id = req.params.id;

    const { payload, httpStatus } = await projectService.deleteProjectID(id);
    if (!payload) {
      throw new Error("Something went wrong");
    }
    return res.status(httpStatus).json(payload);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

module.exports = { getAllProjects, postProject, getProjectID, putProjectID, deleteProjectID };
