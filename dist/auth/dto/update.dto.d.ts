import { UserType } from '../schemas/user.schema';
export declare class UpdateDto {
    readonly fullName: string;
    readonly username: string;
    readonly password: string;
    readonly bio: string;
    readonly fcmTokens: string[];
    readonly primaryEmail: string;
    readonly primaryEmailEnabled: boolean;
    readonly primaryPhone: string;
    readonly primaryPhoneEnabled: boolean;
    readonly emails: string[];
    readonly phones: string[];
    readonly type: UserType;
    readonly image: string;
}
