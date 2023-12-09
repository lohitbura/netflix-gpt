

export const validateForm = (formData)=>{

    console.log(formData);

 const validateData =  formData.map((data)=>{
        if(data.type==='name'){
          return  /^[a-zA-Z]+$/.test(data.value)?null: 'Name is not valid';
        }
        if(data.type==='email'){
            return  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(data.value)?null: 'Email is not valid';
          }
          if(data.type==='password'){
            return  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&^])[A-Za-z\d@.#$!%*?&]{8,15}$/.test(data.value)?null: 'Password is not valid';
          }
          return null;
    })

    console.log(validateData);

    const message = validateData.find((data)=>{
       return data!=null
    });

    console.log(message);

    return message;

}