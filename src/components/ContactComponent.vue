<script setup>
import { ref, onMounted, nextTick } from "vue";
import { useMotion } from "@vueuse/motion";

// Contact card refs
const contactRef1 = ref(null);
const contactRef2 = ref(null);
const contactRef3 = ref(null);
const formRef = ref(null);

const contacts = [
  {
    ref: contactRef1,
    icon: "📞",
    title: "Call Us",
    lines: [
      "+91 92275 75667",
      "Mon – Sat: 09:00 AM to 01:00 PM - 03:00 PM to 09:00 PM",
    ],
  },
  {
    ref: contactRef2,
    icon: "📧",
    title: "Email",
    lines: ["amazemotordriving@gmail.com", "We reply within 24 hrs"],
  },
  {
    ref: contactRef3,
    icon: "📍",
    title: "Visit Us",
    lines: [
      "223, 2nd Floor, Gala Magnus, Sukhasan Chowk, Safal Parisar Rd, South Bopal, Ahmedabad, Gujarat 380058",
    ],
  },
];

onMounted(async () => {
  await nextTick();

  contacts.forEach((item, i) => {
    if (!item.ref.value) return;
    try {
      useMotion(item.ref.value, {
        initial: { opacity: 0, y: 60 },
        enter: {
          opacity: 1,
          y: 0,
          transition: { type: "spring", stiffness: 140, delay: i * 0.3 },
        },
      });
    } catch (e) {
      console.error("Motion error:", e);
    }
  });

  if (formRef.value) {
    try {
      useMotion(formRef.value, {
        initial: { opacity: 0, y: 60 },
        enter: {
          opacity: 1,
          y: 0,
          transition: { type: "spring", stiffness: 120, delay: 0.9 },
        },
      });
    } catch (e) {
      console.error("Form motion error:", e);
    }
  }
});
</script>

<template>
  <section
    class="bg-yellow-100 dark:bg-gray-950 text-black dark:text-white py-20 px-6 sm:px-10 transition-colors duration-500"
  >
    <!-- Title -->
    <div class="text-center mb-16">
      <h2 class="text-4xl font-extrabold text-yellow-500 mb-4">
        Contact Amaze Driving School
      </h2>
      <p class="text-gray-700 dark:text-gray-300 max-w-2xl mx-auto text-lg">
        We're here to help you with your driving journey. Get in touch!
      </p>
    </div>

    <!-- Cards -->
    <div
      class="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto mb-20"
    >
      <div
        v-for="(item, i) in contacts"
        :key="i"
        :ref="item.ref"
        class="bg-yellow-50 dark:bg-gray-800 border border-yellow-500/20 p-8 rounded-2xl text-center shadow-2xl group relative overflow-hidden transition duration-300"
      >
        <div class="text-5xl mb-4 animate-bounce-slow drop-shadow-glow">
          {{ item.icon }}
        </div>
        <h3 class="text-xl font-bold text-yellow-500 dark:text-yellow-300 mb-2">
          {{ item.title }}
        </h3>
        <p
          class="text-gray-800 dark:text-gray-300"
          v-for="(line, index) in item.lines"
          :key="index"
        >
          {{ line }}
        </p>
        <div
          class="absolute inset-0 bg-yellow-400 dark:bg-yellow-200 opacity-0 group-hover:opacity-5 blur-lg transition duration-700"
        ></div>
      </div>
    </div>

    <!-- Form -->
    <form
      ref="formRef"
      class="max-w-3xl mx-auto bg-yellow-50 dark:bg-gray-900 rounded-2xl p-10 shadow-2xl border border-yellow-400/10 animate-glow-fast transition-colors duration-500"
    >
      <div class="space-y-6">
        <input
          type="text"
          placeholder="Your Name"
          class="w-full bg-white dark:bg-gray-800 text-black dark:text-white p-4 rounded-lg border border-gray-300 dark:border-none shadow-sm dark:shadow-none focus:ring-2 focus:ring-yellow-400 outline-none"
        />
        <input
          type="email"
          placeholder="Your Email"
          class="w-full bg-white dark:bg-gray-800 text-black dark:text-white p-4 rounded-lg border border-gray-300 dark:border-none shadow-sm dark:shadow-none focus:ring-2 focus:ring-yellow-400 outline-none"
        />
        <textarea
          rows="5"
          placeholder="Your Message"
          class="w-full bg-white dark:bg-gray-800 text-black dark:text-white p-4 rounded-lg border border-gray-300 dark:border-none shadow-sm dark:shadow-none focus:ring-2 focus:ring-yellow-400 outline-none"
        ></textarea>
        <button
          type="submit"
          class="w-full bg-yellow-400 text-black font-bold py-3 rounded-lg transition hover:scale-105 shadow-lg animate-[pulseSlow_2.5s_ease-in-out_infinite]"
        >
          ✉️ Send Message
        </button>
      </div>
    </form>
  </section>
</template>

<style scoped>
/* Glow effect */
.drop-shadow-glow {
  filter: drop-shadow(0 0 6px #facc15);
}

/* Slow bounce */
@keyframes bounce-slow {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-8px);
  }
}
.animate-bounce-slow {
  animation: bounce-slow 2.5s infinite;
}

/* Slow pulse */
@keyframes pulse-slow {
  0%,
  100% {
    transform: scale(1);
    opacity: 1;
  }
  50% {
    transform: scale(1.02);
    opacity: 0.95;
  }
}
.animate-glow-fast {
  animation: pulse-slow 2.5s ease-in-out infinite;
}
</style>
