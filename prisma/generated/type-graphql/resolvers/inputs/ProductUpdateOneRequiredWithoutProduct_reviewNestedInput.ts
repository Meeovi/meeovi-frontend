import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProductCreateOrConnectWithoutProduct_reviewInput } from "../inputs/ProductCreateOrConnectWithoutProduct_reviewInput";
import { ProductCreateWithoutProduct_reviewInput } from "../inputs/ProductCreateWithoutProduct_reviewInput";
import { ProductUpdateToOneWithWhereWithoutProduct_reviewInput } from "../inputs/ProductUpdateToOneWithWhereWithoutProduct_reviewInput";
import { ProductUpsertWithoutProduct_reviewInput } from "../inputs/ProductUpsertWithoutProduct_reviewInput";
import { ProductWhereUniqueInput } from "../inputs/ProductWhereUniqueInput";

@TypeGraphQL.InputType("ProductUpdateOneRequiredWithoutProduct_reviewNestedInput", {})
export class ProductUpdateOneRequiredWithoutProduct_reviewNestedInput {
  @TypeGraphQL.Field(_type => ProductCreateWithoutProduct_reviewInput, {
    nullable: true
  })
  create?: ProductCreateWithoutProduct_reviewInput | undefined;

  @TypeGraphQL.Field(_type => ProductCreateOrConnectWithoutProduct_reviewInput, {
    nullable: true
  })
  connectOrCreate?: ProductCreateOrConnectWithoutProduct_reviewInput | undefined;

  @TypeGraphQL.Field(_type => ProductUpsertWithoutProduct_reviewInput, {
    nullable: true
  })
  upsert?: ProductUpsertWithoutProduct_reviewInput | undefined;

  @TypeGraphQL.Field(_type => ProductWhereUniqueInput, {
    nullable: true
  })
  connect?: ProductWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => ProductUpdateToOneWithWhereWithoutProduct_reviewInput, {
    nullable: true
  })
  update?: ProductUpdateToOneWithWhereWithoutProduct_reviewInput | undefined;
}
