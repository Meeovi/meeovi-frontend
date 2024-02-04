import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CategoryCreateOrConnectWithoutSales_channel_sales_channel_navigation_category_id_navigation_category_version_idTocategoryInput } from "../inputs/CategoryCreateOrConnectWithoutSales_channel_sales_channel_navigation_category_id_navigation_category_version_idTocategoryInput";
import { CategoryCreateWithoutSales_channel_sales_channel_navigation_category_id_navigation_category_version_idTocategoryInput } from "../inputs/CategoryCreateWithoutSales_channel_sales_channel_navigation_category_id_navigation_category_version_idTocategoryInput";
import { CategoryWhereUniqueInput } from "../inputs/CategoryWhereUniqueInput";

@TypeGraphQL.InputType("CategoryCreateNestedOneWithoutSales_channel_sales_channel_navigation_category_id_navigation_category_version_idTocategoryInput", {})
export class CategoryCreateNestedOneWithoutSales_channel_sales_channel_navigation_category_id_navigation_category_version_idTocategoryInput {
  @TypeGraphQL.Field(_type => CategoryCreateWithoutSales_channel_sales_channel_navigation_category_id_navigation_category_version_idTocategoryInput, {
    nullable: true
  })
  create?: CategoryCreateWithoutSales_channel_sales_channel_navigation_category_id_navigation_category_version_idTocategoryInput | undefined;

  @TypeGraphQL.Field(_type => CategoryCreateOrConnectWithoutSales_channel_sales_channel_navigation_category_id_navigation_category_version_idTocategoryInput, {
    nullable: true
  })
  connectOrCreate?: CategoryCreateOrConnectWithoutSales_channel_sales_channel_navigation_category_id_navigation_category_version_idTocategoryInput | undefined;

  @TypeGraphQL.Field(_type => CategoryWhereUniqueInput, {
    nullable: true
  })
  connect?: CategoryWhereUniqueInput | undefined;
}
