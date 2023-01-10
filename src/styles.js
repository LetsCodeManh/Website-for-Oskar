const styles = {
  flexRow: "flex flex-row gap-3",
  flexCol: "flex flex-col gap-3",
  flexCol2: "flex flex-col gap-2",
  accordionButton:
    "bg-primary text-dark w-full text-left py-3 px-5 text-lg outline-none border-b-2 border-dark hover:bg-secondary hover:text-light transition-colors flex justify-between cursor-pointer",
  accordionTextarea: "flex flex-col py-3 px-5 bg-light text-dark gap-3 text-sm",
  accordionHeading: "text-base font-medium font-poppins",
  formContainer: "relative mb-6 w-full font-poppins",
  formInput:
    "block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-secondary peer",
  formLabel:
    "peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 origin-[0] peer-focus:left-0 peer-focus:text-secondary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6",
  formLabelImportant: "text-red-600",
  formButton:
    "w-full bg-primary py-2 rounded-lg hover:bg-secondary hover:text-light transform duration-300",
  headingLevelOne: "font-cabin text-4xl font-medium text-center",
  headingLevelTwo: "font-cabin text-3xl font-medium",
  headingLevelThree:
    "font-josefin font-light text-sm uppercase tracking-widest",
  headingLevelFour: "font-oxygen font-light text-sm",
  paragraph: "text-sm font-light",
  headingLevelFive: "font-cabin text-xl font-medium",
};

const heading = {
  levelOne: "font-cabin font-medium",
  levelTwo: "font-oxygen font-light",
  levelThree: "font-poppins font-normal",
  levelFour: "font-josefin font-light uppercase tracking-widest",
  paragraph: "font-poppins font-normal",
};

const layout = {
  flexCenter: "flex flex-col justify-center items-center",
  flexBetween: "flex flex-col justify-between items-center",
  box: "flex flex-col sm:flex-row sm:m-6 lg:w-[1000px lg:mx-auto",
  boxContainer: "flex flex-col lg:w-[1000px] lg:mx-auto sm:m-6 ",
  boxCard: "flex flex-col shadow-md mb-6 overflow-hidden sm:rounded-[1rem]",
  boxImage: "aspect-video sm:aspect-auto sm:w-1/2",
  boxImageObject: "object-cover object-center",
  boxText: "sm:w-1/2 flex flex-col gap-3 p-6",
  boxTextReverse: "  h-[300px] overflow-scroll",
};

const component = {
  button: "font-poppins text-dark rounded-xl border-2 px-3 py-2 transition-all",
  buttonHover:
    "hover:-translate-y-1 hover:shadow-md focus:-translate-y-0 focus:shadow-none",
  buttonDisable: "-translate-y-1 shadow-md bg-primary",
};

export default styles;
export { heading, layout, component };
