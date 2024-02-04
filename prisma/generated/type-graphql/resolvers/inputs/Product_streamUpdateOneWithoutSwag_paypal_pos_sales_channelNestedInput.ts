import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Product_streamCreateOrConnectWithoutSwag_paypal_pos_sales_channelInput } from "../inputs/Product_streamCreateOrConnectWithoutSwag_paypal_pos_sales_channelInput";
import { Product_streamCreateWithoutSwag_paypal_pos_sales_channelInput } from "../inputs/Product_streamCreateWithoutSwag_paypal_pos_sales_channelInput";
import { Product_streamUpdateToOneWithWhereWithoutSwag_paypal_pos_sales_channelInput } from "../inputs/Product_streamUpdateToOneWithWhereWithoutSwag_paypal_pos_sales_channelInput";
import { Product_streamUpsertWithoutSwag_paypal_pos_sales_channelInput } from "../inputs/Product_streamUpsertWithoutSwag_paypal_pos_sales_channelInput";
import { Product_streamWhereInput } from "../inputs/Product_streamWhereInput";
import { Product_streamWhereUniqueInput } from "../inputs/Product_streamWhereUniqueInput";

@TypeGraphQL.InputType("Product_streamUpdateOneWithoutSwag_paypal_pos_sales_channelNestedInput", {})
export class Product_streamUpdateOneWithoutSwag_paypal_pos_sales_channelNestedInput {
  @TypeGraphQL.Field(_type => Product_streamCreateWithoutSwag_paypal_pos_sales_channelInput, {
    nullable: true
  })
  create?: Product_streamCreateWithoutSwag_paypal_pos_sales_channelInput | undefined;

  @TypeGraphQL.Field(_type => Product_streamCreateOrConnectWithoutSwag_paypal_pos_sales_channelInput, {
    nullable: true
  })
  connectOrCreate?: Product_streamCreateOrConnectWithoutSwag_paypal_pos_sales_channelInput | undefined;

  @TypeGraphQL.Field(_type => Product_streamUpsertWithoutSwag_paypal_pos_sales_channelInput, {
    nullable: true
  })
  upsert?: Product_streamUpsertWithoutSwag_paypal_pos_sales_channelInput | undefined;

  @TypeGraphQL.Field(_type => Product_streamWhereInput, {
    nullable: true
  })
  disconnect?: Product_streamWhereInput | undefined;

  @TypeGraphQL.Field(_type => Product_streamWhereInput, {
    nullable: true
  })
  delete?: Product_streamWhereInput | undefined;

  @TypeGraphQL.Field(_type => Product_streamWhereUniqueInput, {
    nullable: true
  })
  connect?: Product_streamWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => Product_streamUpdateToOneWithWhereWithoutSwag_paypal_pos_sales_channelInput, {
    nullable: true
  })
  update?: Product_streamUpdateToOneWithWhereWithoutSwag_paypal_pos_sales_channelInput | undefined;
}
