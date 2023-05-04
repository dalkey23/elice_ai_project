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

export type LoginUser = {
    email : string;
    password : string;
}