export interface Message{
    id:number;
    fromName:string;
    from:number;
    to:number;
    toName:string;
    tarih:string;
    subject:string;
    content:string;
    isRead:boolean;
}