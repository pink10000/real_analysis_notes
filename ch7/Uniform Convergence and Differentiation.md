---
tags:
  - 140B
  - ch7
---
In general, the [[Pointwise and Uniform Convergence|uniform convergence]] of $\{f_{n}\}$ implies nothing about the sequence $\{f_{n}'\}$. This means require stronger assertions to show that $f_{n}'\to f'$ if $f_{n}\to f$.

# Theorem (Term-by-Term Differentiation)
Suppose $\{f_{n}\}$ is a sequence of functions, 
- [[Derivative|differentiable]] on $[a,b]$ and 
- such that $\{f_{n}(x_{0})\}$ converges for some point $x_{0}$ on $[a,b]$. 

If $\{f_{n}'\}$ converges uniformly on $[a,b]$, then $\{f_{n}\}$ converges uniformly on $[a,b]$, to a function $f$, and 
$$
f'(x) = \lim_{n \to \infty} f_{n}'(x)
\quad\quad\quad (a \leq x \leq b)
$$
Proof:
Let $\vepsi > 0$ be given. Choose $N$ such that $n,m \geq N$, implies 
$$
|f_{n}(x_{0}) - f_{m}(x_{0})| < \frac{\vepsi}{2}
$$
since $\{f_{n}\}$ converges uniformly and 
$$
|f_{n}'(t) - f_{m}'(t)| < \frac{\vepsi}{2(b - a)}
\quad\quad\quad (a \leq t \leq b)
$$
since $\{f_{n}'\}$ converges uniformly. Then using [[Derivative#Theorem (Lagrange Mean Value Theorem)|MVT]], to $f_{n} - f_{m}$, we get 
$$
|[f_{n}(x) - f_{m}(x)] - [f_{n}(t) + f_{m}(t)]| \leq 
\frac{|x - t|\vepsi}{2(b - a)} \leq \frac{\vepsi}{2}
$$
for any $x$ and $t$ on $[a,b]$, if $n,m \geq N$. By the triangle inequality, we get 
$$
\begin{aligned}
|f_{n}(x) - f_{m}(x)| 
&\leq |f_{n}(x) - f_{m}(x) - f_{n}(x_{0}) + f_{m}(x_{0})| 
+ |f_{n}(x_{0}) - f_{m}(x_{0})| \\
&< \vepsi/2 + \vepsi/2 \\
&= \vepsi
\end{aligned}
$$
implies that 
$$
|f_{n}(x) - f_{m}(x)| < \vepsi
$$
and so $\{f_{n}\}$ converges uniformly on $[a,b]$. 
> This is the same proof technique discussed in [[Equicontinuity#Arzela - Ascoli Theorem]] where you can get to your desired outcome by the triangle inequality and going step by step. 

For the second part, let 
$$
f(x) = \lim_{n \to \infty} f_{n}(x) 
\quad\quad\quad (a \leq x \leq b)
$$
Fixing $x \in [a,b]$, define 
$$
\phi_{n}(t) = \frac{f_{n}(t) - f_{n}(x)}{t - x} 
\quad\quad\quad
\phi(t) = \frac{f(t) - f(x)}{t - x}
$$
for $a \leq t \leq b$ and $t \neq x$. Then 
$$
\lim_{n \to \infty} \phi_{n}(t) = f_{n}'(t)
$$
We see from Part 1, using MVT non $f_{n} - f_{m}$, we can apply it to $\phi$ such that 
$$
|\phi_{n}(t) - \phi_{m}(t)| \leq \frac{\vepsi}{2(b - a)}
$$
so that $\{\phi_{n}\}$ converges uniformly, for $t \neq x$. Since $f_{n}\to f$, we conclude that 
$$
\lim_{n \to \infty} \phi_{n}(t) = \phi(t)
$$
uniformly by [[Pointwise and Uniform Convergence#Criterion 2 (Cauchy Criterion)|the Cauchy Criterion]]. By applying [[Pointwise and Uniform Convergence#Theorem (Uniform Convergence and Continuity)|uniform convergence and continuity]], we have that 
$$
f'(x) = \lim_{t\to x} \phi(t) = \lim_{n\to\infty} f_{n}'(x)
$$
which is the definition of a derivative. 
> If continuity of $f_{n}'$ is also assumed, the proof is shorted by using [[Fundamental Theorem of Calculus]] and the [[Riemann-Stieltjes Integral]]. 

# Theorem (Continuity Does Not Imply Differentiable)
There exists a real continuous function on the real line that is nowhere differentiable. 
> It appears that the main motivation for uniform convergence shows that such an $f$ is uniformly convergent, and thus continuous. But then it means that it can be nowhere differentiable because there is not strong enough assumptions to show so.