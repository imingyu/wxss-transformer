/*转换单位，如rpx
rpx（responsive pixel）: 
可以根据屏幕宽度进行自适应。规定屏幕宽为750rpx。如在 iPhone6 上，屏幕宽度为375px，共有750个物理像素，则750rpx = 375px = 750物理像素，1rpx = 0.5px = 1物理像素。
*/

export var rpxToRem = (rpxValue, screenWidth) => {
    //size = root.fontSize * remValue;
    return 750 / screenWidth;
    /*
    1px=2rpx;
    =>1rpx=0.5px;
    =>
     */
}