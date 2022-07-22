import endpoints from './endpoints';
import App from '../App';

const axios = require('axios');
class ApiUtils {
  constructor(
    defineRequestInterceptor = false,
    appendAuth = false,
    defineResponseInterceptor = false
  ) {
    this.axios = axios.create({});

    if (window.navigator.onLine) {
      if (defineRequestInterceptor) {
        const hostname = window && window.location && window.location.hostname;
        const scheme = hostname.match(/^(.*\.)?localhost$/) ? 'http' : 'https';
        let backendToken;
        const backendURL = process.env.REACT_APP_API_URL || `${scheme}://${hostname}/api/`;

        if (appendAuth) {
          let state = App.getStoreValue();
          let auth = state.auth;
          if (auth.isLogin) {
            backendToken = undefined;
            backendToken = 'token ' + auth.user.token;
          }
        }

        this.axios.interceptors.request.use(
          function (config) {
            let r = new RegExp('^(?:[a-z]+:)?//', 'i');
            // for pdf pass custom header
            if (
              config.url === 'invoice/export_invoices' &&
              config.method === 'get' &&
              config.params.is_zip
            ) {
              config = {
                ...config,
                responseType: 'arraybuffer', // add this line
                headers: {
                  ...config.headers,
                },
                url: r.test(config.url) ? config.url : backendURL + config.url,
              };
            } else {
              config = {
                ...config,

                headers: {
                  ...config.headers,
                  'Content-Type':
                    config.headers['Content-Type'] === 'multipart/form-data'
                      ? config.headers['Content-Type']
                      : 'application/json',
                  // "Access-Control-Allow-Origin": "*"
                },
                url: r.test(config.url) ? config.url : backendURL + config.url,
              };
            }
            if (appendAuth) {
              config.headers['Authorization'] = backendToken;
            }
            return config;
          },
          function (error) {
            return Promise.reject(error);
          }
        );
      }

      this.axios.interceptors.response.use(
        function (response, error) {
          if (defineResponseInterceptor) {
            return response;
          }
        },
        function (error) {
          if (error.response) {
            if (
              error.response.status === 401 ||
              error.response.status === 403 ||
              error.response.status === 408
            ) {
              App.logout(error.response && error.response.data && error.response.data.message);
            }
            if (error.response.status === 404) {
              App.notFound(error.response && error.response.data && error.response.data.message);
            }
          }
          return Promise.reject(error);
        }
      );
    } else {
      if (App) {
        App.noInternet(window.navigator.onLine);
      }
    }
  }

  loginCall = data => {
    return this.axios({
      method: endpoints.login.method,
      url: endpoints.login.url,
      data: JSON.stringify({ ...data }),
    });
  };
  logOutCall = () => {
    return this.axios({
      method: endpoints.logOutCall.method,
      url: endpoints.logOutCall.url,
    });
  };
  getAllUsers = (data, params) => {
    return this.axios({
      method: endpoints.getAllUsers.method,
      url: endpoints.getAllUsers.url,
      data: JSON.stringify({ ...data }),
      params,
    });
  };

  getUserById = (id, params) => {
    return this.axios({
      method: endpoints.getUserById.method,
      url: endpoints.getUserById.url + id,
      params,
    });
  };

  getUser = params => {
    return this.axios({
      method: endpoints.getUser.method,
      url: endpoints.getUser.url,
      params,
    });
  };

  createUser = (params, data) => {
    return this.axios({
      method: endpoints.createUser.method,
      url: endpoints.createUser.url,
      data: JSON.stringify({ ...data }),
      params,
    });
  };

  checkAvailName = data => {
    return this.axios({
      method: endpoints.checkAvailName.method,
      url: endpoints.checkAvailName.url,
      data: JSON.stringify({ ...data }),
    });
  };

  patchUser = (id, data, params) => {
    return this.axios({
      method: endpoints.patchUser.method,
      url: endpoints.patchUser.url + id,
      data: JSON.stringify({ ...data }),
      params,
    });
  };

  deleteUser = (data, id) => {
    return this.axios({
      method: endpoints.deleteUser.method,
      url: endpoints.deleteUser.url + id,
      data: JSON.stringify({ ...data }),
    });
  };

  deActivateUser = (id, data) => {
    return this.axios({
      method: endpoints.deactivateUser.method,
      url: endpoints.deactivateUser.url + id + '/permission',
      data: JSON.stringify({ ...data }),
    });
  };

  getUserRole = params => {
    return this.axios({
      method: endpoints.getUserRole.method,
      url: endpoints.getUserRole.url,
      data: [],
      params,
    });
  };

  getAllClients = (data, params) => {
    return this.axios({
      method: endpoints.getAllClients.method,
      url: endpoints.getAllClients.url,
      data: JSON.stringify({ ...data }),
      params,
    });
  };

  // common api to get location
  getByCommonLocation = zipCode => {
    return this.axios({
      method: endpoints.getByCommonLocation.method,
      url: endpoints.getByCommonLocation.url + '?zipcode=' + zipCode,
    });
  };
}

export default ApiUtils;
