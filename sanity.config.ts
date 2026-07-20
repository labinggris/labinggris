import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { schema } from './src/sanity/schema'; 

export default defineConfig({
  name: 'default',
  title: 'My Blog Studio',
  projectId: 'pgcr1bh7',
  dataset: 'production',
  plugins: [structureTool()],
  schema: {
    types: schema,
  },
});