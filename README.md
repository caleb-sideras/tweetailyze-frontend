<h1>Tweetailyze</h1>
<p>The front-end for Tweetailyze, a webapp that summarizes a Twitter account's tweets through embedding/clustering of tweets, w/ sentiment analysis and topic modeling.</p>

<p align="left"> <a href="https://reactjs.org/" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/reactjs/reactjs-ar21.svg" alt="dart"  height="40"/> </a> <a href="https://www.typescriptlang.org/" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/typescriptlang/typescriptlang-icon.svg" alt="flutter" width="40" height="40"/> </a> </p>

![image](https://user-images.githubusercontent.com/66019710/230147921-8bdad341-b86b-44f8-a1e3-5ab388808f7c.png)


<h2>How it works</h2>
<ol>
  <li>POSTs a Twitter account's username to the backend.</li>
  <li>Gets the most recent X tweets using the tweepy package.</li>
  <li>The text of each tweet is preprocessed using the nltk package.</li>
  <li>The preprocessed text is transformed into embeddings using OpenAI model 'text-embedding-ada-002'</li>
  <li>The embeddings are clustered using agglomerative clustering with cosine metric and average linkage.</li>
  <li>The tweets are separated into clusters based on their cluster labels.</li>
  <li>Sentiment analysis is performed using the VADER sentiment analyzer.</li>
  <li>Topic modeling is performed using non-negative matrix factorization (NMF) from the scikit-learn package.</li>
  <li>The top words for each topic are classified using the OpenAI model 'text-curie-001'.</li>
  <li>Results are stored to Postgres and returned to the frontend.</li>
</ol>
