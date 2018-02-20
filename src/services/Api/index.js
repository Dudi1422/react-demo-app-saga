import serverApi from './api'
import fixtureApi from './fixtureApi'
import config from '../../config'

export default config.useFixtures ? fixtureApi:serverApi.create()