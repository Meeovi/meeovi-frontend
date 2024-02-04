import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProductCreateOrConnectWithoutProduct_translationInput } from "../inputs/ProductCreateOrConnectWithoutProduct_translationInput";
import { ProductCreateWithoutProduct_translationInput } from "../inputs/ProductCreateWithoutProduct_translationInput";
import { ProductUpdateToOneWithWhereWithoutProduct_translationInput } from "../inputs/ProductUpdateToOneWithWhereWithoutProduct_translationInput";
import { ProductUpsertWithoutProduct_translationInput } from "../inputs/ProductUpsertWithoutProduct_translationInput";
import { ProductWhereUniqueInput } from "../inputs/ProductWhereUniqueInput";

@TypeGraphQL.InputType("ProductUpdateOneRequiredWithoutProduct_translationNestedInput", {})
export class ProductUpdateOneRequiredWithoutProduct_translationNestedInput {
  @TypeGraphQL.Field(_type => ProductCreateWithoutProduct_translationInput, {
    nullable: true
  })
  create?: ProductCreateWithoutProduct_translationInput | undefined;

  @TypeGraphQL.Field(_type => ProductCreateOrConnectWithoutProduct_translationInput, {
    nullable: true
  })
  connectOrCreate?: ProductCreateOrConnectWithoutProduct_translationInput | undefined;

  @TypeGraphQL.Field(_type => ProductUpsertWithoutProduct_translationInput, {
    nullable: true
  })
  upsert?: ProductUpsertWithoutProduct_translationInput | undefined;

  @TypeGraphQL.Field(_type => ProductWhereUniqueInput, {
    nullable: true
  })
  connect?: ProductWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => ProductUpdateToOneWithWhereWithoutProduct_translationInput, {
    nullable: true
  })
  update?: ProductUpdateToOneWithWhereWithoutProduct_translationInput | undefined;
}
