
export const apiResponseWrapper = (data,status)=>{
    return {
        status:status,
        data:data
    };
}