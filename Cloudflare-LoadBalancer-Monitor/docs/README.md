# Cloudflare::LoadBalancer::Monitor

A Monitor policy to configure monitoring of endpoint health

## Syntax

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON

<pre>
{
    "Type" : "Cloudflare::LoadBalancer::Monitor",
    "Properties" : {
        "<a href="#accountidentifier" title="AccountIdentifier">AccountIdentifier</a>" : <i>String</i>,
        "<a href="#expectedbody" title="ExpectedBody">ExpectedBody</a>" : <i>String</i>,
        "<a href="#expectedcodes" title="ExpectedCodes">ExpectedCodes</a>" : <i>String</i>,
        "<a href="#method" title="Method">Method</a>" : <i>String</i>,
        "<a href="#timeout" title="Timeout">Timeout</a>" : <i>Double</i>,
        "<a href="#path" title="Path">Path</a>" : <i>String</i>,
        "<a href="#interval" title="Interval">Interval</a>" : <i>Double</i>,
        "<a href="#retries" title="Retries">Retries</a>" : <i>Double</i>,
        "<a href="#header" title="Header">Header</a>" : <i>Map</i>,
        "<a href="#type" title="Type">Type</a>" : <i>String</i>,
        "<a href="#port" title="Port">Port</a>" : <i>Double</i>,
        "<a href="#description" title="Description">Description</a>" : <i>String</i>,
        "<a href="#allowinsecure" title="AllowInsecure">AllowInsecure</a>" : <i>Boolean</i>,
        "<a href="#followredirects" title="FollowRedirects">FollowRedirects</a>" : <i>Boolean</i>,
        "<a href="#probezone" title="ProbeZone">ProbeZone</a>" : <i>String</i>,
    }
}
</pre>

### YAML

<pre>
Type: Cloudflare::LoadBalancer::Monitor
Properties:
    <a href="#accountidentifier" title="AccountIdentifier">AccountIdentifier</a>: <i>String</i>
    <a href="#expectedbody" title="ExpectedBody">ExpectedBody</a>: <i>String</i>
    <a href="#expectedcodes" title="ExpectedCodes">ExpectedCodes</a>: <i>String</i>
    <a href="#method" title="Method">Method</a>: <i>String</i>
    <a href="#timeout" title="Timeout">Timeout</a>: <i>Double</i>
    <a href="#path" title="Path">Path</a>: <i>String</i>
    <a href="#interval" title="Interval">Interval</a>: <i>Double</i>
    <a href="#retries" title="Retries">Retries</a>: <i>Double</i>
    <a href="#header" title="Header">Header</a>: <i>Map</i>
    <a href="#type" title="Type">Type</a>: <i>String</i>
    <a href="#port" title="Port">Port</a>: <i>Double</i>
    <a href="#description" title="Description">Description</a>: <i>String</i>
    <a href="#allowinsecure" title="AllowInsecure">AllowInsecure</a>: <i>Boolean</i>
    <a href="#followredirects" title="FollowRedirects">FollowRedirects</a>: <i>Boolean</i>
    <a href="#probezone" title="ProbeZone">ProbeZone</a>: <i>String</i>
</pre>

## Properties

#### AccountIdentifier

The account identifier

_Required_: No

_Type_: String

_Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)

#### ExpectedBody

A case-insensitive sub-string to look for in the response body. If this string is not found, the origin will be marked as unhealthy. Only valid if type is "http" or "https". Default: "".

_Required_: No

_Type_: String

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### ExpectedCodes

The expected HTTP response code or code range of the health check. Eg 2xx. Only valid and required if type is "http" or "https".

_Required_: Yes

_Type_: String

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### Method

The method to use for the health check. Valid values are any valid HTTP verb if type is "http" or "https", or connection_established if type is "tcp". Default: "GET" if type is "http" or "https", "connection_established" if type is "tcp", and empty otherwise.

_Required_: No

_Type_: String

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### Timeout

The timeout (in seconds) before marking the health check as failed. Default: 5.

_Required_: No

_Type_: Double

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### Path

The endpoint path to health check against. Default: "/". Only valid if type is "http" or "https".

_Required_: No

_Type_: String

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### Interval

The interval between each health check. Shorter intervals may improve failover time, but will increase load on the origins as we check from multiple locations. Default: 60.

_Required_: No

_Type_: Double

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### Retries

The number of retries to attempt in case of a timeout before marking the origin as unhealthy. Retries are attempted immediately. Default: 2.

_Required_: No

_Type_: Double

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### Header

The HTTP request headers to send in the health check. It is recommended you set a Host header by default. The User-Agent header cannot be overridden. Fields documented below. Only valid if type is "http" or "https".

_Required_: No

_Type_: Map

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### Type

The protocol to use for the healthcheck. Currently supported protocols are 'HTTP', 'HTTPS', 'TCP', 'UDP-ICMP', 'ICMP-PING', and 'SMTP'. Default: "http".

_Required_: No

_Type_: String

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### Port

The port number to use for the healthcheck, required when creating a TCP monitor. Valid values are in the range 0-65535.

_Required_: No

_Type_: Double

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### Description

Free text description.

_Required_: No

_Type_: String

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### AllowInsecure

Do not validate the certificate when monitor use HTTPS. Only valid if type is "http" or "https".

_Required_: No

_Type_: Boolean

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### FollowRedirects

Follow redirects if returned by the origin. Only valid if type is "http" or "https".

_Required_: No

_Type_: Boolean

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### ProbeZone

Assign this monitor to emulate the specified zone while probing. Only valid if type is "http" or "https".

_Required_: No

_Type_: String

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

## Return Values

### Fn::GetAtt

The `Fn::GetAtt` intrinsic function returns a value for a specified attribute of this type. The following are the available attributes and sample return values.

For more information about using the `Fn::GetAtt` intrinsic function, see [Fn::GetAtt](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/intrinsic-function-reference-getatt.html).

#### Id

Load balancer monitor ID

#### CreatedOn

When the record was created

#### ModifiedOn

When the record was last modified

