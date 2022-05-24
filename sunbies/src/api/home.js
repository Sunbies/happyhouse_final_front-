import { apiInstance } from "./index.js";

const api = apiInstance();

const getLatestDeals = () => api.get(`/main/latestdeals`);

export { getLatestDeals };
