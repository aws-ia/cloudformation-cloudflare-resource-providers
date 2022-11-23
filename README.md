# Cloudflare CloudFormation Resource Types

This collection of [AWS CloudFormation resource types][1] allow Cloudflare to be controlled using [AWS CloudFormation][2].

See the [end-user documentation](docs/user/generated) including:

* [examples](docs/user/generated/stories)
* [supported GitHub resource types](docs/user/generated/resources)

There is also [developer documentation](docs/dev) available
if you are interested in building or contributing.

| Resource | Description | Documentation |
| --- | --- | --- |
| Cloudflare::Dns::Record | This resource type manages a [Cloudflare Dns Record][3] | [/Cloudflare-Dns-Record][4] |
| Cloudflare::LoadBalancer:LoadBalancer | This resource type manages a [Cloudflare LoadBalancer][5] | [/Cloudflare-LoadBalancer-LoadBalancer][6] |
| Cloudflare::LoadBalancer::Monitor | This resource type manages a [Cloudflare LoadBalancer Monitor][7] | [/Cloudflare-LoadBalancer-Monitor][8] |
| Cloudflare::LoadBalancer::Pool | This resource type manages a [Cloudflare LoadBalancer Pool][9] | [/Cloudflare-LoadBalancer-Pool][10] |

## Prerequisites
* [AWS Account][14]
* [AWS CLI][15]
* [Cloudflare account][16] and [API key][17]
## AWS Management Console

To get started:

1. Sign in to the [AWS Management Console][11] with your account and navigate to CloudFormation.

2. Select "Public extensions" from the left hand pane and filter Publisher by "Third Party".

3. Use the search bar to filter by the "Cloudflare" prefix.

  Note: All official  Cloudflare resources begin with `Cloudflare::` and specify that they are `Published by Cloudflare`.

4. Select the desired resource name to view more information about its schema, and click **Activate**.

5. On the **Extension details** page, specify:
  - Extension name
  - Execution role ARN
  - Automatic updates for minor version releases
  - Configuration

6. In your terminal, specify the configuration data for the registered Cloudflare CloudFormation resource type, in the given account and region by using the **SetTypeConfiguration** operation:


  For example:

  ```Bash
  $ aws cloudformation set-type-configuration \z`
  --region us-west-2 --type RESOURCE \
  --type-name Cloudflare::LoadBalancer::Pool \
  --configuration-alias default \
  --configuration "{ \"CloudflareAccess\":{\"Url\":\"https://dash.cloudflare.com/uuid\",\"ApiKey\":\"YOURAPIKEY\"}}"
  ```

7. After you have your resource configured, [create your AWS stack][12] that includes any of the activated Cloudflare resources.

For more information about available commands and workflows, see the official [AWS documentation][13].

## Supported regions

The Cloudflare CloudFormation resources are available on the CloudFormation Public Registry in the following regions:

| Code            | Name                      |
|-----------------|---------------------------|
| us-east-1       | US East (N. Virginia)     |
| us-east-2       | US East (Ohio)            |
| us-west-1       | US West (N. California)   |
| us-west-2       | US West (Oregon)          |
| ap-south-1      | Asia Pacific (Mumbai)     |
| ap-northeast-1  | Asia Pacific (Tokyo)      |
| ap-northeast-2  | Asia Pacific (Seoul)      |
| ap-southeast-1  | Asia Pacific (Singapore)  |
| ap-southeast-2  | Asia Pacific (Sydney)     |
| ca-central-1    | Canada (Central)          |
| eu-central-1    | Europe (Frankfurt)        |
| eu-west-1       | Europe (Ireland)          |
| eu-west-2       | Europe (London)           |
| eu-west-3       | Europe (Paris)            |
| eu-north-1      | Europe (Stockholm)        |
| sa-east-1       | South America (São Paulo) |

**Note**: To privately register a resource in any other region, use the provided packages.

## Examples

### [Sample use case][18]

### Dns Record creation example using the Cloudformation Cloudflare resource
```yaml
---
AWSTemplateFormatVersion: '2010-09-09'
Description: Shows how to create a Dns Record in Cloudflare
Resources:
  MySampleProject:
    Type: Cloudflare::Dns::Record
    Properties:
      ZoneId: 0012345678123,
      Type: A,
      Name: example.app.com,
      Content: 11.116.111.1,
      Proxied: false,
      Ttl: 600
