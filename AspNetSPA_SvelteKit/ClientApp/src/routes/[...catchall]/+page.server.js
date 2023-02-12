/** @type {import('./$types').PageLoad} */


export async function load({fetch, params}) {
  // Check if slug params exist
  console.log(params)
  return await fetch("/api/WeatherForecast")
    .then(data => data.json())
    .then(data => {
      return {
        forecast: data
      };
    }).catch(() => {
      throw error(404, 'Not found');
    })
}