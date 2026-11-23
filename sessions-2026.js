window.examSessions = {
  "mai": [
    {
      "id": "anomalie",
      "stem": "Parmi les anomalies suivantes, laquelle ou lesquelles sont directement causées par la redondance des données ?",
      "code": "",
      "options": [
        "Lors de la mise à jour d’une information, certaines copies ne sont pas modifiées, créant des incohérences.",
        "La suppression d’un tuple peut entraîner la perte d’informations non redondantes.",
        "Le temps de réponse aux requêtes augmente en raison du volume de données.",
        "L’accès concurrent provoque des interblocages.",
        "Aucune de ces réponses n’est correcte."
      ],
      "correct": [
        0
      ],
      "explanation": "Si une information est copiée à plusieurs endroits, une mise à jour partielle laisse des valeurs contradictoires. Un interblocage relève de la concurrence. Le volume supplémentaire peut peser sur les performances, mais la question vise l’anomalie de mise à jour directement illustrée.",
      "figure": null,
      "section": "Fondamentaux"
    },
    {
      "id": "independance",
      "stem": "L’indépendance physique des données dans un SGBD signifie que :",
      "code": "",
      "options": [
        "Les applications peuvent accéder aux données sans connaître leur organisation sur disque.",
        "Les données sont automatiquement répliquées sur plusieurs serveurs.",
        "Le schéma logique et le schéma conceptuel sont identiques.",
        "Les utilisateurs peuvent modifier le schéma sans droits particuliers."
      ],
      "correct": [
        0
      ],
      "explanation": "L’indépendance physique permet par exemple d’ajouter un index ou de changer le stockage sans réécrire les requêtes de l’application. Elle concerne la séparation entre l’accès logique et l’implantation sur disque.",
      "figure": null,
      "section": "Fondamentaux"
    },
    {
      "id": "merise",
      "stem": "Laquelle ou lesquelles de ces affirmations sur la méthode MERISE est correcte ?",
      "code": "",
      "options": [
        "Le passage du MCD au MLD consiste à traduire entités et associations en tables relationnelles.",
        "Le MCD est directement exécutable par un SGBD relationnel.",
        "MERISE ne s’intéresse qu’aux données, pas aux traitements.",
        "Le MLD est indépendant du type de SGBD utilisé.",
        "Aucune de ces réponses n’est correcte."
      ],
      "correct": [
        0
      ],
      "explanation": "Le passage du MCD au MLD relationnel transforme entités et associations en tables, clés et contraintes. Le MCD est conceptuel et MERISE étudie aussi les traitements. Le catalogue retient uniquement cette proposition. Nuance : un MLD relationnel est indépendant d’un produit précis, mais il dépend du modèle de données choisi.",
      "figure": null,
      "section": "Fondamentaux"
    },
    {
      "id": "sgbd-fonctions",
      "stem": "Parmi les propositions suivantes, laquelle ou lesquelles sont des fonctions assurées par un SGBD ?",
      "code": "",
      "options": [
        "Garantir la persistance des données en cas de panne logicielle ou matérielle.",
        "Gérer les droits d’accès des différents utilisateurs.",
        "Assurer la cohérence des données lors d’accès concurrents.",
        "Compiler du code source applicatif en langage machine.",
        "Aucune de ces réponses n’est correcte."
      ],
      "correct": [
        0,
        1,
        2
      ],
      "explanation": "Le SGBD gère la récupération après panne, les autorisations et les transactions concurrentes. La compilation du code applicatif relève d’un compilateur.",
      "figure": null,
      "section": "Fondamentaux"
    },
    {
      "id": "pkey",
      "stem": "Soit le modèle entité-association ci-dessous. Quelle est la clé primaire de l’entité adhérent ?",
      "code": "",
      "options": [
        "num_adh",
        "(num_adh, nom)",
        "email",
        "(num_adh, email)"
      ],
      "correct": [
        0
      ],
      "explanation": "Le symbole de clé sur num_adh en fait l’identifiant de l’adhérent. Le nom et l’adresse électronique sont des attributs descriptifs dans ce schéma.",
      "figure": {
        "src": "schema-emprunt.webp",
        "alt": "Adhérent (num_adh, nom, email) lié à Livre par emprunte, qui porte retour. Cardinalités côté adhérent 0,n et côté livre 1,n."
      },
      "section": "Modélisation"
    },
    {
      "id": "attasso",
      "stem": "L’association emprunte possède ce qui semble être un attribut retour. Une association peut-elle posséder des attributs ?",
      "code": "",
      "options": [
        "Oui",
        "Non"
      ],
      "correct": [
        0
      ],
      "explanation": "Retour décrit un emprunt précis entre un adhérent et un livre. La valeur dépend du lien, ce qui justifie un attribut sur l’association emprunte.",
      "figure": {
        "src": "schema-emprunt.webp",
        "alt": "Adhérent (num_adh, nom, email) lié à Livre par emprunte, qui porte retour. Cardinalités côté adhérent 0,n et côté livre 1,n."
      },
      "section": "Modélisation"
    },
    {
      "id": "modcard",
      "stem": "Quelle(s) cardinalité(s) du schéma précédent ne pourront pas être traduite(s) en contrainte dans le modèle relationnel ?",
      "code": "",
      "options": [
        "Le « 1 » de « 1.n » côté livre.",
        "Le « n » de « 0.n » côté adhérent.",
        "Le « 0 » de « 0.n » côté adhérent.",
        "Le « n » de « 1.n » côté livre.",
        "Aucune de ces réponses n’est correcte."
      ],
      "correct": [
        0
      ],
      "explanation": "Le minimum 1 impose que chaque livre apparaisse dans au moins un emprunt. Dans une table de liaison, les clés étrangères vérifient que chaque emprunt référence des objets existants. Elles ne garantissent pas l’existence d’un emprunt pour chaque livre.",
      "figure": {
        "src": "schema-emprunt.webp",
        "alt": "Adhérent (num_adh, nom, email) lié à Livre par emprunte, qui porte retour. Cardinalités côté adhérent 0,n et côté livre 1,n."
      },
      "section": "Modélisation"
    },
    {
      "id": "cardi",
      "stem": "Dans une cardinalité (0,1) placée à côté d’une entité dans un modèle entitéassociation :",
      "code": "",
      "options": [
        "Chaque occurrence de l’entité peut ne participer à aucune occurrence de l’association, et participe à au plus une.",
        "Chaque occurrence de l’entité participe à exactement une occurrence de l’association.",
        "Au plus une occurrence de l’entité peut participer à l’association."
      ],
      "correct": [
        0
      ],
      "explanation": "La cardinalité se lit pour une occurrence de l’entité. Le minimum 0 autorise l’absence de lien et le maximum 1 interdit deux liens pour cette occurrence.",
      "figure": null,
      "section": "Modélisation"
    },
    {
      "id": "efaible",
      "stem": "Laquelle ou lesquelles de ces affirmations décrivent correctement une entité faible ?",
      "code": "",
      "options": [
        "Une entité faible ne peut pas être identifiée uniquement par ses propres attributs.",
        "Elle dépend d’une autre entité dominante pour son identification.",
        "La suppression de l’entité dominante entraîne la suppression des occurrences dépendantes.",
        "Une entité faible n’est reliée à aucune autre entité par le biais d’une association.",
        "Une entité faible ne possède aucun attribut."
      ],
      "correct": [
        0,
        1,
        2
      ],
      "explanation": "L’identifiant d’une entité faible dépend d’une entité propriétaire. Par exemple, la ligne 1 d’une commande n’est unique que dans cette commande. La disparition du propriétaire impose de traiter ses lignes dépendantes, par exemple avec une suppression en cascade ou en refusant la suppression tant qu’elles existent. Le catalogue retient les trois premières propositions.",
      "figure": null,
      "section": "Modélisation"
    },
    {
      "id": "fternaire",
      "stem": "Soit le modèle entité-association suivant, dans lequel les cardinalités (a, b), (c, d) et (e, f ) ont volontairement été laissées sous forme d’inconnues : Pour que ce modèle soit valable, il faut :",
      "code": "",
      "options": [
        "Que l’un au moins de a, c ou e soit ≥ 1",
        "Que l’un au moins de b, d ou f soit ≥ 1",
        "Que b,d, et f soient tous ≥ 2",
        "Qu’aucun de a, c, et e ne soit à 0",
        "Aucune de ces réponses n’est correcte."
      ],
      "correct": [
        2
      ],
      "explanation": "Le catalogue attend des maxima tous supérieurs à 1 pour une association ternaire sans dépendance fonctionnelle particulière. Les minima peuvent être nuls. Lorsqu’une dépendance existe, il faut la modéliser explicitement plutôt que déduire une règle générale interdisant toutes les associations ternaires avec un maximum de 1.",
      "figure": {
        "src": "schema-ternaire.webp",
        "alt": "Trois entités A, B et C reliées à une association ternaire, avec les cardinalités (a,b), (c,d) et (e,f)."
      },
      "section": "Modélisation"
    },
    {
      "id": "nbtables",
      "stem": "Soit le modèle entité-association suivant : Combien de tables et d’attributs sont nécessaires pour le traduire correctement en modèle relationnel ?",
      "code": "",
      "options": [
        "3 tables, 5 attributs",
        "3 tables, 7 attributs",
        "2 tables, 6 attributs",
        "2 tables, 7 attributs"
      ],
      "correct": [
        2
      ],
      "explanation": "Le lien est absorbé dans Chien, qui participe exactement une fois. Maitre garde insee et ville. Chien garde nom et age et reçoit insee et quand. Le total est 2 + 4 = 6 colonnes, réparties sur deux tables.",
      "figure": {
        "src": "schema-adoption.webp",
        "alt": "Maitre (insee, ville) est lié à Chien (nom, age) par adopte (quand), avec 0,1 côté maître et 1,1 côté chien."
      },
      "section": "Modèle relationnel"
    },
    {
      "id": "attributs",
      "stem": "Lorsque ce sera fait, on trouvera alors dans le modèle relationnel :",
      "code": "",
      "options": [
        "Un attribut quand dans une table adopte",
        "Deux attributs insee et nom dans une table adopte",
        "Un attribut quand dans une table chien",
        "Un attribut nom dans une table maitre",
        "Un attribut insee dans une table chien",
        "Aucune de ces réponses n’est correcte."
      ],
      "correct": [
        2,
        4
      ],
      "explanation": "La date quand décrit l’adoption et rejoint la clé étrangère insee dans Chien. L’association adopte se traduit ici sans table de liaison.",
      "figure": {
        "src": "schema-adoption.webp",
        "alt": "Maitre (insee, ville) est lié à Chien (nom, age) par adopte (quand), avec 0,1 côté maître et 1,1 côté chien."
      },
      "section": "Modèle relationnel"
    },
    {
      "id": "contraintes",
      "stem": "Et, à supposer que les contraintes de clés primaires soient déjà exprimées, il faudra de plus :",
      "code": "",
      "options": [
        "Ajouter une contrainte de valeur obligatoire quelque part",
        "Ajouter une contrainte de valeur unique quelque part",
        "Ajouter exactement une contrainte de clé étrangère quelque part",
        "Ajouter exactement deux contraintes de clé étrangère quelque part",
        "Aucune de ces réponses n’est correcte."
      ],
      "correct": [
        0,
        1,
        2
      ],
      "explanation": "Une clé étrangère sur Chien.insee référence Maitre. NOT NULL impose un maître à chaque chien. UNIQUE sur Chien.insee empêche d’associer un maître à deux chiens.",
      "figure": {
        "src": "schema-adoption.webp",
        "alt": "Maitre (insee, ville) est lié à Chien (nom, age) par adopte (quand), avec 0,1 côté maître et 1,1 côté chien."
      },
      "section": "Modèle relationnel"
    },
    {
      "id": "unidef",
      "stem": "Soit produits(id, code_barre) avec UNIQUE sur code_barre. On insère deux tuples avec code_barre = NULL.",
      "code": "",
      "options": [
        "Les deux insertions réussissent.",
        "La première réussit, la seconde échoue.",
        "Les deux insertions échouent."
      ],
      "correct": [
        0
      ],
      "explanation": "Dans la convention SQL utilisée par le sujet, UNIQUE autorise plusieurs NULL. Pour exiger un code-barres renseigné, il faudrait ajouter NOT NULL.",
      "figure": null,
      "section": "Modèle relationnel"
    },
    {
      "id": "cascad",
      "stem": "Que se passe-t-il lors de la suppression d’un tuple référencé par une clé étrangère ?",
      "code": "",
      "options": [
        "La suppression est rejetée par le SGBD.",
        "Les tuples référençants sont supprimés.",
        "Les clés étrangères sont mises à NULL."
      ],
      "correct": [
        0
      ],
      "explanation": "Sans action référentielle particulière, la suppression d’une ligne encore référencée est rejetée. ON DELETE CASCADE et ON DELETE SET NULL produisent les deux autres comportements lorsque ces options sont déclarées.",
      "figure": null,
      "section": "Modèle relationnel"
    },
    {
      "id": "algunion",
      "stem": "Soient P = {(a, 1), (b, 2), (c, 3)} et Q = {(a, 1), (c, 3), (d, 4)}. Combien de tuples comporte P ∪ Q ?",
      "code": "",
      "options": [
        "5",
        "3",
        "4",
        "6"
      ],
      "correct": [
        2
      ],
      "explanation": "L’union rassemble les tuples distincts. Les deux relations partagent (a, 1) et (c, 3). Il reste quatre tuples distincts : (a, 1), (b, 2), (c, 3) et (d, 4).",
      "figure": null,
      "section": "Algèbre relationnelle"
    },
    {
      "id": "alginter",
      "stem": "Pour P = {(a, 1), (b, 2), (c, 3)} et Q = {(a, 1), (c, 3), (d, 4)}, combien de tuples comporte P ∩ Q ?",
      "code": "",
      "options": [
        "2",
        "0",
        "1",
        "3"
      ],
      "correct": [
        0
      ],
      "explanation": "L’intersection garde uniquement les tuples présents dans les deux tables : (a, 1) et (c, 3).",
      "figure": null,
      "section": "Algèbre relationnelle"
    },
    {
      "id": "algdiff",
      "stem": "Pour P = {(a, 1), (b, 2), (c, 3)} et Q = {(a, 1), (c, 3), (d, 4)}, combien de tuples comporte P − Q ?",
      "code": "",
      "options": [
        "1",
        "0",
        "2",
        "3"
      ],
      "correct": [
        0
      ],
      "explanation": "Dans P, seuls (a, 1) et (c, 3) apparaissent aussi dans Q. Après les avoir retirés, il reste (b, 2).",
      "figure": null,
      "section": "Algèbre relationnelle"
    },
    {
      "id": "natjoin",
      "stem": "Soit S(A, B) = {(1, x), (2, y), (3, x)} et T(B, C) = {(x, p), (z, q)}. Combien de tuples comporte la jointure naturelle S ⋈ T ?",
      "code": "",
      "options": [
        "1",
        "0",
        "2",
        "3"
      ],
      "correct": [
        2
      ],
      "explanation": "La jointure naturelle compare la colonne commune B. Seule la valeur x figure dans les deux relations. Deux lignes de S portent x et une seule ligne de T le porte, donc 2 × 1 = 2 résultats.",
      "figure": null,
      "section": "Algèbre relationnelle"
    },
    {
      "id": "proj",
      "stem": "Soit S(A, B) = {(1, x), (2, y), (3, x)}. Combien de tuples distincts comporte la projection de S sur B ?",
      "code": "",
      "options": [
        "2",
        "1",
        "3",
        "0"
      ],
      "correct": [
        0
      ],
      "explanation": "La projection sur B part de x, y, x. L’algèbre relationnelle élimine les doublons, donc le résultat est {x, y}.",
      "figure": null,
      "section": "Algèbre relationnelle"
    },
    {
      "id": "selection",
      "stem": "La restriction (σ) en algèbre relationnelle affecte :",
      "code": "",
      "options": [
        "Les tuples d’une relation.",
        "Les attributs d’une relation.",
        "À la fois les attributs et les tuples d’une relation.",
        "Ni les attributs, ni les tuples d’une relation."
      ],
      "correct": [
        0
      ],
      "explanation": "Une restriction garde uniquement les tuples qui vérifient son prédicat. Les colonnes restent les mêmes. La projection est l’opération qui sélectionne des colonnes.",
      "figure": null,
      "section": "Algèbre relationnelle"
    },
    {
      "id": "valAB",
      "stem": "On veut les num_cmd des commandes contenant au moins deux plats différents. Dans l’expression suivante, ρ renomme une relation sans changer sa structure ni son contenu. Que valent A et B ?",
      "code": "Π X1.num_cmd (σ C (ρ X1 (A) ⋈ ρ X2 (B)))",
      "options": [
        "A = contient, B = contient",
        "A = contient, B = plats",
        "A = plats, B = contient",
        "A = commandes, B = contient"
      ],
      "correct": [
        0
      ],
      "explanation": "La table contient relie les commandes aux plats. On la compare à elle-même avec deux alias pour pouvoir confronter deux lignes de la même commande.",
      "figure": {
        "src": "schema-restaurant.webp",
        "alt": "Schéma restaurants : restaurant, plats, commandes et contient, qui relie les commandes aux plats."
      },
      "section": "Algèbre relationnelle"
    },
    {
      "id": "valC",
      "stem": "Dans l’expression qui cherche les commandes contenant au moins deux plats différents, que doit valoir C ?",
      "code": "Π X1.num_cmd (σ C (ρ X1 (A) ⋈ ρ X2 (B)))",
      "options": [
        "X1.num_cmd = X2.num_cmd ET X1.id_plat ≠ X2.id_plat",
        "X1.num_cmd ≠ X2.num_cmd",
        "X1.plat ≠ X2.plat",
        "X1.num_cmd ≠ X2.num_cmd ET X1.id_plat=X2.id_plat"
      ],
      "correct": [
        0
      ],
      "explanation": "Il faut associer deux lignes de la même commande et exiger deux identifiants de plats différents, puis projeter le numéro de commande. Une jointure explicite sur num_cmd évite qu’une jointure naturelle compare aussi les identifiants de plats.",
      "figure": {
        "src": "schema-restaurant.webp",
        "alt": "Schéma restaurants : restaurant, plats, commandes et contient, qui relie les commandes aux plats."
      },
      "section": "SQL · Analyse"
    },
    {
      "id": "sqla1",
      "stem": "Que retourne la requête suivante ?",
      "code": "SELECT num_cmd FROM commandes\nMINUS\nSELECT c1.num_cmd\nFROM contient c1, contient c2\nWHERE c1.num_cmd = c2.num_cmd\nAND c1.id_plat <> c2.id_plat;",
      "options": [
        "L’identifiant des commandes ne contenant qu’une seule référence de plat, peu importe sa quantité.",
        "L’identifiant des commandes qui ne contiennent aucun plat.",
        "L’identifiant des commandes ayant au moins deux plats différents.",
        "La liste de tous les numéros de commandes commandes passées, sans aucun filtre."
      ],
      "correct": [
        0
      ],
      "explanation": "La sous-requête repère les commandes avec au moins deux références de plats. MINUS retire ces commandes. Le choix attendu suppose que toute commande contient un plat. Si une commande vide est autorisée, elle reste aussi dans le résultat.",
      "figure": {
        "src": "schema-restaurant.webp",
        "alt": "Schéma restaurants : restaurant, plats, commandes et contient, qui relie les commandes aux plats."
      },
      "section": "SQL · Analyse"
    },
    {
      "id": "sqla3",
      "stem": "Que retourne la requête suivante ?",
      "code": "SELECT id_resto FROM plats\nGROUP BY id_resto\nHAVING COUNT(*) >= ALL (SELECT COUNT(*) FROM plats GROUP BY id_resto);",
      "options": [
        "L’identifiant du (ou des) restaurant(s) proposant le plus grand nombre de plats différents.",
        "La liste des restaurants ayant au moins un plat à leur carte.",
        "Le nombre total de plats servis par chaque restaurant.",
        "Cette requête est invalide car elle contient deux fois la clause GROUP BY."
      ],
      "correct": [
        0
      ],
      "explanation": "Le GROUP BY externe compte les plats pour chaque restaurant. La sous-requête fournit un effectif par restaurant, et >= ALL garde les groupes dont le total atteint le maximum, y compris les ex æquo.",
      "figure": {
        "src": "schema-restaurant.webp",
        "alt": "Schéma restaurants : restaurant, plats, commandes et contient, qui relie les commandes aux plats."
      },
      "section": "SQL · Analyse"
    },
    {
      "id": "sqla4",
      "stem": "Que permet d’identifier la requête SQL suivante ?",
      "code": "SELECT id_client\nFROM commandes c\nJOIN contient co ON c.num_cmd = co.num_cmd\nGROUP BY id_client\nHAVING COUNT(DISTINCT id_plat) = 1;",
      "options": [
        "Les clients qui n’ont jamais commandé qu’un seul plat, peu importe en quelle quantité.",
        "Les clients qui n’ont passé qu’une seule commande au total.",
        "Les clients qui commandent systématiquement une quantité égale à 1 pour chaque plat.",
        "Les clients ayant commandé tous les plats d’un restaurant au moins une fois."
      ],
      "correct": [
        0
      ],
      "explanation": "COUNT(DISTINCT id_plat) compte les références différentes par client, indépendamment des quantités et du nombre de commandes. L’égalité à 1 garde les clients n’ayant commandé qu’une seule référence.",
      "figure": {
        "src": "schema-restaurant.webp",
        "alt": "Schéma restaurants : restaurant, plats, commandes et contient, qui relie les commandes aux plats."
      },
      "section": "SQL · Écriture"
    },
    {
      "id": "sqlc1",
      "stem": "On veut, pour chaque plat, la somme totale des quantités commandées. Quelle requête est correcte ?",
      "code": "",
      "options": [
        "SELECT id_plat, SUM(quantite) AS total FROM contient GROUP BY id_plat;",
        "SELECT id_plat, SUM(quantite) AS total FROM contient WHERE id_plat IS NOT NULL;",
        "SELECT id_plat, COUNT(quantite) AS total FROM contient GROUP BY id_plat;",
        "SELECT SUM(quantite) AS total FROM contient HAVING id_plat IS NOT NULL;"
      ],
      "correct": [
        0
      ],
      "explanation": "SUM(quantite) additionne les quantités, tandis que COUNT(quantite) compte les lignes de quantité renseignée. GROUP BY id_plat produit un total pour chaque référence présente dans contient.",
      "figure": {
        "src": "schema-restaurant.webp",
        "alt": "Schéma restaurants : restaurant, plats, commandes et contient, qui relie les commandes aux plats."
      },
      "section": "SQL · Écriture"
    },
    {
      "id": "sqlc2",
      "stem": "On veut les noms des plats commandés plus de 3 fois au total (en sommant les quantités). Quelle requête est correcte ?",
      "code": "",
      "options": [
        "SELECT p.nom FROM plats p JOIN contient c ON p.id_plat = c.id_plat GROUP BY p.id_plat, p.nom HAVING SUM(c.quantite) > 3;",
        "SELECT p.nom FROM plats p JOIN contient c ON p.id_plat = c.id_plat WHERE SUM(c.quantite) > 3;",
        "SELECT p.nom FROM plats p WHERE p.id_plat IN (SELECT id_plat FROM contient WHERE quantite > 3);",
        "SELECT p.nom, SUM(c.quantite) AS total FROM plats p JOIN contient c ON p.id_plat = c.id_plat HAVING total > 3;"
      ],
      "correct": [
        0
      ],
      "explanation": "La requête groupe les lignes par plat puis filtre leur somme dans HAVING. WHERE quantite > 3 chercherait une seule ligne supérieure à 3, ce qui écarterait à tort deux commandes de deux unités.",
      "figure": {
        "src": "schema-restaurant.webp",
        "alt": "Schéma restaurants : restaurant, plats, commandes et contient, qui relie les commandes aux plats."
      },
      "section": "SQL · Écriture"
    },
    {
      "id": "sqlc3",
      "stem": "On veut les id_plat des plats qui n’ont jamais été commandés. Quelle requête est correcte ?",
      "code": "",
      "options": [
        "SELECT id_plat FROM plats MINUS SELECT id_plat FROM contient;",
        "SELECT id_plat FROM contient MINUS SELECT id_plat FROM plats;",
        "SELECT id_plat FROM plats WHERE id_plat NOT IN (SELECT id_plat FROM plats);",
        "SELECT id_plat FROM contient WHERE id_plat IS NULL;"
      ],
      "correct": [
        0
      ],
      "explanation": "Il faut partir de tous les plats, puis retrancher les références présentes dans contient. Inverser les deux côtés change le sens de la différence.",
      "figure": {
        "src": "schema-restaurant.webp",
        "alt": "Schéma restaurants : restaurant, plats, commandes et contient, qui relie les commandes aux plats."
      },
      "section": "SQL · Écriture"
    },
    {
      "id": "sqlc4",
      "stem": "On veut le nom du restaurant et le nom du plat pour chaque plat proposé. Quelle requête est correcte ?",
      "code": "",
      "options": [
        "SELECT r.nom AS resto, p.nom AS plat FROM restaurant r JOIN plats p ON r.id_resto = p.id_resto;",
        "SELECT r.nom, p.nom FROM restaurant r, plats p;",
        "SELECT r.nom, p.nom FROM restaurant r JOIN plats p ON r.nom = p.nom;",
        "SELECT nom FROM restaurant UNION SELECT nom FROM plats;"
      ],
      "correct": [
        0
      ],
      "explanation": "La clé du restaurant identifie le restaurant associé à chaque plat. Le produit cartésien créerait toutes les paires possibles et une jointure sur les noms comparerait deux informations de nature différente.",
      "figure": {
        "src": "schema-restaurant.webp",
        "alt": "Schéma restaurants : restaurant, plats, commandes et contient, qui relie les commandes aux plats."
      },
      "section": "SQL · Écriture"
    },
    {
      "id": "stmt",
      "stem": "Quelle instruction crée un objet Statement à partir d’une Connection cn ?",
      "code": "",
      "options": [
        "Statement st = cn.createStatement();",
        "Statement st = new Statement(cn);",
        "Statement st = cn.getStatement();",
        "Statement st = DriverManager.createStatement(cn);"
      ],
      "correct": [
        0
      ],
      "explanation": "createStatement() est une méthode de Connection. Elle crée un Statement lié à cette connexion, qui peut ensuite exécuter une requête.",
      "figure": null,
      "section": "JDBC"
    },
    {
      "id": "jdbcrs",
      "stem": "Quelles sont les erreurs dans le code suivant ?",
      "code": "ResultSet rs = st.executeQuery(\"SELECT nom, prix FROM plats\");\nwhile(rs.next()) {\nString n = rs.getString(0); // ligne A\nSystem.out.println(rs.getFloat(\"prix\")); // ligne B\n}",
      "options": [
        "Ligne A : les colonnes JDBC sont indexées à partir de 1, pas de 0.",
        "Ligne B : on ne peut pas accéder à une colonne par son nom avec getFloat().",
        "La méthode next() n’existe pas ; il faut utiliser hasNext().",
        "On ne peut pas mélanger accès par indice et accès par nom dans un même ResultSet.",
        "Aucune de ces réponses n’est correcte."
      ],
      "correct": [
        0
      ],
      "explanation": "Les index des colonnes débutent à 1. getString(0) est donc incorrect. getFloat(\"prix\") est valide et next() avance le curseur sur la ligne suivante.",
      "figure": null,
      "section": "JDBC"
    },
    {
      "id": "jdbcsecu",
      "stem": "Dans une architecture sécurisée, une application Java utilise un utilisateur user2 (mot de passe connu) pour se connecter, tandis que les données appartiennent à user1 (mot de passe inconnu). Quel est l’intérêt de n’accorder à user2 que des droits d’exécution des vues, ou des procédures ou fonctions stockées de user1 ?",
      "code": "",
      "options": [
        "Empêcher user2 d’accéder directement aux tables en base, limitant ainsi les risques d’indiscrétion, de falsification ou de vol de données.",
        "Augmenter la vitesse d’exécution des requêtes grâce à la mise en cache par l’utilisateur user1.",
        "Permettre à user2 de modifier la structure des tables (ALTER TABLE) sans affecter les données de user1.",
        "Éviter d’avoir à installer les drivers JDBC pour l’utilisateur user1."
      ],
      "correct": [
        0
      ],
      "explanation": "Le compte applicatif ne reçoit que les autorisations nécessaires pour travailler via les vues ou routines prévues. Il ne dispose ainsi pas d’un accès direct aux tables du propriétaire.",
      "figure": null,
      "section": "JDBC"
    }
  ],
  "aout": [
    {
      "id": "ansi-sparc-physique",
      "stem": "Selon la norme ANSI-SPARC, le niveau conceptuel correspond directement à la spécification de l’implantation physique des données sur les supports de stockage.",
      "code": "",
      "options": [
        "Vrai",
        "Faux"
      ],
      "correct": [
        1
      ],
      "explanation": "Le niveau conceptuel décrit les données et leurs liens à l’échelle de la base. L’organisation des fichiers, des index et du stockage relève du niveau interne.",
      "figure": null,
      "section": "Fondamentaux"
    },
    {
      "id": "surete-panne",
      "stem": "Quelle fonction essentielle d’un SGBD prend en charge la restauration de la base de données dans un état sain et cohérent suite à une panne matérielle ou logicielle ?",
      "code": "",
      "options": [
        "La sûreté de fonctionnement",
        "La description des données",
        "Le contrôle d’intégrité",
        "La gestion de la confidentialité"
      ],
      "correct": [
        0
      ],
      "explanation": "La sûreté de fonctionnement couvre la récupération après une panne. Le journal peut servir à annuler les transactions incomplètes et à rétablir les modifications qui avaient été validées.",
      "figure": null,
      "section": "Fondamentaux"
    },
    {
      "id": "remplacement-pointeurs",
      "stem": "Dans le modèle relationnel, par quoi les pointeurs physiques ont-ils été remplacés pour représenter les liens sémantiques entre les données ?",
      "code": "",
      "options": [
        "Par des références (très souvent entières) vers d’autres données.",
        "Par des tables de hachage dures stockées en mémoire cache.",
        "Par des arbres de dérivation sémantique.",
        "Par des chaînages de blocs physiques."
      ],
      "correct": [
        0
      ],
      "explanation": "Les liens reposent sur des valeurs qui se correspondent, souvent des clés étrangères vers des identifiants. Ainsi, les relations restent compréhensibles même si l’emplacement physique d’une ligne change.",
      "figure": null,
      "section": "Fondamentaux"
    },
    {
      "id": "objectifs-sgbd",
      "stem": "Parmi les propositions suivantes, quels sont les objectifs ou les problèmes directement résolus par l’introduction d’un SGBD par rapport à une gestion par fichiers traditionnels ?",
      "code": "",
      "options": [
        "Rendre les données indépendantes de leur représentation physique.",
        "Régler les problèmes d’incohérence dus aux accès concurrentiels.",
        "Stocker les données avec un maximum de redondance pour éviter les pertes.",
        "Rendre le stockage des données dépendant des spécificités des logiciels applicatifs."
      ],
      "correct": [
        0,
        1
      ],
      "explanation": "Un SGBD masque l’implantation physique et gère les accès concurrents pour éviter des incohérences. Il réduit aussi la redondance évitable et sépare le stockage du code applicatif.",
      "figure": null,
      "section": "Fondamentaux"
    },
    {
      "id": "traduction-er",
      "stem": "Selon le cours, l’expression « entité-relation » est une bonne traduction de l’anglais « entity-relationship » et doit être privilégiée.",
      "code": "",
      "options": [
        "Vrai",
        "Faux"
      ],
      "correct": [
        1
      ],
      "explanation": "La terminologie employée dans le cours est « entité-association ». Le mot relation désigne déjà un autre concept dans le modèle relationnel.",
      "figure": null,
      "section": "Modélisation"
    },
    {
      "id": "entite-faible",
      "stem": "Qu’est-ce qu’une « entité faible » au sens du modèle entitéassociation ?",
      "code": "",
      "options": [
        "Une entité dont les éléments ne peuvent pas être identifiés à l’aide de leurs seuls attributs.",
        "Une entité qui possède moins de deux attributs simples.",
        "Une entité qui ne peut pas être convertie en modèle logique relationnel.",
        "Une entité reliée exclusivement par des associations réflexives."
      ],
      "correct": [
        0
      ],
      "explanation": "Une entité faible ne s’identifie pas seule. Par exemple, la clé d’une ligne de commande associe l’identifiant de la commande à un numéro local.",
      "figure": null,
      "section": "Modélisation"
    },
    {
      "id": "valeurs-mcd",
      "stem": "Quelle est la règle concernant les valeurs concrètes des attributs (comme ’blanc’, ’noir’ pour une couleur) dans la représentation graphique d’un modèle Entité- Association (MCD) ?",
      "code": "",
      "options": [
        "Elles n’apparaissent jamais dans le modèle E-A.",
        "Elles doivent obligatoirement figurer entre parenthèses sous le nom de l’attribut.",
        "Elles apparaissent uniquement pour l’attribut servant de clé primaire.",
        "Les valeurs ne figurent que si l’entité correspondante est qualifiée de faible."
      ],
      "correct": [
        0
      ],
      "explanation": "Le modèle décrit les types d’entités, les liens, les attributs et éventuellement leurs domaines. Une couleur particulière est une donnée d’une occurrence, pas un élément à lister dans le diagramme.",
      "figure": null,
      "section": "Modélisation"
    },
    {
      "id": "modeles-cours",
      "stem": "La méthode MERISE prévoit de modéliser :",
      "code": "",
      "options": [
        "Les données mais pas les traitements.",
        "Les traitements mais pas les données.",
        "Les traitements et les données.",
        "Ni les traitements ni les données."
      ],
      "correct": [
        2
      ],
      "explanation": "MERISE étudie à la fois les données et les traitements. Le MCD fait partie du volet données.",
      "figure": null,
      "section": "Modélisation"
    },
    {
      "id": "double-piege-ternaire",
      "stem": "Soit l’extrait d’énoncé suivant : « Un propriétaire possède au moins un véhicule, et un véhicule possède au plus un contrat d’assurance ». Un concepteur propose de modéliser cette situation ainsi : Sa proposition est-elle juste ou fausse ?",
      "code": "",
      "options": [
        "Elle est juste.",
        "Elle est fausse, car les deux possessions du problème sont indépendantes.",
        "Elle est fausse, car la cardinalité maximale de 1 du côté du contrat (« au plus un ») rend l’association ternaire fondamentalement inadaptée sans décomposition ou contrainte d’intégrité fonctionnelle.",
        "Elle est fausse, mais uniquement parce que les cardinalités (0,1) et (0,n) ont été permutées.",
        "Elle est fausse, car le formalisme MERISE interdit formellement de relier plus de deux entités au sein d’un même schéma conceptuel.",
        "Elle est fausse, car une association ternaire exige obligatoirement que toutes les cardinalités minimales de chaque entité soient égales à 1."
      ],
      "correct": [
        1,
        2
      ],
      "explanation": "Posséder un véhicule et assurer un véhicule sont deux liens distincts. On peut les représenter par deux associations binaires, ce qui permet un véhicule dépourvu de contrat et impose au plus un contrat pour ce véhicule. Une ternaire seule ne traduit pas ces deux règles.",
      "figure": {
        "src": "schema-assurance.webp",
        "alt": "Propriétaire, véhicule et contrat d’assurance reliés par une association ternaire."
      },
      "section": "Modélisation"
    },
    {
      "id": "comprendre-cardinalites-binaires",
      "stem": "Soit le MCD suivant : Quelle est l’interprétation exacte des cardinalités de ce modèle selon les règles de la méthode MERISE ?",
      "code": "",
      "options": [
        "Chaque employé est affecté à exactement un et un seul département, tandis qu’un département peut n’avoir aucun employé ou en comporter plusieurs.",
        "Chaque département possède exactement un seul employé attitré, tandis qu’un employé peut être affecté à zéro ou plusieurs départements à la fois.",
        "Un employé a la possibilité de travailler dans plusieurs départements simultanément, mais un département ne peut pas contenir plus d’un employé.",
        "Il doit y avoir au minimum un département créé par employé de l’entreprise, et le nombre total d’employés par département est strictement limité à la valeur fixe n.",
        "Aucune de ces réponses n’est correcte."
      ],
      "correct": [
        0
      ],
      "explanation": "Le 1,1 côté employé impose exactement un département par employé. Le 0,n côté département autorise zéro, un ou plusieurs employés pour ce département.",
      "figure": {
        "src": "schema-emploi.webp",
        "alt": "Employé et département reliés par affecter. Cardinalités 1,1 côté employé, 0,n côté département."
      },
      "section": "Modélisation"
    },
    {
      "id": "proprietes-relation",
      "stem": "Parmi les propositions suivantes concernant les caractéristiques fondamentales d’une relation (table) au sens mathématique du modèle relationnel, lesquelles sont exactes ?",
      "code": "",
      "options": [
        "L’ordre des lignes (tuples) n’a aucune importance sémantique.",
        "L’ordre des colonnes (attributs) n’a aucune importance sémantique.",
        "Il ne peut pas y avoir deux lignes rigoureusement identiques au sein d’une même relation.",
        "Une table doit obligatoirement posséder au moins autant de clés étrangères que de clés primaires.",
        "Aucune de ces réponses n’est correcte."
      ],
      "correct": [
        0,
        1,
        2
      ],
      "explanation": "Une relation est un ensemble de tuples. Les doublons n’y figurent pas et les positions des lignes ou des attributs nommés ne portent pas de sens. Une relation peut n’avoir aucune clé étrangère.",
      "figure": null,
      "section": "Modèle relationnel"
    },
    {
      "id": "definition-fk",
      "stem": "Qu’est-ce qu’une clé étrangère (Foreign Key) dans un schéma relationnel ?",
      "code": "",
      "options": [
        "Un groupe d’attributs d’une relation destiné à contenir une valeur de la clé primaire d’une autre relation pour matérialiser un lien.",
        "Une clé de chiffrement externe utilisée pour sécuriser l’accès aux fichiers physiques de données.",
        "Un attribut qui contient obligatoirement l’adresse IP de l’utilisateur distant connecté au SGBD.",
        "Une clé primaire secondaire qui est générée automatiquement lorsqu’on manque de place dans la table principale."
      ],
      "correct": [
        0
      ],
      "explanation": "Une clé étrangère matérialise un lien en contenant une valeur d’une clé référencée. La définition du choix vise la clé primaire, mais une autre clé unique admissible peut aussi être référencée en SQL.",
      "figure": null,
      "section": "Modèle relationnel"
    },
    {
      "id": "pk-not-null",
      "stem": "La contrainte d’intégrité de l’entité (Entity Integrity) stipule qu’aucun attribut faisant partie de la clé primaire d’une relation ne peut :",
      "code": "",
      "options": [
        "Prendre la valeur NULL.",
        "Être de type texte ou chaîne de caractères.",
        "Être référencé par une clé étrangère provenant d’une autre table.",
        "Contenir une valeur entière supérieure à 100 000."
      ],
      "correct": [
        0
      ],
      "explanation": "Chaque colonne d’une clé primaire doit être renseignée, même si cette clé contient plusieurs colonnes. Une clé primaire peut être textuelle et peut être référencée.",
      "figure": null,
      "section": "Modèle relationnel"
    },
    {
      "id": "mcd-traduction-nb-tables",
      "stem": "Considérons le Modèle Conceptuel des Données (MCD) suivant décrivant la gestion d’un établissement d’enseignement : En appliquant les règles de traduction du modèle Entité-Association vers le modèle relationnel, combien de tables va-t-on obtenir au total ?",
      "code": "",
      "options": [
        "3 tables",
        "4 tables",
        "5 tables",
        "2 tables",
        "Aucune de ces réponses n’est correcte."
      ],
      "correct": [
        1
      ],
      "explanation": "Les trois entités donnent trois tables. Le lien entre professeur et cours s’intègre dans la table Cours, tandis que le lien plusieurs-à-plusieurs avec les étudiants demande une table de liaison. On obtient quatre tables.",
      "figure": {
        "src": "schema-etablissement.webp",
        "alt": "Étudiant, cours et professeur. Les étudiants suivent des cours et chaque cours est enseigné par un professeur."
      },
      "section": "Modèle relationnel"
    },
    {
      "id": "mcd-traduction-contraintes",
      "stem": "Supposons faite la traduction du modèle précédent en modèle relationnel. Quelles contraintes logiques doit-on poser sur id_prof pour respecter fidèlement les cardinalités du MCD ?",
      "code": "",
      "options": [
        "Une contrainte FOREIGN KEY et une contrainte NOT NULL, mais pas de contrainte UNIQUE.",
        "Une contrainte FOREIGN KEY, une contrainte NOT NULL et une contrainte UNIQUE.",
        "Uniquement une contrainte FOREIGN KEY, l’attribut pouvant rester à NULL.",
        "L’attribut devient la clé primaire de la table cours, remplaçant l’ancien identifiant."
      ],
      "correct": [
        0
      ],
      "explanation": "La référence à un professeur doit exister et être renseignée pour chaque cours. Plusieurs cours peuvent partager le même professeur, donc id_prof ne doit pas être unique.",
      "figure": {
        "src": "schema-etablissement.webp",
        "alt": "Étudiant, cours et professeur. Les étudiants suivent des cours et chaque cours est enseigné par un professeur."
      },
      "section": "Modèle relationnel"
    },
    {
      "id": "op-union",
      "stem": "Soient deux relations de même schéma A = {(a, 1), (b, 2)} et B = {(b, 2), (c, 3)}. Combien de tuples la relation résultant de l’union A ∪ B comporte-t-elle ?",
      "code": "",
      "options": [
        "3 tuples (le doublon est automatiquement éliminé)",
        "4 tuples",
        "2 tuples",
        "1 tuple"
      ],
      "correct": [
        0
      ],
      "explanation": "L’union regroupe (a, 1), (b, 2) et (c, 3). Le tuple (b, 2) figure dans les deux relations et n’est compté qu’une fois.",
      "figure": null,
      "section": "Algèbre relationnelle"
    },
    {
      "id": "op-intersection",
      "stem": "Soient les deux mêmes relations A = {(a, 1), (b, 2)} et B = {(b, 2), (c, 3)}. Quel est le contenu exact de la relation A ∩ B ?",
      "code": "",
      "options": [
        "{(b, 2)}",
        "{(a, 1), (c, 3)}",
        "{(a, 1), (b, 2), (c, 3)}",
        "La relation est vide (∅)"
      ],
      "correct": [
        0
      ],
      "explanation": "L’intersection garde le seul tuple présent dans A et dans B : (b, 2).",
      "figure": null,
      "section": "Algèbre relationnelle"
    },
    {
      "id": "op-difference",
      "stem": "Soient les deux mêmes relations A = {(a, 1), (b, 2)} et B = {(b, 2), (c, 3)}. Quel est le contenu exact de la relation A \\ B ?",
      "code": "",
      "options": [
        "{(a, 1)}",
        "{(c, 3)}",
        "{(b, 2)}",
        "{(a, 1), (c, 3)}"
      ],
      "correct": [
        0
      ],
      "explanation": "La différence A − B retire le tuple partagé (b, 2) de A. Il reste (a, 1). Le tuple (c, 3) n’était pas dans A.",
      "figure": null,
      "section": "Algèbre relationnelle"
    },
    {
      "id": "op-produit-cartesien",
      "stem": "Si une relation R 1 possède 3 tuples et une relation R 2 possède 4 tuples, combien de tuples comportera au maximum leur produit cartésien R 1 × R 2 ?",
      "code": "",
      "options": [
        "12 tuples",
        "7 tuples",
        "81 tuples",
        "0 tuple"
      ],
      "correct": [
        0
      ],
      "explanation": "Chaque ligne de R1 est associée à chacune des quatre lignes de R2. Avec trois lignes de départ, on obtient 3 × 4 = 12 paires.",
      "figure": null,
      "section": "Algèbre relationnelle"
    },
    {
      "id": "atrous-tiramisu-spaghetti",
      "stem": "On veut les num_cmd des commandes qui contiennent à la fois le plat nommé exactement « tiramisu » et un autre dont le nom contient « spaghetti ». Par quoi faut-il remplacer A et B ?",
      "code": "R1 = π num_cmd (σ nom = 'tiramisu' (plat ⋈ contient_commande))\nR2 = π num_cmd (σ A (plat ⋈ contient_commande))\nRésultat = R1 B R2",
      "options": [
        "A : nom LIKE ’%spaghetti%’ et B : ∩ (Intersection)",
        "A : nom = ’spaghetti’ et B : ∪ (Union)",
        "A : nom LIKE ’%spaghetti%’ et B : × (Produit cartésien)",
        "A : nom = ’spaghetti’ et B : \\ (Différence)",
        "Aucune de ces réponses n’est correcte."
      ],
      "correct": [
        0
      ],
      "explanation": "LIKE '%spaghetti%' repère les noms qui contiennent ce mot, même avec un préfixe ou un suffixe. L’intersection retient les commandes qui figurent dans les deux résultats.",
      "figure": {
        "src": "schema-commande.webp",
        "alt": "Schéma client, commande, plat et contient_commande, qui relie plat et commande."
      },
      "section": "Algèbre relationnelle"
    },
    {
      "id": "atrous-tous-les-plats",
      "stem": "On veut les id_client qui ont commandé tous les plats au moins une fois. Quelles relations remplacent A et B ?",
      "code": "Résultat = π id_client,id_plat (A ⋈ contient_commande) ÷ B",
      "options": [
        "A : commande et B : π id_plat (plat)",
        "A : plat et B : π id_client (commande)",
        "A : commande et B : plat",
        "A : restaurant et B : π id_plat (plat)",
        "Aucune de ces réponses n’est correcte."
      ],
      "correct": [
        0
      ],
      "explanation": "Commande apporte id_client et contient_commande apporte id_plat. La division vérifie, pour chaque client, que chaque identifiant du diviseur π_id_plat(plat) apparaît parmi ses couples client–plat.",
      "figure": {
        "src": "schema-commande.webp",
        "alt": "Schéma client, commande, plat et contient_commande, qui relie plat et commande."
      },
      "section": "Algèbre relationnelle"
    },
    {
      "id": "cours-stabilite",
      "stem": "Selon le cours, que signifie la propriété de « stabilité algébrique » des opérateurs relationnels ?",
      "code": "",
      "options": [
        "Le résultat de l’application d’un opérateur est toujours une relation, ce qui permet de composer les expressions à volonté.",
        "Le nombre de lignes d’une table reste fixe après l’application de l’opérateur.",
        "Le système empêche toute modification des clés primaires lors d’une jointure.",
        "Les performances de la requête restent stables quel que soit le volume de la base."
      ],
      "correct": [
        0
      ],
      "explanation": "La sortie d’un opérateur est encore une relation. Elle peut donc devenir l’entrée d’une sélection, d’une jointure ou de toute autre opération compatible.",
      "figure": null,
      "section": "Algèbre relationnelle"
    },
    {
      "id": "cours-danger-naturelle",
      "stem": "Pourquoi l’utilisation d’une jointure naturelle (▷◁) peutelle être dangereuse en pratique ?",
      "code": "",
      "options": [
        "Parce que renommer un attribut peut modifier le résultat de la requête sans provoquer d’erreur de syntaxe.",
        "Parce qu’elle supprime définitivement les données des tables d’origine.",
        "Parce qu’elle génère systématiquement des boucles infinies dans le SGBD.",
        "Parce qu’elle nécessite des droits d’administrateur système pour être exécutée."
      ],
      "correct": [
        0
      ],
      "explanation": "La jointure naturelle choisit ses colonnes de comparaison d’après leurs noms. Renommer ou ajouter une colonne peut changer implicitement le prédicat. JOIN ... ON rend les colonnes comparées explicites.",
      "figure": null,
      "section": "Algèbre relationnelle"
    },
    {
      "id": "sql-analyse-1",
      "stem": "Que fait précisément la requête SQL suivante ?",
      "code": "SELECT genre, COUNT(*)\nFROM Films\nWHERE annee_sortie > 2020\nGROUP BY genre\nHAVING COUNT(*) > 5;",
      "options": [
        "Elle affiche les genres cinématographiques comptant plus de 5 films sortis après 2020, ainsi que ce nombre de films.",
        "Elle affiche le nombre total de films sortis après 2020 pour tous les genres qui possèdent avant cela au moins 5 films dans la base.",
        "Elle compte le nombre de visionnages pour les films de chaque genre sortis après 2020.",
        "Elle affiche tous les genres de films ayant plus de 5 films au catalogue, sans se soucier de leur année de sortie.",
        "Aucune de ces réponses n’est correcte."
      ],
      "correct": [
        0
      ],
      "explanation": "WHERE garde les films sortis après 2020. GROUP BY forme un groupe par genre et HAVING garde les genres dont l’effectif dépasse cinq. SELECT renvoie ensuite le genre et son effectif.",
      "figure": {
        "src": "schema-cinema.webp",
        "alt": "Schéma Utilisateurs, Visionnages et Films. Visionnages référence un utilisateur et un film."
      },
      "section": "SQL · Analyse"
    },
    {
      "id": "sql-analyse-2",
      "stem": "Quelle est la signification exacte du résultat de cette requête ?",
      "code": "SELECT u.nom\nFROM Utilisateurs u\nJOIN Visionnages v ON u.id_util = v.id_util\nJOIN Films f ON v.id_film = f.id_film\nGROUP BY u.id_util, u.nom\nHAVING COUNT(DISTINCT f.genre) = 3;",
      "options": [
        "Elle extrait le nom des utilisateurs qui ont visionné des films appartenant précisément à 3 genres différents.",
        "Elle extrait le nom des utilisateurs qui ont visionné exactement 3 films au total.",
        "Elle affiche le nom des utilisateurs ayant regardé au moins 3 films d’un même genre.",
        "Elle liste les utilisateurs qui ont partagé leur compte avec 3 autres personnes.",
        "Aucune de ces réponses n’est correcte."
      ],
      "correct": [
        0
      ],
      "explanation": "Les jointures associent chaque utilisateur aux genres des films qu’il a visionnés. DISTINCT ne compte chaque genre qu’une fois. L’égalité impose trois genres différents, quel que soit le nombre de visionnages.",
      "figure": {
        "src": "schema-cinema.webp",
        "alt": "Schéma Utilisateurs, Visionnages et Films. Visionnages référence un utilisateur et un film."
      },
      "section": "SQL · Analyse"
    },
    {
      "id": "sql-analyse-3",
      "stem": "Que renvoie la requête suivante ?",
      "code": "SELECT titre\nFROM Films NATURAL JOIN Visionnages\nGROUP BY id_film\nHAVING COUNT(id_film) >= ALL\n(SELECT COUNT(id_film) FROM Visionnages\n);",
      "options": [
        "Le titre du film qui comptabilise le plus grand nombre de sessions de visionnage.",
        "Les titres de tous les films de la base de données, classés du plus populaire au moins populaire.",
        "Le titre du film dont la durée totale cumulée de visionnage est la plus élevée.",
        "Le titre du film le plus récent qui a été visionné au moins une fois.",
        "Aucune de ces réponses n’est correcte."
      ],
      "correct": [
        0
      ],
      "explanation": "Le catalogue coche le film le plus visionné, mais la requête affichée ne calcule aucun maximum par film. La sous-requête, sans GROUP BY, compte tous les visionnages ensemble. De plus Oracle exige de grouper titre s’il est sélectionné hors agrégat. Pour obtenir le maximum attendu, il faut grouper la sous-requête par id_film et inclure titre dans le GROUP BY extérieur.",
      "figure": {
        "src": "schema-cinema.webp",
        "alt": "Schéma Utilisateurs, Visionnages et Films. Visionnages référence un utilisateur et un film."
      },
      "section": "SQL · Analyse"
    },
    {
      "id": "sql-elab-1",
      "stem": "On souhaite obtenir la liste des utilisateurs (nom et pays) qui se sont inscrits au cours de l’année 2025 mais qui n’ont encore visionné AUCUN film. Quelle formulation est correcte ?",
      "code": "",
      "options": [
        "SELECT nom, pays FROM Utilisateurs WHERE date_inscription BETWEEN ’2025-01-01’ AND ’2025-12-31’ AND id_util NOT IN (SELECT id_util FROM Visionnages);",
        "SELECT nom, pays FROM Utilisateurs u JOIN Visionnages v ON u.id_util = v.id_util WHERE u.date_inscription LIKE ’2025%’ AND v.id_film IS NULL;",
        "SELECT nom, pays FROM Utilisateurs WHERE date_inscription = 2025 AND id_util = NULL;",
        "SELECT nom, pays FROM Utilisateurs WHERE date_inscription BETWEEN ’2025-01-01’ AND ’2025-12-31’ HAVING COUNT(id_util) = 0;",
        "Aucune de ces réponses n’est correcte."
      ],
      "correct": [
        0
      ],
      "explanation": "La première proposition filtre l’année puis exclut les identifiants présents dans Visionnages. Si la date stocke une heure, l’intervalle [début 2025, début 2026[ couvre toute l’année. NOT EXISTS évite aussi le piège des NULL dans la sous-requête.",
      "figure": {
        "src": "schema-cinema.webp",
        "alt": "Schéma Utilisateurs, Visionnages et Films. Visionnages référence un utilisateur et un film."
      },
      "section": "SQL · Écriture"
    },
    {
      "id": "sql-elab-2-sans-limit",
      "stem": "On souhaite obtenir la liste des titres de films dont la durée individuelle est strictement supérieure à la durée moyenne de tous les films enregistrés dans la base. Quelle est la formulation correcte ?",
      "code": "",
      "options": [
        "SELECT titre FROM Films WHERE duree > (SELECT AVG(duree) FROM Films);",
        "SELECT titre FROM Films WHERE duree > AVG(duree);",
        "SELECT titre FROM Films GROUP BY titre HAVING duree > AVG(duree);",
        "SELECT titre FROM Films WHERE AVG(duree) < duree GROUP BY genre;",
        "Aucune de ces réponses n’est correcte."
      ],
      "correct": [
        0
      ],
      "explanation": "La sous-requête calcule une moyenne unique sur tous les films. WHERE compare ensuite chaque durée à cette valeur. Un agrégat global ne s’emploie pas directement dans WHERE comme s’il était une colonne.",
      "figure": {
        "src": "schema-cinema.webp",
        "alt": "Schéma Utilisateurs, Visionnages et Films. Visionnages référence un utilisateur et un film."
      },
      "section": "SQL · Écriture"
    },
    {
      "id": "sql-elab-3",
      "stem": "On veut afficher l’identifiant de chaque utilisateur (id_util) ainsi que le temps total qu’il a passé à visionner des films. On souhaite exclure du résultat les utilisateurs dont le cumul global est inférieur ou égal à 500 minutes. Quelle est la bonne syntaxe ?",
      "code": "",
      "options": [
        "SELECT id_util, SUM(temps_visionne_min) FROM Visionnages GROUP BY id_util HAVING SUM(temps_visionne_min) > 500;",
        "SELECT id_util, SUM(temps_visionne_min) FROM Visionnages WHERE temps_visionne_min > 500 GROUP BY id_util;",
        "SELECT id_util, SUM(temps_visionne_min) FROM Visionnages WHERE SUM(temps_visionne_min) > 500 GROUP BY id_util;",
        "SELECT id_util, TOTAL(temps_visionne_min) FROM Visionnages GROUP BY id_util HAVING temps_visionne_min > 500;",
        "Aucune de ces réponses n’est correcte."
      ],
      "correct": [
        0
      ],
      "explanation": "GROUP BY réunit tous les visionnages d’un utilisateur. SUM additionne les minutes et HAVING compare ce total à 500. Filtrer les lignes avant de sommer changerait le calcul.",
      "figure": {
        "src": "schema-cinema.webp",
        "alt": "Schéma Utilisateurs, Visionnages et Films. Visionnages référence un utilisateur et un film."
      },
      "section": "SQL · Écriture"
    },
    {
      "id": "jdbc-connexion",
      "stem": "Quelle instruction Java établit correctement une connexion à Oracle XE sur serveur.exemple, port 1521, SID xe, avec le compte utilisateur et le mot de passe d’exemple ?",
      "code": "",
      "options": [
        "Connection cnx = DriverManager.getConnection(\"jdbc:oracle:thin:@serveur.exemple:1521:xe\", \"utilisateur\", \"mot_de_passe\");",
        "Connection cnx = DriverManager.connect(\"oracle://serveur.exemple:utilisateur@mot_de_passe:xe\");",
        "Connection cnx = DriverManager.getConnection(\"jdbc:oracle:@serveur.exemple:1521:xe\", \"mot_de_passe\", \"utilisateur\");",
        "Connection cnx = cnx.connect(\"jdbc:oracle:thin:utilisateur/mot_de_passe@serveur.exemple:xe\");"
      ],
      "correct": [
        0
      ],
      "explanation": "L’API JDBC utilise DriverManager.getConnection(url, utilisateur, motDePasse). La forme Oracle Thin avec un SID suit jdbc:oracle:thin:@hôte:port:SID. Les données de connexion de l’énoncé sont remplacées ici par des exemples.",
      "figure": null,
      "section": "JDBC"
    },
    {
      "id": "jdbc-resultset",
      "stem": "Une fois la connexion établie, quelle est la démarche standard pour exécuter une requête de sélection (SELECT * FROM Films) afin de pouvoir manipuler les lignes de résultat ?",
      "code": "",
      "options": [
        "Créer un Statement avec cnx.createStatement(), puis appeler sa méthode executeQuery().",
        "Appeler directement la méthode cnx.executeSelect(\"SELECT * FROM Films\").",
        "Créer un Statement puis exécuter la requête via la méthode executeUpdate().",
        "Instancier un objet ResultSet en lui passant directement la requête dans son constructeur."
      ],
      "correct": [
        0
      ],
      "explanation": "Pour un SELECT, crée un Statement depuis la connexion et appelle executeQuery. Cette méthode renvoie un ResultSet. executeUpdate sert aux instructions de modification et renvoie généralement un compteur.",
      "figure": null,
      "section": "JDBC"
    },
    {
      "id": "jdbc-parcours",
      "stem": "Pour afficher le titre de tous les films extraits dans un objet ResultSet rset, quelle structure de boucle et quelle méthode d’accès devez-vous utiliser ?",
      "code": "",
      "options": [
        "while (rset.next()) { System.out.println(rset.getString(\"titre\")); }",
        "for (int i=0; i < rset.length(); i++) { System.out.println(rset.getString(0)); }",
        "while (rset.hasMoreLines()) { System.out.println(rset.getString(1)); }",
        "if (rset.next()) { System.out.println(rset.getString(\"titre\")); }"
      ],
      "correct": [
        0
      ],
      "explanation": "next() avance le curseur et indique s’il reste une ligne. La boucle lit titre via getString pour chacune d’elles. Un if ne lirait que le premier résultat.",
      "figure": null,
      "section": "JDBC"
    }
  ]
};
