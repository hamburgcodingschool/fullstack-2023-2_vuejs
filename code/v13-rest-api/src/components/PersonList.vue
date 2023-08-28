<template>
  <div>
    <PersonCard :name="people[0].name" :profession="people[0].profession" />
    <PersonCard :name="people[1].name" :profession="people[1].profession" />
    <PersonCard :name="people[2].name" :profession="people[2].profession" />
    <PersonCard name="Dora" profession="Explorer" />

    <!-- <PersonCard v-for="person in people" :name="person.name" :profession="person.profession" /> -->
  </div>
</template>

<script>
import PersonCard from './PersonCard.vue'

export default {
  components: {
    PersonCard
  },
  data() {
    return {
      people: [
        {
          name: 'Joe',
          profession: 'Actor'
        },
        {
          name: 'Bob',
          profession: 'Builder'
        },
        {
          name: 'Thomas',
          profession: 'Tank Engine'
        }
      ]
    }
  }
}
</script>

<style scoped></style>
