#include <iostream>
#include <curl/curl.h>
#include "delete_user.h"
// libcurl库下载链接：https://curl.haxx.se/download.html
// 接口url
const static std::string update_user_url = "https://aip.baidubce.com/rest/2.0/face/v2/faceset/user/delete";
static std::string delete_user_result;

/**
 * curl发送http请求调用的回调函数，回调函数中对返回的json格式的body进行了解析，解析结果储存在全局的静态变量当中
 * @param 参数定义见libcurl文档
 * @return 返回值定义见libcurl文档
 */
static size_t callback(void *ptr, size_t size, size_t nmemb, void *stream) {
    // 获取到的body存放在ptr中，先将其转换为string格式
    delete_user_result = std::string((char *) ptr, size * nmemb);
    return size * nmemb;
}

/**
 * 调用添加用户接口，返回json格式的结果，具体格式解析见百度大脑文档
 * @param json_result 以string格式返回的json格式的结果
 * @param uid 用户id
 * @param access_token 以string格式传入的access token数据，access token获取方式见access_token获取相关文档及代码
 * @return 调用成功返回0，发生错误返回其他错误码
 */
int delete_user(std::string &json_result, const std::string &uid, const std::string &access_token) {
    std::string url = update_user_url + "?access_token=" + access_token;
    CURL *curl = NULL;
    CURLcode result_code;
    int is_success;
    curl = curl_easy_init();
    if (curl) {
        curl_easy_setopt(curl, CURLOPT_URL, url.data());
        curl_easy_setopt(curl, CURLOPT_POST, 1);
        curl_httppost *post = NULL;
        curl_httppost *last = NULL;
        curl_formadd(&post, &last, CURLFORM_COPYNAME, "uid", CURLFORM_COPYCONTENTS, uid.data(),
                     CURLFORM_END);
        curl_easy_setopt(curl, CURLOPT_HTTPPOST, post);
        curl_easy_setopt(curl, CURLOPT_WRITEFUNCTION, callback);
        result_code = curl_easy_perform(curl);
        if (result_code != CURLE_OK) {
            fprintf(stderr, "curl_easy_perform() failed: %s\n",
                    curl_easy_strerror(result_code));
            is_success = 1;
            return is_success;
        }
        json_result = delete_user_result;
        curl_easy_cleanup(curl);
        is_success = 0;
    } else {
        fprintf(stderr, "curl_easy_init() failed.");
        is_success = 1;
    }
    return is_success;
}





