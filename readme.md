## Content Management Framework

## Install composer
```php
  "require": {
    "orchid/orchid": "dev-master"
  }
```
## Add Provider and Facades
```php
    Orchid\Dashboard\Providers\DashboardServiceProvider::class,
```

```php
    'Orchid' =>  Orchid\Dashboard\Facades\DashboardFacade::class,
```

## Vendor Publish

```php
    php artisan vendor:publish
```

