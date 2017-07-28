
export class WebUrlParams{
    params = new URLSearchParams();

    get data(){
        return this.params.toString();
    }

    append(name: string, value: string): void{
        if(value === null){
            return;
        }

        if(value === undefined){
            this.params.append(name, "");
            return;
        }

        this.params.append(name, value);
    }
}
