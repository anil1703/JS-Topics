import mongoose from mongoose
import express from express

const app = express()
const mongooseUrl = "URL"

app.use(express.json())

mongoose.connect(mongooseUrl)

const database = mongoose.connection

database.on("error", () => {
    console.log("Error connecting to database")
})

database.once("connected", () => {
    console.log("Connected to database")
})

app.listen(5000,() => {
    console.log("Server is running on port 5000")
})