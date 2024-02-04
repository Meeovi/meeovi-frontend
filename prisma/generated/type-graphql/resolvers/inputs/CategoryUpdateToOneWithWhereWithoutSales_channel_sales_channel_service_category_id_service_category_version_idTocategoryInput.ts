import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CategoryUpdateWithoutSales_channel_sales_channel_service_category_id_service_category_version_idTocategoryInput } from "../inputs/CategoryUpdateWithoutSales_channel_sales_channel_service_category_id_service_category_version_idTocategoryInput";
import { CategoryWhereInput } from "../inputs/CategoryWhereInput";

@TypeGraphQL.InputType("CategoryUpdateToOneWithWhereWithoutSales_channel_sales_channel_service_category_id_service_category_version_idTocategoryInput", {})
export class CategoryUpdateToOneWithWhereWithoutSales_channel_sales_channel_service_category_id_service_category_version_idTocategoryInput {
  @TypeGraphQL.Field(_type => CategoryWhereInput, {
    nullable: true
  })
  where?: CategoryWhereInput | undefined;

  @TypeGraphQL.Field(_type => CategoryUpdateWithoutSales_channel_sales_channel_service_category_id_service_category_version_idTocategoryInput, {
    nullable: false
  })
  data!: CategoryUpdateWithoutSales_channel_sales_channel_service_category_id_service_category_version_idTocategoryInput;
}
