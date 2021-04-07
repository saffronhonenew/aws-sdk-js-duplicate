import * as AWS from '../clients/all';
export abstract class ConfigurationServicePlaceholders {
  acm?: AWS.ACM.Types.ClientConfiguration;
  apigateway?: AWS.APIGateway.Types.ClientConfiguration;
  applicationautoscaling?: AWS.ApplicationAutoScaling.Types.ClientConfiguration;
  appstream?: AWS.AppStream.Types.ClientConfiguration;
  autoscaling?: AWS.AutoScaling.Types.ClientConfiguration;
  batch?: AWS.Batch.Types.ClientConfiguration;
  budgets?: AWS.Budgets.Types.ClientConfiguration;
  clouddirectory?: AWS.CloudDirectory.Types.ClientConfiguration;
  cloudformation?: AWS.CloudFormation.Types.ClientConfiguration;
  cloudfront?: AWS.CloudFront.Types.ClientConfiguration;
  cloudhsm?: AWS.CloudHSM.Types.ClientConfiguration;
  cloudsearch?: AWS.CloudSearch.Types.ClientConfiguration;
  cloudsearchdomain?: AWS.CloudSearchDomain.Types.ClientConfiguration;
  cloudtrail?: AWS.CloudTrail.Types.ClientConfiguration;
  cloudwatch?: AWS.CloudWatch.Types.ClientConfiguration;
  cloudwatchevents?: AWS.CloudWatchEvents.Types.ClientConfiguration;
  cloudwatchlogs?: AWS.CloudWatchLogs.Types.ClientConfiguration;
  codebuild?: AWS.CodeBuild.Types.ClientConfiguration;
  codecommit?: AWS.CodeCommit.Types.ClientConfiguration;
  codedeploy?: AWS.CodeDeploy.Types.ClientConfiguration;
  codepipeline?: AWS.CodePipeline.Types.ClientConfiguration;
  cognitoidentity?: AWS.CognitoIdentity.Types.ClientConfiguration;
  cognitoidentityserviceprovider?: AWS.CognitoIdentityServiceProvider.Types.ClientConfiguration;
  cognitosync?: AWS.CognitoSync.Types.ClientConfiguration;
  configservice?: AWS.ConfigService.Types.ClientConfiguration;
  cur?: AWS.CUR.Types.ClientConfiguration;
  datapipeline?: AWS.DataPipeline.Types.ClientConfiguration;
  devicefarm?: AWS.DeviceFarm.Types.ClientConfiguration;
  directconnect?: AWS.DirectConnect.Types.ClientConfiguration;
  directoryservice?: AWS.DirectoryService.Types.ClientConfiguration;
  discovery?: AWS.Discovery.Types.ClientConfiguration;
  dms?: AWS.DMS.Types.ClientConfiguration;
  dynamodb?: AWS.DynamoDB.Types.ClientConfiguration;
  dynamodbstreams?: AWS.DynamoDBStreams.Types.ClientConfiguration;
  ec2?: AWS.EC2.Types.ClientConfiguration;
  ecr?: AWS.ECR.Types.ClientConfiguration;
  ecs?: AWS.ECS.Types.ClientConfiguration;
  efs?: AWS.EFS.Types.ClientConfiguration;
  elasticache?: AWS.ElastiCache.Types.ClientConfiguration;
  elasticbeanstalk?: AWS.ElasticBeanstalk.Types.ClientConfiguration;
  elb?: AWS.ELB.Types.ClientConfiguration;
  elbv2?: AWS.ELBv2.Types.ClientConfiguration;
  emr?: AWS.EMR.Types.ClientConfiguration;
  es?: AWS.ES.Types.ClientConfiguration;
  elastictranscoder?: AWS.ElasticTranscoder.Types.ClientConfiguration;
  firehose?: AWS.Firehose.Types.ClientConfiguration;
  gamelift?: AWS.GameLift.Types.ClientConfiguration;
  glacier?: AWS.Glacier.Types.ClientConfiguration;
  health?: AWS.Health.Types.ClientConfiguration;
  iam?: AWS.IAM.Types.ClientConfiguration;
  importexport?: AWS.ImportExport.Types.ClientConfiguration;
  inspector?: AWS.Inspector.Types.ClientConfiguration;
  iot?: AWS.Iot.Types.ClientConfiguration;
  iotdata?: AWS.IotData.Types.ClientConfiguration;
  kinesis?: AWS.Kinesis.Types.ClientConfiguration;
  kinesisanalytics?: AWS.KinesisAnalytics.Types.ClientConfiguration;
  kms?: AWS.KMS.Types.ClientConfiguration;
  lambda?: AWS.Lambda.Types.ClientConfiguration;
  lexruntime?: AWS.LexRuntime.Types.ClientConfiguration;
  lightsail?: AWS.Lightsail.Types.ClientConfiguration;
  machinelearning?: AWS.MachineLearning.Types.ClientConfiguration;
  marketplacecommerceanalytics?: AWS.MarketplaceCommerceAnalytics.Types.ClientConfiguration;
  marketplacemetering?: AWS.MarketplaceMetering.Types.ClientConfiguration;
  mturk?: AWS.MTurk.Types.ClientConfiguration;
  mobileanalytics?: AWS.MobileAnalytics.Types.ClientConfiguration;
  opsworks?: AWS.OpsWorks.Types.ClientConfiguration;
  opsworkscm?: AWS.OpsWorksCM.Types.ClientConfiguration;
  organizations?: AWS.Organizations.Types.ClientConfiguration;
  pinpoint?: AWS.Pinpoint.Types.ClientConfiguration;
  polly?: AWS.Polly.Types.ClientConfiguration;
  rds?: AWS.RDS.Types.ClientConfiguration;
  redshift?: AWS.Redshift.Types.ClientConfiguration;
  rekognition?: AWS.Rekognition.Types.ClientConfiguration;
  resourcegroupstaggingapi?: AWS.ResourceGroupsTaggingAPI.Types.ClientConfiguration;
  route53?: AWS.Route53.Types.ClientConfiguration;
  route53domains?: AWS.Route53Domains.Types.ClientConfiguration;
  s3?: AWS.S3.Types.ClientConfiguration;
  s3control?: AWS.S3Control.Types.ClientConfiguration;
  servicecatalog?: AWS.ServiceCatalog.Types.ClientConfiguration;
  ses?: AWS.SES.Types.ClientConfiguration;
  shield?: AWS.Shield.Types.ClientConfiguration;
  simpledb?: AWS.SimpleDB.Types.ClientConfiguration;
  sms?: AWS.SMS.Types.ClientConfiguration;
  snowball?: AWS.Snowball.Types.ClientConfiguration;
  sns?: AWS.SNS.Types.ClientConfiguration;
  sqs?: AWS.SQS.Types.ClientConfiguration;
  ssm?: AWS.SSM.Types.ClientConfiguration;
  storagegateway?: AWS.StorageGateway.Types.ClientConfiguration;
  stepfunctions?: AWS.StepFunctions.Types.ClientConfiguration;
  sts?: AWS.STS.Types.ClientConfiguration;
  support?: AWS.Support.Types.ClientConfiguration;
  swf?: AWS.SWF.Types.ClientConfiguration;
  xray?: AWS.XRay.Types.ClientConfiguration;
  waf?: AWS.WAF.Types.ClientConfiguration;
  wafregional?: AWS.WAFRegional.Types.ClientConfiguration;
  workdocs?: AWS.WorkDocs.Types.ClientConfiguration;
  workspaces?: AWS.WorkSpaces.Types.ClientConfiguration;
  codestar?: AWS.CodeStar.Types.ClientConfiguration;
  lexmodelbuildingservice?: AWS.LexModelBuildingService.Types.ClientConfiguration;
  marketplaceentitlementservice?: AWS.MarketplaceEntitlementService.Types.ClientConfiguration;
  athena?: AWS.Athena.Types.ClientConfiguration;
  greengrass?: AWS.Greengrass.Types.ClientConfiguration;
  dax?: AWS.DAX.Types.ClientConfiguration;
  migrationhub?: AWS.MigrationHub.Types.ClientConfiguration;
  cloudhsmv2?: AWS.CloudHSMV2.Types.ClientConfiguration;
  glue?: AWS.Glue.Types.ClientConfiguration;
  mobile?: AWS.Mobile.Types.ClientConfiguration;
  pricing?: AWS.Pricing.Types.ClientConfiguration;
  costexplorer?: AWS.CostExplorer.Types.ClientConfiguration;
  mediaconvert?: AWS.MediaConvert.Types.ClientConfiguration;
  medialive?: AWS.MediaLive.Types.ClientConfiguration;
  mediapackage?: AWS.MediaPackage.Types.ClientConfiguration;
  mediastore?: AWS.MediaStore.Types.ClientConfiguration;
  mediastoredata?: AWS.MediaStoreData.Types.ClientConfiguration;
  appsync?: AWS.AppSync.Types.ClientConfiguration;
  guardduty?: AWS.GuardDuty.Types.ClientConfiguration;
  mq?: AWS.MQ.Types.ClientConfiguration;
  comprehend?: AWS.Comprehend.Types.ClientConfiguration;
  iotjobsdataplane?: AWS.IoTJobsDataPlane.Types.ClientConfiguration;
  kinesisvideoarchivedmedia?: AWS.KinesisVideoArchivedMedia.Types.ClientConfiguration;
  kinesisvideomedia?: AWS.KinesisVideoMedia.Types.ClientConfiguration;
  kinesisvideo?: AWS.KinesisVideo.Types.ClientConfiguration;
  sagemakerruntime?: AWS.SageMakerRuntime.Types.ClientConfiguration;
  sagemaker?: AWS.SageMaker.Types.ClientConfiguration;
  translate?: AWS.Translate.Types.ClientConfiguration;
  resourcegroups?: AWS.ResourceGroups.Types.ClientConfiguration;
  alexaforbusiness?: AWS.AlexaForBusiness.Types.ClientConfiguration;
  cloud9?: AWS.Cloud9.Types.ClientConfiguration;
  serverlessapplicationrepository?: AWS.ServerlessApplicationRepository.Types.ClientConfiguration;
  servicediscovery?: AWS.ServiceDiscovery.Types.ClientConfiguration;
  workmail?: AWS.WorkMail.Types.ClientConfiguration;
  autoscalingplans?: AWS.AutoScalingPlans.Types.ClientConfiguration;
  transcribeservice?: AWS.TranscribeService.Types.ClientConfiguration;
  connect?: AWS.Connect.Types.ClientConfiguration;
  acmpca?: AWS.ACMPCA.Types.ClientConfiguration;
  fms?: AWS.FMS.Types.ClientConfiguration;
  secretsmanager?: AWS.SecretsManager.Types.ClientConfiguration;
  iotanalytics?: AWS.IoTAnalytics.Types.ClientConfiguration;
  iot1clickdevicesservice?: AWS.IoT1ClickDevicesService.Types.ClientConfiguration;
  iot1clickprojects?: AWS.IoT1ClickProjects.Types.ClientConfiguration;
  pi?: AWS.PI.Types.ClientConfiguration;
  neptune?: AWS.Neptune.Types.ClientConfiguration;
  mediatailor?: AWS.MediaTailor.Types.ClientConfiguration;
  eks?: AWS.EKS.Types.ClientConfiguration;
  macie?: AWS.Macie.Types.ClientConfiguration;
  dlm?: AWS.DLM.Types.ClientConfiguration;
  signer?: AWS.Signer.Types.ClientConfiguration;
  chime?: AWS.Chime.Types.ClientConfiguration;
  pinpointemail?: AWS.PinpointEmail.Types.ClientConfiguration;
  ram?: AWS.RAM.Types.ClientConfiguration;
  route53resolver?: AWS.Route53Resolver.Types.ClientConfiguration;
  pinpointsmsvoice?: AWS.PinpointSMSVoice.Types.ClientConfiguration;
  quicksight?: AWS.QuickSight.Types.ClientConfiguration;
  rdsdataservice?: AWS.RDSDataService.Types.ClientConfiguration;
  amplify?: AWS.Amplify.Types.ClientConfiguration;
  datasync?: AWS.DataSync.Types.ClientConfiguration;
  robomaker?: AWS.RoboMaker.Types.ClientConfiguration;
  transfer?: AWS.Transfer.Types.ClientConfiguration;
  globalaccelerator?: AWS.GlobalAccelerator.Types.ClientConfiguration;
  comprehendmedical?: AWS.ComprehendMedical.Types.ClientConfiguration;
  kinesisanalyticsv2?: AWS.KinesisAnalyticsV2.Types.ClientConfiguration;
  mediaconnect?: AWS.MediaConnect.Types.ClientConfiguration;
  fsx?: AWS.FSx.Types.ClientConfiguration;
  securityhub?: AWS.SecurityHub.Types.ClientConfiguration;
  appmesh?: AWS.AppMesh.Types.ClientConfiguration;
  licensemanager?: AWS.LicenseManager.Types.ClientConfiguration;
  kafka?: AWS.Kafka.Types.ClientConfiguration;
  apigatewaymanagementapi?: AWS.ApiGatewayManagementApi.Types.ClientConfiguration;
  apigatewayv2?: AWS.ApiGatewayV2.Types.ClientConfiguration;
  docdb?: AWS.DocDB.Types.ClientConfiguration;
  backup?: AWS.Backup.Types.ClientConfiguration;
  worklink?: AWS.WorkLink.Types.ClientConfiguration;
  textract?: AWS.Textract.Types.ClientConfiguration;
  managedblockchain?: AWS.ManagedBlockchain.Types.ClientConfiguration;
  mediapackagevod?: AWS.MediaPackageVod.Types.ClientConfiguration;
  groundstation?: AWS.GroundStation.Types.ClientConfiguration;
  iotthingsgraph?: AWS.IoTThingsGraph.Types.ClientConfiguration;
  iotevents?: AWS.IoTEvents.Types.ClientConfiguration;
  ioteventsdata?: AWS.IoTEventsData.Types.ClientConfiguration;
  personalize?: AWS.Personalize.Types.ClientConfiguration;
  personalizeevents?: AWS.PersonalizeEvents.Types.ClientConfiguration;
  personalizeruntime?: AWS.PersonalizeRuntime.Types.ClientConfiguration;
  applicationinsights?: AWS.ApplicationInsights.Types.ClientConfiguration;
  servicequotas?: AWS.ServiceQuotas.Types.ClientConfiguration;
  ec2instanceconnect?: AWS.EC2InstanceConnect.Types.ClientConfiguration;
  eventbridge?: AWS.EventBridge.Types.ClientConfiguration;
  lakeformation?: AWS.LakeFormation.Types.ClientConfiguration;
  forecastservice?: AWS.ForecastService.Types.ClientConfiguration;
  forecastqueryservice?: AWS.ForecastQueryService.Types.ClientConfiguration;
  qldb?: AWS.QLDB.Types.ClientConfiguration;
  qldbsession?: AWS.QLDBSession.Types.ClientConfiguration;
  workmailmessageflow?: AWS.WorkMailMessageFlow.Types.ClientConfiguration;
  codestarnotifications?: AWS.CodeStarNotifications.Types.ClientConfiguration;
  savingsplans?: AWS.SavingsPlans.Types.ClientConfiguration;
  sso?: AWS.SSO.Types.ClientConfiguration;
  ssooidc?: AWS.SSOOIDC.Types.ClientConfiguration;
  marketplacecatalog?: AWS.MarketplaceCatalog.Types.ClientConfiguration;
  dataexchange?: AWS.DataExchange.Types.ClientConfiguration;
  sesv2?: AWS.SESV2.Types.ClientConfiguration;
  migrationhubconfig?: AWS.MigrationHubConfig.Types.ClientConfiguration;
  connectparticipant?: AWS.ConnectParticipant.Types.ClientConfiguration;
  appconfig?: AWS.AppConfig.Types.ClientConfiguration;
  iotsecuretunneling?: AWS.IoTSecureTunneling.Types.ClientConfiguration;
  wafv2?: AWS.WAFV2.Types.ClientConfiguration;
  elasticinference?: AWS.ElasticInference.Types.ClientConfiguration;
  imagebuilder?: AWS.Imagebuilder.Types.ClientConfiguration;
  schemas?: AWS.Schemas.Types.ClientConfiguration;
  accessanalyzer?: AWS.AccessAnalyzer.Types.ClientConfiguration;
  codegurureviewer?: AWS.CodeGuruReviewer.Types.ClientConfiguration;
  codeguruprofiler?: AWS.CodeGuruProfiler.Types.ClientConfiguration;
  computeoptimizer?: AWS.ComputeOptimizer.Types.ClientConfiguration;
  frauddetector?: AWS.FraudDetector.Types.ClientConfiguration;
  kendra?: AWS.Kendra.Types.ClientConfiguration;
  networkmanager?: AWS.NetworkManager.Types.ClientConfiguration;
  outposts?: AWS.Outposts.Types.ClientConfiguration;
  augmentedairuntime?: AWS.AugmentedAIRuntime.Types.ClientConfiguration;
  ebs?: AWS.EBS.Types.ClientConfiguration;
  kinesisvideosignalingchannels?: AWS.KinesisVideoSignalingChannels.Types.ClientConfiguration;
  detective?: AWS.Detective.Types.ClientConfiguration;
  codestarconnections?: AWS.CodeStarconnections.Types.ClientConfiguration;
  synthetics?: AWS.Synthetics.Types.ClientConfiguration;
  iotsitewise?: AWS.IoTSiteWise.Types.ClientConfiguration;
  macie2?: AWS.Macie2.Types.ClientConfiguration;
  codeartifact?: AWS.CodeArtifact.Types.ClientConfiguration;
  honeycode?: AWS.Honeycode.Types.ClientConfiguration;
  ivs?: AWS.IVS.Types.ClientConfiguration;
  braket?: AWS.Braket.Types.ClientConfiguration;
  identitystore?: AWS.IdentityStore.Types.ClientConfiguration;
  appflow?: AWS.Appflow.Types.ClientConfiguration;
  redshiftdata?: AWS.RedshiftData.Types.ClientConfiguration;
  ssoadmin?: AWS.SSOAdmin.Types.ClientConfiguration;
  timestreamquery?: AWS.TimestreamQuery.Types.ClientConfiguration;
  timestreamwrite?: AWS.TimestreamWrite.Types.ClientConfiguration;
  s3outposts?: AWS.S3Outposts.Types.ClientConfiguration;
  databrew?: AWS.DataBrew.Types.ClientConfiguration;
  servicecatalogappregistry?: AWS.ServiceCatalogAppRegistry.Types.ClientConfiguration;
  networkfirewall?: AWS.NetworkFirewall.Types.ClientConfiguration;
  mwaa?: AWS.MWAA.Types.ClientConfiguration;
  amplifybackend?: AWS.AmplifyBackend.Types.ClientConfiguration;
  appintegrations?: AWS.AppIntegrations.Types.ClientConfiguration;
  connectcontactlens?: AWS.ConnectContactLens.Types.ClientConfiguration;
  devopsguru?: AWS.DevOpsGuru.Types.ClientConfiguration;
  ecrpublic?: AWS.ECRPUBLIC.Types.ClientConfiguration;
  lookoutvision?: AWS.LookoutVision.Types.ClientConfiguration;
  sagemakerfeaturestoreruntime?: AWS.SageMakerFeatureStoreRuntime.Types.ClientConfiguration;
  customerprofiles?: AWS.CustomerProfiles.Types.ClientConfiguration;
  auditmanager?: AWS.AuditManager.Types.ClientConfiguration;
  emrcontainers?: AWS.EMRcontainers.Types.ClientConfiguration;
  healthlake?: AWS.HealthLake.Types.ClientConfiguration;
  sagemakeredge?: AWS.SagemakerEdge.Types.ClientConfiguration;
  amp?: AWS.Amp.Types.ClientConfiguration;
  greengrassv2?: AWS.GreengrassV2.Types.ClientConfiguration;
  iotdeviceadvisor?: AWS.IotDeviceAdvisor.Types.ClientConfiguration;
  iotfleethub?: AWS.IoTFleetHub.Types.ClientConfiguration;
  iotwireless?: AWS.IoTWireless.Types.ClientConfiguration;
  location?: AWS.Location.Types.ClientConfiguration;
  wellarchitected?: AWS.WellArchitected.Types.ClientConfiguration;
  lexmodelsv2?: AWS.LexModelsV2.Types.ClientConfiguration;
  lexruntimev2?: AWS.LexRuntimeV2.Types.ClientConfiguration;
  fis?: AWS.Fis.Types.ClientConfiguration;
  lookoutmetrics?: AWS.LookoutMetrics.Types.ClientConfiguration;
  mgn?: AWS.Mgn.Types.ClientConfiguration;
}
export interface ConfigurationServiceApiVersions {
  acm?: AWS.ACM.Types.apiVersion;
  apigateway?: AWS.APIGateway.Types.apiVersion;
  applicationautoscaling?: AWS.ApplicationAutoScaling.Types.apiVersion;
  appstream?: AWS.AppStream.Types.apiVersion;
  autoscaling?: AWS.AutoScaling.Types.apiVersion;
  batch?: AWS.Batch.Types.apiVersion;
  budgets?: AWS.Budgets.Types.apiVersion;
  clouddirectory?: AWS.CloudDirectory.Types.apiVersion;
  cloudformation?: AWS.CloudFormation.Types.apiVersion;
  cloudfront?: AWS.CloudFront.Types.apiVersion;
  cloudhsm?: AWS.CloudHSM.Types.apiVersion;
  cloudsearch?: AWS.CloudSearch.Types.apiVersion;
  cloudsearchdomain?: AWS.CloudSearchDomain.Types.apiVersion;
  cloudtrail?: AWS.CloudTrail.Types.apiVersion;
  cloudwatch?: AWS.CloudWatch.Types.apiVersion;
  cloudwatchevents?: AWS.CloudWatchEvents.Types.apiVersion;
  cloudwatchlogs?: AWS.CloudWatchLogs.Types.apiVersion;
  codebuild?: AWS.CodeBuild.Types.apiVersion;
  codecommit?: AWS.CodeCommit.Types.apiVersion;
  codedeploy?: AWS.CodeDeploy.Types.apiVersion;
  codepipeline?: AWS.CodePipeline.Types.apiVersion;
  cognitoidentity?: AWS.CognitoIdentity.Types.apiVersion;
  cognitoidentityserviceprovider?: AWS.CognitoIdentityServiceProvider.Types.apiVersion;
  cognitosync?: AWS.CognitoSync.Types.apiVersion;
  configservice?: AWS.ConfigService.Types.apiVersion;
  cur?: AWS.CUR.Types.apiVersion;
  datapipeline?: AWS.DataPipeline.Types.apiVersion;
  devicefarm?: AWS.DeviceFarm.Types.apiVersion;
  directconnect?: AWS.DirectConnect.Types.apiVersion;
  directoryservice?: AWS.DirectoryService.Types.apiVersion;
  discovery?: AWS.Discovery.Types.apiVersion;
  dms?: AWS.DMS.Types.apiVersion;
  dynamodb?: AWS.DynamoDB.Types.apiVersion;
  dynamodbstreams?: AWS.DynamoDBStreams.Types.apiVersion;
  ec2?: AWS.EC2.Types.apiVersion;
  ecr?: AWS.ECR.Types.apiVersion;
  ecs?: AWS.ECS.Types.apiVersion;
  efs?: AWS.EFS.Types.apiVersion;
  elasticache?: AWS.ElastiCache.Types.apiVersion;
  elasticbeanstalk?: AWS.ElasticBeanstalk.Types.apiVersion;
  elb?: AWS.ELB.Types.apiVersion;
  elbv2?: AWS.ELBv2.Types.apiVersion;
  emr?: AWS.EMR.Types.apiVersion;
  es?: AWS.ES.Types.apiVersion;
  elastictranscoder?: AWS.ElasticTranscoder.Types.apiVersion;
  firehose?: AWS.Firehose.Types.apiVersion;
  gamelift?: AWS.GameLift.Types.apiVersion;
  glacier?: AWS.Glacier.Types.apiVersion;
  health?: AWS.Health.Types.apiVersion;
  iam?: AWS.IAM.Types.apiVersion;
  importexport?: AWS.ImportExport.Types.apiVersion;
  inspector?: AWS.Inspector.Types.apiVersion;
  iot?: AWS.Iot.Types.apiVersion;
  iotdata?: AWS.IotData.Types.apiVersion;
  kinesis?: AWS.Kinesis.Types.apiVersion;
  kinesisanalytics?: AWS.KinesisAnalytics.Types.apiVersion;
  kms?: AWS.KMS.Types.apiVersion;
  lambda?: AWS.Lambda.Types.apiVersion;
  lexruntime?: AWS.LexRuntime.Types.apiVersion;
  lightsail?: AWS.Lightsail.Types.apiVersion;
  machinelearning?: AWS.MachineLearning.Types.apiVersion;
  marketplacecommerceanalytics?: AWS.MarketplaceCommerceAnalytics.Types.apiVersion;
  marketplacemetering?: AWS.MarketplaceMetering.Types.apiVersion;
  mturk?: AWS.MTurk.Types.apiVersion;
  mobileanalytics?: AWS.MobileAnalytics.Types.apiVersion;
  opsworks?: AWS.OpsWorks.Types.apiVersion;
  opsworkscm?: AWS.OpsWorksCM.Types.apiVersion;
  organizations?: AWS.Organizations.Types.apiVersion;
  pinpoint?: AWS.Pinpoint.Types.apiVersion;
  polly?: AWS.Polly.Types.apiVersion;
  rds?: AWS.RDS.Types.apiVersion;
  redshift?: AWS.Redshift.Types.apiVersion;
  rekognition?: AWS.Rekognition.Types.apiVersion;
  resourcegroupstaggingapi?: AWS.ResourceGroupsTaggingAPI.Types.apiVersion;
  route53?: AWS.Route53.Types.apiVersion;
  route53domains?: AWS.Route53Domains.Types.apiVersion;
  s3?: AWS.S3.Types.apiVersion;
  s3control?: AWS.S3Control.Types.apiVersion;
  servicecatalog?: AWS.ServiceCatalog.Types.apiVersion;
  ses?: AWS.SES.Types.apiVersion;
  shield?: AWS.Shield.Types.apiVersion;
  simpledb?: AWS.SimpleDB.Types.apiVersion;
  sms?: AWS.SMS.Types.apiVersion;
  snowball?: AWS.Snowball.Types.apiVersion;
  sns?: AWS.SNS.Types.apiVersion;
  sqs?: AWS.SQS.Types.apiVersion;
  ssm?: AWS.SSM.Types.apiVersion;
  storagegateway?: AWS.StorageGateway.Types.apiVersion;
  stepfunctions?: AWS.StepFunctions.Types.apiVersion;
  sts?: AWS.STS.Types.apiVersion;
  support?: AWS.Support.Types.apiVersion;
  swf?: AWS.SWF.Types.apiVersion;
  xray?: AWS.XRay.Types.apiVersion;
  waf?: AWS.WAF.Types.apiVersion;
  wafregional?: AWS.WAFRegional.Types.apiVersion;
  workdocs?: AWS.WorkDocs.Types.apiVersion;
  workspaces?: AWS.WorkSpaces.Types.apiVersion;
  codestar?: AWS.CodeStar.Types.apiVersion;
  lexmodelbuildingservice?: AWS.LexModelBuildingService.Types.apiVersion;
  marketplaceentitlementservice?: AWS.MarketplaceEntitlementService.Types.apiVersion;
  athena?: AWS.Athena.Types.apiVersion;
  greengrass?: AWS.Greengrass.Types.apiVersion;
  dax?: AWS.DAX.Types.apiVersion;
  migrationhub?: AWS.MigrationHub.Types.apiVersion;
  cloudhsmv2?: AWS.CloudHSMV2.Types.apiVersion;
  glue?: AWS.Glue.Types.apiVersion;
  mobile?: AWS.Mobile.Types.apiVersion;
  pricing?: AWS.Pricing.Types.apiVersion;
  costexplorer?: AWS.CostExplorer.Types.apiVersion;
  mediaconvert?: AWS.MediaConvert.Types.apiVersion;
  medialive?: AWS.MediaLive.Types.apiVersion;
  mediapackage?: AWS.MediaPackage.Types.apiVersion;
  mediastore?: AWS.MediaStore.Types.apiVersion;
  mediastoredata?: AWS.MediaStoreData.Types.apiVersion;
  appsync?: AWS.AppSync.Types.apiVersion;
  guardduty?: AWS.GuardDuty.Types.apiVersion;
  mq?: AWS.MQ.Types.apiVersion;
  comprehend?: AWS.Comprehend.Types.apiVersion;
  iotjobsdataplane?: AWS.IoTJobsDataPlane.Types.apiVersion;
  kinesisvideoarchivedmedia?: AWS.KinesisVideoArchivedMedia.Types.apiVersion;
  kinesisvideomedia?: AWS.KinesisVideoMedia.Types.apiVersion;
  kinesisvideo?: AWS.KinesisVideo.Types.apiVersion;
  sagemakerruntime?: AWS.SageMakerRuntime.Types.apiVersion;
  sagemaker?: AWS.SageMaker.Types.apiVersion;
  translate?: AWS.Translate.Types.apiVersion;
  resourcegroups?: AWS.ResourceGroups.Types.apiVersion;
  alexaforbusiness?: AWS.AlexaForBusiness.Types.apiVersion;
  cloud9?: AWS.Cloud9.Types.apiVersion;
  serverlessapplicationrepository?: AWS.ServerlessApplicationRepository.Types.apiVersion;
  servicediscovery?: AWS.ServiceDiscovery.Types.apiVersion;
  workmail?: AWS.WorkMail.Types.apiVersion;
  autoscalingplans?: AWS.AutoScalingPlans.Types.apiVersion;
  transcribeservice?: AWS.TranscribeService.Types.apiVersion;
  connect?: AWS.Connect.Types.apiVersion;
  acmpca?: AWS.ACMPCA.Types.apiVersion;
  fms?: AWS.FMS.Types.apiVersion;
  secretsmanager?: AWS.SecretsManager.Types.apiVersion;
  iotanalytics?: AWS.IoTAnalytics.Types.apiVersion;
  iot1clickdevicesservice?: AWS.IoT1ClickDevicesService.Types.apiVersion;
  iot1clickprojects?: AWS.IoT1ClickProjects.Types.apiVersion;
  pi?: AWS.PI.Types.apiVersion;
  neptune?: AWS.Neptune.Types.apiVersion;
  mediatailor?: AWS.MediaTailor.Types.apiVersion;
  eks?: AWS.EKS.Types.apiVersion;
  macie?: AWS.Macie.Types.apiVersion;
  dlm?: AWS.DLM.Types.apiVersion;
  signer?: AWS.Signer.Types.apiVersion;
  chime?: AWS.Chime.Types.apiVersion;
  pinpointemail?: AWS.PinpointEmail.Types.apiVersion;
  ram?: AWS.RAM.Types.apiVersion;
  route53resolver?: AWS.Route53Resolver.Types.apiVersion;
  pinpointsmsvoice?: AWS.PinpointSMSVoice.Types.apiVersion;
  quicksight?: AWS.QuickSight.Types.apiVersion;
  rdsdataservice?: AWS.RDSDataService.Types.apiVersion;
  amplify?: AWS.Amplify.Types.apiVersion;
  datasync?: AWS.DataSync.Types.apiVersion;
  robomaker?: AWS.RoboMaker.Types.apiVersion;
  transfer?: AWS.Transfer.Types.apiVersion;
  globalaccelerator?: AWS.GlobalAccelerator.Types.apiVersion;
  comprehendmedical?: AWS.ComprehendMedical.Types.apiVersion;
  kinesisanalyticsv2?: AWS.KinesisAnalyticsV2.Types.apiVersion;
  mediaconnect?: AWS.MediaConnect.Types.apiVersion;
  fsx?: AWS.FSx.Types.apiVersion;
  securityhub?: AWS.SecurityHub.Types.apiVersion;
  appmesh?: AWS.AppMesh.Types.apiVersion;
  licensemanager?: AWS.LicenseManager.Types.apiVersion;
  kafka?: AWS.Kafka.Types.apiVersion;
  apigatewaymanagementapi?: AWS.ApiGatewayManagementApi.Types.apiVersion;
  apigatewayv2?: AWS.ApiGatewayV2.Types.apiVersion;
  docdb?: AWS.DocDB.Types.apiVersion;
  backup?: AWS.Backup.Types.apiVersion;
  worklink?: AWS.WorkLink.Types.apiVersion;
  textract?: AWS.Textract.Types.apiVersion;
  managedblockchain?: AWS.ManagedBlockchain.Types.apiVersion;
  mediapackagevod?: AWS.MediaPackageVod.Types.apiVersion;
  groundstation?: AWS.GroundStation.Types.apiVersion;
  iotthingsgraph?: AWS.IoTThingsGraph.Types.apiVersion;
  iotevents?: AWS.IoTEvents.Types.apiVersion;
  ioteventsdata?: AWS.IoTEventsData.Types.apiVersion;
  personalize?: AWS.Personalize.Types.apiVersion;
  personalizeevents?: AWS.PersonalizeEvents.Types.apiVersion;
  personalizeruntime?: AWS.PersonalizeRuntime.Types.apiVersion;
  applicationinsights?: AWS.ApplicationInsights.Types.apiVersion;
  servicequotas?: AWS.ServiceQuotas.Types.apiVersion;
  ec2instanceconnect?: AWS.EC2InstanceConnect.Types.apiVersion;
  eventbridge?: AWS.EventBridge.Types.apiVersion;
  lakeformation?: AWS.LakeFormation.Types.apiVersion;
  forecastservice?: AWS.ForecastService.Types.apiVersion;
  forecastqueryservice?: AWS.ForecastQueryService.Types.apiVersion;
  qldb?: AWS.QLDB.Types.apiVersion;
  qldbsession?: AWS.QLDBSession.Types.apiVersion;
  workmailmessageflow?: AWS.WorkMailMessageFlow.Types.apiVersion;
  codestarnotifications?: AWS.CodeStarNotifications.Types.apiVersion;
  savingsplans?: AWS.SavingsPlans.Types.apiVersion;
  sso?: AWS.SSO.Types.apiVersion;
  ssooidc?: AWS.SSOOIDC.Types.apiVersion;
  marketplacecatalog?: AWS.MarketplaceCatalog.Types.apiVersion;
  dataexchange?: AWS.DataExchange.Types.apiVersion;
  sesv2?: AWS.SESV2.Types.apiVersion;
  migrationhubconfig?: AWS.MigrationHubConfig.Types.apiVersion;
  connectparticipant?: AWS.ConnectParticipant.Types.apiVersion;
  appconfig?: AWS.AppConfig.Types.apiVersion;
  iotsecuretunneling?: AWS.IoTSecureTunneling.Types.apiVersion;
  wafv2?: AWS.WAFV2.Types.apiVersion;
  elasticinference?: AWS.ElasticInference.Types.apiVersion;
  imagebuilder?: AWS.Imagebuilder.Types.apiVersion;
  schemas?: AWS.Schemas.Types.apiVersion;
  accessanalyzer?: AWS.AccessAnalyzer.Types.apiVersion;
  codegurureviewer?: AWS.CodeGuruReviewer.Types.apiVersion;
  codeguruprofiler?: AWS.CodeGuruProfiler.Types.apiVersion;
  computeoptimizer?: AWS.ComputeOptimizer.Types.apiVersion;
  frauddetector?: AWS.FraudDetector.Types.apiVersion;
  kendra?: AWS.Kendra.Types.apiVersion;
  networkmanager?: AWS.NetworkManager.Types.apiVersion;
  outposts?: AWS.Outposts.Types.apiVersion;
  augmentedairuntime?: AWS.AugmentedAIRuntime.Types.apiVersion;
  ebs?: AWS.EBS.Types.apiVersion;
  kinesisvideosignalingchannels?: AWS.KinesisVideoSignalingChannels.Types.apiVersion;
  detective?: AWS.Detective.Types.apiVersion;
  codestarconnections?: AWS.CodeStarconnections.Types.apiVersion;
  synthetics?: AWS.Synthetics.Types.apiVersion;
  iotsitewise?: AWS.IoTSiteWise.Types.apiVersion;
  macie2?: AWS.Macie2.Types.apiVersion;
  codeartifact?: AWS.CodeArtifact.Types.apiVersion;
  honeycode?: AWS.Honeycode.Types.apiVersion;
  ivs?: AWS.IVS.Types.apiVersion;
  braket?: AWS.Braket.Types.apiVersion;
  identitystore?: AWS.IdentityStore.Types.apiVersion;
  appflow?: AWS.Appflow.Types.apiVersion;
  redshiftdata?: AWS.RedshiftData.Types.apiVersion;
  ssoadmin?: AWS.SSOAdmin.Types.apiVersion;
  timestreamquery?: AWS.TimestreamQuery.Types.apiVersion;
  timestreamwrite?: AWS.TimestreamWrite.Types.apiVersion;
  s3outposts?: AWS.S3Outposts.Types.apiVersion;
  databrew?: AWS.DataBrew.Types.apiVersion;
  servicecatalogappregistry?: AWS.ServiceCatalogAppRegistry.Types.apiVersion;
  networkfirewall?: AWS.NetworkFirewall.Types.apiVersion;
  mwaa?: AWS.MWAA.Types.apiVersion;
  amplifybackend?: AWS.AmplifyBackend.Types.apiVersion;
  appintegrations?: AWS.AppIntegrations.Types.apiVersion;
  connectcontactlens?: AWS.ConnectContactLens.Types.apiVersion;
  devopsguru?: AWS.DevOpsGuru.Types.apiVersion;
  ecrpublic?: AWS.ECRPUBLIC.Types.apiVersion;
  lookoutvision?: AWS.LookoutVision.Types.apiVersion;
  sagemakerfeaturestoreruntime?: AWS.SageMakerFeatureStoreRuntime.Types.apiVersion;
  customerprofiles?: AWS.CustomerProfiles.Types.apiVersion;
  auditmanager?: AWS.AuditManager.Types.apiVersion;
  emrcontainers?: AWS.EMRcontainers.Types.apiVersion;
  healthlake?: AWS.HealthLake.Types.apiVersion;
  sagemakeredge?: AWS.SagemakerEdge.Types.apiVersion;
  amp?: AWS.Amp.Types.apiVersion;
  greengrassv2?: AWS.GreengrassV2.Types.apiVersion;
  iotdeviceadvisor?: AWS.IotDeviceAdvisor.Types.apiVersion;
  iotfleethub?: AWS.IoTFleetHub.Types.apiVersion;
  iotwireless?: AWS.IoTWireless.Types.apiVersion;
  location?: AWS.Location.Types.apiVersion;
  wellarchitected?: AWS.WellArchitected.Types.apiVersion;
  lexmodelsv2?: AWS.LexModelsV2.Types.apiVersion;
  lexruntimev2?: AWS.LexRuntimeV2.Types.apiVersion;
  fis?: AWS.Fis.Types.apiVersion;
  lookoutmetrics?: AWS.LookoutMetrics.Types.apiVersion;
  mgn?: AWS.Mgn.Types.apiVersion;
}
