import { Doctor } from "../interfaces/doctor";

export function getDoctorSpecializationsString(doc: Doctor): string[] {
    return doc?.attributes.specializations.data
        .map(spec => spec.attributes.name);
}