import React from "react";
import triangleBg from '../imgs/bg-triangle.svg';
import paper from '../imgs/icon-paper.svg';
import scissors from '../imgs/icon-scissors.svg';
import rock from '../imgs/icon-rock.svg';
function Home() {
    return (
        <>
            <div className=" pt-7 flex flex-row justify-center">
                <div className='text-white basis-1/2 font-bold text-xl border border-white-900 rounded-lg max-w-md flex flex-row justify-between '>
                    <div className="max-w-0 pl-2">ROCK PAPER SCISSORS</div>
                    <div className="m-2 bg-neutral-200 text-black flex flex-col justify-center items-center rounded-lg">
                        <div className="pr-2 pl-2">SCORE</div>
                        <div>12</div>
                    </div>
                </div>
            </div >
            {/* <div className="flex flex row justify-center pt-20">
                <img src={triangleBg}></img>
            </div> */}
            <div className="bg-no-repeat bf-triangle-div bg-center" style={{ backgroundImage: `url(${triangleBg})` }}>
                <div className="flex flex-row justify-center pt-16">
                    <div className="w-1/3 flex flex-row justify-between">
                        <img src={paper} className="w-28 h-28 rounded-full p-3 ring-8 ring-blue-400 bg-white "></img>
                        <img src={scissors} className="w-28 h-28 bg-white rounded-full p-3 ring-8 ring-yellow-400"></img>
                    </div>
                </div>
                <div className="flex flex-row justify-center pt-20">
                    <img src={rock} className="w-28 h-28 bg-white rounded-full p-3 ring-8 ring-red-500"></img>
                </div>
            </div>
        </>
    );
  }
  
  export default Home;