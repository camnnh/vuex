export type TodoItem = {
  id: number
  name: string
  description: string
  price: number
  completed: boolean
}

export type State = {
  loading: boolean
  items: TodoItem[]
  item: TodoItem | null
}

export const state: State = {
  loading: false,
  items: [],
  item: null,
}
