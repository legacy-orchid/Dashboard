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

## Add Config

in config/filesystems.php

```php
        'logs' => [
            'driver' => 'local',
            'root' => storage_path('logs'),
        ],
```

## Vendor Publish

```php
    php artisan vendor:publish
```

