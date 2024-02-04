import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Locale_translationCreateInput } from "../../../inputs/Locale_translationCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneLocale_translationArgs {
  @TypeGraphQL.Field(_type => Locale_translationCreateInput, {
    nullable: false
  })
  data!: Locale_translationCreateInput;
}
