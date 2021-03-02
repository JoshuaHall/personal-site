---
path: '/blog/the-billion-dollar-mistake'
date: '2020-05-03'
title: 'The Billion Dollar Mistake'
tags: ['programming', 'elm']
---

Within the past few months, I have become enamored with algebraic data types (ADTs). The power that they give you to model data preciesely and safely is amazing to me. A simple example of an ADT is `Maybe` or `Option` (depending on the language you are using).

`Maybe` represents an incredibly common situation in programming: representing data _or_ a lack of the aforementioned data. In Elm, `Maybe` looks like this:

```elm
type Maybe a
    = Just a
    | Nothing
```

The `a` in `Maybe a` represents a type parameter/generic parameter. It is used in the `Just a` part you see above, so the compiler can know what type of data it is holding in the Maybe. You can conceptually think of `Maybe a` as "a value in a context". In the case of `Maybe`, the context is that the value is either present in a `Just`

But how do you work with a `Maybe`? Good question. For example, you can use a `case` statement in Elm, which forces you to check if your `Maybe a` value is `Nothing` instead of `Just`. This eliminates a huge class of bugs (As a C# programmer, I don't miss `NullReferenceException`s). Here's an example:

```elm
validateMessage : Maybe String -> String
validateMessage maybeMessage =
    case maybeMessage of
        Just message ->
            "You put in: " ++ message

        Nothing ->
            "Hey, you! Yeah, you! You didn't input a message!"
```

The above `case` statement lets us declaratively write code that handles errors. This has a multitude of benefits:

- Type safety: handles all cases of errors, by definition it is _impossible_ to miss a corner case of an error and then crash your application
- Readability: the potential states and what to do in each state is made very apparent
- Refactorability (?): while moving code around, you can't accidentally forget to handle a `Maybe` value and cause a debugging headache later on

All of these together combine to form a wonderful developer experience and have really made me think differently about how I code.

Coming to functional programming from the world of imperative, object oriented programming has been a string of "Aha!" and "Why haven't I heard of this before?" moments, and hopefully today I helped you have a eureka moment of your own :)
