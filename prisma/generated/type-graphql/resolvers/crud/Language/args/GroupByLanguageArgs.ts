import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { LanguageOrderByWithAggregationInput } from "../../../inputs/LanguageOrderByWithAggregationInput";
import { LanguageScalarWhereWithAggregatesInput } from "../../../inputs/LanguageScalarWhereWithAggregatesInput";
import { LanguageWhereInput } from "../../../inputs/LanguageWhereInput";
import { LanguageScalarFieldEnum } from "../../../../enums/LanguageScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByLanguageArgs {
  @TypeGraphQL.Field(_type => LanguageWhereInput, {
    nullable: true
  })
  where?: LanguageWhereInput | undefined;

  @TypeGraphQL.Field(_type => [LanguageOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: LanguageOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [LanguageScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "name" | "parent_id" | "swag_language_pack_language_id" | "locale_id" | "translation_code_id" | "custom_fields" | "created_at" | "updated_at">;

  @TypeGraphQL.Field(_type => LanguageScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: LanguageScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
