import BaseModule from './base.js'

const url = 'local_api/tag'

class Tag extends BaseModule {
  constructor() {
    super(url, 3000);
  }

  Register(name, description) {
    return this.instance.post('/register', {
      "name": name,
      "description": description,
      "icon_url": ''
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

  Delete(id) {
    return this.instance.post('/delete', {
      "id": id,
    })
  }

  test() {
    console.log('jjj')
  }
}

export default new Tag()
