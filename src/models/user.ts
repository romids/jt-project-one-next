export enum IdValues {}

export enum CreatedAtValues {}

export enum UpdatedAtValues {}

export enum FirstNameValues {}

export enum LastNameValues {}

export enum EmailValues {}

export enum EncryptedPasswordValues {}

export enum PasswordValues {}

export enum PasswordConfirmationValues {}

export enum ResetPasswordTokenValues {}

export enum ResetPasswordSentAtValues {}

export enum RememberCreatedAtValues {}

export enum CurrentSignInAtValues {}

export enum LastSignInAtValues {}

export enum CurrentSignInIpValues {}

export enum LastSignInIpValues {}

export enum SignInCountValues {}

export enum LockedAtValues {}

export enum FailedAttemptsValues {}

export enum UnlockTokenValues {}

export enum ConfirmationTokenValues {}

export enum UnconfirmedEmailValues {}

export enum ConfirmedAtValues {}

export enum ConfirmationSentAtValues {}

export type UserModel = {
  id: number;
  created_at: Date;
  updated_at: Date;
  first_name: string;
  last_name: string;
  email: string;
  encrypted_password: string;
  password: string;
  password_confirmation: string;
  reset_password_token: string;
  reset_password_sent_at: Date;
  remember_created_at: Date;
  current_sign_in_at: Date;
  last_sign_in_at: Date;
  current_sign_in_ip: string;
  last_sign_in_ip: string;
  sign_in_count: number;
  locked_at: Date;
  failed_attempts: number;
  unlock_token: string;
  confirmation_token: string;
  unconfirmed_email: string;
  confirmed_at: Date;
  confirmation_sent_at: Date;
};

export type UserModels = UserModel[];
