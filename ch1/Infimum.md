---
tags:
  - 140A
  - ch1
---
# Definition
Set $B\subset A$ where $(A, <)$ is an ordered set has an infimum $\alpha$ if
1. $B \neq \emptyset$
2. $(\forall a \in A, \alpha < a)(\exists b \in B, b < a)$

An [[Ordered Sets|ordered set]] $(A, <)$ is said to have the **greatest lower bound property** if $\forall B \subset A, B \neq \emptyset$ and $B$ is bounded below, we have
$$
\inf B
$$
which exists in $A$.

## Example
Recall that we saw $(\mathbb{Q}, <)$ does not have the least upper bound property. Indeed,
$$
B = \{x \in \mathbb{Q} \mid x^{2}< 2 \}
$$
has no [[Supremum]] in $\mathbb{Q}$. 

# Property (LUB = GLB)
Let $(A, <)$ be an ordered set. Then $A$ has the [[Supremum|least upper bound property]] iff $A$ has the greatest lower bound property.

#### Proof:
$(\implies)$
Let $B \subset A, B \neq \emptyset$. $B$ must be *bounded below* because the properties exist if at least one subset exists that satisfies it. We want to show $\inf(B)$ exists. 
```
           x      B ---->
<----------|------|---------> A
```
Let 
$$
C = \{a \in A \mid a \text{ is a lower bound of } B\}
$$
- $C \neq \emptyset$ since $B$ is bounded below.
- $C$ is bounded above. Indeed, let $b \in B$ and $c \in C$. Then since $c \in C$, $c$ is a lower bound for $B$ and so $\forall x \in B, c \leq x$. In particular, $\forall c \in C, c \leq b$ and $C$ is [[Ordered Sets#Bounded Above|bounded above]].  

Then $A$ has the least upper bound property, $C \neq \emptyset, C$ bounded above. Therefore $\sup(C)$ exists. Let $d = \sup(C)$.

We *claim* that $d = \inf(B)$. To show this, we need to prove:
1. $d$ is a lower bound
2. $d$ is the greatest lower bound. I.e. $(\forall c \in A, d < c)(\exists b \in B, b < c)$. 

Suppose $d$ is not a lower bound for $B$. That is, suppose $\exists b_{0}\in B, b_{0}< d$. Since $d = \sup(C)$ and $d > b_{0}$. This implies $\exists c_{0}\in C$ such that $d \geq c_{0} > b$. 

However, $\forall c \in C, \forall b \in B$ we have $c \leq b$ (by definition of the construction of $C$) which gives a contradiction
$$
c = c_{0},\, b = b_{0}
$$
Now, for property $(2)$, suppose $d < c$. We want to show that $\exists b_{0}\in B$ such that $b_{0} < c$. Suppose by contradiction it is not. Then, $\forall b_{0}\in B, b_{0}\geq c$. Then $c$ is a lower bound for $B$. On the other hand, $d = \sup(C)$. So, $\forall c' \in C, c' \leq d$ we can plug in $c' = c$ to get a contradiction (conflicts with the supposition $d<c$). 

$(\impliedby)$
TODO

