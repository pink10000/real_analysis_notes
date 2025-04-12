#ch3 #140A
# Monotonically Increasing
A [[Sequences|sequence]] of real numbers $\{p_{n}\}$ is called **monotonically increasing** if $\forall n \in \N, p_{n} \leq p_{n+1}$. 
- $p_{1}\leq p_{2}\leq p_{3}\leq \cdots$ 

# Monotonically Decreasing
A [[Sequences|sequence]] of real numbers $\{p_{n}\}$ is called **monotonically decreasing** if $\forall n \in \N, p_{n}\geq p_{n+1}$. 
- $p_{1}\geq p_{2} \geq p_{3}\geq \cdots$

# Lemma (Monotone Convergence Theorem for Sequences)
- Suppose $\{p_{n}\}$ is [[Monotonic#Monotonically Increasing|monotonically increasing]] and bounded from above. Then $\{p_{n}\}$ converges. 
- If $\{p_{n}\}$ is [[Monotonic#Monotonically Decreasing|monotonically decreasing]] and bounded from below, then $\{p_{n}\}$ converges.

### Proof:
We only need to prove the first part. 
```
P1 = P2    P3 = P4    P5    P6  P7      P8         l        M
|          |          |       ||         |         |        |
-------------------------------------------------------------
```
Let $\varepsilon > 0$. Let $A = \{p_{n} \mid n \in \N \}$. Then $A \subset \R, A \neq \emptyset$ since $p \in A$. We know it is bounded above. Thus, it has a [[Supremum]], $\ell := \sup(A)$. I claim that 

$$
p_{n}\to \ell
$$

Consider $\ell - \varepsilon < \ell$. Then $\ell - \varepsilon$ is not a upper bound for $A$. Thus, $\exists N \in \N$ such that $\ell - \varepsilon < p_{N}$. On the other hand, since $\{p_{n}\}$ is monotonically increasing,

$$
\forall n \geq N, \ell - \varepsilon \leq p_{N} \leq p_{n} \leq \ell
$$

so $\forall n \geq N$, 

$$
\begin{aligned}
\ell - \varepsilon < p_{n}\leq \ell
&\implies - \varepsilon < p_{n} - \ell \leq 0 < \varepsilon \\
&\implies \forall n \geq N, |p_{n}- \ell | < \varepsilon
\end{aligned}
$$

And so it converges.

# Remark (Monotonic Space)
When a sequence is monotonic, then 

$$
\text{Convergent} \iff \text{Bounded}
$$


# Definition (Monotonic Functions)
Let $f: (a, b) \to \R$. We say $f$ is **monotonically increasing** if 
$$
\forall x,y \in (a,b), (x < y) \implies f(x) \leq f(y)
$$
Similarly, $f$ is **monotonically decreasing** if 
$$
\forall x,y \in (a,b), x < y \implies f(x) \geq f(y)
$$

It is **strict** if we replace $\leq$ with $<$ and $\geq$ with $>$. 

# Theorem (Monotonic Gives Limits)
Let $f$ be a monotonically increasing function on $(a,b)$. Then $\forall x \in (a,b)$ we have 
1. $f(x-)$ and $f(x+)$ exist.
2. $f(x-) \leq f(x) \leq f(x+)$. Moreover, $x < y \implies f(x+) \leq f(y-)$. 

Proof:
We show that $f(x+)$ exists and satisfied $f(x) \leq f(x+)$.  Let $A = \{f(t) \mid x < t < b\}$.  We note that $A$ is nonempty. So, $\forall t \in (x, b)$ since $f$ is monotonically increasing, $f(x) \leq f(t)$, so it is bounded below. Thus, $\inf A = \ell$ exists by [[Fields#Theorem (Completeness of $ mathbb{R}$)|Completeness Axiom]]. 

Claim $\ell = f(x+)$. 
Let $\vepsi > 0$. 
- For $t \in (a,b)$, we need to find $\delta > 0$ such that if $x < t < x + \delta$, then $|f(t) - \ell| < \vepsi$. 
- Since $\vepsi > 0$ and $\ell = \inf A$, then $\ell + \vepsi > \ell$ and so it is not a lower bound for $A$. 
- Thus $\exists x < t_{0} < b$ such that $\ell \leq f(t_{0}) < \ell + \vepsi$ since $\ell + \vepsi$ not LB, and density.
Now for all $t$ such that $x < t < t_{0} < b$, we have
1. $f(t) \in A \implies \ell \leq f(t)$
2. $f(t) \leq f(t_{0})$ and $f$ monotonically increasing, so $f(t) < \ell + \vepsi$
Thus, $\forall x < t < t_{0}$ we have $|f(t) - \ell| < \vepsi$.  

So if $\delta = t_{0} - x$ then we are done. A similar argument shows for $f(x-) \leq f(x)$. Now suppose 
$$
a < x < y < b
$$

Then 

$$

f(x+) = \inf\{f(t) \mid x < t < b \} = \inf\{f(t) \mid x < t < y\}

$$

and 
$$

f(y-) = \sup\{f(s) \mid a < s < y \} = \sup\{f(s) \mid x < s < y\}

$$

Then 

$$
\begin{aligned}
f(x+) 
&= \inf\{f(t) \mid x < t < y \} \\
&\leq \sup\{f(s) \mid x < s < y\} \\
&= f(y-)
\end{aligned}
$$

And so they are equal. 

## Corollary (Discontinuity by Monotonic)
If $f$ is monotonic, then all [[Continuity#Definition (Discontinuity)|discontinuities]] are of the first kind. 

## Proposition (Countable Discontinuities)
If $f$ is monotonic, then the set of [[Continuity|discontinuities]] is at most [[Cardinality#Lemma (Countability)|countable]]. 

Proof:
Let us assume $f$ is monotone. By [[Monotonic#Theorem (Monotonic Gives Limits)|theorem]], 

$$

(\forall x \in (a,b))(f(x-) \leq f(x) \leq f(x+))

$$

So if $f$ is discontinuous at $x$, then 

$$
f(x-) < f(x+) \iff (f(x-), f(x+)) \text{  is a nonempty open interval}
$$

Now let $x,y \in (a,b)$ with $x < y$. If $f$ is discontinuous at $x,y$. Then by [[Monotonic#Theorem (Monotonic Gives Limits)|theorem]], $f(x+) \leq f(y-)$. So we get:

$$

(1) \quad\quad\quad ( f(x-), f(x+) ) \cap (f(y-), f(y+) ) = \emptyset

$$

Let $A = \{x \in (a, b) \mid f \text{ discontinuous at } x\}$. If $A$ is nonempty, then $\forall x \in A$, let

$$

r(x) \in (f(x-), f(x+)) \cap \Q

$$

which exists be density of $\Q$. Define 

$$

\varphi : A \to \Q \quad\quad\quad x \mapsto r(x)

$$

We show that $\varphi$ is injective. Note for $x < y \implies r(x) < r(y)$ by $(1)$. Since $\Q$ is countable, $\varphi$ injective, then $A$ is at most countable.

# Proposition
Given any at most countable subset $A = (a_{n})_{n\to\N} \subset (a,b)$, there exists an increasing function on $(a,b)$ such that the discontinuity of $f$ are exactly $A$. 