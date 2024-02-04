import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { App_templateCreateManyInput } from "../../../inputs/App_templateCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyApp_templateArgs {
  @TypeGraphQL.Field(_type => [App_templateCreateManyInput], {
    nullable: false
  })
  data!: App_templateCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
