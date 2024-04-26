import { useSearchParams } from "react-router-dom";
import SearchRepositories from "./searchRepositories";
import SearchIssues from "./searchIssues";

export default function SearchAllPage (props) {
    let [searchResults, setSearchResults] = useSearchParams();

    if(searchResults.get("type") == "repositories") {
        return <SearchRepositories/>
    }else if(searchResults.get("type") == "issues") {
        return <SearchIssues/>
    }
}