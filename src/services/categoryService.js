import http from "./httpService";
import { apiUrl } from "../config.json";

const apiEndPoint = apiUrl + "/categories";

// export function saveProduct(product) {
//   const id = product.get("_id");
//   if (id) {
//     product.delete("_id");
//     return http.put(apiEndPoint + "/" + id, product);
//   }

//   return http.post(apiEndPoint, product);
// }

export function getCategories() {
  return http.get(apiEndPoint);
}

export function getCategoryImage(id) {
    return http.get(`${apiEndPoint}/${id}/image`);
    // return http.get(apiEndPoint + "/" + id + "/" + "image");
  }

// export function getProductImage(id) {
//   return http.get(apiEndPoint + "/" + id + "/" + "image");
// }

// export function getProduct(id) {
//   return http.get(apiEndPoint + "/" + id);
// }

// export function deleteProduct(id) {
//   return http.delete(apiEndPoint + "/" + id);
// }