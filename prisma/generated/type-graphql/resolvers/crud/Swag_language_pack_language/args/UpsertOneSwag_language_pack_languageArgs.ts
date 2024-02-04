import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Swag_language_pack_languageCreateInput } from "../../../inputs/Swag_language_pack_languageCreateInput";
import { Swag_language_pack_languageUpdateInput } from "../../../inputs/Swag_language_pack_languageUpdateInput";
import { Swag_language_pack_languageWhereUniqueInput } from "../../../inputs/Swag_language_pack_languageWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneSwag_language_pack_languageArgs {
  @TypeGraphQL.Field(_type => Swag_language_pack_languageWhereUniqueInput, {
    nullable: false
  })
  where!: Swag_language_pack_languageWhereUniqueInput;

  @TypeGraphQL.Field(_type => Swag_language_pack_languageCreateInput, {
    nullable: false
  })
  create!: Swag_language_pack_languageCreateInput;

  @TypeGraphQL.Field(_type => Swag_language_pack_languageUpdateInput, {
    nullable: false
  })
  update!: Swag_language_pack_languageUpdateInput;
}
