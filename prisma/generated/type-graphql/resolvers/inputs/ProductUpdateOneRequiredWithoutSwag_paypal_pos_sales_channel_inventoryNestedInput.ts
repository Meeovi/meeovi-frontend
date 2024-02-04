import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProductCreateOrConnectWithoutSwag_paypal_pos_sales_channel_inventoryInput } from "../inputs/ProductCreateOrConnectWithoutSwag_paypal_pos_sales_channel_inventoryInput";
import { ProductCreateWithoutSwag_paypal_pos_sales_channel_inventoryInput } from "../inputs/ProductCreateWithoutSwag_paypal_pos_sales_channel_inventoryInput";
import { ProductUpdateToOneWithWhereWithoutSwag_paypal_pos_sales_channel_inventoryInput } from "../inputs/ProductUpdateToOneWithWhereWithoutSwag_paypal_pos_sales_channel_inventoryInput";
import { ProductUpsertWithoutSwag_paypal_pos_sales_channel_inventoryInput } from "../inputs/ProductUpsertWithoutSwag_paypal_pos_sales_channel_inventoryInput";
import { ProductWhereUniqueInput } from "../inputs/ProductWhereUniqueInput";

@TypeGraphQL.InputType("ProductUpdateOneRequiredWithoutSwag_paypal_pos_sales_channel_inventoryNestedInput", {})
export class ProductUpdateOneRequiredWithoutSwag_paypal_pos_sales_channel_inventoryNestedInput {
  @TypeGraphQL.Field(_type => ProductCreateWithoutSwag_paypal_pos_sales_channel_inventoryInput, {
    nullable: true
  })
  create?: ProductCreateWithoutSwag_paypal_pos_sales_channel_inventoryInput | undefined;

  @TypeGraphQL.Field(_type => ProductCreateOrConnectWithoutSwag_paypal_pos_sales_channel_inventoryInput, {
    nullable: true
  })
  connectOrCreate?: ProductCreateOrConnectWithoutSwag_paypal_pos_sales_channel_inventoryInput | undefined;

  @TypeGraphQL.Field(_type => ProductUpsertWithoutSwag_paypal_pos_sales_channel_inventoryInput, {
    nullable: true
  })
  upsert?: ProductUpsertWithoutSwag_paypal_pos_sales_channel_inventoryInput | undefined;

  @TypeGraphQL.Field(_type => ProductWhereUniqueInput, {
    nullable: true
  })
  connect?: ProductWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => ProductUpdateToOneWithWhereWithoutSwag_paypal_pos_sales_channel_inventoryInput, {
    nullable: true
  })
  update?: ProductUpdateToOneWithWhereWithoutSwag_paypal_pos_sales_channel_inventoryInput | undefined;
}
