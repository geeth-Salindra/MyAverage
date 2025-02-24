import './Header.css'

export default function Header(props){
return(
    <>
    <div className="title">
    <h1>{props.Title}</h1> 
    </div>

    <div>
    <h1 className='Sub-title'>{props.SUBTitle}</h1> 
    </div>

    <div>
    <h5 className='Sub2-title'>(You can calculate individual average marks and credits, but to obtain the overall average, all modules must be completed.)</h5> 
    </div>
    </>

);
}

//ITB Grade Calculator