---
tags:
  - 140A
  - ch3
---
# Definition 
Given a [[Sequences|sequence]] $\{c_{n}\}$ of [[Complex Numbers]], the [[Series]], 

$$

\sum_{n=0}^{\infty} c_{n}z^{n}

$$

is called a **power series**. The numbers $c_{n}$ are the coefficients of the series, and $z\in \C$. Depending on the choice of $z$ this power series will converge or diverge. 

# Radius of Convergence
Given the power series $\sum c_{n}z^{n}$ put 

$$
\alpha = \limsup_{n\to\infty}\sqrt[n]{|c_{n}|} \quad\quad\quad R = \frac{1}{\alpha}
$$

Where if $\alpha = 0$ then $R = +\infty$ and $\alpha = +\infty$ then $R = 0$. Then $\sum c_{n}z^{n}$ **converges** if $|z| < R$ and **diverges** if $|z| > R$. 

Proof:
Let $a_{n}= c_{n}z^{n}$, and apply [[Series#Proposition (Root Test)|root test]]: 

$$

\limsup_{n\to\infty} \sqrt[n]{|a_{n}|} = |z| \limsup \sqrt[n]{|c_{n}|} = \frac{|z|}{R}

$$

and $R$ is the radius of convergence. 

## Special Radii 
1. $\sum n^{n}z^{n}$ has $R = 0$
2. $\sum z^{n}/n!$ has $R = +\infty$. Here we can use the [[Series#Proposition (Ratio Test)|ratio test]]. By [[Series#Remark (Ratio - Root Relationship)|Ratio-Root Relationship]] we can obtain the same radius.
3. $\sum z_{n}$ has $R = 1$. If $|z| = 1$ then it diverges. 
4. $\sum z^{n}/n$ has $R = 1$. it diverges if $z = 1$. It converges for all other $z$ with $|z| = 1$. 
