import React from 'react'

type Props = {
    searchParams: {
        keyword: string;
    };
}

const page = (props: Props) => {

    const keyword = props.searchParams.keyword;

  return (
    <div>Search Page - {keyword}</div>
  )
}

export default page