<template>
<div>
  <div class="banner">
    <img src="../assets/images/team.jpg">
  </div>

  <div class="section contact">
    <div class="container" v-show="!submitted">
      <h3>Contact Us</h3>
      <div class="description">
        <p>Whether you need an old-school Core i7 home notebook or a cutting-edge 8086 Giant
          workstation, we can provide the complete solution for your needs.</p>
        <ContactForm v-on:submitted="onSubmitted" />
      </div>
    </div>
    <div class="container" v-show="submitted">
      <h3>Thank You</h3>
      <div class="description">
        <p>We received your message and will get back to you as soon as possible.</p>
        <router-link class="button button-primary" to="/">Back to Main Page</router-link>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import ContactForm from '@/components/ContactForm.vue'

export default {
  name: 'contact',
  data: function() {
    return {
      submitted: false
    }
  },
  components: {
    ContactForm
  },
  methods: {
    onSubmitted: function() {
      this.submitted = true;
    }
  }
}
</script>

<style lang="scss" src="./Contact.scss"></style>