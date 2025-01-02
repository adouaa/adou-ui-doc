import { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import React from 'react';
import ResizableSidebar from 'components/adou-resizeable-sliderbar';
import './index.scss';
import Button from 'components/adou-button';

interface AppProps {}

const App = ({}: AppProps) => {
    const itemRefs = useRef<Map<number, HTMLElement>>(new Map());
    const itemListRef = useRef<HTMLDivElement>(null);

    const getElemBoundingClientRect = (elem: HTMLElement) => {
        const rect = elem.getBoundingClientRect();
        return rect;
    };

    // 记录元素初始位置
    const recordPositions = () => {
        const positions = new Map();
        itemRefs.current.forEach((elem, index) => {
            positions.set(index, getElemBoundingClientRect(elem));
        });
        return positions;
    };

    // Fisher-Yates 洗牌算法
    const shuffleArray = (array: number[]) => {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    };

    const handleShuffle = () => {
        if (!itemListRef.current) return;

        // 记录所有元素的初始位置
        const oldPositions = recordPositions();

        // 生成随机顺序
        const indexes = shuffleArray([...Array(5)].map((_, i) => i));
        
        // 重新排序 DOM 元素
        indexes.forEach((newIndex, i) => {
            const elem = itemRefs.current.get(newIndex);
            if (elem) {
                itemListRef.current!.appendChild(elem);
            }
        });

        // 对每个元素应用动画
        requestAnimationFrame(() => {
            itemRefs.current.forEach((elem, index) => {
                const oldPos = oldPositions.get(index);
                const newPos = getElemBoundingClientRect(elem);
                
                // 计算位置差值
                const dx = oldPos.left - newPos.left;
                const dy = oldPos.top - newPos.top;

                // 应用初始位置偏移
                elem.style.transform = `translate(${dx}px, ${dy}px)`;
                
                // 添加过渡动画并移除偏移
                requestAnimationFrame(() => {
                    elem.style.transition = 'transform 0.3s ease-in-out';
                    elem.style.transform = '';
                    
                    // 动画��束后清除过渡属性
                    elem.addEventListener('transitionend', () => {
                        elem.style.transition = '';
                    }, { once: true });
                });
            });
        });
    };

    return (
        <div className="app-wrapper">
            <Button onClickOK={handleShuffle}>随机排序</Button>
            <div ref={itemListRef} className="item-list">
                {[...Array(5)].map((_, index) => (
                    <div
                        key={index}
                        ref={(el) => {
                            if (el) itemRefs.current.set(index, el);
                        }}
                        className={`item ${index === 0 ? 'first' : ''}`}
                    >
                        item{index + 1}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default App; 