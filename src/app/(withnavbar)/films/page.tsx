import { fetchFilms } from '@/helper/swapi';
import FilmTable from '@/components/tables/filmTable';

export const revalidate = 3600;

export default async function Page() {
    const films = await fetchFilms();
    return <FilmTable films={films} />;
}
