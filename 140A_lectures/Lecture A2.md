---
order: 2
---
#Lecture #140A
January 9, 2025

# Lemma
If $B \subset A$ and $B$ has a [[Supremum]], then the $\sup$ is unique. Similar statement for [[Infimum]]. 


#### Proof:
- [[Supremum]]:

Let $a, a'$ satisfy the definition of the [[Supremum]]. We show uniqueness by proving $a = a'$. For contradiction, suppose $a < a'$ or $a' < a$. 

Case 1: $a < a'$
Since $a' = \sup B$ and $a < a'$, but then by [[Supremum|property (2)]], $\exists b \in B$ such that $a < b$. OTOH, $a$ also satisfies $\forall b \in B, b \leq a$. But then $a < b \leq a$. This is a contradiction.

Case 2: $a' < a$
The proof is similar, or you can do WLOG.

Therefore $a = a'$.


- [[Infimum]] 

---
# [[Infimum]]
# [[Fields]] 