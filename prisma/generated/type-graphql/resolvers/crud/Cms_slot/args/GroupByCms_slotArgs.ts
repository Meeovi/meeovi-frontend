import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Cms_slotOrderByWithAggregationInput } from "../../../inputs/Cms_slotOrderByWithAggregationInput";
import { Cms_slotScalarWhereWithAggregatesInput } from "../../../inputs/Cms_slotScalarWhereWithAggregatesInput";
import { Cms_slotWhereInput } from "../../../inputs/Cms_slotWhereInput";
import { Cms_slotScalarFieldEnum } from "../../../../enums/Cms_slotScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByCms_slotArgs {
  @TypeGraphQL.Field(_type => Cms_slotWhereInput, {
    nullable: true
  })
  where?: Cms_slotWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Cms_slotOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: Cms_slotOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [Cms_slotScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "version_id" | "cms_block_id" | "cms_block_version_id" | "type" | "slot" | "locked" | "created_at" | "updated_at">;

  @TypeGraphQL.Field(_type => Cms_slotScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: Cms_slotScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
