# win10安装liunx


## WSL 是什么？

WSL 是 **Windows Subsystem for Linux** 的简称, 可让开发人员在Windows 10下按原样运行 GNU/Linux 环境 - 包括大多数命令行工具、实用工具和应用程序 - 且不会产生虚拟机开销。说白一点，就是在windows 10 下安装 linux 系统，不需要借助虚拟机！

### 启用 Windows 子系统支持

在安装适用于 WSL 的任何 Linux 分发版之前，必须确保已启用“适用于 Linux 的 Windows 子系统”可选功能：

以管理员身份打开 PowerShell 并运行：

```csharp
Enable-WindowsOptionalFeature -Online -FeatureName Microsoft-Windows-Subsystem-Linux
```

 出现提示时，重启计算机。

**或者：**控制面板->程序和功能->启用或关闭Windows功能->勾选 适用于Linux的Windows子系统

![img](https://images2017.cnblogs.com/blog/723701/201801/723701-20180103223038768-1629438015.png)



### 下载 Linux 系统

我们先通过单击以下链接来下载并手动安装 Linux 发行版：

- [Ubuntu 18.04](https://aka.ms/wsl-ubuntu-1804)（推荐）

建议下载 Ubuntu 18.04 ，后面的教程都是针对这个系统版本的。

### 安装 Linux 系统

将下载下来的 Ubuntu 系统添加到任何一个磁盘的根目录，比如这里我下载到 D 根目录，并重命名为 Ubuntu18.04.Appx（为了方便下一步执行命令）：

![img](https://static.wpdaxue.com/img/2020/03/20200324221831_wpdaxue_com.jpg)

在开始菜单中，找到 PowerShell，然后右键，选择“以管理员身份运行”：

![img](https://static.wpdaxue.com/img/2020/03/20200324222003_wpdaxue_com.jpg)

在出现的界面中，输入下面的命令进入到安装包所在的磁盘，比如这里是 D盘：

```csharp
cd D:
```

然后输入下面的代码进行安装（注意根据你的安装包名称修改下面的命令）：

```php
Add-AppxPackage .\Ubuntu18.04.Appx
```

![img](https://static.wpdaxue.com/img/2020/03/20200324222158_wpdaxue_com.jpg)

执行完上面的步骤，就可以在开始菜单中，看到 Ubuntu 的图标，点击运行它：

![img](https://static.wpdaxue.com/img/2020/03/20200324222505_wpdaxue_com.jpg)

首次运行新安装的系统时，会打开一个控制台窗口，其中指出需要等待一两分钟时间来完成安装。

![img](https://static.wpdaxue.com/img/2020/03/20200324222808_wpdaxue_com.jpg)

> 在这最后一个安装阶段，系统的文件将会解压缩，并存储在电脑上供你使用。 这可能需要一分钟或更长时间，具体取决于电脑存储设备的性能。 仅当初次安装时，才需要执行此初始安装阶段 - 将来在不到一秒内即可启动子系统。

如上图所示，等待一段时间就会出现提示你输入一个用户名，然后输入密码。

> 运行系统实例时，系统不会提示你输入密码，但**如果使用 `sudo` 提升了进程的权限，则需要输入密码**，因此请确保选择一个容易记住的密码！

到这里，我们就安装和初始化 Ubuntu 系统了。

今天就先到这，下来我们将讲解 Ubuntu 系统优化和更新，然后就是配置 [LNMP](https://www.wpdaxue.com/tag/lnmp) 本地开发环境等。
