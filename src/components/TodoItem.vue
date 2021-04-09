<template>
 
        <tr>
          <td>{{ name }}</td>
          <td>{{ description }}</td>
          <td>{{ price }}</td>
          <td>
            <button v-on:click="setedit()"
              class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-3 rounded" >
              Edit
            </button>
            
            <button v-on:click="greet"
              class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-3 rounded" >
              Delete
            </button>
            
          </td>
        </tr>
 
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import { useStore } from '@/store'
import { MutationType } from '@/store/mutations'

export default defineComponent({
  props: {
    id: { type: Number, required: true },
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: false },
    completed: { type: Boolean, required: true }
  },
  setup(props) {
    const store = useStore()
    const greet = () => {
      store.commit(MutationType.CompleteItem, {
        id: props.id,
       
      })
    }

    const setedit = () => {
      store.commit(MutationType.SetItem, {
        id: props.id,
        name: props.name,
        description: props.description,
        price: props.price || 0,
        completed: true
      })
    }
    const edit = () => {
      store.commit(MutationType.EditItem, {
        id: props.id,
        name: props.name,
        description: props.description,
        
      })
    }
    const completedCount = computed(() => store.getters.completedCount)
    return { greet, setedit ,edit }

  }

  
})
</script>
