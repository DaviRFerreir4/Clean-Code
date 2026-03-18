// function createUserRoute(body) {
//   // validações
//   createUserController(body)
// }

// function createUserController(data) {
//   usersRepository.create(data)
// }

// const usersRepository = {
//   create(data) {}
// }

// function createUserRoute(body) {
//   const { name, email, password } = body
//   // validações
//   createUserController({ name, email, password })
// }

// Enviar dados no formato de objeto e desestrutrar na função
createUserRoute({
  body: {
    name: 'Davi',
    email: 'davi@email.com',
    password: 'drowssap',
  },
  params: {
    id: 1
  }
})

function createUserRoute({body, params}) {
  // Desestruturar somente o que será usado (sem isso no typescript geraria erro, mas em produção passaria)
  const { name, email, password } = body
  // validações
  createUserController({ name, email, password })
}

function createUserController(data) {
  const { name, email, password } = data

  usersRepository.create({ name, email, password })
}

const usersRepository = {
  create(data) {
    const user = createUserOnDatabase()

    // Retornar dados no formato de objeto
    return {
      user
    }
  }
}