import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Product_streamCreateOrConnectWithoutProduct_cross_sellingInput } from "../inputs/Product_streamCreateOrConnectWithoutProduct_cross_sellingInput";
import { Product_streamCreateWithoutProduct_cross_sellingInput } from "../inputs/Product_streamCreateWithoutProduct_cross_sellingInput";
import { Product_streamWhereUniqueInput } from "../inputs/Product_streamWhereUniqueInput";

@TypeGraphQL.InputType("Product_streamCreateNestedOneWithoutProduct_cross_sellingInput", {})
export class Product_streamCreateNestedOneWithoutProduct_cross_sellingInput {
  @TypeGraphQL.Field(_type => Product_streamCreateWithoutProduct_cross_sellingInput, {
    nullable: true
  })
  create?: Product_streamCreateWithoutProduct_cross_sellingInput | undefined;

  @TypeGraphQL.Field(_type => Product_streamCreateOrConnectWithoutProduct_cross_sellingInput, {
    nullable: true
  })
  connectOrCreate?: Product_streamCreateOrConnectWithoutProduct_cross_sellingInput | undefined;

  @TypeGraphQL.Field(_type => Product_streamWhereUniqueInput, {
    nullable: true
  })
  connect?: Product_streamWhereUniqueInput | undefined;
}
