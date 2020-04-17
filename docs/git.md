# Git规范

> 禁止直接在master分支上直接进行开发
> 
> 每次功能开发，先新建功能分支（功能/bug修复），开发自测完成后，合并到dev分支
> 
> 再由测试人员测试。版本确定后合并到master分支，并打上tag

比较建议采用`pull requests`的方式进行团队合作

## 使用规范

* 保持最小功能块提交代码
* 提交代码时，简要说明更新内容

```git
git add .
git commit -m 增加系统日志展示模块


git add .
git commit -m 修复新建宾客缺少手机数据的bug
```
