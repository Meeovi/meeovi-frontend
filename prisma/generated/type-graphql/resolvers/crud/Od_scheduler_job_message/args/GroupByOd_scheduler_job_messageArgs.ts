import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Od_scheduler_job_messageOrderByWithAggregationInput } from "../../../inputs/Od_scheduler_job_messageOrderByWithAggregationInput";
import { Od_scheduler_job_messageScalarWhereWithAggregatesInput } from "../../../inputs/Od_scheduler_job_messageScalarWhereWithAggregatesInput";
import { Od_scheduler_job_messageWhereInput } from "../../../inputs/Od_scheduler_job_messageWhereInput";
import { Od_scheduler_job_messageScalarFieldEnum } from "../../../../enums/Od_scheduler_job_messageScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByOd_scheduler_job_messageArgs {
  @TypeGraphQL.Field(_type => Od_scheduler_job_messageWhereInput, {
    nullable: true
  })
  where?: Od_scheduler_job_messageWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Od_scheduler_job_messageOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: Od_scheduler_job_messageOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [Od_scheduler_job_messageScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "job_id" | "type" | "message" | "created_at" | "updated_at">;

  @TypeGraphQL.Field(_type => Od_scheduler_job_messageScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: Od_scheduler_job_messageScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
