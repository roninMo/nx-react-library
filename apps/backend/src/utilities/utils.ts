/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
import express from 'express';
import { User } from "../models/User";
import { Address } from "../models/Address";
import { Model } from "objection";

export const constructUser = (data) => {
  const user: any = {
    id: data.id,
    name: data.name,
    username: data.username,
    email: data.email,
    website: data.website,
    phone: data.phone,
    password: data.password
  };

  if (data.addressId) {
    user.address = {
      id: data.addressId,
      street: data.street,
      suite: data.suite,
      city: data.city,
      zipcode: data.zipcode,
      country: data.country,
    };

    if (data.geo_lat && data.geo_lng) {
      user.address.geo = {
        lat: data.geo_lat,
        lng: data.geo_lng
      };
    }
  }

  return user;
}

export const deleteValue = async (id: number, query) => {
  return await query.deleteById(id);
}