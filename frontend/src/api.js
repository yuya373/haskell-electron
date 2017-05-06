// @flow

import axios from 'axios'

const host = "127.0.0.1:8080"

const buildUrl = (path) => `http://${host}${path}`

export function get(path, options = {}) {
  return axios.get(buildUrl(path), options)
}
