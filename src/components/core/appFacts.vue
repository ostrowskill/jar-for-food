<template>
    <div class="container">
        <div class="facts-container">
            <div class="big-fact">
                <h3>Dowiedz się...</h3>
                <p>Naszym motto jest - jakość i miłość do jedzenia. Dlatego korzystamy tylko z najświeższych i starannie wyselekcjonowanych produktów, tylko od polskich dostawców. Wyróżnia nas też czas dostawy ponieważ chcemy, żebyś jak najszybciej spróbował naszych dań!</p>
            </div>
            <ul class="small-facts">
                <li>
                    <p class="small-fact-head">Fakt</p>
                    <p class="small-fact-desc">Pierwotnie marchewka miała kolor fioletowy.</p>
                </li>
                <li>
                    <p class="small-fact-head">Fakt</p>
                    <p class="small-fact-desc">Ziemniaki w Polsce pojawiły się dopiero w XVII w.</p>
                </li>
                <li>
                    <p class="small-fact-head">Fakt</p>
                    <p class="small-fact-desc">Mleko czekoladowe wynaleziono na Jamajce.</p>
                </li>
                <li>
                    <p class="small-fact-head">Fakt</p>
                    <p class="small-fact-desc">Ser żółty to najczęściej kradziony artykuł spożywczy ze sklepów.</p>
                </li>
                <li>
                    <p class="small-fact-head">Fakt</p>
                    <p  class="small-fact-desc">Miód to jedyny produkt spożywczy na świecie, który się nie psuje.</p>
                </li>
                <li>
                    <p class="small-fact-head">Fakt</p>
                    <p class="small-fact-desc">Jeśli zatkasz nos, jabłka, cebula i ziemniaki bedą smakowały tak samo.</p>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="scss" scoped>
.facts-container {
    margin: .5em 0 4em;
    p {
        padding: 1em .5em;
        margin: 3px 0;
    }
    .big-fact {
        background: #f3f3f3;
        margin: .2em;
        //border-radius: .5em .5em 0 0;
        h3 {
            text-align: center;
            display: inline-block;
            padding: .2em 1em;
            font-size: 2em;
            position: relative;
            background: #00E8FF;
            color: white;
            width: 100%;
            //border-radius: .5em .5em 0 0;
        }

        p {
            border-top: .2em solid #00E8FF;

        }

    }
    .small-facts {
        display: flex;
        flex-wrap: wrap;

        li {
            margin: .2em;
            flex: 1 1 34%;
        }
        .small-fact-head {
            text-align: center;
            //border-radius: .5em .5em 0 0;
            background: #e7e7e7;
            font-size: 1em;
            padding: .4em 1em;
        }
        .small-fact-desc {
            background: #f3f3f3;
            padding: 1em .5em;
            border-top: .2em solid #e7e7e7;
        }
    }
}

@media screen and (min-width: 960px) {
    .facts-container {
        text-align: inherit;
        display: flex;
        align-items: flex-start;

        .big-fact {
            margin: .3em 1em;
            p {
                padding: 3em;
            }
        }

        .small-facts {

            li {
                flex: 1 1 30%;
                margin: .1em 1em;
            }
        }
    }
}
</style>


