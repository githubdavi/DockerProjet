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

  async addToCart(productId) {
    const token = localStorage.getItem("token");
    const userId = localStorage.getItem("userId");

    const response = await axios.post(
      "/api/cart/add",
      { userId, productId },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );
    return response.data;
  },

  async removeFromCart(productId) {
    const token = localStorage.getItem("token");
    const userId = localStorage.getItem("userId");

    const response = await axios.delete(`/api/cart/remove/${productId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
        userId: userId,
      },
    });
    return response.data;
  },
};
