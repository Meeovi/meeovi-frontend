import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { App_translationCreateManyInput } from "../../../inputs/App_translationCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyApp_translationArgs {
  @TypeGraphQL.Field(_type => [App_translationCreateManyInput], {
    nullable: false
  })
  data!: App_translationCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
