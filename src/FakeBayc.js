// src/FakeBayc.js
import React, { useEffect, useState } from 'react';
import connectToMetamask from './web3';
import { Link, useParams } from 'react-router-dom';

import YourFakeContractAbi from './assets/FakeBAYC.json';

const YourFakeContractAddress = '0x1dA89342716B14602664626CD3482b47D5C2005E';

const FakeBayc = () => {
  const [web3, setWeb3] = useState(null);
  const [loading, setLoading] = useState(true);
  const [name, setName] = useState('');
  const [totalTokens, setTotalTokens] = useState(0);
  const [userAddress, setUserAddress] = useState('');
  const [error, setError] = useState(null);
  const { tokenId } = useParams();
  const [contract, setContract] = useState(null);

  useEffect(() => {
    const init = async () => {
      try {
        const web3Instance = await connectToMetamask();
        setWeb3(web3Instance);

        const contractInstance = new web3Instance.eth.Contract(
          YourFakeContractAbi.abi,
          YourFakeContractAddress
        );

        const name = await contractInstance.methods.name().call();
        const totalTokens = await contractInstance.methods.totalSupply().call();
        const userAddress = (await web3Instance.eth.getAccounts())[0];

        setName(name);
        setTotalTokens(totalTokens.toString());
        setUserAddress(userAddress);
        setContract(contractInstance);
      } catch (error) {
        console.error("Failed to fetch fake contract info:", error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    init();
  }, []);

  const handleClaimToken = async () => {
    try {
      if (!contract || !contract.methods.claimAToken) {
        throw new Error("claimAToken function not found in the contract.");
      }
      await contract.methods.claimAToken().send({ from: userAddress });

      const updatedTotalTokens = await contract.methods.totalSupply().call();
      setTotalTokens(updatedTotalTokens.toString());
    } catch (error) {
      console.error("Failed to claim token:", error);
      setError(error.message);
    }
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h1>FakeBayc Information</h1>
      {error && <p>Error: {error}</p>}
      <p>Name: {name}</p>
      <p>Total Tokens: {totalTokens}</p>
      <p>User Address: {userAddress}</p>
      <button onClick={handleClaimToken}>Claim Token</button>
      <Link to={`/FakeBayc/${tokenId}`} className="App-link">
        tokenId
      </Link>
    </div>
  );
};

export default FakeBayc;
