// ChainInfo.js
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Ajoutez cette ligne

import connectToMetamask from './web3';

const ChainInfo = () => {
  const [web3, setWeb3] = useState(null);
  const [chainId, setChainId] = useState(null);
  const [blockNumber, setBlockNumber] = useState(null);
  const [userAddress, setUserAddress] = useState(null);
  const navigate = useNavigate(); // Ajoutez cette ligne

  useEffect(() => {
    const init = async () => {
      try {
        const web3Instance = await connectToMetamask();
        setWeb3(web3Instance);

        const networkId = await web3Instance.eth.net.getId();
        setChainId(networkId.toString());

        // Replace this with your actual Sepolia chainId
        const expectedChainId = '11155111';

        if (networkId.toString() !== expectedChainId) {
          // Redirect to the error page if the chain is not Sepolia
          navigate('/ErrorPage');
          return;
        }

        const latestBlockNumber = await web3Instance.eth.getBlockNumber();
        setBlockNumber(latestBlockNumber.toString());

        const accounts = await web3Instance.eth.getAccounts();
        setUserAddress(accounts[0]);
      } catch (error) {
        console.error(error.message);
        // Redirect to the error page if MetaMask connection fails
        navigate('/ErrorPage');
      }
    };

    init();
  }, [navigate]);

  return (
    <div>
      <h1>Chain Information</h1>
      <p>ChainId: {chainId}</p>
      <p>Last Block Number: {blockNumber}</p>
      <p>User Address: {userAddress}</p>
    </div>
  );
};

export default ChainInfo;
