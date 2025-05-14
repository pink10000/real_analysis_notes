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

# Definition (Uniform Convergence)
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

## Criterion 2 (Cauchy Criterion)
The sequence of functions $\{f_{n}\}$ defined on $E$, **converges uniformly on $E$** if and only if for every $\vepsi > 0$ there exists an integer $N$ such that $m \geq N, n \geq N, x \in E$ implies 
$$
|f_{n}(x) - f_{m}(x)| \leq \vepsi 
$$
Proof: 
Suppose $\{f_{n}\}$ converges uniformly on $E$, and let $f$ be the limit function. Then there is an integer $N$ such that $n \geq N, x \in E$ and 
$$
|f_{n}(x) - f(x)| \leq \vepsi/2
$$
so that 
$$
|f_{n}(x) - f_{m}(x) \leq |f_{n}(x) - f(x)| + |f(x) - f_{m}(x)| \leq \vepsi 
$$
and the forward direction is done. 

Conversely, if the Cauchy condition holds, then by [[Cauchy Sequences#Theorem (Compact in Complete)|theorem]] and that $E \subset \R^{1}, \{f_{n}(x)\}$ converges for every $x$. Let the limit be $f(x)$. Let $\vepsi > 0$ be given, and choose $N$ such that  
$$
|f_{n}(x) - f_{m}(x)| \leq \vepsi
$$
holds. We fix some $n$, and let $m \to \infty$. Then as $f_{m}(x) \to f(x)$, 
$$
|f_{n}(x) - f(x)| \leq \vepsi
$$
for every $n \geq N$ and every $x \in E$. 

## Criterion 3 (Comparison Test)
Suppose $\{f_{n}\}$ is a sequence of functions defined on $E$, and suppose 
$$
|f_{n}(x)| \leq M_{n}
\quad\quad\quad
x \in E, n = 1, 2, 3, \ldots
$$
Then $\sum f_{n}$ converges uniformly on $E$ if $\sum M_{n}$ converges. 
> The converse is not necessarily true. 

Proof: 
If $\sum M_{n}$ converges, then for arbitrary $\vepsi > 0$, 
$$
\left| \sum_{i=n}^{m} f_{i}(x) \right|
\leq
\sum_{i=n}^{m} M_{i}\leq \vepsi 
\quad\quad\quad
(x \in E)
$$
provided $m,n$ are large enough. Then uniformly convergence is satisfied from [[#Criterion 2 (Cauchy Criterion)]]. 

# Uniform Convergence and Continuity
Suppose $f_{n}\to f$ uniformly on a set $E$ is a [[Metric Space|metric space]]. Let $x$ be a limit point of $E$, and suppose that 
$$
\lim_{t \to x} f_{n}(t) = A_{n} 
\quad\quad\quad
(n = 1, 2, 3, \ldots)
$$
Then $\{A_{n}\}$ converges, and 
$$
\lim_{t \to x} f(t) = \lim_{n \to \infty} A_{n}
$$
In other words, 
$$
\lim_{t \to x} \lim_{n \to \infty} f_{n}(t) = \lim_{n \to \infty} \lim_{t \to x} f_{n}(t)
$$
Proof:
Let $\vepsi > 0$ be given. By uniform convergence of $\{f_{n}\}$, $\exists N$ such that $n,m \geq N, t \in E$ imply 
$$
|f_{n}(t) - f_{m}(t)| \leq \vepsi
$$
Letting $t \to x$, we obtain 
$$
|A_{n} - A_{m}| \leq \vepsi
$$
for $n, m \geq N$ so that $\{A_{n}\}$ is a [[Cauchy Sequences|Cauchy Sequence]] and therefore converges. Let $A$ denote the convergence point. Then, 
$$
|f(t) - A| \leq |f(t) - f_{n}(t)| + |f_{n}(t) - A_{n}| + |A_{n} - A|
$$
If we pick $n$ such that 
$$
|f(t) - f_{n}(t)| \leq \vepsi/3
$$
for all $t \in E$ (possible by uniform convergence), and such that 
$$
|A_{n} - A| \leq \vepsi/3
$$
Then for this $n$, we choose neighborhood $N_{r}(x)$ of $x$ such that
$$
|f_{n}(t) - A_{n}| \leq \vepsi/3
$$
if $t \in V \cap E, t \neq x$. By substitution, 
$$
\begin{aligned}
|f(t) - A| 
&\leq |f(t) - f_{n}(t)| + |f_{n}(t) - A_{n}| + |A_{n} - A| \\
&\leq \vepsi/3 + \vepsi/3 + \vepsi/3 \\
&= \vepsi
\end{aligned}
$$
and we are done. 

## Corollary (Uniform Converges Retains Continuity)
If $\{f_{n}\}$ is a [[Sequences|sequence]] of [[Continuity|continuous]] functions on $E$, and if $f_{n}\to f$ uniformly on $E$, then $f$ is continuous on $E$. 

Proof:
$\forall p \in E$, WTS that $\lim_{x \to p} f(x) = f(p)$ or that 
$$
\forall \vepsi > 0, \exists \delta > 0, |x - p|< \delta \implies |f(x) - f(p)| < \vepsi 
$$
so we have that 
$$
|f(x) - f(p)| \leq |f(x) - f_{n}(x)| + |f_{n}(x) - f_{n}(p)| + |f_{n}(p) - f(p)|
$$
pick $N$ large enough so that 
$$
\begin{aligned}
|f(x) - f_{N}(x)| &< \vepsi/3 \\ 
|f(p) - f_{N}(p)| &< \vepsi /3
\end{aligned}
$$
since $f_{n}$ is continuous, then 
$$
\exists \delta > 0, |x - p| < \delta \implies |f_{n}(x) - f_{n}(p)| < \vepsi/3
$$
and summing up all portions, we have that 
$$
|f(x) - f(p)| \leq \vepsi
$$
# Definition (Complex Continuous Bounded Functions)
If $X$ is a [[Metric Space]] then let $\mathscr{C}(X)$ denote the set of all [[Complex Numbers|complex-valued]] [[Continuity|continuous]] bounded functions with domain $X$.  
- Boundedness is redundant if $X$ is compact, by [[Heine-Borel Theorem]]

We associate with $f \in \mathscr{C}(X)$ with a **[[Supremum]] norm**: 
$$
||f|| = \sup_{x \in X}|f(x)|
$$
- $f$ is bounded, so any norm is finite. It is obvious that $||f|| = 0$ only if $\forall x \in X, f(x) = 0$. 
- $h(x) = f(x) + g(x) \implies |h(x)| \leq |f(x)| + |g(x)| + ||f|| + ||g||$ for all $x \in X$ such that 
- $||f + g|| \leq ||f|| + ||g||$ 
- By defining $d(f, g) = ||f - g||$ , then we have that by [[Metric Space#Definition]], $\mathscr{C}(X)$ is a [[Metric Space]]. 

## Theorem (Complete)
$\mathscr{C}(X)$ is also a [[Cauchy Sequences#Definition (Completeness)|complete]] metric space. 

Proof:
If $\{f_{n}\} \subset \mathscr{C(X)}$ is a [[Cauchy Sequences|Cauchy Sequence]], then $\exists f \in \mathscr{C}(X)$ such that 
$$
\begin{aligned}
\sup_{n,m \geq N} |f_{n}(x) - f_{m}(x)| 
&\iff \lim_{n \to \infty} f_{n} = f \\
&\iff \lim_{n \to \infty} d(f_{n}, f) = 0 \\
&\iff \lim_{n \to \infty} \sup_{x \in X} d(f_{n}(x) - f(x)) = 0 \\
&\iff f_{n} \rrarrow f 
\end{aligned}
$$
by [[#Criterion 2 (Cauchy Criterion)]] and [[#Definition (Uniform Convergence)]]. Then by [[#Corollary (Uniform Converges Retains Continuity)]], $f$ is continuous and since $f_{n}$ is bounded, $f$ is bounded. Thus $f \in \mathscr{C}(X)$.

