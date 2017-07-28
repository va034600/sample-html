export class WebParams{
    formData = new FormData();
    params = new URLSearchParams();

    constructor(private type:string = "get"){
    }

    get data(){
        if(this.type === "get"){
            return this.params.toString();
        }else{
            return this.formData;
        }
    }

    append(name: string, value: string): void{
        if(value === null || value === "" || value === undefined){
            return;
        }

        if(this.type === "get") {
            this.params.append(name, value);
        }else{
            this.formData.append(name, value);
        }
    }

    appendFile(name: string, value: Blob, fileName: string): void{
        if(value === null){
            return;
        }

        this.formData.append(name, value, fileName);
    }
}
