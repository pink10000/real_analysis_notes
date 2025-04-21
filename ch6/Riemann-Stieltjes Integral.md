---
tags:
  - 140B
  - ch6
---
# Definition (Riemann Integrals)
Let $[a,b]$ be a given integral. By a **partition** $P$ of $[a,b]$ we mean a finite set of points $x_{0}, \dots, x_{n}$ where 
$$
a = x_{0}\leq x_{1}\leq \cdots \leq x_{n-1} \leq x_{n}= b
$$
We write
$$
\Delta x_{i} = x_{i} - x_{i -1} \quad\quad\quad (i = 1, \dots, n)
$$
Now suppose $f$ is a bounded real function defined on $[a,b]$. Corresponding to each partition $P$ of $[a,b]$ we put 
$$
\begin{aligned}
M_{i} &= \sup f(x) \quad\quad\quad (x_{i-1}\leq x \leq x_{i}) \\ 
m_{i} &= \inf f(x) \quad\quad\quad (x_{i-1} \leq x \leq x_{i}) \\
U(P, f) &= \sum_{i=1}^{n} M_{i}\Delta x_{i}\\ 
L(P, f) &= \sum_{i = 1}^{n}m_{i} \Delta x_{i}
\end{aligned}
$$
> $M_{i}$ and $m_{i}$ are the [[Supremum]] and [[Infimum]] of $f$ where the domain is restricted to partition $i$. Then, $U,L$ are just the sums of the areas where $M_{i},m_{i}$ are the "height" of the rectangle.

and finally, 
$$
\begin{aligned}
\ovl{\int_{a}^{b}} f \,dx &= \inf U(P, f) \\
\underline{\int_{a}^{b}} f \, dx &= \sup L(P, f )
\end{aligned}
$$
where the [[Infimum]] and [[Supremum]] are taken over all partitions $P$ of $[a,b]$. The LHS are called the **upper** and **lower Riemann integrals of $f$** over $[a,b]$ respectively. 
## Definition (Riemann-Integrable)
If the upper and lower integrals are equal, then $f$ is **Riemann-Integrable**  on $[a,b]$. we write $f \in \mathscr{R}$ (that is, $\mathscr{R}$ denotes the set of Riemann-Integrable functions), and we denote the common value by 
$$
\int_{a}^{b} f \, dx \quad\quad\quad \text{or} \quad\quad\quad \int_{a}^{b} f(x) \, dx
$$
This is the **Riemann Integral** of $f$ over $[a,b]$. Since $f$ is bounded, there exist two numbers, $m$ and $M$, such that 
$$
m \leq f(x) \leq M \quad\quad\quad (a \leq x \leq b)
$$
Hence, for every $P$, 
$$
m(b - a) \leq L(p, f) \leq U(P, f) \leq M(b - a)
$$
the numbers $L(P, f)$ and $U(P, f)$ form a bounded set. Thus, the upper and lower integrals are defined for every bounded function $f$. 
> This is a bit confusing to understand, but what this it is comparing is 4 different rectangles.  
> 1. The first rectangle picks the "smallest height" from the whole $[a,b]$ and is applied to every partition.  
> 2. The $\inf$ at the $i$th partition is not necessarily the $\inf$ over $[a,b]$, so it could be a larger height. Thus it is $\leq$. 
> 3. This is quite obvious. 
> 4. The same logic follows as (1) but with the largest height applied to every partition. 

