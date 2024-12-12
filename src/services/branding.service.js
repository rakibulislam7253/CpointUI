import axios from "axios";

const BASE_URL = process.env.VUE_APP_API_BASE_URL;
const API_URL = BASE_URL + "branding";

class BrandingService {
  getBrandingInfo() {
    return axios.get(API_URL + "/all", { showLoader: false });
  }

  updateBranding(
    keyValues,
    bannerImg,
    adminLogoImg,
    memberLogoImg,
    adminMainLogoImg,
    memberMainLogoImg
  ) {
    var Data = {
      keyValues,
      bannerImg,
      adminLogoImg,
      memberLogoImg,
      adminMainLogoImg,
      memberMainLogoImg,
    };
    return axios.post(API_URL + "/update", Data);
  }

  getDomainName() {
    return axios.get(API_URL + "/get-custom-domain", { showLoader: false });
  }

  updateDomainName(domainName) {
    return axios.post(
      API_URL + "/update-custom-domain?domainName=" + domainName
    );
  }
}

export default new BrandingService();
