# Cloudflare::Dns::Record

An example resource schema demonstrating some basic constructs and validation rules.

## Syntax

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON

<pre>
{
    "Type" : "Cloudflare::Dns::Record",
    "Properties" : {
        "<a href="#type" title="Type">Type</a>" : <i>String</i>,
        "<a href="#meta" title="Meta">Meta</a>" : <i>Map</i>,
        "<a href="#data" title="Data">Data</a>" : <i>Map</i>,
        "<a href="#name" title="Name">Name</a>" : <i>String</i>,
        "<a href="#ttl" title="Ttl">Ttl</a>" : <i>Double</i>,
        "<a href="#zoneid" title="ZoneId">ZoneId</a>" : <i>String</i>,
        "<a href="#content" title="Content">Content</a>" : <i>String</i>,
        "<a href="#proxied" title="Proxied">Proxied</a>" : <i>Boolean</i>,
    }
}
</pre>

### YAML

<pre>
Type: Cloudflare::Dns::Record
Properties:
    <a href="#type" title="Type">Type</a>: <i>String</i>
    <a href="#meta" title="Meta">Meta</a>: <i>Map</i>
    <a href="#data" title="Data">Data</a>: <i>Map</i>
    <a href="#name" title="Name">Name</a>: <i>String</i>
    <a href="#ttl" title="Ttl">Ttl</a>: <i>Double</i>
    <a href="#zoneid" title="ZoneId">ZoneId</a>: <i>String</i>
    <a href="#content" title="Content">Content</a>: <i>String</i>
    <a href="#proxied" title="Proxied">Proxied</a>: <i>Boolean</i>
</pre>

## Properties

#### Type

Record type

_Required_: Yes

_Type_: String

_Allowed Values_: <code>A</code> | <code>AAAA</code> | <code>CNAME</code> | <code>HTTPS</code> | <code>TXT</code> | <code>SRV</code> | <code>LOC</code> | <code>MX</code> | <code>NS</code> | <code>CERT</code> | <code>DNSKEY</code> | <code>DS</code> | <code>NAPTR</code> | <code>SMIMEA</code> | <code>SSHFP</code> | <code>SVCB</code> | <code>TLSA</code> | <code>URI</code>

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### Meta

Extra Cloudflare-specific information about the record

_Required_: No

_Type_: Map

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### Data

Metadata about the record

_Required_: No

_Type_: Map

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### Name

DNS record name (or @ for the zone apex)

_Required_: Yes

_Type_: String

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### Ttl

Time to live, in seconds, of the DNS record. Must be between 60 and 86400, or 1 for 'automatic'

_Required_: Yes

_Type_: Double

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### ZoneId

Zone identifier tag

_Required_: Yes

_Type_: String

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### Content

A valid IPv4 address

_Required_: Yes

_Type_: String

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### Proxied

Whether the record is receiving the performance and security benefits of Cloudflare

_Required_: No

_Type_: Boolean

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

## Return Values

### Fn::GetAtt

The `Fn::GetAtt` intrinsic function returns a value for a specified attribute of this type. The following are the available attributes and sample return values.

For more information about using the `Fn::GetAtt` intrinsic function, see [Fn::GetAtt](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/intrinsic-function-reference-getatt.html).

#### Id

DNS record identifier tag

#### Locked

Whether this record can be modified/deleted (true means it's managed by Cloudflare)

#### ModifiedOn

When the record was last modified

#### CreatedOn

When the record was created

#### Proxiable

Whether the record can be proxied by Cloudflare or not

#### ZoneName

The domain of the record

