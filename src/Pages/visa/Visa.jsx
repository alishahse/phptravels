import VisaForm from "../../components/module/visacomponents/VisaForm";

const Visa = () => {

  return (
  <>
   <div className="relative w-full">
  <div className="relative w-full h-105 md:h-130 overflow-hidden">
    
    {/* Image */}
    <img 
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpEi3T4YFhahyuyNK2kz3w-54F5oSSo41sTw&s" 
      alt="visa-image" 
      className="w-full h-full object-cover" 
    />

    {/* Overlay - Screenshot ke mutabiq Blue Gradient use kiya hai */}
    <div className="absolute inset-0 bg-blue-600/80 mix-blend-multiply"></div> 

    {/* Content */}
    <div className="absolute inset-0 flex flex-col items-center justify-center px-4">
      <h1 className="text-white text-2xl md:text-3xl font-bold mb-8">
        Submit Your Visa Today
      </h1>
      <VisaForm />
    </div>

  </div>
</div>
 </>
     
  );
};

export default Visa;