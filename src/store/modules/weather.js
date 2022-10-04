import axios from 'axios';

const mutations = {
  SET_WEATHER_DATA: 'SET_WEATHER_DATA',
  SET_SEARCH: 'SET_SEARCH',
};
const { SET_WEATHER_DATA, SET_SEARCH } = mutations;
const initialState = {
  search: 'São Paulo',
  weatherData: null,
};

export default {
  state: initialState,

  getters: {
    getWeatherCountry(state) {
      return state.weatherData?.country;
    },

    getWeatherMain(state) {
      if (state.weatherData) {
        const { temp, feelsLike, description, icon } = state.weatherData;
        return {
          temp,
          feelsLike,
          description,
          icon,
        };
      }
      return null;
    },

    getWeatherInfo(state) {
      if (state.weatherData) {
        const { wind, humidity } = state.weatherData;
        return {
          wind,
          humidity,
        };
      }
      return null;
    },
  },

  mutations: {
    [SET_WEATHER_DATA](state, weatherData) {
      state.weatherData = weatherData;
    },

    [SET_SEARCH](state, search) {
      state.search = search;
    },
  },

  actions: {
    async getWeatherData({ commit, state }) {
      const URI = 'https://api.openweathermap.org/data/2.5/weather';
      const { VUE_APP_OPEN_WEATHER_MAP_ID } = process.env;

      const response = await axios
        .get(`${URI}?q=${state.search}&appid=${VUE_APP_OPEN_WEATHER_MAP_ID}&units=metric`)
        .then((response) => response.data);

      const treatedWeatherData = {
        temp: response.main.temp,
        feelsLike: response.main.feels_like,
        description: response.weather[0].description,
        icon: response.weather[0].icon,
        wind: response.wind.speed,
        humidity: response.main.humidity,
        country: response.sys.country,
      };

      commit(SET_WEATHER_DATA, treatedWeatherData);
    },
  },
};
