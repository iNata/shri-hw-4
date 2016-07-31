## Домашнее задание к лекции "Нативные приложения на веб-технологиях"

- Установила приложение PhoneGap для десктопа, установила приложение PhoneGap Developer на андроид. Добавила проект 
в десктопное приложение, с помощью PhoneGap Dev зашла по указанному в десктопном приложении ip-адресу и приложение загрузилось http://joxi.ru/krDOVBKt0aXEKA.

Возникли проблемы при установки эмулятора для андроид:
- Установила JDK 
- Установила android SDK
- Установила глобально phonegap и cordova, создала проект - phonegap create, добавила нужные платформы и запустила phonegap build
Но build не прошел, в консоли вывалилась ошибка, что необходимо установить BuildTools 24.0.1. На windows нужно было прописать вглобальную
переменную путь к android-sdk/tools и android-sdk/platform-tools. После этого запустила sdk manager и установила нужный пакет http://joxi.ru/8An6Pk8fq3VE5A.
- Дальше запустила phonegap emulate android, вывалилась ошибка - no emulator images (avd) found. Пошла в Android Studio,
 добавила nexus 5444 в avd manager'e. И ура,  эмулятор запустился http://joxi.ru/Q2KpK9Xs9KRZnA 
 
- запустить build для ios не удалось, потому что требуется установить xcode http://joxi.ru/Q2KpK9Xs9KEv8A. Зашла на build.phonegap.com/faq ,
 чтобы почитать подробнее. В итоге ссылка на ios guide вела в никуда https://build.phonegap.com/docs/ios-builds
 
- Пробовала установить пакет для livereload в эмуляторе cordova-plugin-browsersync, но оказалось, что пакет уже не актуальный и разработчик
предлагал перейти на taco cli. С ним еще не разобралась. 

- Добавила новые иконки для приложения
 
 



 


  