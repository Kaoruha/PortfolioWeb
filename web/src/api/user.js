import BaseModule from './base.js'

const url = 'local_api/user'

class User extends BaseModule {
  constructor() {
    super(url, 3000);
  }

  Login(account, password) {
    return this.instance.post('/login', {
      "account": account,
      "password": password
    })
  }

  Register(account, password) {
    return this.instance.post('/register', {
      "account": account,
      "password": password
    })
  }

  Filter(filter, descending) {
    return this.instance.post('/filter', {
      "start_row": 0,
      "count": 2000,
      "account_filter": filter,
      "sort_by": "id",
      "descending": descending
    })
  }

  test() {
    console.log('jjj')
  }
}

export default new User()
