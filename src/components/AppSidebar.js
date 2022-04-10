import { Routes, Route, Link, useNavigate } from 'react-router-dom';


export default function AppSidebar() {
  const navigate = useNavigate();

  const onSignOut = () => {
    console.log('click')
    localStorage.removeItem('token');
    navigate('/');
  }

  return (
    <div>
      <div className="hidden md:flex md:w-64 md:flex-col md:fixed md:inset-y-0">
        <div className="border-r border-gray-200 pt-5 flex flex-col flex-grow bg-white overflow-y-auto">
          <div className="flex-shrink-0 px-4 flex items-center">
            <img className="h-8 w-auto" src="https://tailwindui.com/img/logos/workflow-logo-indigo-600-mark-gray-800-text.svg" alt="Workflow" />
          </div>
          <div className="flex-grow mt-5 flex flex-col">
            <nav className="flex-1 px-2 pb-4 space-y-1">
              <Link to="/home" className="text-gray-900 group rounded-md py-2 px-2 flex items-center text-sm font-medium">
                <svg className="text-gray-500 mr-3 flex-shrink-0 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
                Home
              </Link>

              <Link to="/create-driver" className="text-gray-600 hover:bg-gray-50 hover:text-gray-900 group rounded-md py-2 px-2 flex items-center text-sm font-medium">
                <svg className="text-gray-400 group-hover:text-gray-500 mr-3 flex-shrink-0 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
                </svg>
                Create Driver
              </Link>
              <button onClick={onSignOut} className="text-gray-600 hover:bg-gray-50 hover:text-gray-900 group rounded-md py-2 px-2 flex items-center text-sm font-medium">
                <svg className="text-gray-400 group-hover:text-gray-500 mr-3 flex-shrink-0 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
                Sign out
              </button>
            </nav>
          </div>
        </div>
      </div>
    </div>
  )
}
