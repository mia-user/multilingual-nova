<?php

namespace Digitalcloud\MultilingualNova;

use Laravel\Nova\Tool;
use Illuminate\Http\Request;
use Laravel\Nova\Menu\MenuSection;

class NovaLanguageTool extends Tool
{
    /**
     * Perform any tasks that need to happen when the tool is booted.
     *
     * @return void
     */
    public function boot()
    {
        //
    }

    /**
     * Build the view that renders the navigation links for the tool.
     *
     * @return \Illuminate\View\View
     */
    public function menu(Request $request)
    {
        //return view('nova-language-tool::navigation');
        return MenuSection::make(__('Language'))
            ->path('/nova-language-tool')
            ->icon('adjustments');
    }

}
