---
tags:
  - 140B
  - ch7
---

# Theorem (Uniform Convergence and Integration)
Let $E = [a,b]$ and $\alpha : [a,b] \to \R$ be increasing. Let $f_{n} \in \mathscr{C}(B)$ such that $f_{n} \in \sR(\alpha)$. If $f_{n} \rrarrow f$ then $f \in \sR(\alpha)$ and 
$$
\int_{a}^{b}f d\alpha = \lim_{n\to\infty} \int_{a}^{b} f_{n} d \alpha = 0
$$

Proof:
We see that $\forall \vepsi > 0, \exists N \in \N$ such that $|f_{n} - f| < \vepsi$ for all $x \in [a,b]$. So, 
$$
f_{n}(x) - \vepsi \leq f(x) \leq f_{n}(x) + \vepsi  
\quad\quad\quad \forall x \in [a, b]
$$
Then we can compare the LHS and the RHS by  
$$
\int_{a}^{b} (f_{n}(x) - \vepsi) d\alpha 
\leq 
\unl{\int_{a}^{b}} 
\leq 
\ovl{\int_{a}^{b}} 
\leq 
\int_{a}^{b} (f_{n}(x) + \vepsi) d\alpha
$$
such that RHS - LHS = $2 \vepsi (\alpha(b) - \alpha(a))$. 
> Related, [[Riemann-Stieltjes Integral]], [[Pointwise and Uniform Convergence]]. 