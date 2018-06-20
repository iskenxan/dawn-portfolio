import * as emailjs from 'emailjs-com';

const serviceID = "default_service";
const templateID = "template_gHsuBaq6";
const userID = "user_sGGX7HI8q4dUbmIpycF8f";


export const sendForm = (values) => {
  console.log(emailjs);
  emailjs.send(serviceID, templateID, values, userID);
}
