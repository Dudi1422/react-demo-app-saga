export default {
    // Functions return fixtures
    login: (email, password) => {
      return {
        ok: true,
        data: ''
      }
    },
    getSchools: () => {
      return {
        ok: true,
        data: '' //require('../Fixtures/mockSchoolsApi.json')
      }
    }, 
    createStore: (storeData) => {
      return {
        ok: true,
        data: ''
      }
    },  
  }
  