/* Check validation of the JWT from a response */
export const checkValidationToken = (response) => {
    if (response.data.sub_status === 42) {
        return false
    } else {
        return true
    }
}