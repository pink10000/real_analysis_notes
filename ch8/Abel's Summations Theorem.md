---
tags:
  - 140B
  - ch8
---
# Theorem (Abel's Summations)
If $\sum_{n=0}^{\infty} c_{n}x^{n}$ converges at (WLOG, let the center $x = 0$) the end point of the interval of convergence, then the power series can be extended continuously to the end point. 

For example, *if* the interval of convergence is $(-R, R)$ and converges at $x = R$, *then* the function $f(x) = \sum_{n=0}^{\infty} c_{n}x^{n}$ can be *extended continuously* to include that end point. This means 
$$
\lim_{x \to R^{-}}f(x) = \sum_{n=0}^{\infty} c_{n}R^{n}
$$
> This allows us to describe the behavior of the interval of convergence at its endpoints. 

# Theorem (Double Sequences)
$$
\sum_{m = 1}^{\infty} \sum_{n=1}^{\infty} a_{m,n} = \sum_{n=1}^{\infty} \sum_{n=1}^{\infty} a_{m,n}
$$
Where $\{a_{m,n}\}$ is a double [[Sequences|sequence]]. 

# Theorem (Expanding a Power Series)
A power series in its open interval of convergence can be expanded as a power series everywhere. So if 
$$
\sum_{n = 0}^{\infty} c_{n}x^{n} 
$$
converges on $(-R, R)$, then for any $a \in (-R, R)$, we can re-expand it as a new [[Power Series]], 
$$
\sum_{n = 0}^{\infty} d_{n}(x - a)^{n}
$$
This is the same as 
$$
\sum c_{n}[(x - a) + a]^{n}
$$
