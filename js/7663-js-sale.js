const CONTRACT_COL = "0xF1AF2A2A62A578C018aed1D89e07Eca37eb39f53";
const CONTRACT_STAKE = "0xbA8181FE05ABe0059F586CC7793f1F6d45f6A88F";

const ABI_COL = [{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[],"name":"ApprovalCallerNotOwnerNorApproved","type":"error"},{"inputs":[],"name":"ApprovalQueryForNonexistentToken","type":"error"},{"inputs":[],"name":"BalanceQueryForZeroAddress","type":"error"},{"inputs":[],"name":"MintERC2309QuantityExceedsLimit","type":"error"},{"inputs":[],"name":"MintToZeroAddress","type":"error"},{"inputs":[],"name":"MintZeroQuantity","type":"error"},{"inputs":[{"internalType":"address","name":"operator","type":"address"}],"name":"OperatorNotAllowed","type":"error"},{"inputs":[],"name":"OwnerQueryForNonexistentToken","type":"error"},{"inputs":[],"name":"OwnershipNotInitializedForExtraData","type":"error"},{"inputs":[],"name":"TransferCallerNotOwnerNorApproved","type":"error"},{"inputs":[],"name":"TransferFromIncorrectOwner","type":"error"},{"inputs":[],"name":"TransferToNonERC721ReceiverImplementer","type":"error"},{"inputs":[],"name":"TransferToZeroAddress","type":"error"},{"inputs":[],"name":"URIQueryForNonexistentToken","type":"error"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"fromTokenId","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"toTokenId","type":"uint256"},{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"}],"name":"ConsecutiveTransfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[],"name":"MAX_TOKENS","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"OPERATOR_FILTER_REGISTRY","outputs":[{"internalType":"contract IOperatorFilterRegistry","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"baseURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"teamAddress","type":"address"},{"internalType":"uint256","name":"_teamAmount","type":"uint256"}],"name":"internalMint","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"maxPerALWallet","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"maxPerWallet","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokens","type":"uint256"}],"name":"mint","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokens","type":"uint256"}],"name":"mintAllowlist","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"presaleMinted","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"presalePrice","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"presaleStarted","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"price","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"publicMinted","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"publicSaleStarted","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"_newBaseURI","type":"string"}],"name":"setBaseURI","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_newMaxPerALWallet","type":"uint256"}],"name":"setMaxPerALWallet","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_newMaxPerWallet","type":"uint256"}],"name":"setMaxPerWallet","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"togglePresaleStarted","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"togglePublicSaleStarted","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"}]

