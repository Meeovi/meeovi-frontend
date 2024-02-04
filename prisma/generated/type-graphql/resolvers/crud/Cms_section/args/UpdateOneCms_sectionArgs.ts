import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Cms_sectionUpdateInput } from "../../../inputs/Cms_sectionUpdateInput";
import { Cms_sectionWhereUniqueInput } from "../../../inputs/Cms_sectionWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneCms_sectionArgs {
  @TypeGraphQL.Field(_type => Cms_sectionUpdateInput, {
    nullable: false
  })
  data!: Cms_sectionUpdateInput;

  @TypeGraphQL.Field(_type => Cms_sectionWhereUniqueInput, {
    nullable: false
  })
  where!: Cms_sectionWhereUniqueInput;
}
