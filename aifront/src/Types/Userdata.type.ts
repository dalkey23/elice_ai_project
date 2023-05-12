
export type UserdataRequest = {
    email : string;
    password : string;
    firstName : string;
    lastName : string;
    nickname : string;
    phoneNumber : string;
    gender : string;
    birthYear : number;
    birthMonth : number;
    birthDate : number;
    profilePhotoUrl : string;
    zipCode : number;
    mainAddress : string;
    detailAddress : string;
}

export type UserDetail = {
    item : {
        id : number;
        email : string;
        nameInfo : {
            firstName : string;
            lastName : string;
        };
        nickname : string;
        phoneNumber : string;
        gender : string;
        birthInfo : {
            year : number;
            month : number;
            date : number;
        };
        profilePhotoUrl?:string;
        role:string;
        status:string;
        addressInfo:{
            zipCode: number;
            mainAddress : string;
            detailAddress : string;
        };
        createdAt : string;
    };
    success:boolean;
}

export type LoginInfo = {
    item : {
        jwtToken : string;
    };
    success : boolean;
}

export type LoginUser = {
    email : string;
    password : string;
}
