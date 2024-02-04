import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Scheduled_taskOrderByWithAggregationInput } from "../../../inputs/Scheduled_taskOrderByWithAggregationInput";
import { Scheduled_taskScalarWhereWithAggregatesInput } from "../../../inputs/Scheduled_taskScalarWhereWithAggregatesInput";
import { Scheduled_taskWhereInput } from "../../../inputs/Scheduled_taskWhereInput";
import { Scheduled_taskScalarFieldEnum } from "../../../../enums/Scheduled_taskScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByScheduled_taskArgs {
  @TypeGraphQL.Field(_type => Scheduled_taskWhereInput, {
    nullable: true
  })
  where?: Scheduled_taskWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Scheduled_taskOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: Scheduled_taskOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [Scheduled_taskScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "name" | "scheduled_task_class" | "run_interval" | "default_run_interval" | "status" | "last_execution_time" | "next_execution_time" | "created_at" | "updated_at">;

  @TypeGraphQL.Field(_type => Scheduled_taskScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: Scheduled_taskScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
