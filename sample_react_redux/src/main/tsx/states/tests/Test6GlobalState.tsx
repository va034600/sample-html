export interface Test6GlobalState {
    apiUrl:string,
    isFetching:boolean,
    sampleRecordList:SampleRecord[]
}

export interface SampleRecord{
    id: number,
    name: string
}
