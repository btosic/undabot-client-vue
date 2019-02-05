<template>
  <form>
    <div class="form-element">
      <label for="email">Your email</label>
      <input
        class="u-full-width"
        type="email"
        placeholder="test@mailbox.com"
        v-model.trim="$v.email.$model"
      >
      <span
        class="error"
        v-show="isInvalid('email', 'required', 400)"
      >E-mail address is required.</span>
      <span
        class="error"
        v-show="isInvalid('email', 'email', 422)"        
      >Invalid e-mail address.</span>
    </div>
    <div class="form-element">
      <label for="message">Message</label>
      <textarea
        class="u-full-width"
        v-model.trim="$v.message.$model"
      ></textarea>
      <span
        class="error"
        v-show="isInvalid('message', 'required', 400)"
      >Message is required.</span>
      <span
        class="error"
        v-show="isInvalid('message', 'minLength', 422)"        
      >Message must contain more that 30 characters.</span>
    </div>
    <label for="clientValidation">
      <input type="checkbox" id="clientValidation" name="clientValidation" v-model="clientValidation">
      <span class="label-body">Use client-side validation</span>
    </label>
    <button class="button-primary" type="submit" :disabled="clientValidation && this.$v.$invalid" @click.prevent="sendContactData">Submit</button>
  </form>
</template>

<script>
// Import validators
const { validationMixin } = require('vuelidate')
const { required, email, minLength } = require('vuelidate/lib/validators')
import { api } from "../services/api";

export default {
  name: "ContactForm",
  data: function() {
    return {
      email: null,
      message: null,
      clientValidation: false,
      errors: {
        email: null,
        message: null
      }
    };
  },
  mixins: [validationMixin],
  validations: {
    email: {
      required,
      email
    },
    message: {
      required,
      minLength: minLength(31)
    }
  },
  methods: {
    setEmail(value) {
      this.email = value;
      this.$v.email.$touch();
    },
    clearErrors() {
      this.errors = {
        email: null,
        message: null
      };
    },
    isInvalid(field, validator, code) {
      let clientError = this.clientValidation && this.$v[field].$error && !this.$v[field][validator];
      let serverError = this.errors[field] && this.errors[field].code === code;
      return clientError || serverError;
    },
    sendContactData() {
      // Check if we're using client side validation
      if (this.clientValidation && this.$v.$invalid) return;

      this.clearErrors();      
      let data = {
        email: this.email,
        message: this.message
      }
      api.contactPost(data)
        .then(() => {
          // Everything OK, show thank you message
          this.$emit('submitted')
          // this.state.submitted = true;
        })
        .catch((error) => {
          console.log(error);
          // Process service error
          this.submitted = false;
          if (error.response && error.response.data && error.response.data.errors) {
            error.response.data.errors.forEach(error => {
              if (error.field === "email") {
                this.errors.email = error;
              } else if (error.field === "message") {
                this.errors.message = error;
              }
            });
          }
        });
    }
  }
};
</script>

<style scoped lang="scss">
input,
textarea {
  margin-bottom: 0;
}
.form-element {
  margin-bottom: 1.5rem;
}
.error {
  color: maroon;
}
:disabled {
  background: darkgray;
  border: darkgray;
  cursor: not-allowed;
}
</style>
