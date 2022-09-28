<template>
  <div>
    <section>
      <label for="city-search">
        <input type="search" id="city-search" />
      </label>
      <div>
        <h2>Natal, BR</h2>
        <div>
          <h1>31ºc</h1>
        </div>
        <h2>Feels like 30ºc</h2>
        <h2>Clear sky</h2>
      </div>
      <div>
        <div>
          <Icon icon="bx:wind" />
          <h3>6.58</h3>
        </div>
        <div>
          <Icon icon="bx:droplet" />
          <h3>32%</h3>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { Icon } from '@iconify/vue2';

export default {
  name: 'ViewHome',

  components: {
    Icon,
  },
};
</script>

<style></style>
