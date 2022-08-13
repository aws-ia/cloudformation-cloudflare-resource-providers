// This is a generated file. Modifications will be overwritten.
import { BaseModel, Dict, integer, Integer, Optional, transformValue } from '@amazon-web-services-cloudformation/cloudformation-cli-typescript-lib';
import { Exclude, Expose, Type, Transform } from 'class-transformer';

export class ResourceModel extends BaseModel {
    ['constructor']: typeof ResourceModel;

    @Exclude()
    public static readonly TYPE_NAME: string = 'Cloudflare::LoadBalancer::LoadBalancer';

    @Exclude()
    protected readonly IDENTIFIER_KEY_ID: string = '/properties/Id';

    @Expose({ name: 'Id' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'id', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    id?: Optional<string>;
    @Expose({ name: 'ZoneId' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'zoneId', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    zoneId?: Optional<string>;
    @Expose({ name: 'Name' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'name', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    name?: Optional<string>;
    @Expose({ name: 'FallbackPoolId' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'fallbackPoolId', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    fallbackPoolId?: Optional<string>;
    @Expose({ name: 'DefaultPoolIds' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'defaultPoolIds', value, obj, [Array]),
        {
            toClassOnly: true,
        }
    )
    defaultPoolIds?: Optional<Array<string>>;
    @Expose({ name: 'Description' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'description', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    description?: Optional<string>;
    @Expose({ name: 'Ttl' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(Number, 'ttl', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    ttl?: Optional<number>;
    @Expose({ name: 'SteeringPolicy' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'steeringPolicy', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    steeringPolicy?: Optional<string>;
    @Expose({ name: 'Proxied' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(Boolean, 'proxied', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    proxied?: Optional<boolean>;
    @Expose({ name: 'Enabled' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(Boolean, 'enabled', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    enabled?: Optional<boolean>;
    @Expose({ name: 'RegionPools' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'regionPools', value, obj, [Set]),
        {
            toClassOnly: true,
        }
    )
    regionPools?: Optional<Set<string>>;
    @Expose({ name: 'CountryPools' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'countryPools', value, obj, [Set]),
        {
            toClassOnly: true,
        }
    )
    countryPools?: Optional<Set<string>>;
    @Expose({ name: 'PopPools' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'popPools', value, obj, [Set]),
        {
            toClassOnly: true,
        }
    )
    popPools?: Optional<Set<string>>;
    @Expose({ name: 'SessionAffinity' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'sessionAffinity', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    sessionAffinity?: Optional<string>;
    @Expose({ name: 'SessionAffinityTtl' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(Number, 'sessionAffinityTtl', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    sessionAffinityTtl?: Optional<number>;
    @Expose({ name: 'SessionAffinityAttributes' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'sessionAffinityAttributes', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    sessionAffinityAttributes?: Optional<string>;
    @Expose({ name: 'Rules' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'rules', value, obj, [Array]),
        {
            toClassOnly: true,
        }
    )
    rules?: Optional<Array<string>>;

    @Exclude()
    public getPrimaryIdentifier(): Dict {
        const identifier: Dict = {};
        if (this.id != null) {
            identifier[this.IDENTIFIER_KEY_ID] = this.id;
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

