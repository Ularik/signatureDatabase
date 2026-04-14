import { Typography } from "@mui/material";
import TableComponent from "../UI/TableComponent/TableComponent";
import GppMaybeOutlinedIcon from "@mui/icons-material/GppMaybeOutlined";
import DocIcon from "../UI/Icons/DocIcon";
import CreateOutlinedIcon from "@mui/icons-material/CreateOutlined";
import type { RowTable } from "../../types";
import ModalDescription from "../UI/ModalDescription/ModalDescription";
import { useState } from "react";


interface Props {
    rows: RowTable[]
}

const CompromiseTable: React.FC<Props> = ({ rows }) => {
    const [signature, setSignature] = useState<RowTable | null>(null);
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const openModal = (id: string) => {
        const signatureData = rows.find(row => row.id === id);
        if (signatureData) {
            setSignature(signatureData)
;          setIsOpen(true);
        }
    }

      const titleSignature = [
        <Typography>
          <GppMaybeOutlinedIcon sx={{ marginRight: "10px" }} />
          Уязвимости (CVE)
        </Typography>,
        <Typography>
          <DocIcon sx={{ marginRight: "10px" }} />
          Сигнатура
        </Typography>,
        <Typography>
          <CreateOutlinedIcon sx={{ marginRight: "8px" }} />
          Описание
        </Typography>,
      ];
      
    return (
      <>
        <TableComponent
          titles={titleSignature}
          rows={rows}
          onClick={openModal}
        />
        {signature && <ModalDescription item={signature} isOpen={isOpen} close={() => setIsOpen(false)} />}
      </>
    );
};

export default CompromiseTable;