import axios from 'axios';

const mutations = {
  SET_WEATHER_DATA: 'SET_WEATHER_DATA',
  SET_SEARCH: 'SET_SEARCH',
  SET_ERROR: 'SET_ERROR',
};
const { SET_WEATHER_DATA, SET_SEARCH, SET_ERROR } = mutations;
const initialState = {
  search: 'São Paulo',
  weatherData: null,
  isError: false,
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

    getError(state) {
      return state.isError;
    },
  },

  mutations: {
    [SET_WEATHER_DATA](state, weatherData) {
      state.weatherData = weatherData;
    },

    [SET_SEARCH](state, search) {
      state.search = search;
    },

    [SET_ERROR](state, value) {
      state.isError = value;
    },
  },

  actions: {
    async getWeatherData({ commit, state }) {
      const URI = 'https://api.openweathermap.org/data/2.5/weather';
      const { VUE_APP_OPEN_WEATHER_MAP_ID } = process.env;

      await axios
        .get(`${URI}?q=${state.search}&appid=${VUE_APP_OPEN_WEATHER_MAP_ID}&units=metric`)
        .then((response) => {
          const { data } = response;

          const treatedWeatherData = {
            temp: data.main.temp,
            feelsLike: data.main.feels_like,
            description: data.weather[0].description,
            icon: data.weather[0].icon,
            wind: data.wind.speed,
            humidity: data.main.humidity,
            country: data.sys.country,
          };

          commit(SET_WEATHER_DATA, treatedWeatherData);
          commit('SET_ERROR', false);
        })
        .catch(() => {
          commit('SET_ERROR', true);
        });
    },
  },
};