```

### Shows how to create an LoadBalancer in Cloudflare
```yaml
---
AWSTemplateFormatVersion: '2010-09-09'
Description: Shows how to create an LoadBalancer in Cloudflare
Resources:
  Type: Cloudflare::LoadBalancer:LoadBalancer
  MySampleProject:
    ZoneId: !Ref ZoneId
    Proxied: true
    Name: !Ref DomainName
    SessionAffinity: none
    SessionAffinityAttributes:
      ZeroDowntimeFailover: none
    SteeringPolicy: off
    RandomSteering:
      DefaultWeight: 1
    DefaultPools:
      - !GetAtt Pool.Id
    FallbackPool: !GetAtt Pool.Id
    Enabled: true
```

### Shows how to set a LoadBalancer Monitor in Cloudflare
```yaml
---
---
AWSTemplateFormatVersion: '2010-09-09'
Description: Shows how to set a LoadBalancer Monitor in Cloudflare.
Resources:
  AgentConfigurationSample:
    Type: Cloudflare::LoadBalancer::Monitor
    Properties:
      ExpectedCodes: 200
      Method: GET
      Timeout: 5
      Path: /
      Interval: 60
      Retries: 2
      Description: GET over HTTPS - expect 200
      Type: http
      Port: 80
      AccountIdentifier: !Ref AccountId
      FollowRedirects: false
      AllowInsecure: false
      ProbeZone: ""
```

### Shows how to create a static LoadBalancer Pool in Cloudflare
```yaml
---
AWSTemplateFormatVersion: '2010-09-09'
Description: Shows how to create a static LoadBalancer Pool in Cloudflare
Resources:
  SampleNrqlCondition:
    Type: Cloudflare::LoadBalancer::Pool
    Properties:
      AccountIdentifier: !Ref AccountId
      MinimumOrigins: 1
      CheckRegions:
        - WEU
      NotificationEmail: email@example.com
      NotificationFilter:
        Pool:
          Healthy: false
      Origins:
        - Enabled: true
          Address: <IP Address>
          Name: server-1
          Weight: 0.9
        - Weight: 0.1
          Enabled: true
          Name: server-2
          Address: <IP Address>
      Name: Servers
      Description: Region Pool
      Monitor: !GetAtt Monitor.IdALL
            Priority: CRITICAL
```

[1]: https://docs.aws.amazon.com/cloudformation-cli/latest/userguide/resource-types.html
[2]: https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/Welcome.html
[3]: https://developers.cloudflare.com/dns/manage-dns-records/how-to/create-dns-records/
[4]: ./Cloudflare-Dns-Record/
[5]: https://developers.cloudflare.com/load-balancing/how-to/create-load-balancer/
[6]: ./Cloudflare-LoadBalancer-LoadBalancer/
[7]: https://developers.cloudflare.com/load-balancing/how-to/create-monitor/#via-the-dashboard
[8]: ./Cloudflare-LoadBalancer-Monitor/
[9]: https://developers.cloudflare.com/load-balancing/how-to/create-pool/#via-the-dashboard
[10]: ./Cloudflare-LoadBalancer-Pool/
[11]: https://aws.amazon.com/console/
[12]: https://console.aws.amazon.com/cloudformation/home
[13]: https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/registry.html
[14]: https://aws.amazon.com/account/
[15]: https://aws.amazon.com/cli/
[16]: https://www.cloudflare.com/en-gb/
[17]: https://developers.cloudflare.com/analytics/graphql-api/getting-started/authentication/api-key-auth/
[18]: ./docs/user/generated/stories/setup-a-cdn