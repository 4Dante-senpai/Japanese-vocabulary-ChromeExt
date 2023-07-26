interface apiMetadata {
    page: number,
    pages: number,
    per_page: number,
    total_count: number,
    prev_page: number,
    next_page: number,
    has_prev: boolean,
    has_next: boolean
}

export default apiMetadata;