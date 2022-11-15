import { User } from "./user.interface";

export interface Faq {
    _id: string,
    title:string,
    body:string,
    user: User,
    dayOfCreation: Date
}
