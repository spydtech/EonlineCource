import { Fragment } from 'react'
import React, { useState } from 'react';
import { Disclosure, Menu } from '@headlessui/react'
import { FaBars } from "react-icons/fa";
import { IoCloseSharp } from "react-icons/io5";
import { Link } from 'react-router-dom';
const login = true;
const navigation = [
  { name: 'Dashboard', href: '/', current: true },
  { name: 'My Learning', href: `${login ? "/" : "/login" } `, current: false },
  { name: 'Course', href: '#', current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Navbar() {
  const [navigationMenu, setNavigationMenu] = useState(null);
  const [navigationMenuOpen, setNavigationMenuOpen] = useState(false);

  const toggleNavigationMenu = (menuName) => {
    if (navigationMenuOpen && navigationMenu === menuName) {
      // If the menu is already open and corresponds to the clicked menu, close it
      setNavigationMenuOpen(false);
      setNavigationMenu(null);
    } else {
      // If the menu is closed or corresponds to a different menu, open it
      setNavigationMenuOpen(true);
      setNavigationMenu(menuName);
    }
  };
  return (
    <Disclosure as="nav" className="bg-[#0077b6] sticky top-0 z-50">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <IoCloseSharp  className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <FaBars className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  <img
                    className="h-8 w-auto"
                    src="https://static.vecteezy.com/system/resources/thumbnails/009/383/394/small/graduation-clipart-design-illustration-free-png.png"
                    alt="Your Company"
                  />
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                          'rounded-md px-3 py-2 text-sm font-medium'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                {
                  login ? (
                    <div className="relative inline-block">
      <button
        className={`inline-flex items-center justify-center h-14 px-4 py-2 text-sm font-medium transition-colors rounded-md ${
          navigationMenu === 'getting-started' ? 'border-2 border-black' : ''
        } ${navigationMenu !== 'getting-started' ? '' : ''}`}
        onClick={() => toggleNavigationMenu('getting-started')}
        
      >
        <span className='p-3 w-12 rounded-full bg-blue-400 text-white font-bold text-center cursor-pointer'>A</span>
        <svg
          className={`relative top-[1px] ml-1 h-5 w-5 ease-out duration-300 ${
            navigationMenuOpen && navigationMenu === 'getting-started' ? '-rotate-180' : ''
          }`}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <polyline points="6 9 12 15 18 9"></polyline>
        </svg>
      </button>

      {/* Dropdown menu */}
      {navigationMenuOpen && navigationMenu === 'getting-started' && (
        <div className="absolute z-10 mt-1 w-48 -ml-20 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
          {/* Dropdown menu items */}
          {/* Replace these links with your actual dropdown menu items */}
          <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900">
            My Courses
          </a>
          <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900">
            Profile
          </a>
          <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900">
            Settings
          </a>
          <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900">
            Updates
          </a>
          <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900">
            Accomplishments
          </a>
          <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900">
            Help Center
          </a>
          <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900">
            Logout
          </a>
        </div>
      )}
    </div>
                    
                  ) : (
                    <Menu as="div" className="relative ml-3">
                    <Link to="/login">
                      <div className='text-white'>
                        Log In
                      </div>
                    </Link>
                  </Menu>
                  )
                }
               {
                login ? ("") : (

                  <Menu as="div" className="relative ml-3 pl-8">
                  <Link to = "/SignUp">
                    <button className='py-3 px-6 bg-blue-800 text-white rounded'>
                      Join Us
                    </button>
                  </Link>
                </Menu>
                ) 
               }
              
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                    'block rounded-md px-3 py-2 text-base font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}
