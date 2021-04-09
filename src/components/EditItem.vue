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
          Save
        </button>
      </div>
    </div>
  </form>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from "vue";

import { useStore } from "@/store";
import { MutationType } from "@/store/mutations";

export default defineComponent({
  setup() {
    const id = ref(0);
    const name = ref("");
    const description = ref("");
    const store = useStore();

    const item = computed(() => store.state.item);

    if (item.value) {
      console.log(item, "item");
      id.value = item.value.id || 0;
      name.value = item.value.name || "";
      description.value = item.value.description || "";
    }

    const editTask = () => {
      if (name.value === "") return;
      if (description.value === "") return;

      const item = {
        id: id.value,
        name: name.value,
        description: description.value,
        price: 100,
        completed: false,
      };
      store.commit(MutationType.EditItem, item);

      // Reset to back to add form
      store.commit(MutationType.SetItem, null);
    };
    return { editTask, name, description };
  },
});
</script>
