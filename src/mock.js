import Mock from 'mockjs'
Mock.mock(
  '/react/login',
  {
    'data':{
      'token|10':  /[a-z][A-Z][0-9]/,
    },
    'code': '200'
  }
)
//get
Mock.mock(
  '/react/table/list',
  {
    'data|15': [{
        key: '@string',
        name: '@LAST',
        'age|1-100': 1,
        address: Mock.Random.city(),
        'tags|2-5': [
          /[a-z][A-Z]/
        ],
    }],
    'code': '200'
  }
)
export default Mock;
