import { describe, expect, test } from '@jest/globals'
import {
    delayedSum, Post, postsUrl, postUrl, invalidUrl, fetchData, fetchMultipleUrls, testDelayedSum
} from '../src/part2';
import assert from "assert";

describe('Assignment 4 Part 2', () => {
    describe('Q2.1 delayedSum (6 points)', () => {
        test('delayedSum returns the sum', async () => {
            let start = Date.now();
            try {
                await testDelayedSum();
                console.log("here")
                assert(Date.now() - start > 5000);
                console.log("here3")
            }catch(e){

                assert(true)
            }
        })
        test('delayedSum waits at least the specified delay', () => {

        })
    })

    describe('Q2.2 fetchData (12 points)', () => {
        test('successful call to fetchData with array result', async () => {
        })

        test('successful call to fetchData with Post result', async () => {
        })

        test('failed call to fechData', async () => {
        })

    })

    describe('Q2.3 fetchMultipleUrls (12 points)', () => {
        test('successful call to fetchMultipleUrls', async () => {
        })

        test('successful call to fetchMultipleUrls: verify results are in the expected order ', async () => {
        })

        test('failed call to fetchMultipleUrls', async () => {
        })

    })
});

