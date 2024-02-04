import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { FlowOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/FlowOrderByWithRelationAndSearchRelevanceInput";
import { FlowWhereInput } from "../../../inputs/FlowWhereInput";
import { FlowWhereUniqueInput } from "../../../inputs/FlowWhereUniqueInput";
import { FlowScalarFieldEnum } from "../../../../enums/FlowScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindFirstFlowArgs {
  @TypeGraphQL.Field(_type => FlowWhereInput, {
    nullable: true
  })
  where?: FlowWhereInput | undefined;

  @TypeGraphQL.Field(_type => [FlowOrderByWithRelationAndSearchRelevanceInput], {
    nullable: true
  })
  orderBy?: FlowOrderByWithRelationAndSearchRelevanceInput[] | undefined;

  @TypeGraphQL.Field(_type => FlowWhereUniqueInput, {
    nullable: true
  })
  cursor?: FlowWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [FlowScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "app_flow_event_id" | "name" | "description" | "event_name" | "priority" | "payload" | "invalid" | "active" | "custom_fields" | "created_at" | "updated_at"> | undefined;
}
