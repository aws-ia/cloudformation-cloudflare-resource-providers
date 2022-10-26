# cloudformation-cloudflare

## Set up local type configuration

When running contract or SAM tests locally, the resources expect the cloudflare api token and url to be available via the type configuration.
Executing this in the console from the project root will add it. Replace the values inside the __square__ brackets with the actual values for testing
```bash
cat << EOF >> ~/.cfn-cli/typeConfiguration.json
{
  "CloudflareAccess": {
    "ApiToken": "[cloudflareApiToken]",
    "Url": "[cloudflareUrl]"
  }
}
EOF
```

## Set up git filter

This project uses a filter set up in the [.gitattributes](../../.gitattributes) file to replace private values for testing within the different `overrides.json` on each resource.

The filter has to be added manually inside the `.git/config` file once the repository has been cloned.

Executing this in the console from the project root will add it. Replace the values inside the __square__ brackets with the actual values for testing

```bash
cat << EOF >> .git/config
[filter "cloudflare"]
  clear = sed \
        -e 's:[existingAccountId]:<CLOUDFLARE_ACCOUNT_ID>:g' \
        -e 's:[existingZoneId]:<CLOUDFLARE_ZONE_ID>:g' \
        -e 's:[subdomainOfRegisteredDomain]:<CLOUDFLARE_DOMAIN_NAME>:g' \
        -e 's:[existingPublicIp1]:<CLOUDFLARE_IP1>:g' \
        -e 's:[existingPublicIp2]:<CLOUDFLARE_IP2>' \
        -e 's:[existingMonitorId]:<CLOUDFLARE_MONITOR_ID>:g' \
        -e 's:[existingPoolId]:<CLOUDFLARE_POOL_ID>:g'
  smudge = sed \
        -e 's:<CLOUDFLARE_ACCOUNT_ID>:[existingAccountId]:g' \
        -e 's:<CLOUDFLARE_ZONE_ID>:[existingZoneId]:g' \
        -e 's:<CLOUDFLARE_DOMAIN_NAME>:[subdomainOfRegisteredDomain]:g' \
        -e 's:<CLOUDFLARE_IP1>:[existingPublicIp1]:g' \
        -e 's:<CLOUDFLARE_IP2>:[existingPublicIp2]:g' \
        -e 's:<CLOUDFLARE_MONITOR_ID>:[existingMonitorId]:g' \
        -e 's:<CLOUDFLARE_POOL_ID>:[existingPoolId]:g'
```