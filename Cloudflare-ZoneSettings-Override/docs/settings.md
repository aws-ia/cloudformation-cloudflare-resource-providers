# Cloudflare::ZoneSettings::Override Settings

## Syntax

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON

<pre>
{
    "<a href="#alwaysonline" title="AlwaysOnline">AlwaysOnline</a>" : <i>Boolean</i>,
    "<a href="#alwaysusehttps" title="AlwaysUseHttps">AlwaysUseHttps</a>" : <i>Boolean</i>,
    "<a href="#automatichttpsrewrites" title="AutomaticHttpsRewrites">AutomaticHttpsRewrites</a>" : <i>Boolean</i>,
    "<a href="#binaryast" title="BinaryAst">BinaryAst</a>" : <i>Boolean</i>,
    "<a href="#brotli" title="Brotli">Brotli</a>" : <i>Boolean</i>,
    "<a href="#browsercheck" title="BrowserCheck">BrowserCheck</a>" : <i>Boolean</i>,
    "<a href="#developmentmode" title="DevelopmentMode">DevelopmentMode</a>" : <i>Boolean</i>,
    "<a href="#earlyhints" title="EarlyHints">EarlyHints</a>" : <i>Boolean</i>,
    "<a href="#emailobfuscation" title="EmailObfuscation">EmailObfuscation</a>" : <i>Boolean</i>,
    "<a href="#filterlogstocloudflare" title="FilterLogsToCloudflare">FilterLogsToCloudflare</a>" : <i>Boolean</i>,
    "<a href="#hotlinkprotection" title="HotlinkProtection">HotlinkProtection</a>" : <i>Boolean</i>,
    "<a href="#http2" title="Http2">Http2</a>" : <i>Boolean</i>,
    "<a href="#http3" title="Http3">Http3</a>" : <i>Boolean</i>,
    "<a href="#ipgeolocation" title="IpGeolocation">IpGeolocation</a>" : <i>Boolean</i>,
    "<a href="#ipv6" title="IpV6">IpV6</a>" : <i>Boolean</i>,
    "<a href="#logtocloudflare" title="LogToCloudflare">LogToCloudflare</a>" : <i>Boolean</i>,
    "<a href="#mirage" title="Mirage">Mirage</a>" : <i>Boolean</i>,
    "<a href="#opportunisticencryption" title="OpportunisticEncryption">OpportunisticEncryption</a>" : <i>Boolean</i>,
    "<a href="#opportunisticonion" title="OpportunisticOnion">OpportunisticOnion</a>" : <i>Boolean</i>,
    "<a href="#orangetoorange" title="OrangeToOrange">OrangeToOrange</a>" : <i>Boolean</i>,
    "<a href="#originerrorpagepassthru" title="OriginErrorPagePassThru">OriginErrorPagePassThru</a>" : <i>Boolean</i>,
    "<a href="#prefetchpreload" title="PrefetchPreload">PrefetchPreload</a>" : <i>Boolean</i>,
    "<a href="#privacypass" title="PrivacyPass">PrivacyPass</a>" : <i>Boolean</i>,
    "<a href="#responsebuffering" title="ResponseBuffering">ResponseBuffering</a>" : <i>Boolean</i>,
    "<a href="#rocketloader" title="RocketLoader">RocketLoader</a>" : <i>Boolean</i>,
    "<a href="#serversideexclude" title="ServerSideExclude">ServerSideExclude</a>" : <i>Boolean</i>,
    "<a href="#sortquerystringforcache" title="SortQueryStringForCache">SortQueryStringForCache</a>" : <i>Boolean</i>,
    "<a href="#tlsclientauth" title="TlsClientAuth">TlsClientAuth</a>" : <i>Boolean</i>,
    "<a href="#trueclientipheader" title="TrueClientIpHeader">TrueClientIpHeader</a>" : <i>Boolean</i>,
    "<a href="#universalssl" title="UniversalSsl">UniversalSsl</a>" : <i>Boolean</i>,
    "<a href="#visitorip" title="VisitorIp">VisitorIp</a>" : <i>Boolean</i>,
    "<a href="#waf" title="Waf">Waf</a>" : <i>Boolean</i>,
    "<a href="#webp" title="Webp">Webp</a>" : <i>Boolean</i>,
    "<a href="#websockets" title="Websockets">Websockets</a>" : <i>Boolean</i>,
    "<a href="#zerortt" title="ZeroRtt">ZeroRtt</a>" : <i>Boolean</i>,
    "<a href="#cachelevel" title="CacheLevel">CacheLevel</a>" : <i>String</i>,
    "<a href="#cnameflattening" title="CnameFlattening">CnameFlattening</a>" : <i>String</i>,
    "<a href="#h2prioritization" title="H2Prioritization">H2Prioritization</a>" : <i>String</i>,
    "<a href="#imageresizing" title="ImageResizing">ImageResizing</a>" : <i>String</i>,
    "<a href="#mintlsversion" title="MinTlsVersion">MinTlsVersion</a>" : <i>String</i>,
    "<a href="#originmaxhttpversion" title="OriginMaxHttpVersion">OriginMaxHttpVersion</a>" : <i>String</i>,
    "<a href="#polish" title="Polish">Polish</a>" : <i>String</i>,
    "<a href="#proxyreadtimeout" title="ProxyReadTimeout">ProxyReadTimeout</a>" : <i>String</i>,
    "<a href="#pseudoipv4" title="PseudoIPv4">PseudoIPv4</a>" : <i>String</i>,
    "<a href="#securitylevel" title="SecurityLevel">SecurityLevel</a>" : <i>String</i>
}
</pre>

