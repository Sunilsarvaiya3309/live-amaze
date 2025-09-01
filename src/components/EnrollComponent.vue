<script setup>
import { ref, computed, watch } from "vue";
import ThemedListbox from "./ThemedListbox.vue";

const showModal = ref(false);
const name = ref("");
const phone = ref("");
const category = ref(""); // Driving, RTO, or Track
const car = ref("");
const rtoService = ref("");
const price = ref("");

const carOptions = [
  { name: "Celereio-Automatic", price: "Price - 5500/-" },
  { name: "WagonR", price: "Price - 5000/-" },
  { name: "Swift", price: "Price - 5500/-" },
  { name: "Honda Amaze", price: "Price - 6500/-" },
  { name: "Renault Kiger", price: "Price - 7500/-" },
];

const rtoOptions = [
  "Learning Licence",
  "Driving Licence",
  "Renew Licence",
  "Other RTO Issue",
];

const steps = [
  "Inquiry",
  "Trial Class",
  "Enrollment",
  "Learning",
  "RTO Help",
  "Get License",
];

const showCarSelect = computed(() => category.value === "Driving");
const showRTOSelect = computed(() => category.value === "RTO");
const showPrice = computed(() => showCarSelect.value && car.value);

watch(car, (selectedCar) => {
  const selected = carOptions.find((c) => c.name === selectedCar);
  price.value = selected ? selected.price : "";
});

function openModal() {
  showModal.value = true;
}

function closeModal() {
  showModal.value = false;
}

function submitForm() {
  if (!name.value || !phone.value || !category.value) {
    alert("Please fill in all required fields.");
    return;
  }

  const phoneRegex = /^[6-9]\d{9}$/;
  if (!phoneRegex.test(phone.value)) {
    alert("Please enter a valid 10-digit phone number.");
    return;
  }

  const businessNumber = "919227575667";

  let message = `Hello, my name is ${name.value}. My contact number is ${phone.value}. `;

  if (category.value === "Driving") {
    if (!car.value) {
      alert("Please select a car.");
      return;
    }
    message += `I want to enroll for driving lessons with car: ${car.value}.`;
  } else if (category.value === "RTO") {
    if (!rtoService.value) {
      alert("Please select an RTO service.");
      return;
    }
    message += `I have a query related to RTO service: ${rtoService.value}.`;
  } else if (category.value === "Track Practice") {
    message += `I'm interested in Track Practice sessions.`;
  }

  const encodedMessage = encodeURIComponent(message);
  const whatsappURL = `https://wa.me/${businessNumber}?text=${encodedMessage}`;
  window.open(whatsappURL, "_blank");

  // Reset
  name.value = "";
  phone.value = "";
  category.value = "";
  car.value = "";
  rtoService.value = "";
  price.value = "";
  closeModal();
}
</script>

<template>
  <!-- 🔶 Enroll Section -->
  <section
    class="relative bg-yellow-100 dark:bg-gray-900 py-20 px-4 text-center"
  >
    <div class="max-w-3xl mx-auto">
      <h2
        class="text-4xl sm:text-5xl font-bold text-black dark:text-yellow-300 mb-4"
      >
        Ready to Learn Driving?
      </h2>
      <p class="text-lg text-black/80 dark:text-gray-300 mb-8">
        Join Amaze Motor Driving School today and become a confident driver with
        our expert instructors.
      </p>
      <!-- Driving Journey Progress Bar -->
      <div class="grid grid-cols-3 md:grid-cols-6 gap-4 my-10">
        <v-motion
          v-for="(step, i) in steps"
          :key="i"
          :initial="{ opacity: 0, y: 20 }"
          :enter="{ opacity: 1, y: 0, transition: { delay: i * 0.1 } }"
          class="text-center p-4 rounded-lg bg-white dark:bg-gray-800 shadow-md"
        >
          <div class="text-yellow-500 text-2xl mb-2">🚗</div>
          <p class="text-sm font-medium text-black dark:text-white">
            {{ step }}
          </p>
        </v-motion>
      </div>
      <button
        @click="openModal"
        class="relative px-10 py-4 font-semibold text-white bg-black dark:bg-yellow-400 dark:text-black rounded-full shadow-lg transition-all hover:scale-105"
      >
        <span class="relative z-10">Enroll Now</span>
        <span
          class="absolute inset-0 rounded-full border-4 border-yellow-300 dark:border-white animate-pulse"
          style="filter: drop-shadow(0 0 12px rgba(250, 204, 21, 0.7))"
        ></span>
      </button>
    </div>
  </section>

  <!-- 🔷 Enroll Modal -->
  <transition name="fade-scale">
    <div
      v-if="showModal"
      class="fixed inset-0 p-4 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50"
    >
      <div
        class="bg-white dark:bg-gray-900 rounded-2xl p-8 w-full max-w-md shadow-2xl text-center relative"
      >
        <h3 class="text-2xl font-bold mb-4 text-gray-900 dark:text-yellow-300">
          Enroll Form
        </h3>
        <p class="text-gray-600 dark:text-gray-400 mb-6">
          Please contact us or visit our office to confirm your enrollment.
        </p>

        <div class="flex flex-col gap-4 text-left">
          <input
            v-model="name"
            id="name"
            name="name"
            type="text"
            placeholder="Your Name"
            class="border rounded-lg px-4 py-2"
          />

          <input
            v-model="phone"
            id="phone"
            name="phone"
            type="tel"
            placeholder="Phone Number"
            inputmode="numeric"
            pattern="[6-9]\d{9}"
            maxlength="10"
            class="border rounded-lg px-4 py-2"
          />

          <ThemedListbox
            id="category"
            name="category"
            v-model="category"
            :options="['Driving', 'RTO', 'Track Practice']"
            placeholder="Select Category"
          />

          <ThemedListbox
            v-if="showCarSelect"
            id="car"
            name="car"
            v-model="car"
            :options="carOptions.map((c) => ({ label: c.name, value: c.name }))"
            placeholder="Select Car"
          />

          <ThemedListbox
            v-if="showRTOSelect"
            id="rtoService"
            name="rtoService"
            v-model="rtoService"
            :options="rtoOptions"
            placeholder="Select RTO Service"
          />

          <input
            v-if="showPrice"
            :value="price"
            id="price"
            type="text"
            name="price"
            class="border cursor-not-allowed rounded-lg px-4 py-2 bg-gray-100 text-gray-700"
            disabled
          />

          <button
            @click="submitForm"
            class="bg-yellow-400 hover:bg-yellow-300 text-black font-semibold px-6 py-2 rounded-lg transition"
          >
            Submit
          </button>
        </div>

        <button
          @click="closeModal"
          class="absolute top-2 right-3 text-3xl text-gray-500 hover:text-black"
        >
          &times;
        </button>
      </div>
    </div>
  </transition>
</template>

<style scoped>
.fade-scale-enter-active,
.fade-scale-leave-active {
  transition: all 0.4s ease;
}
.fade-scale-enter-from,
.fade-scale-leave-to {
  opacity: 0;
  transform: scale(0.8);
}
</style>
