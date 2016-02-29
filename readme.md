## Content Management Framework

[![SensioLabsInsight](https://insight.sensiolabs.com/projects/f648409a-850d-421f-b22d-3cc7444db79b/big.png)](https://insight.sensiolabs.com/projects/f648409a-850d-421f-b22d-3cc7444db79b)


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

