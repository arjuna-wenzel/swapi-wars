# swapi-wars

My very own integration of the famous swapi endpoint.

# what is it

It is just a simple visual representation of all the entities that the https://swapi.dev endpoint provides in form of a
webpage.

# how does it work

It is a TypeScript based Next.js application that uses server side rendering combined with Next.js' fetch 
(so we can use its caching implementation) to connect to the
endpoint itself and tanstack tables to display said data.

# how can I start it

To start it locally you have to install all the npm packages and then just run it either with `npm run dev` or if you want
the production version first call `npm run build` followed by `npm run start`.  
The page then should be available under http://localhost:3000.

Keep in mind that building the app fetches all necessary data to display the static sites from the api already.

# caveats

Cold start performance can be slow, the endpoint seems to be overloaded from time to time.  
The swapi endpoint doesn't seem to have any internal cache.  
*Also*: the documentation didn't state that the list data will be paginated, so I decided on fetching the data server
side once.  
Now I needed to fetch the list data recursively so performance took another hit in develop.  

I'd love to display the nested object arrays as real data instead of just a count integer, either as ssr modal on click in
table or as a ssr in table component, but time is not on my side.
The Quick & Dirty way would be to just fetch all entity lists that the respective parent entity hosts as children to map everything directly, 
but that'd be a huge performance hit.
