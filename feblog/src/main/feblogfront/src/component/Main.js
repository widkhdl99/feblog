import TopNav from './layout/TopNav';
import SideNav from './layout/SideNav';
import WriteContentPage from '../lib/toastEditor.js';
import EditorBox from '../lib/test';
import "../css/main.css";

function Main(){
    return(
        <div>
            <TopNav/>
            <div className='main-container'>
                <div className='sub-container'>
                    <h5 className='sub-title'>최근에 작성한 게시물</h5>
                    <div className='sub-content'>
                        <ul>
                            <li>목록1</li>
                            <li>목록2</li>
                            <li>목록3</li>
                            <li>목록4</li>
                            <li>목록5</li>
                        </ul>
                    </div>
                </div>
                <div className='sub-container'>
                    <h5 className='sub-title'>최근에 본 게시물</h5>
                    <div className='sub-content'>
                        <ul>
                            <li>목록1</li>
                            <li>목록2</li>
                            <li>목록3</li>
                            <li>목록4</li>
                            <li>목록5</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main;