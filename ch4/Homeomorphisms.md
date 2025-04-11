#ch4 #140A
# Definition (Homeomorphism) 
Let $f : X \to Y$ be [[Continuity|continuous]] and *bijective*. We say $f$ is a **homeomorphism** if $f^{-1}: Y \to X$ is continuous. 

# Lemma (Homeomorphism Retains Continuity Structure)
Let $f : X \to Y$ be a continuous bijection. Then $f$ is a [[Continuity#Definition (Homeomorphism)|homeomorphism]] 
$$\begin{aligned}
&\iff \forall \text{ open } O \subset X, f(O) \text{ is open in } Y \\
&\iff \forall \text{ closed} F \subset X, f(F) \text{ is closed in } Y \\
\end{aligned}$$
Proof:
Since $f$ is a bijection, $g := f^{-1} : Y \to X$ is well defined. By [[Continuity#Proposition (Topological Characterization of Continuity)|lemma]], we have that $g$ is continuous iff $g^{-1}(O)$ is open for all $O$ open, and vice versa for closed. 

Note $g^{-1} = (f^{-1})^{-1} = f$. So the above statement holds for $f$.   

# Proposition (Minimum for Homeomorphism)
Let $X$ be a [[Compact Sets|compact]] [[Metric Space|metric space]]. Suppose $f : X \to Y$ is injective and continuous. Then $f^{-1} : f(X) \to X$ is continuous. There is the same as saying $X$ is a homeomorphism from $X$ to $f(X)$.

Proof:
Note that $f : X \to f(X)$ is continuous and bijective (since it must surjective to its image). To see that $f^{-1}$ is continuous, we need to show the preimage of closed sets are closed by [[Continuity#Proposition (Topological Characterization of Continuity)|proposition]]. Let $F \subset X$ be closed and consider 
$$(f^{-1})^{-1}(F) = f(F)$$
Note $F$ is closed, $F \subset X$ and $X$ is compact. So $F$ must be also compact by [[Compact Sets#Lemma (Closed x Compact)|lemma]]. Then $f(F)$ is compact by [[Continuity#Proposition (Topological Characterization of Continuity)|proposition]] and and by [[Heine-Borel Theorem]], $f(F)$ is closed.

## Corollary
Any continuous bijection between [[Compact Sets|compact]] [[Metric Space|metric spaces]] is a [[Continuity#Definition (Homeomorphism)|homeomorphism]]. 

# Theorem (No Dimensional Reduction)
There does not exist a [[Continuity|continuous]] injective map from $[0, 1] \times [0, 1]$ into $\R$. 

Proof:
Suppose there is such an $f : [0, 1] \times [0, 1] \to \R$ that is injective and continuous. Let $I = f([0, 1] \times [0, 1])$. 
1. Since $[0, 1] \times [0, 1]$ is compact, $I$ is compact 
2. Since $[0,1] \times [0,1]$ is connected, $I$ is connected. 
Therefore $I = [a,b]$ for some $a,b \in \R$. Since $f$ is injective, then $a < b$. Let $c \in (a,b)$ and $f^{-1}(c) = p \in [0, 1] \times [0, 1]$. But then 
$$
f : \left([0,1] \times [0,1] \right) \longrightarrow [a,c) \cup (c, b]
$$
which is a continuous function from a connected set to a disconnected set, a contradiction. 