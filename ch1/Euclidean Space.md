---
tags:
  - 140A
  - ch1
---
Let $n \in \N$ and define 
$$
\R^{n} = \{(x_{1}, \cdots, x_{n} \mid x_{j}\in \R\}
$$
where $\vec{x}$ or $\mathbf{x}$ is denoted as an element in it. We have some properties:
- Addition is kept from $\R$ 
- Multiplication by scalar. For $a \in \R, \vec{x} \in \R^{n}$ we have $a\vec{x} = (ax_{1}, \cdots, ax_{n})$.
- We keep commutativity, associativity, distributive laws, etc. 

# Inner Product
Given two vectors,
$$
\vec{x}\cdots\vec{y} = x_{1}y_{1}+ x_2y_{2}= \sum_{i=1}^{n}x_{i}y_{i}
$$
In particular, 
$$
\vec{x}\vec{x} = \sum_{i=1}^{n}x_{i}^{2}
$$

# Norm 
We define the norm as:
$$
||\vec{x}|| := \sqrt{\vec{x}\vec{x}} = \sqrt{\sum_{i=1}^{n} x_{i}^{2}}
$$

## Proposition
1. $||\vec{x}|| > 0$ unless $\vec{x} = \vec{0}$
2. $||\lambda \vec{x}|| = |\lambda| \cdot ||\vec{x}||$ for $\lambda \in \R$ 
3. [[Complex Numbers#Cauchy-Schwarz Inequality|Cauchy-Schwarz Inequality]]: So, $|\vec{x}\vec{y}| \leq ||\vec{x}|| \cdots ||\vec{y}||$
4. [[Complex Numbers#Triangle Inequality|Triangle Inequality]]: $||\vec{x} + \vec{y}|| \leq ||\vec{x}|| + ||\vec{y}||$
5. $||\vec{x} - \vec{y}|| \leq ||\vec{x} - \vec{z}|| + ||\vec{y} - \vec{z}||$

### Proof:
We see that $1,2$ is trivial and $3$ is just [[Complex Numbers#Cauchy-Schwarz Inequality|Cauchy-Schwarz]]. Assume $4$. We prove $5$. We note that 
$$
x - y = (x - z) + (z - y)
$$
so, with $4$, we get
$$
\begin{aligned}
||x - y|| 
&\leq ||x - z|| + ||z - y|| \\
&= ||x - z|| + ||-(y - z)|| \\
&=_{2}||x - z|| + |-1|\cdot ||y - z|| \\
&= ||x - z|| + ||y - z|| \\
\end{aligned}
$$
Now, we prove $4$. Let $\vec{x} = (x_{1}, \cdots x_{n})$ and $\vec{y} = (y_{1}, \cdots y_{n})$.  Because both sides are positive, it suffices to show
$$
||\vec{x} + \vec{y}||^{2} \leq (||\vec{x}|| + ||\vec{y}||)^{2}
$$
Then
$$
\begin{aligned}
||x + y||^{2}
&= \sum_{i=1}^{n}(x_{i}+y_{i})^{2} \\
&= \sum_{i=1}^{n} \left(x_{i}^{2}+ 2x_{i}y_{i}+ y_{i}^{2}  \right) \\
&= \sum_{i=1}^{n} x_{i}^{2}+ \sum x_{i}y_{i} + \sum y_{i}^{2} \\
&= ||x||^{2}+ 2xy + ||y||^{2}
\end{aligned}
$$
Now, by [[Complex Numbers#Cauchy-Schwarz Inequality|Cauchy-Schwarz]], we have that $|xy| \leq ||x|| \cdot ||y||$, in which replacement of the middle term gives us:
$$
\begin{aligned}
&\leq ||x||^{2}+ 2||x|| \cdot ||y|| + ||y||^{2} \\
&= (||x|| + ||y||)^{2} \\
\end{aligned}
$$
And the proof is done. 