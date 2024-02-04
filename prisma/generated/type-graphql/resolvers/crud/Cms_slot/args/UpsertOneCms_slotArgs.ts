import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Cms_slotCreateInput } from "../../../inputs/Cms_slotCreateInput";
import { Cms_slotUpdateInput } from "../../../inputs/Cms_slotUpdateInput";
import { Cms_slotWhereUniqueInput } from "../../../inputs/Cms_slotWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneCms_slotArgs {
  @TypeGraphQL.Field(_type => Cms_slotWhereUniqueInput, {
    nullable: false
  })
  where!: Cms_slotWhereUniqueInput;

  @TypeGraphQL.Field(_type => Cms_slotCreateInput, {
    nullable: false
  })
  create!: Cms_slotCreateInput;

  @TypeGraphQL.Field(_type => Cms_slotUpdateInput, {
    nullable: false
  })
  update!: Cms_slotUpdateInput;
}
