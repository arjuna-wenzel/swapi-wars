# swapi-wars
My very own integration of the famous swapi endpoint.

# what is it
It is just a simple visual representation of all the entities that the https://swapi.dev endpoint provides in form of a webpage.

# how does it work
It is a TypeScript based NextJS application that uses server side rendering combined with axios to connect to the endpoint itself and tanstack tables to display said data.

# how can I start it
To start it locally you have install all the npm packages and then just run it either with `npm run dev` or if you want the production version first call `npm run build` followed by `npm run start`.  
The page then should be available under http://localhost:3000.

# caveats
Cold start performance is slow.  
The swapi endpoint doesn't seem to have any internal cache.  
*Also*: the documentation didn't state that the list data will be paginated, so I decided on fetching the data server side once.  
Now I needed to fetch the list data recursively so performance took another hit in develop.  
With that in mind I'd rather use client side fetching with tanstack queries + paginated tables now.
