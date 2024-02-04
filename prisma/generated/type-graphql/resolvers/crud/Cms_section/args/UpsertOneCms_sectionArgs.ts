import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Cms_sectionCreateInput } from "../../../inputs/Cms_sectionCreateInput";
import { Cms_sectionUpdateInput } from "../../../inputs/Cms_sectionUpdateInput";
import { Cms_sectionWhereUniqueInput } from "../../../inputs/Cms_sectionWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneCms_sectionArgs {
  @TypeGraphQL.Field(_type => Cms_sectionWhereUniqueInput, {
    nullable: false
  })
  where!: Cms_sectionWhereUniqueInput;

  @TypeGraphQL.Field(_type => Cms_sectionCreateInput, {
    nullable: false
  })
  create!: Cms_sectionCreateInput;

  @TypeGraphQL.Field(_type => Cms_sectionUpdateInput, {
    nullable: false
  })
  update!: Cms_sectionUpdateInput;
}
