"use strict";
import { DataTypes, Model, Sequelize } from "sequelize";
import passportLocalSequelize from "passport-local-sequelize";
import { UsersModelStatic } from "./types";
import { Db } from "../db.types";

module.exports = (sequelize: Sequelize) => {
  const Users = sequelize.define(
    "Users",
    {
      id: {
        allowNull: false,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
      },
      firstName: { type: DataTypes.STRING },
      lastName: { type: DataTypes.STRING },
      username: { type: DataTypes.STRING },
      email: { type: DataTypes.STRING },
      password: { type: DataTypes.STRING },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE
      }
    },
    {}
  ) as UsersModelStatic & {
    associate: (db: Db) => void;
    createStrategy?: () => void;
    serializeUser?: () => void;
    deserializeUser?: () => void;
  };

  passportLocalSequelize.attachToUser(Users, {
    usernameField: "email",
    hash: "password"
  });

  return Users;
};
