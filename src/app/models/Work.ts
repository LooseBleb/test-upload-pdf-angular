import { Byte } from "@angular/compiler/src/util";
import { Matter } from "./Matter";

export class Work {
    id!: number;
    name!: string;
    description!: string;
    matter!: Matter; 
    PDF!: string;
}