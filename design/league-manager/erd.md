:::mermaid
erDiagram

User ||--o{ LeagueMember : is
Player |o--o| LeagueMember : "can be"
League ||--o{ LeagueMember : has
League ||--o{ Player : has
League ||--o{ Fixture : has
Fixture }o--o| Venue : in
League ||--o{ Venue : has
Fixture }o--o| Player : player1
Fixture }o--o| Player : player2

:::