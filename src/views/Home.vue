<template>
  <v-flex xs12 sm6 offset-sm3>
    <v-card>
      <v-card-title primary-title>
        <div>
          <h1 class="mb-5">
            Привет!
          </h1>
        </div>
      </v-card-title>

      <v-card-subtitle>
        <h3>Этот сайт создан для формирования честной статистики состояния людей после вакцинации.</h3>
      </v-card-subtitle>

      <v-card-actions>
        <router-link to="/vaccinated" class="white--text text-decoration-none">
          <v-btn color="primary">
            Я вакцинировался
          </v-btn>
        </router-link>
        <router-link to="/stat" class="white--text text-decoration-none ml-2">
          <v-btn color="primary">
            Статистика
          </v-btn>
        </router-link>
      </v-card-actions>
    </v-card>
  </v-flex>
</template>

<script>
export default {
  name: 'Home',
  components: {}
}
</script>
