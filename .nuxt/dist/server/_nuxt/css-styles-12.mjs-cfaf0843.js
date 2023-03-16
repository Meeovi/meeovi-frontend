const algolia = `.ais-Breadcrumb-list,.ais-CurrentRefinements-list,.ais-HierarchicalMenu-list,.ais-Hits-list,.ais-InfiniteHits-list,.ais-InfiniteResults-list,.ais-Menu-list,.ais-NumericMenu-list,.ais-Pagination-list,.ais-RatingMenu-list,.ais-RefinementList-list,.ais-Results-list,.ais-ToggleRefinement-list{list-style:none;margin:0;padding:0}.ais-ClearRefinements-button,.ais-CurrentRefinements-delete,.ais-CurrentRefinements-reset,.ais-GeoSearch-redo,.ais-GeoSearch-reset,.ais-HierarchicalMenu-showMore,.ais-InfiniteHits-loadMore,.ais-InfiniteHits-loadPrevious,.ais-InfiniteResults-loadMore,.ais-Menu-showMore,.ais-RangeInput-submit,.ais-RefinementList-showMore,.ais-SearchBox-reset,.ais-SearchBox-submit,.ais-VoiceSearch-button{background:none;border:0;color:inherit;cursor:pointer;font:inherit;line-height:normal;overflow:visible;padding:0;-webkit-user-select:none;-moz-user-select:none;user-select:none}.ais-ClearRefinements-button::-moz-focus-inner,.ais-CurrentRefinements-delete::-moz-focus-inner,.ais-CurrentRefinements-reset::-moz-focus-inner,.ais-GeoSearch-redo::-moz-focus-inner,.ais-GeoSearch-reset::-moz-focus-inner,.ais-HierarchicalMenu-showMore::-moz-focus-inner,.ais-InfiniteHits-loadMore::-moz-focus-inner,.ais-InfiniteHits-loadPrevious::-moz-focus-inner,.ais-InfiniteResults-loadMore::-moz-focus-inner,.ais-Menu-showMore::-moz-focus-inner,.ais-RangeInput-submit::-moz-focus-inner,.ais-RefinementList-showMore::-moz-focus-inner,.ais-SearchBox-reset::-moz-focus-inner,.ais-SearchBox-submit::-moz-focus-inner,.ais-VoiceSearch-button::-moz-focus-inner{border:0;padding:0}.ais-ClearRefinements-button[disabled],.ais-CurrentRefinements-delete[disabled],.ais-CurrentRefinements-reset[disabled],.ais-GeoSearch-redo[disabled],.ais-GeoSearch-reset[disabled],.ais-HierarchicalMenu-showMore[disabled],.ais-InfiniteHits-loadMore[disabled],.ais-InfiniteHits-loadPrevious[disabled],.ais-InfiniteResults-loadMore[disabled],.ais-Menu-showMore[disabled],.ais-RangeInput-submit[disabled],.ais-RefinementList-showMore[disabled],.ais-SearchBox-reset[disabled],.ais-SearchBox-submit[disabled],.ais-VoiceSearch-button[disabled]{cursor:default}.ais-HierarchicalMenu-showMore,.ais-InfiniteHits-loadMore,.ais-InfiniteHits-loadPrevious,.ais-Menu-showMore,.ais-RefinementList-showMore{overflow-anchor:none}.ais-Breadcrumb-item,.ais-Breadcrumb-list,.ais-Pagination-list,.ais-PoweredBy,.ais-RangeInput-form,.ais-RatingMenu-link{align-items:center;display:flex}.ais-GeoSearch,.ais-GeoSearch-map{height:100%}.ais-HierarchicalMenu-list .ais-HierarchicalMenu-list{margin-left:1em}.ais-PoweredBy-logo{display:block;height:1.2em;width:auto}.ais-PoweredBy-text{margin-right:.3rem}.ais-RatingMenu-starIcon{display:block;height:20px;width:20px}.ais-SearchBox-input::-ms-clear,.ais-SearchBox-input::-ms-reveal{display:none;height:0;width:0}.ais-SearchBox-input::-webkit-search-cancel-button,.ais-SearchBox-input::-webkit-search-decoration,.ais-SearchBox-input::-webkit-search-results-button,.ais-SearchBox-input::-webkit-search-results-decoration{display:none}.ais-RangeSlider .rheostat{margin-bottom:40px;margin-top:40px;overflow:visible}.ais-RangeSlider .rheostat-background{height:6px;top:0;width:100%}.ais-RangeSlider .rheostat-handle{margin-left:-12px;top:-7px}.ais-RangeSlider .rheostat-background{background-color:#fff;border:1px solid #aaa;position:relative}.ais-RangeSlider .rheostat-progress{background-color:#333;height:4px;position:absolute;top:1px}.rheostat-handle{background-color:#fff;border:1px solid #333;border-radius:50%;cursor:grab;height:20px;position:relative;width:20px;z-index:1}.rheostat-marker{background-color:#aaa;height:5px;margin-left:-1px;position:absolute;width:1px}.rheostat-marker--large{height:9px}.rheostat-value{padding-top:15px}.rheostat-tooltip,.rheostat-value{margin-left:50%;position:absolute;text-align:center;transform:translateX(-50%)}.rheostat-tooltip{top:-22px}[class^=ais-]{box-sizing:border-box;font-size:1rem}a[class^=ais-]{text-decoration:none}.ais-Breadcrumb,.ais-ClearRefinements,.ais-CurrentRefinements,.ais-GeoSearch,.ais-HierarchicalMenu,.ais-Hits,.ais-HitsPerPage,.ais-InfiniteHits,.ais-InfiniteResults,.ais-Menu,.ais-MenuSelect,.ais-NumericMenu,.ais-NumericSelector,.ais-Pagination,.ais-Panel,.ais-PoweredBy,.ais-RangeInput,.ais-RangeSlider,.ais-RatingMenu,.ais-RefinementList,.ais-RelevantSort,.ais-Results,.ais-ResultsPerPage,.ais-SearchBox,.ais-SortBy,.ais-Stats,.ais-ToggleRefinement{color:#3a4570}.ais-Breadcrumb-item--selected,.ais-HierarchicalMenu-item--selected,.ais-Menu-item--selected{font-weight:700}.ais-Breadcrumb-separator{font-weight:400;margin:0 .3em}.ais-Breadcrumb-link,.ais-HierarchicalMenu-link,.ais-Menu-link,.ais-Pagination-link,.ais-RatingMenu-link{color:#0096db;transition:color .2s ease-out}.ais-Breadcrumb-link:focus,.ais-Breadcrumb-link:hover,.ais-HierarchicalMenu-link:focus,.ais-HierarchicalMenu-link:hover,.ais-Menu-link:focus,.ais-Menu-link:hover,.ais-Pagination-link:focus,.ais-Pagination-link:hover,.ais-RatingMenu-link:focus,.ais-RatingMenu-link:hover{color:#0073a8}.ais-ClearRefinements-button,.ais-CurrentRefinements-reset,.ais-GeoSearch-redo,.ais-GeoSearch-reset,.ais-HierarchicalMenu-showMore,.ais-InfiniteHits-loadMore,.ais-InfiniteHits-loadPrevious,.ais-InfiniteResults-loadMore,.ais-Menu-showMore,.ais-RefinementList-showMore,.ais-RelevantSort-button{background-color:#0096db;border-radius:5px;color:#fff;font-size:.8rem;outline:none;padding:.3rem .5rem;transition:background-color .2s ease-out}.ais-ClearRefinements-button:focus,.ais-ClearRefinements-button:hover,.ais-CurrentRefinements-reset:focus,.ais-CurrentRefinements-reset:hover,.ais-GeoSearch-redo:focus,.ais-GeoSearch-redo:hover,.ais-GeoSearch-reset:focus,.ais-GeoSearch-reset:hover,.ais-HierarchicalMenu-showMore:focus,.ais-HierarchicalMenu-showMore:hover,.ais-InfiniteHits-loadMore:focus,.ais-InfiniteHits-loadMore:hover,.ais-InfiniteHits-loadPrevious:focus,.ais-InfiniteHits-loadPrevious:hover,.ais-InfiniteResults-loadMore:focus,.ais-InfiniteResults-loadMore:hover,.ais-Menu-showMore:focus,.ais-Menu-showMore:hover,.ais-RefinementList-showMore:focus,.ais-RefinementList-showMore:hover,.ais-RelevantSort-button:focus,.ais-RelevantSort-button:hover{background-color:#0073a8}.ais-ClearRefinements-button--disabled,.ais-GeoSearch-redo--disabled,.ais-GeoSearch-reset--disabled,.ais-HierarchicalMenu-showMore--disabled,.ais-InfiniteHits-loadMore--disabled,.ais-InfiniteResults-loadMore--disabled,.ais-Menu-showMore--disabled,.ais-RefinementList-showMore--disabled{cursor:not-allowed;opacity:.6}.ais-ClearRefinements-button--disabled:focus,.ais-ClearRefinements-button--disabled:hover,.ais-GeoSearch-redo--disabled:focus,.ais-GeoSearch-redo--disabled:hover,.ais-GeoSearch-reset--disabled:focus,.ais-GeoSearch-reset--disabled:hover,.ais-HierarchicalMenu-showMore--disabled:focus,.ais-HierarchicalMenu-showMore--disabled:hover,.ais-InfiniteHits-loadMore--disabled:focus,.ais-InfiniteHits-loadMore--disabled:hover,.ais-InfiniteResults-loadMore--disabled:focus,.ais-InfiniteResults-loadMore--disabled:hover,.ais-Menu-showMore--disabled:focus,.ais-Menu-showMore--disabled:hover,.ais-RefinementList-showMore--disabled:focus,.ais-RefinementList-showMore--disabled:hover{background-color:#0096db}.ais-InfiniteHits-loadPrevious--disabled{display:none}.ais-CurrentRefinements{margin-top:-.3rem}.ais-CurrentRefinements,.ais-CurrentRefinements-list{display:flex;flex-wrap:wrap}.ais-CurrentRefinements-item{background-color:#495588;border-radius:5px;display:flex;margin-right:.3rem;margin-top:.3rem;padding:.3rem .5rem}.ais-CurrentRefinements-category{display:flex;margin-left:.3em}.ais-CurrentRefinements-delete{margin-left:.3rem}.ais-CurrentRefinements-categoryLabel,.ais-CurrentRefinements-delete,.ais-CurrentRefinements-label{color:#fff;font-size:.8rem;white-space:nowrap}.ais-CurrentRefinements-reset{margin-top:.3rem;white-space:nowrap}.ais-CurrentRefinements-reset+.ais-CurrentRefinements-list{margin-left:.3rem}.ais-GeoSearch{position:relative}.ais-GeoSearch-control{left:3.75rem;position:absolute;top:.8rem}.ais-GeoSearch-label{background-color:#fff;border-radius:5px;box-shadow:0 1px 1px rgba(0,0,0,.1);display:block;font-size:.8rem;outline:none;padding:.3rem .5rem;transition:background-color .2s ease-out}.ais-GeoSearch-input{margin:0 .25rem 0 0}.ais-GeoSearch-label,.ais-GeoSearch-redo,.ais-GeoSearch-reset{white-space:nowrap}.ais-GeoSearch-reset{bottom:1.25rem;left:50%;position:absolute;transform:translateX(-50%)}.ais-HierarchicalMenu-link,.ais-Menu-link{display:block;line-height:1.5}.ais-HierarchicalMenu-list,.ais-Menu-list,.ais-NumericMenu-list,.ais-RatingMenu-list,.ais-RefinementList-list{font-weight:400;line-height:1.5}.ais-HierarchicalMenu-link:after{background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath d='m7.3 24-2.8-2.8 9.3-9.2-9.3-9.2L7.3 0l12.2 12z' fill='%233A4570'/%3E%3C/svg%3E");background-size:100% 100%;content:"";display:none;height:10px;margin-left:.3em;width:10px}.ais-HierarchicalMenu-item--parent>.ais-HierarchicalMenu-link:after{display:inline-block}.ais-HierarchicalMenu-item--selected>.ais-HierarchicalMenu-link:after{transform:rotate(90deg)}.ais-CurrentRefinements-count,.ais-RatingMenu-count{font-size:.8rem}.ais-CurrentRefinements-count:before,.ais-RatingMenu-count:before{content:"("}.ais-CurrentRefinements-count:after,.ais-RatingMenu-count:after{content:")"}.ais-HierarchicalMenu-count,.ais-Menu-count,.ais-RefinementList-count,.ais-ToggleRefinement-count{background-color:#dfe2ee;border-radius:8px;color:#3a4570;font-size:.8rem;padding:.1rem .4rem}.ais-HierarchicalMenu-showMore,.ais-Menu-showMore,.ais-RefinementList-showMore{margin-top:.5rem}.ais-Highlight-highlighted,.ais-Snippet-highlighted{background-color:#ffc168}.ais-ReverseHighlight-highlighted,.ais-ReverseSnippet-highlighted{background:none;font-style:normal;font-weight:700}.ais-Hits-list,.ais-InfiniteHits-list,.ais-InfiniteResults-list,.ais-Results-list{display:flex;flex-wrap:wrap;margin-left:-1rem;margin-top:-1rem}.ais-Panel-body .ais-Hits-list,.ais-Panel-body .ais-InfiniteHits-list,.ais-Panel-body .ais-InfiniteResults-list,.ais-Panel-body .ais-Results-list{margin:.5rem 0 0 -1rem}.ais-Hits-item,.ais-InfiniteHits-item,.ais-InfiniteResults-item,.ais-Results-item{border:1px solid #c4c8d8;box-shadow:0 2px 5px 0 #e3e5ec;margin-left:1rem;margin-top:1rem;padding:1rem;width:calc(25% - 1rem)}.ais-Panel-body .ais-Hits-item,.ais-Panel-body .ais-InfiniteHits-item,.ais-Panel-body .ais-InfiniteResults-item,.ais-Panel-body .ais-Results-item{margin:.5rem 0 .5rem 1rem}.ais-InfiniteHits-loadMore,.ais-InfiniteResults-loadMore{margin-top:1rem}.ais-InfiniteHits-loadPrevious{margin-bottom:1rem}.ais-HitsPerPage-select,.ais-MenuSelect-select,.ais-NumericSelector-select,.ais-ResultsPerPage-select,.ais-SortBy-select{-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:#fff;background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath d='m0 7.3 2.8-2.8 9.2 9.3 9.2-9.3L24 7.3 12 19.5z' fill='%233A4570'/%3E%3C/svg%3E");background-position:92% 50%;background-repeat:no-repeat;background-size:10px 10px;border:1px solid #c4c8d8;border-radius:5px;max-width:100%;padding:.3rem 2rem .3rem .3rem}.ais-Panel--collapsible{position:relative}.ais-Panel--collapsible.ais-Panel--collapsed .ais-Panel-body,.ais-Panel--collapsible.ais-Panel--collapsed .ais-Panel-footer{display:none}.ais-Panel--collapsible .ais-Panel-collapseButton{background:none;border:none;padding:0;position:absolute;right:0;top:0}.ais-Panel-header{border-bottom:1px solid #c4c8d8;font-size:.8rem;font-weight:700;margin-bottom:.5rem;padding-bottom:.5rem;text-transform:uppercase}.ais-Panel-footer{font-size:.8rem;margin-top:.5rem}.ais-RangeInput-input{height:1.5rem;line-height:1.5rem;padding:0 .2rem;width:5rem}.ais-RangeInput-separator{margin:0 .3rem}.ais-RangeInput-submit{-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:#0096db;border:none;border-radius:5px;color:#fff;font-size:.8rem;height:1.5rem;line-height:1.5rem;margin-left:.3rem;outline:none;padding:0 .5rem;transition:.2s ease-out}.ais-RangeInput-submit:focus,.ais-RangeInput-submit:hover{background-color:#0073a8}.ais-RatingMenu-count{color:#3a4570}.ais-Pagination-list{justify-content:center}.ais-Pagination-item+.ais-Pagination-item{margin-left:.3rem}.ais-Pagination-link{border:1px solid #c4c8d8;border-radius:5px;display:block;padding:.3rem .6rem;transition:background-color .2s ease-out}.ais-Pagination-link:focus,.ais-Pagination-link:hover{background-color:#e3e5ec}.ais-Pagination-item--disabled .ais-Pagination-link{color:#a5abc4;cursor:not-allowed;opacity:.6}.ais-Pagination-item--disabled .ais-Pagination-link:focus,.ais-Pagination-item--disabled .ais-Pagination-link:hover{background-color:#fff;color:#a5abc4}.ais-Pagination-item--selected .ais-Pagination-link{background-color:#0096db;border-color:#0096db;color:#fff}.ais-Pagination-item--selected .ais-Pagination-link:focus,.ais-Pagination-item--selected .ais-Pagination-link:hover{color:#fff}.ais-PoweredBy-text,.ais-RelevantSort-text,.ais-Stats-text,.rheostat-tooltip,.rheostat-value{font-size:.8rem}.ais-RangeSlider .rheostat-progress{background-color:#495588}.ais-RangeSlider .rheostat-background{border-color:#878faf;box-sizing:border-box}.ais-RangeSlider .rheostat-handle{border-color:#878faf}.ais-RangeSlider .rheostat-marker{background-color:#878faf}.ais-Panel-body .ais-RangeSlider{margin:2rem 0}.ais-RangeSlider-handle{background:#fff;border:1px solid #46aeda;border-radius:50%;cursor:pointer;height:20px;position:relative;width:20px;z-index:1}.ais-RangeSlider-tooltip{background:#fff;font-size:.8em;position:absolute;top:-22px}.ais-RangeSlider-value{font-size:.8em;margin-left:-20px;padding-top:15px;position:absolute;text-align:center;width:40px}.ais-RangeSlider-marker{background:#ddd;height:5px;margin-left:-1px;position:absolute;width:1px}.ais-RatingMenu-item--disabled .ais-RatingMenu-count,.ais-RatingMenu-item--disabled .ais-RatingMenu-label{color:#c4c8d8}.ais-RatingMenu-item--selected{font-weight:700}.ais-RatingMenu-link{line-height:1.5}.ais-RatingMenu-link>*+*{margin-left:.3rem}.ais-RatingMenu-starIcon{fill:#ffc168;position:relative;top:-1px;width:15px}.ais-RatingMenu-item--disabled .ais-RatingMenu-starIcon{fill:#c4c8d8}.ais-HierarchicalMenu-searchBox>*,.ais-Menu-searchBox>*,.ais-RefinementList-searchBox>*{margin-bottom:.5rem}.ais-SearchBox-form{display:block;position:relative}.ais-SearchBox-input{-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:#fff;border:1px solid #c4c8d8;border-radius:5px;padding:.3rem 1.7rem;position:relative;width:100%}.ais-SearchBox-input::-webkit-input-placeholder{color:#a5aed1}.ais-SearchBox-input::-moz-placeholder{color:#a5aed1}.ais-SearchBox-input:-ms-input-placeholder{color:#a5aed1}.ais-SearchBox-input:-moz-placeholder{color:#a5aed1}.ais-SearchBox-loadingIndicator,.ais-SearchBox-reset,.ais-SearchBox-submit{-webkit-appearance:none;-moz-appearance:none;appearance:none;height:20px;position:absolute;right:.3rem;top:50%;transform:translateY(-50%);width:20px;z-index:1}.ais-SearchBox-submit{left:.3rem}.ais-SearchBox-reset{right:.3rem}.ais-SearchBox-loadingIcon,.ais-SearchBox-resetIcon,.ais-SearchBox-submitIcon{left:50%;position:absolute;top:50%;transform:translateX(-50%) translateY(-50%)}.ais-SearchBox-resetIcon path,.ais-SearchBox-submitIcon path{fill:#495588}.ais-SearchBox-submitIcon{height:14px;width:14px}.ais-SearchBox-resetIcon{height:12px;width:12px}.ais-SearchBox-loadingIcon{height:16px;width:16px}.ais-VoiceSearch-button{background-color:transparent;border:none;border-radius:50%;color:#3a4570;height:24px;padding:4px;width:24px}.ais-VoiceSearch-button svg{color:currentColor}.ais-VoiceSearch-button:hover{background-color:#a5aed1;color:#fff;cursor:pointer}.ais-VoiceSearch-button:disabled{color:#a5aed1}.ais-VoiceSearch-button:disabled:hover{background:inherit;color:#a5aed1;cursor:not-allowed}`;
export {
  algolia as default
};
//# sourceMappingURL=css-styles-12.mjs-cfaf0843.js.map