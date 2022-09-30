<template>
  <main class="home-card" v-if="weatherInfos">
    <WeatherSearch
      :search="search"
      @setSearch="search = $event"
      :country="weatherInfos.sys.country"
    />
    <WeatherMain
      :feels-like="weatherInfos.main.feels_like"
      :icon="weatherInfos.weather[0].icon"
      :temp="weatherInfos.main.temp"
      :description="weatherInfos.weather[0].description"
    />
    <WeatherInfo :wind="weatherInfos.wind.speed" :humidity="weatherInfos.main.humidity" />
  </main>
</template>

<script>
import axios from 'axios';
import WeatherSearch from '../../components/WeatherSearch';
import WeatherMain from '../../components/WeatherMain';
import WeatherInfo from '../../components/WeatherInfo';

export default {
  name: 'ViewHome',

  components: {
    WeatherSearch,
    WeatherMain,
    WeatherInfo,
  },

  data: () => ({
    search: 'São Paulo',
    weatherInfos: null,
  }),

  watch: {
    search() {
      this.getWeatherInfos();
    },
  },

  methods: {
    getWeatherInfos() {
      const URI = 'https://api.openweathermap.org/data/2.5/weather';
      axios
        .get(
          `${URI}?q=${this.search}&appid=${process.env.VUE_APP_OPEN_WEATHER_MAP_ID}&units=metric`,
        )
        .then((response) => {
          this.weatherInfos = response.data;
        });
    },
  },

  created() {
    this.getWeatherInfos();
  },
};
</script>

<style scoped lang="scss">
.home-card {
  width: 90%;
  max-width: 360px;

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  padding: 40px;
  margin: auto;

  border-radius: 20px;
  box-shadow: 0 0 70px $shadow-black;
  background-color: $off-white;

  z-index: 9999;
}
</style>
