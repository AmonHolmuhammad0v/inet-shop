export function errorMes(error:any, page:any) {
    console.log(error)
    const err = error.response?.data;
    let text = '';
    for (const key in err) {
        if (key) {
            if (page == 'login') {
                text += ' ' + err[key]
            } else {
                text += ' ' + err[key][0]
            }
        }

    }
    return text;
}