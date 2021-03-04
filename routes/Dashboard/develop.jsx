import {
  DocumentList,
  DocumentDetail,
  DocumentEdit,
  ProgramList,
  ProgramAdd,
  ProgramDetail,
  ProgramEdit,
  ToDoList,
  ToDoAdd,
  ToDoDetail,
  ToDoEdit,
  TrainingAdd,
  TrainingList,
  TrainingDetail,
  TrainingEdit,
} from '~/views/Dashboard/Develop/Library'
import {
  Assignments,
  CareerList,
  Engagement,
  CompanyPerformance as CompanyReview,
  CompanyTask,
  CompanyTraining,
  CompanyTrainingSchedule,
  Certifications,
  Report,
} from '~/views/Dashboard/Manage/Reports'
import Landing from '~/views/Dashboard/Develop/Landing'
import { UserRoles } from '~/services/config'

const developRoutes = [
  {
    path: '/library/library',
    auth: true,
    title: 'Library',
    name: 'library',
    header: true,
    show: true,
    permission: UserRoles.EMPLOYEE,
  },
  {
    path: '/library/documents',
    auth: true,
    title: 'Documents',
    name: 'documents',
    header: false,
    component: DocumentList,
    show: true,
    permission: UserRoles.EMPLOYEE,
  },
  {
    path: '/library/documents/:activeTab/:id/view',
    auth: true,
    title: 'Document Detail',
    name: 'document-detail',
    header: false,
    component: DocumentDetail,
    show: false,
  },
  {
    path: '/library/documents/:activeTab/:id/edit',
    auth: true,
    title: 'Document Detail',
    name: 'document-detail',
    header: false,
    component: DocumentEdit,
    show: false,
  },
  {
    path: '/library/programs',
    auth: true,
    title: 'Programs',
    name: 'programs',
    header: false,
    component: ProgramList,
    show: true,
    permission: UserRoles.EMPLOYEE,
  },
  {
    path: '/library/programs/:activeTab/new',
    auth: true,
    title: 'Programs Add',
    name: 'programs-add',
    header: false,
    component: ProgramAdd,
    show: false,
    permission: UserRoles.ADMIN,
  },
  {
    path: '/library/programs/:activeTab/:id/view',
    auth: true,
    title: 'Programs Detail',
    name: 'programs-detail',
    header: false,
    component: ProgramDetail,
    show: false,
    permission: UserRoles.EMPLOYEE,
  },
  {
    path: '/library/programs/:activeTab/:id/edit',
    auth: true,
    title: 'Programs Edit',
    name: 'programs-edit',
    header: false,
    component: ProgramEdit,
    show: false,
    permission: UserRoles.ADMIN,
  },
  // {
  //   path: '/library/questionnaires',
  //   auth: true,
  //   title: 'Questionnaires',
  //   name: 'questionnaires',
  //   header: false,
  //   component: TrainingList,
  // },
  {
    path: '/library/to-do',
    auth: true,
    title: 'To-dos',
    name: 'to-do',
    header: false,
    component: ToDoList,
    show: true,
    permission: UserRoles.EMPLOYEE,
  },
  {
    path: '/library/to-do/:activeTab/new',
    auth: true,
    title: 'To Do Add',
    name: 'to-do-add',
    header: false,
    component: ToDoAdd,
    show: false,
    permission: UserRoles.ADMIN,
  },
  {
    path: '/library/to-do/:activeTab/:id/view',
    auth: true,
    title: 'To Do Detail',
    name: 'to-do-detail',
    header: false,
    component: ToDoDetail,
    show: false,
    permission: UserRoles.EMPLOYEE,
  },
  {
    path: '/library/to-do/:activeTab/:id/edit',
    auth: true,
    title: 'To Do Edit',
    name: 'to-do-edit',
    header: false,
    component: ToDoEdit,
    show: false,
    permission: UserRoles.ADMIN,
  },
  {
    path: '/library/training',
    auth: true,
    title: 'Training',
    name: 'training',
    header: false,
    component: TrainingList,
    show: true,
    permission: UserRoles.EMPLOYEE,
  },
  {
    path: '/library/training/:activeTab/new',
    auth: true,
    title: 'Training Add',
    name: 'training-add',
    header: false,
    component: TrainingAdd,
    show: false,
  },
  {
    path: '/library/training/:activeTab/:id/view',
    auth: true,
    title: 'Training Detail',
    name: 'training-detail',
    header: false,
    component: TrainingDetail,
    show: false,
  },
  {
    path: '/library/training/:activeTab/:id/edit',
    auth: true,
    title: 'Training Edit',
    name: 'training-edit',
    header: false,
    component: TrainingEdit,
    show: false,
  },

  {
    path: '/library/reports',
    auth: true,
    title: 'Reports',
    name: 'reports',
    header: true,
    show: true,
    permission: UserRoles.EMPLOYEE,
  },
  {
    path: '/hcm/reports',
    auth: true,
    title: 'All Reports',
    name: 'reports',
    header: false,
    component: Report,
    show: true,
    permission: UserRoles.EMPLOYEE,
  },
  {
    path: '/library/report-assignments',
    auth: true,
    title: 'Assignments',
    name: 'assignments',
    header: false,
    component: Assignments,
    show: true,
    permission: UserRoles.EMPLOYEE,
  },
  {
    path: '/library/report-careers',
    auth: true,
    title: 'Career',
    name: 'career',
    header: false,
    component: CareerList,
    show: true,
    permission: UserRoles.EMPLOYEE,
  },
  {
    path: '/library/report-certifications',
    auth: true,
    title: 'Certifications',
    name: 'certifications',
    header: false,
    component: Certifications,
    show: true,
    permission: UserRoles.EMPLOYEE,
  },
  {
    path: '/library/report-engagement',
    auth: true,
    title: 'Engagement',
    name: 'engagement',
    header: false,
    component: Engagement,
    show: true,
    permission: UserRoles.EMPLOYEE,
  },
  {
    path: '/library/report-performance',
    auth: true,
    title: 'Performance',
    name: 'performance',
    header: false,
    component: CompanyReview,
    show: true,
    permission: UserRoles.EMPLOYEE,
  },
  {
    path: '/library/report-task',
    auth: true,
    title: 'Tasks',
    name: 'tasks',
    header: false,
    component: CompanyTask,
    show: true,
    permission: UserRoles.EMPLOYEE,
  },
  {
    path: '/library/report-training',
    auth: true,
    title: 'Training',
    name: 'training',
    header: false,
    component: CompanyTraining,
    show: true,
    permission: UserRoles.EMPLOYEE,
  },
  {
    path: '/library/report-training-schedule',
    auth: true,
    title: 'Training Schedule',
    name: 'training-schedule',
    header: false,
    component: CompanyTrainingSchedule,
    show: true,
    permission: UserRoles.EMPLOYEE,
  },

  {
    redirect: true,
    path: '/library',
    to: '/library/training',
    name: 'Library',
    component: Landing,
    permission: UserRoles.EMPLOYEE,
  },
]

export default developRoutes
