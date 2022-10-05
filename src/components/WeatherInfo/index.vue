<template>
  <section class="weather__info" v-if="weatherInfo && !error">
    <div class="infos">
      <Icon icon="bx:wind" />
      <h3>{{ weatherInfo.wind }}</h3>
    </div>
    <div class="infos">
      <Icon icon="bx:droplet" />
      <h3>{{ weatherInfo.humidity }}%</h3>
    </div>
  </section>
</template>

<script>
import { Icon } from '@iconify/vue2';
import { mapGetters } from 'vuex';

export default {
  name: 'WeatherInfo',

  components: {
    Icon,
  },

  computed: {
    ...mapGetters({
      weatherInfo: 'getWeatherInfo',
      error: 'getError',
    }),
  },
};
</script>

<style scoped lang="scss">
.weather__info {
  display: flex;
  justify-content: space-evenly;

  padding-top: 25px;

  border-top: 2px solid $off-black;

  .infos {
    display: flex;
    align-items: center;

    color: $gray;

    svg {
      width: 20px;
      height: auto;
    }

    h3 {
      margin-left: 5px;

      font-weight: 500;
    }
  }
}
</style>
