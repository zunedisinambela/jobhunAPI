let routes=[
{
  path: '/',
  name: '',
  component: require('./components/content/indexJobhun.vue').default
},
{
  path: '/tentangJobhun',
  name: '',
  component: require('./components/content/tentangJobhun.vue').default
},
{
  path: '/jobhun-careerHub',
  name: 'jobhunCareerHub',
  component: require('./components/content/layanan/jobhunCareerHub').default
},
//button posting loker

// {
//   path: '/pasang-loker',
//   name: 'pasangLoker',
//   component: require ('./components/content/pasangLoker').default
// },
{
  path: '/jobhun-academy',
  name: 'jobhunAcademy',
  component: require('./components/content/layanan/jobhunAcademy').default
},

// DetailJobhun Academy
{
  path: '/content-writer',
  name: 'ContentWriter',
    component: require('./components/content/layanan/jobhunacademy/contentWriter').default
},


{
  path: '/jobhun-mediaPatner',
  name: 'jobhunMediaPatner',
  component: require('./components/content/layanan/jobhunMediaPatner').default
},
{
  path: '/formMediaPartner',
  name: 'formMediaPatner',
  component: require('./components/content/layanan/formMediaPartner').default
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
},
{
  path: '/carrerHubPrem',
  name: 'Carrerhubpremium',
  component: require('./components/content/carrerHubPrem').default
},
{
  path: '/carrerHubReg',
  name: 'carrerHubReg',
  component: require('./components/content/carrerHubReg').default
}
];
export default routes

// Coba