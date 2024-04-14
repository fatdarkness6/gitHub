//....................................proFileOverViewStates.......................//
export function reducer(state, action) {
    if (action.type == 'updateLoading') {
      return {
        ...state,
        loading: action.payload,
      };
    }
    if (action.type == 'updateName') {
      return {
        ...state,
        name: action.payload,
      };
    }
    if (action.type == 'updateMatn') {
      return {
        ...state,
        matn: action.payload,
      };
    }
  
    return state;
  }
  //.......................................pinAndEseReducer...........................//
  export function pinAndEseReducer(state, action) {
    if(action.type == 'updateSet') {
      return {
      ...state,
        set: action.payload,
      };
    }
    if(action.type == 'updateTime') {
      return {
     ...state,
        time: action.payload,
      };
    }
    if(action == 'updateActive') {
      return {
    ...state,
        active: action.payload,
      };
    }
    if(action.type == 'updateNameOfRepository') {
      return {
    ...state,
        nameOfRepository: action.payload,
      };
    }
    if(action.type == 'updateTtrue') {
      return {
   ...state,
        ttrue: action.payload,
      };
    }  
    if(action.type == 'updatePp') {
      return {
  ...state,
        pp: action.payload,
      };
    }

    return state;
  }

  //............................................headerReducer........................//
  export function headerReducer(state, action)  {
    if(action.type == "updateRepose11") {
      return {
        ...state,
        repose11: action.payload,
      }
    }
    if(action.type == "updateRepose") {
      return {
       ...state,
        repose: action.payload,
      }
    }
    if(action.type == "updateOpen") {
      return {
        ...state,
        open: action.payload,
      }
    }
    if(action.type == "updateAc") {
      return {
        ...state,
        ac: action.payload,
      }
    }
    if(action.type == "updateAc2") {
      return {
       ...state,
        ac2: action.payload,
      }
    }
    if(action.type == "updateInput") {
      return {
        ...state,
        input : action.payload,
      }
    }
    if(action.type == "updateActive") {
      return {
        ...state,
        active: action.payload,
      }
    }

    
    return state;
  }

  //.................................................insideRepositoriesReducer............................//
  export function insideRepositoriesReducer(state, action)  {
    if(action.type == "updateRes") {
      return {
        ...state,
        res: action.payload,
      }
    }
    if(action.type == "updateRes2") {
      return {
        ...state,
        res2: action.payload
      }
    }
    if(action.type == "updateReq") {
      return {
       ...state,
        req: action.payload,
      }
    }
    if(action.type == "updateIsRepositoryLoaded") {
      return {
       ...state,
        isRepositoryLoaded: action.payload,
      }
    }
    if(action.type == "updteTest") {
      return {
        ...state,
        test: action.payload,
       }
    }
    if(action.type == "updateBranch1") {
      return {
        ...state,
        branch1: action.payload,
      }
    }
    if(action.type == "updateActive") {
      return {
        ...state,
        active: action.payload
      }
    }
    if(action.type == "updateCommitMessage") {
      return {
        ...state,
        commitmessage: action.payload
      }
    }
    if(action.type == "updateTime") {
      return {
        ...state,
        time: action.payload
      }
    }
    if(action.type == "upddateCommitsLenghts") {
      return {
       ...state,
        commitsLenghts: action.payload
      }
    }
    if (action.type == "updateReadMe1") {
      return {
        ...state,
        readMe1: action.payload
      }
    }
    if(action.type == "updatePopopo") {
      return {
        ...state, 
        popopo: action.payload
      }
    }
    if(action.type == "updateAc") {
      return {
        ...state,
        ac: action.payload
       }
    }
    if(action.type == "updateAc2") {
      return {
      ...state,
        ac2: action.payload
      }
    }
    if(action.type == "updateAc3") {
      return{
        ...state,
        ac3: action.payload
      }
    }
    if(action.type == "updateTik") {
      return {
       ...state,
        tik: action.payload
      }
    }
    if(action.type == "updateTik2") {
      return {
      ...state,
        tik2: action.payload
      }
    }
    if(action.type == "updateTik3") {
      return {
        ...state, 
        tik3: action.payload
      }
    }
    return state;
  }