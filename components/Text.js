export default function Text ({ children, small }) {
   return (
      <p className={`text-gray-600 ${small ? 'text-sm' : ''}`}>
         {children}
      </p>
   )
}