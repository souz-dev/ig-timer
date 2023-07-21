import { Outlet } from 'react-router-dom'
import { LayoutCpntainer } from './styles'
import { Header } from '../../components/header'

export function DefaultLayout() {
  return (
    <LayoutCpntainer>
      <Header />
      <Outlet />
    </LayoutCpntainer>
  )
}
