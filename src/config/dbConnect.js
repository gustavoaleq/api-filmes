import mongoose from "mongoose";

mongoose.connect("mongodb+srv://root:0832@api-filmes.dhv6re3.mongodb.net/api-filmes");

let db = mongoose.connection;

export default db