# Definition (Riemann-Stieltjes Integral)
Let $\alpha$ be a [[Monotonic|monotonically]] increasing function on $[a,b]$ (since $\alpha(a), \alpha(b)$ are finite, it follows that $\alpha$ is bounded on $[a,b]$) . Corresponding to each partition $P$ of $[a,b]$, we write 
$$
\Delta \alpha_{i} = \alpha(x_{i}) - \alpha(x_{i-1})
$$
It is clear that $\Delta \alpha_{i} \geq 0$. For any real function $f$ which is bounded on $[a,b]$ we put 
$$
\begin{aligned}
U(P, f \alpha) &= \sum_{i=1}^{n}M_{i} \Delta \alpha_{i} \\ 
L(P, f,\alpha) &= \sum_{i=1}^{n}m_{i} \Delta \alpha_{i} \\ 
\end{aligned}
$$
where $M_{i}, m_{i}$ have the same meaning as [[Riemann-Stieltjes Integral#Definition (Riemann Integrals)]] and we define 
$$
\begin{aligned}
\ovl{\int_{a}^{b}} f \, d\alpha &= \inf U(P, f,\alpha) \\ 
\underline{\int_{a}^{b}} f\, d\alpha &= \sup L(P, f, \alpha) \\
\end{aligned}
$$
and the $\inf,\sup$ is being taken over all partitions. If equal, then 
$$
\int_{a}^{b} f \,d\alpha \quad\quad\quad \text{or} \quad\quad\quad \int_{a}^{b} f(x) \, d\alpha(x)
$$
This is the **Riemann-Stieltjes Integral** of $f$ with respect to $\alpha$ over $[a, b]$. 
> This is a generalization of the Riemann Integral. Think of $\alpha$ as a weighing the standard area. The Riemann Integral can be computed when $\alpha(x) = x$. 
---
> From here on out, assume that $f$ is real and bounded, and that $\alpha$ is [[Monotonic|monotonically]] increasing. 
# Definition (Refinement)
We say that the partition $P^{*}$ is a **refinement** of $P$ if $P^{*} \supset P$. Given two partitions $P_{1}, P_{2}$, we say that $P^{*}$ is a **common refinement** if $P^{*} = P_{1} \cup P_{2}$. 

# Theorem (Upper Limits of Refinements)
If $P^*$ is a refinement of $P$ then 
$$
L(P, f, \alpha) \leq L(P^{*}, f, \alpha)
\quad\quad \text{and} \quad\quad
U(P^{*}, f,\alpha) \leq U(P,f,\alpha)
$$
Proof: 
It suffices to prove when $P^{*}$ has one more point than $P$. Let this point be $c$ such that $\{c\} = P^{*}\setminus P$. We can assume that $x_{i-1} < c < x_{i}$  for some $1 \leq i \leq n$. Then 
$$
\begin{aligned}
L(P^{*}, f, \alpha) - L(P, f, \alpha) 
&= \inf_{[x_{i-1}, c]} f\cdot ([\alpha(c) - \alpha(x_{i-1})]) \\
&+ \inf_{[c, x_{i}]} f\cdot (\alpha(x_{i}) - \alpha(c)) \\
&- \inf_{[x_{i-1}, x_{i}]} f\cdot (\alpha(x_{i}) - \alpha(x_{i-1})) \\
\end{aligned}
$$
> Recall that these are sums. 

Now since 
$$
\inf_{[x_{i-1}, c ]} f + \inf_{[c, x_{i}]} \geq \inf_{[x_{i-1}, x_{i]}}f
$$
we get that $L(P^{*}, f, \alpha) - L(P, f, \alpha) \geq 0$. 

# Proposition (Separate Partition Limits)
For any two partitions $P, P'$ we have $L(P, f, \alpha) \leq U(P', f, \alpha)$.  

Proof:
Take $P^{*} = P \cup P'$, the common refinement. Then 
$$
L(P, f, \alpha) 
\leq\overset{(a)} L(P^{*}, f, \alpha) 
\leq\overset{(b)} U(P^{*}, f, \alpha) 
\leq\overset{(a)} U(P', f, \alpha)
$$
which is true from 
- $(a):$ [[#Theorem (Upper Limits of Refinements)]]  
- $(b):$ For any $\xi_{i}$, we see $m_{i} \leq f(\xi_{i}) \leq M_{i}$. 
# Proposition (Riemann LB < UB)
$$
\underline{\int} \leq \ovl{\int}
$$
Proof: Since this is essentially comparing the [[Infimum]] and [[Supremum]], this follows from [[#Proposition (Separate Partition Limits)]]. 

# Lemma (Riemann-Stieltjes Integrability)
We say $f$ is Riemann-Stieltjes Integral iff $\forall \vepsi > 0, \exists P$ such that $U(P, f, \alpha) - L(P, f, \alpha) < \vepsi$ for partition $P$. 

Proof:
$(\implies)$. If Riemann-Stieltjes integrable, then $\ovl{\int} = \underline{\int}$. Then for $\vepsi/2, \exists P$ such that 
$$
U(P, f, \alpha) < \overline{\int} + \; \vepsi/2
$$
Similarly, $\exists P'$ such that 
$$
L(P', f, \alpha) \geq \underline{\int} -\; \vepsi/2
$$
So, we have that 
$$
U(P, f, \alpha) - L(P', f, \alpha) < \vepsi
$$
Then take $P \cup P'$ and apply [[#Theorem (Upper Limits of Refinements)]]. 

$(\impliedby)$. The assumption implies that $\ovl{\int} - \underline{\int} < \vepsi$ for all $\vepsi > 0$. Then clearly they are equal and thus integrable by [[#Definition (Riemann-Stieltjes Integral)]].  

# Theorem (Continuity Implies Riemann-Stieltjes Integrable)
If $f$ is [[Continuity|continuous]] then $f$ is Riemann-Stieltjes Integrable for any $\alpha$. 
- Recall that we let $f$ be real and bounded. 
- $\alpha$ is monotonically increasing.

Proof:
We know $U(P, f, \alpha) - L(P, f, \alpha) = \sum_{i=1}^{n}(M_{i} - m_{i})\Delta\alpha_{i}$. Then over any closed interval, continuous functions are [[Continuity#Definition (Uniformly Continuous)|uniformly continuous]]. So, for any $\eta > 0, \exists \delta > 0$ such that if $|x - y| < \delta, |f(x) - f(y)| < \eta$. So if $|x_{i}- x_{i-1}| < \delta,$ then $M_{i}- m_{i} \leq \eta$.  
> Note that $M, m$ are defined as the [[Supremum]] and [[Infimum]] of $f$ on partition $P_{i}$. 

We take a $P$ such that $|x_{i}-x_{i-1}|< \delta$ for any $i$. Then 
$$
U(P, f, \alpha) - L(P, f, \alpha) \leq \sum_{i=1}^{n} \eta(\alpha(x_{i}) - \alpha(x_{i-1})) = \eta(\alpha(b) - \alpha(a))  
$$
This goes to $0$ so $\eta(\alpha(b) - \alpha(a)) < \vepsi$. 

# Proposition (Finite Discontinuities on Riemann-Stieltjes)
If $f$ has finite [[Continuity#Definition (Discontinuity)|discontinuities]], (i.e. $\exists u_{1}, \dots, u_{r}$ such that $f$ is continuous on $[a,b] \setminus \{u_{1}, \dots, u_{r}\}$) and if $\alpha$ is increasing, and continuous at $u_{1}, \dots, u_{r}$ then $f \in \mathscr{R}(\alpha)$. 

Proof: 
Fix $\vepsi > 0$. Let $|f| \leq M$ for $M > 0$. Then since $\alpha$ is [[Continuity|continuous]] at $u_{i}$, $\exists \vepsi_{i}$ such that 
$$
\alpha(u_{i} + \vepsi_{i}) - \alpha(u_{i} - \vepsi_{i}) < \frac{\vepsi}{4rM}
$$
Since $\alpha$ is continuous, the oscillation must approach $0$. It essentially forces the change in $\alpha$ in neighborhoods at the discontinuities to be arbitrarily small. Define 
$$
E := \bigcup_{i=1}^{n} (u_{i} - \vepsi_{i}, u_{i} + \vepsi_{i})
$$
and define 
$$
F := [a,b] \setminus E
$$
which is closed and hence [[Compact Sets|compact]]. Then since $f$ is *continuous* on $[a,b]$ it is uniformly continuous on $f$ by [[Continuity#Theorem (Continuity + Compact = Uniform Continuity)|theorem]]. We cut $f$ into subintervals to guarantee
$$
M_{i} - m_{i} < \frac{\vepsi}{2(\alpha(b) - \alpha(a))} 
$$
Now put all subintervals into partition $P$. Then 
$$
U - L 
= \underbrace{ \sum_{i=1}^{r} (M_{i} - m_{i}) \Delta\alpha_{i} }_{\text{intervals covering } E} 
+ \underbrace{ \sum_{i=1}^{n} (M_{i} - m_{i}) \Delta\alpha_{i} }_{\text{intervals covering }F}
\leq \left( \sum_{i=1}^{r} 2M \cdot \frac{\vepsi}{4rM}  \right)
   + \left( \frac{\vepsi}{2(\alpha(b) - \alpha(a))} \sum_{i=1}^{n} \Delta\alpha_{i} \right)
$$
which is $< \vepsi/2 + \vepsi/2 = \vepsi$. 

## Proposition (Increasing Riemann-Stieltjes)
If $f$ is increasing or decreasing then $f$ is Riemann-Stieltjes Integrable for any increasing continuous $\alpha$. 

Proof: 
Since $f$ is increasing, $M_{i}- m_{i} = f(x_{i}) - f(x_{i-1})$. If we cut the subintervals such that for some $N$,
$$
\Delta\alpha_{i} < \frac{1}{N(f(b) - f(a))}
$$
is the length of each subinterval. Then 
$$
U - L \leq \sum_{i=1}^{n} (f(x_{i}) - f(x_{i-1})) \frac{1}{N(f(b) - f(a))} = \frac{1}{N} < \vepsi
$$
> Note that we cancel out $f(b) - f(a)$ because we have a [telescoping sum](https://en.wikipedia.org/wiki/Telescoping_series).

# Proposition (Composition of Integrable is Integrable)
If $g$ is continuous and $f$ is Riemann-Stieltjes Integrable, and $g \circ f$ is well defined, then $g \circ f$ is integrable. 

# Theorem (Lebesgue) 
A bounded function $f : [a, b] \to \mathbb{R}$ is Riemann-Integrable iff the set 
$$
E := \{ x \in [a,b] \mid f \text{ is not continuous on } x \}
$$
has Lebesgue measure $0$. 


# Acknowledgement 
Special thanks to Ben for giving me his notes for this content. 