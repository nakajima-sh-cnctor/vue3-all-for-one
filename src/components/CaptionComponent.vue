<script setup>
defineProps({
  caption: {
    type: String,
    required: true
  }
})
</script>
<template>
  <div>
    <p class="font-weight-bold text-caption text-secondary">{{ caption }}</p>
    <!-- キャプションが必要な入力フォームをスロットに入れる -->
    <slot></slot>
  </div>
</template>
