<script setup lang="ts">
import ChatBox from '@/components/ChatBox.vue';
import FooterView from '@/components/Footer/FooterView.vue';
import HeaderView from '@/components/Header/HeaderView.vue';
</script>

<template>
    <main class="main">
        <HeaderView />
        <div class="rest">
            <div class="contents">
                <router-view></router-view>
            </div>
            <FooterView />
            <ChatBox />
        </div>
    </main>
</template>

<style>
@import '@/assets/sass/DefaultLayout.scss';
</style>
