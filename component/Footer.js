function Foot({left, rd, clearInput, session}) {
    return ( 
        <div className='flex flex-row bg-lime-200 justify-between h-14 rounded-md'>
            <div className='flex align-middle'>
                <p className='my-auto ml-2 lg:ml-4'>{left} items left</p>
            </div>
            <div className='flex align-middle'>
                <button className='bg-lime-400 rounded px-1 m-1 lg:m-2 hover:bg-lime-600' role="button" onClick={()=>{rd.getAll()}}>All</button>
                <button className='bg-lime-400 rounded px-1 m-1 lg:m-2 hover:bg-lime-600' role="button" onClick={()=>{rd.getActiveData()}}>Active</button>
                <button className='bg-lime-400 rounded px-1 m-1 lg:m-2 hover:bg-lime-600' role="button" onClick={()=>{rd.getCompleteData()}}>Completed</button>
            </div>
            <div className='flex align-middle'>
                <button  className='bg-lime-400 rounded px-1 m-2 lg:m-2 hover:bg-lime-600' onClick={()=>{rd.removeAllData(session.session.user.email); clearInput('')}}>Clear All</button>
            </div>
        </div>
     );
}

export default Foot;