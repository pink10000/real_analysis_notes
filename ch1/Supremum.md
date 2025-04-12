---
tags:
  - 140A
  - ch1
---
Let $A$ be an ordered set and $B \subset A, B \neq \emptyset$, and bounded above. If there exists $a \in A$ such that
1. $a$ is an [[Ordered Sets#Bounded Above|upper bound]] for $B$
2. $\forall c \in A, c < a, \exists b \in B, c < b$. Then we say $B$ has the **least upper bound property**, and $a$ is called the **least upper bound** of $B$. Or,
$$
\sup B := a
$$
Here, we force the minimality of $a$ by supposing that any $c$ that exists would have some $b$ be greater than it. We are capturing the "best" upper bound. 

## Motivation
Can we find the best upper bound for the set
$$
A = \{ x \in \mathbb{Q} \mid x^{2}< 2\}
$$
- Note that $A \neq \emptyset$ because $0,1 \in A$. 
- $A$ is bounded above. $\forall x \in A, x^{2} < 2 \implies x < \sqrt{2}$ by definition. 
- Can we find the best upper bound for $A$ in $\mathbb{Q}$.  $\exists y \in \mathbb{Q}$ such that:
	1. $\forall x \in A, x \leq y$
	2. $y$ is the smallest rational number that is an upper bound for $A$
- Answer: No. 

#### Proof:
We show this by contradiction. __That is__, suppose $\exists y \in \mathbb{Q}$ that satisfies $(1)$ and $(2)$. By the [[Lecture A1#Lemma|lemma]], $y^{2} < 2$ or $y^{2}> 2$ by [[Ordered Sets|trichotomy]]. WLOG, assume, $1 \leq y \leq 2$.

If $y < 1$, then since $1 \in A$, $y$ cannot satisfy $(1)$. If $y > 2$, then since $2 \geq \sqrt{2}$ is an upper bound, then $y$ is not the smallest upper bound satisfying $2$.

##### Case 1: $y^{2} < 2$. 
```
<-----|-----|-----|-->
     y^2   z^2    2
```
We have some distance $a = 2 - y^{2} > 0$. If we can find some $z \in \mathbb{Q}$ where $z^{2}< 2 \implies z \in A$ then we have some contradiction. Let $z = y + r$ where $r$ is some "wiggle room", i.e. $r \in (0, 1]$ and $z^{2}< 2$. 

If this $z$ existed, then 
$$
z^{2}= y^{2} + 2yr + r^{2} < 2 \iff 2yr + r^{2} < 2 - y^{2} = a
$$
From the fact that $1 \leq y \leq 2$, we see that $2yr \leq 4r$, and given that $0 < r \leq 1$, then $r^{2} < r$. Given these inequalities, we can show:
$$
{\color{red} 2yr} + {\color{green} r^{2}} < {\color{red}4r} + {\color{green}r} =  5r < a
$$
So, by finding some $r$ that satisfies this, we are done. Choose $r = a/5$ and to choose it to be smaller, than we can simply multiply by $1/2$ and get $r = a/10$. As we need $r \in (0,1]$, 
$$
\begin{aligned}
0 < r \leq 1 
&\iff 0 < \frac{a}{10} \leq 1 \\ 
&\iff 0 < 2 - y^{2}\leq 10 \\
&\iff -2 < -y^{2} \leq 8 \\
&\iff -8 \leq y^{2} < 2 \\
\end{aligned}
$$
So, $r$ exists only if $-8 \leq y^{2}< 2$. So, $1 \leq y \implies 1 \leq y^2$ and proves the LHS of the inequality, and the assumption of the case is th RHS. As $r$ exists, $z$ exists, $z^2$ exists and there is no upper bound.

##### Case 2: $y^{2} > 2$. 
```
      2    z^2   y^2
<-----|-----|-----|-->
```
Again, let $a = y^{2} - 2 > 0$. The goal is to find some $z^2 \in \mathbb{Q}$ where the above inequality holds. So
- $z = y - r$. 
- $r \in (0, 1]$
- $z^{2}>2$
So, 
$$
z^{2} = y^{2} - 2yr + r^{2} > 2 \iff r^{2} - 2yr > 2 - y^{2} = a
$$
for some $z$ to exist, this inequality must hold. As before, 
- $1 \leq  y \leq 2 \implies 2r \leq 2yr \leq 4r$ 
- $r \in (0, 1] \implies 0 < r^{2} < r$ 
Such that,
$$
{\color{red} r^{2}} - {\color{green} 2yr} > {\color{red}0} + {\color{green}-4r} > 2 - y^{2} = a
$$
Then, let $r = -a / 8$. So, 
$$
\begin{aligned}
0 < r \leq 1 
&\iff 0 < \frac{-a}{8} \leq 1 \\\
&\iff -8 \leq a < 0 \\ 
&\iff -8 \leq 2 - y^{2} < 0 \\
&\iff 2 < y^{2} \leq 10
\end{aligned}
$$
Where the LHS is true by the assumption and the RHS is true by the fact that $y \leq 2 \implies y^{2}\leq 4$. Therefore it is a contradiction.

-----

Given a contradiction in Case 1 and Case 2, does that mean no $y \in \mathbb{Q}$ for property $(1)$ and $(2)$... 


