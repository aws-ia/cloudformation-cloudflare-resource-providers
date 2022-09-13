# Cloudflare CloudFormation Resources

This collection of CloudFormation resource types allow Cloudflare to be controlled using AWS CloudFormation.

### Why would I want to do this?

Infrastructure-as-code such as CloudFormation is one of the best ways to create and maintain infrastructure that is reliable and secure. Or a CloudFormation template might just be more convenient for some types of automation.

Here is a sample use case this supports:

* [Set up a new Cloudflare service](stories/setup-a-cdn)

### How do I get started?

In the AWS CloudFormation UI, find the Cloudflare types in the third-party registry and activate them.
Alternatively follow the [Developer](docs/dev) instructions to install them manually.

You will need to set up a [Type Configuration](https://awscli.amazonaws.com/v2/documentation/api/latest/reference/cloudformation/set-type-configuration.html)
for each of the activated types, containing a Cloudflare **[API Token](https://developers.cloudflare.com/api/tokens/create/)**  and **Url** in order to reach the Cloudflare API correctly.
It is recommended to set the token into Systems Manager's secure parameter store,
e.g. as `/path/to/cloudflare/token` and then it can be applied any of the Cloudflare types,
e.g. `Cloudflare::LoadBalancer::LoadBalancer`, using:

```
aws cloudformation set-type-configuration \
--region eu-north-1 \
--type RESOURCE \
--type-name Cloudflare::LoadBalancer::LoadBalancer \
--configuration-alias default \
--configuration '{"CloudflareAccess": {"Url": "https://api.cloudflare.com/client/v4",  "ApiKey":"{{resolve:ssm-secure:/path/to/cloudflare/token}}"}}'
```

You should then be able to run the example use cases above or build your own using the full reference below.

### What is supported?

This project does not support all the objects nor concepts in Cloudflare.
For many things there just isn't a compelling use case, and of course there are a lot.
We have focussed on those objects and properties which have seemed most useful.
If we missed something, open an issue to let us know, or even better, contribute an extension!

The **Full Cloudflare CloudFormation Resources Reference** is available [here](resources).