
type Introducer = {
    keyWords: string;
    header: string;
    description?: string;
}

export default function Introducer(props : Introducer ) {

  return (
    <div className="text-5xl leading-relaxed font-tiltNeon ">
    <div  className="w-32 h-10 text-sm common-style-item shadow-sm flex items-center justify-center gap-x-2 opacity-80">
      <svg
        className="dark:fill-white "
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        width="13px"
        height="13px"
        viewBox="0 0 13 13"
        fill="currentColor"
      >
        <path
          fill="currentColor"
          d="M5.6,12.6c-0.5-0.8-0.7-2.4-1.7-3.5c-1-1-2.7-1.2-3.5-1.7C-0.1,7-0.1,6,0.4,5.6c0.8-0.5,2.3-0.6,3.5-1.8
                  C5,2.8,5.1,1.2,5.6,0.4C6-0.1,7-0.1,7.4,0.4c0.5,0.8,0.7,2.4,1.8,3.5c1.2,1.2,2.6,1.2,3.5,1.7c0.6,0.4,0.6,1.4,0,1.7
                  C11.8,7.9,10.2,8,9.1,9.1c-1,1-1.2,2.7-1.7,3.5C7,13.1,6,13.1,5.6,12.6z"
        ></path>
      </svg>
      {props.keyWords}
    </div>
    <div className=' font-semibold text-purple-700 dark:text-pink-200'>
     <h1 className="">{props.header}</h1>
     <h2>{props.description}</h2>
     </div>
    </div>
  );
}
