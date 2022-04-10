import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import api from '../api'

export default function Login() {
  const navigate = useNavigate();
  const [inputErrors, setErrors] = useState([]);
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const onChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value })
  }

  const onSubmit = () => {
    api.post('/api/shipper/login', formData)
      .then(({ data }) => {
        localStorage.setItem('token', data.data.token);
        navigate('/home')

      })
      .catch(({ response }) =>{ setErrors(response.data.errors) })
  }

  return (
    <>
      <div className="min-h-full flex flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <img
            className="mx-auto h-12 w-auto"
            src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
            alt="Workflow"
          />
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Sign in to your account</h2>
        </div>

        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
            <div className="space-y-6">
              <div>
                <label htmlFor="username" className="block text-sm font-medium text-gray-700">
                  Username
                </label>
                <div className="mt-1">
                  <input
                    id="username"
                    name="username"
                    type="username"
                    onChange={onChange}
                    className={ inputErrors && inputErrors['username'] ? 'base-input border border-red-500' : 'base-input' }
                  />
                  { inputErrors && inputErrors['username'] ? <p class="text-red-500 text-xs italic mt-2">{ inputErrors['username'] }</p> : '' }
                </div>
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                  Password
                </label>
                <div className="mt-1">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    onChange={onChange}
                    className={ inputErrors && inputErrors['password'] ? 'base-input border border-red-500' : 'base-input' }
                  />
                  { inputErrors && inputErrors['password'] ? <p class="text-red-500 text-xs italic mt-2">{ inputErrors['password'] }</p> : '' }
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                  />
                  <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                    Remember me
                  </label>
                </div>

                <div className="text-sm">
                  <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                    Forgot your password?
                  </a>
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  onClick={onSubmit}
                  className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Sign in
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
