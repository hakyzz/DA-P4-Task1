import * as anchor from "@project-serum/anchor";
import { Program } from "@project-serum/anchor";
import { DaAnchor } from "../target/types/da_anchor";

describe("da-anchor", () => {
  // Configure the client to use the local cluster.
  anchor.setProvider(anchor.AnchorProvider.env());

  const program = anchor.workspace.DaAnchor as Program<DaAnchor>;

  it("Is initialized!", async () => {
    // Add your test here.
    const tx = await program.methods.initialize().rpc();
    console.log("Your transaction signature", tx);
  });
});
