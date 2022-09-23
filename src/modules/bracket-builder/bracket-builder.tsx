import { ArrowDownTrayIcon, QuestionMarkCircleIcon, TrashIcon } from '@heroicons/react/24/outline';
import * as React from 'react';
import { PageContent } from '~/components/page-content';
import { PageHeader } from '~/components/page-header';
import { PrimaryButton } from '~/components/ui/button';
import { useConfirmDialog } from '~/components/ui/confirm-dialog';
import Modal from '~/components/ui/modal';
import { useBracketStore, useGeneratedJSON } from './builder/bracket-store';
import AboutModal from './components/about-modal';
import { AddNewRoundButton } from './components/add-new-round-button';
import { GeneratedText } from './components/generated-copier';
import { RoundDetail } from './round/round-detail';

export function BracketBuilder() {
  const { confirm } = useConfirmDialog();
  const rounds = useBracketStore(state => state.rounds);
  const addNewRound = useBracketStore(state => state.addNewRound);
  const clearAllRounds = useBracketStore(state => state.clearAllRounds);
  const generatedJSON = useGeneratedJSON();
  const [isGeneratorModalOpen, setIsGeneratorModalOpen] = React.useState(false);
  const [isAboutModalOpen, setIsAboutModalOpen] = React.useState(false);

  const handleConfirmClear = async () => {
    const confirmed = await confirm({
      title: 'Clear all rounds',
      message: 'Are you sure you want to delete all rounds? This is irreversible!',
      confirmText: 'Clear',
      cancelText: 'Cancel',
    });

    if (confirmed) {
      clearAllRounds();
    }
  };

  const openGeneratorModal = () => {
    setIsGeneratorModalOpen(true);
  };

  const closeGeneratorModal = () => {
    setIsGeneratorModalOpen(false);
  };

  const openAboutModal = () => {
    setIsAboutModalOpen(true);
  };

  const closeAboutModal = () => {
    setIsAboutModalOpen(false);
  };

  return (
    <>
      <PageContent className="sm:py-12">
        <div className="container mx-auto space-y-8">
          <PageHeader
            pageTitle="Bracket Builder"
            actions={
              <div className="flex items-center space-x-4">
                <PrimaryButton icon={ArrowDownTrayIcon} color="blue" onClick={openGeneratorModal}>
                  Generate
                </PrimaryButton>
                <PrimaryButton icon={TrashIcon} color="red" onClick={handleConfirmClear}>
                  Clear
                </PrimaryButton>
                <PrimaryButton icon={QuestionMarkCircleIcon} color="gray" onClick={openAboutModal}>
                  About
                </PrimaryButton>
              </div>
            }
          />
          <div className="flex relative gap-6 flex-col xl:flex-row xl:w-full xl:h-full xl:pt-7 xl:pb-14 xl:overflow-x-auto">
            {rounds.map((round, index) => (
              <RoundDetail key={`${index}_${round.name}`} index={index} round={round} />
            ))}
            <AddNewRoundButton onCreateRound={spotType => addNewRound(spotType)} />
          </div>
        </div>
      </PageContent>
      <Modal
        isOpen={isGeneratorModalOpen}
        title="Structure file"
        content={
          <div className="space-y-4">
            <p className="text-sm text-gray-300">
              Copy it to your clipboard and paste it into the Competition Tool.
            </p>
            <GeneratedText builderText={`${JSON.stringify(generatedJSON, null, 2)}`} />
          </div>
        }
        onClose={closeGeneratorModal}
      />
      <AboutModal isOpen={isAboutModalOpen} onClose={closeAboutModal} />
    </>
  );
}
