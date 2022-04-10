import AppSidebar from '../components/AppSidebar';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import api from '../api'


function CreateDriver() {
  const navigate = useNavigate();
  const [errors, setErrors] = useState([]);
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    photo: '',
  });

  const onChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value })
  }

  const onUploadPhoto = (event) => {
    const file = event.target.files[0]
    const photoUrl = URL.createObjectURL(file)

    setFormData({ ...formData, photo: photoUrl })
  }

  const onSubmit = () => {
    setErrors([]);

    api.post('/api/shipper/carrier', formData)
      .then(() => {
        navigate('/home');
      })
      .catch(({ response }) => { setErrors(response.data.errors) })

  }

  return (
    <>
      <AppSidebar />
      <div className="md:pl-64 mx-4">
        <div className="max-w-4xl mx-auto flex flex-col md:px-8 xl:px-0">
          <main className="flex-1">
            <div className="py-6">
              <div className="px-4 sm:px-6 md:px-0">
                <h1 className="text-2xl font-semibold text-gray-900">Create Driver</h1>
              </div>
              </div>
            <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
              <div className="sm:col-span-3">
                <label htmlFor="first_name" className="block text-sm font-medium text-gray-700">
                  First name
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="first_name"
                    id="first_name"
                    onChange={onChange}
                    className={ errors['first_name'] ? 'base-input border border-red-500' : 'base-input' }
                  />
                </div>
                { errors['first_name'] ? <p className="text-red-500 text-xs italic mt-2">{ errors['first_name'] }</p> : '' }
              </div>

              <div className="sm:col-span-3">
                <label htmlFor="last_name" className="block text-sm font-medium text-gray-700">
                  Last name
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="last_name"
                    id="last_name"
                    onChange={onChange}
                    className={ errors['last_name'] ? 'base-input border border-red-500' : 'base-input' }
                  />
                </div>
                { errors['last_name'] ? <p className="text-red-500 text-xs italic mt-2">{ errors['last_name'] }</p> : '' }
              </div>

              <div className="sm:col-span-3">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email address
                </label>
                <div className="mt-1">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    onChange={onChange}
                    className={ errors['last_name'] ? 'base-input border border-red-500' : 'base-input' }
                  />
                  { errors['email'] ? <p className="text-red-500 text-xs italic mt-2">{ errors['email'] }</p> : '' }
                </div>
              </div>
              <div className="sm:col-span-6">
                <label htmlFor="cover-photo" className="block text-sm font-medium text-gray-700">
                  Photo
                </label>
                <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                  <div className="space-y-1 text-center">
                    <svg
                      className="mx-auto h-12 w-12 text-gray-400"
                      stroke="currentColor"
                      fill="none"
                      viewBox="0 0 48 48"
                      aria-hidden="true"
                    >
                      <path
                        d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <div className="flex text-sm text-gray-600">
                      <label
                        htmlFor="file-upload"
                        className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                      >
                        <span>Upload a file</span>
                        <input id="file-upload" name="file-upload" type="file" accept=".jpg" className="sr-only" onChange={onUploadPhoto} />
                      </label>
                    </div>
                  </div>
                </div>
                { errors['photo'] ? <p className="text-red-500 text-xs italic mt-2">{ errors['photo'] }</p> : '' }
              </div>
              <button
                  type="submit"
                  onClick={onSubmit}
                  className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Create
                </button>
            </div>
          </main>
        </div>
      </div>
    </>
  );
}

export default CreateDriver;
