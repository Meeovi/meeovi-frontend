import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Od_scheduler_jobOrderByWithAggregationInput } from "../../../inputs/Od_scheduler_jobOrderByWithAggregationInput";
import { Od_scheduler_jobScalarWhereWithAggregatesInput } from "../../../inputs/Od_scheduler_jobScalarWhereWithAggregatesInput";
import { Od_scheduler_jobWhereInput } from "../../../inputs/Od_scheduler_jobWhereInput";
import { Od_scheduler_jobScalarFieldEnum } from "../../../../enums/Od_scheduler_jobScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByOd_scheduler_jobArgs {
  @TypeGraphQL.Field(_type => Od_scheduler_jobWhereInput, {
    nullable: true
  })
  where?: Od_scheduler_jobWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Od_scheduler_jobOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: Od_scheduler_jobOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [Od_scheduler_jobScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "parent_id" | "status" | "type" | "name" | "message" | "started_at" | "finished_at" | "created_at" | "updated_at">;

  @TypeGraphQL.Field(_type => Od_scheduler_jobScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: Od_scheduler_jobScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
