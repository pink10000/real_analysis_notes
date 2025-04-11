#140B #ch5 
# Theorem (Taylor's Theorem)
Suppose 
- $f$ is a real function on $[a,b]$
- $n$ is a positive integer
- $f^{(n-1)}$ is [[Continuity|continuous]] on $[a,b]$
- $f^{(n)}(t)$ exists for every $t \in (a,b)$

Let $\alpha, \beta$ be distinct points of $[a,b]$, and define 
$$
P(t) = \sum_{k=0}^{n-1} \frac{f^{(k)}(\alpha)}{k!}(t - \alpha)^{k}
$$
Then there exists a point $x$ between $\alpha$ and $\beta$ such that 
$$
f(\beta) = P(\beta) + \frac{f^{(n)}(x)}{n!}(\beta - \alpha)^{n}
$$
For $n = 1$, this is just the [[Derivative#Theorem (Weak Mean Value Theorem)]]. In general, the theorem shows that $f$ can be approximated by a polynomial of degree $n - 1$, and that the second equation allows us to estimate the *error* if we know bounds on $|f^{(n)}(x)|$.

Proof:
Let $M$ be defined by
$$\begin{equation}
f(\beta) = P(\beta) + M(\beta - \alpha)^{n}
\end{equation}
$$
and put 
$$
g(t) = f(t) - P(t) - M(t - \alpha)^{n} \quad\quad\quad (a \leq t \leq b)
$$
We have to show that $M = f^{(n)}(x)/n!$ for some $x$ between $\alpha$ and $\beta$. 
> Recall that Taylor's Theorem is a sum. So we need to find that the next element is possible. Note that $g$ is defined this way so that $g(\alpha) = g(\beta) = 0$. 
> - $g(\beta) = 0$ since rearranging the definition of $M$ is the same as $g(\beta)$ and it is equal to $0$. 
> - $g(\alpha) = 0$ since the second term is $P(\alpha) = f(\alpha)$. 
>   $$P(\alpha) 
   = \sum_{k=0}^{n=1} \frac{f^{(k)}(\alpha)}{k!}(\alpha - \alpha)^{k} 
   = \frac{f^{(0)}(\alpha)}{0!}(\alpha - \alpha)^{0} + \sum_{k=1}^{n-1}0^{k}
   = f(\alpha)$$
   and $g(\alpha) = f(\alpha) - f(\alpha) - 0 = 0$. 

By the original definition and the equation above, 
$$
g^{(n)}(t) = f^{(n)}(t) - n!M \quad\quad\quad (a < t < b)
$$
Hence the proof will be complete if we can show that $g^{(n)}(x) = 0$ for some $x$ between $\alpha, \beta$. Since $P^{(k)}(\alpha) = f^{(k)}(\alpha)$ for $k = 0, \dots, n - 1$, we have 
$$
g(\alpha) = g'(\alpha) = \cdots = g^{(n - 1)}(\alpha) = 0
$$
After $n$ steps we conclude that $g^{(n)}(x_{n}) = 0$ for some $x_{n}$ between $\alpha$ and $x_{n-1}$, that is, between $\alpha$ and $\beta$. 