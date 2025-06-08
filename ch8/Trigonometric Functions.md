---
tags:
  - 140B
  - ch8
---
We can define trigonometric functions as power series, using [[Taylor's Theorem]]. 

# Euler's Number
$$
e^{x} = \sum_{n=0}^{\infty} \frac{x^{n}}{n!} = 1 + x + \frac{x^{2}}{2} + \frac{x^{3}}{6} + \cdots 
$$
# Cosine
$$
\cos(x) = \sum_{n=0}^{\infty} \frac{(-1)^{n}}{(2n)!} x^{2n} = 1 - \frac{x^{2}}{2} + \frac{x^{4}}{24} - \cdots 
$$
# Sine 
$$
\sin(x) = \sum_{n = 0}^{\infty}(-1)^{n} \frac{x^{2n + 1}}{(2n + 1)!} = 
x - \frac{x^{3}}{6} + \frac{x^{5}}{120} - \cdots
$$
# Euler's Formula 
$$
e^{ix} = \cos(x) + i\sin(x) 
\quad\quad\quad
\forall x \in \C
$$
# Definition (Trigonometric Polynomial)
A **trigonometric polynomial** of degree $n$ can be written in *real* form 
$$
f(x) = a_{0} + \sum_{k =1}^{n} 
\left( a_{k}\cos(kx) + b_{k}\sin(kx) \right)
$$
where
$$
\begin{aligned}
\{ a_{0}, a_{1}, \dots, a_{n} \} &\in \C \\
\{ b_{0}, b_{1}, \dots, b_{n} \} &\in \C
\end{aligned}
$$
and in *complex exponential* form:
$$
f(x) = \sum_{k=1}^{n} c_{k}e^{ikx} 
\quad\quad\quad 
c_{k}\in \C
$$
where equivalence is shown by [[#Euler's Formula]]. Indeed, 
$$
\begin{aligned}
\{ e^{i0x} = e^{0} = 1 \} &\longleftrightarrow \{1\} \\
\{ e^{ix}, e^{-ix} \} &\longleftrightarrow \{\cos(x), \sin(x)\} \\
\{ e^{2ix}, e^{-2ix} \} &\longleftrightarrow \{ \cos(2x), \sin(2x) \}
\end{aligned}
$$
If $a_{0} = c_{0}$, and 
$$
a_{k} = c_{k} + c_{-k} 
\quad\quad\quad 
b_{k} = c_{k} - c_{-k}
$$
then 
$$
\begin{aligned}
c_{k} e^{ikx} + c_{-k}e^{-ikx} 
&= c_{k}( \cos(kx) + i \sin(kx) ) + c_{-k} (\cos(-kx) + i \sin(-kx)) \\
&= (c_{k} + c_{-k})\cos(kx) + (c_{k} + c_{-k})\sin(kx)
\end{aligned}
$$
and the proof is equivalent. 

# Definition (Inner Product) 
In the space of [[Riemann-Stieltjes Integral|integrable functions]] over $[-\pi, \pi]$ with **inner product** given by 
$$\langle f,g \rangle = \int_{-\pi}^{\pi} f \cdot \ovl{g} dx$$
# Definition (Orthonormal)
Two functions $f,g$ are **orthonormal** if 
1. $\langle f,g \rangle = 0$
2. $\langle f,f \rangle = 1$
3. $\langle g,g \rangle = 1$
Note that $\langle f,g \rangle = 0$ if $f \neq g$ and $1$ if $f = g$. 

$\langle f,f \rangle$ is not always equal to 1. If 
$$
 \langle f,g \rangle = \begin{cases} 
 0 & f\neq g \\
 1 & f = g
 \end{cases}
 $$
Then $\int_{-\pi}^{\pi} |f|^{2} = 0$ 
# Example 1
The set 
$$
\{ 1/\sqrt{2\pi}, \cos(nx)/\sqrt{\pi}, \sin(nx)/\sqrt{\pi} \}
$$
is orthonormal. 

Proof: Trivial. 

# Example 2 
The set 
$$
\left\{ \frac{1}{\sqrt{2\pi}} e^{inx}  \right\}_{n \in \Z}
$$
form an orthonormal list. 

Proof: Show that $\ovl{e^{inx}} = e^{-inx}$. The rest is trivial. 