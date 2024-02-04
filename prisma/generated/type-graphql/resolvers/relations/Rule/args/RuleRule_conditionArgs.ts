import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Rule_conditionOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/Rule_conditionOrderByWithRelationAndSearchRelevanceInput";
import { Rule_conditionWhereInput } from "../../../inputs/Rule_conditionWhereInput";
import { Rule_conditionWhereUniqueInput } from "../../../inputs/Rule_conditionWhereUniqueInput";
import { Rule_conditionScalarFieldEnum } from "../../../../enums/Rule_conditionScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class RuleRule_conditionArgs {
  @TypeGraphQL.Field(_type => Rule_conditionWhereInput, {
    nullable: true
  })
  where?: Rule_conditionWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Rule_conditionOrderByWithRelationAndSearchRelevanceInput], {
    nullable: true
  })
  orderBy?: Rule_conditionOrderByWithRelationAndSearchRelevanceInput[] | undefined;

  @TypeGraphQL.Field(_type => Rule_conditionWhereUniqueInput, {
    nullable: true
  })
  cursor?: Rule_conditionWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [Rule_conditionScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "type" | "rule_id" | "script_id" | "parent_id" | "value" | "position" | "custom_fields" | "created_at" | "updated_at"> | undefined;
}
