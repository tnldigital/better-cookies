
export function Heading({ children }) {
   return (
      <h3 className="font-semibold text-xl text-gray-800">
         {children}
      </h3>
   )
}

export function Text({ children, small }) {
   return (
      <p className={`text-gray-600 ${small ? 'text-sm' : ''}`}>
         {children}
      </p>
   )
}