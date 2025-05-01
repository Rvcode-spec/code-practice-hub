import { defineConfig } from "drizzle-kit";

export default defineConfig({
  dialect: "postgresql",
  schema: "./configs/schema.js",
dbCredentials:{
    url:'postgresql://neondb_owner:npg_Tz4w3kcIrnad@ep-billowing-meadow-a4yzkr3w-pooler.us-east-1.aws.neon.tech/ai-short-video-generator?sslmode=require'
}
});
