import cogoToast from 'cogo-toast';

export const notifyError = (error) => {

    let response = error.response
    let text = "Could not identify error!"

    if (typeof response !== 'undefined') {
        text = "Error " + response.status + " - " + response.data.msg  
    }
    
    cogoToast.error(text)
}

export const notifySuccess = (message) => {
    let text = message       
    cogoToast.success(text)
}