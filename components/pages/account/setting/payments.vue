<template>
  <v-card>
    <v-card-title>Payment Methods</v-card-title>
    <v-card-text>
      <v-list>
        <v-list-item v-for="(card, index) in savedCards" :key="index">
          <v-list-item-title>{{ card.type }} ending in {{ card.last4 }}</v-list-item-title>
          <template v-slot:append>
            <v-btn icon @click="removeCard(index)">
              <v-icon>mdi-delete</v-icon>
            </v-btn>
          </template>
        </v-list-item>
      </v-list>
      <v-btn @click="addNewCard" color="primary">Add New Card</v-btn>
    </v-card-text>
  </v-card>
</template>

<script setup>
import { ref } from 'vue';

const savedCards = ref([
  { type: 'Visa', last4: '1234' },
  { type: 'MasterCard', last4: '5678' },
]);

const addNewCard = () => {
  // Implement add new card logic
  console.log('Adding new card');
};

const removeCard = (index) => {
  // Implement remove card logic
  console.log('Removing card at index', index);
};
</script>
