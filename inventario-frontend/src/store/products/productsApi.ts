import axios from "axios";
import { getInventoryApiHost } from "../../hostnames";

export default {
  fetchProducts: async () => {
    return await axios.get(`${getInventoryApiHost()}/products/v1`);
  },
};
