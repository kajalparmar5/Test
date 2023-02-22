export class User {
    constructor(

        public fname:string,
        public sname:string,
        public tname:string,
        //public taname:string,
        public age:string,
        public gender:string,
        public hobies:{
            reading: string,
            sports :string,
            riding: string,
            gaming : string,
            music: string
       },
        public company:string,        
    ){}
}
