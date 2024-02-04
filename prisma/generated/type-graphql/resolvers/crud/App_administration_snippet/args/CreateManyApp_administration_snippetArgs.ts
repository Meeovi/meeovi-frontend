import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { App_administration_snippetCreateManyInput } from "../../../inputs/App_administration_snippetCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyApp_administration_snippetArgs {
  @TypeGraphQL.Field(_type => [App_administration_snippetCreateManyInput], {
    nullable: false
  })
  data!: App_administration_snippetCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
