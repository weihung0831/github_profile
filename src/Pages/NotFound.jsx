import { useNavigate } from 'react-router-dom'
import { 
    NotFoundContainer, 
    NotFoundTitle, 
    NotFoundSubtitle, 
    NotFoundText, 
    NotFoundButton 
} from '../Styles/NotFoundStyle';

function NotFound() {
    const navigate = useNavigate();

    const handleGoHome = () => {
        navigate('/');
    };

    return (
        <NotFoundContainer>
            <NotFoundTitle>404</NotFoundTitle>
            <NotFoundSubtitle>頁面不存在</NotFoundSubtitle>
            <NotFoundText>很抱歉，您嘗試訪問的頁面不存在或已被移除。</NotFoundText>
            <NotFoundButton 
                onClick={handleGoHome}
            >
                返回主頁
            </NotFoundButton>
        </NotFoundContainer>
    )
}

export default NotFound
