import { Validators } from "@angular/forms";

export interface FormField {
    id?: number;
    name: string;
    type: string;
    label?: string;
    placeholder?: string;
    width: string;
    validators?: Validators
}