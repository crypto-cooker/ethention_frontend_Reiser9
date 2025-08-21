"use client";

import React from "react";
import Image from "next/image";
import cn from "classnames";

import styles from "./page.module.css";
import base from "@/shared/styles/base.module.css";

import {
    ArrowRight,
    Blind,
    Change,
    Close,
    Copy,
    Dollar,
    Eth,
    Fire,
    Flash,
    Gift,
    Swap,
    Wallet,
    Wallet2,
    Double,
    ArrowLeft,
    Question,
} from "@/shared/icons";
import { Modal } from "@/shared/ui/Modal";

export default function Home() {
    const [upgradeModal, setUpgradeModal] = React.useState(false);
    const [syncModal, setSyncModal] = React.useState(false);
    const [connectModal, setConnectModal] = React.useState(false);
    const [extensionModal, setExtensionModal] = React.useState(false);

    const [clientId, setClientId] = React.useState("");

    const [step, setStep] = React.useState(1);

    return (
        <>
            <div className={styles.app}>
                <div className={styles.appBg}>
                    <Image src="/img/main-bg.png" alt="bg" fill />
                </div>

                <header className={styles.header}>
                    <div className={base.container}>
                        <div className={styles.headerInner}>
                            <div
                                className={styles.headerLogo}
                                onClick={() => setExtensionModal(true)}
                            >
                                <Image
                                    src="/img/logo.png"
                                    alt="Logo"
                                    width={44}
                                    height={44}
                                />
                                Ethention
                            </div>

                            <button
                                className={styles.headerButton}
                                onClick={() => setConnectModal(true)}
                            >
                                Connect Wallet
                                <span>
                                    <ArrowRight />
                                </span>
                            </button>
                        </div>
                    </div>
                </header>

                <div className={styles.appDashboard}>
                    <div className={base.container}>
                        <div className={styles.appDashboardInner}>
                            <div className={styles.appDashboardWrap}>
                                <div className={styles.appDashboardInfoWrap}>
                                    <div className={styles.appDashboardInfo}>
                                        <div className={styles.appDashboardInfoBlock}>
                                            <div
                                                className={
                                                    styles.appDashboardInfoItem
                                                }
                                            >
                                                <div>
                                                    <Swap />
                                                </div>
                                                Transactions: <span>523</span>
                                            </div>

                                            <div
                                                className={
                                                    styles.appDashboardInfoItem
                                                }
                                            >
                                                <div>
                                                    <Gift />
                                                </div>
                                                Gifts: <span>0.41 ETH</span>
                                            </div>

                                            <div
                                                className={
                                                    styles.appDashboardInfoItem
                                                }
                                            >
                                                <div>
                                                    <Dollar />
                                                </div>
                                                Users: <span>0.41 ETH</span>
                                            </div>

                                            <div
                                                className={
                                                    styles.appDashboardInfoItem
                                                }
                                            >
                                                <div>
                                                    <Dollar />
                                                </div>
                                                Gifts: <span>0.41 ETH</span>
                                            </div>

                                            <div
                                                className={
                                                    styles.appDashboardInfoItem
                                                }
                                            >
                                                <div>
                                                    <Dollar />
                                                </div>
                                                Gifts: <span>0.41 ETH</span>
                                            </div>
                                        </div>
                                        
                                        <div className={styles.appDashboardInfoBlock}>
                                            <div
                                                className={
                                                    styles.appDashboardInfoItem
                                                }
                                            >
                                                <div>
                                                    <Swap />
                                                </div>
                                                Transactions: <span>523</span>
                                            </div>

                                            <div
                                                className={
                                                    styles.appDashboardInfoItem
                                                }
                                            >
                                                <div>
                                                    <Gift />
                                                </div>
                                                Gifts: <span>0.41 ETH</span>
                                            </div>

                                            <div
                                                className={
                                                    styles.appDashboardInfoItem
                                                }
                                            >
                                                <div>
                                                    <Dollar />
                                                </div>
                                                Users: <span>0.41 ETH</span>
                                            </div>

                                            <div
                                                className={
                                                    styles.appDashboardInfoItem
                                                }
                                            >
                                                <div>
                                                    <Dollar />
                                                </div>
                                                Gifts: <span>0.41 ETH</span>
                                            </div>

                                            <div
                                                className={
                                                    styles.appDashboardInfoItem
                                                }
                                            >
                                                <div>
                                                    <Dollar />
                                                </div>
                                                Gifts: <span>0.41 ETH</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className={styles.appDashboardInfoContent}>
                                    <div className={styles.appReward}>
                                        <p className={styles.appRewardTitle}>
                                            Available rewards to claim
                                        </p>

                                        <div className={styles.appRewardItem}>
                                            <div
                                                className={
                                                    styles.appRewardItemIcon
                                                }
                                            >
                                                <Eth />
                                            </div>

                                            <p
                                                className={
                                                    styles.appRewardItemText
                                                }
                                            >
                                                0.41 ETH
                                            </p>

                                            <button
                                                className={
                                                    styles.appRewardItemButton
                                                }
                                                onClick={() =>
                                                    setSyncModal(true)
                                                }
                                            >
                                                Claim
                                                <ArrowRight />
                                            </button>
                                        </div>
                                    </div>

                                    <div className={styles.appCollectedInner}>
                                        <div className={styles.appCollected}>
                                            <p
                                                className={
                                                    styles.appRewardTitle
                                                }
                                            >
                                                Total rewards collected
                                            </p>

                                            <div
                                                className={
                                                    styles.appCollectedTable
                                                }
                                            >
                                                <div
                                                    className={
                                                        styles.appCollectedTableItem
                                                    }
                                                >
                                                    <div
                                                        className={
                                                            styles.appCollectedTableItemCount
                                                        }
                                                    >
                                                        <span>
                                                            <Eth />
                                                        </span>
                                                        1.2
                                                    </div>

                                                    <p
                                                        className={
                                                            styles.appCollectedTableItemTime
                                                        }
                                                    >
                                                        7:12 PM
                                                    </p>

                                                    <p
                                                        className={
                                                            styles.appCollectedTableItemDate
                                                        }
                                                    >
                                                        10.01.2025
                                                    </p>
                                                </div>

                                                <div
                                                    className={
                                                        styles.appCollectedTableItem
                                                    }
                                                >
                                                    <div
                                                        className={
                                                            styles.appCollectedTableItemCount
                                                        }
                                                    >
                                                        <span>
                                                            <Eth />
                                                        </span>
                                                        1.2
                                                    </div>

                                                    <p
                                                        className={
                                                            styles.appCollectedTableItemTime
                                                        }
                                                    >
                                                        7:12 PM
                                                    </p>

                                                    <p
                                                        className={
                                                            styles.appCollectedTableItemDate
                                                        }
                                                    >
                                                        10.01.2025
                                                    </p>
                                                </div>

                                                <div
                                                    className={
                                                        styles.appCollectedTableItem
                                                    }
                                                >
                                                    <div
                                                        className={
                                                            styles.appCollectedTableItemCount
                                                        }
                                                    >
                                                        <span>
                                                            <Eth />
                                                        </span>
                                                        1.2
                                                    </div>

                                                    <p
                                                        className={
                                                            styles.appCollectedTableItemTime
                                                        }
                                                    >
                                                        7:12 PM
                                                    </p>

                                                    <p
                                                        className={
                                                            styles.appCollectedTableItemDate
                                                        }
                                                    >
                                                        10.01.2025
                                                    </p>
                                                </div>

                                                <div
                                                    className={
                                                        styles.appCollectedTableItem
                                                    }
                                                >
                                                    <div
                                                        className={
                                                            styles.appCollectedTableItemCount
                                                        }
                                                    >
                                                        <span>
                                                            <Eth />
                                                        </span>
                                                        1.2
                                                    </div>

                                                    <p
                                                        className={
                                                            styles.appCollectedTableItemTime
                                                        }
                                                    >
                                                        7:12 PM
                                                    </p>

                                                    <p
                                                        className={
                                                            styles.appCollectedTableItemDate
                                                        }
                                                    >
                                                        10.01.2025
                                                    </p>
                                                </div>

                                                <div
                                                    className={
                                                        styles.appCollectedTableItem
                                                    }
                                                >
                                                    <div
                                                        className={
                                                            styles.appCollectedTableItemCount
                                                        }
                                                    >
                                                        <span>
                                                            <Eth />
                                                        </span>
                                                        1.2
                                                    </div>

                                                    <p
                                                        className={
                                                            styles.appCollectedTableItemTime
                                                        }
                                                    >
                                                        7:12 PM
                                                    </p>

                                                    <p
                                                        className={
                                                            styles.appCollectedTableItemDate
                                                        }
                                                    >
                                                        10.01.2025
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className={styles.appLeaderboardInner}>
                                <div className={styles.appLeaderboard}>
                                    <p className={styles.appRewardTitle}>
                                        Leaderboard.
                                    </p>

                                    <div className={styles.appLeaderTable}>
                                        <div
                                            className={
                                                styles.appLeaderTableItem
                                            }
                                        >
                                            <div
                                                className={
                                                    styles.appLeaderTableItemWallet
                                                }
                                            >
                                                <span>
                                                    <Wallet />
                                                </span>
                                                0x23...34
                                            </div>

                                            <p
                                                className={
                                                    styles.appLeaderTableItemCount
                                                }
                                            >
                                                1.2
                                                <Eth />
                                            </p>
                                        </div>

                                        <div
                                            className={
                                                styles.appLeaderTableItem
                                            }
                                        >
                                            <div
                                                className={
                                                    styles.appLeaderTableItemWallet
                                                }
                                            >
                                                <span>
                                                    <Wallet />
                                                </span>
                                                0x23...34
                                            </div>

                                            <p
                                                className={
                                                    styles.appLeaderTableItemCount
                                                }
                                            >
                                                1.2
                                                <Eth />
                                            </p>
                                        </div>

                                        <div
                                            className={
                                                styles.appLeaderTableItem
                                            }
                                        >
                                            <div
                                                className={
                                                    styles.appLeaderTableItemWallet
                                                }
                                            >
                                                <span>
                                                    <Wallet />
                                                </span>
                                                0x23...34
                                            </div>

                                            <p
                                                className={
                                                    styles.appLeaderTableItemCount
                                                }
                                            >
                                                1.2
                                                <Eth />
                                            </p>
                                        </div>

                                        <div
                                            className={
                                                styles.appLeaderTableItem
                                            }
                                        >
                                            <div
                                                className={
                                                    styles.appLeaderTableItemWallet
                                                }
                                            >
                                                <span>
                                                    <Wallet />
                                                </span>
                                                0x23...34
                                            </div>

                                            <p
                                                className={
                                                    styles.appLeaderTableItemCount
                                                }
                                            >
                                                1.2
                                                <Eth />
                                            </p>
                                        </div>

                                        <div
                                            className={
                                                styles.appLeaderTableItem
                                            }
                                        >
                                            <div
                                                className={
                                                    styles.appLeaderTableItemWallet
                                                }
                                            >
                                                <span>
                                                    <Wallet />
                                                </span>
                                                0x23...34
                                            </div>

                                            <p
                                                className={
                                                    styles.appLeaderTableItemCount
                                                }
                                            >
                                                1.2
                                                <Eth />
                                            </p>
                                        </div>

                                        <div
                                            className={
                                                styles.appLeaderTableItem
                                            }
                                        >
                                            <div
                                                className={
                                                    styles.appLeaderTableItemWallet
                                                }
                                            >
                                                <span>
                                                    <Wallet />
                                                </span>
                                                0x23...34
                                            </div>

                                            <p
                                                className={
                                                    styles.appLeaderTableItemCount
                                                }
                                            >
                                                1.2
                                                <Eth />
                                            </p>
                                        </div>

                                        <div
                                            className={
                                                styles.appLeaderTableItem
                                            }
                                        >
                                            <div
                                                className={
                                                    styles.appLeaderTableItemWallet
                                                }
                                            >
                                                <span>
                                                    <Wallet />
                                                </span>
                                                0x23...34
                                            </div>

                                            <p
                                                className={
                                                    styles.appLeaderTableItemCount
                                                }
                                            >
                                                1.2
                                                <Eth />
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className={styles.appGetmore}>
                                <Image src="/img/get-bg.png" alt="Bg" fill />

                                <div className={styles.appGetmoreIcon}>
                                    <Fire />
                                </div>

                                <p className={styles.appGetmoreTitle}>
                                    Get more
                                </p>

                                <p className={styles.appGetmoreText}>
                                    Increase your winnings burning tokens
                                </p>

                                <button
                                    className={styles.appGetmoreButton}
                                    onClick={() =>
                                        setUpgradeModal((prev) => !prev)
                                    }
                                >
                                    Upgrade
                                    <span>
                                        <ArrowRight />
                                    </span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={styles.appTable}>
                    <div className={base.container}>
                        <div className={styles.appTableInner}>
                            <div className={styles.appTableHeader}>
                                <p className={styles.appTableHeaderItem}>ID</p>

                                <p className={styles.appTableHeaderItem}>
                                    User
                                </p>

                                <p className={styles.appTableHeaderItem}>
                                    Time
                                </p>

                                <p className={styles.appTableHeaderItem}>
                                    Prize Color
                                </p>

                                <p className={styles.appTableHeaderItem}>
                                    Double
                                </p>

                                <p className={styles.appTableHeaderItem}>
                                    Payout
                                </p>
                            </div>

                            <div className={styles.appTableContent}>
                                <div className={styles.appTableItem}>
                                    <p
                                        className={cn(
                                            styles.appTableItemValue,
                                            styles.appTableItemId
                                        )}
                                    >
                                        134,717,449,937
                                    </p>

                                    <div
                                        className={cn(
                                            styles.appTableItemValue,
                                            styles.appTableItemUser
                                        )}
                                    >
                                        <div
                                            className={
                                                styles.appTableItemUserName
                                            }
                                        >
                                            <Blind />
                                            Hidden
                                        </div>
                                    </div>

                                    <p
                                        className={cn(
                                            styles.appTableItemValue,
                                            styles.appTableItemId
                                        )}
                                    >
                                        7:12 PM
                                    </p>

                                    <div
                                        className={cn(
                                            styles.appTableItemValue,
                                            styles.appTableItemColor
                                        )}
                                    >
                                        <div
                                            className={cn(
                                                styles.appTableItemColorCircle,
                                                styles.blue
                                            )}
                                        ></div>
                                        Blue
                                    </div>

                                    <div
                                        className={cn(
                                            styles.appTableItemValue,
                                            styles.appTableItemUser
                                        )}
                                    >
                                        <div
                                            className={cn(
                                                styles.appTableItemValueDouble,
                                                styles.negative
                                            )}
                                        >
                                            No
                                        </div>
                                    </div>

                                    <div
                                        className={cn(
                                            styles.appTableItemValue,
                                            styles.appTableItemPay
                                        )}
                                    >
                                        -0.02131
                                        <Eth />
                                    </div>
                                </div>

                                <div className={styles.appTableItem}>
                                    <p
                                        className={cn(
                                            styles.appTableItemValue,
                                            styles.appTableItemId
                                        )}
                                    >
                                        134,717,449,937
                                    </p>

                                    <div
                                        className={cn(
                                            styles.appTableItemValue,
                                            styles.appTableItemUser
                                        )}
                                    >
                                        <div
                                            className={
                                                styles.appTableItemUserName
                                            }
                                        >
                                            <Blind />
                                            Hidden
                                        </div>
                                    </div>

                                    <p
                                        className={cn(
                                            styles.appTableItemValue,
                                            styles.appTableItemId
                                        )}
                                    >
                                        7:12 PM
                                    </p>

                                    <div
                                        className={cn(
                                            styles.appTableItemValue,
                                            styles.appTableItemColor
                                        )}
                                    >
                                        <div
                                            className={cn(
                                                styles.appTableItemColorCircle,
                                                styles.green
                                            )}
                                        ></div>
                                        Green
                                    </div>

                                    <div
                                        className={cn(
                                            styles.appTableItemValue,
                                            styles.appTableItemUser
                                        )}
                                    >
                                        <div
                                            className={cn(
                                                styles.appTableItemValueDouble,
                                                styles.negative
                                            )}
                                        >
                                            No
                                        </div>
                                    </div>

                                    <div
                                        className={cn(
                                            styles.appTableItemValue,
                                            styles.appTableItemPay
                                        )}
                                    >
                                        -0.02131
                                        <Eth />
                                    </div>
                                </div>

                                <div className={styles.appTableItem}>
                                    <p
                                        className={cn(
                                            styles.appTableItemValue,
                                            styles.appTableItemId
                                        )}
                                    >
                                        134,717,449,937
                                    </p>

                                    <div
                                        className={cn(
                                            styles.appTableItemValue,
                                            styles.appTableItemUser
                                        )}
                                    >
                                        <div
                                            className={
                                                styles.appTableItemUserName
                                            }
                                        >
                                            <Blind />
                                            Hidden
                                        </div>
                                    </div>

                                    <p
                                        className={cn(
                                            styles.appTableItemValue,
                                            styles.appTableItemId
                                        )}
                                    >
                                        7:12 PM
                                    </p>

                                    <div
                                        className={cn(
                                            styles.appTableItemValue,
                                            styles.appTableItemColor
                                        )}
                                    >
                                        <div
                                            className={cn(
                                                styles.appTableItemColorCircle,
                                                styles.orange
                                            )}
                                        ></div>
                                        Orange
                                    </div>

                                    <div
                                        className={cn(
                                            styles.appTableItemValue,
                                            styles.appTableItemUser
                                        )}
                                    >
                                        <div
                                            className={cn(
                                                styles.appTableItemValueDouble,
                                                styles.negative
                                            )}
                                        >
                                            No
                                        </div>
                                    </div>

                                    <div
                                        className={cn(
                                            styles.appTableItemValue,
                                            styles.appTableItemPay
                                        )}
                                    >
                                        -0.02131
                                        <Eth />
                                    </div>
                                </div>

                                <div className={styles.appTableItem}>
                                    <p
                                        className={cn(
                                            styles.appTableItemValue,
                                            styles.appTableItemId
                                        )}
                                    >
                                        134,717,449,937
                                    </p>

                                    <div
                                        className={cn(
                                            styles.appTableItemValue,
                                            styles.appTableItemUser
                                        )}
                                    >
                                        <div
                                            className={
                                                styles.appTableItemUserName
                                            }
                                        >
                                            Mickle
                                        </div>
                                    </div>

                                    <p
                                        className={cn(
                                            styles.appTableItemValue,
                                            styles.appTableItemId
                                        )}
                                    >
                                        7:12 PM
                                    </p>

                                    <div
                                        className={cn(
                                            styles.appTableItemValue,
                                            styles.appTableItemColor
                                        )}
                                    >
                                        <div
                                            className={cn(
                                                styles.appTableItemColorCircle,
                                                styles.purple
                                            )}
                                        ></div>
                                        Purple
                                    </div>

                                    <div
                                        className={cn(
                                            styles.appTableItemValue,
                                            styles.appTableItemUser
                                        )}
                                    >
                                        <div
                                            className={cn(
                                                styles.appTableItemValueDouble,
                                                styles.positive
                                            )}
                                        >
                                            Yes
                                        </div>
                                    </div>

                                    <div
                                        className={cn(
                                            styles.appTableItemValue,
                                            styles.appTableItemPay
                                        )}
                                    >
                                        -0.02131
                                        <Eth />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Modal value={upgradeModal}>
                <div className={styles.upgradeModal}>
                    <button
                        className={styles.upgradeModalClose}
                        onClick={() => setUpgradeModal(false)}
                    >
                        <Close />
                    </button>

                    <p className={styles.upgradeModalText}>
                        In order to change the color prize
                    </p>

                    <p className={styles.upgradeModalTitle}>
                        You must hold <span>ETHXX.</span>
                    </p>

                    <div className={styles.upgradeModalItems}>
                        <div
                            className={cn(
                                styles.upgradeModalItem,
                                styles.green
                            )}
                        >
                            <p className={styles.upgradeModalItemText}>Green</p>

                            <p className={styles.upgradeModalItemValue}>10K</p>

                            <div className={styles.upgradeModalItemCircleInner}>
                                <div
                                    className={styles.upgradeModalItemCircle}
                                ></div>
                            </div>
                        </div>

                        <div
                            className={cn(styles.upgradeModalItem, styles.blue)}
                        >
                            <p className={styles.upgradeModalItemText}>Blue</p>

                            <p className={styles.upgradeModalItemValue}>50K</p>

                            <div className={styles.upgradeModalItemCircleInner}>
                                <div
                                    className={styles.upgradeModalItemCircle}
                                ></div>
                            </div>
                        </div>

                        <div
                            className={cn(
                                styles.upgradeModalItem,
                                styles.purple
                            )}
                        >
                            <p className={styles.upgradeModalItemText}>
                                Purple
                            </p>

                            <p className={styles.upgradeModalItemValue}>250K</p>

                            <div className={styles.upgradeModalItemCircleInner}>
                                <div
                                    className={styles.upgradeModalItemCircle}
                                ></div>
                            </div>
                        </div>

                        <div
                            className={cn(
                                styles.upgradeModalItem,
                                styles.orange
                            )}
                        >
                            <p className={styles.upgradeModalItemText}>
                                Orange
                            </p>

                            <p className={styles.upgradeModalItemValue}>750K</p>

                            <div className={styles.upgradeModalItemCircleInner}>
                                <div
                                    className={styles.upgradeModalItemCircle}
                                ></div>
                            </div>
                        </div>
                    </div>

                    <div className={styles.upgradeModalHr}></div>

                    <p className={styles.upgradeModalText}>
                        5 hidden prizes per day
                    </p>

                    <p className={styles.upgradeModalTitle}>
                        Burn <span>ETHXX.</span>
                    </p>

                    <div className={styles.upgradeBurnItems}>
                        <div className={styles.upgradeBurnItem}>
                            <p className={styles.upgradeBurnItemPoint}>+5</p>

                            <p className={styles.upgradeBurnItemText}>
                                Hidden Prizes
                            </p>

                            <p className={styles.upgradeBurnItemTitle}>
                                15K <span>ETHXX</span>
                            </p>

                            <button className={styles.upgradeBurnItemButton}>
                                Burn
                                <Fire />
                            </button>
                        </div>

                        <div className={styles.upgradeBurnItem}>
                            <p className={styles.upgradeBurnItemPoint}>+10</p>

                            <p className={styles.upgradeBurnItemText}>
                                Hidden Prizes
                            </p>

                            <p className={styles.upgradeBurnItemTitle}>
                                25K <span>ETHXX</span>
                            </p>

                            <button className={styles.upgradeBurnItemButton}>
                                Burn
                                <Fire />
                            </button>
                        </div>
                    </div>
                </div>
            </Modal>

            <Modal value={syncModal}>
                <div className={styles.upgradeModal}>
                    <button
                        className={styles.upgradeModalClose}
                        onClick={() => setSyncModal(false)}
                    >
                        <Close />
                    </button>

                    <div className={styles.clientIcon}>
                        <Image
                            src="/img/client.svg"
                            alt="client"
                            width={31}
                            height={31}
                        />
                    </div>

                    <p className={styles.clientTitle}>Add your Client ID</p>

                    <p className={styles.clientText}>
                        Before you continue to your dashboard please sync your
                        browser extension si the app.
                    </p>

                    <div className={styles.clientId}>
                        6383839hgT
                        <button className={styles.clientIdCopy}>
                            <Copy />
                            Copy ID
                        </button>
                    </div>

                    <button className={styles.clientButton}>
                        Syncronize App
                        <Change />
                    </button>
                </div>
            </Modal>

            <Modal value={connectModal}>
                <div className={styles.connectModal}>
                    <button
                        className={styles.upgradeModalClose}
                        onClick={() => setConnectModal(false)}
                    >
                        <Close />
                    </button>

                    <p className={styles.connectTitle}>Connect Wallet</p>

                    <p className={styles.connectText}>
                        Get started by connecting your preferred wallet below
                    </p>

                    <div className={styles.connectChoice}>
                        <p>or select a wallet from the list below</p>
                    </div>

                    <div className={styles.connectItems}>
                        <button className={styles.connectItem}>
                            <span>
                                <Image
                                    src="/img/metamask.png"
                                    alt="metamask"
                                    width={36}
                                    height={36}
                                />
                                MetaMask
                            </span>

                            <ArrowRight />
                        </button>

                        <button className={styles.connectItem}>
                            <span>
                                <Image
                                    src="/img/phantom.png"
                                    alt="phantom"
                                    width={36}
                                    height={36}
                                />
                                Phantom
                            </span>

                            <ArrowRight />
                        </button>

                        <button className={styles.connectItem}>
                            <span>
                                <Image
                                    src="/img/coinbase.png"
                                    alt="coinbase"
                                    width={36}
                                    height={36}
                                />
                                Coinbase Wallet
                            </span>

                            <ArrowRight />
                        </button>

                        <button className={styles.connectItem}>
                            <span>
                                <Image
                                    src="/img/wallet.png"
                                    alt="wallet"
                                    width={36}
                                    height={36}
                                />
                                WalletConnect
                            </span>

                            <ArrowRight />
                        </button>
                    </div>

                    <button className={styles.connectButton}>
                        <Wallet2 />I don’t have a wallet
                    </button>
                </div>
            </Modal>

            <Modal value={extensionModal}>
                <div className={styles.extensionModal}>
                    <button
                        className={styles.upgradeModalClose}
                        onClick={() => setExtensionModal(false)}
                    >
                        <Close />
                    </button>

                    <div className={styles.extensionBgInner}>
                        <Image
                            src="/img/ext-bg.png"
                            alt="bg"
                            fill
                            className={styles.extensionBg}
                        />
                    </div>

                    {step <= 2 && (
                        <div className={styles.extensionLogo}>
                            <Image
                                src="/img/logo.png"
                                alt="logo"
                                width={80}
                                height={80}
                            />
                            Ethention
                        </div>
                    )}

                    {step <= 2 && (
                        <div className={styles.extensionLogin}>
                            {step === 1 && (
                                <>
                                    <div
                                        className={styles.extensionLoginInputs}
                                    >
                                        <div
                                            className={
                                                styles.extensionLoginInputInner
                                            }
                                        >
                                            <input
                                                className={
                                                    styles.extensionLoginInput
                                                }
                                                placeholder="Enter your Client ID"
                                                value={clientId}
                                                onChange={(e) =>
                                                    setClientId(e.target.value)
                                                }
                                            />

                                            {/* <Blind /> */}
                                        </div>

                                        <button
                                            className={cn(
                                                styles.extensionLoginButton,
                                                {
                                                    [styles.disabled]:
                                                        !clientId,
                                                }
                                            )}
                                            onClick={() => setStep(2)}
                                        >
                                            Get started
                                        </button>
                                    </div>

                                    <div className={styles.extensionLoginWrap}>
                                        <p
                                            className={
                                                styles.extensionLoginText
                                            }
                                        >
                                            Don`t have an{" "}
                                            <span>Client ID?</span>
                                        </p>

                                        <button
                                            className={
                                                styles.extensionLoginClient
                                            }
                                        >
                                            GET Client ID
                                        </button>
                                    </div>
                                </>
                            )}

                            {step === 2 && (
                                <>
                                    <p className={styles.clientIdTitle}>
                                        Your Client ID
                                    </p>

                                    <div className={styles.clientIdBlock}>
                                        6383839hgT
                                        <button className={styles.clientIdCopy}>
                                            <Copy />
                                            Copy ID
                                        </button>
                                    </div>

                                    <div
                                        className={styles.clientAttentionBlock}
                                    >
                                        <div
                                            className={
                                                styles.clientAttentionTitleInner
                                            }
                                        >
                                            <span>!</span>

                                            <p
                                                className={
                                                    styles.clientAttentionTitle
                                                }
                                            >
                                                Attention
                                            </p>
                                        </div>

                                        <p
                                            className={
                                                styles.clientAttentionText
                                            }
                                        >
                                            Client ID is unique and can be used
                                            for login and registration, but once
                                            lost cannot be recovered and it is
                                            better to keep it safe and secure.
                                        </p>
                                    </div>

                                    <button
                                        className={styles.extensionLoginButton}
                                        onClick={() => setStep(3)}
                                    >
                                        Login
                                    </button>
                                </>
                            )}
                        </div>
                    )}

                    {step === 3 && (
                        <>
                            <div className={styles.extensionHeader}>
                                <Image
                                    src="/img/logo.png"
                                    alt="logo"
                                    width={37}
                                    height={37}
                                />
                                Ethention
                            </div>

                            <div className={styles.extensionCount}>
                                <div
                                    className={cn(
                                        styles.extensionCountValue,
                                        styles.green
                                    )}
                                >
                                    <p>
                                        <span>99</span>
                                    </p>
                                </div>

                                {/* <div className={cn(styles.extensionCountValue, styles.orange)}>
                                    <p><span>50</span></p>
                                </div>

                                <div className={cn(styles.extensionCountValue, styles.red)}>
                                    <p><span>0</span></p>
                                </div> */}

                                <p className={styles.extensionCountTitle}>
                                    Attention Score
                                </p>
                            </div>

                            <div className={styles.extensionDailyWrap}>
                                <div className={styles.extensionDaily}>
                                    <div
                                        className={
                                            styles.extensionDailyTitleWrap
                                        }
                                    >
                                        <div
                                            className={
                                                styles.extensionDailyTitleInner
                                            }
                                        >
                                            <p
                                                className={
                                                    styles.extensionDailyTitle
                                                }
                                            >
                                                Daily Rewards
                                            </p>

                                            <p
                                                className={
                                                    styles.extensionDailyText
                                                }
                                            >
                                                There are 5 hidden rewards today
                                                on your <span>X</span>
                                            </p>
                                        </div>

                                        <div
                                            className={
                                                styles.extensionDailyCount
                                            }
                                        >
                                            5
                                        </div>
                                    </div>

                                    <div className={styles.extensionDailyItems}>
                                        <div
                                            className={cn(
                                                styles.extensionDailyItem,
                                                styles.active
                                            )}
                                        ></div>
                                        <div
                                            className={cn(
                                                styles.extensionDailyItem,
                                                styles.active
                                            )}
                                        ></div>
                                        <div
                                            className={cn(
                                                styles.extensionDailyItem,
                                                styles.active
                                            )}
                                        ></div>
                                        <div
                                            className={
                                                styles.extensionDailyItem
                                            }
                                        ></div>
                                        <div
                                            className={
                                                styles.extensionDailyItem
                                            }
                                        ></div>
                                    </div>
                                </div>

                                <div className={styles.extensionFlashInner}>
                                    <div className={styles.extensionFlashIcon}>
                                        <Flash />
                                    </div>

                                    <p className={styles.extensionFlashText}>
                                        Do you want to increase your daily
                                        reards or do you want bigger rewards?
                                    </p>
                                </div>

                                <button
                                    className={styles.extensionLoginButton}
                                    onClick={() => setStep(4)}
                                >
                                    Go to Dashboard
                                </button>
                            </div>
                        </>
                    )}

                    {step === 4 && (
                        <>
                            <div className={styles.extensionLogo}>
                                <Image
                                    src="/img/logo.png"
                                    alt="logo"
                                    width={80}
                                    height={80}
                                />
                                Ethention
                            </div>

                            <div className={styles.extensionDailyWrap}>
                                <div className={styles.extensionInfoWindow}>
                                    <div className={styles.extensionInfoIcon}>
                                        <Image
                                            src="/img/check.svg"
                                            alt="check"
                                            width={31}
                                            height={31}
                                        />
                                    </div>

                                    <div
                                        className={
                                            styles.extensionInfoTextBlock
                                        }
                                    >
                                        <p
                                            className={
                                                styles.extensionInfoTitle
                                            }
                                        >
                                            Congrats!
                                        </p>

                                        <p className={styles.extensionInfoText}>
                                            You found an hidden reward.
                                        </p>
                                    </div>
                                </div>

                                <button className={styles.extensionInfoClaim}>
                                    Claim
                                    <Gift />
                                </button>

                                <div className={styles.extensionInfoChoice}>
                                    <span>or</span>
                                </div>

                                <button
                                    className={styles.extensionInfoX2}
                                    onClick={() => setStep(5)}
                                >
                                    <span>
                                        <Double />
                                        Double
                                    </span>
                                </button>
                            </div>
                        </>
                    )}

                    {step === 5 && (
                        <>
                            <div className={styles.extensionLogo}>
                                <Image
                                    src="/img/logo.png"
                                    alt="logo"
                                    width={80}
                                    height={80}
                                />
                                Ethention
                            </div>

                            <div className={styles.extensionDailyWrap}>
                                <div className={styles.extensionInfoWindow}>
                                    <div className={styles.extensionInfoIcon}>
                                        <Image
                                            src="/img/cubes.svg"
                                            alt="cubes"
                                            width={31}
                                            height={31}
                                        />
                                    </div>

                                    <div
                                        className={
                                            styles.extensionInfoTextBlock
                                        }
                                    >
                                        <p className={styles.extensionInfoText}>
                                            In order to double your reward
                                            please guess where the number bigger
                                            then 7 is
                                        </p>
                                    </div>
                                </div>

                                <div className={styles.extensionGame}>
                                    <button
                                        className={styles.extensionGameChoice}
                                        onClick={() => setStep(6)}
                                    >
                                        <span
                                            className={
                                                styles.extensionGameChoiceQuestion
                                            }
                                        >
                                            <Question />
                                        </span>

                                        <span
                                            className={
                                                styles.extensionGameChoiceText
                                            }
                                        >
                                            Here
                                        </span>
                                    </button>

                                    <p>or</p>

                                    <button
                                        className={styles.extensionGameChoice}
                                        onClick={() => setStep(7)}
                                    >
                                        <span
                                            className={
                                                styles.extensionGameChoiceQuestion
                                            }
                                        >
                                            <Question />
                                        </span>

                                        <span
                                            className={
                                                styles.extensionGameChoiceText
                                            }
                                        >
                                            Here
                                        </span>
                                    </button>
                                </div>

                                <button
                                    className={styles.extensionDoubleBack}
                                    onClick={() => setStep(4)}
                                >
                                    <ArrowLeft />
                                    Go Back
                                </button>
                            </div>
                        </>
                    )}

                    {step === 6 && (
                        <>
                            <div className={styles.extensionLogo}>
                                <Image
                                    src="/img/logo.png"
                                    alt="logo"
                                    width={80}
                                    height={80}
                                />
                                Ethention
                            </div>

                            <div className={styles.extensionDailyWrap}>
                                <div className={styles.extensionInfoWindow}>
                                    <div className={styles.extensionInfoIcon}>
                                        <Image
                                            src="/img/x2.svg"
                                            alt="x2"
                                            width={31}
                                            height={31}
                                        />
                                    </div>

                                    <div
                                        className={
                                            styles.extensionInfoTextBlock
                                        }
                                    >
                                        <p
                                            className={
                                                styles.extensionInfoTitle
                                            }
                                        >
                                            Congrats!
                                        </p>

                                        <p className={styles.extensionInfoText}>
                                            You doubleed your reward.
                                        </p>
                                    </div>
                                </div>

                                <button
                                    className={styles.extensionInfoClaim}
                                    style={{ marginTop: 20 }}
                                >
                                    Claim
                                    <Gift />
                                </button>
                            </div>
                        </>
                    )}

                    {step === 7 && (
                        <>
                            <div className={styles.extensionLogo}>
                                <Image
                                    src="/img/logo.png"
                                    alt="logo"
                                    width={80}
                                    height={80}
                                />
                                Ethention
                            </div>

                            <div className={styles.extensionDailyWrap}>
                                <div className={styles.extensionInfoWindow}>
                                    <div className={styles.extensionInfoIcon}>
                                        <Image
                                            src="/img/negative.svg"
                                            alt="negative"
                                            width={31}
                                            height={31}
                                        />
                                    </div>

                                    <div
                                        className={
                                            styles.extensionInfoTextBlock
                                        }
                                    >
                                        <p
                                            className={
                                                styles.extensionInfoTitle
                                            }
                                        >
                                            Unlucky.You lost.
                                        </p>

                                        <p className={styles.extensionInfoText}>
                                            100 EETHXX tokeens will been burned.
                                        </p>
                                    </div>
                                </div>

                                <button
                                    className={styles.extensionLoginButton}
                                    onClick={() => setStep(5)}
                                    style={{ marginTop: 20 }}
                                >
                                    <ArrowLeft />
                                    Go Back
                                </button>
                            </div>
                        </>
                    )}
                </div>
            </Modal>
        </>
    );
}
