import superagent from 'superagent';

const serverUrl = process.env.SERVER_URL;

console.log(serverUrl)

export async function getPlaces() {
  return await executeRequest(`${serverUrl}api/places`);
}

export async function getPlaceById(id: string) {
  return await executeRequest(`${serverUrl}api/places/${id}`);
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
