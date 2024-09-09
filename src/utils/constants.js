import { API_BASE_ROUTE } from "../utils/config/app.config";

export const HTTPCode = {
  "SUCCESSFUL" : 200,
  "BAD_REQUEST": 400,
  "UNAUTHORIZED": 401,
  "FORBIDDEN": 403,
  "NOT_FOUND": 404,
  "INTERNAL_SERVER": 500,
  "NOT_IMPLEMENTED": 501
};

export const urlConfig = {
  register: `${API_BASE_ROUTE}/register`,
  login: `${API_BASE_ROUTE}/login`,
  logout: `${API_BASE_ROUTE}/logout`,
  changePassword: `${API_BASE_ROUTE}/changePassword`,
  authUser: `${API_BASE_ROUTE}/authUser`,
  requestVerificationCode: `${API_BASE_ROUTE}/requestVerificationCode`,
  confirmVerificationCode: `${API_BASE_ROUTE}/confirmVerificationCode`,
  getPaymentHistory: `${API_BASE_ROUTE}/getPaymentHistory`,
  getUpcommingEvent: `${API_BASE_ROUTE}/getUpcommingEvent`,
  getAvailableLeave: `${API_BASE_ROUTE}/getAvailableLeave`,
  addVacationRequest: `${API_BASE_ROUTE}/addVacationRequest`,
  getPaymentSetting: `${API_BASE_ROUTE}/getPaymentSetting`,
  markDefaultPaymentSetting: `${API_BASE_ROUTE}/markDefaultPaymentSetting`,
  deletePaymentSetting: `${API_BASE_ROUTE}/deletePaymentSetting`,
  updateEmployeeData: `${API_BASE_ROUTE}/updateEmployeeData`,

  getPayrollHistoryByMonth: `${API_BASE_ROUTE}/getPayrollHistoryByMonth`,
  getPayrollHistoryInDetail: `${API_BASE_ROUTE}/getPayrollHistoryInDetail`,
  getApprovalHistory: `${API_BASE_ROUTE}/getApprovalHistory`,
  getSummaryForDepartment: `${API_BASE_ROUTE}/getSummaryForDepartment`,
  getEmployeeData: `${API_BASE_ROUTE}/getEmployeeData`,
  registerEmployee: `${API_BASE_ROUTE}/registerEmployee`,
  registerEmployeeBulk: `${API_BASE_ROUTE}/registerEmployeeBulk`,
  terminateEmployee: `${API_BASE_ROUTE}/terminateEmployee`,
  addPaymentSetting: `${API_BASE_ROUTE}/addPaymentSetting`,
  getCompanyDeduction: `${API_BASE_ROUTE}/getCompanyDeduction`,
  addCompanyDeduction: `${API_BASE_ROUTE}/addCompanyDeduction`,
  updateCompanyData: `${API_BASE_ROUTE}/updateCompanyData`,
  getCompanyApprover: `${API_BASE_ROUTE}/getCompanyApprover`,
  getPendingVacationRequest: `${API_BASE_ROUTE}/getPendingVacationRequest`,
  approveVacationRequest: `${API_BASE_ROUTE}/approveVacationRequest`,
  createPayrollActivity: `${API_BASE_ROUTE}/createPayrollActivity`,
  getPendingPayroll: `${API_BASE_ROUTE}/getPendingPayroll`,
  updateApprovalActivity: `${API_BASE_ROUTE}/updateApprovalActivity`,
}

export const userRole = {
  admin: 'admin',
  employee: 'employee',
}

export const dashboardState = {
  historyInMonth: 'history in month',
  historyInDepartment: 'history in department',
  historyInDetail: 'history in detail',
  approvalHistory: 'approval history',
}
export const employeeAccountState = {
  employeeTable: 'employee table',
  employeeEdit: 'employee edit',
}
export const employeeRecordState = {
  employeeTable: 'employee table',
  employeeView: 'employee view',
  employeeEdit: 'employee edit',
}
export const initiatePayrollState = {
  initiatePayroll: 'initiate payroll',
  addEmployeePayroll: 'addEmployeePayroll',
}
export const approvePayrollState = {
  approveRequest: 'approve request',
  approvePayrollDetail: 'approve detail',
  approveSuccess: 'approve success',
  approveDeclineConfirm: 'approve decline confirm',
  approveDeclineSuccess: 'approve decline success',
  initiator: 'initiator',
}
export const payrollHistoryState = {
  historyInMonth: 'historyInMonth',
  historyDetail: 'history detail',
}
export const approverManagementState = {
  approverList: 'approver list',
  addNewApprover: 'add new approver',
  vacationList: 'vacation list',
}

export const approveStatus = {
  pending: 'pending',
  approved: 'approved',
  canceled: 'canceled',
}