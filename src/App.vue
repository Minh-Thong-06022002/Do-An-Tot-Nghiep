<script setup lang="ts">
import {onBeforeMount} from 'vue'
import AOS from 'aos'
import { RouterView } from 'vue-router'
import ConfirmToastContext from './context/ConfirmToastContext.vue';

onBeforeMount(() => {
    AOS.init({
        throttleDelay: 120,
        duration: 800,
        offset: 0,
        once: true,
    });
});
</script>

<template>
  <ConfirmToastContext>
    <RouterView />
  </ConfirmToastContext>
</template>
