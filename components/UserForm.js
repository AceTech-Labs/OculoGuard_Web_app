import 'tailwindcss/tailwind.css'

const UserForm = () => {
  return (
    <>
    <div className="flex-row ">
    <div className=" relative mt-6">
        <label htmlFor="fullname" className="text-gray-700  ">
          Name:
        </label>
        <input type="text" id="fullname" className=" rounded-lg border-transparent   border border-gray-300 py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-transparent" name="name" placeholder="Patient Name" />
      </div>

      <div className=" relative mt-6">
        <label htmlFor="patientId" className="text-gray-700 ">
          Patient ID
        </label>
        <input type="text" id="patientId" className=" rounded-lg border-transparent   border border-gray-300 py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-transparent" name="Id" placeholder="Patient ID" />
      </div>


      <div className=" relative mt-6">
        <label htmlFor="patientEmail" className="text-gray-700 ">
          Email
        </label>
        <input type="email" id="patientEmail" className=" rounded-lg border-transparent   border border-gray-300 py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-transparent" name="mail" placeholder="Patient E-mail" />
      </div>

      <div className=" relative mt-6">
        <label htmlFor="patientAge" className="text-gray-700 ">
          Age
        </label>
        <input type="text" id="patientAge" className=" rounded-lg border-transparent   border border-gray-300 py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-transparent" name="age" placeholder="Patient Age"/>
      </div>


      <div className="relative mt-6">
        <label htmlFor="bloodType" className="text-gray-700 ">
          Blood Type
        </label>
        <input type="text" id="bloodType" className=" rounded-lg border-transparent   border border-gray-300 py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-transparent" name="disease" placeholder="Patient Blood Type"/>
      </div>

      <div className="relative mt-6">
        <label htmlFor="diseaseType" className="text-gray-700 ">
          Disease Type 
        </label>
        <input type="text" id="diseaseType" className=" rounded-lg border-transparent   border border-gray-300 py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-transparent" name="disease" placeholder="Enter Disease"/>
      </div>


      <label className="text-gray-700" htmlFor="name">Notes:
        <textarea className="flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 rounded-lg text-base focus:outline-none focus:ring-2 focus:ring--900 focus:border-transparent" id="comment" placeholder="Enter your comment" name="comment" rows={5} cols={40} defaultValue={"    "} />
      </label> 

      






    </div>
    
    
    </>
  )
}

export default UserForm