// This is a generated file. Modifications will be overwritten.
import { BaseModel, Dict, integer, Integer, Optional, transformValue } from '@amazon-web-services-cloudformation/cloudformation-cli-typescript-lib';
import { Exclude, Expose, Type, Transform } from 'class-transformer';

export class ResourceModel extends BaseModel {
    ['constructor']: typeof ResourceModel;

    @Exclude()
    public static readonly TYPE_NAME: string = 'Cloudflare::LoadBalancer::Pool';

    @Exclude()
    protected readonly IDENTIFIER_KEY_ID: string = '/properties/Id';
    @Exclude()
    protected readonly IDENTIFIER_KEY_ACCOUNTIDENTIFIER: string = '/properties/AccountIdentifier';

    @Expose({ name: 'Name' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'name', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    name?: Optional<string>;
    @Expose({ name: 'AccountIdentifier' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'accountIdentifier', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    accountIdentifier?: Optional<string>;
    @Expose({ name: 'Id' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'id', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    id?: Optional<string>;
    @Expose({ name: 'Origins' })
    @Type(() => Origin)
    origins?: Optional<Array<Origin>>;
    @Expose({ name: 'NotificationFilter' })
    @Type(() => Filter)
    notificationFilter?: Optional<Filter>;
    @Expose({ name: 'CheckRegions' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'checkRegions', value, obj, [Array]),
        {
            toClassOnly: true,
        }
    )
    checkRegions?: Optional<Array<string>>;
    @Expose({ name: 'Description' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'description', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    description?: Optional<string>;
    @Expose({ name: 'Enabled' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(Boolean, 'enabled', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    enabled?: Optional<boolean>;
    @Expose({ name: 'Latitude' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(Number, 'latitude', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    latitude?: Optional<number>;
    @Expose({ name: 'Longitude' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(Number, 'longitude', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    longitude?: Optional<number>;
    @Expose({ name: 'LoadShedding' })
    @Type(() => LoadShedding)
    loadShedding?: Optional<LoadShedding>;
    @Expose({ name: 'MinimumOrigins' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(Number, 'minimumOrigins', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    minimumOrigins?: Optional<number>;
    @Expose({ name: 'Monitor' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'monitor', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    monitor?: Optional<string>;
    @Expose({ name: 'NotificationEmail' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'notificationEmail', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    notificationEmail?: Optional<string>;
    @Expose({ name: 'OriginSteering' })
    @Type(() => OriginSteering)
    originSteering?: Optional<OriginSteering>;
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

export class Origin extends BaseModel {
    ['constructor']: typeof Origin;


    @Expose({ name: 'Name' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'name', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    name?: Optional<string>;
    @Expose({ name: 'Address' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'address', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    address?: Optional<string>;
    @Expose({ name: 'Enabled' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(Boolean, 'enabled', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    enabled?: Optional<boolean>;
    @Expose({ name: 'Weight' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(Number, 'weight', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    weight?: Optional<number>;

}

export class Filter extends BaseModel {
    ['constructor']: typeof Filter;


    @Expose({ name: 'Pool' })
    @Type(() => Pool)
    pool?: Optional<Pool>;

}

export class Pool extends BaseModel {
    ['constructor']: typeof Pool;


    @Expose({ name: 'Healthy' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(Boolean, 'healthy', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    healthy?: Optional<boolean>;

}

export class LoadShedding extends BaseModel {
    ['constructor']: typeof LoadShedding;


    @Expose({ name: 'DefaultPercent' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(Integer, 'defaultPercent', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    defaultPercent?: Optional<integer>;
    @Expose({ name: 'DefaultPolicy' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'defaultPolicy', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    defaultPolicy?: Optional<string>;
    @Expose({ name: 'SessionPercent' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(Integer, 'sessionPercent', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    sessionPercent?: Optional<integer>;
    @Expose({ name: 'SessionPolicy' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'sessionPolicy', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    sessionPolicy?: Optional<string>;

}

export class OriginSteering extends BaseModel {
    ['constructor']: typeof OriginSteering;


    @Expose({ name: 'Policy' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'policy', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    policy?: Optional<string>;

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

