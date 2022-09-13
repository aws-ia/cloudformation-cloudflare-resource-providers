# Set up a new Cloudflare CDN

This example will work through configuring a DNS subdomain in Cloudflare.  This will require us to use the DnsRecord
resource as well as resources for configuring load balancers, load balancer pools, and load balancer monitors.
See [here](example.yaml) for the full cloudformation.

You can deploy the complete example with the following command.  Please note that you will need to fill in some values
within the cloudformation template.  These could also have been parameterised but weren't to keep the example simple.

```bash
  aws cloudformation update-stack --region eu-west-1 --stack-name My-Cloudflare-Project --parameters ParameterKey=AccountId,ParameterValue=<AccountId> ParameterKey=ZoneId,ParameterValue=<ZoneId> ParameterKey=DomainName,ParameterValue=<e.g. www.domain.com> --template-body file://example.yaml
```

# DNS Record

We start by setting up a DNS Record.  As you can see this is an A record with corresponding domain, ip, etc. For 
further details on how to configure the Cloudflare::Dns::Record type see [here](../../resources/Cloudflare-Dns-Record/).

```yaml
DnsRecord:
  Type: Cloudflare::Dns::Record
  Properties:
    ZoneId: !Ref ZoneId
    Type: A
    Name: !Ref DomainName
    Content: <IP ADDRESS>
    Proxied: false
    Ttl: 1
```

# Load Balancer

We will now add a load-balancer to make our domain more stable.  For this we will also confifgure a monitor and a load-balancer 
pool.  See [here](../../resources) for more details on each of these resources.

```yaml

Monitor:
  Type: Cloudflare::LoadBalancer::Monitor
  Properties:
    "ExpectedCodes": "200"
    "Method": "GET"
    "Timeout": 5
    "Path": "/"
    "Interval": 60
    "Retries": 2
    "Description": "GET over HTTPS - expect 200"
    "Type": "http"
    "Port": 80
    "AccountIdentifier": !Ref AccountId
    "FollowRedirects": false
    "AllowInsecure": false
    "ProbeZone": ""

Pool:
  Type: Cloudflare::LoadBalancer::Pool
  Properties:
    "AccountIdentifier": !Ref AccountId
    "MinimumOrigins": 1
    "CheckRegions":
      - "WEU"
    "NotificationEmail": "email@example.com"
    "NotificationFilter":
      "Pool":
        "Healthy": false
    "Origins":
      - "Enabled": true
        "Address": <IP Address>
        "Name": "server-1"
        "Weight": 0.9
      - "Weight": 0.1
        "Enabled": true
        "Name": "server-2"
        "Address": <IP Address>
    "Name": "Servers"
    "Description": "Region Pool"
    "Monitor": !GetAtt Monitor.Id

LoadBalancer:
  Type: Cloudflare::LoadBalancer::LoadBalancer
  Properties:
    "ZoneId": !Ref ZoneId
    "Proxied": true
    "Name": !Ref DomainName
    "SessionAffinity": "none"
    "SessionAffinityAttributes":
      "ZeroDowntimeFailover": "none"
    "SteeringPolicy": "off"
    "RandomSteering":
      "DefaultWeight": 1
    "DefaultPools":
      - !GetAtt Pool.Id
    "FallbackPool": !GetAtt Pool.Id
    "Enabled": true
```