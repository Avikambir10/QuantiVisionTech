import { Link } from "react-router-dom";


const Navbar = () => {
  return (
    <>
      {/* 2. Added better flex properties for a standard layout */}
      <div className="w-full h-[60px] flex flex-row justify-between items-center px-8 text-white ">
        
        {/* Brand/Logo */}
        <p className="text-xl font-bold">QuantiVisionTech</p>
        
        {/* Navigation Links */}
        <div className="flex gap-6">
          <Link to="/" className="hover:text-gray-300">
            Services
          </Link>
          <Link to="/shop" className="hover:text-gray-300">Portfolio</Link>
          <Link to="/blog" className="hover:text-gray-300">About</Link>
          <Link to="/contact" className="hover:text-gray-300">Contact Us</Link>

        </div>

      </div>
    </>
  )
}

export default Navbar;