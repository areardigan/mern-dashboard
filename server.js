import dotenv from "dotenv";
import app from "./server/app.js";

if (process.env.NODE_ENV !== "production") {
  dotenv.config();
}

const PORT = process.env.PORT || 5050;
app.listen(PORT, () => {
  console.log(
    `Express server is running in ${process.env.NODE_ENV} mode on port: ${PORT}`
  );
});
