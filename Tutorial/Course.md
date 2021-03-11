## 物理引擎的重心与图片中心
![center_of_gravity](https://user-images.githubusercontent.com/34769581/110727279-e3c37280-8255-11eb-9a9f-c6c110f66ae3.png)

## 坐标系差异

![coordinate_system](https://user-images.githubusercontent.com/34769581/110732728-acf25a00-825f-11eb-98d0-1f9c90312c58.png)

屏幕坐标系，通常是以左上角为坐标原点(0,0)
![矫正坐标前_1](https://user-images.githubusercontent.com/34769581/110744484-b89c4b80-8274-11eb-9d2a-3ecfeb53d7cf.gif)

![混合显示](https://user-images.githubusercontent.com/34769581/110744511-c356e080-8274-11eb-946b-12c7a0723759.gif)

![矫正坐标](https://user-images.githubusercontent.com/34769581/110744519-c782fe00-8274-11eb-9693-787d0a3a6476.gif)


## 凹多边形
对于突多边形的碰撞检测，只需遍历每个多边形的边，两两进行碰撞判断即可，运算复杂度较低。但对于凹多边形，碰撞检测的运算量和复杂度迅速提升，不宜直接进行运算，因此需要把一个凹多边形，拆分成若干个突多边形的组合，然后再运用突多边形的算法进行碰撞检测。

Matter.js提供了凹多边形处理模块，我们可以传入一个凹多边形的点数组，由Matter.js进行预处理，自动拆分成若干个凸多边形。但对于一些复杂物体，我们也可以运用物理编辑器进行精细的编辑，确保拆分的凸多边形模块符合物体的实际形状描述，如PhysicsEditor。

![poly](https://user-images.githubusercontent.com/34769581/110730938-5c2d3200-825c-11eb-9b05-225b7b594dd3.png)

上图左边是一个凸多边形，凸多边形的特点就是，每个内角均不超过180度。右图是凸多边形，凸多边形有至少一个内角大于180度。右图拆分成3个部分之后，每个子部分就都是一个凸多边形。
