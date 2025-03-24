export interface CustomerResponse {
  success: boolean;
  message: string | null;
  data: CustomerData;
}

export interface CustomerData {
  customerID: number;
  customerTypeID: number;
  customerTypeName: string | null;
  firstName: string | null;
  lastName: string | null;
  email: string | null;
  emailVerify: number;
  emailVerifyCode: string | null;
  emailVerifyDate: string | null; // date-time
  gsm: string | null;
  gsmVerify: number;
  gsmVerifyCode: string | null;
  gsmVerifyDate: string | null; // date-time
  gsmVerifyExpire: string | null; // date-time
  avatar: string | null;
  balance: number;
  awaitingBalance: number;
  refundableBalance: number;
  credit: number;
  bonus: number;
  referanceID: string | null;
  registerDate: string | null; // date-time
  passwordChangeDate: string | null; // date-time
  isOtp: number; // 0: Closed, 1: SMS, 2:Email, 3: Authenticator
  publicID: string | null;
} 