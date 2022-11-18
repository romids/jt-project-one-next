export enum IdValues {}

export enum CreatedAtValues {}

export enum UpdatedAtValues {}

export enum NameValues {}

export enum DescriptionValues {}

export enum UserIdValues {}

export enum CategoryIdValues {}

export enum DueDateValues {}

export enum PriorityValues {
  High = "high",
  Medium = "medium",
  Low = "low",
}

export type TaskModel = {
  id: number;
  created_at: Date;
  updated_at: Date;
  name: string;
  description: string;
  user_id: string;
  category_id: string;
  due_date: Date;
  priority: PriorityValues;
};

export type TaskModels = TaskModel[];
