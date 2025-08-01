import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, X } from "lucide-react"

import styled from 'styled-components';

export default function FloatingMenu(){
    const [isOpen, setIsOpen] = useState(false);

    const menuItems = [
        {
            img : "https://ust-vina.s3.ap-northeast-2.amazonaws.com/tob/facebook_ic.webp",
            label: "facebook",
            link: "https://www.facebook.com/TOBVinaKorean",
        },
        {
            img : "https://ust-vina.s3.ap-northeast-2.amazonaws.com/tob/shopper_ic.webp",
            label: "shopee",
            link: 'https://shopee.vn/tob_officialstore',
        },
        {
            img : "https://ust-vina.s3.ap-northeast-2.amazonaws.com/tob/lazada_ic.webp",
            label: "lazada",
            link: "https://www.lazada.vn/shop/aqua-solution/?spm=a2o4n.pdp_revamp.seller.1.15084a0ePaPdKq&amp;itemId=2221839876&amp;channelSource=pdp",
        },
        {
            img : "https://ust-vina.s3.ap-northeast-2.amazonaws.com/tob/tiktok_ic.webp",
            label: "tiktok",
            link: "https://www.tiktok.com/@healthacleanvietnam",
        },
    ]

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    }

    return (
        <FloatContainer>
            <AnimatePresence>
                {isOpen  && (
                    <div className="list-box">
                        <motion.ul className="menu-list"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 20 }}
                            transition={{ duration: 0.2 }}
                        >
                            {menuItems.map((item, index) => (
                                <motion.li className="menu-item"
                                    key={index}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.8 }}
                                    transition={{ delay: index * 0.05 }}
                                >
                                    <a href={item.link}>
                                        <img src={item.img} alt={item.label} />
                                    </a>
                                </motion.li>
                            ))}
                        </motion.ul>
                    </div>
                )}
            </AnimatePresence>
            <div className="menu-button" onClick={toggleMenu} aria-label={isOpen ? "메뉴 닫기" : "메뉴 열기"}>
                <AnimatePresence mode="wait">
                    <motion.button
                        key={isOpen ? "close" : "open"}
                        initial={{ rotate: -90, opacity: 0 }}
                        animate={{ rotate: 0, opacity: 1 }}
                        exit={{ rotate: 90, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                    >
                        {isOpen ? <X size={28} color="#fff" /> : <Plus size={28} color="#fff" />}
                    </motion.button>
                </AnimatePresence>
            </div>
        </FloatContainer>
    )
}

const FloatContainer = styled.div`
  z-index:99;
  position:fixed;
  bottom:130px;
  right:52px;
    
  .menu-button {
    position:relative;
    displaY:flex;
    justify-content: center;
    align-items: center;
    width:60px;
    height:60px;
    border-radius:50%;
    background:#000;
    border:none;
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
    color:#fff;
    
    button {
      display:flex;
      justify-content: center;
      align-items: center;
    }
  }
  
  .list-box {
    position:relative;
    margin-bottom:8px;
    
    .menu-list {
      display:flex;
      flex-direction: column-reverse;
      gap:8px;
      
      .menu-item {
        text-align:center;
        a {
          display:inline-flex;
          justify-content: center;
          align-items: center;
          width:40px;
          height:40px;
          background-color: #f1f5f9;
          border-radius:50%;
          border: none;
          cursor: pointer;
          
          img {
            width: 60%;
          }
        }
      }
    }
  }

  @media only screen and (max-width: 1024px) {
    display:none;
  }
`
