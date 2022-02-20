/**
 * @author WMXPY
 * @namespace Preference
 * @description Preference
 */

export type BarkPreferenceModuleLink = {

    readonly name: string;
    readonly path: string;
};

export type BarkPreference = {

    readonly modules: BarkPreferenceModuleLink[];
};
