import { BiError } from 'react-icons/bi'

type Props = {
  children?: React.ReactNode
  type?: 'error' // here it could be reusable by creating other kind of type usages
}

const Alert = ({ children, type = 'error' }: Props) => {
  return type === 'error' ? (
    <div className="mt-2 p-4 bg-red-400 border border-red-600 flex items-center rounded-md gap-2">
      <BiError /> {children}{' '}
    </div>
  ) : null
}

export default Alert
