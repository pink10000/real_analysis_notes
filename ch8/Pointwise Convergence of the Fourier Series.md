---
tags:
  - 140B
  - ch8
---
# Dirichlet Kernel
Let $f : [-\pi, \pi] \to \C$ where 
$$
S_{N}f = \sum_{k=-N}^{N} c_{k}e^{ikx} 
\quad\quad\quad
c_{k} = \int_{-\pi}^{\pi} f(x) e^{-ikx} dx 
$$
Consider the sum 
$$
\sum_{k=-N}^{N} e^{ikx} = e^{-iNx} + e^{-i(N-1)x} + \cdots + e^{i0x} + \cdots + e^{iNx} 
$$
By applying the formula for the sum of a [[Series#Lemma (Geometric Series)|geometric series]], the sum simplifies to 
$$
\sum_{k=-N}^{N} e^{ikx} = \frac{\sin(N + \frac{1}{2})x}{\sin(\frac{1}{2}x)} = D_{N}(x)
$$
## Significance 
The kernel allows us to describe the $N-$th partial sum as a **convolution**:
$$
S_{N}f(x) = \int_{-\pi}^{\pi} \frac{1}{2\pi} f(t) D_{N}(x - t) dt \approx f \ast D_{N} 
$$
# Theorem (Lipschitz Continuous)
If $f(x)$ is **Lipschitz Continuous** at $x_{0} \in [-\pi, \pi]$, then 
$$
(\exists M > 0)(\exists \delta > 0)(|x - x_{0}| < \delta \implies |f(x) - f(x_{0})| < M|x - x_{0}|)
$$
then $\lim_{N \to \infty} S_{N}f(x_{0}) = f(x)$. 