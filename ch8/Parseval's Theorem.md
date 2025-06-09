---
tags:
  - 140B
  - ch8
---
# Inner Product Space 
$$
\text{Inner Product Space}
\subset 
\text{Normed Vector Space}
\subset 
\text{Metric Space}
\subset 
\text{Topological Space}
$$
where 
1. Topological Spaces use [[Metric Space#Open & Closed|open sets]] to measure what is close by $N_{\vepsi}(x)$. 
2. [[Metric Space|Metric Spaces]] use distances to measure $d(x, y) = |x - y|$
3. Normed Vector Spaces $V$ have a norm $N : V \to \R_{\geq 0}$ where $N(x)$ is the "length" of $\vec{x}$. The distance function is $d(x, y) = N(x - y)$. 
4. Inner Product Spaces use the inner product $V \times V \to \R$ or $V \times V \to \C$. Note that this is not the same inner product as used in [[Trigonometric Functions]]. 

# $\ell^{2}$ Space 
We have the $\ell^2$ space, the space of elements $(x_{1}, x_{2}, \dots )$ where $x_{i} \in \C$ such that 
$$
\sum_{i=1}^{\infty} |x_{i}|^{2}
$$
converges. For example, 

$$
x = (1, 1/2, 1/3, 1/4, \dots) \in \ell^{2}
$$
is true since it is the sum of $1/n^{2}$, and then apply the [[Series#Corollary (P-Test)|P-Test]]. Then 
$$
y = (1, 1/\sqrt{2}, 1/\sqrt{3}, 1/\sqrt{4}, \dots) \not\in \ell^{2}
$$
by [[Series#Corollary (P-Test)|P-Test]] again.
# $L^{2}$ Space
$L^{2}$ space is the space of integrable elements over $[-\pi, \pi]$ where 
$$
f \sim g \text{ if } \int_{-\pi}^{\pi} |f - g|^{2} dx = 0 
$$
We use the same inner product from [[Trigonometric Functions#Definition (Inner Product)]]. 

# Parseval's Theorem 
$L^{2}([-\pi, \pi])$ is isomorphic to $\ell^{2}$ as an inner product space. Both are examples of Hilbert Spaces, which are complete inner product spaces. The formula is:
$$
\int_{-\pi}^{\pi} |f|^{2} dx = 2 \pi \sum_{k=-\infty}^{\infty} |c_{k}|^{2}
$$
for $c_{k} \in \ell^{2}$. This shows that 
$$
\langle f, f \rangle = 2\pi \langle\{c_{k}\}, \{c_{k}\}\rangle
$$
> For the engineers, this allows us to move from the time/space domain to the frequency domain.
