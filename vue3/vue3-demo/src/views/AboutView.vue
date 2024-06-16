<template>
  <div class="about">
    <h1>This is an about page</h1>
    <Hello name="Vue 3 + Vite" />
  </div>
</template>
<script setup lang="ts">
import Hello from '@/components/Hello';

</script>
<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
