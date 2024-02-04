import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Tax_rule_type_translationOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/Tax_rule_type_translationOrderByWithRelationAndSearchRelevanceInput";
import { Tax_rule_type_translationWhereInput } from "../../../inputs/Tax_rule_type_translationWhereInput";
import { Tax_rule_type_translationWhereUniqueInput } from "../../../inputs/Tax_rule_type_translationWhereUniqueInput";
import { Tax_rule_type_translationScalarFieldEnum } from "../../../../enums/Tax_rule_type_translationScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class Tax_rule_typeTax_rule_type_translationArgs {
  @TypeGraphQL.Field(_type => Tax_rule_type_translationWhereInput, {
    nullable: true
  })
  where?: Tax_rule_type_translationWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Tax_rule_type_translationOrderByWithRelationAndSearchRelevanceInput], {
    nullable: true
  })
  orderBy?: Tax_rule_type_translationOrderByWithRelationAndSearchRelevanceInput[] | undefined;

  @TypeGraphQL.Field(_type => Tax_rule_type_translationWhereUniqueInput, {
    nullable: true
  })
  cursor?: Tax_rule_type_translationWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [Tax_rule_type_translationScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"tax_rule_type_id" | "language_id" | "type_name" | "created_at" | "updated_at"> | undefined;
}
