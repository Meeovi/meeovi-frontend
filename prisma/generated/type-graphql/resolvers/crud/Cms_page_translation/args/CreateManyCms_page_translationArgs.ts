import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Cms_page_translationCreateManyInput } from "../../../inputs/Cms_page_translationCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyCms_page_translationArgs {
  @TypeGraphQL.Field(_type => [Cms_page_translationCreateManyInput], {
    nullable: false
  })
  data!: Cms_page_translationCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
