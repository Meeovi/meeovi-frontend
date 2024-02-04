import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { LanguageCreateInput } from "../../../inputs/LanguageCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneLanguageArgs {
  @TypeGraphQL.Field(_type => LanguageCreateInput, {
    nullable: false
  })
  data!: LanguageCreateInput;
}
