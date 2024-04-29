import { useSearchParams } from "react-router-dom";
import SearchRepositories from "./searchRepositories";
import SearchIssues from "./searchIssues";
import SearchUser from "./searchUsers";
import SearchCommits from "./searchCommits";


export default function SearchAllPage (props) {
    let [searchResults, setSearchResults] = useSearchParams();

    if(searchResults.get("type") == "repositories") {
        return <SearchRepositories/>
    }else if(searchResults.get("type") == "issues") {
        return <SearchIssues/>
    }else if(searchResults.get("type") == "users") {
        return <SearchUser/>
    }else if(searchResults.get("type") == "commits") {
        return <SearchCommits/>
    }
}