### YAML

<pre>
<a href="#alwaysonline" title="AlwaysOnline">AlwaysOnline</a>: <i>Boolean</i>
<a href="#alwaysusehttps" title="AlwaysUseHttps">AlwaysUseHttps</a>: <i>Boolean</i>
<a href="#automatichttpsrewrites" title="AutomaticHttpsRewrites">AutomaticHttpsRewrites</a>: <i>Boolean</i>
<a href="#binaryast" title="BinaryAst">BinaryAst</a>: <i>Boolean</i>
<a href="#brotli" title="Brotli">Brotli</a>: <i>Boolean</i>
<a href="#browsercheck" title="BrowserCheck">BrowserCheck</a>: <i>Boolean</i>
<a href="#developmentmode" title="DevelopmentMode">DevelopmentMode</a>: <i>Boolean</i>
<a href="#earlyhints" title="EarlyHints">EarlyHints</a>: <i>Boolean</i>
<a href="#emailobfuscation" title="EmailObfuscation">EmailObfuscation</a>: <i>Boolean</i>
<a href="#filterlogstocloudflare" title="FilterLogsToCloudflare">FilterLogsToCloudflare</a>: <i>Boolean</i>
<a href="#hotlinkprotection" title="HotlinkProtection">HotlinkProtection</a>: <i>Boolean</i>
<a href="#http2" title="Http2">Http2</a>: <i>Boolean</i>
<a href="#http3" title="Http3">Http3</a>: <i>Boolean</i>
<a href="#ipgeolocation" title="IpGeolocation">IpGeolocation</a>: <i>Boolean</i>
<a href="#ipv6" title="IpV6">IpV6</a>: <i>Boolean</i>
<a href="#logtocloudflare" title="LogToCloudflare">LogToCloudflare</a>: <i>Boolean</i>
<a href="#mirage" title="Mirage">Mirage</a>: <i>Boolean</i>
<a href="#opportunisticencryption" title="OpportunisticEncryption">OpportunisticEncryption</a>: <i>Boolean</i>
<a href="#opportunisticonion" title="OpportunisticOnion">OpportunisticOnion</a>: <i>Boolean</i>
<a href="#orangetoorange" title="OrangeToOrange">OrangeToOrange</a>: <i>Boolean</i>
<a href="#originerrorpagepassthru" title="OriginErrorPagePassThru">OriginErrorPagePassThru</a>: <i>Boolean</i>
<a href="#prefetchpreload" title="PrefetchPreload">PrefetchPreload</a>: <i>Boolean</i>
<a href="#privacypass" title="PrivacyPass">PrivacyPass</a>: <i>Boolean</i>
<a href="#responsebuffering" title="ResponseBuffering">ResponseBuffering</a>: <i>Boolean</i>
<a href="#rocketloader" title="RocketLoader">RocketLoader</a>: <i>Boolean</i>
<a href="#serversideexclude" title="ServerSideExclude">ServerSideExclude</a>: <i>Boolean</i>
<a href="#sortquerystringforcache" title="SortQueryStringForCache">SortQueryStringForCache</a>: <i>Boolean</i>
<a href="#tlsclientauth" title="TlsClientAuth">TlsClientAuth</a>: <i>Boolean</i>
<a href="#trueclientipheader" title="TrueClientIpHeader">TrueClientIpHeader</a>: <i>Boolean</i>
<a href="#universalssl" title="UniversalSsl">UniversalSsl</a>: <i>Boolean</i>
<a href="#visitorip" title="VisitorIp">VisitorIp</a>: <i>Boolean</i>
<a href="#waf" title="Waf">Waf</a>: <i>Boolean</i>
<a href="#webp" title="Webp">Webp</a>: <i>Boolean</i>
<a href="#websockets" title="Websockets">Websockets</a>: <i>Boolean</i>
<a href="#zerortt" title="ZeroRtt">ZeroRtt</a>: <i>Boolean</i>
<a href="#cachelevel" title="CacheLevel">CacheLevel</a>: <i>String</i>
<a href="#cnameflattening" title="CnameFlattening">CnameFlattening</a>: <i>String</i>
<a href="#h2prioritization" title="H2Prioritization">H2Prioritization</a>: <i>String</i>
<a href="#imageresizing" title="ImageResizing">ImageResizing</a>: <i>String</i>
<a href="#mintlsversion" title="MinTlsVersion">MinTlsVersion</a>: <i>String</i>
<a href="#originmaxhttpversion" title="OriginMaxHttpVersion">OriginMaxHttpVersion</a>: <i>String</i>
<a href="#polish" title="Polish">Polish</a>: <i>String</i>
<a href="#proxyreadtimeout" title="ProxyReadTimeout">ProxyReadTimeout</a>: <i>String</i>
<a href="#pseudoipv4" title="PseudoIPv4">PseudoIPv4</a>: <i>String</i>
<a href="#securitylevel" title="SecurityLevel">SecurityLevel</a>: <i>String</i>
</pre>

