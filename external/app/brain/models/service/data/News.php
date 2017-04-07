<?php
/**
 * Created by PhpStorm.
 * User: songqingyun
 * Date: 2017/3/8
 * Time: 下午5:41
 */
class Service_Data_News{

    protected $newsDao;
    protected $newsTagDao;

    public function __construct()
    {
        $this ->newsDao = new Dao_News();
        $this ->newsTagDao = new Dao_NewsTag();
    }

    /**
     * 获取最新的新闻ID
     * @param
     * @return int 最新的新闻ID
     * @author songqingyun
     */
    public function getNewsLastId(){
        $news = $this->newsDao->getNewsList(0,1);
        if (empty($news)){
            return 1;
        }
        return $news[0]['id'];
    }

    /**
     * 获取特定tag的某一页面offset的新闻列表
     * 默认缓存10分钟
     * @param $tag
     * @param $offset
     * @return
     */
    public function getNewsListByTagAndOffset($tag, $offset)
    {
        if(0 > $offset){
            $offset = 0;
        }
        $newsList_key = 'ai_platform_news_tag_'.$tag.'_offset_'.$offset;
        $newsList_value = Brain_Memcache::get($newsList_key);
        if(!empty($newsList_value)){
            //echo "新闻列表，命中缓存...";
            $newsList = $newsList_value;
            /*echo $newsList_key;
            echo "<br>";
            for($i=0;$i<count($newsList);$i++){
                foreach($newsList[$i] as $x=>$x_value){
                    echo "Key=" . $x . ", Value=" . $x_value;
                    echo "<br>";
                }
            }*/
            return $newsList;
        } else {
            //echo "新闻列表，未命中缓存...";
            if('0' == $tag){
                $newsStart = ''.(($offset) * 10);
                $newsList = $this->newsDao->getNewsList($newsStart,'10');
            }else{
                //查询t_news_tag表，找出第offset页的news_id;
                $newsStart = ''.(($offset) * 10);
                $newsIdList = $this ->newsTagDao->getTagNewsIdList($tag,$newsStart,'10');
                //查询t_news表，逐一查询每条news_id对应的记录;
                $newsList = array();
                for($i=0;$i<count($newsIdList);$i++){
                    foreach($newsIdList[$i] as $x=>$x_value){
                        $tagNewsElement = $this->newsDao->getNews(''.$x_value);
                        for($j=0;$j<count($tagNewsElement);$j++){
                            array_push($newsList, $tagNewsElement[$j]);
                        }
                    }
                }
                   /* for($index=0; $index<$count; $index++){
                        $newsList[$index] = $this->newsDao->getNews($newsIdList[$index]);
                    }*/
            }
            Brain_Memcache::set($newsList_key, $newsList, Lib_Const::NEWS_CACHE_TIME);
            return $newsList;
        }
    }

    /**
     * 获取特定tag的总页数
     * 默认缓存10分钟
     * @param $tag
     * @return
     */
    public function getPaginationByTag($tag)
    {
        $tag_pagination = 'ai_platform_news_tagpagination_'.$tag;
        $tag_pagination_total = Brain_Memcache::get($tag_pagination);
        if(!empty($tag_pagination_total)){
            //echo "分页信息，命中缓存...";
            $total = $tag_pagination_total;
            /*echo $tag_pagination;
            echo "<br>";
            echo $total;*/
            return $total;
        } else {
            //echo "分页信息，未命中缓存...";
            $tagNewsCount = $this ->newsTagDao->getTagNewsCount($tag);
            $total = ''.ceil( (intval($tagNewsCount))/10);
            Brain_Memcache::set($tag_pagination, $total, Lib_Const::NEWS_CACHE_TIME);
            return $total;
        }
    }

}