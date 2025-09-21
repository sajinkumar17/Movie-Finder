import { useEffect } from 'react'
import error404 from '../assets/error404.jpg';
import { Link } from 'react-router-dom';


const PageNotFound = () => {
  useEffect(( ) => {
      document.title = `Page Not Found`;
    }, []);
  return (
    <main className='flex justify-center items-center h-screen flex-col'>
      <img src={error404} alt="404 Not Found" className='w-1/2 mb-8' />
      <Link to="/" className='text-blue-500 underline ms-5'>
        <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Go Home</button>
      </Link>
    </main>
  )
}

export default PageNotFound
