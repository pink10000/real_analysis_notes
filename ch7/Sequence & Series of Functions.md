---
tags:
  - 140B
  - ch7
---
# Definition (Pointwise Convergences)
Let $E$ be a a set (most of the time, a [[Metric Space]]). Consider 
$$
f_{n} : E \to \C  \quad\quad\quad n \geq 1
$$
and $f : E \to \C$. We see the [[Sequences|sequence]] $\{f_{n}\}_{n \geq 1}$ **converges pointwise to $f$**, denoted by $f_{n} \to f$ if 
$$
\lim_{n\to\infty} f_{n}(x) = f(x) \quad\quad\quad \forall x \in E
$$
Precisely, for any 
$$
(\forall x \in E)(\forall\vepsi > 0) (\exists N > 0)(\forall n > N)(|f_{n}(x) - f(x)| < \vepsi)
$$
$N$ depends on both $\vepsi, x$.
# Remark (Pointwise Equivalence)
Pointwise convergence is equivalent to limits of sequences of numbers, indexed by $E$. 

## Example: 
Let $E = [0, 1]$. Let $f_{n}(x) = x^{n}$. For fixed $x \in [0, 1]$, the values of 
$$
\lim_{n\to\infty} f_{n}(x) = \lim_{n \to \infty} x^{n} = 
\begin{cases}
0 & 0 \leq x < 1 \\
1 & x = 1 \\
\end{cases}
$$
So, $f_{n} \to f$ where
$$
f(x) = \begin{cases}
0 & 0 \leq x < 1 \\
1 & x = 1
\end{cases}
$$
giving us a point of [[Continuity#Definition (Discontinuity)|simple discontinuity]]. So, if $f_{n} \to f$, and $f_{n}$ is [[Continuity|continuous]], then $f$ is *not necessarily* continuous. 

# Definition (Uniform Converge)
Let $f_{n} : E \to \C$ and $f : E \to \C$ for $n \geq 1$. We say that $\{f_{n}\}_{n \geq 1}$ **uniformly converges to $f$** if for any $\vepsi > 0$, there exists $N > 0$, such that for any $n > N$, for any $x \in E$, $|f_{n}(x) - f(x)| < \vepsi$. This denoted by 
$$
f_{n} \rightrightarrows f 
$$
precisely,
$$
(\forall \vepsi > 0)(\exists N > 0)(\forall x \in E)(\forall n \geq N)(|f_{n}(x) - f(x)| < \vepsi)
$$
> Here, $N$ only relies on $\vepsi$. Thus, it is a stronger result than [[#Definition (Pointwise Convergences)]], shown in [[#Lemma (Uniform to Pointwise)]]

## Lemma (Uniform to Pointwise)
If $f_{n} \rightrightarrows f$, then $f_{n}\to f$. 

## Example: 
Let $\{x^{n}\} \not\rrarrow f$ over $[0, 1]$, where
$$
f(x) = \begin{cases} 
0 & 0 \leq x < 1 \\
1 & x = 1 \\
\end{cases}
$$
Proof: 
Suppose that $x^{n} \rrarrow f$ where $\vepsi = 1/2$. Then $\exists N > 0$ such that 
$$
|f_{n}(x) - f(x)| < 1/2 \quad\quad\quad \forall x \in E, \forall n > N
$$
Then take $n = N + 1$, we have $f_{n}(1) = 1$ which is continuous since it is constant. Then $\exists \delta$ such that if $x > 1 - \delta$, then $f_{n}(x) > 1/2$. By assumption, 
$$
|f_{n}(x) - f(x)| < 1/2 \quad\quad\quad f(x) = 0 \text{ if $1 - \delta < x < 1$}
$$
which implies $|f_{n}(x)| < 1/2$, a contradiction. 

## Criterion 1 (By Supremum)
Let $M_{n} = \sup_{x \in E} |f_{n}(x) - f(x)|$ using the [[Supremum]]. Then 
$$
f_{n} \rrarrow f \iff \lim_{n \to \infty} M_{n} = 0
$$
This is just the definition, so the proof can be omitted.
