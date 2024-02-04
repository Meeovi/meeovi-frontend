import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProductCreateManyProduct_product_main_variant_idToproductInputEnvelope } from "../inputs/ProductCreateManyProduct_product_main_variant_idToproductInputEnvelope";
import { ProductCreateOrConnectWithoutProduct_product_main_variant_idToproductInput } from "../inputs/ProductCreateOrConnectWithoutProduct_product_main_variant_idToproductInput";
import { ProductCreateWithoutProduct_product_main_variant_idToproductInput } from "../inputs/ProductCreateWithoutProduct_product_main_variant_idToproductInput";
import { ProductWhereUniqueInput } from "../inputs/ProductWhereUniqueInput";

@TypeGraphQL.InputType("ProductCreateNestedManyWithoutProduct_product_main_variant_idToproductInput", {})
export class ProductCreateNestedManyWithoutProduct_product_main_variant_idToproductInput {
  @TypeGraphQL.Field(_type => [ProductCreateWithoutProduct_product_main_variant_idToproductInput], {
    nullable: true
  })
  create?: ProductCreateWithoutProduct_product_main_variant_idToproductInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProductCreateOrConnectWithoutProduct_product_main_variant_idToproductInput], {
    nullable: true
  })
  connectOrCreate?: ProductCreateOrConnectWithoutProduct_product_main_variant_idToproductInput[] | undefined;

  @TypeGraphQL.Field(_type => ProductCreateManyProduct_product_main_variant_idToproductInputEnvelope, {
    nullable: true
  })
  createMany?: ProductCreateManyProduct_product_main_variant_idToproductInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [ProductWhereUniqueInput], {
    nullable: true
  })
  connect?: ProductWhereUniqueInput[] | undefined;
}
