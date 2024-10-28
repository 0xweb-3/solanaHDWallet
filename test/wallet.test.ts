import {MakeSolanaWallet} from "../wallet/wallet"

// 第一个地址正确为：
const mnemonic =
    "business secret tail palm doctor flash human click friend gossip virtual priority";

test("测试", () => {
    const result = MakeSolanaWallet(mnemonic, 0)
    console.log(result)
})

