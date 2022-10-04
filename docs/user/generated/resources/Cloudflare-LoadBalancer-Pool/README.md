# Cloudflare::LoadBalancer::Pool

A resource to manage a pool of origin servers

## Syntax

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON

<pre>
{
    "Type" : "Cloudflare::LoadBalancer::Pool",
    "Properties" : {
        "<a href="#name" title="Name">Name</a>" : <i>String</i>,
        "<a href="#accountidentifier" title="AccountIdentifier">AccountIdentifier</a>" : <i>String</i>,
        "<a href="#origins" title="Origins">Origins</a>" : <i>[ <a href="origin.md">Origin</a>, ... ]</i>,
        "<a href="#notificationfilter" title="NotificationFilter">NotificationFilter</a>" : <i><a href="filter.md">Filter</a></i>,
        "<a href="#checkregions" title="CheckRegions">CheckRegions</a>" : <i>[ String, ... ]</i>,
        "<a href="#description" title="Description">Description</a>" : <i>String</i>,
        "<a href="#enabled" title="Enabled">Enabled</a>" : <i>Boolean</i>,
        "<a href="#latitude" title="Latitude">Latitude</a>" : <i>Double</i>,
        "<a href="#longitude" title="Longitude">Longitude</a>" : <i>Double</i>,
        "<a href="#loadshedding" title="LoadShedding">LoadShedding</a>" : <i>Map</i>,
        "<a href="#minimumorigins" title="MinimumOrigins">MinimumOrigins</a>" : <i>Double</i>,
        "<a href="#monitor" title="Monitor">Monitor</a>" : <i>String</i>,
        "<a href="#notificationemail" title="NotificationEmail">NotificationEmail</a>" : <i>String</i>,
        "<a href="#originsteering" title="OriginSteering">OriginSteering</a>" : <i>Map</i>,
    }
}
</pre>

### YAML

<pre>
Type: Cloudflare::LoadBalancer::Pool
Properties:
    <a href="#name" title="Name">Name</a>: <i>String</i>
    <a href="#accountidentifier" title="AccountIdentifier">AccountIdentifier</a>: <i>String</i>
    <a href="#origins" title="Origins">Origins</a>: <i>
      - <a href="origin.md">Origin</a></i>
    <a href="#notificationfilter" title="NotificationFilter">NotificationFilter</a>: <i><a href="filter.md">Filter</a></i>
    <a href="#checkregions" title="CheckRegions">CheckRegions</a>: <i>
      - String</i>
    <a href="#description" title="Description">Description</a>: <i>String</i>
    <a href="#enabled" title="Enabled">Enabled</a>: <i>Boolean</i>
    <a href="#latitude" title="Latitude">Latitude</a>: <i>Double</i>
    <a href="#longitude" title="Longitude">Longitude</a>: <i>Double</i>
    <a href="#loadshedding" title="LoadShedding">LoadShedding</a>: <i>Map</i>
    <a href="#minimumorigins" title="MinimumOrigins">MinimumOrigins</a>: <i>Double</i>
    <a href="#monitor" title="Monitor">Monitor</a>: <i>String</i>
    <a href="#notificationemail" title="NotificationEmail">NotificationEmail</a>: <i>String</i>
    <a href="#originsteering" title="OriginSteering">OriginSteering</a>: <i>Map</i>
</pre>

## Properties

#### Name

A short name (tag) for the pool. Only alphanumeric characters, hyphens, and underscores are allowed.

_Required_: Yes

_Type_: String

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### AccountIdentifier

The account identifier

_Required_: No

_Type_: String

_Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)

#### Origins

The list of origins within this pool. Traffic directed at this pool is balanced across all currently healthy origins, provided the pool itself is healthy

_Required_: Yes

_Type_: List of <a href="origin.md">Origin</a>

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### NotificationFilter

Filter pool and origin health notifications by resource type or health status. Use null to reset

_Required_: No

_Type_: <a href="filter.md">Filter</a>

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### CheckRegions

A list of regions (specified by region code) from which to run health checks. Empty means every Cloudflare data center (the default), but requires an Enterprise plan

_Required_: No

_Type_: List of String

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### Description

Free text description.

_Required_: No

_Type_: String

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### Enabled

Whether to enable (the default) this pool. Disabled pools will not receive traffic and are excluded from health checks. Disabling a pool will cause any load balancers using it to failover to the next pool (if any).

_Required_: No

_Type_: Boolean

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### Latitude

The latitude this pool is physically located at; used for proximity steering. Values should be between -90 and 90.

_Required_: No

_Type_: Double

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### Longitude

The longitude this pool is physically located at; used for proximity steering. Values should be between -180 and 180.

_Required_: No

_Type_: Double

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### LoadShedding

Setting for controlling load shedding for this pool.

_Required_: No

_Type_: Map

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### MinimumOrigins

The minimum number of origins that must be healthy for this pool to serve traffic. If the number of healthy origins falls below this number, the pool will be marked unhealthy and we will failover to the next available pool. Default: 1.

_Required_: No

_Type_: Double

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### Monitor

The ID of the Monitor to use for health checking origins within this pool.

_Required_: No

_Type_: String

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### NotificationEmail

he email address to send health status notifications to. This can be an individual mailbox or a mailing list. Multiple emails can be supplied as a comma delimited list.

_Required_: No

_Type_: String

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### OriginSteering

Set an origin steering policy to control origin selection within a pool.

_Required_: No

_Type_: Map

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

## Return Values

### Fn::GetAtt

The `Fn::GetAtt` intrinsic function returns a value for a specified attribute of this type. The following are the available attributes and sample return values.

For more information about using the `Fn::GetAtt` intrinsic function, see [Fn::GetAtt](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/intrinsic-function-reference-getatt.html).

#### Id

The pool id

#### ModifiedOn

When the record was last modified

