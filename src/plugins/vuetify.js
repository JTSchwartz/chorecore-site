import Vue from 'vue';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
      options: {
        customProperties: true,
      },
    themes: {
      light: {
        primary: '#364958',
        secondary: '#3B6064',
        accent: '#55828B',
        error: '#FF5252',
        info: '#C9E4CA',
        success: '#87BBA2',
        warning: '#FFC107'
      },
      dark: {
        primary: "#14181B",
        secondary: "#161D1E",
        accent: '#20282A',
        error: "#F44336",
        warning: "#FFC107",
        info: '#C9E4CA',
        success: '#87BBA2',
        font: "#FFFFFF"
      }
    },
  },
  icons: {
    iconfont: 'fa',
  },
});
