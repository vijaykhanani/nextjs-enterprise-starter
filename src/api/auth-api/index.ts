import { BASE_URL } from '@config/constants';
import { IUser } from '@interfaces';
import { Logger } from '@utils';
import { IResponseBody } from '../api';
import { ApiCaller as axios } from '../apiCaller';

class AuthApi {
  private static base = `/auth/`;

  public static async signup(signupParams: unknown): Promise<IResponseBody<IUser>> {
    try {
      const res = await axios.httpPost(signupParams, `${BASE_URL}${this.base}signup`);
      Logger.debug('AuthApi.signup() ', res);
      return res as IResponseBody<IUser>;
    } catch (err: unknown) {
      Logger.error('AuthApi.signup() ', err);
      throw err;
    }
  }

  public static async signin(email: string, password: string): Promise<unknown> {
    try {
      const res = await axios.httpPost({ email, password }, `${BASE_URL}${this.base}signin`);
      Logger.debug('auth token ', email, password);
      return res;
    } catch (err: unknown) {
      Logger.error('AuthApi.signin() ', err);
      throw err;
    }
  }

  public static async signout(): Promise<unknown> {
    try {
      const res = await axios.httpPost({}, `${BASE_URL}${this.base}signout`);
      Logger.debug('AuthApi.signout() ', res);
      return res;
    } catch (err: unknown) {
      Logger.error('AuthApi.signout() ', err);
      throw err;
    }
  }

  public static async isAuthenticated(): Promise<unknown> {
    try {
      const res = await axios.httpGet(`${BASE_URL}${this.base}authenticate`);
      Logger.debug('AuthApi.isAuthenticated() ', res);
      return res;
    } catch (err) {
      Logger.error('AuthApi.isAuthenticated() ', err);
      throw err;
    }
  }

  public static async getUser(): Promise<IResponseBody<IUser>> {
    try {
      const res = await axios.httpPost({}, `${BASE_URL}${this.base}user`);
      Logger.debug('AuthApi.getUser() ', res);
      return res as IResponseBody<IUser>;
    } catch (err: unknown) {
      Logger.error('AuthApi.getUser() ', err);
      throw err;
    }
  }

  public static async forgotPassword(email: string): Promise<unknown> {
    try {
      const res = await axios.httpPost({ email }, `${BASE_URL}${this.base}forgotpassword`);
      Logger.debug('AuthApi.forgotPassword() ', res);
      return res;
    } catch (err: unknown) {
      Logger.error('AuthApi.forgotPassword() ', err);
      throw err;
    }
  }

  public static async resetPassword(
    email: string,
    token: string,
    password: string
  ): Promise<unknown> {
    try {
      const res = await axios.httpPost(
        { email, token, password },
        `${BASE_URL}${this.base}resetpassword`
      );
      Logger.debug('AuthApi.resetPassword() ', res);
      return res;
    } catch (err: unknown) {
      Logger.error('AuthApi.resetPassword() ', err);
      throw err;
    }
  }
}
export default AuthApi;
