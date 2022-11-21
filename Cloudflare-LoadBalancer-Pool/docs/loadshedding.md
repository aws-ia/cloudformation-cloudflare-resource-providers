# Cloudflare::LoadBalancer::Pool LoadShedding

Configures load shedding policies and percentages for the pool

## Syntax

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON

<pre>
{
    "<a href="#defaultpercent" title="DefaultPercent">DefaultPercent</a>" : <i>Integer</i>,
    "<a href="#defaultpolicy" title="DefaultPolicy">DefaultPolicy</a>" : <i>String</i>,
    "<a href="#sessionpercent" title="SessionPercent">SessionPercent</a>" : <i>Integer</i>,
    "<a href="#sessionpolicy" title="SessionPolicy">SessionPolicy</a>" : <i>String</i>
}
</pre>

### YAML

<pre>
<a href="#defaultpercent" title="DefaultPercent">DefaultPercent</a>: <i>Integer</i>
<a href="#defaultpolicy" title="DefaultPolicy">DefaultPolicy</a>: <i>String</i>
<a href="#sessionpercent" title="SessionPercent">SessionPercent</a>: <i>Integer</i>
<a href="#sessionpolicy" title="SessionPolicy">SessionPolicy</a>: <i>String</i>
</pre>

## Properties

#### DefaultPercent

The percent of traffic to shed from the pool, according to the default policy. Applies to new sessions and traffic without session affinity.

_Required_: No

_Type_: Integer

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### DefaultPolicy

The default policy to use when load shedding. A random policy randomly sheds a given percent of requests. A hash policy computes a hash over the CF-Connecting-IP address and sheds all requests originating from a percent of IPs.

_Required_: No

_Type_: String

_Allowed Values_: <code>hash</code> | <code>random</code>

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### SessionPercent

The percent of existing sessions to shed from the pool, according to the session policy.

_Required_: No

_Type_: Integer

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### SessionPolicy

Session Policy

_Required_: No

_Type_: String

_Allowed Values_: <code>hash</code>

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

