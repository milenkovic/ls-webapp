import superagent from 'superagent';

export async function getPlaces() {
  return await executeRequest(`http://localhost:3333/api/places`);
}

export async function getPlaceById(id: string) {
  return await executeRequest(`http://localhost:3333/api/places/${id}`);
}

async function executeRequest(url, method = 'get') {
  let data = null;
  let errorCode = null;
  try {
    const res = await superagent[method](url);
    data = res.body.data;
  } catch (e) {
    errorCode = e.status || 404;
  }
  return {
    data,
    errorCode,
  };
}
