export interface SignInContainer{
    email: string;
    password: string;
    loginType: string;
}

export interface User{
    idUser?: number;
    email: string;
    firstName: string,
    secondName?: string;
    othersName?: string;
    lastName: string;
    secondLastName?: string;
    nationality: string;
    cui: number;
    passport: number;
    active?: string;
    role?: number;
    userType?: number;
}

export interface UserLoggedIn{
    idUser: number;
    email: string;
    firstName: string,
    secondName?: string;
    othersName?: string;
    image?:string;
    lastName: string;
    secondLastName?: string;
    nationality: string;
    cui: number;
    passport: number;
    nit: string;
    phone: number;
    active: string;
    CM_ROLE_idRole: number;
    resetPasswordToken: any;
    resetPasswordExpires: any;
    verifyEmailToken: any;
    emailVerified: number;
    idBank: string;
    createdAt: string;
    updatedAt: string;
    token?:string;
}


export interface BillIn{
    _id?:String;
    noAuthorization: string;
    date: Date;
    name: string;
    nit: string;
    serieSAT: string;
    noSAT: string;
    value:number;
    type:string;
}

export interface Establishment{
    _id?:string;
    name:string;
    nit:string;
};

export interface BillOut{
    _id?:String;
    noAuthorization: string;
    date: Date;
    name: string;
    nit: string;
    serieSAT: string;
    noSAT: string;
    value:number;
    type:string;
}

export interface BackendResponse{
    status:boolean;
    message:string;
    data:any;
}

export interface Document{
    _id?:string;
    name:string;
    state:string;
};
