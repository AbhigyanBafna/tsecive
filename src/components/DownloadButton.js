import { client } from '../../sanity/lib/client';
import { buildFileUrl, parseAssetId } from '@sanity/asset-utils';

const DownloadButton = ({ assetRef }) => {

  const assetParts = parseAssetId(assetRef);
  const fileUrl = buildFileUrl(assetParts, client.config());

  return (
    <a
      href={fileUrl}
      className="bg-blue-500 text-white p-2 rounded mt-2 inline-block"
    >
      Download
    </a>
  );
};

export default DownloadButton;
