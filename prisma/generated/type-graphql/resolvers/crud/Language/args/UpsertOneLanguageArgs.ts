import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { LanguageCreateInput } from "../../../inputs/LanguageCreateInput";
import { LanguageUpdateInput } from "../../../inputs/LanguageUpdateInput";
import { LanguageWhereUniqueInput } from "../../../inputs/LanguageWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneLanguageArgs {
  @TypeGraphQL.Field(_type => LanguageWhereUniqueInput, {
    nullable: false
  })
  where!: LanguageWhereUniqueInput;

  @TypeGraphQL.Field(_type => LanguageCreateInput, {
    nullable: false
  })
  create!: LanguageCreateInput;

  @TypeGraphQL.Field(_type => LanguageUpdateInput, {
    nullable: false
  })
  update!: LanguageUpdateInput;
}
