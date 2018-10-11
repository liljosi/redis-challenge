
const lock = new Auth0Lock(
  'vdqn8nuvXDLvXdyPVSwlnQcUVkOjsiHb',
  'ciudades.eu.auth0.com'
)
lock.show()

lock.on('authenticated', function (authResult) {
  console.log(authResult)
  lock.getUserInfo(authResult.accessToken, function (error, profile) {
    if (error) {
      throw error
    } else {
      
    }
  })
})

module.exports = getUserInfo
