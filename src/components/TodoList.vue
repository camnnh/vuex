<template>
  
  <table class="table" style="width: 100%; text-align:justify">
    <thead>
      <tr>
        <th scope="col">Name</th>
        <th scope="col">Decription</th>
        <th scope="col">Price</th>
        <th scope="col">Action</th>
      </tr>
    </thead>
    <tbody>
       <TodoItem v-for="item in items" :key="item" v-bind="item" />
    </tbody>
</table>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import { useStore } from '@/store'
import TodoItem from './TodoItem.vue'

export default defineComponent({
  components: { TodoItem },
  setup() {
    const store = useStore()
    const items = computed(() => store.state.items)
    return { items }
  }
})
</script>
