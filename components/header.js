import Link from 'next/link'
import { useCart } from 'react-use-cart'

import { formatCurrencyValue } from '@/utils/format-currency-value'
import { GraphCMSSVG } from '@/svgs'
import { ShoppingCartIcon } from '@/icons'
import { useSettingsContext } from '@/context/settings'

function Header({ pages = [] }) {
  const { cartTotal } = useCart()
  const { activeCurrency } = useSettingsContext()

  return (
    <header className="max-w-7xl mx-auto bg-white flex-grow flex items-center justify-between px-4 sm:px-6">
      <div className="">
        DeFiNet
      </div>
    </header>
  )
}

export default Header
