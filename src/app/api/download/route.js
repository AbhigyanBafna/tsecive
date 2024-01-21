// pages/api/download.js

import { buildFileUrl, parseAssetId } from '@sanity/asset-utils';
import { client } from '../../../../sanity/lib/client';
import { whatsAppSearch } from '@/utils/queries';

async function streamToString(stream) {
  const querystring = require('querystring');

  const chunks = [];
  for await (const chunk of stream) {
    chunks.push(chunk);
  }
  const requestBody = querystring.parse(Buffer.concat(chunks).toString('utf8'));
  return requestBody;
}

export async function POST(req) {
  const MessagingResponse = require('twilio').twiml.MessagingResponse;
  const requestBody = await streamToString(req.body);
  // console.log(requestBody)
  let searchQuery = requestBody?.Body || '';
  searchQuery = searchQuery.replace(/\s/g, '');

  console.log(searchQuery);

  if (searchQuery.trim().length === 0) {

    let message = new MessagingResponse().message('We could not get your message. SearchQuery was empty');;

    const res = new Response( message.toString(), { headers: { 'Content-Type': 'text/xml' }, });
    return res;

  } else {

    try {
      
      const firstMatch = await client.fetch( whatsAppSearch(searchQuery) )
      // Get the _ref or other identifier for the file from the request, e.g., from the query parameters
      const fileId = firstMatch?.files?.file?.asset?._ref
      // const fileId = 'file-b80c4439bb34edb542ce187e864ead7c22fef88b-pdf';
  
      if (typeof fileId !== 'string') {

        let message = new MessagingResponse().message('Sorry we could not find any files.');;

        const res = new Response( message.toString(), { headers: { 'Content-Type': 'text/xml' }, });
        return res;

      }
  
      // Use parseAssetId to parse the asset ID
      const assetParts = parseAssetId(fileId);
  
      // Build the file URL using the asset parts
      const fileUrl = buildFileUrl(assetParts, client.config());
  
      // Create a Twilio MessagingResponse
      let message = new MessagingResponse().message('');
      message.media(fileUrl);
  
      // Set the response content type to XML
      const res = new Response( message.toString(), { headers: { 'Content-Type': 'text/xml' }, });;
  
      return res;
    } catch (error) {
      console.error(error);

      let message = new MessagingResponse().message('We could not get your message. An unexpected error occurred');;

      const res = new Response( message.toString(), { headers: { 'Content-Type': 'text/xml' }, });
      return res;
    }
  }

}
