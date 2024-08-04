// src/pages/NFTMarketplace.js
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

// Styled components
const MarketplaceContainer = styled.div`
  margin-left: 250px;
  margin-top: 60px;
  padding: 2rem;
  background-color: ${({ theme }) => theme.mainBg || '#f7f9fc'};
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.5rem;
`;

const NFTCard = styled.div`
  background-color: ${({ theme }) => theme.widgetBg || '#fff'};
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  text-align: center;
  transition: transform 0.3s ease;
  &:hover {
    transform: scale(1.05);
  }
`;

const NFTImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 8px;
`;

const NFTTitle = styled.h2`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.titleColor || '#2d3436'};
  margin: 1rem 0;
`;

const NFTPrice = styled.p`
  font-size: 1.25rem;
  color: ${({ theme }) => theme.priceColor || '#007bff'};
  margin-bottom: 1rem;
`;

const MarketplaceTitle = styled.h1`
  font-size: 2.5rem;
  color: ${({ theme }) => theme.titleColor || '#2d3436'};
  text-align: center;
  margin-bottom: 2rem;
`;

const FilterContainer = styled.div`
  margin-bottom: 2rem;
  text-align: center;
`;

const FilterInput = styled.input`
  padding: 0.75rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
  width: 100%;
  max-width: 400px;
`;

const NFTMarketplace = () => {
  const [nfts, setNfts] = useState([]);
  const [filter, setFilter] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchNFTs = async () => {
      try {
        setLoading(true);
        setError(null);
        // Simulate API call
        const response = await new Promise((resolve) =>
          setTimeout(() => resolve([
            { id: 1, image: 'https://via.placeholder.com/300/1', title: 'NFT #1', price: '0.5' },
            { id: 2, image: 'https://via.placeholder.com/300/2', title: 'NFT #2', price: '1.2' },
            { id: 3, image: 'https://via.placeholder.com/300/3', title: 'NFT #3', price: '0.8' },
            { id: 4, image: 'https://via.placeholder.com/300/4', title: 'NFT #4', price: '2.5' },
            { id: 5, image: 'https://via.placeholder.com/300/5', title: 'NFT #5', price: '1.0' },
          ]), 1000)
        );
        setNfts(response);
      } catch (error) {
        setError('Failed to fetch NFTs.');
      } finally {
        setLoading(false);
      }
    };

    fetchNFTs();
  }, []);

  const filteredNFTs = nfts.filter(nft =>
    nft.title.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <MarketplaceContainer>
      <MarketplaceTitle>NFT Marketplace</MarketplaceTitle>
      <FilterContainer>
        <FilterInput
          type="text"
          placeholder="Search NFTs..."
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        />
      </FilterContainer>
      {loading && <p>Loading NFTs...</p>}
      {error && <p>{error}</p>}
      {filteredNFTs.length > 0 ? (
        filteredNFTs.map((nft) => (
          <NFTCard key={nft.id}>
            <NFTImage src={nft.image} alt={nft.title} />
            <NFTTitle>{nft.title}</NFTTitle>
            <NFTPrice>{nft.price} ETH</NFTPrice>
          </NFTCard>
        ))
      ) : (
        !loading && <p>No NFTs found.</p>
      )}
    </MarketplaceContainer>
  );
};

export default NFTMarketplace;
