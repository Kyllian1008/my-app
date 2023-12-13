// ChainInfo.js
import React, { useEffect, useState } from 'react';
import connectToMetamask from './web3';

const ChainInfo = () => {
  const [web3, setWeb3] = useState(null);
  const [chainId, setChainId] = useState(null);
  const [blockNumber, setBlockNumber] = useState(null);
  const [userAddress, setUserAddress] = useState(null);

  useEffect(() => {
    const init = async () => {
      try {
        const web3Instance = await connectToMetamask();
        setWeb3(web3Instance);

        const networkId = await web3Instance.eth.net.getId();
        setChainId(networkId.toString());

        const latestBlockNumber = await web3Instance.eth.getBlockNumber();
        setBlockNumber(latestBlockNumber.toString());

        const accounts = await web3Instance.eth.getAccounts();
        setUserAddress(accounts[0]);
      } catch (error) {
        console.error(error.message);
      }
    };

    init();
  }, []);

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
