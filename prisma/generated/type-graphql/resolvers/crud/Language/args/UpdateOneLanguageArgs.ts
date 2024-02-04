import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { LanguageUpdateInput } from "../../../inputs/LanguageUpdateInput";
import { LanguageWhereUniqueInput } from "../../../inputs/LanguageWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneLanguageArgs {
  @TypeGraphQL.Field(_type => LanguageUpdateInput, {
    nullable: false
  })
  data!: LanguageUpdateInput;

  @TypeGraphQL.Field(_type => LanguageWhereUniqueInput, {
    nullable: false
  })
  where!: LanguageWhereUniqueInput;
}
