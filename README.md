# Control Panel
目前只有年份滑动轴和模式的下拉框能交互。
拖动年份会改变所有视图；改变模式下拉框（Provinces/Areas）可以切换地图的两个模式。

# Network View
显示某年30省份之间的地理加权碳差异图网络。
节点大小映射碳排放量。节点颜色映射聚类。
鼠标悬浮节点看到省份名称
# Sunburst View
显示某年30个省份的聚类情况以及省份的碳排放组成。
点击“Cluster_1”,“Shanxi”等可以下钻一层。
点击中间空白圆圈可以回到上一层
# Map View
Provinces模式：由红绿两色显示碳排放量。红色表示高于各省份碳排放量均值。绿色表示低于各省份碳排放均值。红色越深碳排放量越高。绿色越深碳排放量越低
Areas模式：
映射聚类结果
# TreeMap View
类内省份碳排放组成的加和平均。
在Parallel View中选择某一个矩形块，会改变TreeMap View。
# Parallel View
30省份20年的聚类变化。
点击矩阵块可以控制全局的年份选择（改变所有视图）和聚类选择（改变TreeMap View）
点击单条线可以看清该省份的聚类变化情况。
鼠标悬浮在线上可以看到省份名称。

# 安装依赖
在项目目录下运行npm install
# 项目启动
在项目目录下运行npm start
访问localhost:3000
