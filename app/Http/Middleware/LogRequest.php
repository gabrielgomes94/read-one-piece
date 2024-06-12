<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;

class LogRequest
{
    public function handle(Request $request, Closure $next)
    {
        Log::info(
            'Request',
            [
                'path' => $request->path(),
                'query' => $request->all(),
                'ip' => $request->ip(),
            ]
        );

        return $next($request);
    }
}
