<template>
  <section class="weather__main" v-if="getWeatherMain">
    <h2 class="feels-like">
      Feels like
      <strong>{{ getWeatherMain.feelsLike | round }}<sup>°</sup></strong>
    </h2>
    <div class="temp">
      <img
        v-if="getWeatherMain.icon"
        :src="`https://openweathermap.org/img/wn/${getWeatherMain.icon}@2x.png`"
        alt="temp"
      />
      <h1>{{ getWeatherMain.temp | round }}<sup>°</sup></h1>
    </div>
    <h2 class="description">{{ getWeatherMain.description }}</h2>
  </section>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'WeatherMain',

  computed: {
    ...mapGetters(['getWeatherMain']),
  },

  filters: {
    round(value) {
      return Math.round(value);
    },
  },
};
</script>

<style lang="scss" scoped>
.weather__main {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  margin: 25px 0;

  .feels-like {
    font-size: 1.2rem;
    color: $gray;

    strong,
    strong > sup {
      font-weight: 600;
    }
  }

  .temp {
    width: 150px;
    height: 150px;

    position: relative;

    display: flex;
    align-items: center;
    justify-content: center;

    margin: 40px 0;

    border-radius: 100%;
    box-shadow: 0 0 40px $off-black;
    background-color: $white;

    img {
      width: 110px;
      height: 110px;

      position: absolute;
      top: -35px;
      left: -35px;

      background-repeat: no-repeat;
      background-size: 100%;
      filter: drop-shadow(1px 1px 0 $shadow-black);
    }

    h1 {
      position: relative;

      font-size: 4.3rem;
      font-weight: 800;
      letter-spacing: -2px;

      sup {
        position: absolute;

        font-size: 2.5rem;
      }
    }
  }

  .description {
    font-size: 1.2rem;
    color: $gray;
    text-transform: capitalize;
  }
}
</style>
