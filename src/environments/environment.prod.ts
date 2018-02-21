// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false ,
 // apiURL: 'http://sintec-cloudmanager.cloud.operative.com:8080/v1/cloud-management/managed-instances/count',
  
  // Instance API Count
  apiInstanceCountURL: 'http://sintec-cloudmanager.cloud.operative.com:8080/v1/cloud-management/managed-instances/count',
  countLabelPropertyName: 'environment',
  countDataPropertyNames: 'count',
  
  // State API
  // http://sintec-cloudmanager.cloud.operative.com:8080/v1/cloud-management/managed-instances/state
  apiStateURL: 'http://sintec-cloudmanager.cloud.operative.com:8080/v1/cloud-management/managed-instances/state',
  stateLabelProperty: 'environment',
  stateDataPropertyNames: 'runningCnt,stoppedCnt',
  
  // Type Count URL
  // http://sintec-cloudmanager.cloud.operative.com:8080/v1/cloud-management/managed-instances/types/Count
  apiTypeCountURL: 'http://sintec-cloudmanager.cloud.operative.com:8080/v1/cloud-management/managed-instances/types/Count',
  typeCountLabelProperty: 'instanceType',
  typeCountAPIPropertyNames: 'count',
  
  // Instance Type Details API
  // http://sintec-cloudmanager.cloud.operative.com:8080/v1/cloud-management/managed-instances/types
  apiInstanceDetailsURL: 'http://sintec-cloudmanager.cloud.operative.com:8080/v1/cloud-management/managed-instances/types',
  instanceDataPropertyNames: 'count',
  
  
  gChartTypes: 'bar,line,doughnut,radar,pie,polarArea'
};
