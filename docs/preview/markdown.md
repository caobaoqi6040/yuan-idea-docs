---
title: Markdown
tags:
  - markdown
createTime: 2025/09/27 21:45:00
permalink: /article/ibmbos8n/
---

##  Flex 容器

- [official-docs](https://theme-plume.vuejs.press/guide/markdown/flex/)

::: details props

- 在 主轴 方向上，使用 center / between / around 指定对齐方式；
- 在 交叉轴 方向上，使用 start / center / end 指定对齐方式；
- 使用 gap="20" 指定间距；
- 使用 column 指定主轴方向为垂直方向。

:::

```shell
::: flex around center

| 列 1 | 列 2 | 列 3 |
| ---- | ---- | ---- |
| 1    | 2    | 3    |
| 4    | 5    | 6    |

| 列 1 | 列 2 | 列 3 |
| ---- | ---- | ---- |
| 1    | 2    | 3    |
| 4    | 5    | 6    |

:::
```

::: flex around center

| 列 1 | 列 2 | 列 3 |
|-----|-----|-----|
| 1   | 2   | 3   |
| 4   | 5   | 6   |

| 列 1 | 列 2 | 列 3 |
|-----|-----|-----|
| 1   | 2   | 3   |
| 4   | 5   | 6   |

:::

## card

- [official-docs](https://theme-plume.vuejs.press/guide/markdown/card/)

```shell
:::: card-grid
::: card title="卡片标题 1" icon="twemoji:astonished-face"

这里是卡片内容。
:::

::: card title="卡片标题 2" icon="twemoji:astonished-face"

这里是卡片内容。
:::
::::
```

:::: card-grid
::: card title="卡片标题 1" icon="twemoji:astonished-face"

这里是卡片内容。
:::

::: card title="卡片标题 2" icon="twemoji:astonished-face"

这里是卡片内容。
:::
::::

## 选项组

- [official-docs](https://theme-plume.vuejs.press/guide/markdown/tabs/)

````md
::: tabs
@tab npm

npm 应该与 Node.js 被一同安装。

@tab pnpm

```sh
corepack enable
corepack use pnpm@8
```

:::
````

::: tabs
@tab npm

npm 应该与 Node.js 被一同安装。

@tab pnpm

```sh
corepack enable
corepack use pnpm@8
```

:::

## 图片卡片

- [official-docs](https://theme-plume.vuejs.press/guide/components/image-card/)

```md
<CardGrid>
  <ImageCard
    image="https://cn.bing.com/th?id=OHR.AlfanzinaLighthouse_ZH-CN9704515669_1920x1080.webp"
    title="阿尔凡齐纳灯塔，阿尔加维，葡萄牙"
    description="..."
    href="/"
    author="Andreas Kunz"
    date="2024/08/16"
  />
  <ImageCard
    image="https://cn.bing.com/th?id=OHR.AlfanzinaLighthouse_ZH-CN9704515669_1920x1080.webp"
    title="阿尔凡齐纳灯塔，阿尔加维，葡萄牙"
    description="..."
    href="/"
    author="Andreas Kunz"
    date="2024/08/16"
  />
</CardGrid>
```

<CardGrid>
  <ImageCard
    image="https://cn.bing.com/th?id=OHR.AlfanzinaLighthouse_ZH-CN9704515669_1920x1080.webp"
    title="阿尔凡齐纳灯塔，阿尔加维，葡萄牙"
    description="..."
    href="/"
    author="Andreas Kunz"
    date="2024/08/16"
  />
  <ImageCard
    image="https://cn.bing.com/th?id=OHR.AlfanzinaLighthouse_ZH-CN9704515669_1920x1080.webp"
    title="阿尔凡齐纳灯塔，阿尔加维，葡萄牙"
    description="..."
    href="/"
    author="Andreas Kunz"
    date="2024/08/16"
  />
</CardGrid>

## bilibili

```shell
@[bilibili p1 autoplay time="0" width="100%" height="400px" ratio="16:9"](bvid aid cid)
```

@[bilibili p1 autoplay=false time="0" width="100%" height="400px" ratio="16:9"](BV1d8411Q76i)


## table

- [official-docs](https://theme-plume.vuejs.press/guide/markdown/table/#props)

::: details props

- `title(string-opt)`: 表格标题，显示在表格的下方
- `align(['left' | 'center' | 'right']-opt)`: 表格对齐方式
- `copy([boolean | 'all' | 'html' | 'md']-opt)`: 在表格的右上角显示复制按钮，可以复制为 html / markdown
- `maxContent(boolean-opt)`: 行内元素不再自动换行，超出容器宽度时表格显示滚动条
- `hl-rows="tip:1;warning:2;important:3,4"`
- `hl-cols="success:1;warning:2;danger:3,4"`
- `hl-cells="danger:(1,1)(2,2);success:(3,3)(4,4);warning:(1,4)(2,3);important:(3,2)(4,1)"`

:::

```shell
::: table title="这是表格标题" align="center" max-content
| ID | Description                                                                 | Status       |
|----|-----------------------------------------------------------------------------|--------------|
| 1  | This is an extremely long description that should trigger text wrapping in most table implementations. | In Progress  |
| 2  | Short text                                                                  | ✅ Completed |
:::
```

::: table title="这是表格标题" align="center" max-content
| ID | Description | Status |
|----|-----------------------------------------------------------------------------|--------------|
| 1 | This is an extremely long description that should trigger text wrapping in most table implementations. | In
Progress |
| 2 | Short text | ✅ Completed |
:::

## 图标

- [official-docs](https://theme-plume.vuejs.press/guide/markdown/icon/#%E8%AF%AD%E6%B3%95)
- [icon-sets.iconify](https://icon-sets.iconify.design/)

```shell
- home - <Icon name="material-symbols:home" color="currentColor" size="1em" />
- vscode - <Icon name="skill-icons:vscode-dark" size="2em" />
- twitter - <Icon name="skill-icons:twitter" size="2em" />
- idea - <Icon name="skill-icons:idea-dark" size="2em" />
```

- home - <Icon name="material-symbols:home" color="currentColor" size="1em" />
- vscode - <Icon name="skill-icons:vscode-dark" size="2em" />
- twitter - <Icon name="skill-icons:twitter" size="2em" />
- idea - <Icon name="skill-icons:idea-dark" size="2em" />

## 步骤

- [official-docs](https://theme-plume.vuejs.press/guide/markdown/steps/)

````md
:::: steps

1. 步骤 1

   ```ts
   console.log('Hello World!')
   ```

2. 步骤 2

   这里是步骤 2 的相关内容

3. 步骤 3

   ::: tip
   提示容器
   :::

4. 结束
   ::::
````

:::: steps

1. 步骤 1

   ```ts
   console.log('Hello World!')
   ```

2. 步骤 2

   这里是步骤 2 的相关内容

3. 步骤 3

   ::: tip
   提示容器
   :::

4. 结束
   ::::

## 文件树

- [official-docs](https://theme-plume.vuejs.press/guide/markdown/file-tree/)

````md
::: file-tree

- docs
    - .vuepress
        - ++ config.ts
    - -- page1.md
    - README.md
- theme 一个 **主题** 目录
    - client
        - components
            - **Navbar.vue**
        - composables
            - useNavbar.ts
        - styles
            - navbar.css
        - config.ts
    - node/
- package.json
- pnpm-lock.yaml
- .gitignore
- README.md
- …
  :::
````

::: file-tree

- docs
    - .vuepress
        - ++ config.ts
    - -- page1.md
    - README.md
- theme 一个 **主题** 目录
    - client
        - components
            - **Navbar.vue**
        - composables
            - useNavbar.ts
        - styles
            - navbar.css
        - config.ts
    - node/
- package.json
- pnpm-lock.yaml
- .gitignore
- README.md
- …
  :::

## 表达式

```shell
数学表达式： $-(2^{n-1})$ ~ $2^{n-1} -1$

$\frac {\partial^r} {\partial \omega^r} \left(\frac {y^{\omega}} {\omega}\right)
= \left(\frac {y^{\omega}} {\omega}\right) \left\{(\log y)^r + \sum_{i=1}^r \frac {(-1)^ Ir \cdots (r-i+1) (\log y)^{ri}} {\omega^i} \right\}$

19^th^

H~2~O
```

数学表达式： $-(2^{n-1})$ ~ $2^{n-1} -1$

$\frac {\partial^r} {\partial \omega^r} \left(\frac {y^{\omega}} {\omega}\right)
= \left(\frac {y^{\omega}} {\omega}\right) \left\{(\log y)^r + \sum_{i=1}^r \frac {(-1)^ Ir \cdots (r-i+1) (\log y)^{ri}} {\omega^i} \right\}$

19^th^

H~2~O

## badge

```shell
- <Badge type="info" text="info badge" />
- <Badge type="tip" text="tip badge" />
- <Badge type="warning" text="warning badge" />
- <Badge type="danger" text="danger badge" />
```

- <Badge type="info" text="info badge" />
- <Badge type="tip" text="tip badge" />
- <Badge type="warning" text="warning badge" />
- <Badge type="danger" text="danger badge" />

## code

::: tip `[!code warning]`

```c
#include <stdio.h> // [!code warning]

int main() {
    printf("Hello, World!\n");
    return 0;
}
```

:::

::: note `[!code word:std]` | `[!code highlight]` | `[!code error]`

```cpp
#include <iostream>
// [!code word:std]
using namespace std;

int main() {
    cout << "Hello, World!" << endl; // [!code highlight]
    return 0 // [!code error]
}
```

:::

::: info `[!code ++]`

```java
public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello, World!"); // [!code ++]
    }
}
```

:::

::: tip `[!code --]`

```python
print("Hello, World!") # [!code --]
```

:::

::: warning `[!code focus]`

```go
package main

import "fmt"

func main() {
    fmt.Println("Hello, World!") // [!code focus]
}
```

:::

## 代码演示

:::: demo title="常规示例" desc="一个常规示例"

::: code-tabs
@tab HTML

```html

<div id="app">
    <h3>vuepress-theme-plume</h3>
</div>
```

@tab Javascript

```js
const a = 'So Awesome!'
const app = document.querySelector('#app')
app.appendChild(window.document.createElement('small')).textContent = a
```

@tab CSS

```css
#app {
    font-size: 2em;
    text-align: center;
}
```

:::
::::

## common

```shell
`ha ji mi`  man bo ~

加粗：**加粗文字**

斜体： *斜体文字*

~~删除文字~~

内容 ==标记==

> 引用内容
>
> 引用内容

[链接](/)

[外部链接](https://github.com/caobaoqi6040)

![caobaoqi6040](/caobaoqi6040.jpg)

::: center
内容居中
:::

::: right
内容右对齐
:::

- 无序列表1
- 无序列表2
- 无序列表3

1. 有序列表1
2. 有序列表2
3. 有序列表3

- [ ] 任务列表1
- [ ] 任务列表2
- [x] 任务列表3
- [x] 任务列表4

| Tables        |      Are      |  Cool |
|---------------|:-------------:|------:|
| col 3 is      | right-aligned | $1600 |
| col 2 is      |   centered    |   $12 |
| zebra stripes |   are neat    |    $1 |

> [!note]
> note

> [!info]
> info

> [!tip]
> tip

> [!warning]
> warning

> [!caution]
> caution

> [!important]
> important

```

