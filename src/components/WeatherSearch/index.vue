<template>
  <section class="weather__search">
    <label for="search-control">
      <input type="search" id="search-control" value="São Paulo" />
    </label>
    <span class="country">BR</span>
  </section>
</template>

<script>
export default {
  name: 'WeatherSearch',
};
</script>

<style lang="scss" scoped>
.weather__search {
  position: relative;

  #search-control {
    width: 100%;
    height: 50px;

    padding: 0 50px 0 25px;

    font-size: 1rem;
    border: 2px solid $off-black;
    border-radius: 100px;
    background: $white;
    font-weight: 600;
    outline: none;

    transition: all 0.4s;

    &:hover,
    &:focus {
      box-shadow: $light-gray 0px 0px 5px 1px;
    }

    &:focus {
      border: 2px solid $light-gray;
    }
  }

  .country {
    position: absolute;
    top: 50%;
    right: 30px;
    transform: translateY(-50%);

    color: $dark-gray;
  }
}
</style>
