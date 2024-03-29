import { IFilm, IPeople, IPlanet, ISpecie, IStarship, ISwapiListResult, ISwapiType, IVehicle } from '@/interfaces/swapi';
import { cache } from 'react';

/*
    Helper library for fetching all the relevant swapi data
    Switched axios for nextjs' fetch for better cache management
    TODO implement type guards into all relevant fetching functions
    TODO support for wookie switch woooooo although hard to achieve because all the property keys are also in wookie so I'd have a bad feeling about that
 */

const request = async (url: string): Promise<ISwapiListResult | null> => {
  return fetch(url, { cache: 'force-cache' })
    .then(async (response) => {
      const data = await response.json();
      if (data) {
        return data as ISwapiListResult;
      }
      return null;
    })
    .catch((e) => {
      console.log(`Error while fetching: ${url}`, e);
      return null;
    });
};

//fetch every entity recursive as long as there is another page to fetch
const fetchAll = async (
  url: string,
  current: ISwapiType[],
): Promise<ISwapiType[]> => {
  const singleResponse = await request(url);
  current = [...current, ...(singleResponse?.results ?? [])];
  if (singleResponse?.next) {
    return fetchAll(singleResponse.next, current);
  }
  return current;
};

const url = (path: string) => {
  return (process.env.SWAPI_ENDPOINT ?? '') + path;
};

export const fetchFilms = cache(async (): Promise<IFilm[]> => {
  return fetchAll(url('films'), []).then((response) => {
    return (response ? response : []) as IFilm[];
  });
});

export const fetchPeople = cache(async (): Promise<IPeople[]> => {
  return fetchAll(url('people'), []).then((response) => {
    return (response ? response : []) as IPeople[];
  });
});

export const fetchPlanets = cache(async (): Promise<IPlanet[]> => {
  return fetchAll(url('planets'), []).then((response) => {
    return (response ? response : []) as IPlanet[];
  });
});

export const fetchSpecies = cache(async (): Promise<ISpecie[]> => {
  return fetchAll(url('species'), []).then((response) => {
    return (response ? response : []) as ISpecie[];
  });
});

export const fetchStarships = cache(async (): Promise<IStarship[]> => {
  return fetchAll(url('starships'), []).then((response) => {
    return (response ? response : []) as IStarship[];
  });
});

export const fetchVehicles = cache(async (): Promise<IVehicle[]> => {
  return fetchAll(url('vehicles'), []).then((response) => {
    return (response ? response : []) as IVehicle[];
  });
});
