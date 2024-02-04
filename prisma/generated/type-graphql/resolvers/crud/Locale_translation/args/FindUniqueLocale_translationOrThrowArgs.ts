import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Locale_translationWhereUniqueInput } from "../../../inputs/Locale_translationWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueLocale_translationOrThrowArgs {
  @TypeGraphQL.Field(_type => Locale_translationWhereUniqueInput, {
    nullable: false
  })
  where!: Locale_translationWhereUniqueInput;
}
