import { useEffect, useState } from 'react';
import AppSidebar from '../components/AppSidebar';
import api from '../api';

function Home() {
  const [list, setList] = useState([]);

  useEffect(() => {
    api.get('/api/shipper/carrier')
      .then(({ data }) => {
        setList(data.data)
      })
      .catch(console.log)
  }, []);

  return (
    <>
      <AppSidebar />
        <div className="md:pl-64">
          <div className="max-w-4xl mx-auto flex flex-col md:px-8 xl:px-0">
            <div className="sticky top-0 z-10 flex-shrink-0 h-16 bg-white border-b border-gray-200 flex">
              <div className="flex-1 flex justify-between px-4 md:px-0">
                <div className="flex-1 flex">
                  <form className="w-full flex md:ml-0" action="#" method="GET">
                    <label htmlFor="search-field" className="sr-only">Search</label>
                    <div className="relative w-full text-gray-400 focus-within:text-gray-600">
                      <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center">
                        <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                          <path d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" />
                        </svg>
                      </div>
                      <input id="search-field" className="block h-full w-full border-transparent py-2 pl-8 pr-3 text-gray-900 placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-0 focus:border-transparent sm:text-sm" placeholder="Search" type="search" name="search" />
                    </div>
                  </form>
                </div>
              </div>
            </div>

            <main className="flex-1">
              <div className="py-6">
                <div className="px-4 sm:px-6 md:px-0">
                  <h1 className="text-2xl font-semibold text-gray-900">Driver List</h1>
                </div>
                <div className="px-4 sm:px-6 md:px-0">
                  <div className="py-4">
                    { !list.length ? <p>Su anda hicbir kayit yok</p> : '' }
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
    </>
  );
}

export default Home;
