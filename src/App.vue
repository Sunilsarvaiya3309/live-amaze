<script setup>
import GlobalHeader from "@/components/HeaderComponent.vue";
import GlobalFooter from "@/components/FooterComponent.vue";
import ScrollToTop from "@/components/ScrollToTop.vue";
import SplashScreen from "@/components/SplashScreen.vue";
import { useDarkMode } from "@/composables/useDarkMode";
import { ref, onMounted } from "vue";
import AnimatedCursor from "./components/AnimatedCursor.vue";

const { isDark } = useDarkMode();
const splashVisible = ref(true);

onMounted(() => {
  // Allow the splash screen to complete its animation
  setTimeout(() => {
    splashVisible.value = false;
  }, 5000); // Match with SplashScreen animation timing
});
</script>

<template>
  <Suspense>
    <SplashScreen v-if="splashVisible" />

    <div
      v-else
      :class="[
        'min-h-screen flex flex-col transition-colors duration-700 ease-in-out',
        isDark ? 'bg-zinc-900 text-white' : 'bg-white text-black',
      ]"
    >
      <AnimatedCursor />
      <GlobalHeader />
      <main class="flex-grow">
        <router-view />
        <ScrollToTop />
      </main>
      <GlobalFooter />
    </div>
  </Suspense>
</template>
<style>
/* Global scrollbar styles */
::-webkit-scrollbar {
  width: 8px;
  height: 8px;
}

::-webkit-scrollbar-track {
  background: #000000; /* black background */
}

::-webkit-scrollbar-thumb {
  background-color: #ffd500; /* yellow thumb */
  border-radius: 10px;
}

/* Firefox support */
* {
  scrollbar-width: thin;
  scrollbar-color: #ffd500 #000000;
}
</style>
