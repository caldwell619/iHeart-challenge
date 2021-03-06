import React from 'react';
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import Dropdown from 'components/util/Dropdown'
import { allowableItemsPerPageValues } from 'data/constants'

const singleUpArgument = 'increase single'
const singleDownArgument = 'decrease single'
const firstPageArgument = 'first'
const lastPageArgument = 'last'

const createModifierEnum = (numberOfPages, currentPage) => ({
  [firstPageArgument]: 1,
  [singleDownArgument]: currentPage - 1,
  [singleUpArgument]: currentPage + 1,
  [lastPageArgument]: numberOfPages
})

const Pagination = props => {
  const { currentPage, pageUpdateHandler, numberOfPages, numberOfItemsPerPage, setNumberOfItemsPerPage } = props
  
  const alterPageNumber = modifier => {
    const modifierEnum = createModifierEnum(numberOfPages, currentPage)
    const pageToGoTo = modifierEnum[modifier]
    pageUpdateHandler(pageToGoTo, numberOfItemsPerPage)
  }

  const numberOfItemsPerPageHandler = newNumberOfPages => {
    setNumberOfItemsPerPage(newNumberOfPages)
  }

  const isPreviousDisabled = currentPage === 1
  const isNextDisabled = currentPage === numberOfPages || numberOfItemsPerPage === 'All'

  const displayNumberOfPages = numberOfItemsPerPage === 'All'
    ? '1'
    : numberOfPages

  return (
    <Grid container justify='flex-end'>
      <Grid item md={8}>
        <Grid container justify='flex-end'>
          <Grid item md={2} justify="center" container>
            <Button disabled={isPreviousDisabled} onClick={() => alterPageNumber(firstPageArgument)}>
              First
            </Button>
          </Grid>
          <Grid item md={2} justify="center" container>
            <Button disabled={isPreviousDisabled} onClick={() => alterPageNumber(singleDownArgument)}>
              Previous
            </Button>
          </Grid>
          <Grid item md={2} alignItems="center" justify="center" container>
            {currentPage} of {displayNumberOfPages}
          </Grid>
          <Grid item md={2} justify="center" container>
            <Button disabled={isNextDisabled} onClick={() => alterPageNumber(singleUpArgument)}>
              Next
            </Button>
          </Grid>
          <Grid item md={2} justify="center" container>
            <Button disabled={isNextDisabled} onClick={() => alterPageNumber(lastPageArgument)}>
              Last
            </Button>
          </Grid>
          <Grid item md={2} alignItems="center" justify="center" container>
            <Dropdown
              options={allowableItemsPerPageValues}
              title='Items per page'
              update={numberOfItemsPerPageHandler}
              value={numberOfItemsPerPage}
            />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Pagination;