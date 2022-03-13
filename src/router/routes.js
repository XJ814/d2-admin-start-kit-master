import layoutHeaderAside from '@/layout/header-aside'

// 由于懒加载页面太多的话会造成webpack热更新太慢，所以开发环境不使用懒加载，只有生产环境使用懒加载
const _import = require('@/libs/util.import.' + process.env.NODE_ENV)

/**
 * 在主框架内显示
 */
const frameIn = [
  {
    path: '/',
    redirect: { name: 'login' },
    component: layoutHeaderAside,
    children: [
      // 首页
      {
        path: 'index',
        name: 'index',
        meta: {
          auth: true
        },
        component: _import('system/index')
      },
      // 演示页面
      {
        path: 'MyPatient',
        name: 'MyPatient',
        meta: {
          title: '我的病人',
          auth: true
        },
        component: _import('demo/MyPatient')
      },
      {
        path: 'CaseManagement',
        name: 'CaseManagement',
        meta: {
          title: '病例管理',
          auth: true
        },
        component: _import('demo/CaseManagement')
      },
      {
        path: 'HospitalizationManagement',
        name: 'HospitalizationManagement',
        meta: {
          title: '住院管理',
          auth: true
        },
        component: _import('demo/HospitalizationManagement')
      },
      {
        path: 'ReportQuery',
        name: 'ReportQuery',
        meta: {
          title: '报告查询',
          auth: true
        },
        component: _import('demo/ReportQuery')
      },
      {
        path: 'DischargeManagement',
        name: 'DischargeManagement',
        meta: {
          title: '出院管理',
          auth: true
        },
        component: _import('demo/DischargeManagement')
      },
      {
        path: 'PrescriptionManagement',
        name: 'PrescriptionManagement',
        meta: {
          title: '处方管理',
          auth: true
        },
        component: _import('demo/PrescriptionManagement')
      },
      {
        path: 'PersonalInformation',
        name: 'PersonalInformation',
        meta: {
          title: '个人信息',
          auth: true
        },
        component: _import('demo/PersonalInformation')
      },
      {
        path: 'Case',
        name: 'Case',
        meta: {
          title: '病历夹',
          auth: true
        },
        component: _import('demo/Case')
      },
      {
        path: 'AddCase',
        name: 'AddCase',
        meta: {
          title: '添加病历',
          auth: true
        },
        component: _import('demo/AddCase')
      },
      {
        path: 'Report',
        name: 'Report',
        meta: {
          title: '报告详情',
          auth: true
        },
        component: _import('demo/Report')
      },
      {
        path: 'AddReport',
        name: 'AddReport',
        meta: {
          title: '添加报告',
          auth: true
        },
        component: _import('demo/AddReport')
      },

      {
        path: 'LeaveHospital',
        name: 'LeaveHospital',
        meta: {
          title: '出院打印',
          auth: true
        },
        component: _import('demo/LeaveHospital')
      },
      {
        path: 'Consult',
        name: 'Consult',
        meta: {
          title: '就诊咨询',
          auth: true
        },
        component: _import('demo/Consult')
      },



      // 系统 前端日志
      {
        path: 'log',
        name: 'log',
        meta: {
          title: '前端日志',
          auth: true
        },
        component: _import('system/log')
      },
      // 刷新页面 必须保留
      {
        path: 'refresh',
        name: 'refresh',
        hidden: true,
        component: _import('system/function/refresh')
      },
      // 页面重定向 必须保留
      {
        path: 'redirect/:route*',
        name: 'redirect',
        hidden: true,
        component: _import('system/function/redirect')
      }
    ]
  }
]

/**
 * 在主框架之外显示
 */
const frameOut = [
  // 登录
  {
    path: '/login',
    name: 'login',
    component: _import('system/login')
  }
]

/**
 * 错误页面
 */
const errorPage = [
  {
    path: '*',
    name: '404',
    component: _import('system/error/404')
  }
]

// 导出需要显示菜单的
export const frameInRoutes = frameIn

// 重新组织后导出
export default [
  ...frameIn,
  ...frameOut,
  ...errorPage
]
