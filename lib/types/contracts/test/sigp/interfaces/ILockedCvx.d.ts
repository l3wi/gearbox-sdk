import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "../../../../common";
export declare namespace ILockedCvx {
    type LockedBalanceStruct = {
        amount: BigNumberish;
        boosted: BigNumberish;
        unlockTime: BigNumberish;
    };
    type LockedBalanceStructOutput = [BigNumber, BigNumber, number] & {
        amount: BigNumber;
        boosted: BigNumber;
        unlockTime: number;
    };
}
export interface ILockedCvxInterface extends utils.Interface {
    functions: {
        "addReward(address,address,bool)": FunctionFragment;
        "approveRewardDistributor(address,address,bool)": FunctionFragment;
        "balanceAtEpochOf(uint256,address)": FunctionFragment;
        "balanceOf(address)": FunctionFragment;
        "checkpointEpoch()": FunctionFragment;
        "epochCount()": FunctionFragment;
        "epochs(uint256)": FunctionFragment;
        "getReward(address,bool)": FunctionFragment;
        "lock(address,uint256,uint256)": FunctionFragment;
        "lockedBalanceOf(address)": FunctionFragment;
        "lockedBalances(address)": FunctionFragment;
        "pendingLockAtEpochOf(uint256,address)": FunctionFragment;
        "pendingLockOf(address)": FunctionFragment;
        "processExpiredLocks(bool)": FunctionFragment;
        "recoverERC20(address,uint256)": FunctionFragment;
        "setBoost(uint256,uint256,address)": FunctionFragment;
        "setKickIncentive(uint256,uint256)": FunctionFragment;
        "setStakeLimits(uint256,uint256)": FunctionFragment;
        "shutdown()": FunctionFragment;
        "totalSupply()": FunctionFragment;
        "totalSupplyAtEpoch(uint256)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "addReward" | "approveRewardDistributor" | "balanceAtEpochOf" | "balanceOf" | "checkpointEpoch" | "epochCount" | "epochs" | "getReward" | "lock" | "lockedBalanceOf" | "lockedBalances" | "pendingLockAtEpochOf" | "pendingLockOf" | "processExpiredLocks" | "recoverERC20" | "setBoost" | "setKickIncentive" | "setStakeLimits" | "shutdown" | "totalSupply" | "totalSupplyAtEpoch"): FunctionFragment;
    encodeFunctionData(functionFragment: "addReward", values: [string, string, boolean]): string;
    encodeFunctionData(functionFragment: "approveRewardDistributor", values: [string, string, boolean]): string;
    encodeFunctionData(functionFragment: "balanceAtEpochOf", values: [BigNumberish, string]): string;
    encodeFunctionData(functionFragment: "balanceOf", values: [string]): string;
    encodeFunctionData(functionFragment: "checkpointEpoch", values?: undefined): string;
    encodeFunctionData(functionFragment: "epochCount", values?: undefined): string;
    encodeFunctionData(functionFragment: "epochs", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "getReward", values: [string, boolean]): string;
    encodeFunctionData(functionFragment: "lock", values: [string, BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "lockedBalanceOf", values: [string]): string;
    encodeFunctionData(functionFragment: "lockedBalances", values: [string]): string;
    encodeFunctionData(functionFragment: "pendingLockAtEpochOf", values: [BigNumberish, string]): string;
    encodeFunctionData(functionFragment: "pendingLockOf", values: [string]): string;
    encodeFunctionData(functionFragment: "processExpiredLocks", values: [boolean]): string;
    encodeFunctionData(functionFragment: "recoverERC20", values: [string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "setBoost", values: [BigNumberish, BigNumberish, string]): string;
    encodeFunctionData(functionFragment: "setKickIncentive", values: [BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "setStakeLimits", values: [BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "shutdown", values?: undefined): string;
    encodeFunctionData(functionFragment: "totalSupply", values?: undefined): string;
    encodeFunctionData(functionFragment: "totalSupplyAtEpoch", values: [BigNumberish]): string;
    decodeFunctionResult(functionFragment: "addReward", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "approveRewardDistributor", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "balanceAtEpochOf", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "balanceOf", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "checkpointEpoch", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "epochCount", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "epochs", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getReward", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "lock", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "lockedBalanceOf", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "lockedBalances", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "pendingLockAtEpochOf", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "pendingLockOf", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "processExpiredLocks", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "recoverERC20", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setBoost", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setKickIncentive", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setStakeLimits", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "shutdown", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "totalSupply", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "totalSupplyAtEpoch", data: BytesLike): Result;
    events: {};
}
export interface ILockedCvx extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: ILockedCvxInterface;
    queryFilter<TEvent extends TypedEvent>(event: TypedEventFilter<TEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TEvent>>;
    listeners<TEvent extends TypedEvent>(eventFilter?: TypedEventFilter<TEvent>): Array<TypedListener<TEvent>>;
    listeners(eventName?: string): Array<Listener>;
    removeAllListeners<TEvent extends TypedEvent>(eventFilter: TypedEventFilter<TEvent>): this;
    removeAllListeners(eventName?: string): this;
    off: OnEvent<this>;
    on: OnEvent<this>;
    once: OnEvent<this>;
    removeListener: OnEvent<this>;
    functions: {
        addReward(_rewardsToken: string, _distributor: string, _useBoost: boolean, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        approveRewardDistributor(_rewardsToken: string, _distributor: string, _approved: boolean, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        balanceAtEpochOf(_epoch: BigNumberish, _user: string, overrides?: CallOverrides): Promise<[BigNumber] & {
            amount: BigNumber;
        }>;
        balanceOf(_account: string, overrides?: CallOverrides): Promise<[BigNumber]>;
        checkpointEpoch(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        epochCount(overrides?: CallOverrides): Promise<[BigNumber]>;
        epochs(_id: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber, number]>;
        getReward(_account: string, _stake: boolean, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        lock(_account: string, _amount: BigNumberish, _spendRatio: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        lockedBalanceOf(_user: string, overrides?: CallOverrides): Promise<[BigNumber] & {
            amount: BigNumber;
        }>;
        lockedBalances(_user: string, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber,
            BigNumber,
            ILockedCvx.LockedBalanceStructOutput[]
        ] & {
            total: BigNumber;
            unlockable: BigNumber;
            locked: BigNumber;
            lockData: ILockedCvx.LockedBalanceStructOutput[];
        }>;
        pendingLockAtEpochOf(_epoch: BigNumberish, _user: string, overrides?: CallOverrides): Promise<[BigNumber] & {
            amount: BigNumber;
        }>;
        pendingLockOf(_user: string, overrides?: CallOverrides): Promise<[BigNumber] & {
            amount: BigNumber;
        }>;
        processExpiredLocks(_relock: boolean, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        recoverERC20(_tokenAddress: string, _tokenAmount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        setBoost(_max: BigNumberish, _rate: BigNumberish, _receivingAddress: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        setKickIncentive(_rate: BigNumberish, _delay: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        setStakeLimits(_minimum: BigNumberish, _maximum: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        shutdown(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        totalSupply(overrides?: CallOverrides): Promise<[BigNumber] & {
            supply: BigNumber;
        }>;
        totalSupplyAtEpoch(_epoch: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber] & {
            supply: BigNumber;
        }>;
    };
    addReward(_rewardsToken: string, _distributor: string, _useBoost: boolean, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    approveRewardDistributor(_rewardsToken: string, _distributor: string, _approved: boolean, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    balanceAtEpochOf(_epoch: BigNumberish, _user: string, overrides?: CallOverrides): Promise<BigNumber>;
    balanceOf(_account: string, overrides?: CallOverrides): Promise<BigNumber>;
    checkpointEpoch(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    epochCount(overrides?: CallOverrides): Promise<BigNumber>;
    epochs(_id: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber, number]>;
    getReward(_account: string, _stake: boolean, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    lock(_account: string, _amount: BigNumberish, _spendRatio: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    lockedBalanceOf(_user: string, overrides?: CallOverrides): Promise<BigNumber>;
    lockedBalances(_user: string, overrides?: CallOverrides): Promise<[
        BigNumber,
        BigNumber,
        BigNumber,
        ILockedCvx.LockedBalanceStructOutput[]
    ] & {
        total: BigNumber;
        unlockable: BigNumber;
        locked: BigNumber;
        lockData: ILockedCvx.LockedBalanceStructOutput[];
    }>;
    pendingLockAtEpochOf(_epoch: BigNumberish, _user: string, overrides?: CallOverrides): Promise<BigNumber>;
    pendingLockOf(_user: string, overrides?: CallOverrides): Promise<BigNumber>;
    processExpiredLocks(_relock: boolean, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    recoverERC20(_tokenAddress: string, _tokenAmount: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    setBoost(_max: BigNumberish, _rate: BigNumberish, _receivingAddress: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    setKickIncentive(_rate: BigNumberish, _delay: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    setStakeLimits(_minimum: BigNumberish, _maximum: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    shutdown(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    totalSupply(overrides?: CallOverrides): Promise<BigNumber>;
    totalSupplyAtEpoch(_epoch: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    callStatic: {
        addReward(_rewardsToken: string, _distributor: string, _useBoost: boolean, overrides?: CallOverrides): Promise<void>;
        approveRewardDistributor(_rewardsToken: string, _distributor: string, _approved: boolean, overrides?: CallOverrides): Promise<void>;
        balanceAtEpochOf(_epoch: BigNumberish, _user: string, overrides?: CallOverrides): Promise<BigNumber>;
        balanceOf(_account: string, overrides?: CallOverrides): Promise<BigNumber>;
        checkpointEpoch(overrides?: CallOverrides): Promise<void>;
        epochCount(overrides?: CallOverrides): Promise<BigNumber>;
        epochs(_id: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber, number]>;
        getReward(_account: string, _stake: boolean, overrides?: CallOverrides): Promise<void>;
        lock(_account: string, _amount: BigNumberish, _spendRatio: BigNumberish, overrides?: CallOverrides): Promise<void>;
        lockedBalanceOf(_user: string, overrides?: CallOverrides): Promise<BigNumber>;
        lockedBalances(_user: string, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber,
            BigNumber,
            ILockedCvx.LockedBalanceStructOutput[]
        ] & {
            total: BigNumber;
            unlockable: BigNumber;
            locked: BigNumber;
            lockData: ILockedCvx.LockedBalanceStructOutput[];
        }>;
        pendingLockAtEpochOf(_epoch: BigNumberish, _user: string, overrides?: CallOverrides): Promise<BigNumber>;
        pendingLockOf(_user: string, overrides?: CallOverrides): Promise<BigNumber>;
        processExpiredLocks(_relock: boolean, overrides?: CallOverrides): Promise<void>;
        recoverERC20(_tokenAddress: string, _tokenAmount: BigNumberish, overrides?: CallOverrides): Promise<void>;
        setBoost(_max: BigNumberish, _rate: BigNumberish, _receivingAddress: string, overrides?: CallOverrides): Promise<void>;
        setKickIncentive(_rate: BigNumberish, _delay: BigNumberish, overrides?: CallOverrides): Promise<void>;
        setStakeLimits(_minimum: BigNumberish, _maximum: BigNumberish, overrides?: CallOverrides): Promise<void>;
        shutdown(overrides?: CallOverrides): Promise<void>;
        totalSupply(overrides?: CallOverrides): Promise<BigNumber>;
        totalSupplyAtEpoch(_epoch: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    };
    filters: {};
    estimateGas: {
        addReward(_rewardsToken: string, _distributor: string, _useBoost: boolean, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        approveRewardDistributor(_rewardsToken: string, _distributor: string, _approved: boolean, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        balanceAtEpochOf(_epoch: BigNumberish, _user: string, overrides?: CallOverrides): Promise<BigNumber>;
        balanceOf(_account: string, overrides?: CallOverrides): Promise<BigNumber>;
        checkpointEpoch(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        epochCount(overrides?: CallOverrides): Promise<BigNumber>;
        epochs(_id: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        getReward(_account: string, _stake: boolean, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        lock(_account: string, _amount: BigNumberish, _spendRatio: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        lockedBalanceOf(_user: string, overrides?: CallOverrides): Promise<BigNumber>;
        lockedBalances(_user: string, overrides?: CallOverrides): Promise<BigNumber>;
        pendingLockAtEpochOf(_epoch: BigNumberish, _user: string, overrides?: CallOverrides): Promise<BigNumber>;
        pendingLockOf(_user: string, overrides?: CallOverrides): Promise<BigNumber>;
        processExpiredLocks(_relock: boolean, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        recoverERC20(_tokenAddress: string, _tokenAmount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        setBoost(_max: BigNumberish, _rate: BigNumberish, _receivingAddress: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        setKickIncentive(_rate: BigNumberish, _delay: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        setStakeLimits(_minimum: BigNumberish, _maximum: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        shutdown(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        totalSupply(overrides?: CallOverrides): Promise<BigNumber>;
        totalSupplyAtEpoch(_epoch: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        addReward(_rewardsToken: string, _distributor: string, _useBoost: boolean, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        approveRewardDistributor(_rewardsToken: string, _distributor: string, _approved: boolean, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        balanceAtEpochOf(_epoch: BigNumberish, _user: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        balanceOf(_account: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        checkpointEpoch(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        epochCount(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        epochs(_id: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getReward(_account: string, _stake: boolean, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        lock(_account: string, _amount: BigNumberish, _spendRatio: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        lockedBalanceOf(_user: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        lockedBalances(_user: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        pendingLockAtEpochOf(_epoch: BigNumberish, _user: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        pendingLockOf(_user: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        processExpiredLocks(_relock: boolean, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        recoverERC20(_tokenAddress: string, _tokenAmount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        setBoost(_max: BigNumberish, _rate: BigNumberish, _receivingAddress: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        setKickIncentive(_rate: BigNumberish, _delay: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        setStakeLimits(_minimum: BigNumberish, _maximum: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        shutdown(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        totalSupply(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        totalSupplyAtEpoch(_epoch: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
