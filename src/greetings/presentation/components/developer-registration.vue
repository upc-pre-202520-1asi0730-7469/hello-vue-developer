<script setup lang="js">
/**
 * Developer Registration Component
 * 
 * @component
 * @name developer-registration
 * @description A Vue.js component for registering a new developer with first and last name fields.
 * @remarks
 * This component provides a form for registering a new developer. It includes fields for first name and last name, 
 * along with buttons to submit the registration, defer it, or clear the form.
 * 
 */
import {ref} from "vue";

const firstName = ref('');
const lastName = ref('');
const errorMessage = ref('');

const emit = defineEmits(['developer-registered', 'registration-deferred']);

/**
 * Handles the submission of the registration form.
 * Validates that at least one of the name fields is filled.
 */
function submitRegistrationRequest() {
  let submittedFirstName = firstName.value.toString().trim();
  let submittedLastName = lastName.value.toString().trim();
  if (submittedFirstName || submittedLastName) {
    console.log('Registering developer');
    emit('developer-registered', {
      firstName: submittedFirstName,
      lastName: submittedLastName
    });
    clearFields();
  } else {
    console.log('Cannot register: Both fields are required');
    errorMessage.value = "Please provide at least first name or last name. Warning: Both fields are required for a successful registration.";
  }
}

/**
 * Handles the deferral of the registration process.
 * Emits an event indicating that registration has been deferred.
 */
function deferRegistration() {
  console.log('Deferring registration');
  emit('registration-deferred', {firstName: "", lastName: ""});
  clearFields();
  errorMessage.value = "";
}

/**
 * Clears the input fields and error message.
 */
function clearFields() {
  firstName.value = '';
  lastName.value = '';
  errorMessage.value = '';
}

</script>

<template>
  <!-- Developer Registration Form -->
  <div>
    <h2>New Developer</h2>
    <div>
      <form v-on:submit.prevent="submitRegistrationRequest">
        <div class="field">
          <label for="first-name">First Name:</label>
          <input id="first-name" v-model="firstName" type="text"/>
        </div>
        <div class="field">
          <label for="last-name">Last Name:</label>
          <input id="last-name" v-model="lastName" type="text"/>
        </div>
        <div class="actions">
          <button type="submit">Register</button>
          <button type="button" v-on:click="deferRegistration">Later</button>
          <button type="button" v-on:click="clearFields">Clear</button>
        </div>
      </form>
      <p v-if="errorMessage" class="error" role="alert">{{ errorMessage }}</p>
    </div>
  </div>
</template>

<style scoped>
button {
  margin-right: 10px;
  padding: 8px 16px;
  cursor: pointer;
}

.error {
  color: red;
  margin-top: 10px;
  font-size: 14px;
}

.field {
  margin-bottom: 10px;
}

.actions {
  margin-top: 10px;
}

label {
  margin-right: 5px;
}
</style>