import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProductCreateOrConnectWithoutProduct_visibilityInput } from "../inputs/ProductCreateOrConnectWithoutProduct_visibilityInput";
import { ProductCreateWithoutProduct_visibilityInput } from "../inputs/ProductCreateWithoutProduct_visibilityInput";
import { ProductUpdateToOneWithWhereWithoutProduct_visibilityInput } from "../inputs/ProductUpdateToOneWithWhereWithoutProduct_visibilityInput";
import { ProductUpsertWithoutProduct_visibilityInput } from "../inputs/ProductUpsertWithoutProduct_visibilityInput";
import { ProductWhereUniqueInput } from "../inputs/ProductWhereUniqueInput";

@TypeGraphQL.InputType("ProductUpdateOneRequiredWithoutProduct_visibilityNestedInput", {})
export class ProductUpdateOneRequiredWithoutProduct_visibilityNestedInput {
  @TypeGraphQL.Field(_type => ProductCreateWithoutProduct_visibilityInput, {
    nullable: true
  })
  create?: ProductCreateWithoutProduct_visibilityInput | undefined;

  @TypeGraphQL.Field(_type => ProductCreateOrConnectWithoutProduct_visibilityInput, {
    nullable: true
  })
  connectOrCreate?: ProductCreateOrConnectWithoutProduct_visibilityInput | undefined;

  @TypeGraphQL.Field(_type => ProductUpsertWithoutProduct_visibilityInput, {
    nullable: true
  })
  upsert?: ProductUpsertWithoutProduct_visibilityInput | undefined;

  @TypeGraphQL.Field(_type => ProductWhereUniqueInput, {
    nullable: true
  })
  connect?: ProductWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => ProductUpdateToOneWithWhereWithoutProduct_visibilityInput, {
    nullable: true
  })
  update?: ProductUpdateToOneWithWhereWithoutProduct_visibilityInput | undefined;
}
