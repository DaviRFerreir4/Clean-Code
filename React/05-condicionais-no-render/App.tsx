// @ts-nocheck

import { useState } from "react"
import { Header } from './components/Header'
import { Footer } from './components/Header'
// import { Input } from './components/Input.old'
import * as Input from './components/Input'

export function App() {
  const [todos, setTodos] = useState([])
  const [isTodoListEmpty, setIsTodoListEmpty] = useState(todos.length <= 0)

  useEffect(() => {
    // carregar uma lista de todos do backend
  })

  function handleCreateNewTodo() {}

  return (
    <div>
      <Header onCreateNewTodo={handleCreateNewTodo} />

      <Input.Root>
        <Input.Label text="To-do" htmlFor="todo-input" />
        <Input.FormField type="text" id="todo-input" name="todo-input" />
        <Input.Icon>
          <div />
        </Input.Icon>
        <Input.ErrorMessage message="Digite o texto do to-do" />
      </Input.Root>

      {/* <Input
        label="To-do"
        errorMessage="Digite o texto do to-do"
        Icon={<div />}
      /> */}

      <main>
        <h2>Advantages</h2>

        <section>
          <div>
            <h3>Blazing fast</h3>
            <p>This to-do list app is insanely fast.</p>
          </div>

          <div>
            <h3>No CSS</h3>
            <p>Clean and flat design with no CSS.</p>
          </div>
        </section>

        {/* {todos.length <= 0 */
        isTodoListEmpty ? (
          <p>Zero to-do registred</p>
        ) : (
          <ul>
            {todos.map((todo) => <li key={todo}>{todo}</li>)}
          </ul>
        )
      }
      </main>

      <Footer />
    </div>
  )
}