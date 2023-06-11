import { describe, expect, test } from '@jest/globals'
import {
    delayedSum, Post, postsUrl, postUrl, invalidUrl, fetchData, fetchMultipleUrls, testDelayedSum
} from '../src/part2';
import assert from "assert";

describe('Assignment 4 Part 2', () => {
    describe('Q2.1 delayedSum (6 points)', () => {
        test('delayedSum returns the sum', async() => {
            await delayedSum(3, 2, 3000).then(v =>
                expect(v).toEqual(5)).catch(e=>fail());
        })
        test('delayedSum waits at least the specified delay', async() => {
            const start = Date.now();
            await delayedSum(3, 2, 2000)
                .then(res => {
                    expect(Date.now() - start).toBeGreaterThanOrEqual(2000);
                })
                .catch(e => fail(e));
        })
    })

    describe('Q2.2 fetchData (12 points)', () => {
        test('successful call to fetchData with array result', async () => {
            let val = await fetchData(postsUrl);
            expect(Array.isArray(val)).toBeTruthy();
        })

        test('successful call to fetchData with Post result', async () => {
            let val = await fetchData(postUrl + "1");
            expect(Array.isArray(val)).toBeFalsy();
            //check if the fetchData works: fetch the first post and check if the userId is 1
            //expect(val["id"]).toEqual(1);


        })

        test('failed call to fechData', async () => {
        })

    })

    describe('Q2.3 fetchMultipleUrls (12 points)', () => {
        test('successful call to fetchMultipleUrls', async () => {
            let val = await fetchMultipleUrls([postsUrl, postUrl + "1"]);
            expect(Array.isArray(val)).toBeTruthy();
            expect(val.length).toEqual(2);
            expect(Array.isArray(val[0])).toBeTruthy();
            expect(Array.isArray(val[1])).toBeFalsy();
        })

        test('successful call to fetchMultipleUrls: verify results are in the expected order ', async () => {
            let val = await fetchMultipleUrls([postUrl + "1", postUrl + "2"]);
            expect(Array.isArray(val)).toBeTruthy();
            expect(val.length).toEqual(2);
            expect(Array.isArray(val[0])).toBeFalsy();
            expect(Array.isArray(val[1])).toBeFalsy();
        })

        test('failed call to fetchMultipleUrls', async () => {
            let val = await fetchMultipleUrls([invalidUrl, postUrl + "1"]);
            expect(Array.isArray(val)).toBeTruthy();
            expect(val.length).toEqual(2);
            expect(val[0]).toEqual({});
            expect(Array.isArray(val[1])).toBeFalsy();
        })

    })
});

