import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Snippet_setCreateManyInput } from "../../../inputs/Snippet_setCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManySnippet_setArgs {
  @TypeGraphQL.Field(_type => [Snippet_setCreateManyInput], {
    nullable: false
  })
  data!: Snippet_setCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
