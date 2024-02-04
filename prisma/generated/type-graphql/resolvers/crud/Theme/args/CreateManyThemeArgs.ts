import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ThemeCreateManyInput } from "../../../inputs/ThemeCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyThemeArgs {
  @TypeGraphQL.Field(_type => [ThemeCreateManyInput], {
    nullable: false
  })
  data!: ThemeCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
