// Deixar claro o que uma função ou variável representa
const users = ['Davi', 'Flávia', 'Sara', 'Paulo']

// const filtered = users.filter((u) => {
//   return u.startsWith('D')
// })

const usersStartingWithLetterD = users.filter((user) => {
  return user.startsWith('D')
})

// Evitar nomes genéricos
function getUsers() {
  // const data = getUsersFromDatabase()
  const users = getUsersFromDatabase()

  return users
}