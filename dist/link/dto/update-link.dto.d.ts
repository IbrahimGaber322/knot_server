import { User } from 'src/auth/schemas/user.schema';
import { Linksection } from 'src/linksection/schemas/linksection.schema';
export declare class UpdateLinkDto {
    readonly userId: User;
    readonly sectionId: Linksection;
    readonly label: string;
    readonly active: boolean;
    readonly url: string;
    readonly image: string;
}
