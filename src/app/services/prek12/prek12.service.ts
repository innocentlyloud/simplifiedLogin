import { Injectable } from '@angular/core';
import { Section } from "../../models/prek12/section";
import { SECTIONS } from "../../mockdata/prek12/initial-data";

import {Student} from "../../models/prek12/student";

@Injectable()
export class Prek12Service {
    getSections(): Section[]{
        console.log(SECTIONS);
        return SECTIONS;
    }
    getStudentsFromClassId(id): Student[]{
         let section:Section;
         for(section of SECTIONS){
            if(section.id == id){
                //console.log("id : "+id +" and students are"+section.students);
                return section.students;
            }
         }
    }
}