import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { LocaleCreateManyInput } from "../../../inputs/LocaleCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyLocaleArgs {
  @TypeGraphQL.Field(_type => [LocaleCreateManyInput], {
    nullable: false
  })
  data!: LocaleCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
