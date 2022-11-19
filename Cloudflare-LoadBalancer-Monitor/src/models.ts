// This is a generated file. Modifications will be overwritten.
import { BaseModel, Dict, integer, Integer, Optional, transformValue } from '@amazon-web-services-cloudformation/cloudformation-cli-typescript-lib';
import { Exclude, Expose, Type, Transform } from 'class-transformer';

export class ResourceModel extends BaseModel {
    ['constructor']: typeof ResourceModel;

    @Exclude()
    public static readonly TYPE_NAME: string = 'Cloudflare::LoadBalancer::Monitor';

    @Exclude()
    protected readonly IDENTIFIER_KEY_ID: string = '/properties/Id';
    @Exclude()
    protected readonly IDENTIFIER_KEY_ACCOUNTIDENTIFIER: string = '/properties/AccountIdentifier';

    @Expose({ name: 'Id' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'id', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    id?: Optional<string>;
    @Expose({ name: 'AccountIdentifier' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'accountIdentifier', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    accountIdentifier?: Optional<string>;
    @Expose({ name: 'ExpectedBody' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'expectedBody', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    expectedBody?: Optional<string>;
    @Expose({ name: 'ExpectedCodes' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'expectedCodes', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    expectedCodes?: Optional<string>;
    @Expose({ name: 'Method' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'method', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    method?: Optional<string>;
    @Expose({ name: 'Timeout' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(Number, 'timeout', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    timeout?: Optional<number>;
    @Expose({ name: 'Path' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'path', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    path?: Optional<string>;
    @Expose({ name: 'Interval' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(Number, 'interval', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    interval?: Optional<number>;
    @Expose({ name: 'Retries' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(Number, 'retries', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    retries?: Optional<number>;
    @Expose({ name: 'Header' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(Object, 'header', value, obj, [Map]),
        {
            toClassOnly: true,
        }
    )
    header?: Optional<Map<string, object>>;
    @Expose({ name: 'Type' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'type_', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    type_?: Optional<string>;
    @Expose({ name: 'Port' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(Number, 'port', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    port?: Optional<number>;
    @Expose({ name: 'Description' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'description', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    description?: Optional<string>;
    @Expose({ name: 'AllowInsecure' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(Boolean, 'allowInsecure', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    allowInsecure?: Optional<boolean>;
    @Expose({ name: 'FollowRedirects' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(Boolean, 'followRedirects', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    followRedirects?: Optional<boolean>;
    @Expose({ name: 'ProbeZone' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'probeZone', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    probeZone?: Optional<string>;
    @Expose({ name: 'CreatedOn' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'createdOn', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    createdOn?: Optional<string>;
    @Expose({ name: 'ModifiedOn' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'modifiedOn', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    modifiedOn?: Optional<string>;

    @Exclude()
    public getPrimaryIdentifier(): Dict {
        const identifier: Dict = {};
        if (this.id != null) {
            identifier[this.IDENTIFIER_KEY_ID] = this.id;
        }

        if (this.accountIdentifier != null) {
            identifier[this.IDENTIFIER_KEY_ACCOUNTIDENTIFIER] = this.accountIdentifier;
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

