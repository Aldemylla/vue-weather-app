<template>
  <main class="card">
    <section class="weather__search">
      <label for="search-control">
        <input type="search" id="search-control" value="São Paulo" />
      </label>
      <span class="country">BR</span>
    </section>
    <section class="weather__main">
      <h2 class="feels-like">
        Feels like
        <strong>30<sup>°</sup></strong>
      </h2>
      <div class="temp">
        <img src="https://openweathermap.org/img/wn/01d@2x.png" alt="temp" />
        <h1>31<sup>°</sup></h1>
      </div>
      <h2 class="description">Clear sky</h2>
    </section>
    <section class="weather__info">
      <div class="infos">
        <Icon icon="bx:wind" />
        <h3>6.58</h3>
      </div>
      <div class="infos">
        <Icon icon="bx:droplet" />
        <h3>32%</h3>
      </div>
    </section>
  </main>
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

<style scoped lang="scss">
.card {
  max-width: 360px;
  width: 100%;
  padding: 40px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  margin: auto;
  border-radius: 20px;
  box-shadow: 0 0 70pxrgba (0, 0, 0, 0.3);
  z-index: 9999;
  background-color: #f1f1f1;

  .weather {
    &__search {
      position: relative;

      #search-control {
        width: 100%;
        height: 50px;
        border: 2px solid #0000001a;
        border-radius: 100px;
        outline: none;
        background-color: #0000;
        font-size: 16px;
        padding: 0 50px 0 25px;
        transition: all 0.4s;
      }

      .country {
        position: absolute;
        top: 50%;
        right: 30px;
        transform: translateY(-50%);
        color: #999;
      }
    }

    &__main {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      margin: 25px 0;

      .feels-like {
        font-size: 18px;
        color: #666;

        strong,
        strong > sup {
          font-weight: 600;
        }
      }

      .temp {
        position: relative;
        width: 150px;
        height: 150px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 100%;
        box-shadow: 0 0 40px rgb(0 0 0 / 20%);
        background-color: #fff;
        margin: 40px 0;

        img {
          position: absolute;
          top: -35px;
          left: -35px;
          width: 110px;
          height: 110px;
          background-repeat: no-repeat;
          background-size: 100%;
          filter: drop-shadow(1px 1px 0 rgba(0, 0, 0, 0.03))
            drop-shadow(-5px -5px 0 rgba(0, 0, 0, 0.08));
        }

        h1 {
          font-size: 70px;
          font-weight: 800;
          letter-spacing: -2px;
          position: relative;

          sup {
            position: absolute;
            font-size: 40px;
          }
        }
      }

      .description {
        font-size: 18px;
        color: #666;
        text-transform: capitalize;
      }
    }

    &__info {
      display: flex;
      justify-content: space-evenly;

      padding-top: 25px;

      border-top: 2px solid #0000001a;

      .infos {
        display: flex;
        align-items: center;
        color: #666;

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
  }
}
</style>
