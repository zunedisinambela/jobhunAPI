let routes=[
{
  path: '/',
  name: '',
  component: require('./components/content/Content.vue').default
},
{
  path: '/jobhunCareerHub',
  name: 'jobhunCareerHub',
  component: require('./components/content/layanan/jobhunCareerHub').default
},
{
  path: '/jobhunAcademy',
  name: 'jobhunAcademy',
  component: require('./components/content/layanan/jobhunAcademy').default
},
{
  path: '/jobhunMediaPatner',
  name: 'jobhunMediaPatner',
  component: require('./components/content/layanan/jobhunMediaPatner').default
},
{
  path: '/jobhunTalentPool',
  name: 'jobhunTalentPool',
  component: require('./components/content/layanan/jobhunTalentPool').default
},
//program
{
  path: 'johbunIntership',
  name: 'jobhunIntership',
  component: require('./components/content/program/jobhunIntership').default
},
{
  path: 'johbunTalk',
  name: 'jobhunTalk',
  component: require('./components/content/program/jobhunTalk').default
},
{
  path: 'johbunVisit',
  name: 'jobhunVisit',
  component: require('./components/content/program/jobhunVisit').default
},

];
export default routes

// Coba