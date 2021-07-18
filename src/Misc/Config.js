const API_BASE_URL = 'https://api.tvmaze.com';

export async function GetApiResult(queryString) {
  const response = await fetch(`${API_BASE_URL}${queryString}`).then(r =>
    r.json()
  );
  // throw new Error('opps !');

  return response;
}
