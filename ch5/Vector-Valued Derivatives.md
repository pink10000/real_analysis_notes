---
tags:
  - 140B
  - ch5
---
# Definition (Vector-Valued Functions)
The vector-valued $\vvf$ maps $[a,b] \to \R^{k}$. The same definition holds for $\vvf'(x)$ which is now
$$
\lim_{t \to x} \left| \frac{\vvf(t) - \vvf(x)}{t - x} - \vvf'(x) \right| = 0
$$
and $\vvf'$ is another function with values in $\R^{k}$. We have 
$$
\vvf = (f_{1}, f_{2}, \cdots, f_{k})
$$
is differentiable at $x$ iff its components $f_{i}$ are differentiable. 

## Modified Vector MVT
Assume $\vvf: [a,b] \to \R^{k}$ is continuous and $\vvf'$ exists on $(a,b)$, then similar to [[Derivative#Theorem (Lagrange Mean Value Theorem)|Lagrange MVT]], we have 
$$
\begin{aligned}
|\vvf(b) - \vvf(a)| 
&\leq (b - a) \cdot |\vvf'(c)| \\
&\leq (b - a) \sup_{a < x < b}|\vvf'(c)|
\end{aligned}
$$
Proof:
Construct a function
$$
g : [a, b] \to \R^{k} \quad\quad g(x) = (\vvf(b) - \vvf(a)) \cdot \vvf(x)
$$
Then by taking the difference:
$$
\begin{aligned}
g(b) - g(a) 
&= (\vvf(b) - \vvf(a)) \cdot (\vvf(b) - \textbf{a}) \\ 
&= |\vvf(b) - \vvf(a)|^{2}
\end{aligned}
$$
And $g$ is [[Derivative|differentiable]] with $g' = (\vvf(b) - \vvf(a)) \cdot \vvf'(x)$. We apply [[Derivative#Theorem (Cauchy Mean Value Theorem)|MVT]], such that 
$$
\begin{aligned}
\frac{g(b) - g(a)}{b - a} = g'(c) \quad\quad\quad c \in (a, b)
\end{aligned}
$$So, 
$$
|\vvf(b) - \vvf(a)|^{2} = \left[ (\vvf(b) - \vvf(a)) \cdot \vvf'(c) \right]\cdot (b - a)
$$
Then by cancelling, by [[Complex Numbers#Cauchy-Schwarz Inequality|Cauchy-Schwarz]] , we get 
$$
|\vvf(b) - \vvf(a)| \leq |\vvf'(c)| \cdot (b - a)
$$
## Counterexample:
Consider 
$$
\vvf(t) = (-\sin t, \cos t)
$$
where we cannot expect 
$$
\frac{\vvf(b) - \vvf(a)}{b - a} = \vvf'(c)
$$
to be true all the time, since $|\vvf(t)| = 1$. The proof is similar to [[Complex Functions#Lagrange Mean Value Theorem Fails]].  

