<template>
  <form class="my-4" @submit.prevent="editTask">
    <div class="mx-auto flex items-center bg-white p-2 rounded-md shadow-md">
      <div class="flex-grow m-1 ml-3">
        <input
          v-model="name"
          class="w-full focus:outline-none"
          type="text"
          placeholder="What task do you need to complete?"
        />
        <input
          v-model="description"
          class="w-full focus:outline-none"
          type="text"
          placeholder="description"
        />
      </div>
      <div class="flex-shrink-0">
        <button
          type="submit"
          class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-3 rounded"
        >
          Add new
        </button>
      </div>
    </div>
  </form>

</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

import { useStore } from '@/store'
import { TodoItem } from '@/store/state'
import { MutationType } from '@/store/mutations'

export default defineComponent({
  setup() {
    const name = ref('')
    const description = ref('')
    const store = useStore()
    
    const editTask = () => {
      if (name.value === '') return
      if (description.value === '') return

      const item: TodoItem = {
        id: Date.now(),
        name: name.value,
        description: description.value,
        price: 100,
        completed: false
      }
      store.commit(MutationType.EditTask, item)
      name.value = '' 
      description.value = '' 
    }
    return { editTask, name, description }
  }
})
</script>
