import Vue from "vue";
import Router from 'vue-router'
// import Home from '@/components/Home.vue'

Vue.use(Router)


export default new Router({
  routes: [
    {
      path: '/',
      // component: Login
      redirect: '/login',
      hidden: true,
      component: () => import('@/components/Login.vue')
    }, {
      path: '/login',
      // component: Login
      name: 'Login',
      hidden: true,
      component: () => import('@/components/Login.vue')
    },
    {
      path: '/home',
      // component: Home
      name: '学生管理',
      iconClass: 'fa fa-users',
      redirect: '/home/students',
      component: () => import('@/components/Home.vue'),
      children: [
        {
          path: '/home/students',
          name: '学生列表',
          iconClass: 'fa fa-list',
          component: () => import('@/components/students/StudentLists.vue'),
        }, {
          path: '/home/info',
          name: '信息列表',
          iconClass: 'fa fa-list',
          component: () => import('@/components/students/InfoList.vue'),
        }, {
          path: '/home/infos',
          name: '信息管理',
          iconClass: 'fa fa-list',
          component: () => import('@/components/students/InfoLists.vue'),
        }, {
          path: '/home/work',
          name: '作业列表',
          iconClass: 'fa fa-list',
          component: () => import('@/components/students/WorkList.vue'),
        }, {
          path: '/home/works',
          name: '作业管理',
          iconClass: 'fa fa-list',
          component: () => import('@/components/students/WorkMent.vue'),
        },
      ]
    },
    {
      path: '/home',
      name: '数据分析',
      iconClass: 'fa fa-bar-chart',
      redirect: '/home/dataview',
      component: () => import('@/components/Home.vue'),
      children: [
        {
          path: '/home/dataview',
          name: '数据概览',
          iconClass: 'fa fa-line-chart',
          component: () => import('@/components/dataAnalysis/DataView.vue'),
        }, {
          path: '/home/mapview',
          name: '地图概览',
          iconClass: 'fa fa-line-chart',
          component: () => import('@/components/dataAnalysis/MapView.vue'),
        }, {
          path: '/home/scoremap',
          name: '分数地图',
          iconClass: 'fa fa-line-chart',
          component: () => import('@/components/dataAnalysis/ScoreMap.vue'),
        }, {
          path: '/home/travemap',
          name: '旅游地图',
          iconClass: 'fa fa-line-chart',
          component: () => import('@/components//dataAnalysis//TraveMap.vue'),
        }
      ]
    }, {
      path: '/users',
      name: '用户中心',
      iconClass: "fa fa-user",
      redirect: '/users/user',
      component: () => import('@/components/Home.vue'),
      children: [
        {
          path: '/users/user',
          name: '权限管理',
          iconClass: 'fa fa-user',
          component: () => import('@/components/users/User.vue')

        }
      ]
    }, {
      path: '*',
      name: '作业管理',
      iconClass: 'fa fa-list',
      component: () => import('@/components/404.vue'),
    },
  ],
  mode: 'history'
})