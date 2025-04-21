---
tags:
  - 140B
  - ch6
---
Before we are able to understand [[Riemann-Stieltjes Integral]] we need to define the notion of a **measure**. 

# Definition (Measure)
A **measure** in the context of 140B is a function
$$
m : \{\text{closed, connected intervals} \} \to \R 
$$
with the following properties:
1. if $E \subseteq F$ then $m(E) \leq m(F)$
2. $m(\emptyset) = 0$
3. $m([a,c]) = m([a,b]) + m([b, c])$ where $a < b < c$
The standard measure is $m([a, b]) = b - a$.  
> To link the notes, we use [[Connected Sets]] and [[Metric Space#Open & Closed|Closed Intervals]]. 

## Example 1
Let $f : \R \to \R$ be increasing and define 
$$
m([a,b]) = f(b) - f(a)
$$
If $f(x) = x^{3}$ then $m([0, 1]) = 1$ and $m([0, 2]) = 8$ and so on.

> At this point, pedagogy dictates you should read [[Riemann-Stieltjes Integral]]. 