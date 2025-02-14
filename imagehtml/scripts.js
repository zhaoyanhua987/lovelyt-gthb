const { createApp, ref } = Vue;

const app = createApp({
    setup() {
        // 图片数据
        const images = ref([
            {
                src: './img/1.jpg',
                alt: '图片1',
                caption: '日出'
            },
            {
                src: './img/2.jpg',
                alt: '图片2',
                caption: '凌华与猫'
            },
            {
                src: './img/3.jpg',
                alt: '图片3',
                caption: '小鬼Windows'
            },
            {
                src: './img/4.jpg',
                alt: '图片4',
                caption: '西宫硝子'
            },
            {
                src: './img/5.jpg',
                alt: '图片5',
                caption: '南门湖边'
            },
            {
                src: './img/6.jpg',
                alt: '图片6',
                caption: '厦门生态公园'
            },
            {
                src: './img/7.jpg',
                alt: '图片7',
                caption: '厦门海边'
            },
            {
                src: './img/8.jpg',
                alt: '图片8',
                caption: '厦门生态公园'
            },
            {
                src: './img/9.jpg',
                alt: '图片9',
                caption: '庐山'
            },
            {
                src: './img/10.jpg',
                alt: '图片10',
                caption: '荧鹭'
            },
        ]);

        // 对话框是否可见
        const dialogVisible = ref(false);

        // 新图片的数据
        const newImage = ref({
            src: '',
            caption: ''
        });

        // 添加图片的方法
        const addImage = () => {
            if (newImage.value.src && newImage.value.caption) {
                images.value.push({
                    src: newImage.value.src,
                    alt: '新图片',
                    caption: newImage.value.caption
                });
                dialogVisible.value = false;
                newImage.value.src = '';
                newImage.value.caption = '';
            } else {
                alert('请填写图片URL和备注！');
            }
        };

        return {
            images,
            dialogVisible,
            newImage,
            addImage
        };
    }
});

// 使用 Element Plus
app.use(ElementPlus);

// 挂载 Vue 应用
app.mount('#app');