# solanaHDWallet

solana HD钱包
[文档](https://www.solana-cn.com/SolanaDocumention/core/accounts.html)
[文档](https://solana.com/zh/docs)
## 特点

高吞吐量65000，BTC 7 ， ETH 15-20
POH+BFT

## 支持的功能

* 基本钱包功能
* sol代币和Token的转账
* NFT转账
* staking质押

## 注意solana上BIP44的独特性
[文档](https://solana.com/zh/developers/cookbook/wallets/restore-from-mnemonic)
```typescript
import { Keypair } from "@solana/web3.js";
import { HDKey } from "micro-ed25519-hdkey";
import * as bip39 from "bip39";
 
const mnemonic =
  "neither lonely flavor argue grass remind eye tag avocado spot unusual intact";
 
// arguments: (mnemonic, password)
const seed = bip39.mnemonicToSeedSync(mnemonic, "");
const hd = HDKey.fromMasterSeed(seed.toString("hex"));
 
for (let i = 0; i < 10; i++) {
  const path = `m/44'/501'/${i}'/0'`;
  const keypair = Keypair.fromSeed(hd.derive(path).privateKey);
  console.log(`${path} => ${keypair.publicKey.toBase58()}`);
}
```