import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CategoryCreateWithoutSales_channel_sales_channel_navigation_category_id_navigation_category_version_idTocategoryInput } from "../inputs/CategoryCreateWithoutSales_channel_sales_channel_navigation_category_id_navigation_category_version_idTocategoryInput";
import { CategoryUpdateWithoutSales_channel_sales_channel_navigation_category_id_navigation_category_version_idTocategoryInput } from "../inputs/CategoryUpdateWithoutSales_channel_sales_channel_navigation_category_id_navigation_category_version_idTocategoryInput";
import { CategoryWhereInput } from "../inputs/CategoryWhereInput";

@TypeGraphQL.InputType("CategoryUpsertWithoutSales_channel_sales_channel_navigation_category_id_navigation_category_version_idTocategoryInput", {})
export class CategoryUpsertWithoutSales_channel_sales_channel_navigation_category_id_navigation_category_version_idTocategoryInput {
  @TypeGraphQL.Field(_type => CategoryUpdateWithoutSales_channel_sales_channel_navigation_category_id_navigation_category_version_idTocategoryInput, {
    nullable: false
  })
  update!: CategoryUpdateWithoutSales_channel_sales_channel_navigation_category_id_navigation_category_version_idTocategoryInput;

  @TypeGraphQL.Field(_type => CategoryCreateWithoutSales_channel_sales_channel_navigation_category_id_navigation_category_version_idTocategoryInput, {
    nullable: false
  })
  create!: CategoryCreateWithoutSales_channel_sales_channel_navigation_category_id_navigation_category_version_idTocategoryInput;

  @TypeGraphQL.Field(_type => CategoryWhereInput, {
    nullable: true
  })
  where?: CategoryWhereInput | undefined;
}
