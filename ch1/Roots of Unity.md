#ch1 #140A
# Theorem ($n$th Roots)
For every $x > 0, x \in \R$, and any $n \in \N,$ there exists a unique $y > 0, y \in \R$ such that $y^{n}= x$. 

### Proof: (Uniqueness)
Recall if $0 < a < b$ and $n \in \N$, then $a^{n}< b^{n}$. This can be proved with induction. Suppose $\exists y_{1}\neq y_{2}\in \R$ such that 
$$
y_{1}^{n} = x = y_{2}^{n}
$$
Either $y_{1} < y_{2}$ or $y_{2}< y_{1}$. In either case, by our fact from above, $y_{1}^{n} \neq y_{2}^{n}$ . 
### Proof: (Existence)
We want to show that $\exists y \in \R, y > 0$ such that $y^{n}= x$. Let 
$$
A = \{z \in \R \mid z^n < x\}
$$
Note, 
- $A \neq \emptyset, 0 \in A$
- $A$ is bounded above. Indeed, $z > x + 1 \implies z^{n} \geq z > x \implies z \not\in A \implies x + 1$ is an upper bound. 
Then, $y := \sup(A)$ exists by the [[Fields#Theorem (Completeness of $ mathbb{R}$)|Completeness Axiom]]. Note $y \geq 0$. We claim $y^n = x$. 

Suppose for the sake of contradiction, that $y^{n} \neq x \implies y^{n}> x \vee y^{n} < x$.

**Case 1: $y^{n}< x$** 
1.  $a^{n}- b^{n}= (a - b)(a^{n-1} + a^{n-2}b + \cdots + ab^{n-2} + b^{n-1})$ 

Our goal is to find some $r \in (0, 1)$ such that $(y + r)^{n}< x$. If we can do this, then $y + r \in A$ and $y + r > y = \sup(A)$, a contradiction. 

We want to show, $y^{n}< (y + r)^{n} < x$ as this is equivalent to $(y + r)^{n} - y^{n}< x- y^{n}$. Using fact $1$ we have:
$$
r\left((y + r)^{n-1} + (y+r)^{n-1}y + \cdots + (y+r)y^{n-2} + y^{n-1}\right) < x - y^{n}
$$
Since $r \in (0, 1]$, we can get a uniform bound on these terms. 
- Indeed, the first term is $(y + r)^{n-1} < (y + 1)^{n-1}$. 
- The second term $(y + r)^{n-2}y < (y+1)^{n-2}y < (y+1)^{n-2}(y+1) = (y+1)^{n-1}$ is bounded by the same term. 
- The second last term, $(y+r)y^{n-2}< (y+1)(y+1)^{n-2} = (y+1)^{n-1}$ 
- The last term, $y^{n-2}< (y+1)^{n-1}$ 

So, if 
$$
r(n(y+1)^{n-1}) < x - y^{n} \iff r < \frac{x - y^{n}}{n(y + 1)^{n-1}}
$$
Choose $r$ to be half of the RHS. Then we are fine. However, the RHS may be larger than $1$, so we can say
$$
r = \min\left\{\frac{1}{2}\text{RHS}, \frac{1}{2} \right\}
$$
**Case 2: $y^{n}> x$**
Sketch: Find $r \in (0, 1]$ such that $y - r$ is still an upper bound for $A$. Then $y - r < y$ which is  contradiction with the [[Supremum]]. We want $r < \min\{1, y\}$ such that
$$
x < (y - r)^{n}< y^{n}
$$
This means $y - r$ is an upper bound for $A$. This is the same as 
$$
y^{n} - (y - r)^{n} < y^{n} - x
$$
We can use the identity $1$ from earlier to show an upper bound.
$$
y^{n}- (y + r)^{n} = r(y^{n-1}+y^{n-2}(y-r) + \cdots + (y-r)^{n-1})
$$
So, we can minimize this by maximizing $r$. So, each term is smaller than $y^{n-1}$. We get 
$$
y^{n}- (y-r)^{n} \leq r(ny^{n-1})
$$
We can let 
$$
r = \min\left\{ \frac{1}{2}, \frac{1}{2}\cdot \frac{y^{n} - x}{ny^{n-1}} \right\}
$$

# Definition
Let $x > 0$ and $n \in \N$. Then, we denote $x^{1 / n}$ as the unique $y \in \R, y>0$ such that $y^{n}= x$. 

# Corollary
If real $a,b > 0$ then $(ab)^{1/n} = a^{1/{n}}\cdot b^{{1/n}}$. 
### Proof: 
By definition, $(ab)^{1/n}$ is the unique $y>0$ such that $y^{n}= ab$. Similarly, $a^{1 / n}$ and $b^{1/n}$ is the unique $y_1$ and $y_{2}$ such that $y_{1}^{n}= a$ and $y_{2}^{n}= b$.

So, 
$$
(a^{1/n} \cdot b^{1/n})^{n} = (y_{1}\cdot y_{2})^{n}= y_{1}^{n}\cdot y_{2}^{n} = ab
$$

Then 
$$
(a^{1/n} \cdot b^{1/n})^{n} = n \iff a^{1/n} \cdot b^{1/n} = n^{1/n}
$$
and we are done.