export default function ({ $axios }, inject) {
  const $api = $axios.create({
    baseURL: process.env.apiUrl,
    timeout: 5000,
    headers: {
      'Content-Type': 'application/json'
    }
  })

  $api.interceptors.request.use(
    (config) => {
      return config
    },
    (error) => {
      return Promise.reject(error)
    }
  )

  $api.interceptors.response.use(
    (response) => {
      return response.data
    }
  )

  inject('api', $api)
}
