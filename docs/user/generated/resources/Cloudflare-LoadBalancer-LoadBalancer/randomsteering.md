# Cloudflare::LoadBalancer::LoadBalancer RandomSteering

Configures pool weights for random steering. When steering_policy is 'random', a random pool is selected with probability proportional to these pool weights

## Syntax

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON

<pre>
{
    "<a href="#defaultweight" title="DefaultWeight">DefaultWeight</a>" : <i>Double</i>
}
</pre>

### YAML

<pre>
<a href="#defaultweight" title="DefaultWeight">DefaultWeight</a>: <i>Double</i>
</pre>

## Properties

#### DefaultWeight

_Required_: No

_Type_: Double

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

