
export const isValidEmail = (email: string) => {
    const re = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    return re.test(String(email).toLowerCase());
}

export const timeStampToDate = (timestamp: number) => {
    const dateFormat = new Date(timestamp * 1000);
    return dateFormat.toLocaleDateString();
}
