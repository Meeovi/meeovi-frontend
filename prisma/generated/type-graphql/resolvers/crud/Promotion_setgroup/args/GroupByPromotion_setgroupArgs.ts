import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Promotion_setgroupOrderByWithAggregationInput } from "../../../inputs/Promotion_setgroupOrderByWithAggregationInput";
import { Promotion_setgroupScalarWhereWithAggregatesInput } from "../../../inputs/Promotion_setgroupScalarWhereWithAggregatesInput";
import { Promotion_setgroupWhereInput } from "../../../inputs/Promotion_setgroupWhereInput";
import { Promotion_setgroupScalarFieldEnum } from "../../../../enums/Promotion_setgroupScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByPromotion_setgroupArgs {
  @TypeGraphQL.Field(_type => Promotion_setgroupWhereInput, {
    nullable: true
  })
  where?: Promotion_setgroupWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Promotion_setgroupOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: Promotion_setgroupOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [Promotion_setgroupScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "promotion_id" | "packager_key" | "sorter_key" | "value" | "created_at" | "updated_at">;

  @TypeGraphQL.Field(_type => Promotion_setgroupScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: Promotion_setgroupScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
