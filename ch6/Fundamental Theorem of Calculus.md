---
tags:
  - 140B
  - ch6
---
# Proposition (Change of Variable)
First let $f$ be a bounded function from $[a,b] \to \R$ and let $\alpha : [a,b] \to \R$ be an increasing function. Let $\phi : [c, d] \to [a,b]$ be a [[Monotonic|strictly increasing]] [[Continuity|continuous]] function with $\phi(c)= a$ and $\phi(d) = b$. 

Then $f \in \mathscr{R}(\alpha) \iff f \circ \phi \in \mathscr{R}(\alpha \circ \phi)$ and 
$$
\int_{a}^{b} f d \alpha = \int_{c}^{d} (f \circ \phi) d (\alpha \circ \phi)
$$
> Note that $\phi$ is a [[Continuity|continuous]] bijection between $[a,b]$ and $[\alpha, \beta]$. Or, a [[Homeomorphisms|homeomorphism]]. It is like a *dictionary* to connect two different domains.  The composition $\alpha \circ \phi$ gives us a new [[Measure|measure]] for any subinterval of the new domain.

Proof: 
We still show for any [[Riemann-Stieltjes Integral#Definition (Riemann Integrals)|partition]] $P$ the set of [[Riemann-Stieltjes Integral|Riemann-Stieltjes Sums]] for $f,\alpha$ are in one-to-one correspondence with the the sums for $f \circ \phi, \alpha \circ \phi$ with respect to a partition of $[c,d]$. So, let 
$$
P := \{ x_{1}, x_{2}, \ldots, x_{n}  \}
$$
where 
$$
\sum_{i=1}^{n} f(\xi_{i})(\alpha(x_{i}) - \alpha(x_{i-1}))
\quad\quad\quad \xi_{i} \in [x_{i-1}, x_{i}]
$$
a Riemann sum for $f$ and $\alpha$. Since $\phi$ is a [[Homeomorphisms|homeomorphism]], $P$ corresponds with 
$$
P' := \{ \phi^{-1}(x_{1}), \phi^{-1}(x_{2}), \ldots, \phi^{-1}(x_{n}) \}
$$
> $\phi$ needs to be increasing so $\phi$ is a bijection. 

in which each point is unique. Then, every $\xi_{i}$ has a correspondence to $\phi^{-1}(\xi_{i})$ and we get the sum:
$$
\sum_{i=1}^{n} (f \circ \phi)(\phi^{-1}(\xi_{i}))
\bigg( (\alpha \circ \phi)(\phi^{-1}(x_{i})) - (\alpha \circ \phi)(\phi^{-1}(x_{i-1})) \bigg)
$$
But then this form can be recognized as Riemann-Stieltjes Sum for $f \circ \phi$ and $\alpha \circ \phi$ on $P'$. where 
$$
\begin{aligned}
U(P, f, \alpha) &= U(P', f \circ \phi, \alpha \circ \phi) \\
L(P, f, \alpha) &= L(P', f \circ \phi, \alpha \circ \phi)
\end{aligned}
$$
and so the respective upper and lower integrals are equal.
> If $\phi$ is strictly decreasing, then the bounds order needs to change. However, the theorem still holds. 

# Theorem (First Fundamental Theorem of Calculus)
If $f : [a,b] \to \R$ is [[Riemann-Stieltjes Integral|Riemann Integrable]], define
$$
F(x) = \int_{a}^{x} f(t) \,dt 
$$
for $x \in [a,b]$. Then $F$ is [[Continuity|continuous]]. Furthermore, if $f$ is continuous at $x_{0}$, then the [[Derivative|derivative]] $F'(x_{0})$ exists. In particular, $F'(x_{0}) = f(x_{0})$. 

Proof:
Take $p \in [a, b]$. WTS that $F$ is continuous at $p$. Assume $|f| \leq M$. Then if $|x - p| \leq \vepsi/M$, where $a < x \leq p$, we have 
$$
|F(x) - F(p)|
= \left| \int_{a}^{x} f(dt) - \int_{a}^{p}f dt \right|
= \left| \int_{x}^{p} f dt \right|
\leq M \cdot |p - x|
< \vepsi/M \cdot M = \vepsi
$$
by [[Riemann-Stieltjes Integral#Properties of the Integral|properties of the integral]] and so $F$ is continuous. 

Assume $f$ is continuous at $x_{0}$. WTS that $F'(x_{0}) = f(x_{0})$ where 
$$
\lim_{x\to x_{0}} \left| \frac{F(x) - F(x_{0})}{x - x_{0}} - f(x_{0}) \right| = 0 
$$
> The absolute value is not actually needed here. ([[Derivative]]) 

Then the sum is 
$$
\begin{aligned}
\lim_{x \to x_{0}}
\left|
	\frac{ \int_{x_{0}}^{x} f(t) dt}{x - x_{0}} - \frac{\int_{x_{0}}^{x} f(x_{0}) dt}{x - x_{0}} 
\right|
&=
\lim_{x \to x_{0}} 
\left| 
	\frac{ \int_{x_{0}}^{x} (f(t) - f(x)) dt }{x - x_{0}}
\right| \\ 
&\leq 
\lim_{x \to x_{0}} \sup_{t \in [x_{0}, x]} |f(t) - f(x_{0})|
= 0
\end{aligned}
$$
which converges to $0$ when $x \to x_{0}, t \to x_{0}$. 

# Theorem (Second Fundamental Theorem of Calculus)
If $f \in \mathscr{R}$ on $[a,b]$ and if there is a [[Derivative|differentiable]] function $F$ on $[a,b]$ such that $F' = f$, then 
$$
\int_{a}^{b} f(x) dx = F(b) - F(a)
$$
Proof:
Let $\vepsi > 0$ be given. Choose a partition $P = \{x_{0}, \ldots, x_{n}\}$ of $[a,b]$ so that $U(P, f) - L(P, f) < \vepsi$. The [[Derivative#Theorem (Cauchy Mean Value Theorem)|MVT]] gives points $t_{i} \in [x_{i-1}, x_{i}]$ such that 
$$
F(x_{i}) - F(x_{i-1}) = f(t_{i}) \Delta x_{i}
$$
for $i = 1, \ldots, n$. Thus 
$$
\sum_{i=1}^{n} f(t_{i}) \Delta x_{i} = F(b) - F(a)
$$
It follows from Rudin Theorem 6.7 that 
$$
\left| F(b) - F(a)- \int_{a}^{b} f(x) dx \right| < \vepsi 
$$
Since this is true for every $\vepsi > 0$, we are done.
> Need to fill in Theorem 6.7.

# Theorem (Integration by Parts)
Suppose $F,G$ are differentiable functions on $[a,b]$, $F' = f \in \mathscr{R}$, and $G' = g \in \sR$. Then 
$$
\int_{a}^{b} F(x) g(x) dx = F(b)G(b) - F(a)G(a) - \int_{a}^{b}f(x)G(x) dx
$$
Proof:
Let $H(x):= F(x)G(x)$. By [[#Theorem (Second Fundamental Theorem of Calculus)]] to $H$ and its [[Derivative|derivative]], we note that $H' \in \sR$ by [[Riemann-Stieltjes Integral#Properties of the Integral]]. 
> $H'(x) = F'(x)G(x) + F(x)G'(x) = fG + Fg$. 

