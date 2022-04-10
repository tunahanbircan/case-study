import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import { useState } from 'react'
import api from '../api'
import { useNavigate } from "react-router-dom";

export default function Register() {
  const navigate = useNavigate();
  const [errors, setErrors] = useState([]);


  const [formData, setFormData] = useState({
    username: '',
    password: '',
    first_name: '',
    last_name: '',
    phone: '',
    email: '',
  });

  const onChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value })
  }

  const onSubmit = () => {
    api.post('/api/shipper/register', { ...formData, phone: formData.phone.substring(1) })
      .then(() => {
        navigate('/');
      })
      .catch(({ response }) => { setErrors(response.data.errors) })
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
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Sign up</h2>
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
                    className={ errors['username'] ? 'base-input border border-red-500' : 'base-input' }
                  />
                </div>
                { errors['username'] ? <p class="text-red-500 text-xs italic mt-2">{ errors['username'] }</p> : '' }
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
                    className={ errors['password'] ? 'base-input border border-red-500' : 'base-input' }
                  />
                  { errors['password'] ? <p class="text-red-500 text-xs italic mt-2">{ errors['password'] }</p> : '' }
                </div>
              </div>
              <div>
                <label htmlFor="first_name" className="block text-sm font-medium text-gray-700">
                  First Name
                </label>
                <div className="mt-1">
                  <input
                    id="first_name"
                    name="first_name"
                    onChange={onChange}
                    className={ errors['first_name'] ? 'base-input border border-red-500' : 'base-input' }
                  />
                  { errors['first_name'] ? <p class="text-red-500 text-xs italic mt-2">{ errors['first_name'] }</p> : '' }
                </div>
              </div>
              <div>
                <label htmlFor="last_name" className="block text-sm font-medium text-gray-700">
                  Last Name
                </label>
                <div className="mt-1">
                  <input
                    id="last_name"
                    name="last_name"
                    onChange={onChange}
                    className={ errors['last_name'] ? 'base-input border border-red-500' : 'base-input' }
                  />
                  { errors['last_name'] ? <p class="text-red-500 text-xs italic mt-2">{ errors['last_name'] }</p> : '' }
                </div>
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                  Phone Number
                </label>
                <div className="mt-1">
                <PhoneInput
                  placeholder="Enter phone number"
                  value={formData.phone}
                  className={ errors['phone'] ? 'base-input border border-red-500' : 'base-input' }
                  onChange={(phone) => setFormData({ ...formData, phone })} />
                  { errors['phone'] ? <p class="text-red-500 text-xs italic mt-2">{ errors['phone'] }</p> : '' }
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <div className="mt-1">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    onChange={onChange}
                    className={ errors['email'] ? 'base-input border border-red-500' : 'base-input' }
                  />
                  { errors['email'] ? <p class="text-red-500 text-xs italic mt-2">{ errors['email'] }</p> : '' }
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
