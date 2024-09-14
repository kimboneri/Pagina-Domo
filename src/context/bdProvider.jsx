import { createContext, useState } from "react";

import { v4 as uuidv4 } from "uuid";
export const BdContext = createContext();

export const BdProvider = ({ children }) => {
  const [validateRegister, setValidateRegister] = useState(undefined);
  const [validateLogin, setValidateLogin] = useState(undefined);
  const [login, setLogin] = useState(null);
  const [users, setUsers] = useState([]);
  const [loginAttempted, setLoginAttempted] = useState(undefined)
  const [registerAttempted, setRegisterAttempted] = useState(undefined);
  const [repeatRegister, setRepeatRegister] = useState(undefined);
  const [cart, setCart] = useState([])
  
  
 
  const addCart = (producto) => {
    const existingProductIndex = cart.findIndex(item => item.id === producto.id);

    if (existingProductIndex !== -1) {
      const updatedCart = [...cart];
      updatedCart[existingProductIndex].cantidad += 1;
      setCart(updatedCart);
    } else {
      setCart([...cart, { ...producto, cantidad: 1 }]);
    }
  };

  // Función para eliminar un producto del carrito
  const removeCart = (id) => {

    const updatedCart = cart.filter(item => item.id !== id);
    setCart(updatedCart);
    
  };
    
  // Calcular la cantidad total de ítems en el carrito
  const totalItemsCart = cart.reduce((total, item) => total + item.cantidad, 0);
  
  const deleteCart = () => {
    setCart([])
  }
  const handleLogin = (e) => {
    e.preventDefault();
    setLoginAttempted(true)
    const loginUsuario = {
        email:e.target.email.value,
        password:e.target.password.value
    }
    const userExists = users.find(user => user.email === loginUsuario.email && user.password === loginUsuario.password);
    
    if (userExists) {
      setLogin(userExists);
      
      console.log("usuario dentro")
      setValidateLogin(true)
   
     
    } else {
      setValidateLogin(false)
     
      console.log("Esta cuenta no existe");
    }
   
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setRegisterAttempted(true)
    const nuevoUsuario = {
      id: uuidv4(),
      name: e.target.name.value,
      email: e.target.email.value,
      password: e.target.password.value,
      };
    const emailExits =  users.find(user => user.email === nuevoUsuario.email)

    if(emailExits){
      console.log("email repetido")
      setValidateRegister(false)
      setRepeatRegister(true)
    }else{
      setUsers([...users, nuevoUsuario]);
      setValidateRegister(true);
      setRepeatRegister(false)
    }
   
  };

  const editQuantity = (id, amount) => {
    const updatedCart = cart
      .map(item => 
        item.id === id ? { ...item, cantidad: item.cantidad + amount } : item
      )
      .filter(item => item.cantidad > 0);
    
    setCart(updatedCart);
  };
  
  return (
    <BdContext.Provider value={{setLoginAttempted,  repeatRegister,setRegisterAttempted, handleSubmit, users, validateRegister,loginAttempted,registerAttempted,validateLogin,setValidateLogin,setValidateRegister,handleLogin,login,setLogin,addCart,cart,setCart,removeCart,totalItemsCart,deleteCart,editQuantity  }}>   
      {children}
    </BdContext.Provider>
  );
};
