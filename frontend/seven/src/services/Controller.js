import axios from 'axios'
import store from '@/store'

const url = 'http://70.12.247.54:8082/'

export default {
    // 포트폴리오 리스트 조회   searchAllPortfolio.do
    getPortfolios() {
        return new Promise((resolve, reject) => {
            axios
                .get(url + 'searchAllPortfolio.do')
                .then(response => {
                    resolve(response.data)
                })
                .catch(error => {
                    console.log("error : " + error)
                })
        })
    },

    // 포트폴리오 글 작성   newPortfolio.do


    // 포트폴리오 글 수정   updatePortfolio.do


    // 포트폴리오 글 삭제   deletePortfolio.do


    // 포트폴리오 댓글 작성 newPortfolioComment.do


    // 포트폴리오 댓글 수정 updatePortfolioComment.do


    // 포트폴리오 댓글 삭제 deletePortfolioComment.do


    // 포스트 리스트 조회   searchAllPost.do
    getPosts() {
        return new Promise((resolve, reject) => {
            axios
                .get(url + 'searchAllPost.do')
                .then(response => {
                    resolve(response.data)
                })
                .catch(error => {
                    console.log("error : " + error)
                })
        })
    }

    // 포스트 글 작성   newPost.do


    // 포스트 글 수정   updatePost.do


    // 포스트 글 삭제   deletePost.do


    // 포스트 댓글 작성 newPostComment.do


    // 포스트 댓글 수정 updatePostComment.do


    // 포스트 댓글 삭제 deletePostComment.do


    // 로그인   login.do


    // 회원가입 register.do

}