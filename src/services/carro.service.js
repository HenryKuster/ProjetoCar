const express = require("express");
const router = express.Router();
const Carro = require("../models/carro.model");

async function criarCarro(marca, modelo, ano, valor) {
  return await Carro.create({ marca, modelo, ano, valor });
}

async function buscarCarro() {
  return await Carro.findAll();
}

async function buscarCarroId(id) {
  return await Carro.findByPk(id);
}

async function atualizarCarro(id, data) {
  const carro = await buscarCarroId(id);
  if (!carro) {
    throw new Error("Carro não encontrado!!!");
  }
  return await carro.update(data);
}

async function deletarCarro(id) {
  const carro = await buscarCarroId(id);
  if (!carro) {
    throw new Error("Carro não encontrado!!!");
  }
  return await carro.destroy();
}
module.exports = {
  criarCarro,
  buscarCarro,
  buscarCarroId,
  atualizarCarro,
  deletarCarro,
};
