#include<linux/init.h>
#include<linux/module.h>
#include<linux/kernel.h>
#include<linux/list.h>
#include<linux/types.h>
#include<linux/slab.h>

struct birthday { 
    int day; 
    int month;          
    int year; 
    struct list_head list;
};
static LIST_HEAD(birthday_list);

int simple_init(void)
{
    int i=0;
    struct birthday * person;
    struct birthday * ptr;
    for(;i<5; i++)
     {
        person=kmalloc(sizeof(*person), GFP_KERNEL);
        person->day=2+5*i;
        person->month=1+i;
        person->year=1995+2*i;
        INIT_LIST_HEAD(&person->list);
        list_add_tail(&person->list, &birthday_list);
    }

    list_for_each_entry(ptr, &birthday_list, list) {
        printk(KERN_INFO "year: %d, month: %d, day:%d ", ptr->year, ptr->month, ptr->day);
    }

    printk(KERN_INFO "Loading Module\n");
    return 0;

}

void simple_exit(void){
    struct birthday * ptr, *next;
    list_for_each_entry_safe(ptr, next,&birthday_list,list) {
        list_del(&ptr->list);
        kfree(ptr);
    }
    printk(KERN_INFO "Removing Module\n");
}

module_init(simple_init);
module_exit(simple_exit);


MODULE_LICENSE("GPL");
MODULE_DESCRIPTION("Simple Module");
MODULE_AUTHOR("SGG");
