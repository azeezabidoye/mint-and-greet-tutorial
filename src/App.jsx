import { useState } from "react";
import React from "react";
import "./App.css";
import { ethers, BrowserProvider } from "ethers";
import Greeter from "../artifacts/contracts/Greeter.sol/Greeter.json";

// const greeterContractAddress = "0x72226da7160FC59252869638728D8F9ad671069b"; // Sepolia Testnet
const greeterContractAddress = "0xDbAC04C29c43442F8A7F77860768B9bD48f620C0"; // Alfajores testnet
// const greeterContractAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3"; // Local network

const App = () => {
  // store greeting in local state
  const [greeting, setGreetingValue] = useState();

  // request access to user's MetaMask account
  const requestAccount = async () => {
    await window.ethereum.request({ method: "eth_requestAccounts" });
  };

  // call Greeter smart contract, read the current greeting value
  const setGreeting = async () => {
    if (typeof window.ethereum !== "undefined") {
      const web3provider = new ethers.BrowserProvider(window.ethereum);
      const contract = new ethers.Contract(
        greeterContractAddress,
        Greeter.abi,
        web3provider
      );
      try {
        const data = await contract.greet();
        console.log("data: ", data);
      } catch (err) {
        console.log("Error: ", err);
      }
    }
  };

  // call the smart contract to set new Greeting update
  const getGreeting = async () => {
    if (!greeting) return;
    if (typeof window.ethereum !== "undefined") {
      await requestAccount();
      const web3provider = new ethers.BrowserProvider(window.ethereum);
      const signer = await web3provider.getSigner();
      const contract = new ethers.Contract(
        greeterContractAddress,
        Greeter.abi,
        signer
      );
      const transaction = await contract.setGreeting(greeting);
      await transaction.wait();
      setGreetingValue(" ");
      console.log(greeting);
      getGreeting();
    }
  };
  return (
    <div className="container">
      <button onClick={getGreeting}>Fetch Greeting</button> <br /> <hr />
      <button onClick={setGreeting}>Set Greeting</button> <br /> <hr />
      <input
        onChange={(e) => {
          //   console.log(e.target.value);
          setGreetingValue(e.target.value);
        }}
        placeholder="Set greeting here..."
      />
    </div>
  );
};

export default App;
