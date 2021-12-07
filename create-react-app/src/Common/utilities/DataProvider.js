
// import { createStore } from 'redux';
// import rootReducer from '../reducers/rootReducer';
// import { SESSION_DATA } from '../actions/sessionActions';
// const STORE = createStore(rootReducer);
/* eslint-disable */
let method = '';
const SESSION_ACTIVE = 'Active';
const SESSION_WILL_EXPIRE = 'Will_Expire';
const SESSION_EXPIRED = 'Expired';
export class DataProvider {

  constructor() {
    this._baseUrl = "http://3.135.65.153:8000";

    // this.getAuthHeader = () => {
    //   try {
    //     let userData = JSON.parse(localStorage.getItem('userData'));
    //     if (userData != null)
    //       return userData.token.access_token;
    //   }
    //   catch (e) {
    //     return "";
    //   }
    // };

    this.calculateExpireTime = () => {
      try {
        let userData = JSON.parse(localStorage.getItem('userData'));
        if (userData != null) {
          let expireTimeMilliSec = Date.parse(userData.token.expires_in);
          let currentTimeInMillSec = Date.parse(new Date() + "");
          //one minutes subtracted from expireTime.
          let alertTimeInMillSec = expireTimeMilliSec - 60000;
          if (alertTimeInMillSec <= currentTimeInMillSec && currentTimeInMillSec <= expireTimeMilliSec) {
            STORE.dispatch({ type: SESSION_DATA, sessionData: { status: SESSION_WILL_EXPIRE, showPopup: true } });
            return SESSION_WILL_EXPIRE;
          }
          else if (currentTimeInMillSec >= expireTimeMilliSec) {
            STORE.dispatch({ type: SESSION_DATA, sessionData: { status: SESSION_EXPIRED, showPopup: true } });
            return SESSION_EXPIRED;
          }
        }
        return SESSION_ACTIVE;
      }
      catch (e) {
        return e;
      }
    };


  }
  async requestFunction(url, method, isBodyRequired, data) {
    if (this.calculateExpireTime() !== SESSION_EXPIRED) {
      if (url.includes('api')) {
      }
      var headers = { "Content-Type": "application/json" };
      try {

        // if (addAuthHeader) {
        //   debugger
        //   headers["Authorization"] = `Bearer ${this.getAuthHeader()}`;
        // }
        let response = null;
        if (isBodyRequired) {
          // debugger
          response = await fetch(this.manageUrl(url), {
            method: method,
            headers: headers,
            // mode: 'no-cors',
            body: JSON.stringify(data)
          });
        }
        else {
          // debugger
          response = await fetch(this.manageUrl(url), {
            // mode: 'no-cors',
            headers: headers,
            method: method,
            // body: data ? data: null
          })
        }
        return this.commonResponse(response);
      }
      catch (e) {
        // debugger
        if (localStorage.length === 0) {
          window.location.reload();
        }
      }
    }
  }
  async GetData(url) {
    let isBodyRequired = false;
    let data = null;
    return this.requestFunction(url, method = "GET", isBodyRequired, data);
  }

  async getAPI(url) {
    // const host = apiConstants.api_host;
    // const version = apiConstants.api_version;
    // var url = new URL(host + version + route);
    // let headersParameters = utilityConstants.headerParameters;
    // headersParameters.Authorization = authorization;
    // headersParameters.localAuthorization =
    //   "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJTb21lICBTeXN0ZW0iLCJpYXQiOjE1NTg2MzY2MTAsImV4cCI6MTU5MDE3MjYxMCwiYXVkIjoic29tZWNsaWVudEBzb21lY2xpZW50ZG9tYWluLmNvbSIsInN1YiI6InNvbWVzeXN0ZW1Ac29tZXN5c3RlbWRvbWFpbi5jb20iLCJGaXJzdE5hbWUiOiJGTkFNRSIsIkxhc3ROYW1lIjoiTE5BTUUiLCJFbWFpbCI6InNvbWVjb25zdW1lckBzb21lZG9tYWluLmNvbSIsIlJvbGUiOiJVc2VyIn0.5HoQJn28n-Ic-Nwwm9xGuN_oeNoYdNkJJLE_2-gN9aM";

    // if (urlParameters != null)
    //   Object.keys(urlParameters).forEach((key) =>
    //     url.searchParams.append(key, urlParameters[key])
    //   );
    var headers = {
      "Content-Type": "application/json",
      Accept: 'application/json',
      responseType: 'json'
    };
    debugger
    let response = await fetch(url, {
      method: "GET",
      headers: headers,
    });
    console.log(response["body"], "<------ body")
    console.log(response.headers.get("Content-Type"), "<------ response header")

    // response =  JSON.Dump(response["body"])
    response = await response.json();

    // await SRCLogger.api({
    //   route: route,
    //   apirequest: urlParameters,
    //   apiresponse: response,
    // });
    return response;
  };


  async GetBlob(url, addAuthHeader = true) {
    if (this.calculateExpireTime() !== SESSION_EXPIRED) {
      var headers = { "Content-Type": "application/json" };
      try {
        if (addAuthHeader) {
          headers["Authorization"] = `Bearer ${this.getAuthHeader()}`;
        }
        const response = await fetch(this.manageUrl(url), {
          mode: 'cors',
          headers: headers,
          method: "GET",
        });
        return await response.blob();
      }
      catch (e) {
      }
    }
  }
  async PostBlob(url, data, addAuthHeader = true) {
    var headers = { "Content-Type": "application/json" };
    try {
      if (addAuthHeader) {
        headers["Authorization"] = `Bearer ${this.getAuthHeader()}`;
      }
      const response = await fetch(this.manageUrl(url), {
        method: "POST",
        headers: headers,
        mode: 'cors',
        body: JSON.stringify(data)
      });
      return await response.blob();
    }
    catch (e) { }
  }
  async PostData(url, data) {
    debugger
    let isBodyRequired = true;
    return this.requestFunction(url, method = "POST", isBodyRequired, data);
  }
  async PutData(url, data, addAuthHeader = true) {
    let isBodyRequired = true;
    return this.requestFunction(url, addAuthHeader, method = "PUT", isBodyRequired, data);
  }
  async deleteData(url, addAuthHeader = true) {
    let isBodyRequired = false;
    let data = null;
    return this.requestFunction(url, addAuthHeader, method = "DELETE", isBodyRequired, data);
  }
  async patchData(url, data, addAuthHeader = true) {
    let isBodyRequired = true;
    return this.requestFunction(url, addAuthHeader, method = "PATCH", isBodyRequired, data);
  }
  async patchInvoiceData(url, addAuthHeader = true) {
    let isBodyRequired = false;
    let data = null;
    return this.requestFunction(url, addAuthHeader, method = "PATCH", isBodyRequired, data);
  }
  async deleteDataApiKey(url, data, addAuthHeader = true) {
    let isBodyRequired = true;
    return this.requestFunction(url, addAuthHeader, method = "DELETE", isBodyRequired, data);
  }
  manageUrl(url) {
    if (url.indexOf('http') >= 0)
      return url;
    let furl = `${this._baseUrl}/${url}`;
    console.log(furl, "<----- furl")
    return furl;
  }
  async commonResponse(response) {
    const responsedata = await response.json();
    if (response.status >= 400 && response.status < 600) {
      if (response.status === 403) {
        window.location.reload();
        return;
      }
      return Object.assign(Object.assign({ success: false, status: response.status }, response), { data: responsedata });
    }
    else {
      return { success: true, status: response.status, data: responsedata };
    }
  }
}
