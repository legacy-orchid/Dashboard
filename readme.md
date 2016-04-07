## Content Management Framework

[![Join the chat at https://gitter.im/TheOrchid/Dashboard](https://badges.gitter.im/TheOrchid/Dashboard.svg)](https://gitter.im/TheOrchid/Dashboard?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

[![Latest Stable Version](https://poser.pugx.org/orchid/orchid/v/stable)](https://packagist.org/packages/orchid/orchid)
[![Total Downloads](https://poser.pugx.org/orchid/orchid/downloads)](https://packagist.org/packages/orchid/orchid)
[![License](https://poser.pugx.org/orchid/orchid/license)](https://packagist.org/packages/orchid/orchid)



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

