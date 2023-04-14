import axios from "axios";
import { getInventoryApiHost } from "../../hostnames";

export default {
  fetchProducts: async () => {
    return await axios.get(`${getInventoryApiHost()}/products/v1`);
  },

  removeItem: async (id: string) => {
    return await axios.put(
      `${getInventoryApiHost()}/products/v1/remove-item/${id}`
    );
  },
};
