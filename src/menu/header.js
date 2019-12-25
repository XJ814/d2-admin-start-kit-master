// 菜单 顶栏
export default [
  { path: '/index', title: '首页', icon: 'home' },
  {
    title: '医生管理系统',
    icon: 'folder-o',
    children: [
      { path: '/MyPatient', title: '我的病人' },
      { path: '/CaseManagement', title: '病例管理' },
      { path: '/HospitalizationManagement', title: '住院管理' },
      { path: '/ReportQuery', title: '报告查询' },
      { path: '/DischargeManagement', title: '出院管理' },
      { path: '/PrescriptionManagement', title: '处方管理' },
      { path: '/Consult', title: '就诊咨询' },
      { path: '/PersonalInformation', title: '个人信息' }

    ]
  },
  {
    title: '护士管理系统',
    icon: 'folder-o',
    children: [

    ]
  },
  {
    title: '健康档案管理系统',
    icon: 'folder-o',
    children: [

    ]
  },
  {
    title: '后台管理系统',
    icon: 'folder-o',
    children: [

    ]
  },

]
