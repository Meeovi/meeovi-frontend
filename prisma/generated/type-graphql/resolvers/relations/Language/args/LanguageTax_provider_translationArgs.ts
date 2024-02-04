import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Tax_provider_translationOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/Tax_provider_translationOrderByWithRelationAndSearchRelevanceInput";
import { Tax_provider_translationWhereInput } from "../../../inputs/Tax_provider_translationWhereInput";
import { Tax_provider_translationWhereUniqueInput } from "../../../inputs/Tax_provider_translationWhereUniqueInput";
import { Tax_provider_translationScalarFieldEnum } from "../../../../enums/Tax_provider_translationScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class LanguageTax_provider_translationArgs {
  @TypeGraphQL.Field(_type => Tax_provider_translationWhereInput, {
    nullable: true
  })
  where?: Tax_provider_translationWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Tax_provider_translationOrderByWithRelationAndSearchRelevanceInput], {
    nullable: true
  })
  orderBy?: Tax_provider_translationOrderByWithRelationAndSearchRelevanceInput[] | undefined;

  @TypeGraphQL.Field(_type => Tax_provider_translationWhereUniqueInput, {
    nullable: true
  })
  cursor?: Tax_provider_translationWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [Tax_provider_translationScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"tax_provider_id" | "language_id" | "name" | "custom_fields" | "created_at" | "updated_at"> | undefined;
}
