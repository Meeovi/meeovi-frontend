import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Dead_messageOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/Dead_messageOrderByWithRelationAndSearchRelevanceInput";
import { Dead_messageWhereInput } from "../../../inputs/Dead_messageWhereInput";
import { Dead_messageWhereUniqueInput } from "../../../inputs/Dead_messageWhereUniqueInput";
import { Dead_messageScalarFieldEnum } from "../../../../enums/Dead_messageScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindManyDead_messageArgs {
  @TypeGraphQL.Field(_type => Dead_messageWhereInput, {
    nullable: true
  })
  where?: Dead_messageWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Dead_messageOrderByWithRelationAndSearchRelevanceInput], {
    nullable: true
  })
  orderBy?: Dead_messageOrderByWithRelationAndSearchRelevanceInput[] | undefined;

  @TypeGraphQL.Field(_type => Dead_messageWhereUniqueInput, {
    nullable: true
  })
  cursor?: Dead_messageWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [Dead_messageScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "original_message_class" | "serialized_original_message" | "handler_class" | "encrypted" | "error_count" | "next_execution_time" | "exception" | "exception_message" | "exception_file" | "exception_line" | "scheduled_task_id" | "created_at" | "updated_at"> | undefined;
}
