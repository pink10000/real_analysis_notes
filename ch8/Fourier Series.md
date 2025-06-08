---
tags:
  - 140B
  - ch8
---
# Definition (Fourier Partial Sum)
Recall from [[Trigonometric Functions#Example 2]] that we have an orthonormal list on $[-\pi, \pi]$. Let
$$
f(x) = \sum_{k= -N}^{N} e^{ikx}  
$$
Then $\forall m \in [-N, N]$ we have 
$$
\begin{aligned}
\langle f, e^{inx} \rangle
&= \int_{-\pi}^{\pi} f(x) \cdot \ovl{e^{inx}} dx \\ 
&= \int_{-\pi}^{\pi} \left( \sum_{k=-N}^{N} c_{k}e^{ikx} \right) e^{-inx} dx\\
&= \sum_{k=-N}^{N} c_{k} \int_{-\pi}^{\pi} e^{i(k - m)x} dx \\
&= c_{m} \cdot \int_{-\pi}^{\pi} e^{0} dx  \\ 
&= 2\pi c_{m}
\end{aligned}
$$
To remove the summation, recognize that when $k \neq m$, we have an [[Trigonometric Functions#Definition (Orthonormal)|orthonormal]] basis, and so the integral becomes $0$, and when $k = m$, then the integral is $1$. Thus, we only keep $c_{m}$. 

Thus, 
$$
c_{m} = \frac{1}{2\pi} \int_{-\pi}^{\pi} f \cdot e^{-imx} dx
$$
Let
$$
S_{N} := \frac{1}{f(x)} \sum_{k=-N}^{N} c_{k} e^{ikx}
$$
This is the **Fourier Partial Sum**. We say that 
$$
\sum_{n=0}^{\infty} c_{k}e^{ikx}
$$
is the **Fourier Series** of $f(x)$ and we denote $c_{k}$ as the **Fourier Coefficients** of $f(x)$. 

## Fourier Series Convergence
We say the Fourier Series converges at $x_{0}$ if 
$$
\lim_{N \to \infty} S_{N} \cdot f(x_{0}) 
$$
exists. 

# Theorem (Fourier Partial Sums Approximate)
These sums are *best* approximations. Let $N \geq 0, f : [-\pi, \pi] \to \C$ be [[Riemann-Stieltjes Integral|integrable]] and let 
$$
S_{n} \cdot f(x) = \sum_{k=-N}^{N }c_{k}e^{ikx} 
$$
be the Fourier Partial Sum and let 
$$
t_{N}(x) = \sum_{k=-N}^{N } d_{k} e^{ikx}
$$
where $t_N$ is some arbitrary [[Trigonometric Functions#Definition (Trigonometric Polynomial)|trigonometric polynomial]] of degree $N$ for $d_{k} \in \C$. Then 
$$
\int_{-\pi}^{\pi} |f - S_{N} \cdot f|^{2} dx 
\leq
\int_{-\pi}^{\pi} |f - t_{N}|^{2} dx 
$$
and the equation holds $\iff c_{k} = d_{k}$ for all $k$. 
> We are trying to approximate to $t_{N}$ with $S_{N}$. 

Proof: 
So, 
$$
\begin{aligned}
\int_{-\pi}^{\pi} t_{N} \cdot \ovl{f} dx 
&= \int_{-\pi}^{\pi} \left( \sum_{k=-N}^{N} d_{k} e^{ikx}  \right) \ovl{f} dx \\ 
&= \sum_{k=-N}^{N} d_{k} \int_{-\pi}^{\pi} e^{ikx} \ovl{f} dx \\
&= \sum_{k=-N}^{N} d_{k} \ovl{ \int_{-\pi}^{\pi} e^{-ikx} f dx } \\ 
&= 2\pi \sum_{k=-N}^{N} d_{k} \ovl{c_{k}} \\
\end{aligned}
$$
such that 
$$\begin{aligned}
\int_{-\pi}^{\pi} |f - t_{N}|^{2} dx  
&= \int_{-\pi}^{\pi} f\ovl{f} dx + \int_{-\pi}^{\pi} t_{N}\ovl{f} dx + \int_{-\pi}^{\pi} f\ovl{t_{N}} dx +\int_{-\pi}^{\pi} t_{N}\ovl{t_{N}} dx \\ 
&= \int_{-\pi}^{\pi} |f^{2}|dx +
 \left[ -2 \pi \sum d_{k}\ovl{c_{k}} - 2\pi \sum \ovl{d_{k}} c_{k} + 2\pi \sum d_{k} \ovl{d_{k}} + 2\pi \sum c_{k} \ovl{c_{k}} - 2\pi \sum c_{k} \ovl{c_{k}}  \right] \\
&= \int_{-\pi}^{\pi} |f^{2}| dx + 2\pi 
 \left[ \sum (c_{k} - d_{k})\ovl{(c_{k} - d_{k})} \right] - 2\pi \sum c_{k}\ovl{c_{k}} \\ 
&= \int_{-\pi}^{\pi} |f|^{2} + \int_{-\pi}^{\pi} |S_{N}f - t_{N}|^{2} - \int_{-\pi}^{\pi} |S_{N} f|^{2}dx  \\ 
&\geq \int_{-\pi}^{\pi} |f^{2}| dx - \int_{-\pi}^{\pi} |S_{N} f|^{2}dx 
\end{aligned}$$
Let $t_{N} = S_{N} f$. Then we have that 
$$
\int_{-\pi}^{\pi} |f - S_{N}|^{2} = \int_{-\pi}^{\pi} |f|^{2} - \int_{-\pi}^{\pi} |S_{N} f|^{2} \leq  \int_{-\pi}^{\pi} |f - t_{N}|^{2}dx
$$
and thus the proof is done. 

