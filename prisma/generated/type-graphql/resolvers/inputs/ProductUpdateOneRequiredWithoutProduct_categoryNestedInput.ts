import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProductCreateOrConnectWithoutProduct_categoryInput } from "../inputs/ProductCreateOrConnectWithoutProduct_categoryInput";
import { ProductCreateWithoutProduct_categoryInput } from "../inputs/ProductCreateWithoutProduct_categoryInput";
import { ProductUpdateToOneWithWhereWithoutProduct_categoryInput } from "../inputs/ProductUpdateToOneWithWhereWithoutProduct_categoryInput";
import { ProductUpsertWithoutProduct_categoryInput } from "../inputs/ProductUpsertWithoutProduct_categoryInput";
import { ProductWhereUniqueInput } from "../inputs/ProductWhereUniqueInput";

@TypeGraphQL.InputType("ProductUpdateOneRequiredWithoutProduct_categoryNestedInput", {})
export class ProductUpdateOneRequiredWithoutProduct_categoryNestedInput {
  @TypeGraphQL.Field(_type => ProductCreateWithoutProduct_categoryInput, {
    nullable: true
  })
  create?: ProductCreateWithoutProduct_categoryInput | undefined;

  @TypeGraphQL.Field(_type => ProductCreateOrConnectWithoutProduct_categoryInput, {
    nullable: true
  })
  connectOrCreate?: ProductCreateOrConnectWithoutProduct_categoryInput | undefined;

  @TypeGraphQL.Field(_type => ProductUpsertWithoutProduct_categoryInput, {
    nullable: true
  })
  upsert?: ProductUpsertWithoutProduct_categoryInput | undefined;

  @TypeGraphQL.Field(_type => ProductWhereUniqueInput, {
    nullable: true
  })
  connect?: ProductWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => ProductUpdateToOneWithWhereWithoutProduct_categoryInput, {
    nullable: true
  })
  update?: ProductUpdateToOneWithWhereWithoutProduct_categoryInput | undefined;
}
