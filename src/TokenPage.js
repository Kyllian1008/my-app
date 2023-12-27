// TokenPage.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const TokenPage = () => {
  const { tokenId } = useParams();
  const [tokenMetadata, setTokenMetadata] = useState(null);

  useEffect(() => {
    const fetchTokenMetadata = async () => {
      try {
        // Replace YourMetadataAPI with the actual API or service providing token metadata
        const response = await fetch(`YourMetadataAPI/token/${tokenId}`);
        const data = await response.json();
        setTokenMetadata(data);
      } catch (error) {
        console.error('Failed to fetch token metadata:', error);
      }
    };

    fetchTokenMetadata();
  }, [tokenId]);

  return (
    <div>
      <h1>Token Information</h1>
      <p>Token ID: {tokenId}</p>
      {tokenMetadata ? (
        <div>
          <p>Token Image: <img src={tokenMetadata.image} alt="Token" /></p>
          <p>Other Attributes:</p>
          <ul>
            {/* Iterate over other attributes and display them */}
            {Object.entries(tokenMetadata.attributes).map(([key, value]) => (
              <li key={key}>
                <strong>{key}:</strong> {value}
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <p>Loading token information...</p>
      )}
    </div>
  );
};

export default TokenPage;
