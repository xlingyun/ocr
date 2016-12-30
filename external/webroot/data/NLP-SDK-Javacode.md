#Java SDK文档

本文档主要介绍NLP Java SDK的安装和使用。在使用本文档前，您需要先了解自然语言处理（Natural Language Processing）的基础知识，并已经开通了服务。

# 安装BFR Java SDK

**BFR Java SDK目录结构**

    com.baidu.aip
           ├── auth                                //签名相关类
           ├── http                                //Http通信相关类
           ├── client                              //公用类
           ├── exception                           //exception类
           ├── nlp
           │    ├── AipNlp                         //AipNlp类
           │    ├── ESimnetType                    //枚举类
           │    ├── EWsegType                      //枚举类
           │    └── NlpLangId                      //分词语言枚举类
           └── util                                //工具类


**直接使用JAR包**

步骤如下：

1.在[官方网站](https://api.baidu.com/doc/Developer/index.html)下载Java SDK压缩工具包。

2.将下载的`aip-java-sdk-version.zip`解压后，复制到工程文件夹中。

3.在Eclipse右键“工程 -> Properties -> Java Build Path -> Add JARs”。

4.添加SDK工具包`lib/api-java-sdk-version.jar`和第三方依赖工具包`third-party/*.jar`。

其中，`version`为版本号，添加完成后，用户就可以在工程中使用BFR Java SDK。


# 快速入门

1.初始化一个AipNlpClient。

AipNlpClient是与Natural Language Processing（NLP）交互的客户端，所有NLP操作都是通过AipNlpClient完成的。您可以参考[新建AipNlpClient](#新建AipNlpClient)，完成初始化客户端的操作。

# AipNlpClient

## 新建AipNlpClient

新建AipNlpClient是Natural Language Processing的Java客户端，为使用Natural Language Processing的开发人员提供了一系列的交互方法。

用户可以参考如下代码新建一AipNlpClient：

```java
public class Sample {
    public static void main(String[] args) {

        //设置APPID/AK/SK
        String APP_ID = "your-app-id";
        String API_KEY = "your-access-key-id";
        String API_SECRET = "your-secret-access-key";

        // 初始化一个BFRClient
        AipNlp client = new AipNlp(APP_ID, API_KEY, API_SECRET);
    }
}
```
在上面代码中，常量`APP_ID`在百度云控制台中创建，常量`API_KEY`与`API_SECRET`是由系统分配给用户的，均为字符串，用于标识用户，为访问BFR做签名验证。其中`API_KEY`对应控制台中的“Access Key ID”，`SECRET_ACCESS_KEY`对应控制台中的“Access Key Secret”，获取方式请参考[获取AK/SK](../Reference/GetAKSK)。

# 分词

举例，要对字符串'你好百度'进行分词：

```java
public void wordseg(AipNlp client) {

    // 使用默认语言分词
    JSONObject response = client.wordseg("百度是一个搜索公司");
    System.out.println(response.toString());

    // 使用指定语言分词
    JSONObject response = client.wordseg("百度是一个搜索公司", NlpLangId.LANG_CHINESE);
    System.out.println(response.toString());
}
```

**分词 请求参数详情**

| 参数 | 类型 | 描述 | 是否必须 |
| :---- | :---- | :---- | :---- |
|query|String|待分词的文本，目前输入编码统一为GBK|是|
|lang_id|Int|默认为1，输入字符串的语言对应的id，简体中文设置为1（目前不支持其他语言）|否|

**分词 返回数据参数详情**

| 参数 | 类型 | 描述 |
| :---- | :---- | :---- |
|wordsepbuf|String|基本词粒度结果，以\t分割|
|wsbtermcount|Int|基本词粒度输出的词个数|
|wsbtermoffsets|Int[]|该参数为列表，元素个数为切分出来的词个数，每个元素值表示对应的基本词在被切分文本的起始位置（字节偏移）|
|wsbtermpos|String|参数值为列表，元素值为对应切分出来的基本词在 wordsepbuf的字节偏移以及长度，整数的低24bit为偏移，高8bit为长度|
|wpcompbuf|String|混排粒度结果，以\t分割|
|wpbtermcount|Int|混排粒度输出的词个数|
|wpbtermoffsets|Int[]|该参数为列表，元素个数为切分出来的词个数，每个元素值表示对应的词是从第几个基本词开始的（基本词偏移）|
|wpbtermpos|Int[]|参数值为列表，元素值为对应切分出来的词在 wpcompbuf的字节偏移以及长度，整数的低24bit为偏移，高8bit为长度|
|subphrbuf|String|所有识别出来的短语，以\t分割|
|spbtermcount|Int|识别出来的短语个数|
|spbtermoffsets|Int[]|该参数为列表，元素个数为识别出来的短语个数，每个元素值表示对应短语是从第几个基本词开始的（基本词偏移）|
|spbtermpos|Int[]|参数值为列表，元素值为对应切分出来的短语在 subphrbuf的字节偏移以及长度，整数的低24bit为偏移，高8bit为长度|

# 词性标注

举例，要对字符串'你好百度'进行词性标注：

```java
public void wordseg(AipNlp client) {

    // 使用词性标注接口
    JSONObject response = client.wordpos("百度是一个搜索公司");
    System.out.println(response.toString());

}
```

**词性标注 请求参数详情**

| 参数 | 类型 | 描述 | 是否必须 |
| :---- | :---- | :---- | :---- |
|query|String|必须，待分词的文本，目前输入编码统一为GBK|是|

**词性标注 返回数据参数详情**

| 参数 | 类型 | 描述 |
| :---- | :---- | :---- |
|result_out|object[]|人脸属性对象的集合|
|+word|String|词汇的字面|
|+offset|Int|偏移量，以基本粒度词汇为单位|
|+length|Int|长度，以基本粒度词汇为单位|
|+type|String|词性|
|+confidence|double|置信度分值，0~1|

# 词向量

举例，传入一个词计算词的的词向量，或者传入两个词计算两者相似度：

```java
public void wordembedding(AipNlp client) {

    // 获取一个词的词向量
    JSONObject response = client.wordembedding("百度");
    System.out.println(response.toString());

    // 获取两个词的相似度结果
    JSONObject response = client.wordembedding("百度", "谷歌");
    System.out.println(response.toString());
}
```

**词向量 请求参数详情**

| 参数 | 类型 | 描述 | 是否必须 |
| :---- | :---- | :---- | :---- |
|query1|String|输入的第一个词，目前输入编码统一为GBK;|是|
|query2|String|输入的第二个词，目前输入编码统一为GBK;|是|

**词向量 返回数据参数详情**

| 参数 | 类型 | 描述 |
| :---- | :---- | :---- |
|ret|Int|人脸属性对象的集合|
|message|String|词汇的字面|
|data|object|返回数据|
|+vec|object|词向量结果|
|+sim|object|相似度对象|
|++sim|double|相似度|

# 中文DNN语言模型

举例，传入短语，计算中文DNN语言模型：

```java
public void dnnlmCn(AipNlp client) {

    // 获取中文DNN语言模型
    JSONObject response = client.dnnlmCn("百度是个搜索公司");
    System.out.println(response.toString());

}
```
**中文DNN语言模型 请求参数详情**

| 参数 | 类型 | 描述 | 是否必须 |
| :---- | :---- | :---- | :---- |
|sequence|String|输入的句子，不需要切词|是|

**中文DNN语言模型 返回数据参数详情**

| 参数 | 类型 | 描述 |
| :---- | :---- | :---- |
|ret|Int|人脸属性对象的集合|
|message|String|词汇的字面|
|data|object|返回数据|
|+result|object|词向量结果|
|++seq_prob|double[]|相似度对象|
|++seq_seg|String[]|切词结果|

# 短文本相似度

举例，传入两个短文本，计算相似度：

```java
public void simnet(AipNlp client) {

    // 获取两个文本的相似度
    JSONObject response = client.simnet("百度是个搜索公司", "谷歌是个搜索公司");
    System.out.println(response.toString());

}
```

**短文本相似度 请求参数详情**

| 参数 | 类型 | 描述 | 是否必须 |
| :---- | :---- | :---- | :---- |
|query1|String|输入的第一个词，目前输入编码统一为GBK;|是|
|query2|String|输入的第二个词，目前输入编码统一为GBK;|是|

**短文本相似度 返回数据参数详情**

| 参数 | 类型 | 描述 |
| :---- | :---- | :---- |
|output|object|返回对象|
|+score|double||
|+type|Int||
|+error|Int||
|+error-node|String||

# 情感观点挖掘

举例，传入评论文本，获取情感属性：

```java
public void NLPCommentTag(AipNlp client) {

    // 获取美食评论情感属性
    JSONObject response = client.NLPCommentTag("百度是个搜索公司");
    System.out.println(response.toString());

    // 获取酒店评论情感属性
    JSONObject response = client.NLPCommentTag("喜来登酒店不错", ESimnetType.HOTEL);
    System.out.println(response.toString());
}
```

**情感观点挖掘 请求参数详情**

| 参数 | 类型 | 描述 | 是否必须 |
| :---- | :---- | :---- | :---- |
|comment|String|评论字符串，目前输入编码统一为GBK;|是|
|type|ESimnetType|HOTEL,KTV,BEAUTY,FOOD,TRAVEL,HEALTH,EDU,BUSINESS,HOUSE,CAR,LIFE,SHOPPING|否|

**情感观点挖掘 返回数据参数详情**

| 参数 | 类型 | 描述 |
| :---- | :---- | :---- |
|tags|object[]|返回标签|
|+key|String|评论标签(属性词+评论词)|
|+prop_adv_adj|String|加副词的评论标签|
|+neg_adv|String|加副词的评论标签|
|+neg_adv_pos|String|词向量结果|
|+fea|String|原属性词|
|+prop|String|属性词(归一化)|
|+adj|String|评论词|
|+abstract|String|抽取摘要|
|+begin_pos|Int|词向量结果|
|+end_pos|Int|词向量结果|
|+cluster|String|分类|
|+freq|Int|词向量结果|
|+type|Int|类型:2 表示正面,0表示负面,1表示中立|
|+time|String|评论时间|
|+raw_prop|String|原始属性词|
|+raw_adj|String|原始评价词"|
|+raw_prop_begin_pos|Int|原始属性词的位置|
|+raw_adj_begin_pos|Int|词向量结果|
|+degree_adv|String|原始副词|
|+degree_adv_pos|Int|词向量结果|

# 版本更新说明

##

* 第一版
