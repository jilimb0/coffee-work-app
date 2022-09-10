import axios from "axios"

const _API = "http://0.0.0.0:8080/v1/items"

// GET request for API to get items by category
export function getItems(limit = 1, page = 1, category = "DRINK") {
  const res = axios.get(
    `${_API}?limit=${limit}&page=${page}&category=${category}`
  )
  return res
}

// GET request for API to get item by id
export function getItemById(id) {
  const res = axios.get(`${_API}/${id}`)
  return res
}

// POST request for API to create items
export function postItem(body) {
  const res = axios.post(`${_API}`, body)
  return res
}

// PATCH request for API to change item by id
export function patchItemById(id, body) {
  const res = axios.patch(`${_API}/${id}`, body)
  return res
}

// DELETE request for API to delete item by id
export function deleteItemById(id) {
  const res = axios.delete(`${_API}/${id}`)
  return res
}
