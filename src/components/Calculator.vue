<template>
  <div class="m-10 sm bg-green-300 rounded flex">
    <input class="w-52 h-6 m-10" v-model="number1" />
    <button
      class="w-24 h-6 m-10 bg-pink-600 text-white rounded"
      @click="CalculateResult"
    >
      <strong>{{ symbol }}</strong>
    </button>
    <input class="w-52 h-6 m-10" v-model="number2" />
    <p name="result" class="w-52 h-6 m-10 bg-white">Total: {{ result }}</p>
  </div>
</template>

<script>
import useVuelidate from "@vuelidate/core";
import { required, number1, number2 } from "@vuelidate/validators";
export default {
  props: {
    symbol: String,
  },
  setup() {
    return { v$: useVuelidate() };
  },
  data() {
    return {
      number1: null,
      number2: null,
      result: null,
    };
  },
  validations() {
    return {
      number1: { required }, // Matches this.firstName
      number2: { required }, // Matches this.lastName
    };
  },
  methods: {
    CalculateResult() {
      if (this.symbol === "+") {
        this.result = parseInt(this.number1) + parseInt(this.number2);
      } else if (this.symbol === "-") {
        this.result = parseInt(this.number1) - parseInt(this.number2);
      } else if (this.symbol === "x") {
        this.result = parseInt(this.number1) * parseInt(this.number2);
      } else {
        this.result = parseInt(this.number1) / parseInt(this.number2);
      }
    },
  },
};
</script>