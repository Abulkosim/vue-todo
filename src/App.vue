<script>

export default {
  data() {
    return {
      todos: [],
    }
  },

  methods: {
    createTodo() {
      const newTodo = {
        text: this.text,
        close: '+',
        isVisible: true
      }
      if (this.text != '' && this.text != ' ') {
        this.todos.push(newTodo);
      }
      this.text = '';
      this.isVisible = true;
    },

    deleteTodo() {
      isVisible = !isVisible;
    }
  }
}
</script>

<template>
  <div class="flex flex-col bg-sky-500 w-[500px] text-center mx-auto mt-5">
    <h1 class="font-semibold m-5 text-4xl cursor-pointer text-white">Todo App</h1>
    <input @keyup.enter="createTodo" @input="text = $event.target.value" v-model="text" type="text"
      placeholder="Add a to-do"
      class="w-full border border-sky-500 placeholder:slate-900 text-sky-500 py-2 px-3 text-2xl outline-none outline">
  </div>
  <div v-for="todo in todos" class="flex flex-col w-[500px] mx-auto text-sky-500 text-2xl">
    <div v-if="todo.isVisible" class="h-[50px] relative border-[1px] border-sky-500 p-2">
      <span>{{ todo.text }}</span>
      <span @click="todo.isVisible = !todo.isVisible"
        class="absolute right-0 bottom-[12px] text-[48px] text-sky-500 rotate-45 cursor-pointer">{{ todo.close }}</span>
    </div>
  </div>
</template>

<style scoped>
template {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}
</style>