<script setup>
import FormBuilder from "components/FormBuilder.vue";
import { createFields } from "src/models/patient.js";
import { computed } from "vue";

const fields = computed(() => createFields());
</script>

<template>
  <q-page padding>
    <FormBuilder :fields="fields" />
  </q-page>
</template>
