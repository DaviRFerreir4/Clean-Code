// Evite negações

// const isUserOlderThan18Years = true
// const doesUserLivesInBrazil = true

// if (!isUserOlderThan18Years && !doesUserLivesInBrazil) {}

const isUserYoungerThan18Years = true
const doesUserLivesOutsideBrazil = true

if (isUserYoungerThan18Years && doesUserLivesOutsideBrazil) {}

// Early return X Else

function isUserOlderThan18Years(user) {
  if (!user) {
    return { error: true }
  } /* else {
    return user.age >= 18
    } */
  return user.age >= 18
}

// Evite condicionais aninhadas

let user

// const isUserOfLegalAge = user.age >= 18 ? user.age === 18 ? '' : '' : ''

// if (user.age > 18) {
//   if (user.age === 18) {}
// }

if (!user.age) {
  return
}

if (user.age === 18) {
  return
}