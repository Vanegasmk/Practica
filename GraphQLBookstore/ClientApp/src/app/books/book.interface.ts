export interface Book{
    id:number;
    name:string;
    description:string;
    price:number;
    authorId:number;
    author:Author;
}


export interface Author {
    id: number;
    name: string;
}