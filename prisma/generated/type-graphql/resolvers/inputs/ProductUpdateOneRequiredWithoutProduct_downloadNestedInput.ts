import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProductCreateOrConnectWithoutProduct_downloadInput } from "../inputs/ProductCreateOrConnectWithoutProduct_downloadInput";
import { ProductCreateWithoutProduct_downloadInput } from "../inputs/ProductCreateWithoutProduct_downloadInput";
import { ProductUpdateToOneWithWhereWithoutProduct_downloadInput } from "../inputs/ProductUpdateToOneWithWhereWithoutProduct_downloadInput";
import { ProductUpsertWithoutProduct_downloadInput } from "../inputs/ProductUpsertWithoutProduct_downloadInput";
import { ProductWhereUniqueInput } from "../inputs/ProductWhereUniqueInput";

@TypeGraphQL.InputType("ProductUpdateOneRequiredWithoutProduct_downloadNestedInput", {})
export class ProductUpdateOneRequiredWithoutProduct_downloadNestedInput {
  @TypeGraphQL.Field(_type => ProductCreateWithoutProduct_downloadInput, {
    nullable: true
  })
  create?: ProductCreateWithoutProduct_downloadInput | undefined;

  @TypeGraphQL.Field(_type => ProductCreateOrConnectWithoutProduct_downloadInput, {
    nullable: true
  })
  connectOrCreate?: ProductCreateOrConnectWithoutProduct_downloadInput | undefined;

  @TypeGraphQL.Field(_type => ProductUpsertWithoutProduct_downloadInput, {
    nullable: true
  })
  upsert?: ProductUpsertWithoutProduct_downloadInput | undefined;

  @TypeGraphQL.Field(_type => ProductWhereUniqueInput, {
    nullable: true
  })
  connect?: ProductWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => ProductUpdateToOneWithWhereWithoutProduct_downloadInput, {
    nullable: true
  })
  update?: ProductUpdateToOneWithWhereWithoutProduct_downloadInput | undefined;
}
