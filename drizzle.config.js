import 'dotenv/config';
import { defineConfig } from 'drizzle-kit';

export default defineConfig({
  schema: './config/schema.js',
  dialect: 'postgresql',
  dbCredentials: {
    url: 'postgresql://InspAire_owner:xgzSV5dY2pND@ep-dawn-base-a5fkeyga.us-east-2.aws.neon.tech/InspAire?sslmode=require',
  },
});
