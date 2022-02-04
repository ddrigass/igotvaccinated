<template>
  <v-flex xs12 sm6 offset-sm3>
    <v-card>
      <v-card-title>Состояния</v-card-title>
      <v-data-table
          :headers="headers"
          :items="items"
          :items-per-page="5"
          class="elevation-1"
      ></v-data-table>
    </v-card>
  </v-flex>
</template>

<script>
export default {
  name: 'Statistic',
  data: () => ({
    headers: [
      {
        text: 'State',
        value: 'state',
        sortable: false,
      },
      { text: 'Count', value: 'count' },
    ],
    items: [
      {
        state: 'Здоров',
        count: 554
      }
    ]
  })
}
</script>
