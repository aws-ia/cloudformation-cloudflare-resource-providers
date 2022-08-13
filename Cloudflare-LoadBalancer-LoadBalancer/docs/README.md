# Cloudflare::LoadBalancer::LoadBalancer

An example resource schema demonstrating some basic constructs and validation rules.

## Syntax

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON

<pre>
{
    "Type" : "Cloudflare::LoadBalancer::LoadBalancer",
    "Properties" : {
        "<a href="#id" title="Id">Id</a>" : <i>String</i>,
        "<a href="#zoneid" title="ZoneId">ZoneId</a>" : <i>String</i>,
        "<a href="#name" title="Name">Name</a>" : <i>String</i>,
        "<a href="#fallbackpoolid" title="FallbackPoolId">FallbackPoolId</a>" : <i>String</i>,
        "<a href="#defaultpoolids" title="DefaultPoolIds">DefaultPoolIds</a>" : <i>[ String, ... ]</i>,
        "<a href="#description" title="Description">Description</a>" : <i>String</i>,
        "<a href="#ttl" title="Ttl">Ttl</a>" : <i>Double</i>,
        "<a href="#steeringpolicy" title="SteeringPolicy">SteeringPolicy</a>" : <i>String</i>,
        "<a href="#proxied" title="Proxied">Proxied</a>" : <i>Boolean</i>,
        "<a href="#enabled" title="Enabled">Enabled</a>" : <i>Boolean</i>,
        "<a href="#regionpools" title="RegionPools">RegionPools</a>" : <i>[ String, ... ]</i>,
        "<a href="#countrypools" title="CountryPools">CountryPools</a>" : <i>[ String, ... ]</i>,
        "<a href="#poppools" title="PopPools">PopPools</a>" : <i>[ String, ... ]</i>,
        "<a href="#sessionaffinity" title="SessionAffinity">SessionAffinity</a>" : <i>String</i>,
        "<a href="#sessionaffinityttl" title="SessionAffinityTtl">SessionAffinityTtl</a>" : <i>Double</i>,
        "<a href="#sessionaffinityattributes" title="SessionAffinityAttributes">SessionAffinityAttributes</a>" : <i>String</i>,
        "<a href="#rules" title="Rules">Rules</a>" : <i>[ String, ... ]</i>
    }
}
</pre>

### YAML

<pre>
Type: Cloudflare::LoadBalancer::LoadBalancer
Properties:
    <a href="#id" title="Id">Id</a>: <i>String</i>
    <a href="#zoneid" title="ZoneId">ZoneId</a>: <i>String</i>
    <a href="#name" title="Name">Name</a>: <i>String</i>
    <a href="#fallbackpoolid" title="FallbackPoolId">FallbackPoolId</a>: <i>String</i>
    <a href="#defaultpoolids" title="DefaultPoolIds">DefaultPoolIds</a>: <i>
      - String</i>
    <a href="#description" title="Description">Description</a>: <i>String</i>
    <a href="#ttl" title="Ttl">Ttl</a>: <i>Double</i>
    <a href="#steeringpolicy" title="SteeringPolicy">SteeringPolicy</a>: <i>String</i>
    <a href="#proxied" title="Proxied">Proxied</a>: <i>Boolean</i>
    <a href="#enabled" title="Enabled">Enabled</a>: <i>Boolean</i>
    <a href="#regionpools" title="RegionPools">RegionPools</a>: <i>
      - String</i>
    <a href="#countrypools" title="CountryPools">CountryPools</a>: <i>
      - String</i>
    <a href="#poppools" title="PopPools">PopPools</a>: <i>
      - String</i>
    <a href="#sessionaffinity" title="SessionAffinity">SessionAffinity</a>: <i>String</i>
    <a href="#sessionaffinityttl" title="SessionAffinityTtl">SessionAffinityTtl</a>: <i>Double</i>
    <a href="#sessionaffinityattributes" title="SessionAffinityAttributes">SessionAffinityAttributes</a>: <i>String</i>
    <a href="#rules" title="Rules">Rules</a>: <i>
      - String</i>
</pre>

## Properties

#### Id

ID of the load balancer

_Required_: No

_Type_: String

_Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)

#### ZoneId

The zone ID to add the load balancer to.

_Required_: Yes

_Type_: String

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### Name

The DNS name (FQDN, including the zone) to associate with the load balancer.

_Required_: No

_Type_: String

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### FallbackPoolId

he pool ID to use when all other pools are detected as unhealthy.

_Required_: No

_Type_: String

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### DefaultPoolIds

A list of pool IDs ordered by their failover priority. Used whenever region/pop pools are not defined.

_Required_: No

_Type_: List of String

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### Description

Free text description.

_Required_: No

_Type_: String

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### Ttl

Time to live (TTL) of this load balancer's DNS name. Conflicts with proxied - this cannot be set for proxied load balancers. Default is 30.

_Required_: No

_Type_: Double

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### SteeringPolicy

Determine which method the load balancer uses to determine the fastest route to your origin

_Required_: No

_Type_: String

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### Proxied

Whether the hostname gets Cloudflare's origin protection. Defaults to false.

_Required_: No

_Type_: Boolean

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### Enabled

Enable or disable the load balancer. Defaults to true (enabled).

_Required_: No

_Type_: Boolean

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### RegionPools

A set containing mappings of region codes to a list of pool IDs (ordered by their failover priority) for the given region

_Required_: No

_Type_: List of String

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### CountryPools

A set containing mappings of country codes to a list of pool IDs (ordered by their failover priority) for the given country

_Required_: No

_Type_: List of String

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### PopPools

A set containing mappings of Cloudflare Point-of-Presence (PoP) identifiers to a list of pool IDs (ordered by their failover priority) for the PoP (datacenter). This feature is only available to enterprise customers

_Required_: No

_Type_: List of String

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### SessionAffinity

Associates all requests coming from an end-user with a single origin. Cloudflare will set a cookie on the initial response to the client, such that consequent requests with the cookie in the request will go to the same origin, so long as it is available

_Required_: No

_Type_: String

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### SessionAffinityTtl

Time, in seconds, until this load balancers session affinity cookie expires after being created. This parameter is ignored unless a supported session affinity policy is set. The current default of 23 hours will be used unless session_affinity_ttl is explicitly set. Once the expiry time has been reached, subsequent requests may get sent to a different origin server. Valid values are between 1800 and 604800.

_Required_: No

_Type_: Double

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### SessionAffinityAttributes

Configure cookie attributes for session affinity cookie

_Required_: No

_Type_: String

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### Rules

A list of conditions and overrides for each load balancer operation

_Required_: No

_Type_: List of String

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

## Return Values

### Ref

When you pass the logical ID of this resource to the intrinsic `Ref` function, Ref returns the Id.
