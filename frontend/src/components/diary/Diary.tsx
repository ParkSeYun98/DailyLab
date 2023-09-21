interface DiaryProps {
    date : string;
  }

const Diary: React.FC<DiaryProps> = ({ date }) => {
    return (
        <div>
            {/* 캐릭터 영역*/}
            <div className='flex items-center'>
                <img className='w-[90px] mr-4' src="./resources/img/character/diego_2.png" alt="디에고" />
                <p className="-mt-4 text-2xl font-semibold">오늘의 일기를 써봤어요</p>
            </div>
            {/* 일기 내용 */}
            <div className='relative -mt-[20px] bg_contents_con p-[20px] max-h-[50vh] overflow-scroll font-light text-xl text-left break-keep leading-relaxed'>
                {content}
            </div>
        </div>
    )
}
const content = '어후, 또 하루가 끝나갔다. 아침부터 시작해서 컴퓨터 앞에 앉아 한화투자증권에 대한 자소서를 썼다. 너무 많은 생각을 했지만 생각보다 글이 잘 안 써져서 고생하다가  결국 완성했네. 이러다 컴퓨터 화면에 희번덕일 것 같아. 그래도 기분은 좋았다. 숨겨둔 내 안의 글쓰기의 재능 때문일까? 아니면 그냥 안 되는 것보다는 된 쪽이 더  기분이 좋아서일까?그 다음 과제는 공통 이력서를 첨삭하는 거였다. 사실 첨삭이라는 게 무서운 일이다. 내가 썼을 때는 모르다가 다른 사람이 읽어보면 알게 되니까. 그래서 조심스럽게  첨삭했다. 그런데 생각보다 잘 썼더라. 진지하지만 재미있게 쓴 부분이 나를 많이 대변하는 것 같았다.그다음은 개인 공부를 했다. 컴퓨터를 통해서 뭔가를 배우는 건 언제나 흥미로웠다. 새로운 걸 배울 때 마다 내 안의 세계가 넓어지는 것 같아서 좋았다. 어후, 또 하루가 끝나갔다. 아침부터 시작해서 컴퓨터 앞에 앉아 한화투자증권에 대한 자소서를 썼다. 너무 많은 생각을 했지만 생각보다 글이 잘 안 써져서 고생하다가  결국 완성했네. 이러다 컴퓨터 화면에 희번덕일 것 같아. 그래도 기분은 좋았다. 숨겨둔 내 안의 글쓰기의 재능 때문일까? 아니면 그냥 안 되는 것보다는 된 쪽이 더  기분이 좋아서일까?그 다음 과제는 공통 이력서를 첨삭하는 거였다. 사실 첨삭이라는 게 무서운 일이다. 내가 썼을 때는 모르다가 다른 사람이 읽어보면 알게 되니까. 그래서 조심스럽게  첨삭했다. 그런데 생각보다 잘 썼더라. 진지하지만 재미있게 쓴 부분이 나를 많이 대변하는 것 같았다.그다음은 개인 공부를 했다. 컴퓨터를 통해서 뭔가를 배우는 건 언제나 흥미로웠다. 새로운 걸 배울 때 마다 내 안의 세계가 넓어지는 것 같아서 좋았다.'

export default Diary;