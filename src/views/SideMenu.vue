<template>
  <div class="menu bg-indigo-50 h-screen w-60 flex flex-col">
    <div class="h-20 w-full"></div>
    <router-link
    @click="$emit('cambio', route.symbol)"
      v-for="(route, index) in routes"
      :key="index"
       class="w-full bg-green-600 p-4 mb-2 text-center focus:ring-2 focus:ring-green-500"
      :to="route.route"
      >{{ route.label }}
    </router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      routes: [
        {
          route: "/suma",
          label: "Suma",
          symbol:"+"
        },
        {
          route: "/resta",
          label: "Resta",
           symbol:"-"
        },
        {
          route: "/multiplicacion",
          label: "Multiplicacion",
           symbol:"x"
        },
        {
          route: "/division",
          label: "Division",
           symbol:"÷"
        },
      ],
    };
  },
};
</script>
