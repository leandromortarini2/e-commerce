export interface ILoginErrors {
  email?: string;
  password?: string;
}
export interface IRegisterErrors {
  name?: string;
  email?: string;
  password?: string;
  address?: string;
  phone?: string;
}

type FormErrors = Partial<IRegisterErrors>;

export const ValidateRegister = (input: IRegisterErrors): FormErrors => {
  const errors: FormErrors = {};
  const emailRegExp = /\S+@\S+\.\S+/; // Validador de email.
  const uppercaseRegex = /[A-Z]/;
  const numberRegex = /[0-9]/;

  // VALIDACION NAME
  if (!input.name) errors.name = "Debe ingresar un nombre";
  else if (input.name.length < 4) {
    errors.name = "Nombre de al menos 4 caracteres";
  } else if (input.name.length > 15) {
    errors.name = "Nombre de máximo 15 caracteres";
  } else if (!input.name.trim()) {
    errors.name = "Debe ingresar un nombre válido";
  }

  // VALIDACION EMAIL
  else if (!input.email) {
    errors.email = "Debe ingresar un email";
  } else if (!emailRegExp.test(input.email)) {
    errors.email = "Debe ingresar un email válido";
  }

  // VALIDACION CONTRASEÑA
  else if (!input.password) errors.password = "Debe ingresar una contraseña";
  else if (input.password.length < 4)
    errors.password = "Contraseña de al menos 4 caracteres";
  else if (input.password.length > 10)
    errors.password = "Contraseña de máximo 10 caracteres";
  else if (!uppercaseRegex.test(input.password))
    errors.password = "La contraseña debe tener al menos una mayúscula";
  else if (!numberRegex.test(input.password))
    errors.password = "La contraseña debe tener al menos un número";
  else if (!input.address) {
    errors.address = "Enter an address";
  } else if (!input.phone) {
    errors.phone = "Enter a phone number";
  }

  return errors;
};
export const ValidateLogin = (input: IRegisterErrors): FormErrors => {
  const errors: FormErrors = {};
  const emailRegExp = /\S+@\S+\.\S+/; // Validador de email.
  const uppercaseRegex = /[A-Z]/;
  const numberRegex = /[0-9]/;

  // VALIDACION EMAIL
  if (!input.email) {
    errors.email = "Debe ingresar un email";
  } else if (!emailRegExp.test(input.email)) {
    errors.email = "Debe ingresar un email válido";
  }

  // VALIDACION CONTRASEÑA
  else if (!input.password) errors.password = "Debe ingresar una contraseña";
  else if (input.password.length < 4)
    errors.password = "Contraseña de al menos 4 caracteres";
  else if (input.password.length > 10)
    errors.password = "Contraseña de máximo 10 caracteres";
  else if (!uppercaseRegex.test(input.password))
    errors.password = "La contraseña debe tener al menos una mayúscula";
  else if (!numberRegex.test(input.password))
    errors.password = "La contraseña debe tener al menos un número";

  return errors;
};
