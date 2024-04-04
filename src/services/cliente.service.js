const express = require("express");
const router = express.Router();
const Cliente = require("../models/cliente.model");

async function criarCliente(nome, email, senha) {
  return await Cliente.create({ nome, email, senha });
}

async function buscarClientes() {
  return await Cliente.findAll();
}

async function buscarClientePorId(id) {
  return await Cliente.findByPk(id);
}

async function atualizarCliente(id, data) {
  const cliente = await buscarClientePorId(id);
  if (!cliente) {
    throw new Error("Cliente não encontrado!!!");
  }
  return await cliente.update(data);
}

async function deletarCliente(id) {
  const cliente = await buscarClientePorId(id);
  if (!cliente) {
    throw new Error("Cliente não encontrado!!!");
  }
  return await cliente.destroy();
}

module.exports = {
  criarCliente,
  buscarClientes,
  buscarClientePorId,
  atualizarCliente,
  deletarCliente,
};
