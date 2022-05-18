const Enforcer = require('openapi-enforcer')
const {argv} = require('process')

async function run () {
  const [openapi, error, warning] = await Enforcer(argv[2], {
    fullResult: true
  })
  if (error !== undefined) console.error(error)
  if (warning !== undefined) console.warn(warning)
  if (openapi !== undefined) console.log('Document is valid')
}

run().catch(console.error)

//'/Users/er.syedsheeraz/openspec/test.yaml'