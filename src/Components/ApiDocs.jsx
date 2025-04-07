import { useState } from 'react';

// Updated API list - more focus on visual, gaming, social, pop culture
const apiList = [
  {
    id: 'giphy',
    name: 'Giphy API',
    link: 'https://developers.giphy.com/',
    jsCode: `// Requires an API Key from Giphy Developers
const apiKey = 'YOUR_GIPHY_API_KEY';
fetch(\`https://api.giphy.com/v1/gifs/trending?api_key=\${apiKey}&limit=1\`)
  .then(response => response.json())
  .then(data => console.log(data));`,
    pythonCode: `import requests
# Requires an API Key from Giphy Developers
api_key = 'YOUR_GIPHY_API_KEY'
params = {'api_key': api_key, 'limit': 1}
response = requests.get('https://api.giphy.com/v1/gifs/trending', params=params)
print(response.json())`,
    outputJson: `{"data": [{"type": "gif", "id": "...", "url": "...", "images": {...}}]}`,
    docsUrl: 'https://developers.giphy.com/docs/api/',
    description: 'Spice up your projects with GIFs! The Giphy API lets you search and integrate trending or specific GIFs. Perfect for making apps more visually engaging and fun.',
  },
  {
    id: 'tmdb',
    name: 'The Movie Database (TMDb)',
    link: 'https://www.themoviedb.org/documentation/api',
    jsCode: `// Requires an API Key from TMDb
const apiKey = 'YOUR_TMDB_API_KEY';
fetch(\`https://api.themoviedb.org/3/movie/popular?api_key=\${apiKey}&language=en-US&page=1\`)
  .then(response => response.json())
  .then(data => console.log(data));`,
    pythonCode: `import requests
# Requires an API Key from TMDb
api_key = 'YOUR_TMDB_API_KEY'
params = {'api_key': api_key, 'language': 'en-US', 'page': 1}
response = requests.get('https://api.themoviedb.org/3/movie/popular', params=params)
print(response.json())`,
    outputJson: `{"page": 1, "results": [{"id": 123, "title": "Popular Movie Title", "overview": "..."}]}`,
    docsUrl: 'https://developer.themoviedb.org/docs',
    description: 'Access a massive database of movies, TV shows, and actors. Great for building recommendation apps, movie info sites, or anything related to pop culture media.',
  },
  {
    id: 'spotify',
    name: 'Spotify API',
    link: 'https://developer.spotify.com/documentation/web-api/',
    jsCode: `// Requires OAuth Authentication - More complex setup
// This example requires an authenticated access token
const accessToken = 'YOUR_SPOTIFY_ACCESS_TOKEN';
fetch('https://api.spotify.com/v1/me/playlists', {
  headers: { 'Authorization': \`Bearer \${accessToken}\` }
})
.then(response => response.json())
.then(data => console.log(data));`,
    pythonCode: `import requests
# Requires OAuth Authentication - More complex setup
# This example requires an authenticated access token
access_token = 'YOUR_SPOTIFY_ACCESS_TOKEN'
headers = {'Authorization': \`Bearer \${access_token}\`}
response = requests.get('https://api.spotify.com/v1/me/playlists', headers=headers)
print(response.json())`,
    outputJson: `{"items": [{"id": "playlist_id", "name": "My Awesome Playlist", "owner": {...}}]}`,
    docsUrl: 'https://developer.spotify.com/documentation/web-api',
    description: 'Integrate music! Access data about tracks, artists, albums, and user playlists. Note: Requires user authentication (OAuth) for most endpoints, making it a great way to learn auth flows.',
  },
  {
    id: 'twitch',
    name: 'Twitch API',
    link: 'https://dev.twitch.tv/docs/api/',
    jsCode: `// Requires Client ID and OAuth Token
const clientId = 'YOUR_TWITCH_CLIENT_ID';
const accessToken = 'YOUR_TWITCH_OAUTH_TOKEN';
fetch('https://api.twitch.tv/helix/streams?user_login=popular_streamer', {
  headers: {
    'Client-ID': clientId,
    'Authorization': \`Bearer \${accessToken}\`
  }
})
.then(response => response.json())
.then(data => console.log(data));`,
    pythonCode: `import requests
# Requires Client ID and OAuth Token
client_id = 'YOUR_TWITCH_CLIENT_ID'
access_token = 'YOUR_TWITCH_OAUTH_TOKEN'
headers = {
    'Client-ID': client_id,
    'Authorization': f'Bearer {access_token}'
}
params = {'user_login': 'popular_streamer'}
response = requests.get('https://api.twitch.tv/helix/streams', headers=headers, params=params)
print(response.json())`,
    outputJson: `{"data": [{"id": "stream_id", "user_name": "Popular Streamer", "game_name": "Cool Game", "viewer_count": 10000}]}`,
    docsUrl: 'https://dev.twitch.tv/docs/api/reference/',
    description: 'Tap into the world of game streaming. Get data on live streams, games, users, and more. Essential for projects related to gaming communities. Requires authentication (OAuth).',
  },
  {
    id: 'pokemon',
    name: 'Pokémon API (PokéAPI)',
    link: 'https://pokeapi.co/',
    jsCode: `fetch('https://pokeapi.co/api/v2/pokemon/pikachu')
  .then(res => res.json())
  .then(data => console.log(data));`,
    pythonCode: `import requests
response = requests.get('https://pokeapi.co/api/v2/pokemon/pikachu')
print(response.json())`,
    outputJson: `{"name": "pikachu", "abilities": [...], "sprites": {"front_default": "..."}}`,
    docsUrl: 'https://pokeapi.co/docs/v2',
    description: 'Gotta catch \'em all... data! Access info on Pokémon species, moves, abilities, and even sprites. A super popular and fun choice for creative projects, especially for gaming fans.',
  },
  {
    id: 'thecatapi',
    name: 'The Cat API',
    link: 'https://thecatapi.com/',
    jsCode: `fetch('https://api.thecatapi.com/v1/images/search')
  .then(res => res.json())
  .then(data => console.log(data));`,
    pythonCode: `import requests
response = requests.get('https://api.thecatapi.com/v1/images/search')
print(response.json())`,
    outputJson: `[{"url": "https://cdn2.thecatapi.com/images/MTY3ODIyMQ.jpg"}]`,
    docsUrl: 'https://docs.thecatapi.com/',
    description: 'Instant cat pictures! A simple, fun way to add random cat images (and facts) to your projects. Great for learning basic API calls with visual results.',
  },
  {
    id: 'nasa-apod',
    name: 'NASA APOD',
    link: 'https://api.nasa.gov/',
    jsCode: `// Uses a Demo Key - get your own for higher limits
fetch('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
  .then(response => response.json())
  .then(data => console.log(data));`,
    pythonCode: `import requests
# Uses a Demo Key - get your own for higher limits
params = { 'api_key': 'DEMO_KEY' }
response = requests.get('https://api.nasa.gov/planetary/apod', params=params)
print(response.json())`,
    outputJson: `{"date": "2024-01-01", "explanation": "Amazing space photo explanation...", "url": "https://apod.nasa.gov/apod/image/..."} `,
    docsUrl: 'https://api.nasa.gov/',
    description: 'Get stunning daily space pictures and info directly from NASA\'s Astronomy Picture of the Day. Awesome for science-themed projects or just adding cool visuals.',
  },
  {
    id: 'openweather',
    name: 'OpenWeatherMap',
    link: 'https://openweathermap.org/api',
    jsCode: `// Requires an API Key from OpenWeatherMap
const apiKey = 'YOUR_OPENWEATHER_API_KEY';
fetch(\`https://api.openweathermap.org/data/2.5/weather?q=London&appid=\${apiKey}&units=metric\`)
  .then(response => response.json())
  .then(data => console.log(data));`,
    pythonCode: `import requests
# Requires an API Key from OpenWeatherMap
api_key = 'YOUR_OPENWEATHER_API_KEY'
params = { 'q': 'London', 'appid': api_key, 'units': 'metric' }
response = requests.get('https://api.openweathermap.org/data/2.5/weather', params=params)
print(response.json())`,
    outputJson: `{"weather": [{"description": "light rain"}], "main": {"temp": 10.5, "feels_like": 9.2}}`,
    docsUrl: 'https://openweathermap.org/current',
    description: 'Add real-time weather data to your apps. Get current conditions, forecasts, and more for locations worldwide. Useful and practical for many types of projects.',
  },
  {
    id: 'spacex',
    name: 'SpaceX API (Unofficial)',
    link: 'https://github.com/r-spacex/SpaceX-API',
    jsCode: `fetch('https://api.spacexdata.com/v4/launches/latest')
  .then(res => res.json())
  .then(data => console.log(data));`,
    pythonCode: `import requests
response = requests.get('https://api.spacexdata.com/v4/launches/latest')
print(response.json())`,
    outputJson: `{"name": "Starship Flight 4", "details": "Details about the latest launch...", "links": {"webcast": "..."}}`,
    docsUrl: 'https://github.com/r-spacex/SpaceX-API/blob/master/docs/README.md',
    description: 'Explore data about SpaceX launches, rockets, and missions. An exciting API for space enthusiasts and projects involving real-time event data. (Note: Community-maintained).',
  },
  {
    id: 'github',
    name: 'GitHub API',
    link: 'https://docs.github.com/en/rest',
    jsCode: `// Public data access, rate limited. Auth for more.
fetch('https://api.github.com/users/octocat/repos')
  .then(res => res.json())
  .then(data => console.log(data));`,
    pythonCode: `import requests
# Public data access, rate limited. Auth for more.
response = requests.get('https://api.github.com/users/octocat/repos')
print(response.json())`,
    outputJson: `[{"id": 1296269, "name": "Hello-World", "full_name": "octocat/Hello-World", "private": false}]`,
    docsUrl: 'https://docs.github.com/en/rest',
    description: 'Integrate with the world\'s largest code hosting platform. Access repositories, users, commits, issues, and more. Essential for developer tools or portfolio projects.',
  },
  {
    id: 'coingecko',
    name: 'CoinGecko API',
    link: 'https://www.coingecko.com/en/api',
    jsCode: `fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd')
  .then(res => res.json())
  .then(data => console.log(data));`,
    pythonCode: `import requests
params = {'ids': 'bitcoin', 'vs_currencies': 'usd'}
response = requests.get('https://api.coingecko.com/api/v3/simple/price', params=params)
print(response.json())`,
    outputJson: `{"bitcoin": {"usd": 65000.50}}`,
    docsUrl: 'https://www.coingecko.com/en/api/documentation',
    description: 'Get cryptocurrency data! Track prices, market cap, trading volume, and more for thousands of digital assets. Relevant for projects exploring finance, crypto, or blockchain tech.',
  },
  {
    id: 'fakestore',
    name: 'Fake Store API',
    link: 'https://fakestoreapi.com/',
    jsCode: `fetch('https://fakestoreapi.com/products?limit=5')
  .then(res => res.json())
  .then(data => console.log(data));`,
    pythonCode: `import requests
response = requests.get('https://fakestoreapi.com/products?limit=5')
print(response.json())`,
    outputJson: `[{"id":1,"title":"Fjallraven Backpack","price":109.95,"description":"..."}]`,
    docsUrl: 'https://fakestoreapi.com/docs',
    description: 'Need realistic-looking product data for an e-commerce project? This API provides fake (but well-structured) data for clothing, electronics, and jewelry. Perfect for practicing frontend skills.',
  },
  {
    id: 'jokeapi',
    name: 'JokeAPI',
    link: 'https://v2.jokeapi.dev/',
    jsCode: `fetch('https://v2.jokeapi.dev/joke/Programming?blacklistFlags=nsfw,religious,political,racist,sexist')
  .then(res => res.json())
  .then(data => console.log(data));`,
    pythonCode: `import requests
params = {'blacklistFlags': 'nsfw,religious,political,racist,sexist'}
response = requests.get('https://v2.jokeapi.dev/joke/Programming', params=params)
print(response.json())`,
    outputJson: `{"error": false, "category": "Programming", "type": "single", "joke": "Why do programmers prefer dark mode? Because light attracts bugs."}`,
    docsUrl: 'https://v2.jokeapi.dev/',
    description: 'Add some humor to your apps! Fetches jokes across various categories (including programming!). Good for simple API calls and adding a fun, dynamic element.',
  },
  {
    id: 'jikan',
    name: 'Jikan API (Anime)',
    link: 'https://jikan.moe/',
    jsCode: `fetch('https://api.jikan.moe/v4/anime/1')
  .then(res => res.json())
  .then(data => console.log(data.data));`,
    pythonCode: `import requests
response = requests.get('https://api.jikan.moe/v4/anime/1')
print(response.json().get('data'))`,
    outputJson: `{"mal_id": 1, "title": "Cowboy Bebop", "episodes": 26, "score": 8.78, "images": {"jpg": {"image_url": "..."}}}`,
    docsUrl: 'https://docs.api.jikan.moe/',
    description: 'Your source for anime and manga data, based on MyAnimeList. Search for titles, get details, rankings, and more. A must-have for anime fans building related projects.',
  },
];

