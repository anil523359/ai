import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Avatar from "../../../../assets/images/dashboard/svg/avatar.svg";
import SignOut from "../../../../assets/images/dashboard/svg/sign-out.svg";
import { logout } from "../../../../services/api";
import { AdminSidebarItems } from "../../../../constants/Dashboard/dashboard-constants";
const AdminSidebar = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const [showAccountNavBar, setShowAccountNavBar] = useState(false);
  const [showEmployeeManagementNavBar, setShowEmployeeManagementNavBar] = useState(false);
  const [showPayrollManagementNavBar, setShowPayrollManagementNavBar] = useState(false);
  const [showApprovallManagementNavBar, setShowApprovalManagementNavBar] = useState(false);
  const [showPayslipNavBar, setShowPayslipNavBar] = useState(false);
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
        {/* <div className="flex pt-[60px] gap-[23px] justify-center">
          <img src={Avatar} className="w-[68px] cursor-pointer" alt="company-logo" />
          <div className="flex flex-col justify-center gap-[6px]">
            <span className="font-inter-semibold text-[#011165] text-sm">Peter Pan</span>
            <span className="font-inter-regular text-[#9E9E9E] text-xs">UX Designer</span>
          </div>
        </div> */}
        <div className="flex flex-col gap-[5px] pt-[55px]">
          {AdminSidebarItems.map((item, key) => {
            let isSelected = (item.path === pathname) || 
              (pathname.includes('account/') && item.path === '/admin/account') ||
              (pathname.includes('employee-management/') && item.path === '/admin/employee-management') ||
              (pathname.includes('payroll-management/') && item.path === '/admin/payroll-management');
            const isAccountSubNab = item.path.includes('account/');
            const isEmployeeManagementSubNab = item.path.includes('employee-management/');
            const isPayrollManagementSubNab = item.path.includes('payroll-management/');
            const isApprovalManagementSubNab = item.path.includes('approval-management/');
            const isPayslipSubNab = item.path.includes('payslips/');
            const isSelectedAccountSubNab = isSelected && isAccountSubNab;
            const isSelectedEmployeeManagementSubNab = isSelected && isEmployeeManagementSubNab;
            const isSelectedPayrollManagementSubNab = isSelected && isPayrollManagementSubNab;
            const isSelectedApprovalManagementSubNab = isSelected && isApprovalManagementSubNab;
            const isSelectedPayslipSubNab = isSelected && isPayslipSubNab;
            return (
              <Link
                key={key}
                to={item.path}
                onClick={() => {
                  if (item.path === '/admin/account') {
                    setShowAccountNavBar(!showAccountNavBar);
                  } else if ((item.path === '/admin/employee-management')) {
                    setShowEmployeeManagementNavBar(!showEmployeeManagementNavBar);
                  } else if ((item.path === '/admin/payroll-management')) {
                    setShowPayrollManagementNavBar(!showPayrollManagementNavBar);
                  } else if ((item.path === '/admin/approval-management')) {
                    setShowApprovalManagementNavBar(!showApprovallManagementNavBar);
                  } else if ((item.path === '/admin/payslips')) {
                    setShowPayslipNavBar(!showPayslipNavBar);
                  }
                }}
                className={
                  `${isSelected ? (isSelectedAccountSubNab || isSelectedEmployeeManagementSubNab || isSelectedPayrollManagementSubNab || isSelectedApprovalManagementSubNab || isSelectedPayslipSubNab ?  'bg-[#0111651A]' : 'bg-[#011165]') : ''}
                  ${isAccountSubNab ? (!showAccountNavBar ? 'hidden' : '') : ''}
                  ${isEmployeeManagementSubNab ? (!showEmployeeManagementNavBar ? 'hidden' : '') : ''}
                  ${isPayrollManagementSubNab ? (!showPayrollManagementNavBar ? 'hidden' : '') : ''}
                  ${isApprovalManagementSubNab ? (!showApprovallManagementNavBar ? 'hidden' : '') : ''}
                  ${isPayslipSubNab ? (!showPayslipNavBar ? 'hidden' : '') : ''}
                  ${isSelectedAccountSubNab || isSelectedEmployeeManagementSubNab || isSelectedPayrollManagementSubNab || isSelectedApprovalManagementSubNab || isSelectedPayslipSubNab ? 'pl-[0px] ml-[50px] rounded-[20px]' : 'ml-[0px] pl-[50px]'}
                  text-[14px] flex gap-[20px] items-center py-[10px]
                  `
                }
              >
                <img 
                  src={`${process.env.PUBLIC_URL}/images/${isSelected ? item.selectedIcon : item.icon}`} 
                  className={
                    `${isAccountSubNab || isEmployeeManagementSubNab || isPayrollManagementSubNab || isApprovalManagementSubNab || isPayslipSubNab? 'hidden' : ''} w-[24px]`
                  } 
                  alt="icon" 
                />
                <span 
                  className={`
                    ${isAccountSubNab || isEmployeeManagementSubNab || isPayrollManagementSubNab || isApprovalManagementSubNab || isPayslipSubNab? 'pl-[45px]' : ''}
                    ${isSelected ? 'font-inter-semibold' : 'font-inter-regular'}
                    ${isSelected && !(isAccountSubNab || isEmployeeManagementSubNab || isPayrollManagementSubNab || isApprovalManagementSubNab || isPayslipSubNab)? 'text-white' : 'text-[#011165]'}
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
          className="fixed bottom-[30px] flex justify-center gap-[10px] py-[7px] px-[15px] rounded-[18px] text-white font-inter-semibold text-[14px] bg-[#011165]"
          onClick={handleSignout}
        >
          <img src={SignOut} className="w-[24px]" alt="sign-out" />
          <span>Sign out</span>
        </button>
      </div>
    </div>
  );
};
export default AdminSidebar;
