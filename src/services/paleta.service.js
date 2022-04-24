const Paletas = require('../models/Paleta');

const findAllPaletasService = async () => {
  const paletas = await Paletas.find();
  return paletas;
};

const findByIdPaletasService = async (idParam) => {
  const paleta = await Paletas.findById(idParam);
  return paleta;
};

const createPaletaService = async (newPaleta) => {
  const paletaCreated = await Paletas.create(newPaleta);
  return paletaCreated;
};

const updatePaletaService = async (id, paletaEdited) => {
  const paletaUpdate = await Paletas.findByIdAndUpdate(id, paletaEdited);
  return paletaUpdate;
};

const deletePaletaService = async (id) => {
  return await Paletas.findByIdAndDelete(id);
};

module.exports = {
  findAllPaletasService,
  findByIdPaletasService,
  createPaletaService,
  updatePaletaService,
  deletePaletaService,
};
