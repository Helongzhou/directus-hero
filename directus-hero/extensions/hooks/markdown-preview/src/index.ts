import { defineHook } from '@directus/extensions-sdk'

export default defineHook(({ filter, action }, { exceptions }) => {
  const { InvalidPayloadException } = exceptions

  filter(
    'guide.items.read',
    (input, { collection }, { schema, database, accountability }) => {
      if (!Array.isArray(input)) return
	  if (accountability?.admin) return
      //在哪里定义dataMap?
      const dataMap: Record<string, string> = {
        email: 'hello@example.com',
        name: 'Alice'
      }
      //过滤变量
      const prefix: string = '{{'
      const suffix: string = '}}'
      const regex: RegExp = new RegExp(prefix + '(\\w+)' + suffix, 'g')
      Object.keys(input[0]).forEach((key) => {
        if (input[0][key] && typeof input[0][key] === 'string') {
          const matches = input[0][key].match(regex)
          if (Array.isArray(matches)) {
            input[0][key] = input[0][key].replace(regex, replaceVar)
          }
        }
      })
      function replaceVar(match: string, p1: string): string {
        return dataMap[p1] || match //dataMap没定义则不替换
      }
      return input
    }
  )

  action('items.create', () => {
    console.log('Item created!')
  })
})
