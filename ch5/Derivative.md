---
tags:
  - 140B
  - ch5
---
# Definition 
Let $f$ be defined (and real-valued) on $[a,b]$. For any $x \in [a,b]$ for the quotient 
$$
\phi(x) = \frac{f(t) - f(x)}{t - x} \quad\quad\quad (a < t < b, t \neq x)
$$
and define 
$$
f'(x) = \lim_{t \to x} \phi(t)
$$
provided this [[Limits of Functions|limit]] exists. So, $f'$ is the **derivative** of $f$. If $f'$ is defined at a point $x$, then $f$ is **differentiable** at $x$. If this is true $\forall x \in E \subset [a,b]$ then $f$ is differentiable on $E$. 

# Theorem (Differentiable is Continuous)
Let $f$ be defined on $[a,b]$. If $f$ is differentiable at a point $x \in [a,b]$, then $f$ is [[Continuity|continuous]] at $x$. As $t \to x$, then [[Limits of Functions#Lemma (Sequential Characterization of Limits)|theorem]], 
$$
f(t) - f(x) = \frac{f(t) - f(x)}{t - x} \cdot (t - x) \to f'(x) \cdot 0 = 0
$$
The converse is not true. 

# Theorem (Derivative Rules)
1. $(f + g)'(x) = f'(x) + g'(x)$
2. $(fg)'(x) = f'(x)g(x) + f(x)+g'(x)$
3. $(f/g)'(x) = [g(x)f'(x) - g'(x)f(x)]/g^{2}(x)$ 
where $g(x) \neq 0$.  

Indeed, every derivative of a constant is $0$, and $f(x) = x^n$ means $f'(x) = nx^{n-1}$ by repeating $2$ and $3$ when $n \in \Z$. If $x < 0$ then let $n \neq 0$. Thus, every *polynomial* and *rational function* is differentiable. 

# Theorem (Chain Rule)
Suppose $f$ is [[Continuity|continuous]] on $[a,b]$, $f'(x)$ exists at some point $x \in [a,b]$, $g$ is defined on an interval $I$ which contains the range of $f$, and $g$ is differentiable at the point $f(x)$. If 
$$
h(t) = g(f(t)) \quad\quad\quad (a \leq t \leq b)
$$
then $h$ is differentiable at $x$, and 
$$
h'(x) = g'(f(x)) \cdot f'(x)
$$
Proof:
Let $y = f(x)$. By definition of the derivative, 
$$
\begin{aligned}
f(t) - f(x) &= (t - x)[f'(x) + u(t)] \\
g(s) - g(y) &= (s - y)[g'(y) + v(s)] \\
\end{aligned}
$$
where $t \in [a,b]$, $s \in I$ and 
- $u(t) \to 0$ as $t \to x$
- $v(s)\to 0$ as $s \to y$
> Note that $u,v$ are functions to indicate the "remainder" as $t \to x$. 

Let $s = f(t)$. Using the equations above, 
$$
\begin{aligned}
h(t) - h(x)
&= g(f(t)) - g(f(x)) \\
&= [f(t) - f(x)] \cdot [g'(y) + v(s)] \\ 
&= (t - x) \cdot [f'(t) + u(t)] \cdot [g'(y) + v(s)]
\end{aligned}
$$
or, if $t \neq x$, then 
$$
\frac{h(t) - h(x)}{t - x} = [g'(y) + v(s)] \cdot [f'(x) + u(t)]
$$
Letting $t \to x$, we see that $s \to y$, so that RHS tends to $g'(y)f'(x)$, which gives $h'(x)$. 
> The remainders get smaller. 

# Definition (Local Maximum/Minimum)
Let $f$ be a real function defined on a [[Metric Space]] $X$. We say $f$ has a **local maximum** at a point $p \in X$ if there exists $\delta > 0$ such that $f(q) \leq f(p), \forall q \in X$ with $d(p, q) < \delta$. 

**Local Minima** is defined likewise. 

# Theorem (Local Maxima have Zero-Derivatives)
Let $f$ be defined on $[a, b]$. If $f$ has a local maximum at a point $x \in (a, b)$, and if $f'(x)$ exists, then $f'(x) = 0$. 

Proof:
Let $\delta > 0$ be the radius in which $x$ is the local maximum such that
$$
a < x - \delta < x < x + \delta < b
$$
If $x - \delta < t < x$, then 
$$
\begin{aligned}
\frac{f(t) - f(x)}{t - x} \geq 0
\end{aligned}
$$
Letting $t \to x$, we see that $f'(x) \geq 0$. If $x < t < x + \delta$, then 
$$
\frac{f(t) - f(x)}{t - x} \leq 0
$$
and $f'(x) \leq 0$. Hence $f'(x) = 0$. 

# Theorem (Cauchy Mean Value Theorem)
If $f,g$ are [[Continuity|continuous]] real functions on $[a, b]$ which are differentiable in $(a, b)$, then there is a point $x \in (a, b)$ at which 
$$
[f(b) - f(a)]g'(x) = [g(b) - g(a)]f'(x)
$$
Differentiablility is not required at the endpoints. 

Proof:
Let 
$$
h(t) = [f(b) - f(a)]g(t) - [g(b) - g(a)]f(t) \quad\quad\quad (a \leq t \leq b)
$$
Then $h$ is continuous on $[a, b]$, $h$ is differentiable in $(a, b)$, and 
$$
h(a) = f(b)g(a) - f(a)g(b) = h(b)
$$
WTS that $h'(x) = 0$ for some $x \in (a, b)$. If $h$ is constant, then this is true for every $x \in (a, b)$. If $h(t) > h(a)$ for some $t \in (a,b)$, then let $x \in [a,b]$ that attains the maximum. By [[Derivative#Theorem (Local Maxima have Zero-Derivatives)|theorem]], $h'(x) = 0$. The same argument applies for the minimum. 
# Theorem (Lagrange Mean Value Theorem)
If $f$ is a real continuous function on $[a,b]$ which is differentiable in $(a,b)$, then there is a point $x \in (a,b)$ at which 
$$
f(b) - f(a) = (b - a)f'(x)
$$
Proof: Take $g(x) = x$ in [[Derivative#Theorem (Cauchy Mean Value Theorem)]]. 
# Theorem (Derivative Monotonicity)
Suppose $f$ is differentiable in $(a,b)$.
1. If $\forall x \in (a,b), f'(x) \geq 0$ then $f$ is [[Monotonic|monotonically]] increasing.
2. If $\forall x \in (a,b), f'(x) = 0$ then $f$ is constant. 
3. If $\forall x \in (a, b), f'(x) \leq 0$ then $f$ is [[Monotonic|monotonically]] decreasing.

Proof: Use [[Derivative#Theorem (Lagrange Mean Value Theorem)]]. 
# Theorem (Darboux's Theorem)
Suppose $f$ is a real differentiable function on $[a,b]$ and suppose 
$$
f'(a) < \lambda < f'(b)
$$
Then $\exists x \in (a,b)$ such that $f'(x) = \lambda$.
> Note this is different from the [[Continuity#Intermediate Value Theorem]]. Note the derivative. 

Proof:
Put $g(t) = f(t) - \lambda t$. 
> This is because $g'(t) = f'(t) - \lambda$ and so we need to find when $g'(t) = 0$.

Then $g'(a) < 0$, so that $g(t_{1}) < g(a)$ for some $t_{1} \in (a,b)$ and $g'(b) > 0$, so that $g(t_{2}) < g(b)$ for some $t_{2} \in (a,b)$. 
> See above. 

Hence $g$ attains a minimum on $[a,b]$ at some point $a < x < b$ by [[Continuity#Theorem (Continuity + Compact = sup/inf)|theorem]]. By [[Derivative#Theorem (Local Maxima have Zero-Derivatives)]], $g'(x) = 0$. Hence $f'(x)  = \lambda$. 

# Higher Derivatives
If $f$ has a derivative $f'$ on an interval, and if $f'$ is itself differentiable, we denote the derivative $f'$ by $f''$ and call $f''$ the **second derivative** of $f$. Continuing, we get
$$
f, f', f'', f^{(3)}, \cdots, f^{(n)}
$$
each one a derivative of the previous one. In order for $f^{(n)}(x)$ to exist at a point $x$, 
1. $f^{(n-1)}(t)$  must exist in a neighborhood of $x$ 
2. $f^{(n-1)}$ must be differentiable at $x$ 
3. Since $f^{(n-1)}$ must exist in a neighborhood of $x$, $f^{(n-2)}$ must be differentiable in that neighborhood and so on.
