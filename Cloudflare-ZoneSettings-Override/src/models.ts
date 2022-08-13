// This is a generated file. Modifications will be overwritten.
import { BaseModel, Dict, integer, Integer, Optional, transformValue } from '@amazon-web-services-cloudformation/cloudformation-cli-typescript-lib';
import { Exclude, Expose, Type, Transform } from 'class-transformer';

export class ResourceModel extends BaseModel {
    ['constructor']: typeof ResourceModel;

    @Exclude()
    public static readonly TYPE_NAME: string = 'Cloudflare::ZoneSettings::Override';

    @Exclude()
    protected readonly IDENTIFIER_KEY_ZONEID: string = '/properties/ZoneId';

    @Expose({ name: 'ZoneId' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'zoneId', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    zoneId?: Optional<string>;
    @Expose({ name: 'Settings' })
    @Type(() => Settings)
    settings?: Optional<Settings>;

    @Exclude()
    public getPrimaryIdentifier(): Dict {
        const identifier: Dict = {};
        if (this.zoneId != null) {
            identifier[this.IDENTIFIER_KEY_ZONEID] = this.zoneId;
        }

        // only return the identifier if it can be used, i.e. if all components are present
        return Object.keys(identifier).length === 1 ? identifier : null;
    }

    @Exclude()
    public getAdditionalIdentifiers(): Array<Dict> {
        const identifiers: Array<Dict> = new Array<Dict>();
        // only return the identifiers if any can be used
        return identifiers.length === 0 ? null : identifiers;
    }
}

export class Settings extends BaseModel {
    ['constructor']: typeof Settings;


    @Expose({ name: 'AlwaysOnline' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(Boolean, 'alwaysOnline', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    alwaysOnline?: Optional<boolean>;
    @Expose({ name: 'AlwaysUseHttps' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(Boolean, 'alwaysUseHttps', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    alwaysUseHttps?: Optional<boolean>;
    @Expose({ name: 'AutomaticHttpsRewrites' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(Boolean, 'automaticHttpsRewrites', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    automaticHttpsRewrites?: Optional<boolean>;
    @Expose({ name: 'BinaryAst' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(Boolean, 'binaryAst', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    binaryAst?: Optional<boolean>;
    @Expose({ name: 'Brotli' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(Boolean, 'brotli', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    brotli?: Optional<boolean>;
    @Expose({ name: 'BrowserCheck' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(Boolean, 'browserCheck', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    browserCheck?: Optional<boolean>;
    @Expose({ name: 'DevelopmentMode' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(Boolean, 'developmentMode', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    developmentMode?: Optional<boolean>;
    @Expose({ name: 'EarlyHints' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(Boolean, 'earlyHints', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    earlyHints?: Optional<boolean>;
    @Expose({ name: 'EmailObfuscation' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(Boolean, 'emailObfuscation', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    emailObfuscation?: Optional<boolean>;
    @Expose({ name: 'FilterLogsToCloudflare' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(Boolean, 'filterLogsToCloudflare', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    filterLogsToCloudflare?: Optional<boolean>;
    @Expose({ name: 'HotlinkProtection' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(Boolean, 'hotlinkProtection', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    hotlinkProtection?: Optional<boolean>;
    @Expose({ name: 'Http2' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(Boolean, 'http2', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    http2?: Optional<boolean>;
    @Expose({ name: 'Http3' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(Boolean, 'http3', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    http3?: Optional<boolean>;
    @Expose({ name: 'IpGeolocation' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(Boolean, 'ipGeolocation', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    ipGeolocation?: Optional<boolean>;
    @Expose({ name: 'IpV6' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(Boolean, 'ipV6', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    ipV6?: Optional<boolean>;
    @Expose({ name: 'LogToCloudflare' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(Boolean, 'logToCloudflare', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    logToCloudflare?: Optional<boolean>;
    @Expose({ name: 'Mirage' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(Boolean, 'mirage', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    mirage?: Optional<boolean>;
    @Expose({ name: 'OpportunisticEncryption' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(Boolean, 'opportunisticEncryption', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    opportunisticEncryption?: Optional<boolean>;
    @Expose({ name: 'OpportunisticOnion' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(Boolean, 'opportunisticOnion', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    opportunisticOnion?: Optional<boolean>;
    @Expose({ name: 'OrangeToOrange' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(Boolean, 'orangeToOrange', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    orangeToOrange?: Optional<boolean>;
    @Expose({ name: 'OriginErrorPagePassThru' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(Boolean, 'originErrorPagePassThru', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    originErrorPagePassThru?: Optional<boolean>;
    @Expose({ name: 'PrefetchPreload' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(Boolean, 'prefetchPreload', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    prefetchPreload?: Optional<boolean>;
    @Expose({ name: 'PrivacyPass' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(Boolean, 'privacyPass', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    privacyPass?: Optional<boolean>;
    @Expose({ name: 'ResponseBuffering' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(Boolean, 'responseBuffering', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    responseBuffering?: Optional<boolean>;
    @Expose({ name: 'RocketLoader' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(Boolean, 'rocketLoader', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    rocketLoader?: Optional<boolean>;
    @Expose({ name: 'ServerSideExclude' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(Boolean, 'serverSideExclude', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    serverSideExclude?: Optional<boolean>;
    @Expose({ name: 'SortQueryStringForCache' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(Boolean, 'sortQueryStringForCache', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    sortQueryStringForCache?: Optional<boolean>;
    @Expose({ name: 'TlsClientAuth' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(Boolean, 'tlsClientAuth', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    tlsClientAuth?: Optional<boolean>;
    @Expose({ name: 'TrueClientIpHeader' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(Boolean, 'trueClientIpHeader', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    trueClientIpHeader?: Optional<boolean>;
    @Expose({ name: 'UniversalSsl' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(Boolean, 'universalSsl', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    universalSsl?: Optional<boolean>;
    @Expose({ name: 'VisitorIp' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(Boolean, 'visitorIp', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    visitorIp?: Optional<boolean>;
    @Expose({ name: 'Waf' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(Boolean, 'waf', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    waf?: Optional<boolean>;
    @Expose({ name: 'Webp' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(Boolean, 'webp', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    webp?: Optional<boolean>;
    @Expose({ name: 'Websockets' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(Boolean, 'websockets', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    websockets?: Optional<boolean>;
    @Expose({ name: 'ZeroRtt' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(Boolean, 'zeroRtt', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    zeroRtt?: Optional<boolean>;
    @Expose({ name: 'CacheLevel' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'cacheLevel', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    cacheLevel?: Optional<string>;
    @Expose({ name: 'CnameFlattening' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'cnameFlattening', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    cnameFlattening?: Optional<string>;
    @Expose({ name: 'H2Prioritization' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'h2Prioritization', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    h2Prioritization?: Optional<string>;
    @Expose({ name: 'ImageResizing' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'imageResizing', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    imageResizing?: Optional<string>;
    @Expose({ name: 'MinTlsVersion' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'minTlsVersion', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    minTlsVersion?: Optional<string>;
    @Expose({ name: 'OriginMaxHttpVersion' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'originMaxHttpVersion', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    originMaxHttpVersion?: Optional<string>;
    @Expose({ name: 'Polish' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'polish', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    polish?: Optional<string>;
    @Expose({ name: 'ProxyReadTimeout' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'proxyReadTimeout', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    proxyReadTimeout?: Optional<string>;
    @Expose({ name: 'PseudoIPv4' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'pseudoIPv4', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    pseudoIPv4?: Optional<string>;
    @Expose({ name: 'SecurityLevel' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'securityLevel', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    securityLevel?: Optional<string>;

}

export class TypeConfigurationModel extends BaseModel {
    ['constructor']: typeof TypeConfigurationModel;


    @Expose({ name: 'CloudflareAccess' })
    @Type(() => CloudflareAccess)
    cloudflareAccess?: Optional<CloudflareAccess>;

}

export class CloudflareAccess extends BaseModel {
    ['constructor']: typeof CloudflareAccess;


    @Expose({ name: 'Url' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'url', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    url?: Optional<string>;
    @Expose({ name: 'ApiKey' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'apiKey', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    apiKey?: Optional<string>;

}

