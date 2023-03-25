const API_URL = 'http://localhost:1234/api/available-restaurants';

async function fetchAvailableRestaurants() {
  const response = await fetch(API_URL);
  const data = await response.json();
  return data;
}

export { fetchAvailableRestaurants };
