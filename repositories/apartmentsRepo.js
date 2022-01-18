const url = 'apartment'

export const $apartmentsRepo = request => ({
  getByFilters: data => request({
    method: 'POST',
    url: `${url}/filter`,
    data
  }),

  get: () => request({
    method: 'get',
    url
  })

})
