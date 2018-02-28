export class WebParams{
    formData = new FormData();

    get data(){
        return this.formData;
    }

    append(name: string, value: string): void{
        if(value === null){
            return;
        }

        if(value === undefined){
            this.formData.append(name, "");
            return;
        }

        this.formData.append(name, value);
    }

    appendFile(name: string, value: Blob, fileName: string): void{
        if(value === null){
            return;
        }

        this.formData.append(name, value, fileName);
    }
}
