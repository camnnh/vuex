import { ActionContext, ActionTree } from 'vuex'
import { Mutations, MutationType } from './mutations'
import { State } from './state'

export enum ActionTypes {
  GetTodoItems = 'GET_ITEMS'
}

type ActionAugments = Omit<ActionContext<State, State>, 'commit'> & {
  commit<K extends keyof Mutations>(
    key: K,
    payload: Parameters<Mutations[K]>[1]
  ): ReturnType<Mutations[K]>
}

export type Actions = {
  [ActionTypes.GetTodoItems](context: ActionAugments): void
}

const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms))

export const actions: ActionTree<State, State> & Actions = {
  async [ActionTypes.GetTodoItems]({ commit }) {
    commit(MutationType.SetLoading, true)

    await sleep(1000)

    commit(MutationType.SetLoading, false)
    commit(MutationType.SetItems, [
      {
        id: 1, name: 'Angular', description: 'Superheroic JavaScript MVW Framework.', price: 100,
        completed: true
      },
      {
        id: 2, name: 'Ember', description: 'A framework for creating ambitious web applications.', price: 100,
        completed: false
      },
      {
        id: 3, name: 'React', description: 'A JavaScript Library for building user interfaces.', price: 100,
        completed: false
      }
    ])
  }
}
