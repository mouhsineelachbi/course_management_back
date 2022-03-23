import * as path from "path";
import * as dotenv from "dotenv";

const env = process.env.NODE_ENV || "dev";
const dotenv_path = path.resolve(process.cwd(), `env\\.${env}.env`);

const result = dotenv.config({ path: dotenv_path });
if (result.error) {
  throw Error("File not found ");
}