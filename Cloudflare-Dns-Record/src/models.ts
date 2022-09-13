// This is a generated file. Modifications will be overwritten.
import { BaseModel, Dict, integer, Integer, Optional, transformValue } from '@amazon-web-services-cloudformation/cloudformation-cli-typescript-lib';
import { Exclude, Expose, Type, Transform } from 'class-transformer';

export class ResourceModel extends BaseModel {
    ['constructor']: typeof ResourceModel;

    @Exclude()
    public static readonly TYPE_NAME: string = 'Cloudflare::Dns::Record';

    @Exclude()
    protected readonly IDENTIFIER_KEY_ID: string = '/properties/Id';
    @Exclude()
    protected readonly IDENTIFIER_KEY_ZONEID: string = '/properties/ZoneId';

    @Expose({ name: 'Id' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'id', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    id?: Optional<string>;
    @Expose({ name: 'Type' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'type_', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    type_?: Optional<string>;
    @Expose({ name: 'Meta' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(Object, 'meta', value, obj, [Map]),
        {
            toClassOnly: true,
        }
    )
    meta?: Optional<Map<string, object>>;
    @Expose({ name: 'Locked' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(Boolean, 'locked', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    locked?: Optional<boolean>;
    @Expose({ name: 'Data' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(Object, 'data', value, obj, [Map]),
        {
            toClassOnly: true,
        }
    )
    data?: Optional<Map<string, object>>;
    @Expose({ name: 'Name' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'name', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    name?: Optional<string>;
    @Expose({ name: 'Ttl' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(Number, 'ttl', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    ttl?: Optional<number>;
    @Expose({ name: 'ZoneId' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'zoneId', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    zoneId?: Optional<string>;
    @Expose({ name: 'ModifiedOn' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'modifiedOn', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    modifiedOn?: Optional<string>;
    @Expose({ name: 'CreatedOn' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'createdOn', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    createdOn?: Optional<string>;
    @Expose({ name: 'Proxiable' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(Boolean, 'proxiable', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    proxiable?: Optional<boolean>;
    @Expose({ name: 'Content' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'content', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    content?: Optional<string>;
    @Expose({ name: 'Proxied' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(Boolean, 'proxied', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    proxied?: Optional<boolean>;
    @Expose({ name: 'ZoneName' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'zoneName', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    zoneName?: Optional<string>;

    @Exclude()
    public getPrimaryIdentifier(): Dict {
        const identifier: Dict = {};
        if (this.id != null) {
            identifier[this.IDENTIFIER_KEY_ID] = this.id;
        }

        if (this.zoneId != null) {
            identifier[this.IDENTIFIER_KEY_ZONEID] = this.zoneId;
        }

        // only return the identifier if it can be used, i.e. if all components are present
        return Object.keys(identifier).length === 2 ? identifier : null;
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

