import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import schemas from './schemas';
import 'easymde/dist/easymde.min.css';

const config = defineConfig({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: 'production',
  title: 'Admin',
  apiVersion: '2023-03-09',
  basePath: '/admin',
  plugins: [structureTool()],
  schema: { types: schemas },
});

export default config;
