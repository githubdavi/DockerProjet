import axios from "axios";

const API_URL = import.meta.env.VITE_PRODUCT_SERVICE_URL || "/api";

export const cartService = {
  async getCart() {
    const token = localStorage.getItem("token");
    const userId = localStorage.getItem("userId");

    const response = await axios.get(`${API_URL}/cart`, {
      headers: {
        Authorization: `Bearer ${token}`,
        userId: userId,
      },
    });
    console.log(response.data);
    return response.data;
  },

  async addToCart(productId, headers) {
    const token = localStorage.getItem("token");
    const userId = localStorage.getItem("userId");

    const response = await axios.post(
      `${API_URL}/cart/add`,
      { userId, productId },
      headers
    );
    return response.data;
  },

  async removeFromCart(productId, headers) {
    const token = localStorage.getItem("token");
    const userId = localStorage.getItem("userId");

    const response = await axios.delete(`${API_URL}/cart/remove/${productId}`, headers);
    return response.data;
  },
};
