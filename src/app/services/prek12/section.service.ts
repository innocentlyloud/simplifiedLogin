import { Injectable } from '@angular/core';
import { Section } from "../../models/prek12/section";
import { SECTIONS } from "../../mockdata/prek12/initial-data";

@Injectable()
export class SectionService {
    getSections(): Section[]{
        console.log(SECTIONS);
        return SECTIONS;
    }
}