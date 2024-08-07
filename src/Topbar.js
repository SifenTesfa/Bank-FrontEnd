import React from 'react';
import { Menu, MenuButton, MenuItems, MenuItem } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import { useNavigate } from 'react-router-dom';

function Topbar() {
  let user = JSON.parse(localStorage.getItem("user-info"));
  const navigate = useNavigate();

  function logOut() {
    localStorage.clear();
    navigate('/register');
  }

  return (
    <div className="fixed top-0 left-64 right-0 bg-white text-black p-4 flex items-center  border-gray-300">
      <div className="flex-1"></div> {/* Empty div to push content to the right */}
      {user && (
        <Menu as="div" className="relative inline-block text-left">
          <div>
            <MenuButton
              title={user.name}
              className="inline-flex items-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
            >
              <span>{user.name}</span>
              <ChevronDownIcon aria-hidden="true" className="h-5 w-5 text-gray-400" />
            </MenuButton>
          </div>
          <MenuItems
            transition
            className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none"
          >
            <div className="py-1">
              <form>
                <MenuItem>
                  <button
                    onClick={logOut}
                    className="block w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100 focus:outline-none"
                  >
                    Sign out
                  </button>
                </MenuItem>
              </form>
            </div>
          </MenuItems>
        </Menu>
      )}
    </div>
  );
}

export default Topbar;
