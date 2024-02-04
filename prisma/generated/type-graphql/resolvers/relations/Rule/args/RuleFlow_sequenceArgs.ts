import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Flow_sequenceOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/Flow_sequenceOrderByWithRelationAndSearchRelevanceInput";
import { Flow_sequenceWhereInput } from "../../../inputs/Flow_sequenceWhereInput";
import { Flow_sequenceWhereUniqueInput } from "../../../inputs/Flow_sequenceWhereUniqueInput";
import { Flow_sequenceScalarFieldEnum } from "../../../../enums/Flow_sequenceScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class RuleFlow_sequenceArgs {
  @TypeGraphQL.Field(_type => Flow_sequenceWhereInput, {
    nullable: true
  })
  where?: Flow_sequenceWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Flow_sequenceOrderByWithRelationAndSearchRelevanceInput], {
    nullable: true
  })
  orderBy?: Flow_sequenceOrderByWithRelationAndSearchRelevanceInput[] | undefined;

  @TypeGraphQL.Field(_type => Flow_sequenceWhereUniqueInput, {
    nullable: true
  })
  cursor?: Flow_sequenceWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [Flow_sequenceScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "flow_id" | "app_flow_action_id" | "parent_id" | "rule_id" | "action_name" | "config" | "position" | "display_group" | "true_case" | "custom_fields" | "created_at" | "updated_at"> | undefined;
}
