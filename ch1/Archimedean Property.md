---
tags:
  - 140A
  - ch1
---

$$\text{I can get arbitrary large natural numbers.}$$
Let $x \in \mathbb{R}, x > 0$. Then $\forall y \in \mathbb{R}, \exists n \in \mathbb{N}$ such that $nx > y$. 

In particular (and weakly), $\forall y \in \mathbb{R}, \exists n,m \in \mathbb{Z}$ such that $n > y > m$. 

### Proof
We note the second claim follows from the first. Indeed, let $x = 1$. By AP, $\exists n \in \mathbb{N}, n = n \cdot 1 > y$. Repeat with $-y$ to get (with AP) some $m \in \mathbb{N}$ such that $m > -y \iff y > -m \in \mathbb{Z}$. So, 
$$-m < y < n$$
Now, we prove AP. 
```
---|---|---|--- ... ----|--->
   x   2x  3x           y
```
Suppose for the sake of contradiction, that AP fails. This means $\forall n \in \mathbb{N}, nx \leq y$. So, $y$ is an upper bound for $nx$. Let 
$$
A := \{nx \mid n \in \mathbb{N} \}
$$
It is clear $y$ is a upper bound for $A$, and $A$ is bounded above. Then, $A \neq \emptyset$ as $x \in A, 2x \in A$. This, by the [[Fields#Theorem (Completeness of $ mathbb{R}$)|Completeness Axiom]], the $\sup(A)$ exists. Let $a := \sup(A)$. Hence, 
$$\forall n \in \mathbb{N}, nx \leq a$$

In particular, 
$$
\begin{aligned}
\forall n \in \mathbb{N}, \,& (n + 1)x \leq a \\ 
\forall n \in \mathbb{N}, \,& nx \leq a - x \\
\end{aligned}
$$
Which is a contradiction of the definition of the [[Supremum]] because we have a smaller upper bound. 

## Corollary ($\Q$ is dense in $\R$)
Let $x,y \in \R$ with $x < y$. Then $\exists r \in \Q$ such that $x < r < y$. 
- Think of squeezing in a rational number between any arbitrarily small interval of two real  numbers. 
- We want $r = \frac{m}{n}\in \Q$ such that $x < \frac{m}{n} < y$

WLOG, $n > 0, m \in \Z, n \in \N$, $x < \frac{m}{n} < y \iff nx < m < ny$. So our goal is to actually find $n \in \N$  such that $nx < m < ny$. 
```
<----|----|----|---- ... ----|---|---|-->
    -1    0    1             nx  m   ny     
```
### Proof:
We want $r = \frac{m}{n}, n > 0$ such that $x < \frac{m}{n} < y$. Note that $x < y \implies y - x > 0$. So by AP, $\exists n \in \N$ such that $n(y - x) > 1 \iff ny - nx > 1$. So BY RUDIN, $\exists m \in \Z$ such that $ny < m < nx$. 