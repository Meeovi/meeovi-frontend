import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Locale_translationWhereInput } from "../../../inputs/Locale_translationWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyLocale_translationArgs {
  @TypeGraphQL.Field(_type => Locale_translationWhereInput, {
    nullable: true
  })
  where?: Locale_translationWhereInput | undefined;
}
