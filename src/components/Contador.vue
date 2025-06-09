<template>
  <div>
    <p>Contador: {{ count }}</p>
    <button @click="count++">Sumar</button>
  </div>
</template>

<script>
export default {
  data() {
    return { count: 0 };
  }
}
</script>