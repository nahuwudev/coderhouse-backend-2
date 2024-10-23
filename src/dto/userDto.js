class UserDto {
  constructor(user) {
    this.id = user._id;
    this.firstName = user.first_name;
    this.lastName = user.last_name;
    this.email = user.email;
    this.age = user.age;
    this.role = user.role;
    this.cart = user.cart;
    // exclui la info como password del dto.
    // para cart no me decidia pero como es enviado al cliente
    // lo más logico seria que pueda acceder a eso
    // supongo... xD
    // aunque... el cart se puede manejar en el cliente
    // y validar en el backend... 
  }
}

export default UserDto;
