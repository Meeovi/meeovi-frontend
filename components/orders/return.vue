<template>
  <div class="cartPage">
    <section id="success" class="hidden">
    <p>
      We appreciate your business! A confirmation email will be sent to <span id="customer-email"></span>.

      If you have any questions, please email <NuxtLink to="mailto:support@meeovi.com">support@meeovi.com</NuxtLink>.
    </p>
  </section>
  </div>
</template>

<script>
  export default {

  }
</script>

<script setup>
initialize();

async function initialize() {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const sessionId = urlParams.get('session_id');
  const response = await fetch(`/session-status?session_id=${sessionId}`);
  const session = await response.json();

  if (session.status == 'open') {
    window.replace('http://localhost:3011/commerce/checkout')
  } else if (session.status == 'complete') {
    document.getElementById('success').classList.remove('hidden');
    document.getElementById('customer-email').textContent = session.customer_email
  }
}

  definePageMeta({
    layout: 'nolive',
  });
  
  useHead({
    title: 'Thanks for your order!',
  })

  definePageMeta({
    middleware: ['authenticated'],
  })
</script>