export const admision = [
    "Oral", "Topical", "Injection", "Inhalation",
] as const

export type ModelType = (typeof admision)[number]

export interface Medication<Type = string> {
    id: string
    name: string
    description: string
    concentration?: number
    desiredDosage?: number
    sideEffects?: string
    contraIndications?: string
    indications?: string
    type: Type
}

export const medication: Medication<ModelType>[] = [
    {
        id: "1",
        name: "FelineRespireze",
        description: "For common feline respiratory infections",
        concentration: 2.5,
        desiredDosage: 1.0,
        sideEffects: "Mild drowsiness, occasional vomiting",
        contraIndications: "Not suitable for pregnant cats",
        indications: "Respiratory infections in cats",
        type: "Oral"
    },
    {
        id: "2",
        name: "PawsPainRelief",
        description: "Pain relief after surgery",
        concentration: 0.5,
        desiredDosage: 0.5,
        sideEffects: "None reported",
        contraIndications: "Not for cats with kidney issues",
        indications: "Post-surgery pain relief",
        type: "Injection"
    },
    {
        id: "3",
        name: "SkinSootheFeline",
        description: "Treatment of skin allergies",
        concentration: 10.0,
        desiredDosage: 3.0,
        sideEffects: "Increased thirst, minor gastrointestinal upset",
        contraIndications: "Avoid in cats with liver problems",
        indications: "Skin allergy treatment",
        type: "Topical"
    },
    {
        id: "4",
        name: "DewormMeow",
        description: "Deworming",
        concentration: 1.0,
        desiredDosage: 0.1,
        sideEffects: "None reported",
        indications: "Deworming in cats",
        type: "Oral"
    },
    {
        id: "5",
        name: "UrinaryGuardian",
        description: "Treatment of urinary tract infections",
        concentration: 5.0,
        desiredDosage: 2.5,
        sideEffects: "Possible diarrhea, occasional allergic reactions",
        contraIndications: "Not suitable for cats with known allergies",
        indications: "Urinary tract infection treatment",
        type: "Oral"
    }
];