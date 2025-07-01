'use client';

import { useEffect, useState } from 'react';
import { ethers } from 'ethers';
import { motion } from 'framer-motion';
import Confetti from 'react-confetti';
import { Button } from '@/components/ui/button';
import { FiKey, FiXCircle } from 'react-icons/fi';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from "@/components/ui/tooltip";

export function WalletConnect() {
  const [account, setAccount] = useState<string | null>(null);
  const [showConfetti, setShowConfetti] = useState(false);
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

  const connectWallet = async () => {
    if (window.ethereum) {
      try {
        const provider = new ethers.BrowserProvider(window.ethereum);
        const signer = await provider.getSigner();
        const address = await signer.getAddress();
        setAccount(address);
        setShowConfetti(true);
        setTimeout(() => setShowConfetti(false), 4000);
      } catch (err) {
        console.error('Wallet connection failed:', err);
      }
    } else {
      alert('MetaMask not detected');
    }
  };

  const disconnectWallet = () => {
    setAccount(null);
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    }
  }, []);

  return (
    <motion.section
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1.2, delay: 0.4, ease: 'easeOut' }}
      className="min-h-screen flex flex-col items-center justify-center px-4 text-center relative overflow-hidden"
    >
      {showConfetti && (
        <Confetti
          width={windowSize.width}
          height={windowSize.height}
          recycle={false}
          numberOfPieces={200}
          gravity={0.3}
        />
      )}

      <h2 className="text-3xl font-semibold mb-4">Web3 Wallet Demo</h2>
      <p className="text-muted-foreground mb-6 max-w-xl">
        Connect your MetaMask wallet to explore blockchain interaction. This is a demo only.
      </p>

      <TooltipProvider  delayDuration={0}>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              onClick={account ? disconnectWallet : connectWallet}
              className={`
                flex items-center gap-2 transition-colors duration-300 text-center
                ${account ? 'bg-red-500/10 text-red-600 hover:bg-red-500/20 dark:text-red-400' : ''}
              `}
            >
              {account ? (
                <FiXCircle className="text-red-500 dark:text-red-400" />
              ) : (
                <img
                  src="/MetaMask.svg"
                  alt="MetaMask"
                  className="w-4 h-4"
                />
              )}
              {account ? 'Disconnect Wallet' : 'Connect MetaMask'}
            </Button>
          </TooltipTrigger>
          <TooltipContent side="top" className="text-xs max-w-xs text-muted-foreground">
            This is a safe demo. We never collect, store, or access your wallet data in any form.
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>

      {account && (
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-4 text-sm text-muted-foreground break-words max-w-md"
        >
          Connected Address: <br />
          <span className="font-mono">{account}</span>
        </motion.p>
      )}
    </motion.section>
  );
}
