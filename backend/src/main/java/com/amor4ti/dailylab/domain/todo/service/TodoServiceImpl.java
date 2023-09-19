package com.amor4ti.dailylab.domain.todo.service;

import com.amor4ti.dailylab.domain.entity.Member;
import com.amor4ti.dailylab.domain.entity.Todo;
import com.amor4ti.dailylab.domain.member.repository.MemberRepository;
import com.amor4ti.dailylab.domain.todo.dto.request.TodoRegistDto;
import com.amor4ti.dailylab.domain.todo.dto.request.TodoUpdateDto;
import com.amor4ti.dailylab.domain.todo.dto.response.TodoDto;
import com.amor4ti.dailylab.domain.todo.repository.TodoRepository;
import com.amor4ti.dailylab.global.exception.CustomException;
import com.amor4ti.dailylab.global.exception.ExceptionStatus;
import com.amor4ti.dailylab.global.response.CommonResponse;
import com.amor4ti.dailylab.global.response.DataResponse;
import com.amor4ti.dailylab.global.response.ResponseService;
import com.amor4ti.dailylab.global.response.ResponseStatus;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;

@Slf4j
@Service
@RequiredArgsConstructor
public class TodoServiceImpl implements TodoService{

    private final TodoRepository todoRepository;
    private final MemberRepository memberRepository;
    private final ResponseService responseService;

    @Override
    public DataResponse getTodoListByMemberId(Long memberId) {
        List<TodoDto> todoDtoListByMemberId = new ArrayList<>();
        List<Todo> todoListByMemberId = todoRepository.findByMemberId(memberId);

        for (Todo todo : todoListByMemberId) {
            TodoDto todoDto = new TodoDto().toDto(todo);

            todoDtoListByMemberId.add(todoDto);
        }

        return responseService.successDataResponse(ResponseStatus.RESPONSE_SUCCESS, todoDtoListByMemberId);
    }

    @Override
    public DataResponse getAllTodoList() {
        List<TodoDto> todoDtoList = new ArrayList<>();
        List<Todo> todoList = todoRepository.findAll();

        for (Todo todo : todoList) {
            TodoDto todoDto = new TodoDto().toDto(todo);

            todoDtoList.add(todoDto);
        }

        return responseService.successDataResponse(ResponseStatus.RESPONSE_SUCCESS, todoDtoList);
    }

    @Override
    @Transactional
    public CommonResponse registTodo(TodoRegistDto todoRegistDto, Long memberId) {
        Member member = memberRepository.findById(memberId)
                .orElseThrow(() -> new CustomException(ExceptionStatus.MEMBER_NOT_FOUND));

        Todo todo = todoRegistDto.toEntity(member);
        todoRepository.save(todo);

        return responseService.successResponse(ResponseStatus.RESPONSE_SUCCESS);
    }

    @Override
    @Transactional
    public CommonResponse deleteTodo(Long memberId, TodoUpdateDto todoUpdateDto) {
        Todo todo = todoRepository.findByMemberIdAndCategoryIdAndTodoDate(memberId, todoUpdateDto.getCategoryId(), todoUpdateDto.getTodoDate())
                .orElseThrow(() -> new CustomException(ExceptionStatus.TODO_NOT_FOUND));

        todo.deleteTodo();
        todoRepository.save(todo);

        return responseService.successResponse(ResponseStatus.RESPONSE_SUCCESS);
    }

    @Override
    @Transactional
    public CommonResponse checkTodo(Long memberId, TodoUpdateDto todoUpdateDto) {
        Todo todo = todoRepository.findByMemberIdAndCategoryIdAndTodoDate(memberId, todoUpdateDto.getCategoryId(), todoUpdateDto.getTodoDate())
                .orElseThrow(() -> new CustomException(ExceptionStatus.TODO_NOT_FOUND));

        todo.checkTodo();
        todoRepository.save(todo);

        return responseService.successResponse(ResponseStatus.RESPONSE_SUCCESS);
    }
}