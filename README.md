# Demo app using Foursquare

It will display detailed info from various venues.
No need to get your own API keys. I've included for local demo purposes only in the code. Normally I would put these keys in environment variables.
Assumpitions made about Foursquare api
 - only shows venues with address and city
 - uses the /search endpoint 

## Tech used
- React-strap (Bootstrap) CSS framework for styling
- React
- Axios
- Foursquare places API
- Google maps API
- Docker / Docker compose
- travis CI
- Jest for unit and intregation testing
- Deployed to Netlify


### How to run locally
 `npm install`

 You can either install docker and docker-compose then run `docker-compose up`.

 Run `npm start` if you have node installed locally.

 browse to `localhost:3000`


### Tests 
run `npm test` to have jest start and watch the tests.

### Online demo
The online demo is located here.
`https://foursquare-react.netlify.com`

### Known issues
 - clicking on a header in the list also resizes the Google maps view
 - when doing a search the map doesn't update to the new area searched
