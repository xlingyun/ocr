/*
 * Copyright (C) 2017 Baidu, Inc. All Rights Reserved.
 */
package com.baidu.ai.aip.face;

import com.baidu.ai.aip.utils.Base64Util;
import com.baidu.ai.aip.utils.FileUtil;
import com.baidu.ai.aip.utils.HttpUtil;

import java.net.URLEncoder;

/**
 * 人脸查找——更新
 */
public class Update {

    /**
     * 代码中所需工具类
     * FileUtil,Base64Util,HttpUtil请从
     * https://ai.baidu.com/file/BA73D199EED14D8AA5FC5A4BF4BDDA34
     * https://ai.baidu.com/file/C8D81F3301E24D2892968F09AE1AD6E2
     * https://ai.baidu.com/file/88C6E86FB5D141889391693FC84504B1
     * 下载
     */
    
    public static void main(String[] args) {
        // 人脸查找——更新 url
        String updateUrl = "https://aip.baidubce.com/rest/2.0/face/v2/faceset/user/update";
        // 请求参数
        // 已经注册的用户ID
        String uid = "test_user_1";
        // 本地文件路径
        String filePath1 = "#####本地文件路径#####";
        String filePath2 = "#####本地文件路径#####";
        try {
            byte[] imgData1 = FileUtil.readFileByBytes(filePath1);
            byte[] imgData2 = FileUtil.readFileByBytes(filePath2);

            String imgStr1 = Base64Util.encode(imgData1);
            String imgStr2 = Base64Util.encode(imgData2);

            String params = "uid=" + uid + "&" + URLEncoder.encode("images", "UTF-8") + "="
                    + URLEncoder.encode(imgStr1 + "," + imgStr2, "UTF-8");
            /**
             * 线上环境access_token有过期时间， 客户端可自行缓存，过期后重新获取。
             */
            String accessToken = "#####调用鉴权接口获取的token#####";
            String result = HttpUtil.post(updateUrl, accessToken, params);
            System.out.println(result);
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}