import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'pelis',
      component: require('./components/peliculas/ListComponent').default,
    },
    {
      path : '/peli/:id',
      name : 'naves-peli',
      component : require('./components/peliculas/ShowComponent').default,
      props : (route) => ({ query: route.query.q })
    },
    {
      path : '/nave/:id',
      name : 'info-nave',
      component : require('./components/peliculas/NaveInfoComponent').default,
      props : (route) => ({ query: route.query.q })
    },
    {
      path : '/nave/editar/:id',
      name : 'editar-nave',
      component : require('./components/peliculas/NaveEditComponent').default,
      props : (route) => ({ query: route.query.q })
    },
    {
      path: '/mis-naves',
      name: 'naves',
      component: require('./components/naves/ListComponent').default,
    },
    {
      path: '/mis-naves/info/:id',
      name: 'naves-info',
      component: require('./components/naves/NaveInfoComponent').default,
      props : (route) => ({ query: route.query.q })
    }
  ],
    mode : 'history'
})
