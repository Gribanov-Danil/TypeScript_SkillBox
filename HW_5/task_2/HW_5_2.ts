type UserResponse = {
    id: number,
    name: string,
    registrationDate: string,
}


type AuthResponse = {
    id: number;
    avatar: string;
    name: string;
    login: string;
    user_token: string;
}

type SomeOtherResponse = {
    field1: string;
    field2: string;
    field3: string;
}


type AfterApiRefactoring<T, K> = {
    data: T,
    meta: K
}


type MetaTrackMessage = {
    trackId: string, // айди трекера логирования
    trackerUrl: string, // юрл трекера логирования
}


type LoadMetaMessage = {
    currentNodeId: string, // текущий сервер, с которым установлено соединение
    currentNodeLoad: number // 0-100, текущая загрузка ноды
}


class SomeExternalApi {
    public static getUsers(): AfterApiRefactoring<UserResponse, MetaTrackMessage>[] {
        return [
            {
                data:
                    {
                        "id": 49,
                        "name": "Kate",
                        "registrationDate": "2020-08-30 14:17:23"
                    },
                meta: {
                    trackId: "Sqny0mSDCByG",
                    trackerUrl: "someTrackerUrl",
                }
            }
        ]
    }


    public static auth(): AfterApiRefactoring<AuthResponse, MetaTrackMessage> {
        return {
            data: {
                id: 124,
                avatar: "<http://llss.qiniudn.com/d234b75b6a7dfeda793b7da04a7c080dd.png>",
                name: "Johanna",
                login: "Johanna206",
                user_token: "eYEuVgUlDvRXgHR"
            }
            ,
            meta: {
                trackId: "Sqny0mSDCByG",
                trackerUrl: "someTrackerUrl",
            }
        }

    }


    public static getSomeOther():  AfterApiRefactoring<SomeOtherResponse, LoadMetaMessage>[] {
        return [
            {
                data: {
                    "field1": "7pfE0oQFUZJg",
                    "field2": "rS9bzwuy8qb1U",
                    "field3": "2vLYGgE"
                },
                meta: {
                    currentNodeId: "Sqny0mSDCByG",
                    currentNodeLoad: 150
                }
            }

        ]
    }
}


console.log(SomeExternalApi.getUsers());
console.log(SomeExternalApi.auth());
console.log(SomeExternalApi.getSomeOther());