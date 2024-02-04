import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProductCreateOrConnectWithoutProduct_categoryInput } from "../inputs/ProductCreateOrConnectWithoutProduct_categoryInput";
import { ProductCreateWithoutProduct_categoryInput } from "../inputs/ProductCreateWithoutProduct_categoryInput";
import { ProductWhereUniqueInput } from "../inputs/ProductWhereUniqueInput";

@TypeGraphQL.InputType("ProductCreateNestedOneWithoutProduct_categoryInput", {})
export class ProductCreateNestedOneWithoutProduct_categoryInput {
  @TypeGraphQL.Field(_type => ProductCreateWithoutProduct_categoryInput, {
    nullable: true
  })
  create?: ProductCreateWithoutProduct_categoryInput | undefined;

  @TypeGraphQL.Field(_type => ProductCreateOrConnectWithoutProduct_categoryInput, {
    nullable: true
  })
  connectOrCreate?: ProductCreateOrConnectWithoutProduct_categoryInput | undefined;

  @TypeGraphQL.Field(_type => ProductWhereUniqueInput, {
    nullable: true
  })
  connect?: ProductWhereUniqueInput | undefined;
}
