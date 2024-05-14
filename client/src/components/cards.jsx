

//icon: square, title: "Fully Customizable", desc:
const Cards = ({ icon, title, desc }) => (
  
  <div className="flex justify-between flex-col px-6 py-6 rounded-[20px] bg-colorCard  max-w-[320px] md:mr-10 sm:mr-5 mr-0 my-5">
     <div className="flex justify-center">
     <div className="rounded-[20px] bg-colorImg px-6 py-6 my-2 max-w-[100px] hover:bg-gradient-to-r from-fuchsia-400 to-violet-500">
      <img src={icon} className="w-[48px] h-[48px] " />
    </div>
     </div>
   

    <div className="flex flex-col ml-4">
      <h4 className="font-poppins font-semibold text-[20px] text-center leading-[28px] py-6 text-white">
        {title}
      </h4>
      <p className="font-poppins font-normal text-[16px] leading-[24px] text-center text-dimWhite">
        {desc}
      </p>
    </div>

  </div>
);


export default Cards;