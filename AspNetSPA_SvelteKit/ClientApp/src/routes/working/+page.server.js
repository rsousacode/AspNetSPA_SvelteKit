import {error} from "@sveltejs/kit";


/** @type {import('./$types').PageLoad} */

export async function load({fetch, params}) {
  // Check if slug params exist
  return await fetch("http://localhost:5125/api/WeatherForecast")
    .then(data => data.json())
    .then(data => {
    return {
      forecast: data
    };
  }).catch(() => {
    throw error(404, 'Not found');
  })
}