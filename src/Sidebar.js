import React from 'react';
import { NavLink } from 'react-router-dom';
import { Menu } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';

function Sidebar() {
  return (
    <div className="fixed top-0 left-0 w-64 h-screen bg-white text-black border-r border-gray-300">
      <div className="p-4">
        <h1 className="text-2xl font-semibold">Dashboard</h1>
      </div>
      <nav className="mt-6 text-sm">
        <ul>
          <li>
            <NavLink to="/" className="block p-4 font-semibold hover:bg-gray-100">Overview</NavLink>
          </li>
          <li>
            <Menu as="div" className="relative">
              <div>
                <Menu.Button className="flex items-center w-full px-4 py-2 text-sm font-semibold text-gray-900 bg-white hover:bg-gray-50">
                <NavLink to='/ProductList'>  <span className="pr-2">Banks</span> </NavLink>
                  <ChevronDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                </Menu.Button>
              </div>
              <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5">
                <div className="py-1">
                  <Menu.Item>
                    {({ active }) => (
                      <NavLink
                        to="/AddProduct"
                        className={`block px-4 py-2 text-sm ${active ? 'bg-gray-100 text-gray-900' : 'text-gray-700'}`}
                      >
                        Add Bank
                      </NavLink>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <NavLink
                        to="/UpdateProduct/:id"
                        className={`block px-4 py-2 text-sm ${active ? 'bg-gray-100 text-gray-900' : 'text-gray-700'}`}
                      >
                        Update Bank
                      </NavLink>
                    )}
                  </Menu.Item>
                </div>
              </Menu.Items>
            </Menu>
          </li>
          <li>
            <Menu as="div" className="relative">
              <div>
                <Menu.Button className="flex items-center w-full px-4 py-2 text-sm font-semibold text-gray-900 bg-white hover:bg-gray-50">
                  <span className="pr-2">Blogs</span>
                  <ChevronDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                </Menu.Button>
              </div>
              <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5">
                <div className="py-1">
                  <Menu.Item>
                    {({ active }) => (
                      <NavLink
                        to="/AddProduct"
                        className={`block px-4 py-2 text-sm ${active ? 'bg-gray-100 text-gray-900' : 'text-gray-700'}`}
                      >
                        Add Bank
                      </NavLink>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <NavLink
                        to="/UpdateProduct/:id"
                        className={`block px-4 py-2 text-sm ${active ? 'bg-gray-100 text-gray-900' : 'text-gray-700'}`}
                      >
                        Update Bank
                      </NavLink>
                    )}
                  </Menu.Item>
                </div>
              </Menu.Items>
            </Menu>
          </li>
          <li>
            <NavLink to="/SearchProduct" className="block p-4 font-semibold hover:bg-gray-100">Search Bank</NavLink>
          </li>
          <li>
            <NavLink to="/review" className="block p-4 font-semibold hover:bg-gray-100">Reviews</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Sidebar;
