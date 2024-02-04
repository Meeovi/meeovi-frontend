import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Dead_messageOrderByWithAggregationInput } from "../../../inputs/Dead_messageOrderByWithAggregationInput";
import { Dead_messageScalarWhereWithAggregatesInput } from "../../../inputs/Dead_messageScalarWhereWithAggregatesInput";
import { Dead_messageWhereInput } from "../../../inputs/Dead_messageWhereInput";
import { Dead_messageScalarFieldEnum } from "../../../../enums/Dead_messageScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByDead_messageArgs {
  @TypeGraphQL.Field(_type => Dead_messageWhereInput, {
    nullable: true
  })
  where?: Dead_messageWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Dead_messageOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: Dead_messageOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [Dead_messageScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "original_message_class" | "serialized_original_message" | "handler_class" | "encrypted" | "error_count" | "next_execution_time" | "exception" | "exception_message" | "exception_file" | "exception_line" | "scheduled_task_id" | "created_at" | "updated_at">;

  @TypeGraphQL.Field(_type => Dead_messageScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: Dead_messageScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
