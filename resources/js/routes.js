let routes=[
{
  path: '/',
  name: '',
  component: require('./components/content/tentangJobhun.vue').default
},
{
  path: '/jobhun-careerHub',
  name: 'jobhunCareerHub',
  component: require('./components/content/layanan/jobhunCareerHub').default
},
{
  path: '/jobhun-academy',
  name: 'jobhunAcademy',
  component: require('./components/content/layanan/jobhunAcademy').default
},
{
  path: '/jobhun-mediaPatner',
  name: 'jobhunMediaPatner',
  component: require('./components/content/layanan/jobhunMediaPatner').default
},
{
  path: '/jobhun-talentPool',
  name: 'jobhunTalentPool',
  component: require('./components/content/layanan/jobhunTalentPool').default
},
//program

//pasangLoker
{
  path: '/pasang-loker',
  name: 'pasangLoker',
  component: require('./components/content/pasangLoker').default
}
];
export default routes

// Coba