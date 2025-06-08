---
tags:
  - 140B
  - ch8
---
I don't have a better name for this page. Feel free to suggest some on GitHub. 

# Definition (Power Series)
A **power series** centered at $x = a$ for $a \in \R$ is a series defined as 
$$
\sum_{n=0}^{\infty} c_{n}(x - a)^{n} 
\quad\quad\quad x \in \R, c_{n}\in \C
$$
By the [[Power Series#Radius of Convergence]], we define
$$
\alpha := \limsup_{n \to \infty} \sqrt[n]{|c_{n}|} 
\quad\quad\quad
R = \begin{cases}
1/\alpha & \alpha \neq 0, \alpha \text{ exists} \\
\infty & \alpha = 0 \\ 
0 & \alpha = \infty
\end{cases}
$$
We say that $R$ is the **radius of convergence** for a power series. 

# Theorem (Differentiation of Power Series)
Let the power series be 
$$
\sum_{n = 0}^{\infty} c_{n}x^{n}
$$
and let 
$$
f(x) = \sum_{n = 0}^{\infty} c_{n}x^{n} 
\quad\quad\quad
|x| < R
$$
The following statements are equivalent:
1. It converges in $(a - R, a + R)$  for $|x| < R$, and define 
2. for any small $\vepsi > 0$, the power series [[Series#Definition (Absolute Convergence)|converges absolutely]] and [[Pointwise and Uniform Convergence|uniformly]] in $[a - R + \vepsi, a + R - \vepsi]$. 
3. The function $f$ is then [[Continuity|continuous]] and [[Derivative|differentiable]] in $(-R, R)$ and 
$$
f'(x) = \sum_{n = 0}^{\infty} nc_{n}x^{n - 1} 
\quad\quad\quad
|x| < R
$$
Proof: 
Part $(1)$ is proven by the [[Series#Proposition (Root Test)|root test]].

Part $(2)$ is proven by the fact that $\forall x \in [a - R + \vepsi, a + R - \vepsi]$, 
$$
|c_{n}(x - a)^{n}| \leq |c_{n}(R - \vepsi)|
$$
and so $\sum |c_{n}(R - \vepsi)|$ converges by the [[Series#Lemma (Comparison Test)]]. By the [[Pointwise and Uniform Convergence#Criterion 3 (Comparison Test)]], the convergence is uniform. 

Part $(3)$:
WTS $f'(x)$ exists $\forall x \in (a - R, a + R)$. Let $\vepsi > 0$ such that $x \in [x - R + \vepsi, x + R - \vepsi]$. Then $f$ converges uniformly on $[a - R + \vepsi, a + R - \vepsi]$ by part $(2)$. 

Since $\sqrt[n]{n} \to 1$ as $n \to \infty$, we have 
$$
\limsup_{n \to \infty} \sqrt[n]{n|c_{n}|} = \limsup_{n \to \infty} \sqrt[n]{|c_{n}|}
$$
so that the series have the same interval of convergence. Since the derivative is a power series, it converges uniformly in 
$$
[-R + \vepsi, R - \vepsi] 
\quad\quad\quad \forall \vepsi > 0
$$
Then by [[Uniform Convergence and Differentiation#Theorem (Term-by-Term Differentiation)]], to the series, we get 
$$
f'(x) = \sum_{n = 0}^{\infty} n c_{n}(x - a)^{n - 1}
$$

# Corollary (Infinite Differentiablility)
A power series is **infinitely differentiable** in $(a - R, a + R)$ and $f^{(n)}$ can be calculated by term-wise differentiation. See [[Uniform Convergence and Differentiation#Theorem (Term-by-Term Differentiation)]]. 

Furthermore, 
$$
f(x) = \sum_{n  =0}^{\infty} c_{n}(x - a)^{n}
$$
we have 
$$
\begin{aligned}
f(a) = c_{0} &\iff c_{0} = f(a) \\ 
f'(a) = c_{1} &\iff c_{1}= f'(a) \\ 
f''(a) = c_{2} \cdot 2! &\iff c_{2} = f''(a) / 2! \\ 
f^{(n)}(a) = c_{n}n! &\iff c_{n}= f^{(n)}(a)/ n!
\end{aligned}
$$
In particular, if $f$ is a power series around $x = a$, then 
1. $f$ has to be infinitely differentiable
2. $f(x) = \sum f^{(n)}(a) \cdot (x - a)^{n} \cdot (n!)^{-1}$ 

# Examples
1. Let $f(x) = x^{2}+ 1$. To expand as power series at $x = -1$, 
	$$
	f(-1) = 2 
	\quad\quad\quad
	f'(-1) = -2 
	\quad\quad\quad
	f''(-1) = 2
	$$
	such that $f(x) = 2 - \frac{2}{1!}(x + 1)^{1} + \frac{2}{2!}(x + 1)^{2}$. 
2. Let 
	$$
	f(x) = \begin{cases}
	\exp(-1/x^{2})  & x \neq 0 \\
    0  & x = 0 \\
 \end{cases}
	$$
	then $f(0) = f'(0) = f''(0) = \cdots f^{(n)(0)} = 0$ 
	
# In Relation to Complex-Valued Functions
$$
\begin{aligned}
\text{Power Series} 
\subset 
\text{Infinitely Differentiable Functions} 
&\subset 
\text{Differentiable Functions} 
\subset \\
\text{Continuous Functions}
&\subset 
\text{Familiy of $\R \to \C$ and $\R \to \R$ functions}
\end{aligned}
$$
Proof is trivial. 