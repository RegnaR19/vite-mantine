// основная страница новостей
import NewsCard from './NewsCard';

const NewsPage = () => {
   return (
      <>
         Страница новостей
         <NewsCard width='200px' height='200px'>
            Привет
         </NewsCard>
      </>
   );
}

export default NewsPage;