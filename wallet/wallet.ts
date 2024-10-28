import {Keypair} from "@solana/web3.js";
import {HDKey} from "micro-ed25519-hdkey";
import * as bip39 from "bip39";
import {WalletInfo} from "./types/walletTypes";

export function MakeSolanaWallet(mnemonic: string, index: number): WalletInfo {
    // arguments: (mnemonic, password)
    const seed = bip39.mnemonicToSeedSync(mnemonic, "");
    const hd = HDKey.fromMasterSeed(seed.toString("hex"));

    // ⚠️这里和其他项目派生地址不同
    const path = `m/44'/501'/${index}'/0'`;
    const derivedKey = hd.derive(path);

    // 使用派生密钥生成 Solana 钱包
    const keypair = Keypair.fromSeed(derivedKey.privateKey);
    const privateKey = Buffer.from(keypair.secretKey).toString("hex");
    const publicKey = keypair.publicKey.toBase58();
    const address = publicKey; // 在 Solana 中，地址等同于公钥

    // console.log(`${path} => ${publicKey}`);

    return {
        mnemonic,
        privateKey,
        publicKey,
        address,
    };
}