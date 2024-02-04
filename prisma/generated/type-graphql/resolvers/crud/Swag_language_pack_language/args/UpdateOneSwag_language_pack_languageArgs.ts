import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Swag_language_pack_languageUpdateInput } from "../../../inputs/Swag_language_pack_languageUpdateInput";
import { Swag_language_pack_languageWhereUniqueInput } from "../../../inputs/Swag_language_pack_languageWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneSwag_language_pack_languageArgs {
  @TypeGraphQL.Field(_type => Swag_language_pack_languageUpdateInput, {
    nullable: false
  })
  data!: Swag_language_pack_languageUpdateInput;

  @TypeGraphQL.Field(_type => Swag_language_pack_languageWhereUniqueInput, {
    nullable: false
  })
  where!: Swag_language_pack_languageWhereUniqueInput;
}
