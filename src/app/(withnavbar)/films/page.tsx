import { fetchFilms } from "@/helper/swapi";

export const revalidate = 60;

export default async function Page() {
  const films = await fetchFilms();
  return (
    <ul>
      {films.map((film) => (
        <li key={film.url}>
          {film.title} - {film.release_date}
        </li>
      ))}
    </ul>
  );
}
