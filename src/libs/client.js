import { createClient } from 'microcms-js-sdk';

export const client = createClient({
  serviceDomain: process.env.MICROCMS_SERVICE_DOMAIN || 'YOUR_DOMAIN_PLACEHOLDER',
  apiKey: process.env.MICROCMS_API_KEY || 'YOUR_API_KEY_PLACEHOLDER',
});
