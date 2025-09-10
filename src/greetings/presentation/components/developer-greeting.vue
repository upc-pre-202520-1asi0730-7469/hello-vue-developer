<script setup lang="js">

/**
 * @component
 * 
 * @name developer-greeting
 * @description
 * A Vue.js component that greets a developer by their full name.
 * If either the first name or last name is missing, it greets as "Anonymous Developer"
 */
  import {computed} from "vue";
  import {Developer} from "../../domain/model/developer.entity.js";

/**
 * props - The properties accepted by the component.
 * It includes firstName and lastName, both of which are optional strings.
 * @type {Prettify<Readonly<{[key in string]?: any}>>}
 */
const props = defineProps(['firstName', 'lastName']);

/**
 * greeting - A computed property that generates a greeting message.
 * If either the first name or last name is
 * @type {computed} 
 */
const greeting = computed(() => {
    if (!props.firstName?.trim() || !props.lastName?.trim())
      return 'Hello Anonymous Developer';
    const developer = new Developer(props.firstName, props.lastName);
    return `Congrats ${developer.fullName}! You are a Vue.js Developer`;
  })
</script>

<template>
  <p>{{ greeting }}</p>
</template>

<style scoped>

</style>