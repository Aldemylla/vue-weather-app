<template>
  <main class="home-card">
    <WeatherSearch />
    <WeatherMain />
    <WeatherInfo />
  </main>
</template>

<script>
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
};
</script>

<style scoped lang="scss">
.home-card {
  width: 90%;
  max-width: 360px;
  min-height: 507px;

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
