// pages/api/download.js

import { buildFileUrl, parseAssetId } from '@sanity/asset-utils';
import { client } from '../../../../sanity/lib/client';

export async function POST(request) {
  const MessagingResponse = require('twilio').twiml.MessagingResponse;
  
  try {
    // Get the _ref or other identifier for the file from the request, e.g., from the query parameters
    const fileId = 'file-b80c4439bb34edb542ce187e864ead7c22fef88b-pdf';

    if (typeof fileId !== 'string') {
      return Response.json({ error: 'Invalid fileId' });
    }

    // Use parseAssetId to parse the asset ID
    const assetParts = parseAssetId(fileId);

    // Build the file URL using the asset parts
    const fileUrl = buildFileUrl(assetParts, client.config());

    // Create a Twilio MessagingResponse
    let message = new MessagingResponse().message('Abhi is the best');
    message.media(fileUrl);

    // Set the response content type to XML
    const res = new Response( message.toString(), { headers: { 'Content-Type': 'text/xml' }, });;

    return res;
  } catch (error) {
    console.error(error);
    return Response.json({ error: 'Internal Server Error' });
  }
}
