const express = require("express");
const router = express.Router();
const Aluguel = require("../models/aluguel.model");

async function criarAluguel(
  idCliente,
  idCarro,
  dataInicio,
  dataFim,
  valorFinal
) {
  return await Aluguel.create({
    idCliente,
    idCarro,
    dataInicio,
    dataFim,
    valorFinal,
  });
}

async function buscarAluguel() {
  return await Aluguel.findAll();
}

async function buscarAluguelPorId(id) {
  return await Aluguel.findByPk(id);
}

async function atualizarAluguel(id, data) {
  const aluguel = await buscarAluguelPorId(id);
  if (!aluguel) {
    throw new Error("Aluguel não encontrado");
  }
  return await aluguel.update(data);
}

async function deletarAluguel(id) {
  const aluguel = await buscarAluguelPorId(id);
  if (!aluguel) {
    throw new Error("Aluguel não encontrado");
  }
  return await aluguel.destroy();
}

module.exports = {
  criarAluguel,
  buscarAluguel,
  buscarAluguelPorId,
  atualizarAluguel,
  deletarAluguel,
};
