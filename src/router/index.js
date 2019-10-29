import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'

/**
 * Note: sub-menu only appear when route children.length >= 1
 * Detail see: https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 *
 * hidden: true                   if set true, item will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu
 *                                if not set alwaysShow, when item has more than one children route,
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noRedirect           if set noRedirect will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    roles: ['admin','editor']    control the page roles (you can set multiple roles)
    title: 'title'               the name show in sidebar and breadcrumb (recommend set)
    icon: 'svg-name'             the icon show in the sidebar
    breadcrumb: false            if set false, the item will hidden in breadcrumb(default is true)
    activeMenu: '/example/list'  if set path, the sidebar will highlight the path you set
  }
 */

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */
export const constantRoutes = [
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },

  {
    path: '/404',
    component: () => import('@/views/404'),
    hidden: true
  },

  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [{
      path: 'dashboard',
      name: 'Dashboard',
      component: () => import('@/views/dashboard/index'),
      meta: { title: 'Dashboard', icon: 'dashboard' }
    }]
  },

  // 产品管理
  {
    path: '/product',
    component: Layout,
    children: [
      {
        path: 'product',
        name: 'Form',
        component: () => import('@/views/product/Product'),
        meta: { title: '产品管理', icon: 'form' }
      }
    ]
  },
  // 顾客管理
  {
    path: '/customer',
    component: Layout,
    children: [
      {
        path: 'customer',
        name: 'Form',
        component: () => import('@/views/customer/Customer'),
        meta: { title: '顾客管理', icon: 'form' }
      }
    ]
  },
  // 地址管理
  {
    path: '/address',
    component: Layout,
    children: [
      {
        path: 'address',
        name: 'Form',
        component: () => import('@/views/address/Address'),
        meta: { title: '地址管理', icon: 'form' }
      }
    ]
  },
  // 订单管理
  {
    path: '/order',
    component: Layout,
    children: [
      {
        path: 'order',
        name: 'Form',
        component: () => import('@/views/order/Order'),
        meta: { title: '订单管理', icon: 'form' }
      }
    ]
  },
  // 栏目管理
  {
    path: '/category',
    component: Layout,
    children: [
      {
        path: 'category',
        name: 'Form',
        component: () => import('@/views/category/Category'),
        meta: { title: '栏目管理', icon: 'form' }
      }
    ]
  },
  // 评论管理
  {
    path: '/comment',
    component: Layout,
    children: [
      {
        path: 'comment',
        name: 'Form',
        component: () => import('@/views/comment/Comment'),
        meta: { title: '评论管理', icon: 'form' }
      }
    ]
  },
  // 员工管理
  {
    path: '/waiter',
    component: Layout,
    children: [
      {
        path: 'waiter',
        name: 'Form',
        component: () => import('@/views/waiter/Waiter'),
        meta: { title: '员工管理', icon: 'form' }
      }
    ]
  },

  {
    path: '/check',
    component: Layout,
    redirect: '/check/checkWaiter',
    name: 'Example',
    meta: { title: '审核管理', icon: 'example' },
    children: [
      {
        path: 'checkwaiter',
        name: 'Table',
        component: () => import('@/views/check/checkWaiter'),
        meta: { title: '员工审核', icon: 'table' }
      },
      {
        path: 'checkWithdraw',
        name: 'Tree',
        component: () => import('@/views/check/checkWithdraw'),
        meta: { title: '提现审核', icon: 'tree' }
      }
    ]
  },

  /*
  {
    path: '/form',
    component: Layout,
    children: [
      {
        path: 'index',
        name: 'Form',
        component: () => import('@/views/form/index'),
        meta: { title: 'Form', icon: 'form' }
      }
    ]
  },

  
  {
    path: '/nested',
    component: Layout,
    redirect: '/nested/menu1',
    name: 'Nested',
    meta: {
      title: 'Nested',
      icon: 'nested'
    },
    children: [
      {
        path: 'menu1',
        component: () => import('@/views/nested/menu1/index'), // Parent router-view
        name: 'Menu1',
        meta: { title: 'Menu1' },
        children: [
          {
            path: 'menu1-1',
            component: () => import('@/views/nested/menu1/menu1-1'),
            name: 'Menu1-1',
            meta: { title: 'Menu1-1' }
          },
          {
            path: 'menu1-2',
            component: () => import('@/views/nested/menu1/menu1-2'),
            name: 'Menu1-2',
            meta: { title: 'Menu1-2' },
            children: [
              {
                path: 'menu1-2-1',
                component: () => import('@/views/nested/menu1/menu1-2/menu1-2-1'),
                name: 'Menu1-2-1',
                meta: { title: 'Menu1-2-1' }
              },
              {
                path: 'menu1-2-2',
                component: () => import('@/views/nested/menu1/menu1-2/menu1-2-2'),
                name: 'Menu1-2-2',
                meta: { title: 'Menu1-2-2' }
              }
            ]
          },
          {
            path: 'menu1-3',
            component: () => import('@/views/nested/menu1/menu1-3'),
            name: 'Menu1-3',
            meta: { title: 'Menu1-3' }
          }
        ]
      },
      {
        path: 'menu2',
        component: () => import('@/views/nested/menu2/index'),
        meta: { title: 'menu2' }
      }
    ]
  },

  {
    path: 'external-link',
    component: Layout,
    children: [
      {
        path: 'https://panjiachen.github.io/vue-element-admin-site/#/',
        meta: { title: 'External Link', icon: 'link' }
      }
    ]
  },
  */

  // 404 page must be placed at the end !!!
  { path: '*', redirect: '/404', hidden: true }
]

const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
