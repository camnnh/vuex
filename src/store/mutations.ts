import { MutationTree } from 'vuex'
import { State, TodoItem } from './state'

export enum MutationType {
  CreateItem = 'CREATE_ITEM',
  SetItems = 'SET_ITEMS',
  SetItem = 'SET_ITEM',
  CompleteItem = 'COMPLETE_ITEM',
  EditItem = 'EDIT_ITEM',
  SetLoading = 'SET_LOADING'
}

export type Mutations = {
  [MutationType.CreateItem](state: State, item: TodoItem): void
  [MutationType.SetItems](state: State, items: TodoItem[]): void
  [MutationType.SetItem](state: State, item: TodoItem): void
  [MutationType.CompleteItem](
    state: State,
    item: Partial<TodoItem> & { id: number }
  ): void
  [MutationType.EditItem](
    state: State,
    item: Partial<TodoItem> & { id: number }
  ): void
  [MutationType.SetLoading](state: State, value: boolean): void
}

export const mutations: MutationTree<State> & Mutations = {
  [MutationType.CreateItem](state, item) {
    // console.log(item)
    state.items.unshift(item)
  },
  [MutationType.SetItems](state, items) {
    state.items = items
  },
  [MutationType.SetItem](state, item) {
    state.item = item
    console.log(item);
  },
  [MutationType.CompleteItem](state, newItem) {
    const item = state.items.findIndex(s => s.id === newItem.id)
    
    if (item === -1) return
    state.items.splice(newItem.id, 1);
    // state.items[item] = { ...state.items[item], ...newItem }
    // dung ham array map 
    // const array1 = [1, 4, 9, 16];
    // pass a function to map
    // const map1 = array1.map(x => x * 2);

    // console.log(map1);
    // expected output: Array [2, 8, 18, 32]
    
  },
  [MutationType.EditItem](state, newItem) {
    const item = state.items.findIndex(s => s.id === newItem.id)
    console.log(newItem); 
    if (item === -1) return
    
    // state.items[item] = { ...state.items[item], ...newItem }
    
  },
  [MutationType.SetLoading](state, value) {
    state.loading = value
  }
}
