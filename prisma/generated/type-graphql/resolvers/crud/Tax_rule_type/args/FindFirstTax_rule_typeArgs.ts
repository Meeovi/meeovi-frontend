import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Tax_rule_typeOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/Tax_rule_typeOrderByWithRelationAndSearchRelevanceInput";
import { Tax_rule_typeWhereInput } from "../../../inputs/Tax_rule_typeWhereInput";
import { Tax_rule_typeWhereUniqueInput } from "../../../inputs/Tax_rule_typeWhereUniqueInput";
import { Tax_rule_typeScalarFieldEnum } from "../../../../enums/Tax_rule_typeScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindFirstTax_rule_typeArgs {
  @TypeGraphQL.Field(_type => Tax_rule_typeWhereInput, {
    nullable: true
  })
  where?: Tax_rule_typeWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Tax_rule_typeOrderByWithRelationAndSearchRelevanceInput], {
    nullable: true
  })
  orderBy?: Tax_rule_typeOrderByWithRelationAndSearchRelevanceInput[] | undefined;

  @TypeGraphQL.Field(_type => Tax_rule_typeWhereUniqueInput, {
    nullable: true
  })
  cursor?: Tax_rule_typeWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [Tax_rule_typeScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "technical_name" | "position" | "created_at" | "updated_at"> | undefined;
}
