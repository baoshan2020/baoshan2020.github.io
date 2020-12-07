# sql


复制表结构

 select * into qidichuangxingongzhang --new

 from  ygyzspb2  --old

 where 1=2

复制表数据

insert into qidichuangxingongzhang  select * from  ygyzspb2



快速转换成日期

select convert(char,列名,111) ，convert(char(10),列名,120)  from tablename 							

常用的方法

Select CONVERT(varchar(100), GETDATE(), 8): 10:57:46
 Select CONVERT(varchar(100), GETDATE(), 24): 10:57:47
 Select CONVERT(varchar(100), GETDATE(), 108): 10:57:49
 Select CONVERT(varchar(100), GETDATE(), 12): 110516
 Select CONVERT(varchar(100), GETDATE(), 23): 2011-05-16



查询60天之前的数据

select dateadd(d,-60,getdate())





--统计单个表 占用空间的大小
exec sp_spaceused 'CustomModule_2013117142926640'



在视图里用 TOP (100) PERCENT 可以用order by 语句



select  TOP (100) PERCENT name from gongsiweihu2020 where  subgroup='控股' and zt<>'禁用' order by name
