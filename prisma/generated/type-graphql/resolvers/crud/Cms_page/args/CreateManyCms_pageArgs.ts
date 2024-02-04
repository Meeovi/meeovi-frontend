import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Cms_pageCreateManyInput } from "../../../inputs/Cms_pageCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyCms_pageArgs {
  @TypeGraphQL.Field(_type => [Cms_pageCreateManyInput], {
    nullable: false
  })
  data!: Cms_pageCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
