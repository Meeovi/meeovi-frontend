import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CategoryCreateOrConnectWithoutSales_channel_sales_channel_footer_category_id_footer_category_version_idTocategoryInput } from "../inputs/CategoryCreateOrConnectWithoutSales_channel_sales_channel_footer_category_id_footer_category_version_idTocategoryInput";
import { CategoryCreateWithoutSales_channel_sales_channel_footer_category_id_footer_category_version_idTocategoryInput } from "../inputs/CategoryCreateWithoutSales_channel_sales_channel_footer_category_id_footer_category_version_idTocategoryInput";
import { CategoryUpdateToOneWithWhereWithoutSales_channel_sales_channel_footer_category_id_footer_category_version_idTocategoryInput } from "../inputs/CategoryUpdateToOneWithWhereWithoutSales_channel_sales_channel_footer_category_id_footer_category_version_idTocategoryInput";
import { CategoryUpsertWithoutSales_channel_sales_channel_footer_category_id_footer_category_version_idTocategoryInput } from "../inputs/CategoryUpsertWithoutSales_channel_sales_channel_footer_category_id_footer_category_version_idTocategoryInput";
import { CategoryWhereInput } from "../inputs/CategoryWhereInput";
import { CategoryWhereUniqueInput } from "../inputs/CategoryWhereUniqueInput";

@TypeGraphQL.InputType("CategoryUpdateOneWithoutSales_channel_sales_channel_footer_category_id_footer_category_version_idTocategoryNestedInput", {})
export class CategoryUpdateOneWithoutSales_channel_sales_channel_footer_category_id_footer_category_version_idTocategoryNestedInput {
  @TypeGraphQL.Field(_type => CategoryCreateWithoutSales_channel_sales_channel_footer_category_id_footer_category_version_idTocategoryInput, {
    nullable: true
  })
  create?: CategoryCreateWithoutSales_channel_sales_channel_footer_category_id_footer_category_version_idTocategoryInput | undefined;

  @TypeGraphQL.Field(_type => CategoryCreateOrConnectWithoutSales_channel_sales_channel_footer_category_id_footer_category_version_idTocategoryInput, {
    nullable: true
  })
  connectOrCreate?: CategoryCreateOrConnectWithoutSales_channel_sales_channel_footer_category_id_footer_category_version_idTocategoryInput | undefined;

  @TypeGraphQL.Field(_type => CategoryUpsertWithoutSales_channel_sales_channel_footer_category_id_footer_category_version_idTocategoryInput, {
    nullable: true
  })
  upsert?: CategoryUpsertWithoutSales_channel_sales_channel_footer_category_id_footer_category_version_idTocategoryInput | undefined;

  @TypeGraphQL.Field(_type => CategoryWhereInput, {
    nullable: true
  })
  disconnect?: CategoryWhereInput | undefined;

  @TypeGraphQL.Field(_type => CategoryWhereInput, {
    nullable: true
  })
  delete?: CategoryWhereInput | undefined;

  @TypeGraphQL.Field(_type => CategoryWhereUniqueInput, {
    nullable: true
  })
  connect?: CategoryWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => CategoryUpdateToOneWithWhereWithoutSales_channel_sales_channel_footer_category_id_footer_category_version_idTocategoryInput, {
    nullable: true
  })
  update?: CategoryUpdateToOneWithWhereWithoutSales_channel_sales_channel_footer_category_id_footer_category_version_idTocategoryInput | undefined;
}
