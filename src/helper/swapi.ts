import {IFilm, IFilmParsed, IPeople, IPlanet, ISpecie, IStarship, ISwapiListResult, ISwapiType, IVehicle} from "@/interfaces/swapi";
import axios from "axios";
import {cache} from "react";

/*
    Helper library for fetching all the relevant swapi data
    TODO implement type guards into all relevant fetching functions
    TODO map relevant children entities to their respective objects, e.g. characters in films should be mapped instead of plain url strings
    TODO support for wookie switch woooooo
 */

const request = async (url: string): Promise<ISwapiListResult | null> => {
    return axios.get<ISwapiListResult>(url).then((response) => {
        if (response.data) {
            return response.data;
        }
        return null;
    }).catch((e) => {
        console.log(`Error while fetching: ${url}`, e);
        return null;
    })
}
const fetchAll = async (url: string, current: ISwapiType[]): Promise<ISwapiType[]> => {
    const singleResponse = await request(url);
    current = [...current, ...singleResponse?.results ?? []];
    if (singleResponse?.next) {
        return fetchAll(singleResponse.next, current);
    }
    return current;
}
const url = (path: string) => {
    return (process.env.SWAPI_ENDPOINT ?? '') + path;
}
export const fetchFilms = cache(async (): Promise<IFilmParsed[]> => {
    const unparsedFilms = await fetchAll(url('films'), []).then((response) => {
        return (response ? response : []) as IFilm[]
    })

    return unparsedFilms.map((unparsedFilm) => ({
        ...unparsedFilm,
        created: new Date(unparsedFilm.created),
        release_date: new Date(unparsedFilm.release_date)
    }))
})

export const fetchPeople = cache(async (): Promise<IPeople[]> => {
    return fetchAll(url('people'), []).then((response) => {
        return (response ? response : []) as IPeople[]
    })
})

export const fetchPlanets = cache(async (): Promise<IPlanet[]> => {
    return fetchAll(url('planets'), []).then((response) => {
        return (response ? response : []) as IPlanet[]
    })
})

export const fetchSpecies = cache(async (): Promise<ISpecie[]> => {
    return fetchAll(url('species'), []).then((response) => {
        return (response ? response : []) as ISpecie[]
    })
})

export const fetchStarships = cache(async (): Promise<IStarship[]> => {
    return fetchAll(url('starships'), []).then((response) => {
        return (response ? response : []) as IStarship[]
    })
})

export const fetchVehicles = cache(async (): Promise<IVehicle[]> => {
    return fetchAll(url('vehicles'), []).then((response) => {
        return (response ? response : []) as IVehicle[]
    })
})
