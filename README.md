## Rate Limiting API

**Testing API with Universities big data**

* here I have used only max and windowMs with rate-limiting.
* max - means maximum no. of requests within ***windowMs*** of time.
* windowMs - time in ms.
* standardHeaders - to return rate limit info in the `RateLimit-*` headers.
* legacyHeaders - to enable or disable the `X-RateLimit-*` headers.