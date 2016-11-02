<?php
/**
 * @name Bootstrap
 * @desc 所有在Bootstrap类中, 以_init开头的方法, 都会被Ap调用,
 * 这些方法, 都接受一个参数:Ap_Dispatcher $dispatcher
 * 调用的次序, 和申明的次序相同
 * @author 黄林浩(huanglinhao@baidu.com)
 */
class Bootstrap extends Ap_Bootstrap_Abstract{

    /**
     * @brief 初始化路由
     *
     * @param dispatcher 分发器
     * @return void
     * @author huanglinhao
     * @date 2016/06/13 15:09:36
    **/
    public function _initRoute(Ap_Dispatcher $dispatcher) {
        //在这里注册自己的路由协议,默认使用static路由
    }

    /**
     * @brief 初始化插件
     *
     * @param dispatcher 分发器
     * @return void
     * @author huanglinhao
     * @date 2016/06/13 15:09:36
    **/
    public function _initPlugin(Ap_Dispatcher $dispatcher) {
        //注册saf插件
        $objPlugin = new Saf_ApUserPlugin();
        $dispatcher->registerPlugin($objPlugin);
    }

    /**
     * @brief 初始化视图
     *
     * @param dispatcher 分发器
     * @return void
     * @author huanglinhao
     * @date 2016/06/13 15:09:36
    **/
    public function _initView(Ap_Dispatcher $dispatcher){
        //在这里注册自己的view控制器，例如smarty,firekylin
        $dispatcher->disableView();//禁止ap自动渲染模板
    }

    /**
     * @brief 初始化模块
     *
     * @param dispatcher 分发器
     * @return void
     * @author huanglinhao
     * @date 2016/06/13 15:09:36
    **/
    public function _initDefaultName(Ap_Dispatcher $dispatcher) {
        //设置路由默认信息
        //$dispatcher->setDefaultModule('Index');
        $dispatcher->setDefaultController('Main');
    }
}