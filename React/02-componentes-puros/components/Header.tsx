// @ts-nocheck

interface HeaderProps {
  onCreateNewTodo: () => void
}

export function Header({ onCreateNewTodo }: HeaderProps) {
  return (
    <header>
      <h1>My new revolutionary to-do list</h1>

      <button onClick={onCreateNewTodo}>Add new todo</button>
    </header>
  )
}