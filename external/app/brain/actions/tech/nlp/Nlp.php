<?php
/**
 * Copyright (C) 2017 Baidu, Inc. All Rights Reserved.
 */

/**
 * Created by PhpStorm.
 * User: songqingyun
 * Date: 2017/3/6
 * Time: 下午3:09
 */
class Action_Nlp extends Ap_Action_Abstract{
    public function execute(){
        $arrPageInfo['page'] = "nlp";
        Brain_Output::htmlOutput(
            $arrPageInfo,
            "brain/platform/secondary/nlp.tpl"
        );
    }
}