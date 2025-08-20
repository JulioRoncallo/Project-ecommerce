
export interface IProduct {
    id:             number;
    name:           string;
    price:          number;
    description:    string;
    image:          string;
    categoryId:     number;
    stock:          number;
}

export interface ICategory{
    id:     number;
    name:   string;
}

export interface ILoginProps{
    email: string
    password: string
}

export interface ILoginErrors{
    email?: string
    password?: string
}

export interface IRegisterProps{
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
    address: string;
    phone: string;
}

export interface IRegisterErrors{
    name?: string;
    email?: string;
    password?: string;
    confirmPassword?: string;
    address?: string;
    phone?: string;
}

export interface IUserSession{
    token:string;
    user: {
        id: number;
        name: string;
        email: string;
        address: string;
        phone: string;
    }
}

export interface IRegisterFormData {
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
    address: string;
    phone: string;
}

export type IRegisterPayload = Omit<IRegisterFormData, 'confirmPassword'>;

export interface IRegisterErrors {
    name?: string;
    email?: string;
    password?: string;
    confirmPassword?: string;
    address?: string;
    phone?: string;
}

export interface IOrder{
    date: Date;
    id:number;
    products: IProduct[];
    status: string;
}