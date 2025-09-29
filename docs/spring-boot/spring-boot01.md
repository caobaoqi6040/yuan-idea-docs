---
title: 如何更好的解决 bean 歧义问题
tags:
  - spring-boot3
createTime: 2025/09/29 10:49:34
permalink: /article/r9wq0dyj/
---


::: note center

在使用 spring boot 依赖注入的过程中，我们经常会遇到 `找到多个候选 bean [bean 歧义]` 的问题

下面我将通过一个 支付处理系统 为大家分享以下解决方案:

1. 使用 `@Qualifier` 注解指定所需 bean
2. 创建自定义注解以实现类型安全以及更简洁的代码(通过拓展 #1)
3. 通过 参数命名技巧 实现特定 bean 的选取(获取有利于优化 Spring 解析算法以获得更好的性能)
4. 使用 Spring Framework6.2 推出的 `ObjectProvider` 进行程序化 bean 选择和流处理

:::

::: details 支付处理系统

我们将通过模拟一个简易的支付处理程序以便于更好的表达，其代码如下:

`PaymentProcessor#process()` 接口

```java
public interface PaymentProcessor {
    void process();
}
```

`CreditCardPaymentProcessor` 实现类

```java

@Slf4j
@Service
public class CreditCardPaymentProcessor implements PaymentProcessor {
    @Override
    public void process() {
        log.info("CreditCardPaymentProcessor.process");
    }
}
```

`WechatPaymentProcessor` 实现类

```java

@Slf4j
@Service
public class WechatPaymentProcessor implements PaymentProcessor {
    @Override
    public void process() {
        log.info("WechatPaymentProcessor.process");
    }
}
```

`PaymentController`

```java

@RestController
@RequestMapping("/api/v1/payment")
public class PaymentController {

    private final PaymentProcessor processor;

    public PaymentController(PaymentProcessor processor) {
        this.processor = processor;
    }

}
```

![bean 歧义示例](../../assets/2025-09-29-1759116776762.png)

:::

## @Qualifier 注解

```java
@RestController
@RequestMapping("/api/v1/payment")
public class PaymentController {

    private final PaymentProcessor processor;

    public PaymentController(@Qualifier("wechatPaymentProcessor") PaymentProcessor processor) {
        this.processor = processor;
    }

}
```

## 自定义注解

```java
public enum PaymentType {
    CREDIT_CARD,
    WECHAT,
}
```

```java
@Target({ElementType.FIELD, ElementType.METHOD, ElementType.PARAMETER, ElementType.TYPE})
@Retention(RetentionPolicy.RUNTIME)
@Qualifier
public @interface PaymentProcessorQualifier {
	PaymentType value();
}
```

```java
@Slf4j
@Service
@PaymentProcessorQualifier(PaymentType.CREDIT_CARD)
public class CreditCardPaymentProcessor implements PaymentProcessor {
	@Override
	public void process() {
		log.info("CreditCardPaymentProcessor.process");
	}
}
```

```java
@Slf4j
@Service
@PaymentProcessorQualifier(PaymentType.WECHAT)
public class WechatPaymentProcessor implements PaymentProcessor {
	@Override
	public void process() {
		log.info("WechatPaymentProcessor.process");
	}
}
```

```java
@RestController
@RequestMapping("/api/v1/payment")
public class PaymentController {

    private final PaymentProcessor processor;

    public PaymentController(@PaymentProcessorQualifier(PaymentType.WECHAT) PaymentProcessor processor) {
        this.processor = processor;
    }

}
```

## 参数命名技巧

```java
@RestController
@RequestMapping("/api/v1/payment")
public class PaymentController {

    private final PaymentProcessor processor;

    public PaymentController(PaymentProcessor wechatPaymentProcessor) {
        this.processor = wechatPaymentProcessor;
    }

}
```

## ObjectProvider

```java
@RestController
@RequestMapping("/api/v1/payment")
public class PaymentController {

	public PaymentController(ObjectProvider<PaymentProcessor> processors) {
		processors.stream().forEach(PaymentProcessor::process);
	}

}
```

## ref

@[youtube autoplay=false loop=false start="0" end="0" width="100%" height="400px" ratio="16:9"](jCjHAD94c8A)