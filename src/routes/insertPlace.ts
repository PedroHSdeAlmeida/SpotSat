import express from 'express';
import BD from "../database";
import place from '../model/place';

const insertPlace = express.Router();
const bd = new BD();

insertPlace.post('/', async (req, res) => {
  try {
    const { nome, ponto } = req.body;
    const lugar = new place(nome, ponto);
    await bd.insertPlace(lugar);
    res.status(201).send('Lugar inserido com sucesso!');
  } catch (error) {
    console.error('Erro ao inserir o lugar:', error);
    res.status(500).send('Erro ao inserir o lugar.');
  }
});

export default insertPlace;
