<script setup>
import HeaderComponent from "@/components/HeaderComponent.vue";
import FooterComponent from "@/components/FooterComponent.vue";
</script>
<!-- layouts/DefaultLayout.vue -->
<template>
  <div class="min-h-screen flex flex-col">
    <!-- Header -->
    <HeaderComponent />

    <!-- Main Content -->
    <main class="flex-grow">
      <slot />
    </main>

    <!-- Footer -->
    <FooterComponent />
  </div>
</template>