function ApiDocs() {
  const [selectedApi, setSelectedApi] = useState(null);

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white">
      {/* Sidebar */}
      <div className="w-64 border-r border-gray-700 p-5 overflow-y-auto flex-shrink-0 bg-gradient-to-b from-gray-950 via-gray-900 to-gray-800">
        <h3 className="text-xl mb-4 sticky top-0 bg-gray-950 py-2 font-bold text-orange-400">Cool APIs</h3>
        {apiList.length > 0 ? (
          <ul className="list-none p-0">
            {apiList.map((api) => (
              <li
                key={api.id}
                onClick={() => setSelectedApi(api)}
                className={`mb-2 cursor-pointer p-2 rounded transition-colors duration-200 ${
                  selectedApi?.id === api.id
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                }`}
              >
                {api.name}
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-sm text-gray-500">No APIs available</p>
        )}
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6 overflow-y-auto">
        {selectedApi ? (
          <div className="space-y-10">
            <h2 className="text-4xl font-extrabold text-orange-300">{selectedApi.name}</h2>

            <p className="text-gray-300 text-lg">
              <strong className="text-white">Homepage:</strong>{' '}
              <a
                href={selectedApi.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 underline hover:text-blue-300"
              >
                {selectedApi.link}
              </a>
            </p>

            {/* Overview Section */}
            <div className="bg-gray-900 p-6 rounded-xl shadow-xl">
              <h3 className="text-2xl font-semibold mb-2">What is it?</h3>
              <p className="text-gray-300">{selectedApi.description}</p>
              <p className="text-sm text-gray-500 mt-2">
                Use this API to add cool features, practice coding, or build awesome projects!
              </p>
            </div>

            {/* Code Examples Section */}
            <div>
              <h3 className="text-2xl font-semibold mb-4">Quick Start Code</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-lg text-green-400 mb-2">JavaScript (Fetch)</h4>
                  <pre className="bg-gray-800 text-white p-4 rounded-lg text-sm shadow-inner overflow-x-auto">
                    <code>{selectedApi.jsCode}</code>
                  </pre>
                </div>
                <div>
                  <h4 className="text-lg text-yellow-400 mb-2">Python (Requests)</h4>
                  <pre className="bg-gray-800 text-white p-4 rounded-lg text-sm shadow-inner overflow-x-auto">
                    <code>{selectedApi.pythonCode}</code>
                  </pre>
                </div>
              </div>
            </div>

            {/* Output JSON Section */}
            <div>
              <h3 className="text-2xl font-semibold mb-2">Example Output (JSON)</h3>
              <pre className="bg-gray-800 text-white p-4 rounded-lg text-sm whitespace-pre-wrap overflow-x-auto shadow-inner">
                <code>{selectedApi.outputJson}</code>
              </pre>
            </div>

            {/* Documentation Section */}
            <div>
              <h3 className="text-2xl font-semibold mb-3">Official Documentation</h3>
              <p className="text-sm text-gray-400 mb-4">
                Note: Some sites may block iframe previews due to security settings. If you don&apos;t see anything,{' '}
                <a
                  href={selectedApi.docsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 underline"
                >
                  click here to view the full docs.
                </a>
              </p>
              <iframe
                src={selectedApi.docsUrl}
                width="100%"
                height="600px"
                title={`${selectedApi.name} Documentation`}
                frameBorder="0"
                className="rounded-lg border border-gray-700 shadow-lg"
              >
                Your browser doesn’t support iframes. Please visit{' '}
                <a href={selectedApi.docsUrl} target="_blank" rel="noopener noreferrer">
                  the documentation
                </a>.
              </iframe>
            </div>
          </div>
        ) : (
          <div className="text-center mt-32">
            <h2 className="text-4xl font-bold text-orange-300 mb-4">Welcome, Devs! 👋</h2>
            <p className="text-lg text-gray-400">Choose an API from the sidebar to see the deets & code examples.</p>
            <p className="text-md text-gray-500 mt-2">Let&apos;s build something cool!</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default ApiDocs;