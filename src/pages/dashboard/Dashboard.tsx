import { useState } from 'react';
import { HerramientasDeDetalle, HerramientasDeListado } from '../../shared/components';
import { LayoutBaseDePagina } from '../../shared/layouts';


export const Dashboard = () => {

    const [textToSearch, setTextToSearch] = useState('');
    {/* <HerramientasDeListado 
                    showInputToSearch
                    textToSearch={textToSearch}
                    onChangueTextToSearch={(n: string) => {
                        setTextToSearch(n);
                    }}
                /> */}

    return (
        <LayoutBaseDePagina
            title='Pagina principal'
            toolsBar={(

                <HerramientasDeDetalle
                    showSaveAndNewButton
                    
                />
            )}
        >
            TEstando
        </LayoutBaseDePagina>
    );
};