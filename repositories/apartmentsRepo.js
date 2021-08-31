const url = 'apartment'

export const $apartmentsRepo = request => ({
  getByFilters: filters => request({
    method: 'post',
    url: `${url}/filters`,
    data: filters
  }),

  get: () => request({
    method: 'get',
    url
  })

})
