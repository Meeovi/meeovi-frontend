import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { LanguageWhereUniqueInput } from "../../../inputs/LanguageWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueLanguageArgs {
  @TypeGraphQL.Field(_type => LanguageWhereUniqueInput, {
    nullable: false
  })
  where!: LanguageWhereUniqueInput;
}
