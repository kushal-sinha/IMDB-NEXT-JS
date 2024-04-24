
import NavBaritem from './NavBaritem'

export default function NavBar() {
    return (
        <div className='flex dark:bg-gray-600 bg-amber-100 p-4 lg:text-lg justify-center gap-20 '>
            <NavBaritem title="Trending" param="fetchTrending" />
            <NavBaritem title="Top Rated" param="fetchTopRated" />
        </div>
    )
}
