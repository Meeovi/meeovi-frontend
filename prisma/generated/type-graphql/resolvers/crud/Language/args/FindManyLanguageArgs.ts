import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { LanguageOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/LanguageOrderByWithRelationAndSearchRelevanceInput";
import { LanguageWhereInput } from "../../../inputs/LanguageWhereInput";
import { LanguageWhereUniqueInput } from "../../../inputs/LanguageWhereUniqueInput";
import { LanguageScalarFieldEnum } from "../../../../enums/LanguageScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindManyLanguageArgs {
  @TypeGraphQL.Field(_type => LanguageWhereInput, {
    nullable: true
  })
  where?: LanguageWhereInput | undefined;

  @TypeGraphQL.Field(_type => [LanguageOrderByWithRelationAndSearchRelevanceInput], {
    nullable: true
  })
  orderBy?: LanguageOrderByWithRelationAndSearchRelevanceInput[] | undefined;

  @TypeGraphQL.Field(_type => LanguageWhereUniqueInput, {
    nullable: true
  })
  cursor?: LanguageWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [LanguageScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "name" | "parent_id" | "swag_language_pack_language_id" | "locale_id" | "translation_code_id" | "custom_fields" | "created_at" | "updated_at"> | undefined;
}
