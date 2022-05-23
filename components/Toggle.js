export default function Toggle ({ id, active, onChange }) {
   const activeContainerClass = active ? "active bg-green-600" : "bg-gray-200"
   const activeDotClass = active ? "translate-x-5" : "translate-x-0"

   return (
      <button
         id={id}
         type="button"
         className={`${activeContainerClass} relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black`}
         onClick={() => onChange(!active)}
         aria-pressed={active}>
         <span className="sr-only">Enable cookies</span>
         <span aria-hidden="true" className={`${activeDotClass} pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200`}></span>
      </button>
   )
}