'use strict';

var feedbackUrl = process.env.FEEDBACK_URL || 'http://hootch.test.netflix.net/submit';
var gateHost = process.env.API_HOST || 'https://spinnaker-api-prestaging.prod.netflix.net';
var bakeryDetailUrl = process.env.BAKERY_DETAIL_URL || 'http://bakery.test.netflix.net/#/?region={{context.region}}&package={{context.package}}&detail=bake:{{context.status.resourceId}}';
var authEndpoint = process.env.AUTH_ENDPOINT || 'https://spinnaker-api-prestaging.prod.netflix.net/auth/info';

window.spinnakerSettings = {
  defaultProviders: ['aws', 'gce', 'azure', 'cf'],
  feedbackUrl: feedbackUrl,
  gateUrl: gateHost,
  bakeryDetailUrl: bakeryDetailUrl,
  authEndpoint: authEndpoint,
  pollSchedule: 30000,
  defaultTimeZone: process.env.TIMEZONE || 'America/Los_Angeles', // see http://momentjs.com/timezone/docs/#/data-utilities/
  providers: {
    cf: {
      defaults: {
        account: 'dev',
        region: 'micropcf-org'
      },
      primaryAccounts: ['dev'],
      primaryRegions: ['micropcf-org'],
      challengeDestructiveActions: ['dev'],
      defaultSecurityGroups: [],
      accountBastions : {
      },
      preferredZonesByAccount: {
        dev: {
          'micropcf-org': ['micropcf-space']
        },
        default: {
          'micropcf-org': ['micropcf-space']
        }
      }
    }
  },
  whatsNew: {
    gistId: '32526cd608db3d811b38',
    fileName: 'news.md',
  },
  authEnabled: process.env.AUTH === 'enabled',
  feature: {
    pipelines: true,
    notifications: false,
    fastProperty: true,
    vpcMigrator: true,
    clusterDiff: true,
    rebakeControlEnabled: false,
    netflixMode: false,
  },
};
