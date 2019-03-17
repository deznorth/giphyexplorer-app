# giphyexplorer-app
A project to practice the use of REST APIs using the GIPHY API

## Development Environment
In order to safeguard GIPHY API's API key I've designed my development environment to use a local file (svars.json) that contains the api
key. This file will not be pushed to the repository or exposed in any way.
If you require access to this file please contact me through email (contact <at> davidr <dot> info) and I'll explain how to recreate
the svars.json file with your own api key.

### Re-creation of the repository
I decided to re-create the repository because I wanted to completely hide the API key for the GIPHY API, now I've created a wrapper API.
That way the API key remains in my backend as an environment variable and is not exposed.

## Progress of Development
### Road to v1.0.0
- [x] Adobe XD Design
- [x] Essential Components (Header { Navigation, SearchBar })
- [x] 404 Route
  - [x] Setup Route
  - [x] Basic Structure and Styling
- [x] Home Page
  - [x] Setup route
  - [x] Create Basic 'GifDisplay' component
  - [x] Display dummy data
  - [x] Display data from the API
- [x] Search Results Route
  - [x] Setup Route
  - [x] Get query from the search bar
  - [x] Redirect to the /results route
  - [x] Get data from the API
  - [x] Display the gifs
- [ ] About Page
  - [x] Setup Route
  - [ ] Write the content of the page
    - [ ] Tech Stack
    - [ ] Description
    - [ ] Process
  - [ ] Structure and Style the page
- [ ] Random Page
  - [x] Setup Route
  - [ ] Get data from the API
  - [ ] Display the data

### Projected Features
- [ ] Details Route