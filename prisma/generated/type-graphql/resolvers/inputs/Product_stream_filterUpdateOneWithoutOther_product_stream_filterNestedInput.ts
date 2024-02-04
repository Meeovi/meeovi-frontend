import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Product_stream_filterCreateOrConnectWithoutOther_product_stream_filterInput } from "../inputs/Product_stream_filterCreateOrConnectWithoutOther_product_stream_filterInput";
import { Product_stream_filterCreateWithoutOther_product_stream_filterInput } from "../inputs/Product_stream_filterCreateWithoutOther_product_stream_filterInput";
import { Product_stream_filterUpdateToOneWithWhereWithoutOther_product_stream_filterInput } from "../inputs/Product_stream_filterUpdateToOneWithWhereWithoutOther_product_stream_filterInput";
import { Product_stream_filterUpsertWithoutOther_product_stream_filterInput } from "../inputs/Product_stream_filterUpsertWithoutOther_product_stream_filterInput";
import { Product_stream_filterWhereInput } from "../inputs/Product_stream_filterWhereInput";
import { Product_stream_filterWhereUniqueInput } from "../inputs/Product_stream_filterWhereUniqueInput";

@TypeGraphQL.InputType("Product_stream_filterUpdateOneWithoutOther_product_stream_filterNestedInput", {})
export class Product_stream_filterUpdateOneWithoutOther_product_stream_filterNestedInput {
  @TypeGraphQL.Field(_type => Product_stream_filterCreateWithoutOther_product_stream_filterInput, {
    nullable: true
  })
  create?: Product_stream_filterCreateWithoutOther_product_stream_filterInput | undefined;

  @TypeGraphQL.Field(_type => Product_stream_filterCreateOrConnectWithoutOther_product_stream_filterInput, {
    nullable: true
  })
  connectOrCreate?: Product_stream_filterCreateOrConnectWithoutOther_product_stream_filterInput | undefined;

  @TypeGraphQL.Field(_type => Product_stream_filterUpsertWithoutOther_product_stream_filterInput, {
    nullable: true
  })
  upsert?: Product_stream_filterUpsertWithoutOther_product_stream_filterInput | undefined;

  @TypeGraphQL.Field(_type => Product_stream_filterWhereInput, {
    nullable: true
  })
  disconnect?: Product_stream_filterWhereInput | undefined;

  @TypeGraphQL.Field(_type => Product_stream_filterWhereInput, {
    nullable: true
  })
  delete?: Product_stream_filterWhereInput | undefined;

  @TypeGraphQL.Field(_type => Product_stream_filterWhereUniqueInput, {
    nullable: true
  })
  connect?: Product_stream_filterWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => Product_stream_filterUpdateToOneWithWhereWithoutOther_product_stream_filterInput, {
    nullable: true
  })
  update?: Product_stream_filterUpdateToOneWithWhereWithoutOther_product_stream_filterInput | undefined;
}
