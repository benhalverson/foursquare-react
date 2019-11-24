# Demo app using Foursquare

It will display detailed info from various venues.
No need to get your own API keys. I've included for local demo purposes only in the code. Normally I would put these keys in environment variables.
Assumpitions made about Foursquare api
 - only shows venues with address, city and verified locations
 - uses the /search endpoint 
 - uses the /venues/id detailed venue 

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
 npm install
 You can either install docker and docker-compose then run `docker-compose up` or `npm start`
 browse to `localhost:3000`

### Online demo
The online demo is located here.
``