import { PartialJsonBlock, PartialJsonTransaction } from '../types.js';

export function sanityCheckBlock(block: PartialJsonBlock) {
  if (!block?.indep_hash) {
    throw new Error('Invalid block: missing indep_hash');
  }

  if (!block?.height === undefined) {
    console.log(block);
    throw new Error('Invalid block: missing height');
  }
}

export function sanityCheckTx(tx: PartialJsonTransaction) {
  if (!tx?.id) {
    throw new Error('Invalid transaction');
  }
}
