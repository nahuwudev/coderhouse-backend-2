import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../models/User.js";
import Cart from "../models/Cart.js";

export const registerUser = async (req, res) => {
  const { first_name, last_name, email, age, password } = req.body;

  try {
    const hashedPassword = bcrypt.hashSync(password, 10); // Encriptar contraseña
    
    const cart = new Cart();
    const savedCart = await cart.save()

    const user = new User({
      first_name,
      last_name,
      email,
      age,
      cart: savedCart._id,
      password: hashedPassword,
    });
    await user.save();

    savedCart.user = user._id;
    await savedCart.save();
    
    res.status(201).json({ message: "Usuario registrado exitosamente" });
  } catch (err) {
    res.status(400).json({ message: "Error al registrar usuario", error: err });
  }
};

export const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });

    if (!user || !bcrypt.compareSync(password, user.password)) {
      return res
        .status(401)
        .json({ message: "Email o contraseña incorrectos" });
    }

    const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    res.cookie("jwt", token, { httpOnly: true });
    res.status(200).json({ message: "Login exitoso" });
  } catch (err) {
    res.status(500).json({ message: "Error al iniciar sesión", error: err });
  }
};

export const currentUser = (req, res) => {
  res.status(200).json({ user: req.user });
};
