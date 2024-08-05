
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { useNavigate } from 'react-router-dom';
function Header  ()  {
  let user= JSON.parse(localStorage.getItem("user-info"))
  const navigate = useNavigate();
  function logOut(){
    localStorage.clear();
    navigate.push('/register')
  }
  return (
    <div>
      <nav className="bg-black text-white py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
          <a href="/" className="text-2xl font-bold  text-white mx-4">
              E-comm
            </a>
            {
              localStorage.getItem("user-info")?
              <>
                   
            <a href="/AddProduct" className="hover:text-gray-300 mx-4">
              Add product
            </a>
            <a href="/UpdateProduct" className="hover:text-gray-300 mx-4">
              Update Product
            </a>
            <a href="/" className="hover:text-gray-300 mx-4">
              Product List
            </a>
            <a href="/SearchProduct" className="hover:text-gray-300 mx-4">
              Search Product
            </a>
              </>:
              <>
             <a href="/register" className="  hover:text-gray-300 mx-4">
             Register
            </a>
             
              <a href="/login" className="hover:text-gray-300 mx-4">
              Login
            </a> 
              
              </>
            }
          </div>
          {
              localStorage.getItem("user-info")?
          <Menu as="div" className="relative inline-block text-left">
      <div>
        <MenuButton title={user && user.name} className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
        <span className="flex-grow">{user && user.name}</span> 
          <ChevronDownIcon aria-hidden="true" className="-mr-1 h-5 w-5 text-gray-400" />
        </MenuButton>
      </div>

      <MenuItems
        transition
        className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
      >
        <div className="py-1">
          
          
          
          <form >
            <MenuItem>
              <button
                onClick={logOut}
                className="block w-full px-4 py-2 text-left text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
              >
                Sign out
              </button>
            </MenuItem>
          </form>
        </div>
      </MenuItems>
    </Menu> :null}
        </div>
      </div>
      
    </nav>
   
    </div>
  );
};

export default Header;