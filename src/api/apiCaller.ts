import { BASE_URL } from '@config/constants';
import { Logger } from '@utils';
import axios, { AxiosRequestConfig } from 'axios';

export class ApiCaller {
  static httpGet = async (url: string): Promise<unknown> => {
    try {
      const URL = BASE_URL + url;
      const headers = {};
      const method = 'GET';
      const options: AxiosRequestConfig = { headers, method, url: URL };
      const res = await axios(options);
      return res;
    } catch (err) {
      Logger.error(err);
      return err;
    }
  };

  static httpPost = async (
    data: Record<string, unknown> | unknown,
    url: string
  ): Promise<unknown> => {
    try {
      const URL = BASE_URL + url;
      const method = 'POST';
      const headers = {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      };
      const options: AxiosRequestConfig = { headers, method, url: URL, data };
      const res = await axios(options);
      return res;
    } catch (err) {
      Logger.error(err);
      throw err;
    }
  };

  static httpPut = async (payload: Record<string, unknown>, url: string): Promise<unknown> => {
    try {
      const URL = BASE_URL + url;
      const method = 'PUT';
      const headers = {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      };
      const data = JSON.stringify(payload);
      const options: AxiosRequestConfig = { headers, method, url: URL, data };
      const res = await axios(options);
      return res;
    } catch (err) {
      Logger.error(err);
      throw err;
    }
  };

  static httpPatch = async (payload: Record<string, unknown>, url: string): Promise<unknown> => {
    try {
      const URL = BASE_URL + url;
      const method = 'PATCH';
      const headers = {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      };
      const data = JSON.stringify(payload);
      const options: AxiosRequestConfig = { headers, method, url: URL, data };
      const res = await axios(options);
      return res;
    } catch (err) {
      Logger.error(err);
      throw err;
    }
  };

  static httpDelete = async (url: string): Promise<unknown> => {
    try {
      const URL = BASE_URL + url;
      const headers = {};
      const method = 'DELETE';
      const options: AxiosRequestConfig = { headers, method, url: URL };
      const res = await axios(options);
      return res;
    } catch (err) {
      Logger.error(err);
      throw err;
    }
  };

  static async uploadImage(formData: unknown): Promise<unknown> {
    try {
      const URL = `${BASE_URL}Fileupload`;
      const res = await axios.post(URL, formData, {
        // receive two parameter endpoint url ,form data
      });
      return res;
    } catch (err) {
      Logger.error(err);
      throw err;
    }
  }
}
