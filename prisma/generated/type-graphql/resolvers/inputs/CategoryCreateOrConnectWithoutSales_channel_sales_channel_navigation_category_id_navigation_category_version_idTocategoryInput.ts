import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CategoryCreateWithoutSales_channel_sales_channel_navigation_category_id_navigation_category_version_idTocategoryInput } from "../inputs/CategoryCreateWithoutSales_channel_sales_channel_navigation_category_id_navigation_category_version_idTocategoryInput";
import { CategoryWhereUniqueInput } from "../inputs/CategoryWhereUniqueInput";

@TypeGraphQL.InputType("CategoryCreateOrConnectWithoutSales_channel_sales_channel_navigation_category_id_navigation_category_version_idTocategoryInput", {})
export class CategoryCreateOrConnectWithoutSales_channel_sales_channel_navigation_category_id_navigation_category_version_idTocategoryInput {
  @TypeGraphQL.Field(_type => CategoryWhereUniqueInput, {
    nullable: false
  })
  where!: CategoryWhereUniqueInput;

  @TypeGraphQL.Field(_type => CategoryCreateWithoutSales_channel_sales_channel_navigation_category_id_navigation_category_version_idTocategoryInput, {
    nullable: false
  })
  create!: CategoryCreateWithoutSales_channel_sales_channel_navigation_category_id_navigation_category_version_idTocategoryInput;
}
