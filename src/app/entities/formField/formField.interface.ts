import { Validators } from "@angular/forms";

export interface FormField {
    id?: number;
    name: string;
    textColor?: string;
    type: string;
    label?: string;
    placeholder?: string;
    width: string;
    validators?: Validators
}