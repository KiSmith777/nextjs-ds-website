//Solidity Version
pragma solidity 0.6.4;

// Store a single data point and allow fetching/updating of that datapoint
contract SimpleStorage {

// data point
    string public storedData;

    event myEventTest(string eventOutput);

    function set(string memory myText) public {
        storedData = myText;
        emit myEventTest(myText);
    }

    function get() public view returns (string memory) {
        return storedData;
    }

}

/**
 *Submitted for verification at BscScan.com on 2022-03-29
*/

// SPDX-License-Identifier: MIT


pragma solidity ^0.8.0;


/**
 * @dev Provides information about the current execution context, including the
 * sender of the transaction and its data. While these are generally available
 * via msg.sender and msg.data, they should not be accessed in such a direct
 * manner, since when dealing with meta-transactions the account sending and
 * paying for execution may not be the actual sender (as far as an application
 * is concerned).
 *
 * This contract is only required for intermediate, library-like contracts.
 */
abstract contract Context {
    function _msgSender() internal view virtual returns (address) {
        return msg.sender;
    }

    function _msgData() internal view virtual returns (bytes calldata) {
        return msg.data;
    }
}

/**
 * @dev Contract module which provides a basic access control mechanism, where
 * there is an account (an owner) that can be granted exclusive access to
 * specific functions.
 *
 * By default, the owner account will be the one that deploys the contract. This
 * can later be changed with {transferOwnership}.
 *
 * This module is used through inheritance. It will make available the modifier
 * `onlyOwner`, which can be applied to your functions to restrict their use to
 * the owner.
 */
abstract contract Ownable is Context {
    address private _owner;

    event OwnershipTransferred(address indexed previousOwner, address indexed newOwner);

    /**
     * @dev Initializes the contract setting the deployer as the initial owner.
     */
    constructor() {
        _transferOwnership(_msgSender());
    }

    /**
     * @dev Returns the address of the current owner.
     */
    function owner() public view virtual returns (address) {
        return _owner;
    }

    /**
     * @dev Throws if called by any account other than the owner.
     */
    modifier onlyOwner() {
        require(owner() == _msgSender(), "Ownable: caller is not the owner");
        _;
    }

    /**
     * @dev Leaves the contract without owner. It will not be possible to call
     * `onlyOwner` functions anymore. Can only be called by the current owner.
     *
     * NOTE: Renouncing ownership will leave the contract without an owner,
     * thereby removing any functionality that is only available to the owner.
     */
    function renounceOwnership() public virtual onlyOwner {
        _transferOwnership(address(0));
    }

    /**
     * @dev Transfers ownership of the contract to a new account (`newOwner`).
     * Can only be called by the current owner.
     */
    function transferOwnership(address newOwner) public virtual onlyOwner {
        require(newOwner != address(0), "Ownable: new owner is the zero address");
        _transferOwnership(newOwner);
    }

    /**
     * @dev Transfers ownership of the contract to a new account (`newOwner`).
     * Internal function without access restriction.
     */
    function _transferOwnership(address newOwner) internal virtual {
        address oldOwner = _owner;
        _owner = newOwner;
        emit OwnershipTransferred(oldOwner, newOwner);
    }
}

contract PresaleContract is Ownable{
    uint256 public amountCollected = 0 ether;
    
    uint256 public hardCap = 300 ether;

    uint256 public maxTransaction = 1 ether;
    uint256 public minTransaction = 0.1 ether;

    mapping(address => uint256) sentAmounts;

    function depositBNB() public payable{
        require(amountCollected + msg.value <= hardCap, "Max BNB reached!");
        require(msg.value >= minTransaction, "Transaction too small");
        require(msg.value <= maxTransaction, "Transaction too big");
        amountCollected += msg.value;
        sentAmounts[msg.sender] += msg.value;
        
    }
    function addAmountCollected(uint256 amount) public onlyOwner {
        amountCollected += amount * 10 ** 18;
    }
    function subtractAmountCollected(uint256 amount) public onlyOwner {
        amountCollected -= amount * 10 ** 18;
    }
    function setAmountCollected(uint256 amount) public onlyOwner {
        amountCollected = amount * 10 ** 18;
    }
    function setHardCap(uint256 amount) public onlyOwner {
        hardCap = amount * 10 ** 18;
    }
    function setMinTX(uint256 amount) public onlyOwner {
        minTransaction = amount * 10 ** 18;
    }
    function setMaxTX(uint256 amount) public onlyOwner {
        maxTransaction = amount * 10 ** 18;
    }

    function transferEthToOwner() public onlyOwner  {
        require(address(this).balance > 0, "Balance is 0");
        payable(owner()).transfer(address(this).balance);
        hardCap = 0 ether;
    }

    function howMuchSent(address user) public view returns(uint256) {
        return sentAmounts[user];
    }

    receive() external payable {}

}