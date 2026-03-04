# Hifertility Mobil UI Prototipi

Kadın sağlığı ve yaşam tarzı odağında geliştirilen, **React Native + Expo** tabanlı bir mobil uygulama ön yüz prototipidir. Proje şu an backend olmadan çalışır; tüm içerikler uygulama içinde **mock JSON data** ile yönetilir.

## Proje Kısa Açıklaması

Bu prototipte aşağıdaki ana ekranlar ve akışlar bulunur:
- Drawer menü (özel sidebar)
- Bildirim listesi
- Ev Ödevi / Kısa Bilgiler akışı (beğeni artırma state’i dahil)
- Kurslar (video ders yer tutucu + ders listesi)
- Blog / bilgilendirme içeriği
- Forum (yeni konu oluşturma formu)
- Danışmanlık, Yol Haritam, Anket, İletişim, Hakkımızda, Onay sayfaları (modern kart yapısı)

## Kullanılan Teknolojiler

- React Native
- Expo (Managed Workflow, SDK 54)
- React Navigation
  - Drawer Navigator
  - Native Stack Navigator
- Expo Vector Icons (`@expo/vector-icons` / Ionicons)
- React Hooks (`useState`, `useEffect`, `useMemo`, `useLayoutEffect`)
- Temel RN bileşenleri (`FlatList`, `ScrollView`, `TouchableOpacity`, `TextInput`, `StyleSheet`)

## Kurulum ve Çalıştırma

### 1. Depoyu klonla

```bash
git clone https://github.com/Miku-erm/mobil2.git
cd mobil2
```

### 2. Bağımlılıkları yükle

```bash
npm install
```

### 3. Projeyi başlat

```bash
npx expo start -c
```

QR kodu **Expo Go** ile okutarak uygulamayı telefonda açabilirsin.

## Yerelde Nasıl Çalıştırırım? (Gerekli Kurulum)

Gerekli kurulumlar:
- Node.js (öneri: LTS)
- npm
- Telefona Expo Go (SDK 54 destekli sürüm)

Notlar:
- Android Studio zorunlu değildir; fiziksel cihaz + Expo Go ile test edebilirsin.
- Telefon ve bilgisayar aynı ağda değilse şu komut daha stabil olabilir:

```bash
npx expo start --tunnel
```

Opsiyonel komutlar:

```bash
npm run web
npm run android
npm run ios
```

> `npm run android` / `npm run ios` komutları emülatör/simülatör kurulu değilse çalışmayabilir. Expo Go ile test için `npx expo start` yeterlidir.

## Video ve Build Linkleri

- Kısa demo video (YouTube Shorts, max 1 dk):  
  https://www.youtube.com/shorts/EsHeLi-JDDY

- Expo Build:  
  https://expo.dev/accounts/emre23232/projects/mobil/builds/ea02668d-21d3-4e87-8913-3ec6e0070a90
