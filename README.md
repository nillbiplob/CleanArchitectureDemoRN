# CleanArchitectureDemoRN

A reference implementation of **Clean Architecture** in React Native, using TypeScript, Expo Router, and a public API with in-memory singleton cache.  
It’s designed for learning and as a best-practice starter for modular, testable, scalable mobile apps.

---

## 🚀 Features

- **Splash Screen:** Loads user data from the internet or cache, with a user-friendly splash (min 1.2 seconds).
- **User List Screen:** Lists all users with search and instant navigation to detail screen.
- **User Detail Screen:** Taps any user to see details (name, username, email, etc.).
- **Offline Support:** Uses an in-memory singleton to hold data for instant navigation and lookups (expandable for persistent cache).
- **Modern Navigation:** Expo Router (Next.js style), hot reload, and instant UI updates in development.
- **Clean Architecture:** All major layers (Presentation, Application, Domain, Data) are strictly separated.
- **Minimal 3rd-Party Dependencies:** Only essentials—no Redux, no heavy libraries (expandable as you wish).
- **TypeScript First:** Strong typing at every layer.

---

## 🏛️ Clean Architecture Overview

> **"Inner layers know nothing about outer layers."**

This project enforces a strict separation between:

- **Presentation Layer:** Screens, adapters, navigation logic (no data-fetching or business logic here).
- **Application Layer:** Use cases, orchestrating the business flow (never knows about UI or data sources).
- **Domain Layer:** Pure models and repository interfaces (no frameworks or dependencies).
- **Data Layer:** API fetch, caching, repository implementation (the only layer that knows about HTTP, Expo, etc).

**Why Clean Architecture?**
- Code is modular, testable, and easy to refactor.
- Replace data sources, business rules, or UI without breaking other layers.
- Scales to large teams and complex features without turning to “spaghetti code.”

---

## 🗂️ Project Structure

<details>
<summary><b>Click to expand</b></summary>

app
├── splash/ # SplashScreen (route)
├── userlist/ # UserListScreen (route)
├── userdetail/ # UserDetailScreen (route)
└── _layout.tsx # Expo Router Stack layout

/src
├── application/
│ └── usecase/ # Use cases (Application Layer)
├── data/
│ ├── model/ # API DTOs (UserDto)
│ ├── repository/ # Repository implementations
│ └── source/ # Data sources (Remote/Local)
├── domain/
│ ├── model/ # Pure business models (User)
│ └── repository/ # Repository interfaces
└── presentation/
└── common/ # Singleton selection holder, UI adapters

</details>

---

## 🔗 Public API Used

- [JSONPlaceholder /users](https://jsonplaceholder.typicode.com/users)

---

## 🛠️ Tech Stack

- **React Native** (Expo)
- **TypeScript**
- **Expo Router** (for file-based navigation)
- **Axios or fetch** (for API)
- **In-memory singleton cache** (could be expanded to use AsyncStorage)
- **No Redux, no MobX, no heavyweight frameworks**

---

## 🚦 Screenshots

| Splash | User List | User Detail |
|--------|-----------|-------------|
| ![Splash](docs/splash.png) | ![List](docs/list.png) | ![Detail](docs/detail.png) |

---

## 🚀 How To Run

1. Clone this repo:
   ```sh
   git clone https://github.com/yourname/CleanArchitectureDemoRN.git
   cd CleanArchitectureDemoRN

   Install dependencies:

sh
Copy
Edit
npm install
# or
yarn
Start Expo:

sh
Copy
Edit
npx expo start
Open on your simulator, device (Expo Go app), or web.

🧑‍💻 Code Flow Example
SplashScreen loads → calls GetUsersUseCase

GetUsersUseCase (application layer) calls UserRepository interface

UserRepositoryImpl (data layer) loads from API/cache, converts DTOs to domain models

UserListScreen displays all users, enables search, handles navigation

UserDetailScreen receives the user ID as param, fetches user from singleton cache

🧪 Unit Testing
This project is built for testability, though only core logic is covered in this demo.
Suggested test locations:

src/domain/model/user.test.ts

src/application/usecase/get_users_usecase.test.ts

src/data/repository/user_repository_impl.test.ts

Run all tests:

sh
Copy
Edit
npm test
# or
yarn test
📐 Clean Architecture Diagram
scss
Copy
Edit
Presentation (Screens)
         ↓
Application (UseCase)
         ↓
Domain (Repository Interface, Model)
         ↓
Data (Repository Impl, Data Sources, DTOs)
⚡ What Makes This Project Unique?
Expo Router + Clean Architecture: A rare combo—most RN/Expo projects are MVC or “one big App.js.”

Enterprise-inspired structure: Ready for feature scaling, CI/CD, and multi-team workflow.

Easy to port: This architecture works in Flutter, Jetpack Compose, native Android/iOS, and web.

🏷️ License
MIT License

