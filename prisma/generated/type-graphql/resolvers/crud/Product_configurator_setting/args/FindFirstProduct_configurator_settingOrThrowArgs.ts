import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Product_configurator_settingOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/Product_configurator_settingOrderByWithRelationAndSearchRelevanceInput";
import { Product_configurator_settingWhereInput } from "../../../inputs/Product_configurator_settingWhereInput";
import { Product_configurator_settingWhereUniqueInput } from "../../../inputs/Product_configurator_settingWhereUniqueInput";
import { Product_configurator_settingScalarFieldEnum } from "../../../../enums/Product_configurator_settingScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindFirstProduct_configurator_settingOrThrowArgs {
  @TypeGraphQL.Field(_type => Product_configurator_settingWhereInput, {
    nullable: true
  })
  where?: Product_configurator_settingWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Product_configurator_settingOrderByWithRelationAndSearchRelevanceInput], {
    nullable: true
  })
  orderBy?: Product_configurator_settingOrderByWithRelationAndSearchRelevanceInput[] | undefined;

  @TypeGraphQL.Field(_type => Product_configurator_settingWhereUniqueInput, {
    nullable: true
  })
  cursor?: Product_configurator_settingWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [Product_configurator_settingScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "version_id" | "product_id" | "product_version_id" | "property_group_option_id" | "price" | "position" | "media_id" | "custom_fields" | "created_at" | "updated_at"> | undefined;
}