const ABI_STAKE = [{"inputs":[{"internalType":"contract ERC721A","name":"_nft","type":"address"},{"internalType":"contract TokenRewards","name":"_token","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"owner","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Claimed","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"owner","type":"address"},{"indexed":false,"internalType":"uint256","name":"tokenId","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"NFTStaked","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"owner","type":"address"},{"indexed":false,"internalType":"uint256","name":"tokenId","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"NFTUnstaked","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256[]","name":"tokenIds","type":"uint256[]"}],"name":"claim","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256[]","name":"tokenIds","type":"uint256[]"}],"name":"claimForAddress","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"commonRewardsTimer","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256[]","name":"tokenIds","type":"uint256[]"}],"name":"earningInfo","outputs":[{"internalType":"uint256[1]","name":"info","type":"uint256[1]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"address","name":"from","type":"address"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"bytes","name":"","type":"bytes"}],"name":"onERC721Received","outputs":[{"internalType":"bytes4","name":"","type":"bytes4"}],"stateMutability":"pure","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"rareRewardsTimer","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"rareTokens","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_rewardsTimer","type":"uint256"}],"name":"setCommonRewardsTimer","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_rewardsTimer","type":"uint256"}],"name":"setRareRewardsTimer","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256[]","name":"_tokenID","type":"uint256[]"}],"name":"setTokensCommon","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256[]","name":"_tokenID","type":"uint256[]"}],"name":"setTokensRare","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256[]","name":"tokenIds","type":"uint256[]"}],"name":"stake","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"stakeEnabled","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"stakingPeriod","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"toggleStakeState","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"tokensOfOwner","outputs":[{"internalType":"uint256[]","name":"ownerTokens","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalStaked","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256[]","name":"tokenIds","type":"uint256[]"}],"name":"unstake","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"vault","outputs":[{"internalType":"uint24","name":"tokenId","type":"uint24"},{"internalType":"uint48","name":"timestamp","type":"uint48"},{"internalType":"address","name":"owner","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_owner","type":"address"}],"name":"walletOfOwner","outputs":[{"internalType":"uint256[]","name":"","type":"uint256[]"}],"stateMutability":"view","type":"function"}]

var account = null;
var wallet = null;
var contract1 = null;
var contract2 = null;
var contract3 = null;
var price = null;

var tokenId = [];
var tokensStaked = [];
var colTokensArray = [];
var stakedTokensArray = [];
var stakeSelectedTokens = [];
var unstakeSelectedTokens = [];
var totalStaked = "";
var earningInfo = 0;
var earningInfoMath = 0;
var approved = "";
var j = 0;

window.ethereum.on('accountsChanged', function (accounts) {
	document.getElementById("approve").innerHTML = "Approve Your Wallet";
	connect();
  })

//APPROVE YOUR WALLET
const approve = async (e)=> {
	if (typeof window.ethereum !== 'undefined') {
		if (account.length > 0) {
			var success = "";
			document.getElementById("approve").innerHTML = "WORKING..."
			try {
	  			const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
				account = accounts[0];

				document.getElementById("connect_button").innerHTML = account.substr(0,10) + "..." + account.substr(-4);
  
				const web3 = new Web3(window.ethereum);
				contract1 = new web3.eth.Contract(ABI_COL, CONTRACT_COL, { from: account });
				approved = await contract1.methods.isApprovedForAll(account, CONTRACT_STAKE).call();

				if (approved) {
					alert("Already approved!")
					console.log("Already approved!");
					document.getElementById("approve").innerHTML = "WALLET APPROVED";
					}
				else
					{
					await contract1.methods.setApprovalForAll(CONTRACT_STAKE, true).send({from: account});
					alert("Wallet approved!")
					console.log("Wallet approved!");
					success = document.getElementById("approve").innerHTML = "WALLET APPROVED";
					}
				}
			catch(e)
				{
				alert("Error: " + e.message)
				console.log("Error: ",e)
		  		document.getElementById("approve").innerHTML = "Approve Your Wallet";
		  		}
			}
		}
	}

//CHECK WALLET APPROVAL
const approveState = async (e)=> {
	if (typeof window.ethereum !== 'undefined') {
		const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
		account = accounts[0];
		
		if (account.length > 0) {
			const web3 = new Web3(window.ethereum);
			contract1 = new web3.eth.Contract(ABI_COL, CONTRACT_COL, { from: account });
			approved = await contract1.methods.isApprovedForAll(account, CONTRACT_STAKE).call();

			if (approved) { document.getElementById("approve").innerHTML = "WALLET APPROVED"; }
			}
		}
		return false;
	}

//STAKE ONE TOKEN
const stakeOne = async (e)=> {
	if (typeof window.ethereum !== 'undefined') {
	  	if (tokenId != "") {
			var result = "";
			var success = "";
			document.getElementById(tokenId).innerHTML = "WORKING..."
			try {
			  	const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
			  	account = accounts[0];

			  	const web3 = new Web3(window.ethereum);
			  	contract2 = new web3.eth.Contract(ABI_STAKE, CONTRACT_STAKE, { from: account });

			  	const gas = Math.round( await contract2.methods.stake(tokenId).estimateGas({from: account, to: CONTRACT_STAKE, }) * 1.1 );
			  	result = await contract2.methods.stake(tokenId).send({from: account, to: CONTRACT_STAKE, gas: gas});

				success = document.getElementById(tokenId).innerHTML = "STAKED!";
			  	} 
		  	catch(e)
			  	{
			  	alert("Error: " + e.message)
			  	console.log("Error: ",e)
				document.getElementById(tokenId).innerHTML = "STAKE";
				}
		  	}
		}
  	}

//UNSTAKE ONE TOKEN
const unstakeOne = async (e)=> {
	if (typeof window.ethereum !== 'undefined') {
	  	if (tokenId != "") {
			var result = "";
			var success = "";
			document.getElementById(tokenId).innerHTML = "WORKING...";
			try {
			  	const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
			  	account = accounts[0];

			  	const web3 = new Web3(window.ethereum);
			  	contract2 = new web3.eth.Contract(ABI_STAKE, CONTRACT_STAKE, { from: account });

			  	const gas = Math.round( await contract2.methods.unstake(tokenId).estimateGas({from: account, to: CONTRACT_STAKE, }) * 1.1 );
			  	result = await contract2.methods.unstake(tokenId).send({from: account, to: CONTRACT_STAKE, gas: gas});

				success = document.getElementById(tokenId).innerHTML = "UNSTAKED!";
			  	} 
		  catch(e)
			  	{
			  	alert("Error: " + e.message)
			  	console.log("Error: ",e)
				document.getElementById(tokenId).innerHTML = "UNSTAKE";
				}
		  	}
		}
  	}

//STAKE ALL YOUR TOKENS
const stakeAll = async (e)=> {
  	if (typeof window.ethereum !== 'undefined') {
        if (colTokensArray != "") {
          	var result = "";
		var success = "";
		document.getElementById("tokens_available").innerHTML = "WORKING...";
          	try {
            	const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
				account = accounts[0];

            	const web3 = new Web3(window.ethereum);
            	contract2 = new web3.eth.Contract(ABI_STAKE, CONTRACT_STAKE, { from: account });

            	const gas = Math.round( await contract2.methods.stake(colTokensArray).estimateGas({value: 0, from: account}) * 1.1 );
            	result = await contract2.methods.stake(colTokensArray).send({value: 0, from: account, gas: gas});

				success = document.getElementById("tokens_available").innerHTML = "SUCCESS!";
				} 
			catch(e)
				{
            	alert("Error: " + e.message)
            	console.log("Error: ",e)
				document.getElementById("tokens_available").innerHTML = totalStaked + " / " + 5000;
          		}
        	}
		else
			{
			alert("No more tokens to stake.")
			console.log("No more tokens to stake.");
			}
  		}
	}

//UNSTAKE ALL YOUR TOKENS
const unstakeAll = async (e)=> {
  	if (typeof window.ethereum !== 'undefined') {
		if (stakedTokensArray != "") {
          	var result = "";
			var success = "";
			document.getElementById("tokens_available").innerHTML = "WORKING...";
          	try {
            	const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
				account = accounts[0];

            	const web3 = new Web3(window.ethereum);
            	contract2 = new web3.eth.Contract(ABI_STAKE, CONTRACT_STAKE, { from: account });

            	const gas = Math.round( await contract2.methods.unstake(stakedTokensArray).estimateGas({value: 0, from: account}) * 1.1 );
            	result = await contract2.methods.unstake(stakedTokensArray).send({value: 0, from: account, gas: gas});

				success = document.getElementById("tokens_available").innerHTML = "SUCCESS!";
			   	}
			catch(e) 
				{
            	alert("Error: " + e.message)
            	console.log("Error: ",e)
				document.getElementById("tokens_available").innerHTML = totalStaked + " / " + 5000;
          		}
        	}
		else
			{
			alert("No tokens staked.")
			console.log("No tokens staked.");
			}
  		}
	}

//CLAIM YOUR REWARDS
const claim = async (e)=> {
	if (typeof window.ethereum !== 'undefined') {
		if (earningInfo != 0) {
			var result = "";
			var success = "";
			document.getElementById("tokens_available").innerHTML = "CLAIMING...";
			try {
			  	const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
			  	account = accounts[0];
  
			  	const web3 = new Web3(window.ethereum);
			  	contract2 = new web3.eth.Contract(ABI_STAKE, CONTRACT_STAKE, { from: account });

			  	const gas = Math.round( await contract2.methods.claim(stakedTokensArray).estimateGas({value: 0, from: account}) * 1.1 );
			  	result = await contract2.methods.claim(stakedTokensArray).send({value: 0, from: account, gas: gas});

				success = document.getElementById("tokens_available").innerHTML = "SUCCESS!";
				}
			catch(e) 
				{
            	alert("Error: " + e.message)
            	console.log("Error: ",e)
				document.getElementById("tokens_available").innerHTML = totalStaked + " / " + 5000;
          		}
        	}
		else
			{
			alert("No rewards to claim.")
			console.log("No rewards to claim.");
			}
  		}
	}

//SELECT TOKENS
const select = async (e)=> {
	if (typeof window.ethereum !== 'undefined') {
	  	if (tokenId != "") {
			var tString = tokenId.toString();
			var tokenS = tString.slice(0,-4);
			var removeThisToken = stakeSelectedTokens.indexOf(tokenS);
			var removeThisToken2 = unstakeSelectedTokens.indexOf(tokenS);

			if (colTokensArray.indexOf(tokenS) != -1) {
				if (stakeSelectedTokens.indexOf(tokenS) === -1) {
					stakeSelectedTokens.push(tokenS);
					document.getElementById(tokenId).src = 'images/select-btn-1.png';
				}
				else
				{
					stakeSelectedTokens.splice(removeThisToken,1);
					document.getElementById(tokenId).src = 'images/select-btn-2.png';
				}

				if (stakeSelectedTokens.length != 0) {
					document.getElementById("stakeSelected").innerHTML = "STAKE SELECTED " + "(" + stakeSelectedTokens.length + ")";
					}

				if (stakeSelectedTokens.length == 0) {
					document.getElementById("stakeSelected").innerHTML = "STAKE SELECTED";
					}
				}
			else
				{
				if (unstakeSelectedTokens.indexOf(tokenS) === -1) {
					unstakeSelectedTokens.push(tokenS);
					document.getElementById(tokenId).src = 'images/select-btn-1.png';
					}
				else
					{
					unstakeSelectedTokens.splice(removeThisToken2,1);
					document.getElementById(tokenId).src = 'images/select-btn-2.png';
					}
	
				if (unstakeSelectedTokens.length != 0) {
					document.getElementById("unstakeSelected").innerHTML = "UNSTAKE SELECTED " + "(" + unstakeSelectedTokens.length + ")";
					}
	
				if (unstakeSelectedTokens.length == 0) {
					document.getElementById("unstakeSelected").innerHTML = "UNSTAKE SELECTED";
					}
				}
			}
		}
  	}

//STAKE SELECTED TOKENS
const stakeSelected = async (e)=> {
	if (typeof window.ethereum !== 'undefined') {
	  	if (stakeSelectedTokens.length != 0) {
		  	var result = "";
		  	var success = "";
		  	document.getElementById("tokens_available").innerHTML = "WORKING...";
			try {
			  const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
			  account = accounts[0];

			  const web3 = new Web3(window.ethereum);
			  contract2 = new web3.eth.Contract(ABI_STAKE, CONTRACT_STAKE, { from: account });

			  const gas = Math.round( await contract2.methods.stake(stakeSelectedTokens).estimateGas({value: 0, from: account}) * 1.1 );
			  result = await contract2.methods.stake(stakeSelectedTokens).send({value: 0, from: account, gas: gas});

			  success = document.getElementById("tokens_available").innerHTML = "SUCCESS!";
			  } 
		  	catch(e)
			  {
			  alert("Error: " + e.message)
			  console.log("Error: ",e)
			  document.getElementById("tokens_available").innerHTML = totalStaked + " / " + 5000;
			  }
		  	}
	  	else
		  	{
		  	alert("No tokens selected to stake.")
		  	console.log("No tokens selected to stake.");
		  	}
		}
  	}


//UNSTAKE SELECTED TOKENS
const unstakeSelected = async (e)=> {
	if (typeof window.ethereum !== 'undefined') {
	  	if (unstakeSelectedTokens.length != 0) {
		  	var result = "";
		  	var success = "";
		  	document.getElementById("tokens_available").innerHTML = "WORKING...";
			try {
			  const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
			  account = accounts[0];

			  const web3 = new Web3(window.ethereum);
			  contract2 = new web3.eth.Contract(ABI_STAKE, CONTRACT_STAKE, { from: account });

			  const gas = Math.round( await contract2.methods.unstake(unstakeSelectedTokens).estimateGas({value: 0, from: account}) * 1.1 );
			  result = await contract2.methods.unstake(unstakeSelectedTokens).send({value: 0, from: account, gas: gas});

			  success = document.getElementById("tokens_available").innerHTML = "SUCCESS!";
			  } 
		  	catch(e)
			  {
			  alert("Error: " + e.message)
			  console.log("Error: ",e)
			  document.getElementById("tokens_available").innerHTML = totalStaked + " / " + 5000;
			  }
		  	}
	  	else
		  	{
			alert("No tokens selected to unstake.")
			console.log("No tokens selected to unstake.");
			}
		}
  	}

//GET YOUR COLLECTION TOKENS IDs
const getTokens = async (e)=> {
	if (typeof window.ethereum !== 'undefined') {
    	console.log('MetaMask is installed!');
    	const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' })
		account = accounts[0];
		
    	if (account.length > 0) {
  	  		const web3 = new Web3(window.ethereum);
			contract2 = new web3.eth.Contract(ABI_STAKE, CONTRACT_STAKE, {gas: 30000000});
			var getTokensArray = await contract2.methods.walletOfOwner(account).call();
			var NFTamount = getTokensArray.length;

			var colTokensString = String(getTokensArray);
			colTokensArray = Array.from(getTokensArray);

			if (getTokensArray != "") {
				
				for(var i=0 ; i<NFTamount ; i++) {
					let div = document.createElement('p');
					div.className = 'NFTcard';
        			div.innerHTML = '<img class="card-image" src="https://springfieldapes.s3.us-east-2.amazonaws.com/normal/'
					+ colTokensArray[i] + '.png" onerror="this.src=' + "'images/load.png'" + '"> <img class="card-select-btn" src="images/select-btn-2.png" onclick="select(tokenId = [this.id])" id="' 
					+ colTokensArray[i] + "card" + '"> <a class="card-text"> TOKEN ID: ' + colTokensArray[i]
					+ ' </a> <br> <a class="card-text"> Available </a> <br> <button class="card-stk-btn" onclick="stakeOne(tokenId = [this.id])" id="' 
					+ colTokensArray[i] + '"> STAKE </button>';
        		
					const NFTcard = document.getElementById('grid');
					NFTcard.appendChild(div);
			 		}
				}

			if (colTokensArray != "") {
				document.getElementById("unstakeIds").innerHTML = NFTamount ;
				}
			else
				{
				document.getElementById("unstakeIds").innerHTML = "No more tokens to stake.";
				}
			}
  		}
  		return false;
	}

//GET YOUR STAKED TOKENS IDs
const getTokens2 = async (e)=> {
	if (typeof window.ethereum !== 'undefined') {
    	console.log('MetaMask is installed!');
    	const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' })
		account = accounts[0];

    	if (account.length > 0) {
  	  		const web3 = new Web3(window.ethereum);
  	  		contract2 = new web3.eth.Contract(ABI_STAKE, CONTRACT_STAKE, {gas: 30000000});
			var tokensStaked = await contract2.methods.tokensOfOwner(account).call();
			var NFTstaked = tokensStaked.length;

			var stakedTokensString = String(tokensStaked);
			stakedTokensArray = Array.from(tokensStaked);

			if (tokensStaked != "") {
				
				for(var i = 0 ; i < NFTstaked ; i++) {
					let div = document.createElement('p');
					div.className = 'NFTcard';
        			div.innerHTML = '<img class="card-image" src="https://springfieldapes.s3.us-east-2.amazonaws.com/normal/'
					+ stakedTokensArray[i] + '.png" onerror="this.src=' + "'images/load.png'" + '"> <img class="card-select-btn" src="images/select-btn-2.png" onclick="select(tokenId = [this.id])" id="' 
					+ stakedTokensArray[i] + "card" + '"> <a class="card-text"> TOKEN ID: ' + stakedTokensArray[i]
					+ ' </a> <br> <a class="card-text"> Staked </a> <br> <button class="card-unstk-btn" onclick="unstakeOne(tokenId = [this.id])" id="'
					+ stakedTokensArray[i] + '"> UNSTAKE </button>';

					const NFTcard = document.getElementById('grid');
					NFTcard.appendChild(div);
			 		}
				}

			if (stakedTokensArray != "") {
				document.getElementById("stakeIds").innerHTML = NFTstaked ;
				}
			else
				{
				document.getElementById("stakeIds").innerHTML = "No staked tokens.";
				}
			}
  		}
  		return false;
	}

// DISC Rewards Info
const rewards = async (e)=> {
	if (stakedTokensArray.length > 0) {
		earningInfo = parseInt(await contract2.methods.earningInfo(account,stakedTokensArray).call());
   		}

	earningInfoMath = String((earningInfo / 1e18));

	if (earningInfo != 0)
	   	{
		document.getElementById("rewards").innerHTML = earningInfoMath.substr(0,8);//earningInfoMath;
	   	}
   	else
	   	{
	   	document.getElementById("rewards").innerHTML = "No rewards to claim.";
	   	}
	}

//CONNECT YOUR WALLET
const connect = async (e)=> {
  	if (typeof window.ethereum !== 'undefined') {
    	console.log('MetaMask is installed!');
    	const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' })
		account = accounts[0];

    	if (account.length != 0) {
        	document.getElementById("connect_button").innerHTML = account.substr(0,10) + "..." + account.substr(-4);

  	  		const web3 = new Web3(window.ethereum);
  	  		contract2 = new web3.eth.Contract(ABI_STAKE, CONTRACT_STAKE, {gas: 300000000});

      		totalStaked = await contract2.methods.totalStaked().call();
			tokensStaked = await contract2.methods.tokensOfOwner(account).call();

			stakedTokensArray = Array.from(tokensStaked);

			document.getElementById("tokens_available").innerHTML = totalStaked + " / " + 5000;

			await getTokens();
			getTokens2();
			rewards();
			approveState();
			}
    	else
			{
        	document.getElementById("connect_button").innerHTML = "Connect wallet";
			}
  	}
  	return false;
}

connect();

//BUTTON FUNCTIONS
document.getElementById('connect_button').onclick = connect;
document.getElementById('stakeAll').onclick = stakeAll;
document.getElementById('unstakeAll').onclick = unstakeAll;
document.getElementById('stakeSelected').onclick = stakeSelected;
document.getElementById('unstakeSelected').onclick = unstakeSelected;
document.getElementById('claim').onclick = claim;
document.getElementById('approve').onclick = approve;

function updateRewards() {
	rewards();
  }
  
setInterval(updateRewards, 30000);
