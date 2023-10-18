import { fetchFiles, fetchPYQs } from '@/utils/queries';
import { client } from '../../../../sanity/lib/client';

export async function GET(request) {
  try {
    // Define your query parameters here, e.g., branch, sem, and subjectSlug
    const urlParams = new URLSearchParams(request.url);
    const branch = urlParams.get('branch');
    const sem = urlParams.get('sem');
    const subjectSlug = urlParams.get('subjectSlug');

    // Fetch data from your Sanity API using the provided parameters
    const data = await client.fetch(fetchPYQs(branch, sem, subjectSlug));
    console.log(branch, sem, subjectSlug, data);

    // Format the data as needed for your component
    // const formattedData = formatData(data);

    // Return the formatted data as JSON response
    return new Response(JSON.stringify(data), {
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ error: 'Internal Server Error' }), {
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
}

// Function to format your data as needed
function formatData(data) {
  // Implement your data formatting logic here
  // You can map and transform the data as required

  // Example: Mapping files from the data
  const formattedFiles = data.files.map((fileObject) => {
    const { file } = fileObject;
    return {
      fileName: file.fileName,
      fileType: file.fileType,
      url: file.url,
    };
  });

  // Example: Formatting external resources
  const formattedExternalResources = data.links.map((link) => {
    return {
      linkTitle: link.linkTitle,
      linkType: link.linkType,
      url: link.url,
    };
  });

  // Return the formatted data
  return {
    files: formattedFiles,
    links: formattedExternalResources,
  };
}