## Properties

#### AlwaysOnline

Always Online Mode

_Required_: No

_Type_: Boolean

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### AlwaysUseHttps

Always Use HTTPS

_Required_: No

_Type_: Boolean

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### AutomaticHttpsRewrites

Automatic Https Rewrites

_Required_: No

_Type_: Boolean

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### BinaryAst

Binary Ast

_Required_: No

_Type_: Boolean

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### Brotli

Brotli

_Required_: No

_Type_: Boolean

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### BrowserCheck

Browser Check

_Required_: No

_Type_: Boolean

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### DevelopmentMode

Development Mode

_Required_: No

_Type_: Boolean

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### EarlyHints

Early Hints

_Required_: No

_Type_: Boolean

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### EmailObfuscation

Email Obfuscation

_Required_: No

_Type_: Boolean

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### FilterLogsToCloudflare

Filter Logs to Cloudflare

_Required_: No

_Type_: Boolean

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### HotlinkProtection

Hotlink Protection

_Required_: No

_Type_: Boolean

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### Http2

Http 2

_Required_: No

_Type_: Boolean

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### Http3

Http 3

_Required_: No

_Type_: Boolean

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### IpGeolocation

IP Geolocation

_Required_: No

_Type_: Boolean

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### IpV6

IP V6

_Required_: No

_Type_: Boolean

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### LogToCloudflare

Log to Cloudflare

_Required_: No

_Type_: Boolean

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### Mirage

Mirage

_Required_: No

_Type_: Boolean

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### OpportunisticEncryption

Opportunistic Encryption

_Required_: No

_Type_: Boolean

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### OpportunisticOnion

Opportunistic Onion

_Required_: No

_Type_: Boolean

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### OrangeToOrange

Orange to Orange

_Required_: No

_Type_: Boolean

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### OriginErrorPagePassThru

Origin Error Page Pass Thru

_Required_: No

_Type_: Boolean

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### PrefetchPreload

Prefetch Preload

_Required_: No

_Type_: Boolean

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### PrivacyPass

Privacy Pass

_Required_: No

_Type_: Boolean

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### ResponseBuffering

Response Buffering

_Required_: No

_Type_: Boolean

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### RocketLoader

Rocket Loader

_Required_: No

_Type_: Boolean

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### ServerSideExclude

Server Side Exclude

_Required_: No

_Type_: Boolean

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### SortQueryStringForCache

Sort Query String For Cache

_Required_: No

_Type_: Boolean

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### TlsClientAuth

Tls Client Auth

_Required_: No

_Type_: Boolean

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### TrueClientIpHeader

True Client IP Header

_Required_: No

_Type_: Boolean

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### UniversalSsl

Universal SSL

_Required_: No

_Type_: Boolean

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### VisitorIp

VisitorIp

_Required_: No

_Type_: Boolean

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### Waf

WAF

_Required_: No

_Type_: Boolean

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### Webp

webp

_Required_: No

_Type_: Boolean

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### Websockets

Websockets

_Required_: No

_Type_: Boolean

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### ZeroRtt

Zero RTT

_Required_: No

_Type_: Boolean

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### CacheLevel

Cache Level

_Required_: No

_Type_: String

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### CnameFlattening

CNAME Flattening

_Required_: No

_Type_: String

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### H2Prioritization

H2 Prioritization

_Required_: No

_Type_: String

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### ImageResizing

Image Resizing

_Required_: No

_Type_: String

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### MinTlsVersion

Min TLS Version

_Required_: No

_Type_: String

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### OriginMaxHttpVersion

Origin Max HTTP Version

_Required_: No

_Type_: String

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### Polish

Polish

_Required_: No

_Type_: String

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### ProxyReadTimeout

Proxy Read Timeout

_Required_: No

_Type_: String

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### PseudoIPv4

Pseudo IPv4

_Required_: No

_Type_: String

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### SecurityLevel

Security Level

_Required_: No

_Type_: String

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

