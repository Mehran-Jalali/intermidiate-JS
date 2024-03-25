require("./utils/dbConnect"); //database connection

const postRouter = require("./routes/postRoute"); //postRouter connection
const userRouter = require("./routes/userRoute"); //userRouter connection

const express = require("express"); //express connection

const app = express();

//=====================================================

app.use(express.json()); //express Middleware

app.use("/posts", postRouter);
app.use("/users", postRouter);

//listenning port

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("Server is running on port " + PORT);
});
