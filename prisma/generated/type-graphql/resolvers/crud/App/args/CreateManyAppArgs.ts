import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { AppCreateManyInput } from "../../../inputs/AppCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyAppArgs {
  @TypeGraphQL.Field(_type => [AppCreateManyInput], {
    nullable: false
  })
  data!: AppCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
