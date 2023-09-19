package com.amor4ti.dailylab.domain.emotion.dto.response;

import com.amor4ti.dailylab.domain.emotion.entity.MemberEmotion;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class MemberEmotionDto {

    private int emotionId;
    private String date;
    private String timeStamp;

    public static MemberEmotionDto of(MemberEmotion memberEmotion) {
        return MemberEmotionDto.builder()
                            .emotionId(memberEmotion.getEmotionId())
                            .date(memberEmotion.getDate())
                            .timeStamp(memberEmotion.getTimestamp())
                            .build();
    }
}
