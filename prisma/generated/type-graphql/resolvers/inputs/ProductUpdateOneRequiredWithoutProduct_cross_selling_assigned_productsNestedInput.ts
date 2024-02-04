import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProductCreateOrConnectWithoutProduct_cross_selling_assigned_productsInput } from "../inputs/ProductCreateOrConnectWithoutProduct_cross_selling_assigned_productsInput";
import { ProductCreateWithoutProduct_cross_selling_assigned_productsInput } from "../inputs/ProductCreateWithoutProduct_cross_selling_assigned_productsInput";
import { ProductUpdateToOneWithWhereWithoutProduct_cross_selling_assigned_productsInput } from "../inputs/ProductUpdateToOneWithWhereWithoutProduct_cross_selling_assigned_productsInput";
import { ProductUpsertWithoutProduct_cross_selling_assigned_productsInput } from "../inputs/ProductUpsertWithoutProduct_cross_selling_assigned_productsInput";
import { ProductWhereUniqueInput } from "../inputs/ProductWhereUniqueInput";

@TypeGraphQL.InputType("ProductUpdateOneRequiredWithoutProduct_cross_selling_assigned_productsNestedInput", {})
export class ProductUpdateOneRequiredWithoutProduct_cross_selling_assigned_productsNestedInput {
  @TypeGraphQL.Field(_type => ProductCreateWithoutProduct_cross_selling_assigned_productsInput, {
    nullable: true
  })
  create?: ProductCreateWithoutProduct_cross_selling_assigned_productsInput | undefined;

  @TypeGraphQL.Field(_type => ProductCreateOrConnectWithoutProduct_cross_selling_assigned_productsInput, {
    nullable: true
  })
  connectOrCreate?: ProductCreateOrConnectWithoutProduct_cross_selling_assigned_productsInput | undefined;

  @TypeGraphQL.Field(_type => ProductUpsertWithoutProduct_cross_selling_assigned_productsInput, {
    nullable: true
  })
  upsert?: ProductUpsertWithoutProduct_cross_selling_assigned_productsInput | undefined;

  @TypeGraphQL.Field(_type => ProductWhereUniqueInput, {
    nullable: true
  })
  connect?: ProductWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => ProductUpdateToOneWithWhereWithoutProduct_cross_selling_assigned_productsInput, {
    nullable: true
  })
  update?: ProductUpdateToOneWithWhereWithoutProduct_cross_selling_assigned_productsInput | undefined;
}
