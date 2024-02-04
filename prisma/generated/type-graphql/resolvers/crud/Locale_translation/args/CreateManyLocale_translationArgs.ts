import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Locale_translationCreateManyInput } from "../../../inputs/Locale_translationCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyLocale_translationArgs {
  @TypeGraphQL.Field(_type => [Locale_translationCreateManyInput], {
    nullable: false
  })
  data!: Locale_translationCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
