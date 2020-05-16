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
}

export default new User()
