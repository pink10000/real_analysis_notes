---
tags:
  - 140B
  - ch6
---
Related: [[Vector-Valued Derivatives]] 
# Definition (Vector Valued Functions)
Let $f_{1},\ldots f_{k}$ be real functions on $[a,b]$, and let $f = (f_{1}, \ldots, f_{k})$ be the corresponding mapping of $[a,b]$ into $\R^{k}$. If $\alpha$ increases [[Monotonic|monotonically]] on $[a,b]$, to say that $\vvf \in \sR(\alpha)$ means that $f_{j} \in \sR(\alpha)$ for $j = 1,\ldots k$.  Then we define 
$$
\int_{a}^{b}{f} d \alpha = \left( \int_{a}^{b} f_{1} d\alpha, \ldots \int_{a}^{b} f_{k} d\alpha \right)
$$
# Theorem (Vector FTC)
If $\vvf : [a,b] \to \R^{k}$ and ${F}_{i}' = f_{i}$ then 
$$
\int_{a}^{b} \vvf dx = \vvf(b) = \vvf(a)
$$
Proof is done by repeating [[Fundamental Theorem of Calculus]] repeatedly $k$ times. 

# Proposition (Absolute Vector Integral)
$$
\left| \int_{a}^{b} \vvf(x) dx \right| \leq \int_{a}^{b} |\vvf|dx
$$
Proof: 
If $f_{1}, \dots f_{k}$ are components of $\vvf$, then 
$$
|\vvf| = (f_{1}^{2} + \cdots + f_{k}^{2})^{1/2}
$$
By [[Riemann-Stieltjes Integral#Proposition (Composition of Integrable is Integrable)]], each of the functions $f_{i}^{2} \in \sR(\alpha)$, and so does their sum. Since $x^{2}$ is a continuous function of $x$, then by [[Continuity#Theorem (Inverse Continuity)]], $\sqrt{x}$ is continuous on $[0, M], \forall M \in \R$. By [[Riemann-Stieltjes Integral#Proposition (Composition of Integrable is Integrable)|composition integration theorem]] again, then $|\vvf| \in \sR(\alpha)$. 

With this lemma, let $\textbf{y} = (y_{1}, \ldots, y_{k})$ where $y_{j} = \int f_{j} d \alpha$. Then $y = \int \vvf d \alpha$ and 
$$
|\textbf{y}|^{2} = \sum y_{i}^{2} = \sum y_{j} \int f_{j} d \alpha = \int \left( \sum y_{j} f_{j} \right) d \alpha
$$
By [[Complex Numbers#Cauchy-Schwarz Inequality]], 
$$
\sum y_{j}f_{j}(t) = \textbf{y}\cdot \vvf 
\leq |\textbf{y}\cdot \vvf| 
\leq |\textbf{y}| \cdot |\vvf(t)|
\quad\quad\quad (a \leq t \leq b)
$$
> The "$\cdot$" is a dot product. 

then by [[Riemann-Stieltjes Integral#Properties of the Integral|properties of the integral]], and applying the integral to both, we have
$$
\begin{aligned}
\sum y_{j}f_{j}(t) &\leq |\textbf{y}| \cdot |\vvf(t)| \\
\int \left( \sum y_{j} f_{j} \right) d \alpha &\leq \int \textbf|{y}| \cdot |\vvf(t)| d \alpha \\
|\textbf{y}|^{2} &\leq |\textbf{y}| \int |\vvf| d\alpha
\end{aligned}
$$
If $\textbf{y} = 0$ then we are done. If not, then by dividing this inequality with $|\textbf{y}|$, we are done. 


# Curves 
A **curve** in $\R^{k}$ is a [[Continuity|continuous]] function 
$$
y : [a,b] \to \R^{k}
$$
where its domain is 1 dimensional.  
- An **arc** is image of the map on some subset of the domain.
- The arc is **closed** if $f(a) = f(b)$. 

## Definition (Arc Length Approximation)
Given a [[Riemann-Stieltjes Integral#Definition (Riemann Integrals)|partition]] $P = \{x_{1}, \ldots, x_{n}\}$, define $\Lambda(P, \gamma)$ to be 
$$
\Lambda(P, \gamma) = \sum_{i=1}^{n} |\gamma(x_{i} - \gamma(x_{i-1}|
$$
## Definition (Arc Length)
Let
$$
\Lambda(\gamma) = \sup_{P \text{ partitions}} \Lambda(P, \gamma)
$$
If $\Lambda(\gamma) < \infty$, we say $\gamma$ is **rectifiable** and the length of $\gamma$ is defined to be $\Lambda(\gamma)$.
> Related: [[Supremum]]

## Theorem 
If $\gamma : [a,b] \to R^{k}$ is a $\C^{1}$ curve, $\gamma'$ exists, and is [[Continuity|continuous]], then $\gamma$ is [[#Definition (Arc Length)|rectifiable]] and 
$$
\Lambda(\gamma) = \int_{a}^{b} |\gamma'(t)| dt
$$
