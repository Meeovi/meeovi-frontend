import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { RuleOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/RuleOrderByWithRelationAndSearchRelevanceInput";
import { RuleWhereInput } from "../../../inputs/RuleWhereInput";
import { RuleWhereUniqueInput } from "../../../inputs/RuleWhereUniqueInput";
import { RuleScalarFieldEnum } from "../../../../enums/RuleScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindFirstRuleArgs {
  @TypeGraphQL.Field(_type => RuleWhereInput, {
    nullable: true
  })
  where?: RuleWhereInput | undefined;

  @TypeGraphQL.Field(_type => [RuleOrderByWithRelationAndSearchRelevanceInput], {
    nullable: true
  })
  orderBy?: RuleOrderByWithRelationAndSearchRelevanceInput[] | undefined;

  @TypeGraphQL.Field(_type => RuleWhereUniqueInput, {
    nullable: true
  })
  cursor?: RuleWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [RuleScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "name" | "description" | "priority" | "payload" | "invalid" | "areas" | "module_types" | "custom_fields" | "created_at" | "updated_at"> | undefined;
}
