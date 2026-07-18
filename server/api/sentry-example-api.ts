// This is just a very simple API route that throws an example error.
// Feel free to delete this file.
import type { EventHandler } from 'h3'
import { defineEventHandler } from 'h3';

export default defineEventHandler(() => {
  throw new Error("Sentry Example API Route Error");
});
