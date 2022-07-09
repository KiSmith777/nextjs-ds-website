import { ethers } from 'ethers';

export const truncateAddress = (address) => {
  if (!address) return "Not Connected";
  const match = address.match(
    /^(0x[a-zA-Z0-9]{2})[a-zA-Z0-9]+([a-zA-Z0-9]{4})$/
  );
  if (!match) return address;
  return `${match[1]}…${match[2]}`;
};

export const toHex = (num) => {
  const val = Number(num);
  return "0x" + val.toString(16);
};

export const toDecimal = (num) => {
  const val = ethers.utils.formatUnits(num, 'ether');
  return Number(val);
}

export const toDecimalBalance = (num) => {
  const val = ethers.utils.formatUnits(num, 'ether');
  return Number(val).toFixed(2)
}

export const toDecimalProgress = (num) => {
  return Number(num).toFixed(1);
}


export const parseInput = (num) => {
  if (num !== "") {
    const val = ethers.utils.parseUnits(parseInt(num).toString(), 'ether');
    if (val !== "") {
      return val
    }
  }
}

export const formatInput = (num) => {
  if (num !== "") {
    const val = ethers.utils.formatUnits(parseInt(num.toString()), 9);
    if (val !== "") {
      return val
    }
  }

}
