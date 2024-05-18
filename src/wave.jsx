import { React, useEffect} from 'react';
import './wave.css'; // 스타일을 위한 CSS 파일
import Header from './Header';
import CloseIcon from '@mui/icons-material/Close';
import { useNavigate } from 'react-router-dom';

function WaveComponent() {

    const navigate = useNavigate();

    const goBefore = () => {
        navigate("/next");
      };

      useEffect(() => {
        const timer = setTimeout(() => {
            navigate('/next'); // 3초 후에 홈 경로로 리다이렉트
        }, 6000);

        return () => clearTimeout(timer); // 컴포넌트 언마운트 시 타이머 클리어
    }, [navigate]);

    return (
        <>
        <div className='waveForm'>
            <div class="wave -one"></div>
            <div class="wave -two"></div>
            <div class="wave -three"></div>
            <div className="post-next">
                <div className="content">
                    <div className="left-section">
                    </div>
                    <div className='video-container'>
                        <div className="video-placeholder"></div>
                    </div>
                </div>
            </div>
        </div>
        </>
        
    );
  }
  
  export default WaveComponent;
