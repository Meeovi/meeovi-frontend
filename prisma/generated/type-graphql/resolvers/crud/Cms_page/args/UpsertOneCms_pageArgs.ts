import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Cms_pageCreateInput } from "../../../inputs/Cms_pageCreateInput";
import { Cms_pageUpdateInput } from "../../../inputs/Cms_pageUpdateInput";
import { Cms_pageWhereUniqueInput } from "../../../inputs/Cms_pageWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneCms_pageArgs {
  @TypeGraphQL.Field(_type => Cms_pageWhereUniqueInput, {
    nullable: false
  })
  where!: Cms_pageWhereUniqueInput;

  @TypeGraphQL.Field(_type => Cms_pageCreateInput, {
    nullable: false
  })
  create!: Cms_pageCreateInput;

  @TypeGraphQL.Field(_type => Cms_pageUpdateInput, {
    nullable: false
  })
  update!: Cms_pageUpdateInput;
}
