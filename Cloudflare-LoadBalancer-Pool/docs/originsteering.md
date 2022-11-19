# Cloudflare::LoadBalancer::Pool OriginSteering

Set an origin steering policy to control origin selection within a pool.

## Syntax

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON

<pre>
{
    "<a href="#policy" title="Policy">Policy</a>" : <i>String</i>
}
</pre>

### YAML

<pre>
<a href="#policy" title="Policy">Policy</a>: <i>String</i>
</pre>

## Properties

#### Policy

The type of origin steering policy to use, either random or hash (based on CF-Connecting-IP).

_Required_: No

_Type_: String

_Allowed Values_: <code>hash</code> | <code>random</code>

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

