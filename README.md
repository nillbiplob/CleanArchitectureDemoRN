# CleanArchitectureDemoRN (TypeScript)

A reference React Native app showing Clean Architecture in modern TypeScript, with real API data, offline caching, and professional navigation.

---

## ✨ Features

- Splash, User List, and User Detail screens.
- Loads users from JSONPlaceholder API.
- Simple offline cache (AsyncStorage).
- Pull-to-refresh, search, navigation.
- Clean, maintainable architecture.

---

## 🏛️ Clean Architecture

- **Presentation:** React screens (no business/data logic)
- **Application:** Use case orchestration
- **Domain:** Pure models and repository interfaces
- **Data:** API/cache/repository implementations

---

## 🚀 How To Run

1. Clone this repo.
2. Run `npm install`.
3. Start Metro: `npx expo start` or `npm start`.
4. Run on device or emulator: `npx expo run:android` or use Expo Go.

---

## 📂 Folder Structure

src/
├── application/
│   └── usecase/
│       └── GetUsersUseCase.ts
│
├── data/
│   ├── model/
│   │   └── UserDto.ts
│   ├── repository/
│   │   └── UserRepositoryImpl.ts
│   └── source/
│       ├── UserRemoteDataSource.ts
│       └── UserLocalDataSource.ts
│
├── domain/
│   ├── model/
│   │   └── User.ts
│   └── repository/
│       └── UserRepository.ts
│
└── presentation/
├── common/
├── splash/
│   └── SplashScreen.tsx
├── userdetail/
│   └── UserDetailScreen.tsx
└── userlist/
└── UserListScreen.tsx

App.tsx

---

## 🔗 Public API

- [JSONPlaceholder /users](https://jsonplaceholder.typicode.com/users)

---

## 👨‍💻 Author

- [Shafiul Alam Biplob](https://github.com/nillbiplob)