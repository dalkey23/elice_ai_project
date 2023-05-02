import axios from "axios";
import { Userdata } from "../../Types/Userdata.type";

export async function joinUser({
    email,
    password,
    firstName,
    lastName,
    nickname,
    phoneNumber,
    gender,
    birthYear,
    birthMonth,
    birthDate,
    profilePhotoUrl,
    zipcode,
    mainAddress,
    detailAddress,
}: Userdata) {
    await axios.post("http://kdt-ai6-team02.elicecoding.com/api/users/sign-up", {
        email,
        password,
        firstName,
        lastName,
        nickname,
        phoneNumber,
        gender,
        birthYear,
        birthMonth,
        birthDate,
        profilePhotoUrl,
        zipcode,
        mainAddress,
        detailAddress,
    });
}
