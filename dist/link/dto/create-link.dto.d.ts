import { Linksection } from 'src/linksection/schemas/linksection.schema';
export declare class CreateLinkDto {
    readonly sectionId: Linksection;
    readonly label: string;
    readonly active: boolean;
    readonly url: string;
    readonly image: string;
}
