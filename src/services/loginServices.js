callApi('/Auth/Login', 'POST', params).then((result) => {
    if (result.responseCode === '00') {
        console.log(result);
    }
    else {
        console.log('error',params);
    }
}
).catch((error) => {
    console.log('error', error);
}
);
