import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Locale_translationUpdateInput } from "../../../inputs/Locale_translationUpdateInput";
import { Locale_translationWhereUniqueInput } from "../../../inputs/Locale_translationWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneLocale_translationArgs {
  @TypeGraphQL.Field(_type => Locale_translationUpdateInput, {
    nullable: false
  })
  data!: Locale_translationUpdateInput;

  @TypeGraphQL.Field(_type => Locale_translationWhereUniqueInput, {
    nullable: false
  })
  where!: Locale_translationWhereUniqueInput;
}
