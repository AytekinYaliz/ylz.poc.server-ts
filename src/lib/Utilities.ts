export default class Utilities {
    static isNullOrUndefined (value: any): boolean {
        return value === undefined || value === null;
    }

    static getEnumString(enums: any, enumValue: any): string {
        return enums[enumValue];
    }
}
