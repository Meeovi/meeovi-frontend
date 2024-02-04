import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Product_streamCreateOrConnectWithoutProduct_cross_sellingInput } from "../inputs/Product_streamCreateOrConnectWithoutProduct_cross_sellingInput";
import { Product_streamCreateWithoutProduct_cross_sellingInput } from "../inputs/Product_streamCreateWithoutProduct_cross_sellingInput";
import { Product_streamUpdateToOneWithWhereWithoutProduct_cross_sellingInput } from "../inputs/Product_streamUpdateToOneWithWhereWithoutProduct_cross_sellingInput";
import { Product_streamUpsertWithoutProduct_cross_sellingInput } from "../inputs/Product_streamUpsertWithoutProduct_cross_sellingInput";
import { Product_streamWhereInput } from "../inputs/Product_streamWhereInput";
import { Product_streamWhereUniqueInput } from "../inputs/Product_streamWhereUniqueInput";

@TypeGraphQL.InputType("Product_streamUpdateOneWithoutProduct_cross_sellingNestedInput", {})
export class Product_streamUpdateOneWithoutProduct_cross_sellingNestedInput {
  @TypeGraphQL.Field(_type => Product_streamCreateWithoutProduct_cross_sellingInput, {
    nullable: true
  })
  create?: Product_streamCreateWithoutProduct_cross_sellingInput | undefined;

  @TypeGraphQL.Field(_type => Product_streamCreateOrConnectWithoutProduct_cross_sellingInput, {
    nullable: true
  })
  connectOrCreate?: Product_streamCreateOrConnectWithoutProduct_cross_sellingInput | undefined;

  @TypeGraphQL.Field(_type => Product_streamUpsertWithoutProduct_cross_sellingInput, {
    nullable: true
  })
  upsert?: Product_streamUpsertWithoutProduct_cross_sellingInput | undefined;

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

  @TypeGraphQL.Field(_type => Product_streamUpdateToOneWithWhereWithoutProduct_cross_sellingInput, {
    nullable: true
  })
  update?: Product_streamUpdateToOneWithWhereWithoutProduct_cross_sellingInput | undefined;
}
