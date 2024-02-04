import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Cms_pageUpdateInput } from "../../../inputs/Cms_pageUpdateInput";
import { Cms_pageWhereUniqueInput } from "../../../inputs/Cms_pageWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneCms_pageArgs {
  @TypeGraphQL.Field(_type => Cms_pageUpdateInput, {
    nullable: false
  })
  data!: Cms_pageUpdateInput;

  @TypeGraphQL.Field(_type => Cms_pageWhereUniqueInput, {
    nullable: false
  })
  where!: Cms_pageWhereUniqueInput;
}
