import {create} from 'zustand';
import {WalletDataType, WalletItemType} from '../constants/walletData';

interface CartStore {
  cart: WalletDataType;
  addWalletToCart: (item: WalletItemType) => void;
}

const useCartStore = create<CartStore>(set => ({
  cart: [],
  addWalletToCart: (item: WalletItemType) =>
    set(state => ({
      cart: [...state.cart, item],
    })),
  removeWalletToCart: (item: WalletItemType) =>
    set(state => ({
      cart: state.cart.filter(wallet => wallet !== item),
    })),
}));

export default useCartStore;
