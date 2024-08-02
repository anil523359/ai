import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Avatar from "../../../../assets/images/dashboard/svg/avatar.svg";
import SignOut from "../../../../assets/images/dashboard/svg/sign-out.svg";
import { logout } from "../../../../services/api";
import { EmployeeSidebarItems } from "../../../../constants/Dashboard/dashboard-constants";
const PresaleSidebar = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const [showAccountNavBar, setShowAccountNavBar] = useState(false);
  const handleSignout = async () => {
    let refreshToken = ''
    const storage = localStorage.getItem("refreshToken")
    if (storage) {
      refreshToken = JSON.parse(storage)?.refreshToken?.token
    }
    await logout({refreshToken});
    localStorage.removeItem("refreshToken");
    navigate('/login');
  }
  return (
    <div className="w-[270px] flex flex-col justify-between pb-[40px]">
      <div className="w-[270px]">
        <div className="flex pt-[60px] gap-[23px] justify-center">
          <img src={Avatar} className="w-[68px] cursor-pointer" alt="company-logo" />
          <div className="flex flex-col justify-center gap-[6px]">
            <span className="font-eina02-semibold text-[#011165] text-sm">Peter Pan</span>
            <span className="font-eina02-regular text-[#9E9E9E] text-xs">UX Designer</span>
          </div>
        </div>
        <div className="flex flex-col gap-[10px] pt-[55px]">
          {EmployeeSidebarItems.map((item, key) => {
            let isSelected = (item.path === pathname) || (pathname.includes('account/') && item.path === '/employee/account');
            const isAccountSubNab = item.path.includes('account/');
            const isSelectedAccountSubNab = isSelected && isAccountSubNab;
            return (
              <Link
                key={key}
                to={item.path}
                onClick={() => {
                  if (item.path === '/employee/account') {
                    setShowAccountNavBar(!showAccountNavBar)
                  }
                }}
                className={
                  `${isSelected ? (isSelectedAccountSubNab ?  'bg-[#0111651A]' : 'bg-[#011165]') : ''}
                  ${isAccountSubNab ? (!showAccountNavBar ? 'hidden' : '') : ''}
                  ${isSelectedAccountSubNab ? 'pl-[0px] ml-[50px] rounded-[20px]' : 'ml-[0px] pl-[50px] rounded-r-[20px]'}
                  text-[14px] flex gap-[20px] items-center py-[10px] mr-[25px]
                  `
                }
              >
                <img 
                  src={`${process.env.PUBLIC_URL}/images/${isSelected ? item.selectedIcon : item.icon}`} 
                  className={
                    `${isAccountSubNab ? 'hidden' : ''} w-[24px]`
                  } 
                  alt="icon" 
                />
                <span 
                  className={`
                    ${isAccountSubNab ? 'pl-[45px]' : ''}
                    ${isSelected ? 'font-eina02-semibold' : 'font-eina02-regular'}
                    ${isSelected && !isAccountSubNab? 'text-white' : 'text-[#011165]'}
                  `}
                >
                  {item.label}
                </span>
              </Link>
            )
          })}
        </div>
      </div>
      <div className="pl-[50px]">
        <button
          className="fixed bottom-[30px] flex justify-center gap-[10px] py-[7px] px-[15px] rounded-[18px] text-white font-eina02-semibold text-[14px] bg-[#011165]"
          onClick={handleSignout}
        >
          <img src={SignOut} className="w-[24px]" alt="sign-out" />
          <span>Sign out</span>
        </button>
      </div>
    </div>
  );
};
export default PresaleSidebar;
