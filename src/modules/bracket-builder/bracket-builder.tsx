import {
  ArrowDownTrayIcon,
  ArrowUpTrayIcon,
  InformationCircleIcon,
  TrashIcon,
} from '@heroicons/react/24/outline';
import * as React from 'react';
import SimpleBar from 'simplebar-react';
import { PageContent } from '~/components/page-content';
import { PageHeader } from '~/components/page-header';
import { GhostedButton, PrimaryButton } from '~/components/ui/button';
import { useConfirmDialog } from '~/components/ui/confirm-dialog';
import { useBracketStore, useGeneratedJSON } from './builder/bracket-store';
import AboutModal from './components/about-modal';
import { AddNewRoundButton } from './components/add-new-round-button';
import { ExporterDrawer } from './components/exporter-drawer';
import { ImporterDrawer } from './components/importer-drawer';
import { RoundDetail } from './round/round-detail';

export function BracketBuilder() {
  const { confirm } = useConfirmDialog();
  const rounds = useBracketStore(state => state.rounds);
  const addNewRound = useBracketStore(state => state.addNewRound);
  const importBracketData = useBracketStore(state => state.importBracketData);
  const clearAllRounds = useBracketStore(state => state.clearAllRounds);
  const generatedJSON = useGeneratedJSON();
  const [isExportModalOpen, setIsExportModalOpen] = React.useState(false);
  const [isImportModalOpen, setIsImportModalOpen] = React.useState(false);
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

  const openExportModal = () => {
    setIsExportModalOpen(true);
  };

  const closeExportModal = () => {
    setIsExportModalOpen(false);
  };

  const openImportModal = () => {
    setIsImportModalOpen(true);
  };

  const closeImportModal = () => {
    setIsImportModalOpen(false);
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
            tooltip={
              <GhostedButton icon={InformationCircleIcon} iconOnly onClick={openAboutModal}>
                About
              </GhostedButton>
            }
            actions={
              <div className="flex flex-wrap items-center -m-2">
                <PrimaryButton
                  className="m-2"
                  icon={ArrowDownTrayIcon}
                  color="blue"
                  onClick={openExportModal}
                >
                  Export
                </PrimaryButton>
                <PrimaryButton
                  className="m-2"
                  icon={ArrowUpTrayIcon}
                  color="blue"
                  onClick={openImportModal}
                >
                  Import
                </PrimaryButton>
                <PrimaryButton
                  className="m-2"
                  icon={TrashIcon}
                  color="red"
                  onClick={handleConfirmClear}
                >
                  Clear
                </PrimaryButton>
              </div>
            }
          />
          <SimpleBar className="xl:h-[739px]" forceVisible="x" autoHide={false}>
            <div className="flex relative gap-6 flex-col xl:flex-row xl:w-full xl:h-full xl:pt-7 xl:pb-14">
              {rounds.map((round, index) => (
                <RoundDetail key={`${index}_${round.name}`} index={index} round={round} />
              ))}
              <AddNewRoundButton onCreateRound={spotType => addNewRound(spotType)} />
            </div>
          </SimpleBar>
        </div>
      </PageContent>
      <ExporterDrawer
        isOpen={isExportModalOpen}
        generatedJSON={generatedJSON}
        onClose={closeExportModal}
      />
      <ImporterDrawer
        isOpen={isImportModalOpen}
        onClose={closeImportModal}
        onImport={structure => importBracketData(structure)}
      />
      <AboutModal isOpen={isAboutModalOpen} onClose={closeAboutModal} />
    </>
  );
}
