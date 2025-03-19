import { MongoClient, Db, ServerApiVersion } from "mongodb";
import dotenv from "dotenv";

dotenv.config();

const mongodbUser = process.env.MONGODB_USER as string;
const mongodbPassword = process.env.MONGODB_PASSWORD as string;

if (!mongodbUser || !mongodbPassword) {
  throw new Error("MongoDB credentials are missing in environment variables");
}

const mongodbUri = `mongodb+srv://${mongodbUser}:${mongodbPassword}@cluster0.9szzj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

// If we already have a connection established we don't need to reconnect every time by saying client.connect()
let cachedClient: MongoClient | null = null;
let cachedDb: Db | null = null;

export async function connectToDb() {
  if (cachedClient && cachedDb) {
    return { client: cachedClient, db: cachedDb };
  }

  const client = new MongoClient(mongodbUri, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    },
  });

  await client.connect();

  cachedClient = client;
  cachedDb = client.db();

  return { client, db: client.db() };
}
