import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import icon from "assets/images/main/logo.svg";
import cn from "classnames";
import { useMediaQuery } from "react-responsive";
import { FaBars, FaTimes } from "react-icons/fa";
const Header = () => {
  const isTablet = useMediaQuery({ maxWidth: 1000 });
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const currentPath = location.pathname;

  const submenuRef = useRef(null);

  const getLinkClassName = (path) => {
    const baseClasses = "inline-block py-2 px-3 text-white ml-6 w-fit";
    const activeClasses = "nav-active";
    if ((location.hash === '' && currentPath === path)) {
      return `${baseClasses} ${activeClasses}`;
    } else if (location.hash.indexOf(path) > -1) {
      return `${baseClasses} ${activeClasses} nav`;
    } else {
      return baseClasses;
    }
  };

  const handleOutsideClick = (event) => {
    if (submenuRef.current && !submenuRef.current.contains(event.target)) {
      setShowMenu(false);
    }
  };

  useEffect(() => {
    if (showMenu) {
      document.addEventListener("mousedown", handleOutsideClick);
    } else {
      document.removeEventListener("mousedown", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [showMenu]);

  // const showMenu = (e) => {
  //   let elm = document.getElementById("navSubMenu");
  //   if (elm) {
  //     elm.classList.toggle("active");
  //   }
  // }

  return (
    <div className="w-full h-[100px] z-50 bg-[#000000] fixed top-0">
      <div >
        <div className="flex justify-between items-center w-full h-full relative top-8">
          <div>
            <Link to="https://www.ozak.ai/">
              <img src={icon} className="ml-8 md:ml-16" alt="" />
            </Link>
          </div>
          <div>
            {!isTablet ? (
              <div className="flex justify-between items-center mr-16 relative navbar">
                <Link to="/" className={getLinkClassName("/")}>
                  Home
                </Link>
                <Link
                  to="/predictive-ai"
                  className={getLinkClassName("/predictive-ai")}
                >
                  Predictive AI
                </Link>
                <Link to="/depin" className={getLinkClassName("/depin")}>
                  DePIN
                </Link>
                <Link to="/personal" className={getLinkClassName("/personal")}>
                  Personal
                </Link>
                <Link to="/business" className={getLinkClassName("/business")}>
                  Business
                </Link>
                <Link to="/community" className={getLinkClassName("/community")} onClick={() => setShowMenu((prev) => !prev)}>
                  Community
                </Link>
                {showMenu && <ul ref={submenuRef} id="" className={`nav-sub-menu`}>
                  <li><a href="https://t.me/OzakAGI" target="_blank">Telegram</a></li>
                  <li><a href="https://linktr.ee/ozakagi" target="_blank">Linktree</a></li>
                  <li><a href="https://x.com/OzakAGI" target="_blank">Twitter X</a></li>
                  <li><a href="https://www.reddit.com/u/ozakAGI" target="_blank">Reddit</a></li>
                </ul>}
              </div>
            ) : (
              <div className="flex gap-6 items-center mr-8 md:mr-16">
                <button
                  className="text-white"
                  onClick={() => setMenuOpen(!menuOpen)}
                >
                  {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                </button>
              </div>
            )}
            {isTablet && menuOpen && (
              <div className="absolute top-[65px] left-0 w-full bg-[#000000] bg-opacity-100 text-white flex flex-col py-4">
                <Link
                  to="/"
                  className={getLinkClassName("/")}
                  onClick={() => setMenuOpen(false)}
                >
                  Home
                </Link>
                <Link
                  to="/predictive-ai"
                  className={getLinkClassName("/predictive-ai")}
                  onClick={() => setMenuOpen(false)}
                >
                  Predictive AI
                </Link>
                <Link
                  to="/depin"
                  className={getLinkClassName("/depin")}
                  onClick={() => setMenuOpen(false)}
                >
                  DePIN
                </Link>
                <Link
                  to="/personal"
                  className={getLinkClassName("/personal")}
                  onClick={() => setMenuOpen(false)}
                >
                  Personal
                </Link>
                <Link
                  to="/business"
                  className={getLinkClassName("/business")}
                  onClick={() => setMenuOpen(false)}
                >
                  Business
                </Link>
                <Link
                  to="/community"
                  className={getLinkClassName("/community")}
                  onClick={() => setShowMenu((prev) => !prev)}
                >
                  Community
                </Link>
                {showMenu && <ul ref={submenuRef} id="" className={`nav-sub-menu-mobile`}>
                  <li><a href="https://t.me/OzakAGI" target="_blank">Telegram</a></li>
                  <li><a href="https://linktr.ee/ozakagi" target="_blank">Linktree</a></li>
                  <li><a href="https://x.com/OzakAGI" target="_blank">Twitter X</a></li>
                  <li><a href="https://www.reddit.com/u/ozakAGI" target="_blank">Reddit</a></li>
                </ul>}
              </div>
            )}
          </div>
        </div>
      </div>
    </div >
  );
};

export default Header;
