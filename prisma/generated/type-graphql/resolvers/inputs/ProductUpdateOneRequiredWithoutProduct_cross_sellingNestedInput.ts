import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProductCreateOrConnectWithoutProduct_cross_sellingInput } from "../inputs/ProductCreateOrConnectWithoutProduct_cross_sellingInput";
import { ProductCreateWithoutProduct_cross_sellingInput } from "../inputs/ProductCreateWithoutProduct_cross_sellingInput";
import { ProductUpdateToOneWithWhereWithoutProduct_cross_sellingInput } from "../inputs/ProductUpdateToOneWithWhereWithoutProduct_cross_sellingInput";
import { ProductUpsertWithoutProduct_cross_sellingInput } from "../inputs/ProductUpsertWithoutProduct_cross_sellingInput";
import { ProductWhereUniqueInput } from "../inputs/ProductWhereUniqueInput";

@TypeGraphQL.InputType("ProductUpdateOneRequiredWithoutProduct_cross_sellingNestedInput", {})
export class ProductUpdateOneRequiredWithoutProduct_cross_sellingNestedInput {
  @TypeGraphQL.Field(_type => ProductCreateWithoutProduct_cross_sellingInput, {
    nullable: true
  })
  create?: ProductCreateWithoutProduct_cross_sellingInput | undefined;

  @TypeGraphQL.Field(_type => ProductCreateOrConnectWithoutProduct_cross_sellingInput, {
    nullable: true
  })
  connectOrCreate?: ProductCreateOrConnectWithoutProduct_cross_sellingInput | undefined;

  @TypeGraphQL.Field(_type => ProductUpsertWithoutProduct_cross_sellingInput, {
    nullable: true
  })
  upsert?: ProductUpsertWithoutProduct_cross_sellingInput | undefined;

  @TypeGraphQL.Field(_type => ProductWhereUniqueInput, {
    nullable: true
  })
  connect?: ProductWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => ProductUpdateToOneWithWhereWithoutProduct_cross_sellingInput, {
    nullable: true
  })
  update?: ProductUpdateToOneWithWhereWithoutProduct_cross_sellingInput | undefined;
}
