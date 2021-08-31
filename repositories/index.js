import { $apartmentsRepo } from '~/repositories/apartmentsRepo'

export default ({ $api }, inject) => {
  inject('apartmentsRepo', $apartmentsRepo($api))
}
