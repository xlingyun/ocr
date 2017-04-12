<?php

/**
 * Created by PhpStorm.
 * User: songqingyun
 * Date: 2017/3/8
 * Time: 下午5:41
 */
class Service_Data_News
{

    protected $newsDao;
    protected $newsTagDao;

    public function __construct()
    {
        $this->newsDao = new Dao_News();
        $this->newsTagDao = new Dao_NewsTag();
    }

    /**
     * 获取最新的新闻ID
     * @return int 最新的新闻ID
     * @author songqingyun
     */
    public function getNewsLastId()
    {
        $news = $this->newsDao->getNewsList(0, 1);
        if (empty($news)) {
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
        if (1 > $offset) {
            $offset = 1;
        }
        $newsList_key = 'ai_platform_news_tag_' . $tag . '_offset_' . $offset;
        $newsList_value = Brain_Memcache::get($newsList_key);
        if (empty($newsList_value)) {
            if ('0' == $tag) {
                $newsStart = '' . (($offset - 1) * 10);
                $newsList = $this->newsDao->getNewsList($newsStart, '10');
            } else {
                $newsStart = '' . (($offset - 1) * 10);
                $newsIdList = $this->newsTagDao->getTagNewsIdList($tag, $newsStart, '10');
                $newsList = array();
                if(!empty($newsIdList)){
                    $newsIds = array();
                    foreach ($newsIdList as $x_value) {
                        $newsIds[] = $x_value['news_id'];
                    }
                    $newsList = $this->newsDao->getNewsListByNewsIdList($newsIds);
                }
            }
            Brain_Memcache::set($newsList_key, $newsList, Lib_Const::NEWS_CACHE_TIME);
            return $newsList;
        } else {
            $newsList = $newsList_value;
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
        $tag_pagination = 'ai_platform_news_tagpagination_' . $tag;
        $tag_pagination_total = Brain_Memcache::get($tag_pagination);
        if (empty($tag_pagination_total)) {
            if ('0' === $tag) {
                $tagNewsCount = $this->newsDao->getNewsCount();
            } else {
                $tagNewsCount = $this->newsTagDao->getTagNewsCount($tag);
            }
            if(empty($tagNewsCount)){
                $total = '0';
            }else{
                $total = '' . ceil(intval($tagNewsCount) / 10);
            }
            Brain_Memcache::set($tag_pagination, $total, Lib_Const::NEWS_CACHE_TIME);
            return $total;
        } else {
            $total = $tag_pagination_total;
            return $total;
        }
    }

}