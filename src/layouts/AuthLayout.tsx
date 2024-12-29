import { FC, ReactNode } from 'react'
import { logoIcon } from '../utils'

interface IAuthLayoutProps {
  children: ReactNode
}
const AuthLayout: FC<IAuthLayoutProps> = ({children}) => {
  return (
    <div className="wrapper">
        <div className="wrapper__logo">
            <img src={logoIcon} alt="" className="wrapper__img" />
        </div>
        <div className="wrapper__form">
          {children}
        </div>
    </div>
  )
}

export default AuthLayout