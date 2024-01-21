"use client"

import { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import Search from '@/components/Search';
import { usePathname } from 'next/navigation';
import { client } from '../../../../../../sanity/lib/client';
import { fetchFiles, fetchPYQs } from '@/utils/queries';
import DownloadButton from '@/components/DownloadButton';

const documentsData = [
  // Static JSON data for Documents section
  { title: 'Document 1', fileType: 'PDF' },
  { title: 'Document 2', fileType: 'DOCX' },
  { title: 'Document 3', fileType: 'PDF' },
  { title: 'Document 4', fileType: 'DOCX' },
  { title: 'Document 4', fileType: 'DOCX' },
  { title: 'Document 4', fileType: 'DOCX' },
  // Add more documents as needed
];

const externalResourcesData = [
  // Static JSON data for External Resources section
  { title: 'Resource 1', resourceType: 'Video Lecture', link: 'https://example.com/lecture1' },
  { title: 'Resource 2', resourceType: 'Code Repo', link: 'https://example.com/repo1' },
  { title: 'Resource 3', resourceType: 'Blog/Article', link: 'https://example.com/blog1' },
  // Add more resources as needed
];

const pyqsData = [
  // Static JSON data for PYQs section
  { fileName: 'PYQ 2022' },
  { fileName: 'PYQ 2021' },
  { fileName: 'PYQ 2020' },
  // Add more PYQs as needed
];

const DocumentsPage = () => {
    const [fileData, setFileData] = useState(null);
    const [PYQs, setPYQs] = useState(null);

    const pathName = usePathname();
    const pathParts = pathName.split('/');
    const branch = pathParts[2].toUpperCase();
    const sem = pathParts[3];
    const subjectSlug = pathParts[4];

    useEffect(() => {
        // Create a function to fetch and set subjects data
        async function fetchFileData() {
          try {
            const data = await client.fetch(fetchFiles(branch, sem, subjectSlug));
            const pyqData = await client.fetch(fetchPYQs(branch, sem, subjectSlug));
            setFileData(data); // Set the subjects state when data is available
            setPYQs(pyqData);
          } catch (error) {
            console.error(error);
          }
        }


      
        fetchFileData();
      }, [branch, sem, subjectSlug]);

  return (
    <div>

        <Navbar />

        <main className='p-6'>

            <h1 className="text-2xl font-bold mb-4">Documents</h1>
            <div className="overflow-x-scroll whitespace-nowrap">
                {fileData ? (
                    <div style={{ display: 'flex', overflowX: 'auto' }}>
                        {fileData.map((fileObject, index) => (
                            fileObject.files.map((file, fileIndex) => (
                                <div key={fileIndex} className="inline-block mr-4" style={{ minWidth: '300px', flex: 1 }}>
                                    <div className="border p-4 rounded-lg">
                                    <h2 className="text-xl font-semibold" style={{ maxWidth: '100%', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                                        {file.fileName}
                                    </h2>
                                        <p>File Type: {file.fileType}</p>
                                        <DownloadButton assetRef={file.file.asset._ref} />
                                    </div>
                                </div>
                            ))
                        ))}
                    </div>
                ) : (
                    <p>No Documents Available</p>
                )}
            </div>

            <h1 className="text-2xl font-bold my-4">External Resources</h1>
            <div className="overflow-x-scroll whitespace-nowrap">
                {fileData ? (
                    <div style={{ display: 'flex', overflowX: 'auto' }}>
                    {fileData.map((fileObject, index) => (
                        fileObject?.links?.map((link, fileIndex) => (
                            <div key={fileIndex} className="inline-block mr-4" style={{ minWidth: '300px', flex: 1 }}>
                                <div className="border p-4 rounded-lg">
                                    <h2 className="text-xl font-semibold">{link.linkTitle}</h2>
                                    <p>Link Type: {link.linkType}</p>
                                    <a
                                        href={link.url} // Use the link's URL
                                        className="bg-blue-500 text-white p-2 rounded mt-2 inline-block"
                                    >
                                        Visit Link
                                    </a>
                                </div>
                            </div>
                        ))
                ))}
                </div>
                ) : (
                    <p>No External Resources Available</p>
                )}
            </div>

            <h1 className="text-2xl font-bold my-4">PYQs</h1>
            <div className="overflow-x-scroll whitespace-nowrap">
                {PYQs ? (
                    <div style={{ display: 'flex', overflowX: 'auto' }}>
                        {PYQs?.map((pyqGroup, groupIndex) => (
                            <div key={groupIndex} className="inline-block mr-4" style={{ minWidth: '300px' }}>
                                {pyqGroup?.PYQs?.map((pyq, index) => (
                                    <div key={index} className="border p-4 rounded-lg">
                                        <h2 className="text-xl font-semibold">{pyq.fileName}</h2>
                                        <DownloadButton assetRef={pyq?.file.asset?._ref} />
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>
                ) : (
                    <p>No PYQs Available</p>
                )}
            </div>


        </main>
      
    </div>
  );
};

export default DocumentsPage;
