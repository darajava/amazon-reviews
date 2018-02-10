export function updateSearchTerm(searchTerm) {
  return {
    type: 'UPDATE_SEARCH_TERM',
    searchTerm,
  };
}

export function updateOrdering(orderBy) {
  return {
    type: 'UPDATE_ORDERING',
    orderBy,
  };
}

export function updateGrouping(groupBy) {
  return {
    type: 'UPDATE_GROUPING',
    groupBy,
  };
}

export function updateStars(toggleStar) {
  return {
    type: 'UPDATE_STARS',
    toggleStar,
  };
}