# Cloudflare::ZoneSettings::Override

An example resource schema demonstrating some basic constructs and validation rules.

## Syntax

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON

<pre>
{
    "Type" : "Cloudflare::ZoneSettings::Override",
    "Properties" : {
        "<a href="#zoneid" title="ZoneId">ZoneId</a>" : <i>String</i>,
        "<a href="#settings" title="Settings">Settings</a>" : <i><a href="settings.md">Settings</a></i>
    }
}
</pre>

### YAML

<pre>
Type: Cloudflare::ZoneSettings::Override
Properties:
    <a href="#zoneid" title="ZoneId">ZoneId</a>: <i>String</i>
    <a href="#settings" title="Settings">Settings</a>: <i><a href="settings.md">Settings</a></i>
</pre>

## Properties

#### ZoneId

The DNS zone ID to which apply settings

_Required_: Yes

_Type_: String

_Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)

#### Settings

_Required_: Yes

_Type_: <a href="settings.md">Settings</a>

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

## Return Values

### Ref

When you pass the logical ID of this resource to the intrinsic `Ref` function, Ref returns the ZoneId.
