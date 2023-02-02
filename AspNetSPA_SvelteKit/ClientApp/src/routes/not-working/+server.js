/** @type {import('./$types').PageLoad} */
export async function GET(event) {
  const data = await event.fetch("/api/WeatherForecast")
    .then(data => data.json())
    .then(data => {
      console.log(data);
      return {
        forecast: data
      };
    }).catch((e) => {
      console.log(e);
    })
  return new Response(
    `
  <?xml version="1.0" encoding="UTF-8"?>
  <rss version="2.0"
     xmlns:content="http://purl.org/rss/1.0/modules/content/"
     xmlns:wfw="http://wellformedweb.org/CommentAPI/"
     xmlns:dc="http://purl.org/dc/elements/1.1/"
     xmlns:atom="http://www.w3.org/2005/Atom"
     xmlns:sy="http://purl.org/rss/1.0/modules/syndication/"
     xmlns:slash="http://purl.org/rss/1.0/modules/slash/"
  >
    <dummyData>${JSON.stringify(data)}</dummyData>
    <channel>
        <language>en-US</language>
        <sy:updatePeriod>
            hourly
        </sy:updatePeriod>
        <sy:updateFrequency>
            1
        </sy:updateFrequency>
        <image>
            <title>Code Liturgy</title>
            <width>32</width>
            <height>32</height>
        </image>
    </channel>
</rss>

`.trim(),
    {
      headers: {
        'Content-Type': 'application/xml'
      }
    }
  );
}