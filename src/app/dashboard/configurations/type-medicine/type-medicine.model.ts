
export class TypeMedicineModel {
     
    constructor(
        public name?: string, 
        public form?: string,
        public presentation?: string,
        public qsymbol?: number,
        public symbol?: string,
        public created_at?: Date,
        public update_at?: Date,
        public _id?:string
    ){}

}