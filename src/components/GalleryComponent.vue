<script setup>
import { ref, onMounted } from "vue";
import { useMotion } from "@vueuse/motion";

const galleryRefs = ref([]);

const galleryImages = [
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrFaOicEgOW61ERL4xeoLoz2QseO6zEfxLIg&s",
  "https://thumbs.dreamstime.com/b/driving-lesson-instructor-sitting-car-next-to-female-student-driver-driving-lesson-instructor-sitting-car-next-to-187847256.jpg",
  "https://www.shutterstock.com/image-vector/male-driving-instructor-teaching-how-600nw-1932529790.jpg",
  "https://img.freepik.com/premium-vector/driving-school-with-education-process-car-learning-drive-get-driver-license-illustration_2175-10066.jpg",
  "https://www.shutterstock.com/image-vector/instructor-guides-man-through-precise-600nw-2412940739.jpg",
  "https://thumbs.dreamstime.com/b/driving-school-learner-car-instructor-vector-illustration-50989621.jpg",
  "https://img.freepik.com/premium-vector/driving-instructor-teach-happy-young-woman-drive-car-driving-school-concept-driver-s-license-traffic-rules-test-vector-flat-illustration-natural-landscape-background_515826-9.jpg",
  "https://th-i.thgim.com/public/news/cities/Delhi/article22289646.ece/alternates/FREE_1200/28DETRACK",
  "https://citizen.goapolice.gov.in/documents/10184/11760/traff-sig1.jpg/00d456cb-2897-4914-a780-e0285da1cb12?t=1429603097701",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQpysrOHkyz3HUDbzlu-w_VZQYhnai1HoBQQ&s",
  "https://www.shutterstock.com/image-photo/cute-character-3d-image-asian-260nw-2624056821.jpg",
  "https://img.freepik.com/premium-photo/funny-illustrated-mechanic-car-3d-rendered_183364-50240.jpg?semt=ais_hybrid&w=740"
];

onMounted(() => {
  galleryRefs.value.forEach((el, index) => {
    useMotion(el, {
      initial: { opacity: 0, y: 60, scale: 0.95 },
      enter: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
          type: "spring",
          stiffness: 150,
          delay: index * 0.1,
        },
      },
    });
  });
});
</script>

<template>
  <section class="bg-yellow-100 text-black dark:bg-gray-950 dark:text-white py-20 px-6 sm:px-10">
    <div class="text-center mb-14">
      <h2 class="text-4xl font-extrabold text-black dark:text-yellow-400 mb-4">
        Gallery
      </h2>
      <p class="text-gray-700 dark:text-gray-300 max-w-2xl mx-auto text-lg">
        Real moments from training, practice sessions and amazing students!
      </p>
    </div>

    <div class="grid sm:grid-cols-2 xl:grid-cols-3 gap-6 max-w-7xl mx-auto">
      <div
        v-for="(img, index) in galleryImages"
        :key="index"
        ref="galleryRefs"
        class="overflow-hidden rounded-2xl shadow-xl border border-yellow-400/10 group relative"
      >
        <img
          :src="img"
          alt="gallery"
          class="w-full h-64 object-cover transition-transform duration-[8000ms] group-hover:scale-110 animate-zoomInfinite"
        />
        <div
          class="absolute inset-0 bg-black/40 dark:bg-black/60 opacity-0 group-hover:opacity-100 transition duration-500 flex items-center justify-center"
        >
          <p class="text-white text-lg font-semibold tracking-wide dark:text-yellow-400">
            Amaze Moments
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
@keyframes zoomInfinite {
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
}
.animate-zoomInfinite {
  animation: zoomInfinite 15s ease-in-out infinite;
}
</style>
