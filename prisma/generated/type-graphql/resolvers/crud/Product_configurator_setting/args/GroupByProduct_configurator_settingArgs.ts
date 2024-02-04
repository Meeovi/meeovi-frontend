import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Product_configurator_settingOrderByWithAggregationInput } from "../../../inputs/Product_configurator_settingOrderByWithAggregationInput";
import { Product_configurator_settingScalarWhereWithAggregatesInput } from "../../../inputs/Product_configurator_settingScalarWhereWithAggregatesInput";
import { Product_configurator_settingWhereInput } from "../../../inputs/Product_configurator_settingWhereInput";
import { Product_configurator_settingScalarFieldEnum } from "../../../../enums/Product_configurator_settingScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByProduct_configurator_settingArgs {
  @TypeGraphQL.Field(_type => Product_configurator_settingWhereInput, {
    nullable: true
  })
  where?: Product_configurator_settingWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Product_configurator_settingOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: Product_configurator_settingOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_configurator_settingScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "version_id" | "product_id" | "product_version_id" | "property_group_option_id" | "price" | "position" | "media_id" | "custom_fields" | "created_at" | "updated_at">;

  @TypeGraphQL.Field(_type => Product_configurator_settingScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: Product_configurator_settingScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
