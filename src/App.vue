<script setup lang="ts">
import { onBeforeMount, onMounted } from 'vue';
import AOS from 'aos';
import { RouterView } from 'vue-router';
import ConfirmToastContext from './context/ConfirmToastContext.vue';
import { useSession } from './stores';

const { setSessions } = useSession();

onBeforeMount(() => {
    AOS.init({
        throttleDelay: 120,
        duration: 800,
        offset: 0,
        once: true,
    });
});

onMounted(() => {
    const item = localStorage.getItem('userDataMT');

    if (item) {
        const data = JSON.parse(item);

        console.log(data);

        if (data.isAuth) {
            setSessions(data.isAuth, data.user);
        }
    }
});
</script>

<template>
    <ConfirmToastContext>
        <RouterView />
    </ConfirmToastContext>
</template>
