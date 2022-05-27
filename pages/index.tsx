import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import React, { useState } from 'react'
import { Form, Dropdown, Button } from 'react-bootstrap'

const Home: NextPage = () => {
  const [letsStartButton, setStart] = useState(false)
  const [currentIndex, setIndex] = useState(0)
  const nextQuest = () => {
    if (currentIndex < 2) {
      setIndex(currentIndex + 1)
    }
  }
  const prevQuest = () => {
    if (currentIndex === 0) {
      setStart(false)
    } else {
      setIndex(currentIndex - 1)
    }
  }
  //Defining the array of forms
  const form1 = () => {
    return (
      <div className="flex flex-col">
        <Form.Label className="text-2xl">*What is your brand name?</Form.Label>
        <input
          className="my-4 border-b-2 bg-[#F7F9FA] py-2 placeholder:text-2xl focus:outline-none"
          placeholder="Type your brand name here"
        ></input>
        <Form.Label className="text-2xl">
          *What are the major platforms where you sell correctly?
        </Form.Label>
        <p className="m-2 text-xs font-extralight">Select all that apply</p>
        <div className="flex flex-row">
          <div className="flex items-center">
            <input
              type="checkbox"
              id="own_website"
              name="own_website"
              className="mr-2 h-4 w-4 bg-slate-100"
            ></input>
          </div>
          <div>
            <label className="text-xl">Own Website</label>
          </div>
        </div>
        <div className="flex flex-row">
          <div className="flex items-center">
            <input
              type="checkbox"
              id="amazon"
              name="amazon"
              className="mr-2 h-4 w-4 bg-slate-100"
            ></input>
          </div>
          <div>
            <label className="text-xl">Amazon</label>
          </div>
        </div>
        <div className="flex flex-row">
          <div className="flex items-center">
            <input
              type="checkbox"
              id="flipkart"
              name="flipkart"
              className="mr-2 h-4 w-4 bg-slate-100"
            ></input>
          </div>
          <div>
            <label className="text-xl">Flipkart</label>
          </div>
        </div>
        <div className="flex flex-row">
          <div className="flex items-center">
            <input
              type="checkbox"
              id="offline_stores"
              name="offline_stores"
              className="mr-2 h-4 w-4 bg-slate-100"
            ></input>
          </div>
          <div>
            <label className="text-xl">Offline Stores</label>
          </div>
        </div>
        <div className="flex flex-row">
          <div className="flex items-center">
            <input
              type="checkbox"
              id="qcommerce"
              name="qcommerce"
              className="mr-2 h-4 w-4 bg-slate-100"
            ></input>
          </div>
          <div>
            <label className="text-xl">QCommerce</label>
          </div>
        </div>
        <div className="flex flex-row">
          <div className="flex items-center">
            <input
              type="checkbox"
              id="yet_to_start"
              name="yet_to_start"
              className="mr-2 h-4 w-4 bg-slate-100"
            ></input>
          </div>
          <div>
            <label className="text-xl">Yet to start</label>
          </div>
        </div>
      </div>
    )
  }
  const form2 = () => {
    return (
      <div className="flex flex-col">
        <div className="flex flex-col items-center">
          <p className="text-4xl font-semibold">
            Almost there! We have all the basic information.
          </p>
          <p className="text-2xl">
            The next few questions will help us determine the target.
          </p>
        </div>
        <div className="ml-16">
          <Form.Label className="text-2xl">
            *Which category is best suited for your brand?
          </Form.Label>
          <div className="m-2 flex flex-row">
            <div className="flex items-center">
              <input
                type="radio"
                id="munchies"
                name="munchies"
                className="mr-2 h-8 w-8 bg-slate-100"
              ></input>
            </div>
            <div>
              <label className="text-2xl">Munchies</label>
            </div>
          </div>
          <div className="m-2 flex flex-row">
            <div className="flex items-center">
              <input
                type="radio"
                id="instant-food"
                name="instant_food"
                className="mr-2 h-8 w-8 bg-slate-100"
              ></input>
            </div>
            <div>
              <label className="text-2xl">Instant Food</label>
            </div>
          </div>
          <div className="m-2 flex flex-row">
            <div className="flex items-center">
              <input
                type="radio"
                id="spreads"
                name="spreads"
                className="mr-2 h-8 w-8 bg-slate-100"
              ></input>
            </div>
            <div>
              <label className="text-2xl">Spreads</label>
            </div>
          </div>
          <div className="m-2 flex flex-row">
            <div className="flex items-center">
              <input
                type="radio"
                id="beverages"
                name="beverages"
                className="mr-2 h-8 w-8 bg-slate-100"
              ></input>
            </div>
            <div>
              <label className="text-2xl">Beverages</label>
            </div>
          </div>
        </div>
      </div>
    )
  }

  const form3 = () => {
    return (
      <div className="mt-[175px] mb-[135px] mx-[auto] rounded-md bg-white w-[914px] h-622px]">
        <Form.Label className="text-2xl mt-[73px] ml-[68px]">
          What does your customer look like?
        </Form.Label>
      </div>
    )
  }
  const formsArray = [form1, form2, form3]
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-slate-600">
      {!letsStartButton ? (
        <div className="flex h-[696px] w-[1380px] flex-col justify-center bg-slate-100 p-10">
          <p className="mt-[87px] mx-auto flex font-[Montserrat] text-[48.83px] leading-[85px] text-[#3D404B]">
            Hey,
          </p>
          <p className="m-4 mt-10 flex justify-center text-2xl">
            Welcome to Omniflo. The next 5 minutes will be super productive
          </p>
          <p className="m-4 flex justify-center text-2xl">
            These questions will help our AI powered recommendation engine to
            find
          </p>
          <p className="m-4 flex justify-center text-2xl">
            a perfect match for you.
          </p>
          <p className="m-10 flex justify-center text-2xl font-bold">Ready?</p>
          <div className="mt-12 flex flex-col items-center justify-center">
            <Button
              variant="dark"
              className="w-36 drop-shadow-lg"
              onClick={() => setStart(true)}
            >
              Let's Start!
            </Button>
            <p className="text-sm">Takes just 5 minutes</p>
          </div>
        </div>
      ) : (
        <div className="flex h-[696px] w-[1380px] flex-col justify-center bg-[#F7F9FA] p-10">
          <div>{formsArray[currentIndex]()}</div>
          <div className="mt-4 flex justify-between">
            <Button variant="outline-dark" onClick={() => prevQuest()}>
              Previous
            </Button>
            <Button variant="dark" onClick={() => nextQuest()}>
              Next
            </Button>
          </div>
        </div>
      )}
    </div>
  )
}

export default Home
