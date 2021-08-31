export default function ({ $axios }, inject) {
  const $api = $axios.create({
    baseURL: 'http://localhost:5000/api',
    timeout: 5000,
    headers: {
      'Content-Type': 'application/json'
    }
  })

  $api.interceptors.response.use(
    (response) => {
      return response.data.data
    }
  )

  inject('api', $api)
}
