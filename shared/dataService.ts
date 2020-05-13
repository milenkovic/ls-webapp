import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import fetch from 'node-fetch'
import { Place } from './interfaces/Place'

export function getPlaces() {
  return [
    {
      name: 'Le Café du Marché',
      id: 'ohGSnJtMIC5nPfYRi_HTAg'
    },
    {
      name: 'Casa Ferlin',
      id: 'GXvPAor1ifNfpF0U5PTG0w'
    }
  ];
}

export async function getPostData(id: string) {
  // console.log(fetch(`https://storage.googleapis.com/coding-session-rest-api/${id}`));
  const promise = new Promise((resolve, reject) => {
    resolve({
      name: 'Casa Ferlin',
      address: 'Stampfenbachstrasse 38, 8006 Zürich',
      oppeningHours: [
        {day: 'Monday', hours: null},
        {day: 'Tuesday - Friday', hours: ['11:30 - 15:00', '18:30 - 00:00']},
        {day: 'Saturday', hours: ['18:00 - 00:00']},
      ]
    });
  });
  return promise;
}
