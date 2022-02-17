export default function Card ({ children }) {
   return (
      <div className="rounded-md shadow-xl bg-white border border-gray-100 text-gray-800">
         {children}
      </div>
   )
}