import React from 'react';
import { Routes, Route, Navigate } from "react-router-dom";
import AllFoods from '../pages/AllFoods';
import FoodDetails from '../pages/FoodDetails';
import Cart from '../pages/Cart';
import Checkout from '../pages/Checkout';
import Contact from '../pages/Contact';
import Pizzas from '../pages/Pizzas';
import PizzaDetails from '../pages/PizzaDetails';
import Register from '../pages/Register';
import Login from '../pages/Login';
import Home from '../pages/Home';

const Routers = () => {
  return (
    <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/foods" element={<AllFoods />} />
        <Route path="/foods/:id" element={<FoodDetails />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/pizzas" element={<Pizzas />} />
        <Route path="/pizzas/:id" element={<PizzaDetails />} />
        <Route path="/register" element={<Register />} />
    </Routes>
  )
}

export default Routers