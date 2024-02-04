import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SnippetCreateManyInput } from "../../../inputs/SnippetCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManySnippetArgs {
  @TypeGraphQL.Field(_type => [SnippetCreateManyInput], {
    nullable: false
  })
  data!: SnippetCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
