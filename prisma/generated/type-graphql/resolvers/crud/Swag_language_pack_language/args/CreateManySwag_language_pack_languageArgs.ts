import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Swag_language_pack_languageCreateManyInput } from "../../../inputs/Swag_language_pack_languageCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManySwag_language_pack_languageArgs {
  @TypeGraphQL.Field(_type => [Swag_language_pack_languageCreateManyInput], {
    nullable: false
  })
  data!: Swag_language_pack_languageCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
