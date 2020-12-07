# win10软件




# 1.win10 应用商店卸载后怎么安装？

尝试用管理员模式运行powershell，然后w输入如下命令重置metro应用(恢复速度取决于你曾经安装了应用的个数):



Get-AppXPackage -AllUsers | Foreach {Add-AppxPackage -DisableDevelopmentMode -Register "$($_.InstallLocation)\AppXManifest.xml"}



2.winget

3.
